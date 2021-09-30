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
/******/ 		"splitter/accordion-navigation-menu/main": 0
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
/******/ 	deferredModules.push(["./Samples/splitter/accordion-navigation-menu/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/splitter/accordion-navigation-menu/App.vue":
/*!************************************************************!*\
  !*** ./Samples/splitter/accordion-navigation-menu/App.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_411f8411___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=411f8411& */ \"./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=template&id=411f8411&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_411f8411___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_411f8411___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/splitter/accordion-navigation-menu/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?");

/***/ }),

/***/ "./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?");

/***/ }),

/***/ "./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?");

/***/ }),

/***/ "./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=template&id=411f8411&":
/*!*******************************************************************************************!*\
  !*** ./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=template&id=411f8411& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_411f8411___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=411f8411& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=template&id=411f8411&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_411f8411___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_411f8411___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?");

/***/ }),

/***/ "./Samples/splitter/accordion-navigation-menu/main.js":
/*!************************************************************!*\
  !*** ./Samples/splitter/accordion-navigation-menu/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/splitter/accordion-navigation-menu/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.accordion-view #content {\\n  padding: 18px;\\n}\\n/* custom code start */\\n.accordion-view #target {\\n  margin: 20px auto;\\n  max-width: 600px;\\n}\\n/* custom code end */\\n.accordion-view.control-section {\\n  min-height: 370px;\\n}\\n.accordion-view .content {\\n  padding: 9px;\\n}\\n.accordion-view #splitter .e-pane.e-pane-horizontal:nth-child(even) {\\n padding : 10px;\\n}\\n.accordion-view\\n  #splitter\\n  .e-accordion\\n  .e-acrdn-item\\n  .e-acrdn-panel\\n  .e-acrdn-content {\\n  padding: 0px;\\n}\\n.accordion-view #splitter .e-accordion,\\n.accordion-view #splitter .e-accordion .e-acrdn-item.e-select,\\n.accordion-view\\n  #splitter\\n  .e-accordion\\n  .e-acrdn-item.e-selected.e-select\\n  > .e-acrdn-header {\\n  border: none;\\n}\\n.accordion-view #splitter .e-acrdn-header-content {\\n  display: block;\\n  text-decoration: none;\\n}\\n.bootstrap .accordion-view #splitter .e-list-parent.e-ul li:nth-child(3),\\n.bootstrap4 .accordion-view #splitter .e-list-parent.e-ul li:nth-child(3) {\\n  border-bottom: none;\\n}\\n.bootstrap4 .accordion-view #splitter .e-listview {\\n  border: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-VJEC7HBY5NTXUHA5ZZO7LWIVXVPVHIAKFKVUZCG2B6BEQF2A46MA/Samples/splitter/accordion-navigation-menu/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;CACf;AACD,uBAAuB;AACvB;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD,qBAAqB;AACrB;EACE,kBAAkB;CACnB;AACD;EACE,aAAa;CACd;AACD;CACC,eAAe;CACf;AACD;;;;;;EAME,aAAa;CACd;AACD;;;;;;;EAOE,aAAa;CACd;AACD;EACE,eAAe;EACf,sBAAsB;CACvB;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,aAAa;CACd\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.accordion-view #content {\\n  padding: 18px;\\n}\\n/* custom code start */\\n.accordion-view #target {\\n  margin: 20px auto;\\n  max-width: 600px;\\n}\\n/* custom code end */\\n.accordion-view.control-section {\\n  min-height: 370px;\\n}\\n.accordion-view .content {\\n  padding: 9px;\\n}\\n.accordion-view #splitter .e-pane.e-pane-horizontal:nth-child(even) {\\n padding : 10px;\\n}\\n.accordion-view\\n  #splitter\\n  .e-accordion\\n  .e-acrdn-item\\n  .e-acrdn-panel\\n  .e-acrdn-content {\\n  padding: 0px;\\n}\\n.accordion-view #splitter .e-accordion,\\n.accordion-view #splitter .e-accordion .e-acrdn-item.e-select,\\n.accordion-view\\n  #splitter\\n  .e-accordion\\n  .e-acrdn-item.e-selected.e-select\\n  > .e-acrdn-header {\\n  border: none;\\n}\\n.accordion-view #splitter .e-acrdn-header-content {\\n  display: block;\\n  text-decoration: none;\\n}\\n.bootstrap .accordion-view #splitter .e-list-parent.e-ul li:nth-child(3),\\n.bootstrap4 .accordion-view #splitter .e-list-parent.e-ul li:nth-child(3) {\\n  border-bottom: none;\\n}\\n.bootstrap4 .accordion-view #splitter .e-listview {\\n  border: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__[\"AccordionPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_3__[\"ListViewPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"SplitterPlugin\"]);\n\nlet index = undefined;\nlet listid = undefined;\n\nvar bus = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\n\nvar aspContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"asp\", {\n  template: `<div><h4>About ASP.NET</h4>Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.</div>`\n});\n\nvar mvcContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"mvc\", {\n  template: `<div><h4>About ASP.NET MVC</h4>The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages.</div>`\n});\n\nvar jsContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"js\", {\n  template: `<div><h4>About JavaScript</h4>JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.</div>`\n});\n\nvar aspGridContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"aspGrid\", {\n  template: `<div>\n        <h4>About ASP.NET Grid</h4>\n        <div style=\"padding: 2px\">\n                The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format. Its wide range of functionalities includes data binding, editing, filtering, grouping, paging, freezing rows and columns, aggregation of rows, and exporting to Excel, CSV, and PDF formats.\n        </div>\n</div>`\n});\n\nvar aspScheduleContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"aspSchedule\", {\n  template: `<div>\n        <h4>About ASP.NET Schedule</h4>\n        <div style=\"padding: 2px\">\n                The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently. It features easy resource scheduling, rescheduling appointments through editor pop-ups, drag and drop, and a resizing action.\n        </div>    \n</div>`\n});\n\nvar aspChartContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"aspChart\", {\n  template: `<div >\n    <h4>About ASP.NET Charts</h4>\n    <div style=\"padding: 2px\">\n        ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications. It contains a rich gallery of 30+ charts and graphs, ranging from line to financial charts, that cater to all charting scenarios. Its high performing quality helps to render a large amount of data quickly. It also comes with a lot of features such as zooming, panning, tooltip, crosshair, trackball, drill-down, and events to make the charts more interactive.\n    </div>\n</div>`\n});\n\nvar mvcGridContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"mvcGrid\", {\n  template: `<div>\n        <h4>About ASP.NET MVC Grid</h4>\n        <div style=\"padding: 2px\">\n                The ASP.NET MVC DataGrid control, or DataTable for is a feature-rich control used to display data in a tabular format. Its wide range of functionalities includes data binding, editing, filtering, grouping, paging, freezing rows and columns, aggregation of rows, and exporting to Excel, CSV, and PDF formats.\n        </div>\n</div>`\n});\n\nvar mvcScheduleContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"mvcSchedule\", {\n  template: `<div>\n        <h4>About ASP.NET MVC Schedule</h4>\n        <div style=\"padding: 2px\">\n                The ASP.NET MVC Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently. It features easy resource scheduling, rescheduling appointments through editor pop-ups, drag and drop, and a resizing action.\n        </div>    \n</div>`\n});\n\nvar mvcChartContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"mvcChart\", {\n  template: `<div>\n        <h4>About ASP.NET MVC Charts</h4>\n        <div style=\"padding: 2px\">\n                ASP.NET MVC charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications. It contains a rich gallery of 30+ charts and graphs, ranging from line to financial charts, that cater to all charting scenarios. Its high performing quality helps to render a large amount of data quickly. It also comes with a lot of features such as zooming, panning, tooltip, crosshair, trackball, drill-down, and events to make the charts more interactive.\n        </div>\n</div>\n        `\n});\n\nvar jsGridContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"jsGrid\", {\n  template: `<div>\n        <h4>About JavaScript Grid</h4>\n        <div style=\"padding: 2px\">\n                The JavaScript DataGrid, or DataTable, is a feature-rich control for displaying data in a tabular format. Its wide range of functionalities includes data binding, editing, filtering, grouping, paging, freezing rows and columns, aggregating rows, and exporting to Excel, CSV, and PDF formats.\n        </div>\n</div>`\n});\n\nvar jsScheduleContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"jsSchedule\", {\n  template: `<div>\n        <h4>About JavaScript Schedule</h4>\n        <div style=\"padding: 2px\">\n                The HTML5 JavaScript Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently. It features easy resource scheduling, rescheduling appointments through editor pop-ups, drag and drop, and a resizing action.\n        </div>\n</div>`\n});\n\nvar jsChartContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"jsChart\", {\n  template: `<div>\n        <h4>About JavaScript Charts</h4>\n        <div style=\"padding: 2px\">\n                The HTML5 JavaScript charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications. It contains a rich gallery of 30+ charts and graphs, ranging from line to financial charts, that cater to all charting scenarios. Its high performing quality helps to render a large amount of data quickly. It also comes with a lot of features such as zooming, panning, tooltip, crosshair, trackball, drill-down, and events to make the charts more interactive.\n        </div>\n</div>`\n});\n\nvar pane1Content = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane1\", {\n  template: `  <div>\n    <div>\n        <ejs-accordion ref=\"Accordion_Nested\" :expanding=\"expanding\">\n        <e-accordionitems>\n            <e-accordionitem expanded='true' header='ASP.NET' content='#content1'></e-accordionitem>\n            <e-accordionitem header='ASP.NET MVC' content='#content2'></e-accordionitem>\n            <e-accordionitem header='JavaScript' content='#content3'></e-accordionitem>\n        </e-accordionitems>\n        </ejs-accordion>\n    </div>\n    <ejs-listview id=\"content1\" :dataSource='data1' :select='onselect'></ejs-listview>\n    <ejs-listview id=\"content2\" :dataSource='data2' :actionBegin='onActionBegin'  :select='onselect'></ejs-listview>\n    <ejs-listview id=\"content3\" :dataSource='data3' :actionBegin='onActionBegin'  :select='onselect'></ejs-listview>\n</div>`,\n  data() {\n    return {\n      data1: [\n        { text: \"Grid\", id: \"1\" },\n        { text: \"Schedule\", id: \"2\" },\n        { text: \"Chart\", id: \"7\" }\n      ],\n      data2: [\n        { text: \"Grid\", id: \"3\" },\n        { text: \"Schedule\", id: \"4\" },\n        { text: \"Chart\", id: \"8\" }\n      ],\n      data3: [\n        { text: \"Grid\", id: \"5\" },\n        { text: \"Schedule\", id: \"6\" },\n        { text: \"Chart\", id: \"9\" }\n      ]\n    };\n  },\n  methods: {\n    onActionBegin: function() {\n      document.getElementById(\"content2\").style.display = \"none\";\n      document.getElementById(\"content3\").style.display = \"none\";\n    },\n    onselect: function(e) {\n      listid = e.item.dataset.uid;\n      switch (listid) {\n        case \"1\":\n          bus.$emit(\"pane-content\", function() { return { template: aspGridContent }; });\n          break;\n        case \"2\":\n          bus.$emit(\"pane-content\", function() { return { template: aspScheduleContent }; });\n          break;\n        case \"3\":\n          bus.$emit(\"pane-content\", function() { return { template: mvcGridContent }; });\n          break;\n        case \"4\":\n          bus.$emit(\"pane-content\", function() { return { template: mvcScheduleContent }; });\n          break;\n        case \"5\":\n          bus.$emit(\"pane-content\", function() { return { template: jsGridContent }; });\n          break;\n        case \"6\":\n          bus.$emit(\"pane-content\", function() { return { template: jsScheduleContent }; });\n          break;\n        case \"7\":\n          bus.$emit(\"pane-content\", function() { return { template: aspChartContent }; });\n          break;\n        case \"8\":\n          bus.$emit(\"pane-content\", function() { return { template: mvcChartContent }; });\n          break;\n        case \"9\":\n          bus.$emit(\"pane-content\", function() { return { template: jsChartContent }; });\n          break;\n        default:\n          break;\n      }\n    },\n    expanding: function(e) {\n      index = e.index;\n      switch (index) {\n        case 0:\n          bus.$emit(\"pane-content\", function() { return { template: aspContent }; });\n          break;\n        case 1:\n          bus.$emit(\"pane-content\", function() { return { template: mvcContent }; });\n          break;\n        case 2:\n          bus.$emit(\"pane-content\", function() { return { template: jsContent }; });\n          break;\n        default:\n          break;\n      }\n    }\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      pane1Content: function() {\n        return { template: pane1Content };\n      },\n      pane2Content: function() {\n        return { template: aspContent };\n      }\n    };\n  },\n  mounted: function() {\n    bus.$on(\"pane-content\", paneContent => {\n      this.$refs.splitterObj.ej2Instances.paneSettings[1].content = paneContent;\n    });\n  }\n  ,destroyed: function() {\n    bus.$off(\"pane-content\");\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=template&id=411f8411&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/accordion-navigation-menu/App.vue?vue&type=template&id=411f8411& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-12 control-section accordion-view\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"control_wrapper\", attrs: { id: \"target\" } },\n        [\n          _c(\n            \"ejs-splitter\",\n            {\n              ref: \"splitterObj\",\n              attrs: { id: \"splitter\", width: \"100%\", height: \"288px\" }\n            },\n            [\n              _c(\n                \"e-panes\",\n                [\n                  _c(\"e-pane\", {\n                    attrs: {\n                      size: \"39%\",\n                      min: \"30%\",\n                      content: _vm.pane1Content\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-pane\", {\n                    attrs: {\n                      size: \"65%\",\n                      min: \"45%\",\n                      content: _vm.pane2Content\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This example demonstrates the Accordion control that can be integrated within the split pane.\\n      Select the product from the left pane to display the corresponding product details on the right pane.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      The Splitter is the layout user interface (UI) control and allows integrating other JavaScript UI controls within its pane.\\n      In this sample, the Splitter control is used to design navigation menu-like application using JavaScript Accordion control.\\n      The Accordion control is integrated within left pane to display the product menu and selected product details on right pane.\\n    \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/accordion-navigation-menu/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });