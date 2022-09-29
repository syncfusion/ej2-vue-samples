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
/******/ 		"rich-text-editor/image/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/image/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/image/App.vue":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=72e1178e& */ \"./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_72e1178e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=72e1178e&lang=css& */ \"./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/image/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_72e1178e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=72e1178e&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_72e1178e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_72e1178e_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_72e1178e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_72e1178e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&":
/*!*******************************************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=72e1178e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/data-source.json":
/*!*********************************************************!*\
  !*** ./Samples/rich-text-editor/image/data-source.json ***!
  \*********************************************************/
/*! exports provided: formatData, saveFormat, enterData, shiftEnterData, emailData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formatData\\\":[{\\\"Id\\\":\\\"prompt\\\",\\\"format\\\":\\\"Prompt\\\"},{\\\"Id\\\":\\\"plainTextFormatting\\\",\\\"format\\\":\\\"Plain Text\\\"},{\\\"Id\\\":\\\"keepFormating\\\",\\\"format\\\":\\\"Keep Format\\\"},{\\\"Id\\\":\\\"cleanFormatting\\\",\\\"format\\\":\\\"Clean Format\\\"}],\\\"saveFormat\\\":[{\\\"Id\\\":\\\"Blob\\\",\\\"format\\\":\\\"blob\\\"},{\\\"Id\\\":\\\"Base64\\\",\\\"format\\\":\\\"base\\\"}],\\\"enterData\\\":[{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"}],\\\"shiftEnterData\\\":[{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"}],\\\"emailData\\\":[{\\\"Name\\\":\\\"Selma Rose\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"selma@gmail.com\\\"},{\\\"Name\\\":\\\"Maria\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"EmailId\\\":\\\"maria@gmail.com\\\"},{\\\"Name\\\":\\\"Russo Kay\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"russo@gmail.com\\\"},{\\\"Name\\\":\\\"Camden Kate\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"camden@gmail.com\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/dp.png\\\",\\\"EmailId\\\":\\\"robert@gmail.com\\\"},{\\\"Name\\\":\\\"Garth\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"garth@gmail.com\\\"},{\\\"Name\\\":\\\"Andrew James\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/pic04.png\\\",\\\"EmailId\\\":\\\"james@gmail.com\\\"},{\\\"Name\\\":\\\"Olivia\\\",\\\"Status\\\":\\\"busy\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"olivia@gmail.com\\\"},{\\\"Name\\\":\\\"Sophia\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"EmailId\\\":\\\"sophia@gmail.com\\\"},{\\\"Name\\\":\\\"Margaret\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"margaret@gmail.com\\\"},{\\\"Name\\\":\\\"Ursula Ann\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/dp.png\\\",\\\"EmailId\\\":\\\"ursula@gmail.com\\\"},{\\\"Name\\\":\\\"Laura Grace\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"laura@gmail.com\\\"},{\\\"Name\\\":\\\"Albert\\\",\\\"Status\\\":\\\"active\\\",\\\"Eimg\\\":\\\"styles/images/Employees/pic03.png\\\",\\\"EmailId\\\":\\\"albert@gmail.com\\\"},{\\\"Name\\\":\\\"William\\\",\\\"Status\\\":\\\"away\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"william@gmail.com\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/data-source.json?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/main.js":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/image/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/image/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E341\\\";\\n}\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E354\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E752\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E778\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E7BD\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E7B9\\\";\\n}\\n.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E713\\\";\\n}\\n.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E755\\\";\\n}\\n.property-panel-table div {\\n    padding : 10px;\\n}\\n.checkbox-container{\\n    padding-left: 0px !important;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-6TJ7G4YSVALEG4EIDTKDEPCDDSVR3MGGTDKPG3AWYLVZKLLE52QA/Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&id=72e1178e&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;;IAEI,iBAAiB;CACpB;AACD;;IAEI,iBAAiB;CACpB;AACD;;;;IAII,iBAAiB;CACpB;AACD;;;;IAII,iBAAiB;CACpB;AACD;IACI,eAAe;CAClB;AACD;IACI,6BAA6B;CAChC\",\"file\":\"App.vue?vue&type=style&index=0&id=72e1178e&lang=css&\",\"sourcesContent\":[\"\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e341\\\";\\n}\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e354\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e752\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e778\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e7bd\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e7b9\\\";\\n}\\n.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before,\\n.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e713\\\";\\n}\\n.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before,\\n.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e755\\\";\\n}\\n.property-panel-table div {\\n    padding : 10px;\\n}\\n.checkbox-container{\\n    padding-left: 0px !important;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _data_source_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source.json */ \"./Samples/rich-text-editor/image/data-source.json\");\nvar _data_source_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-source.json */ \"./Samples/rich-text-editor/image/data-source.json\", 1);\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"CheckBoxPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n             height: '200px',\n            formatData: _data_source_json__WEBPACK_IMPORTED_MODULE_3__[\"saveFormat\"],\n            fields: { text: 'Id', value: 'Id' },\n            value: 'Blob',\n            enableAutoUrl : false,\n             insertImageSettings: {\n                saveFormat: 'Blob'\n            },\n    quickToolbarSettings: {\n            image: [\n                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',\n                'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',\n                {\n                    tooltipText: 'Rotate Left',\n                    template: '<button class=\"e-tbar-btn e-btn\" id=\"roatateLeft\"><span class=\"e-btn-icon e-icons e-rotate-left\"></span>'\n                },\n                {\n                    tooltipText: 'Rotate Right',\n                    template: '<button class=\"e-tbar-btn e-btn\" id=\"roatateRight\"><span class=\"e-btn-icon e-icons e-rotate-right\"></span>'\n                }\n            ]\n        }\n        };\n        },\n        methods: {\n            onToolbarClick: function(e) {\n            var nodeObj = new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"NodeSelection\"]();\n            var range = nodeObj.getRange(this.$refs.rteObj.ej2Instances.contentModule.getDocument());\n            var imgEle = nodeObj.getNodeCollection(range)[0];\n            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_5__[\"isNullOrUndefined\"])(e.item)) {\n                if (e.item.tooltipText === 'Rotate Right') {\n                    var transform = (imgEle.style.transform === '') ? 0 :\n                        parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);\n                    imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';\n                    this.$refs.rteObj.ej2Instances.formatter.saveData();\n                    this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);\n                }\n                else if (e.item.tooltipText === 'Rotate Left') {\n                    var transform = (imgEle.style.transform === '') ? 0 :\n                        Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));\n                    imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';\n                    defaulthis.$refs.rteObj.ej2Instances.tRTE.formatter.saveData();\n                    this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);\n                }\n            }\n            },\n             formatChange: function() {\n             if (this.$refs.formatOptionInstance.ej2Instances.value === 'Base64') {\n                this.$refs.rteObj.ej2Instances.insertImageSettings.saveFormat = 'Base64';\n            } else {\n                this.$refs.rteObj.ej2Instances.insertImageSettings.saveFormat = 'Blob';\n            }\n            this.$refs.rteObj.ej2Instances.dataBind();\n        },\n        changeCheck: function(args) {\n           this.$refs.rteObj.ej2Instances.enableAutoUrl = args.checked;\n           this.$refs.rteObj.ej2Instances.dataBind();\n    },\n        },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"],  _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\",staticStyle:{\"overflow\":\"hidden\"}},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"control-wrapper\"},[_c('div',{staticClass:\"sample-container\"},[_c('div',{staticClass:\"default-section\"},[_c('ejs-richtexteditor',{ref:\"rteObj\",attrs:{\"enableAutoUrl\":_vm.enableAutoUrl,\"insertImageSettings\":_vm.insertImageSettings,\"quickToolbarSettings\":_vm.quickToolbarSettings,\"toolbarClick\":_vm.onToolbarClick}},[_c('p',[_vm._v(\"Rich Text Editor allows inserting images from online sources as well as the local computers where you want to insert the image in your content.\")]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Get started Quick Toolbar to click on the image\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"It is possible to add custom style on the selected image inside the Rich Text Editor through the quick toolbar.\")]),_vm._v(\" \"),_c('img',{staticStyle:{\"width\":\"300px\",\"height\":\"300px\",\"transform\":\"rotate(0deg)\"},attrs:{\"id\":\"rteImageID\",\"alt\":\"Logo\",\"src\":__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/RTEImage-Feather.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))}})])],1)])])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_c('div',{attrs:{\"title\":\"Properties\",\"id\":\"property\"}},[_c('table',{attrs:{\"title\":\"Properties\",\"id\":\"property\"}},[_c('tbody',[_c('tr',[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',{staticClass:\"checkbox-container\"},[_c('ejs-checkbox',{ref:\"checkInstance\",attrs:{\"change\":_vm.changeCheck,\"id\":\"enablehtml\"}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(1),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{ref:\"formatOptionInstance\",attrs:{\"dataSource\":_vm.formatData,\"fields\":_vm.fields,\"popupHeight\":_vm.height,\"change\":_vm.formatChange,\"value\":_vm.value}})],1)])])])])])])]),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_vm._m(3)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Enable AutoUrl\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Format Option \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the option to insert the image to the Rich Text Editor content. Click the image button from the\\n            toolbar item to insert the image.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"Image tools used to insert an image to the Rich Text Editor and click on the image to easily customize the image using quick toolbar. \\n    The quick toolbar has the following items\")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"Replace\")]),_vm._v(\" – can replace the image with some other image.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Align\")]),_vm._v(\" – Align the image with left, right and justify.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Image captions\")]),_vm._v(\" – set the captions for the image.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Change size\")]),_vm._v(\" – modify width and height of image.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Delete\")]),_vm._v(\" – delete the image.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Link\")]),_vm._v(\" – provide the link to the image.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Display\")]),_vm._v(\" - display the image as inline or with break.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Alternate text\")]),_vm._v(\" – provide the alternative text for the image if the image is not present in the location.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Resize\")]),_vm._v(\" – can resize the image dimension with resize options.\")])]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Injecting Module:\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"),_c('code',[_vm._v(\"Toolbar, Link, Image, HtmlEditor, QuickToolbar\")]),_vm._v(\" into the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });