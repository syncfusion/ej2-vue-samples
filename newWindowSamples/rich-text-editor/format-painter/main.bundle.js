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
/******/ 		"rich-text-editor/format-painter/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/format-painter/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/format-painter/App.vue":
/*!*********************************************************!*\
  !*** ./Samples/rich-text-editor/format-painter/App.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_50070bb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=50070bb6&scoped=true& */ \"./Samples/rich-text-editor/format-painter/App.vue?vue&type=template&id=50070bb6&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/format-painter/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_50070bb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css& */ \"./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_50070bb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_50070bb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"50070bb6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/format-painter/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/format-painter/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./Samples/rich-text-editor/format-painter/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_50070bb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_50070bb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_50070bb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_50070bb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_50070bb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/format-painter/App.vue?vue&type=template&id=50070bb6&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/format-painter/App.vue?vue&type=template&id=50070bb6&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_50070bb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=50070bb6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=template&id=50070bb6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_50070bb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_50070bb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/format-painter/data-source.json":
/*!******************************************************************!*\
  !*** ./Samples/rich-text-editor/format-painter/data-source.json ***!
  \******************************************************************/
/*! exports provided: formatData, saveFormat, enterData, shiftEnterData, emailData, formatList, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formatData\\\":[{\\\"Id\\\":\\\"prompt\\\",\\\"format\\\":\\\"Prompt\\\"},{\\\"Id\\\":\\\"plainTextFormatting\\\",\\\"format\\\":\\\"Plain Text\\\"},{\\\"Id\\\":\\\"keepFormating\\\",\\\"format\\\":\\\"Keep Format\\\"},{\\\"Id\\\":\\\"cleanFormatting\\\",\\\"format\\\":\\\"Clean Format\\\"}],\\\"saveFormat\\\":[{\\\"Id\\\":\\\"Blob\\\",\\\"format\\\":\\\"blob\\\"},{\\\"Id\\\":\\\"Base64\\\",\\\"format\\\":\\\"base\\\"}],\\\"enterData\\\":[{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"}],\\\"shiftEnterData\\\":[{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"}],\\\"emailData\\\":[{\\\"Name\\\":\\\"Selma Rose\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"selma@gmail.com\\\"},{\\\"Name\\\":\\\"Maria\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"EmailId\\\":\\\"maria@gmail.com\\\"},{\\\"Name\\\":\\\"Russo Kay\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"russo@gmail.com\\\"},{\\\"Name\\\":\\\"Camden Kate\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"camden@gmail.com\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"robert@gmail.com\\\"},{\\\"Name\\\":\\\"Garth\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"garth@gmail.com\\\"},{\\\"Name\\\":\\\"Andrew James\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"james@gmail.com\\\"},{\\\"Name\\\":\\\"Olivia\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"olivia@gmail.com\\\"},{\\\"Name\\\":\\\"Sophia\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"EmailId\\\":\\\"sophia@gmail.com\\\"},{\\\"Name\\\":\\\"Margaret\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"margaret@gmail.com\\\"},{\\\"Name\\\":\\\"Ursula Ann\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/dp.png\\\",\\\"EmailId\\\":\\\"ursula@gmail.com\\\"},{\\\"Name\\\":\\\"Laura Grace\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"laura@gmail.com\\\"},{\\\"Name\\\":\\\"Albert\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/pic03.png\\\",\\\"EmailId\\\":\\\"albert@gmail.com\\\"},{\\\"Name\\\":\\\"William\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"william@gmail.com\\\"}],\\\"formatList\\\":[{\\\"formatName\\\":\\\"Text\\\",\\\"command\\\":\\\"P\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-btn-icon e-text e-icons\\\",\\\"description\\\":\\\"Writing with paragraphs\\\"},{\\\"formatName\\\":\\\"Quotation\\\",\\\"command\\\":\\\"BlockQuote\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons block-view\\\",\\\"description\\\":\\\"Insert a quote or citation\\\"},{\\\"formatName\\\":\\\"Heading 1\\\",\\\"command\\\":\\\"H1\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h1-view\\\",\\\"description\\\":\\\"Use this for a top level heading\\\"},{\\\"formatName\\\":\\\"Heading 2\\\",\\\"command\\\":\\\"H2\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h2-view\\\",\\\"description\\\":\\\"Use this for key sections\\\"},{\\\"formatName\\\":\\\"Heading 3\\\",\\\"command\\\":\\\"H3\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h3-view\\\",\\\"description\\\":\\\"Use this for sub sections and group headings\\\"},{\\\"formatName\\\":\\\"Heading 4\\\",\\\"command\\\":\\\"H4\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h4-view\\\",\\\"description\\\":\\\"Use this for deep headings\\\"},{\\\"formatName\\\":\\\"Numbered list\\\",\\\"command\\\":\\\"OL\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons e-list-ordered icon\\\",\\\"description\\\":\\\"Create an ordered list\\\"},{\\\"formatName\\\":\\\"Bulleted list\\\",\\\"command\\\":\\\"UL\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons e-list-unordered icon\\\",\\\"description\\\":\\\"Create an unordered list\\\"},{\\\"formatName\\\":\\\"Table\\\",\\\"command\\\":\\\"CreateTable\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons e-table icon\\\",\\\"description\\\":\\\"Insert a table\\\"},{\\\"formatName\\\":\\\"Emoji\\\",\\\"command\\\":\\\"Emoji\\\",\\\"formatType\\\":\\\"Inline\\\",\\\"icon\\\":\\\"e-icons emoji\\\",\\\"description\\\":\\\"Use emojis to express ideas and emoticons\\\"},{\\\"formatName\\\":\\\"Image\\\",\\\"command\\\":\\\"Image\\\",\\\"formatType\\\":\\\"Media\\\",\\\"icon\\\":\\\"e-icons e-image icon\\\",\\\"description\\\":\\\"Add image to your page\\\"},{\\\"formatName\\\":\\\"Audio\\\",\\\"command\\\":\\\"Audio\\\",\\\"formatType\\\":\\\"Media\\\",\\\"icon\\\":\\\"e-icons e-audio icon\\\",\\\"description\\\":\\\"Add audio to your page\\\"},{\\\"formatName\\\":\\\"Video\\\",\\\"command\\\":\\\"Video\\\",\\\"formatType\\\":\\\"Media\\\",\\\"icon\\\":\\\"e-icons e-video icon\\\",\\\"description\\\":\\\"Add video to your page\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/data-source.json?");

/***/ }),

/***/ "./Samples/rich-text-editor/format-painter/main.js":
/*!*********************************************************!*\
  !*** ./Samples/rich-text-editor/format-painter/main.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/format-painter/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control_wrapper[data-v-50070bb6] {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.control-section[data-v-50070bb6] {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n    position: relative;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ditor-vue-samples_release_21.1.1/Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,qBAAqB;IACrB,mBAAmB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control_wrapper[data-v-50070bb6] {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.control-section[data-v-50070bb6] {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n    position: relative;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/format-painter/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _data_source_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source.json */ \"./Samples/rich-text-editor/format-painter/data-source.json\");\nvar _data_source_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-source.json */ \"./Samples/rich-text-editor/format-painter/data-source.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__[\"TextBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            toolbarSettings : {\n                items: ['FormatPainter', 'Bold', 'Italic', 'Underline', 'StrikeThrough',\n                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', 'SuperScript', 'SubScript', '|',\n                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',\n                'Outdent', 'Indent', '|', 'CreateTable', 'CreateLink', 'Image', '|', 'Undo', 'Redo','SourceCode', 'FullScreen'] \n            }\n        }\n    },\n    methods : {\n        setAllowedFormats: function(e) {\n            this.$refs.formatPainterRTE.formatPainterSettings.allowedFormats = e.value;\n\n        },\n        setdeniedFormats: function (e) {\n            this.$refs.formatPainterRTE.formatPainterSettings.deniedFormats = e.value;\n\n        }\n    },\n    provide : {\n        richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"FormatPainter\"] ,_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"]]\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=template&id=50070bb6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/format-painter/App.vue?vue&type=template&id=50070bb6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\"div\", { staticClass: \"default-section\" }, [\n          _c(\n            \"div\",\n            { attrs: { id: \"formatPainterRTE\" } },\n            [\n              _c(\n                \"ejs-richtexteditor\",\n                {\n                  ref: \"formatPainterRTE\",\n                  attrs: { toolbarSettings: _vm.toolbarSettings },\n                },\n                [\n                  _c(\"h3\", [_vm._v(\"Format Painter\")]),\n                  _vm._v(\" \"),\n                  _c(\"p\", [\n                    _vm._v(\n                      \"\\n                        A Format Painter is a Rich Text Editor feature allowing users to quickly \\n                        \"\n                    ),\n                    _c(\n                      \"span\",\n                      {\n                        staticStyle: {\n                          \"background-color\": \"rgb(198, 140, 83)\",\n                        },\n                      },\n                      [_c(\"strong\", [_vm._v(\"copy\")])]\n                    ),\n                    _vm._v(\n                      \"\\n                        and \\n                        \"\n                    ),\n                    _c(\n                      \"span\",\n                      {\n                        staticStyle: {\n                          \"background-color\": \"rgb(198, 140, 83)\",\n                        },\n                      },\n                      [_c(\"strong\", [_vm._v(\"paste\")])]\n                    ),\n                    _vm._v(\n                      \"\\n                        formatting from one text to another. With a rich text editor, utilize the format painter as follows:\\n                    \"\n                    ),\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"ul\", [\n                    _c(\"li\", [\n                      _vm._v(\n                        \"\\n                            Select the text whose format you want to copy.\\n                        \"\n                      ),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _vm._v(\"\\n                            Click on the \"),\n                      _c(\"strong\", [_c(\"em\", [_vm._v(\"Format Painter\")])]),\n                      _vm._v(\n                        \" button in the toolbar. It may look like a paintbrush icon.\\n                        \"\n                      ),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _vm._v(\n                        \"\\n                            The cursor will change to a \"\n                      ),\n                      _c(\"strong\", [_vm._v(\"paintbrush\")]),\n                      _vm._v(\n                        \" icon. Click and drag the cursor over the text you want to apply the copied format.\\n                        \"\n                      ),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _vm._v(\n                        \"\\n                            Release the mouse button to apply the format.\\n                        \"\n                      ),\n                    ]),\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"p\", [\n                    _vm._v(\n                      \"\\n                        Using the format painter in a rich text editor can save you time when formatting a large document, You can quickly \\n                        copy and apply formatting\\n                        to \"\n                    ),\n                    _c(\n                      \"span\",\n                      {\n                        staticStyle: {\n                          \"background-color\": \"rgb(198, 140, 83)\",\n                        },\n                      },\n                      [_c(\"strong\", [_vm._v(\"multiple sections\")])]\n                    ),\n                    _vm._v(\n                      \". \\n                        It's a helpful tool for anyone who works with text editing regularly, such as writers, editors, and content creators.\\n                    \"\n                    ),\n                  ]),\n                ]\n              ),\n            ],\n            1\n          ),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"div\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n        _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"td\", [\n                _c(\"div\", [_vm._v(\"Allowed Formats\")]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-textbox\", {\n                      attrs: {\n                        floatLabelType: \"Never\",\n                        cssClass: \"e-outline\",\n                        placeholder: \"span; strong; em; sup, sub; code;\",\n                        blur: _vm.setAllowedFormats,\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", [\n                _c(\"div\", [_vm._v(\"Denied Formats\")]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-textbox\", {\n                      attrs: {\n                        floatLabelType: \"Never\",\n                        cssClass: \"e-outline\",\n                        placeholder:\n                          \"span(important)[title]{background-color,color};\",\n                        blur: _vm.setdeniedFormats,\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n            ]),\n          ]),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This demo demonstrates the Format Painter feature of the Rich Text Editor component. With Format Painter, copy and apply styles from one content to another.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"b\", [_vm._v(\"Format Painter\")]),\n        _vm._v(\n          \" feature allows you to copy the formats and apply them to content without formatting thus saving time to reformat the content.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"\\n                    Format painter can be accessed via the toolbar or the keyboard shortcuts.\\n                \"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"\\n                    The sticky mode can be enabled by double-clicking the toolbar button, and it can be utilized to apply a format to multiple locations.            \\n                \"\n          ),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Keyboard Shortcut\")])]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"kbd\", [_vm._v(\"CTRL + SHIFT + C\")]),\n          _vm._v(\n            \" - Copy the selection format or current range.\\n            \"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"kbd\", [_vm._v(\"CTRL + SHIFT + V\")]),\n          _vm._v(\" - Paint the copied format.\\n            \"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"kbd\", [_vm._v(\"ESC\")]),\n          _vm._v(\" - Remove the previously copied format.\\n            \"),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The following settings are available to customize the format painter in the \"\n        ),\n        _c(\"code\", [_vm._v(\"formatPainterSettings\")]),\n        _vm._v(\" property.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"p\", [\n            _vm._v(\"Fill the \"),\n            _c(\"code\", [_vm._v(\"Allowed Formats\")]),\n            _vm._v(\n              \" input with selectors only whose format styles will be allowed. For example: \"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"ul\", [\n          _c(\"li\", [\n            _c(\"code\", [_vm._v(\"span; strong; em; \")]),\n            _vm._v(\n              \" as the input allows only the span, strong, and em format styles to be copied.\\n                    \"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"p\", [\n            _vm._v(\"Fill the \"),\n            _c(\"code\", [_vm._v(\"Denied Formats\")]),\n            _vm._v(\n              \" input with selectors only whose format styles will be explicitly prohibited. For example:\"\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"code\", [\n                _vm._v(\"span(important)[title]{background-color,color}\"),\n              ]),\n              _vm._v(\" as the input will remove only the \"),\n              _c(\"code\", [_vm._v(\"important\")]),\n              _vm._v(\" class, \\n                        \"),\n              _c(\"code\", [_vm._v(\"title\")]),\n              _vm._v(\" attribute, \"),\n              _c(\"code\", [_vm._v(\"color,\")]),\n              _vm._v(\" and \"),\n              _c(\"code\", [_vm._v(\"background-color\")]),\n              _vm._v(\n                \"\\n                        of the span element. All other format styles will be copied. \\n                    \"\n              ),\n            ]),\n          ]),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Injecting Modules:\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The Format Painter feature is segregated as an individual module. To use the format painter you can import and then inject it into the RichTextEditor.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n            For example, to use the \"),\n        _c(\"code\", [_vm._v(\"'FormatPainter'\")]),\n        _vm._v(\" feature we need to inject by using \"),\n        _c(\"code\", [\n          _vm._v(\"HtmlEditor, Toolbar, QuickToolbar, FormatPainter\"),\n        ]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section..\\n        \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/format-painter/App.vue?vue&type=style&index=0&id=50070bb6&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"de43dc30\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/format-painter/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });