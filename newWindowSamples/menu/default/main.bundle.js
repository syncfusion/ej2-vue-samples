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
/******/ 		"menu/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/menu/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/menu/default/App.vue":
/*!**************************************!*\
  !*** ./Samples/menu/default/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_74aa56f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=74aa56f7& */ \"./Samples/menu/default/App.vue?vue&type=template&id=74aa56f7&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/menu/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/menu/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_74aa56f7___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_74aa56f7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/menu/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?");

/***/ }),

/***/ "./Samples/menu/default/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/menu/default/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/menu/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?");

/***/ }),

/***/ "./Samples/menu/default/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./Samples/menu/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?");

/***/ }),

/***/ "./Samples/menu/default/App.vue?vue&type=template&id=74aa56f7&":
/*!*********************************************************************!*\
  !*** ./Samples/menu/default/App.vue?vue&type=template&id=74aa56f7& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_74aa56f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=74aa56f7& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/default/App.vue?vue&type=template&id=74aa56f7&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_74aa56f7___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_74aa56f7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?");

/***/ }),

/***/ "./Samples/menu/default/main.js":
/*!**************************************!*\
  !*** ./Samples/menu/default/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/menu/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/menu/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/default/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/**\\n* ej2 Menu styles\\n*/\\n@font-face {\\n    font-family: 'em-icons';\\n    src:\\n    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.e-menu-icons { \\n    font-family: 'em-icons';\\n    font-style: normal;\\n    font-variant: normal;\\n    font-weight: normal;\\n    line-height: 1;\\n    text-transform: none;\\n}\\n.menu-control .e-menu-wrapper .e-menu-file::before {\\n    content: '\\\\E700';\\n}\\n.menu-control .e-menu-wrapper .e-menu-edit::before {\\n    content: '\\\\E701';\\n}\\n.e-menu-wrapper .e-menu-tool::before {\\n    content: '\\\\E7CF';\\n}\\n.e-menu-wrapper .e-menu-cut::before {\\n    content: '\\\\E704';\\n}\\n.e-menu-wrapper .e-menu-copy::before {\\n    content: '\\\\E705';\\n}\\n.e-menu-wrapper .e-menu-paste::before {\\n    content: '\\\\E706';\\n}\\n.e-menu-wrapper .e-menu-open::before {\\n    content: '\\\\E702';\\n}\\n.e-menu-wrapper .e-menu-save::before {\\n    content: '\\\\E703';\\n}\\n\\n/* custom code start */\\n.menu-control {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n/* custom code end */\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-IJ4ZD4XQJXLBSBF3YO4PZA2GUZH5KXL56MWSN2J3X5BQ4WBYOX7Q/Samples/menu/default/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BA;;EAEE;AACF;IACI,wBAAwB;IACxB;07HACs7H;IACt7H,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,wBAAwB;IACxB,mBAAmB;IACnB,qBAAqB;IACrB,oBAAoB;IACpB,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;;AAED,uBAAuB;AACvB;IACI,iBAAiB;IACjB,mBAAmB;CACtB;AACD,qBAAqB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/**\\n* ej2 Menu styles\\n*/\\n@font-face {\\n    font-family: 'em-icons';\\n    src:\\n    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.e-menu-icons { \\n    font-family: 'em-icons';\\n    font-style: normal;\\n    font-variant: normal;\\n    font-weight: normal;\\n    line-height: 1;\\n    text-transform: none;\\n}\\n.menu-control .e-menu-wrapper .e-menu-file::before {\\n    content: '\\\\e700';\\n}\\n.menu-control .e-menu-wrapper .e-menu-edit::before {\\n    content: '\\\\e701';\\n}\\n.e-menu-wrapper .e-menu-tool::before {\\n    content: '\\\\e7cf';\\n}\\n.e-menu-wrapper .e-menu-cut::before {\\n    content: '\\\\e704';\\n}\\n.e-menu-wrapper .e-menu-copy::before {\\n    content: '\\\\e705';\\n}\\n.e-menu-wrapper .e-menu-paste::before {\\n    content: '\\\\e706';\\n}\\n.e-menu-wrapper .e-menu-open::before {\\n    content: '\\\\e702';\\n}\\n.e-menu-wrapper .e-menu-save::before {\\n    content: '\\\\e703';\\n}\\n\\n/* custom code start */\\n.menu-control {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n/* custom code end */\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/menu/default/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/default/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"MenuPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      menuItems: [\n        {\n            text: 'File',\n            iconCss: 'e-menu-icons e-menu-file',\n            items: [\n                { text: 'Open', iconCss: 'e-menu-icons e-menu-open' },\n                { text: 'Save', iconCss: 'e-menu-icons e-menu-save' },\n                { separator: true },\n                { text: 'Exit' }\n            ]\n        },\n        {\n            text: 'Edit',\n            iconCss: 'e-menu-icons e-menu-edit',\n            items: [\n                { text: 'Cut', iconCss: 'e-menu-icons e-menu-cut' },\n                { text: 'Copy', iconCss: 'e-menu-icons e-menu-copy' },\n                { text: 'Paste', iconCss: 'e-menu-icons e-menu-paste' }\n            ]\n        },\n        {\n            text: 'View',\n            items: [\n                {\n                    text: 'Toolbars',\n                    items: [\n                        { text: 'Menu Bar' },\n                        { text: 'Bookmarks Toolbar' },\n                        { text: 'Customize' },\n                    ]\n                },\n                {\n                    text: 'Zoom',\n                    items: [\n                        { text: 'Zoom In' },\n                        { text: 'Zoom Out' },\n                        { text: 'Reset' },\n                    ]\n                },\n                { text: 'Full Screen' }\n            ]\n        },\n        {\n            text: 'Tools',\n            items: [\n                { text: 'Spelling & Grammar' },\n                { text: 'Customize' },\n                { separator: true },\n                { text: 'Options' }\n            ]\n        },\n        {\n            text: 'Help'\n        }\n      ]\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/default/App.vue?vue&type=template&id=74aa56f7&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/default/App.vue?vue&type=template&id=74aa56f7& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"menu-control\" },\n      [_c(\"ejs-menu\", { attrs: { items: _vm.menuItems } })],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"This sample demonstrates default functionalities of the \"),\n        _c(\"code\", [_vm._v(\"menu\")]),\n        _vm._v(\" component. Interact with \"),\n        _c(\"code\", [_vm._v(\"menu\")]),\n        _vm._v(\" using hover / click action.\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The menu component is a graphical user interface that serves as navigation header for your application or site. \\n        It provides a list of commands that can be carried out using the \"\n        ),\n        _c(\"code\", [_vm._v(\"items\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this demo, the menu is rendered with default type of \"\n        ),\n        _c(\"b\", [_vm._v(\"Horizontal\")]),\n        _vm._v(\" orientation. Using \"),\n        _c(\"code\", [_vm._v(\"orientation\")]),\n        _vm._v(\" property, you can change the orientation to \"),\n        _c(\"b\", [_vm._v(\"Vertical\")]),\n        _vm._v(\".\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In mobile mode, the parent menu becomes scrollable if its size exceeds the viewport size.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n        More information about Menu can be found in this \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/menu/getting-started\"\n            }\n          },\n          [_vm._v(\"documentation\")]\n        ),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/menu/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });