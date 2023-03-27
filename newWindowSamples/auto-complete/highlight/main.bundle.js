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
/******/ 		"auto-complete/highlight/main": 0
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
/******/ 	deferredModules.push(["./Samples/auto-complete/highlight/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/auto-complete/highlight/App.vue":
/*!*************************************************!*\
  !*** ./Samples/auto-complete/highlight/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_17ad126a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=17ad126a&scoped=true& */ \"./Samples/auto-complete/highlight/App.vue?vue&type=template&id=17ad126a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/auto-complete/highlight/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_17ad126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css& */ \"./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_17ad126a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_17ad126a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"17ad126a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/auto-complete/highlight/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/highlight/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/auto-complete/highlight/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_17ad126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_17ad126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_17ad126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_17ad126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_17ad126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/highlight/App.vue?vue&type=template&id=17ad126a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/auto-complete/highlight/App.vue?vue&type=template&id=17ad126a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_17ad126a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=17ad126a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=template&id=17ad126a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_17ad126a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_17ad126a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/highlight/dataSource.json":
/*!*********************************************************!*\
  !*** ./Samples/auto-complete/highlight/dataSource.json ***!
  \*********************************************************/
/*! exports provided: sportsData, booksData, countries, data, vegetableData, socialMedia, empList, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"sportsData\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"],\\\"booksData\\\":[{\\\"BookName\\\":\\\"Support Vector Machines Succinctly\\\",\\\"BookID\\\":\\\"BOOK1\\\"},{\\\"BookName\\\":\\\"Scala Succinctly\\\",\\\"BookID\\\":\\\"BOOK2\\\"},{\\\"BookName\\\":\\\"Application Security in .NET Succinctly\\\",\\\"BookID\\\":\\\"BOOK3\\\"},{\\\"BookName\\\":\\\"ASP.NET WebHooks Succinctly\\\",\\\"BookID\\\":\\\"BOOK4\\\"},{\\\"BookName\\\":\\\"Xamarin.Forms Succinctly\\\",\\\"BookID\\\":\\\"BOOK5\\\"},{\\\"BookName\\\":\\\"Asynchronous Programming Succinctly\\\",\\\"BookID\\\":\\\"BOOK6\\\"},{\\\"BookName\\\":\\\"Java Succinctly Part 2\\\",\\\"BookID\\\":\\\"BOOK7\\\"},{\\\"BookName\\\":\\\"Java Succinctly Part 1\\\",\\\"BookID\\\":\\\"BOOK8\\\"},{\\\"BookName\\\":\\\"PHP Succinctly\\\",\\\"BookID\\\":\\\"BOOK9\\\"},{\\\"BookName\\\":\\\"Bing Maps V8 Succinctly\\\",\\\"BookID\\\":\\\"BOOK10\\\"},{\\\"BookName\\\":\\\"WPF Debugging and Performance Succinctly\\\",\\\"BookID\\\":\\\"BOOK11\\\"},{\\\"BookName\\\":\\\"Go Web Development Succinctly\\\",\\\"BookID\\\":\\\"BOOK12\\\"},{\\\"BookName\\\":\\\"Go Succinctly\\\",\\\"BookID\\\":\\\"BOOK13\\\"},{\\\"BookName\\\":\\\"More UWP Succinctly\\\",\\\"BookID\\\":\\\"BOOK14\\\"},{\\\"BookName\\\":\\\"UWP Succinctly\\\",\\\"BookID\\\":\\\"BOOK15\\\"},{\\\"BookName\\\":\\\"LINQPad Succinctly\\\",\\\"BookID\\\":\\\"BOOK16\\\"},{\\\"BookName\\\":\\\"MongoDB 3 Succinctly\\\",\\\"BookID\\\":\\\"BOOK17\\\"},{\\\"BookName\\\":\\\"R Programming Succinctly\\\",\\\"BookID\\\":\\\"BOOK18\\\"},{\\\"BookName\\\":\\\"Azure Cosmos DB and DocumentDB Succinctly\\\",\\\"BookID\\\":\\\"BOOK19\\\"},{\\\"BookName\\\":\\\"Unity Game Development Succinctly\\\",\\\"BookID\\\":\\\"BOOK20\\\"},{\\\"BookName\\\":\\\"Aurelia Succinctly\\\",\\\"BookID\\\":\\\"BOOK21\\\"},{\\\"BookName\\\":\\\"Microsoft Bot Framework Succinctly\\\",\\\"BookID\\\":\\\"BOOK22\\\"},{\\\"BookName\\\":\\\"ASP.NET Core Succinctly\\\",\\\"BookID\\\":\\\"BOOK23\\\"},{\\\"BookName\\\":\\\"Twilio with C# Succinctly\\\",\\\"BookID\\\":\\\"BOOK24\\\"},{\\\"BookName\\\":\\\"Angular 2 Succinctly\\\",\\\"BookID\\\":\\\"BOOK25\\\"},{\\\"BookName\\\":\\\"Visual Studio 2017 Succinctly\\\",\\\"BookID\\\":\\\"BOOK26\\\"},{\\\"BookName\\\":\\\"Camtasia Succinctly\\\",\\\"BookID\\\":\\\"BOOK27\\\"},{\\\"BookName\\\":\\\"SQL Queries Succinctly\\\",\\\"BookID\\\":\\\"BOOK28\\\"},{\\\"BookName\\\":\\\"Keystone.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK29\\\"},{\\\"BookName\\\":\\\"Groovy Succinctly\\\",\\\"BookID\\\":\\\"BOOK30\\\"},{\\\"BookName\\\":\\\"SQL Server for C# Developers Succinctly\\\",\\\"BookID\\\":\\\"BOOK31\\\"},{\\\"BookName\\\":\\\"Ubuntu Server Succinctly\\\",\\\"BookID\\\":\\\"BOOK32\\\"},{\\\"BookName\\\":\\\"Statistics Fundamentals Succinctly\\\",\\\"BookID\\\":\\\"BOOK33\\\"},{\\\"BookName\\\":\\\".NET Core Succinctly\\\",\\\"BookID\\\":\\\"BOOK34\\\"},{\\\"BookName\\\":\\\"SOLID Principles Succinctly\\\",\\\"BookID\\\":\\\"BOOK35\\\"},{\\\"BookName\\\":\\\"Node.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK36\\\"},{\\\"BookName\\\":\\\"Customer Success for C# Developers Succinctly\\\",\\\"BookID\\\":\\\"BOOK37\\\"},{\\\"BookName\\\":\\\"Data Capture and Extraction with C# Succinctly\\\",\\\"BookID\\\":\\\"BOOK38\\\"},{\\\"BookName\\\":\\\"Hadoop Succinctly\\\",\\\"BookID\\\":\\\"BOOK39\\\"},{\\\"BookName\\\":\\\"SciPy Programming Succinctly\\\",\\\"BookID\\\":\\\"BOOK40\\\"},{\\\"BookName\\\":\\\"Hive Succinctly\\\",\\\"BookID\\\":\\\"BOOK41\\\"},{\\\"BookName\\\":\\\"React.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK42\\\"},{\\\"BookName\\\":\\\"ECMAScript 6 Succinctly\\\",\\\"BookID\\\":\\\"BOOK43\\\"},{\\\"BookName\\\":\\\"GitHub Succinctly\\\",\\\"BookID\\\":\\\"BOOK44\\\"},{\\\"BookName\\\":\\\"Gulp Succinctly\\\",\\\"BookID\\\":\\\"BOOK45\\\"},{\\\"BookName\\\":\\\"Visual Studio Code Succinctly\\\",\\\"BookID\\\":\\\"BOOK46\\\"},{\\\"BookName\\\":\\\"Object-Oriented Programming in C# Succinctly\\\",\\\"BookID\\\":\\\"BOOK47\\\"},{\\\"BookName\\\":\\\"C# Code Contracts Succinctly\\\",\\\"BookID\\\":\\\"BOOK48\\\"},{\\\"BookName\\\":\\\"Leaflet.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK49\\\"},{\\\"BookName\\\":\\\"Delphi Succinctly\\\",\\\"BookID\\\":\\\"BOOK50\\\"},{\\\"BookName\\\":\\\"SQL on Azure Succinctly\\\",\\\"BookID\\\":\\\"BOOK51\\\"},{\\\"BookName\\\":\\\"Web Servers Succinctly\\\",\\\"BookID\\\":\\\"BOOK52\\\"},{\\\"BookName\\\":\\\"ASP.NET Multitenant Applications Succinctly\\\",\\\"BookID\\\":\\\"BOOK53\\\"},{\\\"BookName\\\":\\\"ASP.NET MVC Succinctly\\\",\\\"BookID\\\":\\\"BOOK54\\\"},{\\\"BookName\\\":\\\"Windows Azure Websites Succinctly\\\",\\\"BookID\\\":\\\"BOOK55\\\"},{\\\"BookName\\\":\\\"Localization for .NET Succinctly\\\",\\\"BookID\\\":\\\"BOOK56\\\"},{\\\"BookName\\\":\\\"ASP.NET Web API Succinctly\\\",\\\"BookID\\\":\\\"BOOK57\\\"},{\\\"BookName\\\":\\\"ASP.NET MVC 4 Mobile Websites Succinctly\\\",\\\"BookID\\\":\\\"BOOK58\\\"},{\\\"BookName\\\":\\\"jQuery Succinctly\\\",\\\"BookID\\\":\\\"BOOK59\\\"},{\\\"BookName\\\":\\\"JavaScript Succinctly\\\",\\\"BookID\\\":\\\"BOOK60\\\"}],\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"socialMedia\\\":[{\\\"Class\\\":\\\"facebook\\\",\\\"SocialMedia\\\":\\\"Facebook\\\",\\\"Id\\\":\\\"media1\\\"},{\\\"Class\\\":\\\"google-plus\\\",\\\"SocialMedia\\\":\\\"Google Plus\\\",\\\"Id\\\":\\\"media2\\\"},{\\\"Class\\\":\\\"instagram\\\",\\\"SocialMedia\\\":\\\"Instagram\\\",\\\"Id\\\":\\\"media3\\\"},{\\\"Class\\\":\\\"linkedin\\\",\\\"SocialMedia\\\":\\\"LinkedIn\\\",\\\"Id\\\":\\\"media4\\\"},{\\\"Class\\\":\\\"skype\\\",\\\"SocialMedia\\\":\\\"Skype\\\",\\\"Id\\\":\\\"media5\\\"},{\\\"Class\\\":\\\"tumblr\\\",\\\"SocialMedia\\\":\\\"Tumblr\\\",\\\"Id\\\":\\\"media6\\\"},{\\\"Class\\\":\\\"twitter\\\",\\\"SocialMedia\\\":\\\"Twitter\\\",\\\"Id\\\":\\\"media7\\\"},{\\\"Class\\\":\\\"vimeo\\\",\\\"SocialMedia\\\":\\\"Vimeo\\\",\\\"Id\\\":\\\"media8\\\"},{\\\"Class\\\":\\\"whatsapp\\\",\\\"SocialMedia\\\":\\\"WhatsApp\\\",\\\"Id\\\":\\\"media9\\\"},{\\\"Class\\\":\\\"youtube\\\",\\\"SocialMedia\\\":\\\"YouTube\\\",\\\"Id\\\":\\\"media10\\\"}],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/dataSource.json?");

/***/ }),

/***/ "./Samples/auto-complete/highlight/main.js":
/*!*************************************************!*\
  !*** ./Samples/auto-complete/highlight/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/auto-complete/highlight/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-dropdownbase .e-list-item .e-highlight[data-v-17ad126a] {\\n    color: red;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/pdown-vue-samples_release_21.1.1/Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;CACd\",\"file\":\"App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-dropdownbase .e-list-item .e-highlight[data-v-17ad126a] {\\n    color: red;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/highlight/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/auto-complete/highlight/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/auto-complete/highlight/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"AutoCompletePlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            fields: { value: 'Name' },\n            filterType: 'Contains',\n            countriesData: _dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"countries\"],\n            width: '150px',\n            filterData: ['Contains', 'StartsWith', 'EndsWith']\n        };\n    },\n    methods: {\n        onChange: function(e) {\n            this.filterType = e.itemData.value;\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=template&id=17ad126a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/highlight/App.vue?vue&type=template&id=17ad126a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", [\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-8  control-section\",\n          staticStyle: { height: \"350px\" },\n        },\n        [\n          _c(\n            \"div\",\n            {\n              staticStyle: {\n                margin: \"0 auto\",\n                width: \"250px\",\n                \"padding-top\": \"30px\",\n              },\n              attrs: { id: \"content\" },\n            },\n            [\n              _c(\"ejs-autocomplete\", {\n                attrs: {\n                  id: \"sample-list\",\n                  dataSource: _vm.countriesData,\n                  filterType: _vm.filterType,\n                  highlight: true,\n                  fields: _vm.fields,\n                  placeholder: \"e.g. Australia\",\n                },\n              }),\n            ],\n            1\n          ),\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n        _c(\n          \"table\",\n          {\n            staticStyle: { width: \"100%\" },\n            attrs: { id: \"property\", title: \"Properties\" },\n          },\n          [\n            _c(\"tr\", [\n              _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n                _vm._v(\"FilterType :\"),\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { \"padding-top\": \"10px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"filter\",\n                      dataSource: _vm.filterData,\n                      change: _vm.onChange,\n                      width: _vm.width,\n                      text: \"Contains\",\n                      placeholder: \"Find a type\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n          ]\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the highlight functionalities of the AutoComplete. Type a character(s) in the AutoComplete element and the typed characters are highlighted in the suggestion list.\\n        By default, \"\n        ),\n        _c(\"code\", [_vm._v(\"Contains\")]),\n        _vm._v(\n          \" filter type is set in this sample and provided with the options to choose different filter type in the property panel.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The AutoComplete has built-in support to highlight the searched characters on the suggested list items when \"\n        ),\n        _c(\"code\", [_vm._v(\"highlight\")]),\n        _vm._v(\" is enabled.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates that, the searched characters on the country suggestion list items are highlighted.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \" More information on the highlight search feature configuration can be found in the\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"http://ej2.syncfusion.com/angular/documentation/auto-complete/how-to.html#custom-highlight-search\",\n              target: \"_blank\",\n            },\n          },\n          [_vm._v(\" documentation section\")]\n        ),\n        _vm._v(\".\\n        \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/highlight/App.vue?vue&type=style&index=0&id=17ad126a&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"4f507aee\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/auto-complete/highlight/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });