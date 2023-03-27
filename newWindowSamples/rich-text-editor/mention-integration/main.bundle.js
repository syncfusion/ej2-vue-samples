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
/******/ 		"rich-text-editor/mention-integration/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/mention-integration/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/mention-integration/App.vue":
/*!**************************************************************!*\
  !*** ./Samples/rich-text-editor/mention-integration/App.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f351da38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f351da38&scoped=true& */ \"./Samples/rich-text-editor/mention-integration/App.vue?vue&type=template&id=f351da38&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/mention-integration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_f351da38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css& */ \"./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f351da38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f351da38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f351da38\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/mention-integration/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/mention-integration/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./Samples/rich-text-editor/mention-integration/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f351da38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f351da38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f351da38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f351da38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f351da38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/mention-integration/App.vue?vue&type=template&id=f351da38&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/mention-integration/App.vue?vue&type=template&id=f351da38&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f351da38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f351da38&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=template&id=f351da38&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f351da38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f351da38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/mention-integration/data-source.json":
/*!***********************************************************************!*\
  !*** ./Samples/rich-text-editor/mention-integration/data-source.json ***!
  \***********************************************************************/
/*! exports provided: formatData, saveFormat, enterData, shiftEnterData, emailData, formatList, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formatData\\\":[{\\\"Id\\\":\\\"prompt\\\",\\\"format\\\":\\\"Prompt\\\"},{\\\"Id\\\":\\\"plainTextFormatting\\\",\\\"format\\\":\\\"Plain Text\\\"},{\\\"Id\\\":\\\"keepFormating\\\",\\\"format\\\":\\\"Keep Format\\\"},{\\\"Id\\\":\\\"cleanFormatting\\\",\\\"format\\\":\\\"Clean Format\\\"}],\\\"saveFormat\\\":[{\\\"Id\\\":\\\"Blob\\\",\\\"format\\\":\\\"blob\\\"},{\\\"Id\\\":\\\"Base64\\\",\\\"format\\\":\\\"base\\\"}],\\\"enterData\\\":[{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"}],\\\"shiftEnterData\\\":[{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"}],\\\"emailData\\\":[{\\\"Name\\\":\\\"Selma Rose\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"selma@gmail.com\\\"},{\\\"Name\\\":\\\"Maria\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"EmailId\\\":\\\"maria@gmail.com\\\"},{\\\"Name\\\":\\\"Russo Kay\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"russo@gmail.com\\\"},{\\\"Name\\\":\\\"Camden Kate\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"camden@gmail.com\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"robert@gmail.com\\\"},{\\\"Name\\\":\\\"Garth\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"garth@gmail.com\\\"},{\\\"Name\\\":\\\"Andrew James\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"james@gmail.com\\\"},{\\\"Name\\\":\\\"Olivia\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"olivia@gmail.com\\\"},{\\\"Name\\\":\\\"Sophia\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"EmailId\\\":\\\"sophia@gmail.com\\\"},{\\\"Name\\\":\\\"Margaret\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"margaret@gmail.com\\\"},{\\\"Name\\\":\\\"Ursula Ann\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/dp.png\\\",\\\"EmailId\\\":\\\"ursula@gmail.com\\\"},{\\\"Name\\\":\\\"Laura Grace\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"laura@gmail.com\\\"},{\\\"Name\\\":\\\"Albert\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/pic03.png\\\",\\\"EmailId\\\":\\\"albert@gmail.com\\\"},{\\\"Name\\\":\\\"William\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"william@gmail.com\\\"}],\\\"formatList\\\":[{\\\"formatName\\\":\\\"Text\\\",\\\"command\\\":\\\"P\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-btn-icon e-text e-icons\\\",\\\"description\\\":\\\"Writing with paragraphs\\\"},{\\\"formatName\\\":\\\"Quotation\\\",\\\"command\\\":\\\"BlockQuote\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons block-view\\\",\\\"description\\\":\\\"Insert a quote or citation\\\"},{\\\"formatName\\\":\\\"Heading 1\\\",\\\"command\\\":\\\"H1\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h1-view\\\",\\\"description\\\":\\\"Use this for a top level heading\\\"},{\\\"formatName\\\":\\\"Heading 2\\\",\\\"command\\\":\\\"H2\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h2-view\\\",\\\"description\\\":\\\"Use this for key sections\\\"},{\\\"formatName\\\":\\\"Heading 3\\\",\\\"command\\\":\\\"H3\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h3-view\\\",\\\"description\\\":\\\"Use this for sub sections and group headings\\\"},{\\\"formatName\\\":\\\"Heading 4\\\",\\\"command\\\":\\\"H4\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons h4-view\\\",\\\"description\\\":\\\"Use this for deep headings\\\"},{\\\"formatName\\\":\\\"Numbered list\\\",\\\"command\\\":\\\"OL\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons e-list-ordered icon\\\",\\\"description\\\":\\\"Create an ordered list\\\"},{\\\"formatName\\\":\\\"Bulleted list\\\",\\\"command\\\":\\\"UL\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons e-list-unordered icon\\\",\\\"description\\\":\\\"Create an unordered list\\\"},{\\\"formatName\\\":\\\"Table\\\",\\\"command\\\":\\\"CreateTable\\\",\\\"formatType\\\":\\\"Basic blocks\\\",\\\"icon\\\":\\\"e-icons e-table icon\\\",\\\"description\\\":\\\"Insert a table\\\"},{\\\"formatName\\\":\\\"Emoji\\\",\\\"command\\\":\\\"Emoji\\\",\\\"formatType\\\":\\\"Inline\\\",\\\"icon\\\":\\\"e-icons emoji\\\",\\\"description\\\":\\\"Use emojis to express ideas and emoticons\\\"},{\\\"formatName\\\":\\\"Image\\\",\\\"command\\\":\\\"Image\\\",\\\"formatType\\\":\\\"Media\\\",\\\"icon\\\":\\\"e-icons e-image icon\\\",\\\"description\\\":\\\"Add image to your page\\\"},{\\\"formatName\\\":\\\"Audio\\\",\\\"command\\\":\\\"Audio\\\",\\\"formatType\\\":\\\"Media\\\",\\\"icon\\\":\\\"e-icons e-audio icon\\\",\\\"description\\\":\\\"Add audio to your page\\\"},{\\\"formatName\\\":\\\"Video\\\",\\\"command\\\":\\\"Video\\\",\\\"formatType\\\":\\\"Media\\\",\\\"icon\\\":\\\"e-icons e-video icon\\\",\\\"description\\\":\\\"Add video to your page\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/data-source.json?");

/***/ }),

/***/ "./Samples/rich-text-editor/mention-integration/main.js":
/*!**************************************************************!*\
  !*** ./Samples/rich-text-editor/mention-integration/main.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/mention-integration/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#mention-TemplateList[data-v-f351da38] {\\n        position: relative;\\n        display: inline-block;\\n        padding: 2px;\\n}\\n.mentionNameList .person[data-v-f351da38], .mentionNameList.email[data-v-f351da38] {\\n        display: block;\\n        line-height: 20px;\\n        text-indent: 5px;\\n}\\n.mentionNameList .person[data-v-f351da38] {\\n        font-size: 16px;\\n}\\n.mentionEmpImage[data-v-f351da38] {\\n        display: inline-block;\\n        width: 46px;\\n        height: 46px;\\n        padding: 3px;\\n        border-radius: 25px;\\n}\\n#mention-TemplateList .e-badge-success[data-v-f351da38] {\\n        left: 76%;\\n        bottom: 4px;\\n        top: auto;\\n}\\n#mention_integration_rte-edit-view_popup .e-dropdownbase .e-list-item[data-v-f351da38] {\\n        line-height: 8px;\\n}\\n#mention-TemplateList .e-badge-success[data-v-f351da38] {\\n        background-color: #4d841d;\\n\\t\\tcolor: #fff;\\n}\\n#mention-TemplateList .e-badge-success.away[data-v-f351da38] {\\n        background-color: #fedd2d;\\n\\t\\tcolor: #fff;\\n}\\n#mention-TemplateList .e-badge-success.busy[data-v-f351da38] {\\n        background-color: #de1a1a;\\n\\t\\tcolor: #fff;\\n}\\n#mention-TemplateList .e-badge.e-badge-dot[data-v-f351da38] {\\n        height: 10px;\\n        width: 10px;\\n}\\n#mention_integration .e-mention-chip[data-v-f351da38]{\\n        cursor: pointer;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ditor-vue-samples_release_21.1.1/Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,mBAAmB;QACnB,sBAAsB;QACtB,aAAa;CACpB;AACD;QACQ,eAAe;QACf,kBAAkB;QAClB,iBAAiB;CACxB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,sBAAsB;QACtB,YAAY;QACZ,aAAa;QACb,aAAa;QACb,oBAAoB;CAC3B;AACD;QACQ,UAAU;QACV,YAAY;QACZ,UAAU;CACjB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,0BAA0B;EAChC,YAAY;CACb;AACD;QACQ,0BAA0B;EAChC,YAAY;CACb;AACD;QACQ,0BAA0B;EAChC,YAAY;CACb;AACD;QACQ,aAAa;QACb,YAAY;CACnB;AACD;QACQ,gBAAgB;CACvB\",\"file\":\"App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#mention-TemplateList[data-v-f351da38] {\\n        position: relative;\\n        display: inline-block;\\n        padding: 2px;\\n}\\n.mentionNameList .person[data-v-f351da38], .mentionNameList.email[data-v-f351da38] {\\n        display: block;\\n        line-height: 20px;\\n        text-indent: 5px;\\n}\\n.mentionNameList .person[data-v-f351da38] {\\n        font-size: 16px;\\n}\\n.mentionEmpImage[data-v-f351da38] {\\n        display: inline-block;\\n        width: 46px;\\n        height: 46px;\\n        padding: 3px;\\n        border-radius: 25px;\\n}\\n#mention-TemplateList .e-badge-success[data-v-f351da38] {\\n        left: 76%;\\n        bottom: 4px;\\n        top: auto;\\n}\\n#mention_integration_rte-edit-view_popup .e-dropdownbase .e-list-item[data-v-f351da38] {\\n        line-height: 8px;\\n}\\n#mention-TemplateList .e-badge-success[data-v-f351da38] {\\n        background-color: #4d841d;\\n\\t\\tcolor: #fff;\\n}\\n#mention-TemplateList .e-badge-success.away[data-v-f351da38] {\\n        background-color: #fedd2d;\\n\\t\\tcolor: #fff;\\n}\\n#mention-TemplateList .e-badge-success.busy[data-v-f351da38] {\\n        background-color: #de1a1a;\\n\\t\\tcolor: #fff;\\n}\\n#mention-TemplateList .e-badge.e-badge-dot[data-v-f351da38] {\\n        height: 10px;\\n        width: 10px;\\n}\\n#mention_integration .e-mention-chip[data-v-f351da38]{\\n        cursor: pointer;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _data_source_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source.json */ \"./Samples/rich-text-editor/mention-integration/data-source.json\");\nvar _data_source_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-source.json */ \"./Samples/rich-text-editor/mention-integration/data-source.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"MentionPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n          data: _data_source_json__WEBPACK_IMPORTED_MODULE_3__[\"emailData\"],\n          fieldsData: { text: 'Name' },\n        };\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"]]\n    },\n    methods: {\n       onActionBegin: function(args) {\n            if (args.requestType === 'EnterAction') {\n                args.cancel = true;\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=template&id=f351da38&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=template&id=f351da38&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"sample-container\" },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"default-section\" },\n            [\n              _c(\n                \"ejs-richtexteditor\",\n                {\n                  attrs: {\n                    id: \"mention_integration\",\n                    placeholder: \"Type @ and tag the name\",\n                    actionBegin: _vm.onActionBegin,\n                  },\n                },\n                [\n                  _c(\"p\", [\n                    _vm._v(\"Hello \"),\n                    _c(\n                      \"span\",\n                      {\n                        staticClass: \"e-mention-chip\",\n                        attrs: { contenteditable: \"false\" },\n                      },\n                      [\n                        _c(\"a\", { attrs: { title: \"maria@gmail.com\" } }, [\n                          _vm._v(\"@Maria\"),\n                        ]),\n                      ]\n                    ),\n                    _vm._v(\"​\"),\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"p\", [\n                    _vm._v(\n                      \"Welcome to the mention integration with rich text editor demo. Type \"\n                    ),\n                    _c(\"code\", [_vm._v(\"@\")]),\n                    _vm._v(\n                      \" character and tag user from the suggestion list. \"\n                    ),\n                  ]),\n                ]\n              ),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\"ejs-mention\", {\n            attrs: {\n              id: \"mentionEditor\",\n              target: \"#mention_integration_rte-edit-view\",\n              suggestionCount: 8,\n              showMentionChar: false,\n              allowSpaces: true,\n              dataSource: _vm.data,\n              fields: _vm.fieldsData,\n              popupWidth: \"250px\",\n              popupHeight: \"200px\",\n              itemTemplate: \"iTemplate\",\n              displayTemplate: \"dTemplate\",\n            },\n            scopedSlots: _vm._u([\n              {\n                key: \"iTemplate\",\n                fn: function (ref) {\n                  var data = ref.data\n                  return [\n                    _c(\"table\", [\n                      _c(\"tr\", [\n                        _c(\"td\", [\n                          _c(\"div\", { attrs: { id: \"mention-TemplateList\" } }, [\n                            _c(\"img\", {\n                              staticClass: \"mentionEmpImage\",\n                              attrs: { src: data.Eimg, alt: \"employee\" },\n                            }),\n                            _c(\"span\", {\n                              class:\n                                \"e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom\" +\n                                data.Status,\n                            }),\n                          ]),\n                        ]),\n                        _c(\"td\", { staticClass: \"mentionNameList\" }, [\n                          _c(\"span\", { staticClass: \"person\" }, [\n                            _vm._v(_vm._s(data.Name)),\n                          ]),\n                          _c(\"span\", { staticClass: \"email\" }, [\n                            _vm._v(_vm._s(data.EmailId)),\n                          ]),\n                        ]),\n                      ]),\n                    ]),\n                  ]\n                },\n              },\n              {\n                key: \"dTemplate\",\n                fn: function (ref) {\n                  var data = ref.data\n                  return [\n                    _c(\"a\", { attrs: { title: data.EmailId } }, [\n                      _vm._v(\"@\" + _vm._s(data.Name)),\n                    ]),\n                  ]\n                },\n              },\n            ]),\n          }),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This example shows how to integrate @mention component within Rich Text Editor component. Type \"\n        ),\n        _c(\"code\", [_vm._v(\"@\")]),\n        _vm._v(\" character and select a user from the suggestion list.\"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \" The @Mention is a component used to display a list of items that users can select or tag from the suggested list. In this demo, configured the following properties with popup dimensions.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"allowSpaces\")]),\n          _vm._v(\" - Allows to search a word with space.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"suggestionCount\")]),\n          _vm._v(\" - Control the items in suggestion list.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"itemTemplate\")]),\n          _vm._v(\n            \" - Used to display the customized appearance in suggestion list.\"\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/mention-integration/App.vue?vue&type=style&index=0&id=f351da38&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7f46d422\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/mention-integration/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });