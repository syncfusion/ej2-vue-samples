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
/******/ 		"menu/toolbar-integration/main": 0
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
/******/ 	deferredModules.push(["./Samples/menu/toolbar-integration/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/menu/toolbar-integration/App.vue":
/*!**************************************************!*\
  !*** ./Samples/menu/toolbar-integration/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_03367f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=03367f90& */ \"./Samples/menu/toolbar-integration/App.vue?vue&type=template&id=03367f90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/menu/toolbar-integration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_03367f90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_03367f90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/menu/toolbar-integration/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?");

/***/ }),

/***/ "./Samples/menu/toolbar-integration/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/menu/toolbar-integration/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/menu/toolbar-integration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?");

/***/ }),

/***/ "./Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?");

/***/ }),

/***/ "./Samples/menu/toolbar-integration/App.vue?vue&type=template&id=03367f90&":
/*!*********************************************************************************!*\
  !*** ./Samples/menu/toolbar-integration/App.vue?vue&type=template&id=03367f90& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_03367f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=03367f90& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/toolbar-integration/App.vue?vue&type=template&id=03367f90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_03367f90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_03367f90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?");

/***/ }),

/***/ "./Samples/menu/toolbar-integration/main.js":
/*!**************************************************!*\
  !*** ./Samples/menu/toolbar-integration/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/menu/toolbar-integration/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/main.js?");

/***/ }),

/***/ "./Samples/menu/toolbar-integration/menu-data.json":
/*!*********************************************************!*\
  !*** ./Samples/menu/toolbar-integration/menu-data.json ***!
  \*********************************************************/
/*! exports provided: apiData, headerData, dataBinding, scrollableData, toolbarIntegrationData, userData, hamburgerData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiData\\\":[{\\\"header\\\":\\\"Events\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Conferences\\\"},{\\\"text\\\":\\\"Music\\\"},{\\\"text\\\":\\\"Workshops\\\"}]},{\\\"header\\\":\\\"Movies\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Now Showing\\\"},{\\\"text\\\":\\\"Coming Soon\\\"}]},{\\\"header\\\":\\\"Directory\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Media Gallery\\\"},{\\\"text\\\":\\\"Newsletters\\\"}]},{\\\"header\\\":\\\"Queries\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Our Policy\\\"},{\\\"text\\\":\\\"Site Map\\\"},{\\\"text\\\":\\\"24x7 Support\\\"}]},{\\\"header\\\":\\\"Services\\\"}],\\\"headerData\\\":[{\\\"text\\\":\\\"Events\\\"},{\\\"text\\\":\\\"Movies\\\"},{\\\"text\\\":\\\"Directory\\\"},{\\\"text\\\":\\\"Queries\\\"},{\\\"text\\\":\\\"Services\\\"}],\\\"dataBinding\\\":[{\\\"id\\\":\\\"parent1\\\",\\\"text\\\":\\\"Appliances\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent2\\\",\\\"text\\\":\\\"Accessories\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent3\\\",\\\"text\\\":\\\"Fashion\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent4\\\",\\\"text\\\":\\\"Home & Living\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent5\\\",\\\"text\\\":\\\"Entertainment\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent6\\\",\\\"text\\\":\\\"Kitchen\\\",\\\"parentId\\\":\\\"parent1\\\"},{\\\"id\\\":\\\"parent7\\\",\\\"text\\\":\\\"Washing Machine\\\",\\\"parentId\\\":\\\"parent1\\\"},{\\\"id\\\":\\\"parent8\\\",\\\"text\\\":\\\"Air Conditioners\\\",\\\"parentId\\\":\\\"parent1\\\"},{\\\"id\\\":\\\"parent9\\\",\\\"text\\\":\\\"Electric Cookers\\\",\\\"parentId\\\":\\\"parent6\\\"},{\\\"id\\\":\\\"parent10\\\",\\\"text\\\":\\\"Coffee Makers\\\",\\\"parentId\\\":\\\"parent6\\\"},{\\\"id\\\":\\\"parent11\\\",\\\"text\\\":\\\"Blenders\\\",\\\"parentId\\\":\\\"parent6\\\"},{\\\"id\\\":\\\"parent12\\\",\\\"text\\\":\\\"Fully Automatic\\\",\\\"parentId\\\":\\\"parent7\\\"},{\\\"id\\\":\\\"parent13\\\",\\\"text\\\":\\\"Semi Automatic\\\",\\\"parentId\\\":\\\"parent7\\\"},{\\\"id\\\":\\\"parent14\\\",\\\"text\\\":\\\"Inverter ACs\\\",\\\"parentId\\\":\\\"parent8\\\"},{\\\"id\\\":\\\"parent15\\\",\\\"text\\\":\\\"Split ACs\\\",\\\"parentId\\\":\\\"parent8\\\"},{\\\"id\\\":\\\"parent16\\\",\\\"text\\\":\\\"Window ACs\\\",\\\"parentId\\\":\\\"parent8\\\"},{\\\"id\\\":\\\"parent17\\\",\\\"text\\\":\\\"Mobile\\\",\\\"parentId\\\":\\\"parent2\\\"},{\\\"id\\\":\\\"parent18\\\",\\\"text\\\":\\\"Computer\\\",\\\"parentId\\\":\\\"parent2\\\"},{\\\"id\\\":\\\"parent19\\\",\\\"text\\\":\\\"Headphones\\\",\\\"parentId\\\":\\\"parent17\\\"},{\\\"id\\\":\\\"parent20\\\",\\\"text\\\":\\\"Memory Cards\\\",\\\"parentId\\\":\\\"parent17\\\"},{\\\"id\\\":\\\"parent21\\\",\\\"text\\\":\\\"Power Banks\\\",\\\"parentId\\\":\\\"parent17\\\"},{\\\"id\\\":\\\"parent22\\\",\\\"text\\\":\\\"Pendrives\\\",\\\"parentId\\\":\\\"parent18\\\"},{\\\"id\\\":\\\"parent23\\\",\\\"text\\\":\\\"External Hard Disks\\\",\\\"parentId\\\":\\\"parent18\\\"},{\\\"id\\\":\\\"parent24\\\",\\\"text\\\":\\\"Monitors\\\",\\\"parentId\\\":\\\"parent18\\\"},{\\\"id\\\":\\\"parent25\\\",\\\"text\\\":\\\"Men\\\",\\\"parentId\\\":\\\"parent3\\\"},{\\\"id\\\":\\\"parent26\\\",\\\"text\\\":\\\"Women\\\",\\\"parentId\\\":\\\"parent3\\\"},{\\\"id\\\":\\\"parent27\\\",\\\"text\\\":\\\"Shirts\\\",\\\"parentId\\\":\\\"parent25\\\"},{\\\"id\\\":\\\"parent28\\\",\\\"text\\\":\\\"Jackets\\\",\\\"parentId\\\":\\\"parent25\\\"},{\\\"id\\\":\\\"parent29\\\",\\\"text\\\":\\\"Track Suits\\\",\\\"parentId\\\":\\\"parent25\\\"},{\\\"id\\\":\\\"parent30\\\",\\\"text\\\":\\\"Kurtas\\\",\\\"parentId\\\":\\\"parent26\\\"},{\\\"id\\\":\\\"parent31\\\",\\\"text\\\":\\\"Salwars\\\",\\\"parentId\\\":\\\"parent26\\\"},{\\\"id\\\":\\\"parent32\\\",\\\"text\\\":\\\"Sarees\\\",\\\"parentId\\\":\\\"parent26\\\"},{\\\"id\\\":\\\"parent33\\\",\\\"text\\\":\\\"Furniture\\\",\\\"parentId\\\":\\\"parent4\\\"},{\\\"id\\\":\\\"parent34\\\",\\\"text\\\":\\\"Decor\\\",\\\"parentId\\\":\\\"parent4\\\"},{\\\"id\\\":\\\"parent35\\\",\\\"text\\\":\\\"Beds\\\",\\\"parentId\\\":\\\"parent33\\\"},{\\\"id\\\":\\\"parent36\\\",\\\"text\\\":\\\"Mattresses\\\",\\\"parentId\\\":\\\"parent33\\\"},{\\\"id\\\":\\\"parent37\\\",\\\"text\\\":\\\"Dining Tables\\\",\\\"parentId\\\":\\\"parent33\\\"},{\\\"id\\\":\\\"parent38\\\",\\\"text\\\":\\\"Clocks\\\",\\\"parentId\\\":\\\"parent34\\\"},{\\\"id\\\":\\\"parent39\\\",\\\"text\\\":\\\"Wall Decals\\\",\\\"parentId\\\":\\\"parent34\\\"},{\\\"id\\\":\\\"parent40\\\",\\\"text\\\":\\\"Paintings\\\",\\\"parentId\\\":\\\"parent34\\\"},{\\\"id\\\":\\\"parent41\\\",\\\"text\\\":\\\"Televisions\\\",\\\"parentId\\\":\\\"parent5\\\"},{\\\"id\\\":\\\"parent42\\\",\\\"text\\\":\\\"Home Theatres\\\",\\\"parentId\\\":\\\"parent5\\\"},{\\\"id\\\":\\\"parent43\\\",\\\"text\\\":\\\"Gaming Laptops\\\",\\\"parentId\\\":\\\"parent5\\\"}],\\\"scrollableData\\\":[{\\\"text\\\":\\\"Appliances\\\",\\\"id\\\":\\\"appliances\\\",\\\"items\\\":[{\\\"text\\\":\\\"Kitchen\\\",\\\"items\\\":[{\\\"text\\\":\\\"Electric Cookers\\\"},{\\\"text\\\":\\\"Coffee Makers\\\"},{\\\"text\\\":\\\"Blenders\\\"},{\\\"text\\\":\\\"Microwave Ovens\\\"}]},{\\\"text\\\":\\\"Television\\\",\\\"items\\\":[{\\\"text\\\":\\\"Our Exclusive TVs\\\"},{\\\"text\\\":\\\"Smart TVs\\\"},{\\\"text\\\":\\\"Big Screen TVs\\\"}]},{\\\"text\\\":\\\"Washing Machine\\\"},{\\\"text\\\":\\\"Refrigerators\\\"},{\\\"text\\\":\\\"Air Conditioners\\\",\\\"items\\\":[{\\\"text\\\":\\\"Inverter ACs\\\"},{\\\"text\\\":\\\"Split ACs\\\"},{\\\"text\\\":\\\"Window ACs\\\"}]},{\\\"text\\\":\\\"Water Purifiers\\\"},{\\\"text\\\":\\\"Air Purifiers\\\"},{\\\"text\\\":\\\"Chimneys\\\"},{\\\"text\\\":\\\"Inverters\\\"},{\\\"text\\\":\\\"Healthy Living\\\"},{\\\"text\\\":\\\"Vacuum Cleaners\\\"},{\\\"text\\\":\\\"Room Heaters\\\"},{\\\"text\\\":\\\"New Launches\\\"}]},{\\\"text\\\":\\\"Accessories\\\",\\\"items\\\":[{\\\"text\\\":\\\"Mobile\\\",\\\"id\\\":\\\"mobile\\\",\\\"items\\\":[{\\\"text\\\":\\\"Headphones\\\"},{\\\"text\\\":\\\"Batteries\\\"},{\\\"text\\\":\\\"Memory Cards\\\"},{\\\"text\\\":\\\"Power Banks\\\"},{\\\"text\\\":\\\"Mobile Cases\\\"},{\\\"text\\\":\\\"Screen Protectors\\\"},{\\\"text\\\":\\\"Data Cables\\\"},{\\\"text\\\":\\\"Chargers\\\"},{\\\"text\\\":\\\"Selfie Sticks\\\"},{\\\"text\\\":\\\"OTG Cable\\\"}]},{\\\"text\\\":\\\"Laptops\\\"},{\\\"text\\\":\\\"Desktop PC\\\",\\\"items\\\":[{\\\"text\\\":\\\"Pendrives\\\"},{\\\"text\\\":\\\"External Hard Disks\\\"},{\\\"text\\\":\\\"Monitors\\\"},{\\\"text\\\":\\\"Keyboards\\\"}]},{\\\"text\\\":\\\"Camera\\\",\\\"items\\\":[{\\\"text\\\":\\\"Lens\\\"},{\\\"text\\\":\\\"Tripods\\\"}]}]},{\\\"text\\\":\\\"Fashion\\\",\\\"items\\\":[{\\\"text\\\":\\\"Men\\\"},{\\\"text\\\":\\\"Women\\\"}]},{\\\"text\\\":\\\"Home & Living\\\",\\\"items\\\":[{\\\"text\\\":\\\"Furniture\\\"},{\\\"text\\\":\\\"Decor\\\"},{\\\"text\\\":\\\"Smart Home Automation\\\"},{\\\"text\\\":\\\"Dining & Serving\\\"}]},{\\\"text\\\":\\\"Entertainment\\\",\\\"items\\\":[{\\\"text\\\":\\\"Televisions\\\"},{\\\"text\\\":\\\"Home Theatres\\\"},{\\\"text\\\":\\\"Gaming Laptops\\\"}]},{\\\"text\\\":\\\"Contact Us\\\"},{\\\"text\\\":\\\"Help\\\"}],\\\"toolbarIntegrationData\\\":[{\\\"text\\\":\\\"Appliances\\\",\\\"items\\\":[{\\\"text\\\":\\\"Kitchen\\\",\\\"items\\\":[{\\\"text\\\":\\\"Electric Cookers\\\"},{\\\"text\\\":\\\"Coffee Makers\\\"},{\\\"text\\\":\\\"Blenders\\\"}]},{\\\"text\\\":\\\"Washing Machine\\\",\\\"items\\\":[{\\\"text\\\":\\\"Fully Automatic\\\"},{\\\"text\\\":\\\"Semi Automatic\\\"}]},{\\\"text\\\":\\\"Air Conditioners\\\",\\\"items\\\":[{\\\"text\\\":\\\"Inverter ACs\\\"},{\\\"text\\\":\\\"Split ACs\\\"},{\\\"text\\\":\\\"Window ACs\\\"}]}]},{\\\"text\\\":\\\"Accessories\\\",\\\"items\\\":[{\\\"text\\\":\\\"Mobile\\\",\\\"items\\\":[{\\\"text\\\":\\\"Headphones\\\"},{\\\"text\\\":\\\"Memory Cards\\\"},{\\\"text\\\":\\\"Power Banks\\\"}]},{\\\"text\\\":\\\"Computer\\\",\\\"items\\\":[{\\\"text\\\":\\\"Pendrives\\\"},{\\\"text\\\":\\\"External Hard Disks\\\"},{\\\"text\\\":\\\"Monitors\\\"}]}]},{\\\"text\\\":\\\"Fashion\\\",\\\"items\\\":[{\\\"text\\\":\\\"Men\\\",\\\"items\\\":[{\\\"text\\\":\\\"Shirts\\\"},{\\\"text\\\":\\\"Jackets\\\"},{\\\"text\\\":\\\"Track Suits\\\"}]},{\\\"text\\\":\\\"Women\\\",\\\"items\\\":[{\\\"text\\\":\\\"Kurtas\\\"},{\\\"text\\\":\\\"Salwars\\\"},{\\\"text\\\":\\\"Sarees\\\"}]}]},{\\\"text\\\":\\\"Home & Living\\\",\\\"items\\\":[{\\\"text\\\":\\\"Furniture\\\",\\\"items\\\":[{\\\"text\\\":\\\"Beds\\\"},{\\\"text\\\":\\\"Mattresses\\\"},{\\\"text\\\":\\\"Dining Tables\\\"}]},{\\\"text\\\":\\\"Decor\\\",\\\"items\\\":[{\\\"text\\\":\\\"Clocks\\\"},{\\\"text\\\":\\\"Wall Decals\\\"},{\\\"text\\\":\\\"Paintings\\\"}]}]}],\\\"userData\\\":[{\\\"text\\\":\\\"My Profile\\\"},{\\\"text\\\":\\\"Orders\\\"},{\\\"text\\\":\\\"Rewards\\\"},{\\\"text\\\":\\\"Logout\\\"}],\\\"hamburgerData\\\":[{\\\"text\\\":\\\"Accessories\\\",\\\"items\\\":[{\\\"text\\\":\\\"Mobile\\\",\\\"id\\\":\\\"mobile\\\",\\\"items\\\":[{\\\"text\\\":\\\"Headphones\\\"},{\\\"text\\\":\\\"Batteries\\\"},{\\\"text\\\":\\\"Memory Cards\\\"}]},{\\\"text\\\":\\\"Laptops\\\"},{\\\"text\\\":\\\"Desktop PC\\\",\\\"items\\\":[{\\\"text\\\":\\\"Pendrives\\\"},{\\\"text\\\":\\\"External Hard Disks\\\"}]},{\\\"text\\\":\\\"Camera\\\",\\\"items\\\":[{\\\"text\\\":\\\"Lens\\\"},{\\\"text\\\":\\\"Tripods\\\"}]}]},{\\\"text\\\":\\\"Fashion\\\",\\\"items\\\":[{\\\"text\\\":\\\"Men\\\"},{\\\"text\\\":\\\"Women\\\"}]},{\\\"text\\\":\\\"Home & Living\\\",\\\"items\\\":[{\\\"text\\\":\\\"Furniture\\\"},{\\\"text\\\":\\\"Decor\\\"},{\\\"text\\\":\\\"Smart Home Automation\\\"},{\\\"text\\\":\\\"Dining & Serving\\\"}]},{\\\"text\\\":\\\"Entertainment\\\",\\\"items\\\":[{\\\"text\\\":\\\"Televisions\\\"},{\\\"text\\\":\\\"Home Theatres\\\"},{\\\"text\\\":\\\"Gaming Laptops\\\"}]},{\\\"text\\\":\\\"Contact Us\\\"},{\\\"text\\\":\\\"Help\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/menu-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/**\\n * ej2 Menu - toolbar integration styles\\n */\\n@font-face {\\n    font-family: 'e-menu';\\n    src:\\n    url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMjvJSpgAAAEoAAAAVmNtYXBsm2feAAABpAAAAGxnbHlmmEcyrQAAAiQAAAWIaGVhZBJ0bwcAAADQAAAANmhoZWEHmQNyAAAArAAAACRobXR4I0AAAAAAAYAAAAAkbG9jYQaGB+4AAAIQAAAAFG1heHABGACaAAABCAAAACBuYW1lc0cOBgAAB6wAAAIlcG9zdJbKd4kAAAnUAAAAfQABAAADUv9qAFoEAAAA//4D6gABAAAAAAAAAAAAAAAAAAAACQABAAAAAQAAhka7o18PPPUACwPoAAAAANe2FRwAAAAA17YVHAAAAAAD6gPqAAAACAACAAAAAAAAAAEAAAAJAI4ABQAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPrAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5anohgNS/2oAWgPqAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAAAAAAgAAAAMAAAAUAAMAAQAAABQABABYAAAADgAIAAIABuWp5bPluefo6CLohv//AADlqeWy5bnn6Ogi6IX//wAAAAAAAAAAAAAAAAABAA4ADgAQABAAEAAQAAAABQAGAAcACAABAAIAAwAEAAAAAACsASoBRAGwAhICUAKEAsQABAAAAAAD6gNZAD8AfwCDAI0AAAEzHw0dAQ8OLw8/DiMzHw0dAQ8OLw8/DgMhAyEBIRU3EyUVBQMjAwgJCAgIBwcHBgUFBAQDAgEBAgMEBAUFBgcHBwgICAkJCAgIBwcHBgUFBAQDAgEBAQECAwQEBQUGBwcHCAgI5AgJCAgHBwcGBQUEBAIDAQEDAgQEBQUGBwcHCAgJCAkICAgIBwYGBQUFAwMCAQEBAQIDAwUFBQYGBwgICAijAnyQ/qj+EgEKAssBcf5Yy9UBTwICAgQEBQYGBgcHCAgJCAkICQcIBwYGBgQFAwMCAQEBAQIDAwUEBgYGBwgHCQgJCAkICAcHBgYGBQQEAgICAgICBAQFBgYGBwcICAkICQgJBwgHBgYGBAUDAwIBAQEBAgMDBQQGBgYHCAcJCAkICQgIBwcGBgYFBAQCAgIBu/67AZUBAf5LAj0CAbUAAAAFAAAAAAPqA+oAAgAWABgAPABkAAA3OQEnMx8PFQc3MQE7AR8OAQcvDwEzHwoPBi8PPwP/nAgODg4NDAwLCwoICAcFBAMC6k4CdAgHEA4PDQ0MDAoJCAcGBAIB/kWFAQMEBgcJCgsLDQ0NDg4ODgLaBg0GBgYGBjwFBAMBAQECAgYJNAEDBAYHCQoKDAwNDQ4ODg40GQkKZJsBAwQFBwcJCQoMCw0NDg8OCE7pAnUDBQYHCQkLDAwNDg0ODg7+SIgODg4NDg0MDAsKCAgGBAMBArUCAgMDBQU9CQkJCQgICAcNDjQNDg4ODQ0MDAsJCQcGBAMBNA4DAgAAAAABAAAAAAPqA60ACgAAEyEVIRUhAxMhAyEVAcwBzPzEN5MDHrj84gOtXFz9/QGn/boAAAAABQAAAAADjgPqAAMABwALAA8AUwAAEyEVITUhFSE1IRUhJxEhESUhHw8RDw8hLw8RPw7qAij92AIo/dgCKP3YOwKi/XICeggICAgHBwYGBQUEAwMCAQEBAQIDAwQFBQYGBwcICAgI/YYICAgIBwcGBgUFBAMDAgEBAQECAwMEBQUGBgcHCAgIAQs+9j72Prj9XgKi9gEBAgMDBAUFBgYHBwgICAj8zggICAgHBwYGBQUEAwMCAQEBAQIDAwQFBQYGBwcICAgIAzIICAgIBwcGBgUFBAMDAgEABQAAAAADqQOpAAQACgAUAB4AOwAACQEXATUBFAcmNDIDBgcuATQ2MhYUAwYHLgE0NjIWFBc2NS4BIgYUFhcyNxcHJiMOARQWMjY3NCc3ATM1Ayb++FkBMv5fFRUq3xglJjExSzEZGCUmMTFLMUoOAmKUY2JLJyFmZiEnS2JilWICDmcBM4MDgP74WQE2K/50FQICKv6lGQICMkoyMkoB9xkCAjJKMjJKIyEnSmNjlGMCDmdnDgJjlGNjSichZ/7NKwAAAAMAAAAAA4oD5gAHABAAJwAAARUhNTMRIRElHgEGIiY0NjInBgcjIgYVERQWMyEyNjURNCYrAS4BIgEZAbZd/ZABWAwBGiYZGSZhIg+8JjU1JgJ2JjU1JrwPRFgDLn59/TICz1IMJxkZJxlAGSkzJv0pJzMzJwLXJjMpMwADAAAAAAOpA+cAAwAUAB4AAAERIREnBhURFBYXIT4BNRE0JiMhIicGFREzESE1IQYDTP4MQxs2JgH3JzU1J/4JJtgZXQIT/egmAs/9jwJxRBkm/YcmMwICMyYCeSYynxon/Y8CcV4CAAIAAAAAA+cD5wALACMAAAEOAQcuASc+ATceAQUeARcyNj8BARYyNjQnATc+ATUuAScOAQLYA7SHiLMEBLOIh7T9KwXnrkeBNAMBAQ4kHA7+/wMpLgTora7nAk6HtAMDtIeIswQEs4it6AQuKQP+/w4bJQ4BAQM0gUeu5wUF5wAAAAASAN4AAQAAAAAAAAABAAAAAQAAAAAAAQAHAAEAAQAAAAAAAgAHAAgAAQAAAAAAAwAHAA8AAQAAAAAABAAHABYAAQAAAAAABQALAB0AAQAAAAAABgAHACgAAQAAAAAACgAsAC8AAQAAAAAACwASAFsAAwABBAkAAAACAG0AAwABBAkAAQAOAG8AAwABBAkAAgAOAH0AAwABBAkAAwAOAIsAAwABBAkABAAOAJkAAwABBAkABQAWAKcAAwABBAkABgAOAL0AAwABBAkACgBYAMsAAwABBAkACwAkASMgZS1pY29uc1JlZ3VsYXJlLWljb25zZS1pY29uc1ZlcnNpb24gMS4wZS1pY29uc0ZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAZQAtAGkAYwBvAG4AcwBSAGUAZwB1AGwAYQByAGUALQBpAGMAbwBuAHMAZQAtAGkAYwBvAG4AcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAZQAtAGkAYwBvAG4AcwBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAQIBAwEEAQUBBgEHAQgBCQEKAA1zaG9wcGluZy1jYXJ0B2VkaXQtMDUMZmlsZS1vcGVuLTAxDGZpbGUtdGV4dC0wMQNDdXQFUGFzdGUEQ29weQZTZWFyY2gAAAAAAA==) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.em-icons {\\n    font-family: 'e-menu';\\n    font-style: normal;\\n    font-variant: normal;\\n    font-weight: normal;\\n    text-transform: none;\\n    line-height: 1;\\n}\\n/* custom code start */\\n.toolbar-menu-control {\\n    margin: 45px auto 0;\\n    max-width: 950px;\\n}\\n/* custom code end */\\n\\n/* Search and Shopping cart icons */\\n.toolbar-menu-control .e-menu-search::before {\\n    content: '\\\\E5B9';\\n}\\n.toolbar-menu-control .e-menu-shopping-cart::before {\\n    content: '\\\\E7E8';\\n}\\n\\n/* Shopping cart icon size and customization */\\n.toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-menu-shopping-cart {\\n    font-size: 20px;\\n    margin: 4px 1px 0 0;\\n}\\n.e-bigger .toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-menu-shopping-cart {\\n    font-size: 30px;\\n    margin-top: 7px;\\n}\\n.e-bigger.material .toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn {\\n    margin-top: 3.5px;\\n}\\n\\n/* Overall UI customization */\\n.toolbar-menu-control .e-menu-wrapper {\\n    margin-right: 160px;\\n    border: none;\\n    vertical-align: middle;\\n}\\n.toolbar-menu-control .e-toolbar .e-toolbar-left .e-toolbar-item.e-template {\\n    padding: 0;\\n}\\n.material .toolbar-menu-control .e-toolbar .e-input-group .e-input {\\n    padding-bottom: 4px;\\n}\\n.material .toolbar-menu-control .e-toolbar .e-input-group .e-menu-search {\\n    margin-bottom: 0;\\n}\\n.toolbar-menu-control .e-toolbar .e-hscroll-bar {\\n    overflow-y: hidden;\\n}\\n.toolbar-menu-control .e-toolbar .e-toolbar-items .e-toolbar-item #ddb {\\n    text-overflow: initial;\\n}\\n.fabric .toolbar-menu-control .e-toolbar-items .e-toolbar-left .e-menu-wrapper,\\n.fabric .toolbar-menu-control .e-toolbar-items .e-dropdown-btn {\\n    background-color: transparent;\\n}\\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn,\\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:hover,\\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:focus, \\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:active {\\n\\tbackground-color: transparent;\\n\\tborder-color: transparent;\\n\\tcolor: #6c757d;\\n\\tbox-shadow: none;\\n}\\n.bootstrap4 .toolbar-menu-control .e-menu-wrapper ul {\\n        background-color: transparent;\\n}\\n\\n/* custom code start */\\n@media only screen and (max-width: 1300px) {\\n.toolbar-menu-control {\\n        width: auto;\\n}\\n}\\n/* custom code end */\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/igations-vue-samples_master-JLSKYPBJT7XRLHSTDZHCZZK6FQMYNR5KFU6VDOAVJITLKANH2PTA/Samples/menu/toolbar-integration/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8BA;;GAEG;AACH;IACI,sBAAsB;IACtB;shHACkhH;IAClhH,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,eAAe;CAClB;AACD,uBAAuB;AACvB;IACI,oBAAoB;IACpB,iBAAiB;CACpB;AACD,qBAAqB;;AAErB,oCAAoC;AACpC;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;;AAED,+CAA+C;AAC/C;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,kBAAkB;CACrB;;AAED,8BAA8B;AAC9B;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;CAC1B;AACD;IACI,WAAW;CACd;AACD;IACI,oBAAoB;CACvB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,uBAAuB;CAC1B;AACD;;IAEI,8BAA8B;CACjC;AACD;;;;CAIC,8BAA8B;CAC9B,0BAA0B;CAC1B,eAAe;CACf,iBAAiB;CACjB;AACD;QACQ,8BAA8B;CACrC;;AAED,uBAAuB;AACvB;AACA;QACQ,YAAY;CACnB;CACA;AACD,qBAAqB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/**\\n * ej2 Menu - toolbar integration styles\\n */\\n@font-face {\\n    font-family: 'e-menu';\\n    src:\\n    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.em-icons {\\n    font-family: 'e-menu';\\n    font-style: normal;\\n    font-variant: normal;\\n    font-weight: normal;\\n    text-transform: none;\\n    line-height: 1;\\n}\\n/* custom code start */\\n.toolbar-menu-control {\\n    margin: 45px auto 0;\\n    max-width: 950px;\\n}\\n/* custom code end */\\n\\n/* Search and Shopping cart icons */\\n.toolbar-menu-control .e-menu-search::before {\\n    content: '\\\\e5b9';\\n}\\n.toolbar-menu-control .e-menu-shopping-cart::before {\\n    content: '\\\\e7e8';\\n}\\n\\n/* Shopping cart icon size and customization */\\n.toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-menu-shopping-cart {\\n    font-size: 20px;\\n    margin: 4px 1px 0 0;\\n}\\n.e-bigger .toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn .e-btn-icon.e-menu-shopping-cart {\\n    font-size: 30px;\\n    margin-top: 7px;\\n}\\n.e-bigger.material .toolbar-menu-control .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn {\\n    margin-top: 3.5px;\\n}\\n\\n/* Overall UI customization */\\n.toolbar-menu-control .e-menu-wrapper {\\n    margin-right: 160px;\\n    border: none;\\n    vertical-align: middle;\\n}\\n.toolbar-menu-control .e-toolbar .e-toolbar-left .e-toolbar-item.e-template {\\n    padding: 0;\\n}\\n.material .toolbar-menu-control .e-toolbar .e-input-group .e-input {\\n    padding-bottom: 4px;\\n}\\n.material .toolbar-menu-control .e-toolbar .e-input-group .e-menu-search {\\n    margin-bottom: 0;\\n}\\n.toolbar-menu-control .e-toolbar .e-hscroll-bar {\\n    overflow-y: hidden;\\n}\\n.toolbar-menu-control .e-toolbar .e-toolbar-items .e-toolbar-item #ddb {\\n    text-overflow: initial;\\n}\\n.fabric .toolbar-menu-control .e-toolbar-items .e-toolbar-left .e-menu-wrapper,\\n.fabric .toolbar-menu-control .e-toolbar-items .e-dropdown-btn {\\n    background-color: transparent;\\n}\\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn,\\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:hover,\\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:focus, \\n.bootstrap4 .toolbar-menu-control .e-toolbar-items .e-dropdown-btn:active {\\n\\tbackground-color: transparent;\\n\\tborder-color: transparent;\\n\\tcolor: #6c757d;\\n\\tbox-shadow: none;\\n}\\n.bootstrap4 .toolbar-menu-control .e-menu-wrapper ul {\\n        background-color: transparent;\\n}\\n\\n/* custom code start */\\n@media only screen and (max-width: 1300px) {\\n.toolbar-menu-control {\\n        width: auto;\\n}\\n}\\n/* custom code end */\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/menu/toolbar-integration/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/toolbar-integration/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_splitbuttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-splitbuttons */ \"./node_modules/@syncfusion/ej2-vue-splitbuttons/index.js\");\n/* harmony import */ var _menu_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-data.json */ \"./Samples/menu/toolbar-integration/menu-data.json\");\nvar _menu_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menu-data.json */ \"./Samples/menu/toolbar-integration/menu-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__[\"MenuPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__[\"ToolbarPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_splitbuttons__WEBPACK_IMPORTED_MODULE_3__[\"DropDownButtonPlugin\"]);\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"enableRipple\"])(false);\n\nvar menutemplateVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo1\", {\n  template: '<ejs-menu :items=\"menuItems\"></ejs-menu>',\n  data() {\n    return {\n      data: {},\n      menuItems: _menu_data_json__WEBPACK_IMPORTED_MODULE_4__[\"toolbarIntegrationData\"]\n    };\n  }\n});\n\nvar ddbtemplateVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo2\", {\n  template: '<ejs-dropdownbutton id=\"ddb\" :items=\"items\" content=\"Andrew\"></ejs-dropdownbutton>',\n  data() {\n    return {\n        data: {},\n        items: _menu_data_json__WEBPACK_IMPORTED_MODULE_4__[\"userData\"]\n    };\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        menuTemplate: function() {\n            return {\n                template: menutemplateVue\n            }\n        },\n        searchTemplate: '<div class=\"e-input-group\"><input class=\"e-input\" type=\"text\" placeholder=\"Search\" /><span class=\"e-input-group-icon em-icons e-menu-search\"></span></div>',\n        ddbTemplate: function() {\n            return {\n                template: ddbtemplateVue\n            }\n        }\n    };\n  },\n  methods: {\n      onCreated: function() {\n          this.$refs.toolbar.$el.ej2_instances[0].refreshOverflow();\n          Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([this.$refs.toolbar.$el.querySelector('.e-menu-shopping-cart')], 'e-icons');\n        }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/toolbar-integration/App.vue?vue&type=template&id=03367f90&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/toolbar-integration/App.vue?vue&type=template&id=03367f90& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"toolbar-menu-control\" },\n      [\n        _c(\n          \"ejs-toolbar\",\n          { ref: \"toolbar\", attrs: { created: _vm.onCreated } },\n          [\n            _c(\n              \"e-items\",\n              [\n                _c(\"e-item\", { attrs: { template: _vm.menuTemplate } }),\n                _vm._v(\" \"),\n                _c(\"e-item\", {\n                  attrs: { template: _vm.searchTemplate, align: \"Right\" }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-item\", {\n                  attrs: { template: _vm.ddbTemplate, align: \"Right\" }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-item\", {\n                  attrs: {\n                    prefixIcon: \"em-icons e-menu-shopping-cart\",\n                    align: \"Right\"\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"This sample demonstrates the real use case of \"),\n        _c(\"code\", [_vm._v(\"menu\")]),\n        _vm._v(\" component in web application.\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n        Menu utilizes the \"),\n        _c(\"code\", [_vm._v(\"items\")]),\n        _vm._v(\n          \" property to represent the menu bar in web application. In this demo, the menu component is integrated with toolbar along with customized \\n        search input box, dropdownbutton component and added shopping cart item using toolbar default option.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about menu can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/menu/use-case-scenarios/#menu-in-toolbar\"\n            }\n          },\n          [_vm._v(\"\\n        documentation\")]\n        ),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/menu/toolbar-integration/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });