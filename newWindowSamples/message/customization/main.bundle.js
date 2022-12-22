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
/******/ 		"message/customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/message/customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/message/customization/App.vue":
/*!***********************************************!*\
  !*** ./Samples/message/customization/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_ece6580e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=ece6580e& */ \"./Samples/message/customization/App.vue?vue&type=template&id=ece6580e&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/message/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_ece6580e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=ece6580e&lang=css& */ \"./Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_ece6580e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_ece6580e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/message/customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?");

/***/ }),

/***/ "./Samples/message/customization/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/message/customization/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/message/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?");

/***/ }),

/***/ "./Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css&":
/*!********************************************************************************************!*\
  !*** ./Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ece6580e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=ece6580e&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ece6580e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ece6580e_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ece6580e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ece6580e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?");

/***/ }),

/***/ "./Samples/message/customization/App.vue?vue&type=template&id=ece6580e&":
/*!******************************************************************************!*\
  !*** ./Samples/message/customization/App.vue?vue&type=template&id=ece6580e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_ece6580e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=ece6580e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/message/customization/App.vue?vue&type=template&id=ece6580e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_ece6580e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_ece6580e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?");

/***/ }),

/***/ "./Samples/message/customization/main.js":
/*!***********************************************!*\
  !*** ./Samples/message/customization/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/message/customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/message/customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.msg-custom-section .content-section {\\n  margin: 0 auto;\\n  max-width: 400px;\\n  padding-top: 10px;\\n}\\n.msg-custom-section .e-message {\\n  margin: 10px 0;\\n}\\n@font-face {\\n  font-family: 'Message_icons';\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.custom.e-message .e-msg-icon::before {\\n  font-family: 'Message_icons';\\n  content: '\\\\E894';\\n}\\n.custom.e-message {\\n  background-color: #ffe3fb;\\n  border-color: #e0c7dd;\\n  color: #b42d79;\\n}\\n.custom.e-message .e-msg-icon {\\n  color: #b42d79;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_release_20.4.0.1/Samples/message/customization/App.vue?vue&type=style&index=0&id=ece6580e&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,6BAA6B;EAC7B,+zEAA+zE;EAC/zE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,6BAA6B;EAC7B,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB\",\"file\":\"App.vue?vue&type=style&index=0&id=ece6580e&lang=css&\",\"sourcesContent\":[\"\\n.msg-custom-section .content-section {\\n  margin: 0 auto;\\n  max-width: 400px;\\n  padding-top: 10px;\\n}\\n.msg-custom-section .e-message {\\n  margin: 10px 0;\\n}\\n@font-face {\\n  font-family: 'Message_icons';\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.custom.e-message .e-msg-icon::before {\\n  font-family: 'Message_icons';\\n  content: '\\\\e894';\\n}\\n.custom.e-message {\\n  background-color: #ffe3fb;\\n  border-color: #e0c7dd;\\n  color: #b42d79;\\n}\\n.custom.e-message .e-msg-icon {\\n  color: #b42d79;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/message/customization/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/message/customization/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-notifications */ \"./node_modules/@syncfusion/ej2-vue-notifications/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__[\"MessagePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {};\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/message/customization/App.vue?vue&type=template&id=ece6580e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/message/customization/App.vue?vue&type=template&id=ece6580e& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-12 control-section msg-custom-section\" },\n    [\n      _c(\n        \"div\",\n        { staticClass: \"content-section\" },\n        [\n          _c(\"h4\", [_vm._v(\"Content Alignment\")]),\n          _vm._v(\" \"),\n          _c(\"ejs-message\", {\n            attrs: {\n              id: \"msg_content_left\",\n              content: \"Your license has been activated successfully\",\n              severity: \"Success\",\n            },\n          }),\n          _vm._v(\" \"),\n          _c(\"ejs-message\", {\n            attrs: {\n              id: \"msg_content_center\",\n              content: \"The license will expire today\",\n              cssClass: \"e-content-center\",\n              severity: \"Warning\",\n            },\n          }),\n          _vm._v(\" \"),\n          _c(\"ejs-message\", {\n            attrs: {\n              id: \"msg_content_right\",\n              content: \"The license key is invalid\",\n              cssClass: \"e-content-right\",\n              severity: \"Error\",\n            },\n          }),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"content-section\" },\n        [\n          _c(\"h4\", [_vm._v(\"Custom Message with Icon\")]),\n          _vm._v(\" \"),\n          _c(\"ejs-message\", { attrs: { id: \"msg_icon\", cssClass: \"custom\" } }, [\n            _vm._v(\n              \"Essential JS 2 is a modern JavaScript UI Controls library built from the ground up to be lightweight, responsive, modular, and touch friendly. It is written in the TypeScript and has no external dependencies. It also includes complete support for Angular, React, Vue, ASP.NET MVC, and ASP.NET Core frameworks.\\n    \"\n            ),\n          ]),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the customization of the icon, content alignment, and appearance in the Vue Message.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The Message component content can be aligned by adding predefined classes. By default, messages are aligned to the \"\n        ),\n        _c(\"b\", [_vm._v(\"left\")]),\n        _vm._v(\". The other available alignments are \"),\n        _c(\"b\", [_vm._v(\"center\")]),\n        _vm._v(\" and \"),\n        _c(\"b\", [_vm._v(\"right\")]),\n        _vm._v(\", achieved by adding, \"),\n        _c(\"b\", [_vm._v(\"e-content-center\")]),\n        _vm._v(\" and \"),\n        _c(\"b\", [_vm._v(\"e-content-right\")]),\n        _vm._v(\".\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The icon and appearance can be customized at the application level by using the \"\n        ),\n        _c(\"code\", [_vm._v(\"cssClass\")]),\n        _vm._v(\" property.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, the Message component predefined content is aligned based on the \"\n        ),\n        _c(\"code\", [_vm._v(\"cssClass\")]),\n        _vm._v(\n          \" property. Also, this component is rendered with a custom severity icon and custom appearance.\"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/message/customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });