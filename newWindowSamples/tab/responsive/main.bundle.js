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
/******/ 		"tab/responsive/main": 0
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
/******/ 	deferredModules.push(["./Samples/tab/responsive/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/tab/responsive/App.vue":
/*!****************************************!*\
  !*** ./Samples/tab/responsive/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_eb8ffc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=eb8ffc58& */ \"./Samples/tab/responsive/App.vue?vue&type=template&id=eb8ffc58&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/tab/responsive/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_eb8ffc58___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_eb8ffc58___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/tab/responsive/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?");

/***/ }),

/***/ "./Samples/tab/responsive/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/tab/responsive/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/tab/responsive/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?");

/***/ }),

/***/ "./Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?");

/***/ }),

/***/ "./Samples/tab/responsive/App.vue?vue&type=template&id=eb8ffc58&":
/*!***********************************************************************!*\
  !*** ./Samples/tab/responsive/App.vue?vue&type=template&id=eb8ffc58& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_eb8ffc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=eb8ffc58& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/responsive/App.vue?vue&type=template&id=eb8ffc58&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_eb8ffc58___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_eb8ffc58___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?");

/***/ }),

/***/ "./Samples/tab/responsive/main.js":
/*!****************************************!*\
  !*** ./Samples/tab/responsive/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/tab/responsive/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/tab/responsive/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#tab_adaptive .e-tab-text {\\n        display: inherit;\\n}\\n\\n/* custom code start */\\n@media screen and (max-width: 481px) {\\n.control-section.e-tab-section,\\n        .container-fluid {\\n            padding-left: 0;\\n            padding-right: 0;\\n}\\n}\\n@media screen and (max-width: 425px) {\\n#tab_adaptive {\\n            overflow: hidden;\\n}\\n\\n/* custom code end */\\n#tab_adaptive .e-content {\\n            height: inherit !important;\\n}\\n#tab_adaptive .e-item.e-active {\\n            overflow: scroll;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/igations-vue-samples_master-JLSKYPBJT7XRLHSTDZHCZZK6FQMYNR5KFU6VDOAVJITLKANH2PTA/Samples/tab/responsive/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,iBAAiB;CACxB;;AAED,uBAAuB;AACvB;AACA;;YAEY,gBAAgB;YAChB,iBAAiB;CAC5B;CACA;AACD;AACA;YACY,iBAAiB;CAC5B;;AAED,qBAAqB;AACrB;YACY,2BAA2B;CACtC;AACD;YACY,iBAAiB;CAC5B;CACA\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#tab_adaptive .e-tab-text {\\n        display: inherit;\\n}\\n\\n/* custom code start */\\n@media screen and (max-width: 481px) {\\n.control-section.e-tab-section,\\n        .container-fluid {\\n            padding-left: 0;\\n            padding-right: 0;\\n}\\n}\\n@media screen and (max-width: 425px) {\\n#tab_adaptive {\\n            overflow: hidden;\\n}\\n\\n/* custom code end */\\n#tab_adaptive .e-content {\\n            height: inherit !important;\\n}\\n#tab_adaptive .e-item.e-active {\\n            overflow: scroll;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/tab/responsive/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/responsive/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TabPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function(){\n        return {\n          data: [{ id: 'Scrollable', mode: 'Scrollable' },\n                  { id: 'Popup', mode: 'Popup' }],\n          dataPlace: [{ id: 'top', position: 'Top' }, { id: 'bottom', position: 'Bottom' },{ id: 'left', position: 'Left' }, { id: 'right', position: 'Right' }],\n          fields: { text: 'mode', value: 'id' },\n          placeFields: { text: 'position', value: 'id' },\n          value: 'Scrollable',\n          placeValue: 'top',\n          headerText0: { text: 'HTML' },\n          headerText1: { text: 'C Sharp(C#)' },\n          headerText2: { text: 'Java' },\n          headerText3: { text: 'VB.Net' },\n          headerText4: { text: 'Xamarin' },\n          headerText5: { text: 'ASP.NET' },\n          headerText6: { text: 'ASP.NET MVC' },\n          headerText7: { text: 'JavaScript' },\n          content0: 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to ' +\n        'create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually ' +\n        'engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web ' +\n        'browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a ' +\n        'website semantically along with cues for presentation, making it a markup language, rather than a programming language.',\n\n         content1: 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its ' +\n        'development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.',\n\n        content2: 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired ' +\n        'by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform ' +\n        'computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to ' +\n        'enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to ' +\n        'provide many features of native applications and can be embedded in HTML pages.',\n \n        content3: 'The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also ' +\n        'includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.',\n \n        content4: 'Xamarin is a San Francisco, California based software company created in May 2011[3] by the engineers ' +\n        'that created Mono,[4] Mono for Android and MonoTouch that are cross-platform implementations of the Common Language ' +\n        'Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase, ' +\n        'developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share ' +\n        'code across multiple platforms.[5] Xamarin has over 1 million developers in more than 120 countries around the World ' +\n        'as of May 2015.',\n\n        content5: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +\n        'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +\n        'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +\n        'to Microsoft\\'\\s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +\n        'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +\n        'ASP.NET components to process SOAP messages.',\n\n         content6: 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +\n        'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +\n        'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +\n        'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.',\n\n         content7: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +\n        'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +\n        'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +\n        'both game development and the creation of desktop applications.',\n        \n        }\n   },\n    methods: {\n        placeChange: function(args) {\n           this.tabObj = this.$refs.tabObj.ej2Instances;\n           var placement = this.$refs.dropObj2.$el.value;\n           this.tabObj.headerPlacement = placement;\n           this.tabObj.dataBind();\n       },\n       onChange: function(args) {\n           this.tabObj = this.$refs.tabObj.ej2Instances;\n           this.tabObj.overflowMode = args.value;\n           this.tabObj.dataBind();\n       }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/responsive/App.vue?vue&type=template&id=eb8ffc58&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/responsive/App.vue?vue&type=template&id=eb8ffc58& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"e-tab-section\" }, [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"e-sample-resize-container\" },\n        [\n          _c(\n            \"ejs-tab\",\n            {\n              ref: \"tabObj\",\n              attrs: {\n                id: \"tab_adaptive\",\n                heightAdjustMode: \"None\",\n                height: \"250\"\n              }\n            },\n            [\n              _c(\n                \"e-tabitems\",\n                [\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText0, content: _vm.content0 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText1, content: _vm.content1 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText2, content: _vm.content2 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText3, content: _vm.content3 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText4, content: _vm.content4 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText5, content: _vm.content5 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText6, content: _vm.content6 }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-tabitem\", {\n                    attrs: { header: _vm.headerText7, content: _vm.content7 }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _vm._m(1)\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n        _c(\"tr\", [\n          _vm._m(2),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            { staticStyle: { width: \"50%\" } },\n            [\n              _c(\"ejs-dropdownlist\", {\n                ref: \"dropObj1\",\n                attrs: {\n                  id: \"overflow-modes\",\n                  width: \"90%\",\n                  dataSource: _vm.data,\n                  change: _vm.onChange,\n                  value: _vm.value,\n                  fields: _vm.fields\n                }\n              })\n            ],\n            1\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n            _vm._v(\"Header Placement:\")\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            { staticStyle: { width: \"50%\" } },\n            [\n              _c(\"ejs-dropdownlist\", {\n                ref: \"dropObj2\",\n                attrs: {\n                  id: \"header-place\",\n                  width: \"90%\",\n                  dataSource: _vm.dataPlace,\n                  change: _vm.placeChange,\n                  value: _vm.placeValue,\n                  fields: _vm.placeFields\n                }\n              })\n            ],\n            1\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"This sample demonstrates both \"),\n        _c(\"code\", [_vm._v(\"scrollable\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"popup\")]),\n        _vm._v(\" modes of the \"),\n        _c(\"code\", [_vm._v(\"Tab\")]),\n        _vm._v(\n          \". Select option from down-down to change the responsive option in property panel.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"Tab\")]),\n        _vm._v(\n          \" is adaptable to the available space when the tab items exceed the view space.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"Tab\")]),\n        _vm._v(\n          \" allows to place the header section inside the Tab component either at \"\n        ),\n        _c(\"code\", [_vm._v(\"top/bottom/left/right\")]),\n        _vm._v(\" position by using \"),\n        _c(\"code\", [_vm._v(\"headerPlacement\")]),\n        _vm._v(\" property.\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"You can assign overflowMode property value as \"),\n        _c(\"code\", [_vm._v(\"Scrollable/Popup\")]),\n        _vm._v(\n          \". By default scrollable mode of tab is enabled when tab item exceeds the view range. In this sample, users can change the \"\n        ),\n        _c(\"code\", [_vm._v(\"overflowMode\")]),\n        _vm._v(\" by selecting the dropdown options.\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"More information about Tab can be found in this \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/tab/getting-started/\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"documentation\")]\n        ),\n        _vm._v(\" section.\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Mode:\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/tab/responsive/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });