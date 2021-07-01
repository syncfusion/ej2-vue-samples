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
/******/ 		"auto-complete/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/auto-complete/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/auto-complete/template/App.vue":
/*!************************************************!*\
  !*** ./Samples/auto-complete/template/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_42278558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=42278558& */ \"./Samples/auto-complete/template/App.vue?vue&type=template&id=42278558&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/auto-complete/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_42278558___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_42278558___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/auto-complete/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/template/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/auto-complete/template/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/template/App.vue?vue&type=template&id=42278558&":
/*!*******************************************************************************!*\
  !*** ./Samples/auto-complete/template/App.vue?vue&type=template&id=42278558& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_42278558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=42278558& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/template/App.vue?vue&type=template&id=42278558&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_42278558___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_42278558___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?");

/***/ }),

/***/ "./Samples/auto-complete/template/dataSource.json":
/*!********************************************************!*\
  !*** ./Samples/auto-complete/template/dataSource.json ***!
  \********************************************************/
/*! exports provided: sportsData, booksData, countries, data, vegetableData, socialMedia, empList, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"sportsData\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"],\\\"booksData\\\":[{\\\"BookName\\\":\\\"Support Vector Machines Succinctly\\\",\\\"BookID\\\":\\\"BOOK1\\\"},{\\\"BookName\\\":\\\"Scala Succinctly\\\",\\\"BookID\\\":\\\"BOOK2\\\"},{\\\"BookName\\\":\\\"Application Security in .NET Succinctly\\\",\\\"BookID\\\":\\\"BOOK3\\\"},{\\\"BookName\\\":\\\"ASP.NET WebHooks Succinctly\\\",\\\"BookID\\\":\\\"BOOK4\\\"},{\\\"BookName\\\":\\\"Xamarin.Forms Succinctly\\\",\\\"BookID\\\":\\\"BOOK5\\\"},{\\\"BookName\\\":\\\"Asynchronous Programming Succinctly\\\",\\\"BookID\\\":\\\"BOOK6\\\"},{\\\"BookName\\\":\\\"Java Succinctly Part 2\\\",\\\"BookID\\\":\\\"BOOK7\\\"},{\\\"BookName\\\":\\\"Java Succinctly Part 1\\\",\\\"BookID\\\":\\\"BOOK8\\\"},{\\\"BookName\\\":\\\"PHP Succinctly\\\",\\\"BookID\\\":\\\"BOOK9\\\"},{\\\"BookName\\\":\\\"Bing Maps V8 Succinctly\\\",\\\"BookID\\\":\\\"BOOK10\\\"},{\\\"BookName\\\":\\\"WPF Debugging and Performance Succinctly\\\",\\\"BookID\\\":\\\"BOOK11\\\"},{\\\"BookName\\\":\\\"Go Web Development Succinctly\\\",\\\"BookID\\\":\\\"BOOK12\\\"},{\\\"BookName\\\":\\\"Go Succinctly\\\",\\\"BookID\\\":\\\"BOOK13\\\"},{\\\"BookName\\\":\\\"More UWP Succinctly\\\",\\\"BookID\\\":\\\"BOOK14\\\"},{\\\"BookName\\\":\\\"UWP Succinctly\\\",\\\"BookID\\\":\\\"BOOK15\\\"},{\\\"BookName\\\":\\\"LINQPad Succinctly\\\",\\\"BookID\\\":\\\"BOOK16\\\"},{\\\"BookName\\\":\\\"MongoDB 3 Succinctly\\\",\\\"BookID\\\":\\\"BOOK17\\\"},{\\\"BookName\\\":\\\"R Programming Succinctly\\\",\\\"BookID\\\":\\\"BOOK18\\\"},{\\\"BookName\\\":\\\"Azure Cosmos DB and DocumentDB Succinctly\\\",\\\"BookID\\\":\\\"BOOK19\\\"},{\\\"BookName\\\":\\\"Unity Game Development Succinctly\\\",\\\"BookID\\\":\\\"BOOK20\\\"},{\\\"BookName\\\":\\\"Aurelia Succinctly\\\",\\\"BookID\\\":\\\"BOOK21\\\"},{\\\"BookName\\\":\\\"Microsoft Bot Framework Succinctly\\\",\\\"BookID\\\":\\\"BOOK22\\\"},{\\\"BookName\\\":\\\"ASP.NET Core Succinctly\\\",\\\"BookID\\\":\\\"BOOK23\\\"},{\\\"BookName\\\":\\\"Twilio with C# Succinctly\\\",\\\"BookID\\\":\\\"BOOK24\\\"},{\\\"BookName\\\":\\\"Angular 2 Succinctly\\\",\\\"BookID\\\":\\\"BOOK25\\\"},{\\\"BookName\\\":\\\"Visual Studio 2017 Succinctly\\\",\\\"BookID\\\":\\\"BOOK26\\\"},{\\\"BookName\\\":\\\"Camtasia Succinctly\\\",\\\"BookID\\\":\\\"BOOK27\\\"},{\\\"BookName\\\":\\\"SQL Queries Succinctly\\\",\\\"BookID\\\":\\\"BOOK28\\\"},{\\\"BookName\\\":\\\"Keystone.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK29\\\"},{\\\"BookName\\\":\\\"Groovy Succinctly\\\",\\\"BookID\\\":\\\"BOOK30\\\"},{\\\"BookName\\\":\\\"SQL Server for C# Developers Succinctly\\\",\\\"BookID\\\":\\\"BOOK31\\\"},{\\\"BookName\\\":\\\"Ubuntu Server Succinctly\\\",\\\"BookID\\\":\\\"BOOK32\\\"},{\\\"BookName\\\":\\\"Statistics Fundamentals Succinctly\\\",\\\"BookID\\\":\\\"BOOK33\\\"},{\\\"BookName\\\":\\\".NET Core Succinctly\\\",\\\"BookID\\\":\\\"BOOK34\\\"},{\\\"BookName\\\":\\\"SOLID Principles Succinctly\\\",\\\"BookID\\\":\\\"BOOK35\\\"},{\\\"BookName\\\":\\\"Node.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK36\\\"},{\\\"BookName\\\":\\\"Customer Success for C# Developers Succinctly\\\",\\\"BookID\\\":\\\"BOOK37\\\"},{\\\"BookName\\\":\\\"Data Capture and Extraction with C# Succinctly\\\",\\\"BookID\\\":\\\"BOOK38\\\"},{\\\"BookName\\\":\\\"Hadoop Succinctly\\\",\\\"BookID\\\":\\\"BOOK39\\\"},{\\\"BookName\\\":\\\"SciPy Programming Succinctly\\\",\\\"BookID\\\":\\\"BOOK40\\\"},{\\\"BookName\\\":\\\"Hive Succinctly\\\",\\\"BookID\\\":\\\"BOOK41\\\"},{\\\"BookName\\\":\\\"React.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK42\\\"},{\\\"BookName\\\":\\\"ECMAScript 6 Succinctly\\\",\\\"BookID\\\":\\\"BOOK43\\\"},{\\\"BookName\\\":\\\"GitHub Succinctly\\\",\\\"BookID\\\":\\\"BOOK44\\\"},{\\\"BookName\\\":\\\"Gulp Succinctly\\\",\\\"BookID\\\":\\\"BOOK45\\\"},{\\\"BookName\\\":\\\"Visual Studio Code Succinctly\\\",\\\"BookID\\\":\\\"BOOK46\\\"},{\\\"BookName\\\":\\\"Object-Oriented Programming in C# Succinctly\\\",\\\"BookID\\\":\\\"BOOK47\\\"},{\\\"BookName\\\":\\\"C# Code Contracts Succinctly\\\",\\\"BookID\\\":\\\"BOOK48\\\"},{\\\"BookName\\\":\\\"Leaflet.js Succinctly\\\",\\\"BookID\\\":\\\"BOOK49\\\"},{\\\"BookName\\\":\\\"Delphi Succinctly\\\",\\\"BookID\\\":\\\"BOOK50\\\"},{\\\"BookName\\\":\\\"SQL on Azure Succinctly\\\",\\\"BookID\\\":\\\"BOOK51\\\"},{\\\"BookName\\\":\\\"Web Servers Succinctly\\\",\\\"BookID\\\":\\\"BOOK52\\\"},{\\\"BookName\\\":\\\"ASP.NET Multitenant Applications Succinctly\\\",\\\"BookID\\\":\\\"BOOK53\\\"},{\\\"BookName\\\":\\\"ASP.NET MVC Succinctly\\\",\\\"BookID\\\":\\\"BOOK54\\\"},{\\\"BookName\\\":\\\"Windows Azure Websites Succinctly\\\",\\\"BookID\\\":\\\"BOOK55\\\"},{\\\"BookName\\\":\\\"Localization for .NET Succinctly\\\",\\\"BookID\\\":\\\"BOOK56\\\"},{\\\"BookName\\\":\\\"ASP.NET Web API Succinctly\\\",\\\"BookID\\\":\\\"BOOK57\\\"},{\\\"BookName\\\":\\\"ASP.NET MVC 4 Mobile Websites Succinctly\\\",\\\"BookID\\\":\\\"BOOK58\\\"},{\\\"BookName\\\":\\\"jQuery Succinctly\\\",\\\"BookID\\\":\\\"BOOK59\\\"},{\\\"BookName\\\":\\\"JavaScript Succinctly\\\",\\\"BookID\\\":\\\"BOOK60\\\"}],\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"socialMedia\\\":[{\\\"Class\\\":\\\"facebook\\\",\\\"SocialMedia\\\":\\\"Facebook\\\",\\\"Id\\\":\\\"media1\\\"},{\\\"Class\\\":\\\"google-plus\\\",\\\"SocialMedia\\\":\\\"Google Plus\\\",\\\"Id\\\":\\\"media2\\\"},{\\\"Class\\\":\\\"instagram\\\",\\\"SocialMedia\\\":\\\"Instagram\\\",\\\"Id\\\":\\\"media3\\\"},{\\\"Class\\\":\\\"linkedin\\\",\\\"SocialMedia\\\":\\\"LinkedIn\\\",\\\"Id\\\":\\\"media4\\\"},{\\\"Class\\\":\\\"skype\\\",\\\"SocialMedia\\\":\\\"Skype\\\",\\\"Id\\\":\\\"media5\\\"},{\\\"Class\\\":\\\"tumblr\\\",\\\"SocialMedia\\\":\\\"Tumblr\\\",\\\"Id\\\":\\\"media6\\\"},{\\\"Class\\\":\\\"twitter\\\",\\\"SocialMedia\\\":\\\"Twitter\\\",\\\"Id\\\":\\\"media7\\\"},{\\\"Class\\\":\\\"vimeo\\\",\\\"SocialMedia\\\":\\\"Vimeo\\\",\\\"Id\\\":\\\"media8\\\"},{\\\"Class\\\":\\\"whatsapp\\\",\\\"SocialMedia\\\":\\\"WhatsApp\\\",\\\"Id\\\":\\\"media9\\\"},{\\\"Class\\\":\\\"youtube\\\",\\\"SocialMedia\\\":\\\"YouTube\\\",\\\"Id\\\":\\\"media10\\\"}],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/dataSource.json?");

/***/ }),

/***/ "./Samples/auto-complete/template/main.js":
/*!************************************************!*\
  !*** ./Samples/auto-complete/template/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/auto-complete/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.autocomplete-template .header {\\n    font-weight: 600;\\n    color: rgba(0, 0, 0, .54);\\n    height: 48px;\\n    padding: 15px 0 0 16px;\\n    font-size: 16px;\\n    background-color: #f5f5f5;\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\";\\n}\\n.fabric .autocomplete-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #0078d7;\\n    font-weight: 400;\\n}\\n.bootstrap .autocomplete-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #777;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 30px;\\n    height: 30px;\\n    padding: 0 0 0 24px;\\n}\\n.highcontrast .autocomplete-template .header {\\n    color: #fff;\\n    background-color: #000;\\n}\\n.e-bigger.bootstrap .autocomplete-template .header {\\n    line-height: 44px;\\n    height: 44px;\\n    font-size: 13px;\\n}\\n.bootstrap .autocomplete-template .info,\\n.e-bigger.bootstrap .autocomplete-template .info {\\n    margin-left: 25px;\\n}\\n.bootstrap .autocomplete-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -25px;\\n    margin-bottom: 20px;\\n}\\n.e-bigger.bootstrap .autocomplete-template .job {\\n    font-size: 15px;\\n    margin-top: -32px;\\n    margin-bottom: 17px;\\n}\\n.bootstrap .autocomplete-template .ename {\\n    font-size: 15px;\\n    margin-top: 20px;\\n    opacity: .87;\\n    padding: 3px 0 20px;\\n}\\n.e-bigger.bootstrap .autocomplete-template .ename {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n}\\n.bootstrap .autocomplete-template .empImage,\\n.e-bigger.bootstrap .autocomplete-template .empImage {\\n    margin: 0px 10px 0 20px;\\n}\\n.autocomplete-template .info {\\n    margin-left: 17px;\\n}\\n.autocomplete-template .ename {\\n    display: block !important;\\n    opacity: .87;\\n    font-size: 16px;\\n    margin-top: 8px;\\n}\\n.autocomplete-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -15px;\\n    margin-bottom: 7px;\\n}\\n.autocomplete-template .empImage {\\n    margin: 6px 16px;\\n    float: left;\\n    width: 50px;\\n    height: 50px;\\n}\\n.autocomplete-template.e-popup .e-list-item * {\\n    display: block;\\n    text-indent: 0;\\n}\\n.e-bigger:not(.bootstrap) .autocomplete-template .e-dropdownbase .e-list-item {\\n    line-height: 42px;\\n    height: 80px;\\n}\\n.e-bigger:not(.bootstrap) .autocomplete-template.e-popup .empImage {\\n    margin: 10px 16px;\\n}\\n.bootstrap4 .autocomplete-template.e-popup .empImage {\\n    margin: 0px 16px;\\n}\\n.bootstrap4 .autocomplete-template.e-popup .job {\\n    margin-top: 0;\\n}\\n.e-bigger.bootstrap4 .autocomplete-template.e-popup .job {\\n    margin-top: -15px;\\n}\\n.bootstrap4 .autocomplete-template .header {\\n    color: #6c757d;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-W6DY5KIRE7QTQBLPMRMZTQ3B4ZFMMNI7ASUGAE7VKA2E4CCP7SZA/Samples/auto-complete/template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,0BAA0B;IAC1B,oDAAoD;CACvD;AACD;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;IACZ,kEAAkE;IAClE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,uBAAuB;CAC1B;AACD;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;CACnB;AACD;;IAEI,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,qBAAqB;CACxB;AACD;;IAEI,wBAAwB;CAC3B;AACD;IACI,kBAAkB;CACrB;AACD;IACI,0BAA0B;IAC1B,aAAa;IACb,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;CAChB;AACD;IACI,eAAe;IACf,eAAe;CAClB;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,eAAe;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.autocomplete-template .header {\\n    font-weight: 600;\\n    color: rgba(0, 0, 0, .54);\\n    height: 48px;\\n    padding: 15px 0 0 16px;\\n    font-size: 16px;\\n    background-color: #f5f5f5;\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\";\\n}\\n.fabric .autocomplete-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #0078d7;\\n    font-weight: 400;\\n}\\n.bootstrap .autocomplete-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #777;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 30px;\\n    height: 30px;\\n    padding: 0 0 0 24px;\\n}\\n.highcontrast .autocomplete-template .header {\\n    color: #fff;\\n    background-color: #000;\\n}\\n.e-bigger.bootstrap .autocomplete-template .header {\\n    line-height: 44px;\\n    height: 44px;\\n    font-size: 13px;\\n}\\n.bootstrap .autocomplete-template .info,\\n.e-bigger.bootstrap .autocomplete-template .info {\\n    margin-left: 25px;\\n}\\n.bootstrap .autocomplete-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -25px;\\n    margin-bottom: 20px;\\n}\\n.e-bigger.bootstrap .autocomplete-template .job {\\n    font-size: 15px;\\n    margin-top: -32px;\\n    margin-bottom: 17px;\\n}\\n.bootstrap .autocomplete-template .ename {\\n    font-size: 15px;\\n    margin-top: 20px;\\n    opacity: .87;\\n    padding: 3px 0 20px;\\n}\\n.e-bigger.bootstrap .autocomplete-template .ename {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n}\\n.bootstrap .autocomplete-template .empImage,\\n.e-bigger.bootstrap .autocomplete-template .empImage {\\n    margin: 0px 10px 0 20px;\\n}\\n.autocomplete-template .info {\\n    margin-left: 17px;\\n}\\n.autocomplete-template .ename {\\n    display: block !important;\\n    opacity: .87;\\n    font-size: 16px;\\n    margin-top: 8px;\\n}\\n.autocomplete-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -15px;\\n    margin-bottom: 7px;\\n}\\n.autocomplete-template .empImage {\\n    margin: 6px 16px;\\n    float: left;\\n    width: 50px;\\n    height: 50px;\\n}\\n.autocomplete-template.e-popup .e-list-item * {\\n    display: block;\\n    text-indent: 0;\\n}\\n.e-bigger:not(.bootstrap) .autocomplete-template .e-dropdownbase .e-list-item {\\n    line-height: 42px;\\n    height: 80px;\\n}\\n.e-bigger:not(.bootstrap) .autocomplete-template.e-popup .empImage {\\n    margin: 10px 16px;\\n}\\n.bootstrap4 .autocomplete-template.e-popup .empImage {\\n    margin: 0px 16px;\\n}\\n.bootstrap4 .autocomplete-template.e-popup .job {\\n    margin-top: 0;\\n}\\n.e-bigger.bootstrap4 .autocomplete-template.e-popup .job {\\n    margin-top: -15px;\\n}\\n.bootstrap4 .autocomplete-template .header {\\n    color: #6c757d;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/template/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/template/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/auto-complete/template/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/auto-complete/template/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"AutoCompletePlugin\"]);\n\nvar headerVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"headerTemplate\", {\n  template: '<div class=\"header\"> <span>Photo</span> <span class=\"info\">Employee Info</span></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\nvar itemVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate\", {\n  template: '<div><img class=\"empImage\" :src=\"data.Eimg\" alt=\"employee\"/>' +\n            '<div class=\"ename\"> {{data.Name}} </div><div class=\"job\"> {{data.Designation}} </div></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            fields: { value: 'Name' },\n            watermark: 'e.g. Andrew Fuller',\n            hTemplate: function(e) {\n                return {\n                    template: headerVue\n                };\n            },\n            iTemplate: function(e) {\n                return {\n                    template: itemVue\n                };\n            },\n            data:_dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"empList\"]\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/auto-complete/template/App.vue?vue&type=template&id=42278558&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/auto-complete/template/App.vue?vue&type=template&id=42278558& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            margin: \"0px auto\",\n            width: \"300px\",\n            \"padding-top\": \"40px\"\n          },\n          attrs: { id: \"content\" }\n        },\n        [\n          _c(\"ejs-autocomplete\", {\n            attrs: {\n              id: \"employees\",\n              dataSource: _vm.data,\n              fields: _vm.fields,\n              placeholder: _vm.watermark,\n              headerTemplate: _vm.hTemplate,\n              itemTemplate: _vm.iTemplate,\n              popupHeight: \"450px\",\n              cssClass: \"autocomplete-template\"\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the template functionalities of the AutoComplete. Type a character in the AutoComplete element and choose an item from the customized list\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The AutoComplete has been provided with several options to customize each list items, group title, header and footer\\n            elements.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"This sample uses the following list of templates in AutoComplete\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ItemTemplate\")]),\n          _vm._v(\" - To customize the list item's content.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"HeaderTemplate\")]),\n          _vm._v(\" - To customize the header element.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \" More information on the template feature configuration can be found in the\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"http://ej2.syncfusion.com/angular/documentation/auto-complete/templates.html\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\" documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/auto-complete/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });