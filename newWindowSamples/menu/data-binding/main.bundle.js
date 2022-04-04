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
/******/ 		"menu/data-binding/main": 0
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
/******/ 	deferredModules.push(["./Samples/menu/data-binding/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/menu/data-binding/App.vue":
/*!*******************************************!*\
  !*** ./Samples/menu/data-binding/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7fc90140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7fc90140&scoped=true& */ \"./Samples/menu/data-binding/App.vue?vue&type=template&id=7fc90140&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/menu/data-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7fc90140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css& */ \"./Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7fc90140_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7fc90140_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7fc90140\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/menu/data-binding/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/menu/data-binding/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/menu/data-binding/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/menu/data-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7fc90140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7fc90140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7fc90140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7fc90140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7fc90140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/menu/data-binding/App.vue?vue&type=template&id=7fc90140&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./Samples/menu/data-binding/App.vue?vue&type=template&id=7fc90140&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7fc90140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7fc90140&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/data-binding/App.vue?vue&type=template&id=7fc90140&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7fc90140_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7fc90140_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/menu/data-binding/main.js":
/*!*******************************************!*\
  !*** ./Samples/menu/data-binding/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/menu/data-binding/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/main.js?");

/***/ }),

/***/ "./Samples/menu/data-binding/menu-data.json":
/*!**************************************************!*\
  !*** ./Samples/menu/data-binding/menu-data.json ***!
  \**************************************************/
/*! exports provided: apiData, headerData, dataBinding, scrollableData, toolbarIntegrationData, userData, hamburgerData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"apiData\\\":[{\\\"header\\\":\\\"Events\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Conferences\\\"},{\\\"text\\\":\\\"Music\\\"},{\\\"text\\\":\\\"Workshops\\\"}]},{\\\"header\\\":\\\"Movies\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Now Showing\\\"},{\\\"text\\\":\\\"Coming Soon\\\"}]},{\\\"header\\\":\\\"Directory\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Media Gallery\\\"},{\\\"text\\\":\\\"Newsletters\\\"}]},{\\\"header\\\":\\\"Queries\\\",\\\"subItems\\\":[{\\\"text\\\":\\\"Our Policy\\\"},{\\\"text\\\":\\\"Site Map\\\"},{\\\"text\\\":\\\"24x7 Support\\\"}]},{\\\"header\\\":\\\"Services\\\"}],\\\"headerData\\\":[{\\\"text\\\":\\\"Events\\\"},{\\\"text\\\":\\\"Movies\\\"},{\\\"text\\\":\\\"Directory\\\"},{\\\"text\\\":\\\"Queries\\\"},{\\\"text\\\":\\\"Services\\\"}],\\\"dataBinding\\\":[{\\\"id\\\":\\\"parent1\\\",\\\"text\\\":\\\"Appliances\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent2\\\",\\\"text\\\":\\\"Accessories\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent3\\\",\\\"text\\\":\\\"Fashion\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent4\\\",\\\"text\\\":\\\"Home & Living\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent5\\\",\\\"text\\\":\\\"Entertainment\\\",\\\"parentId\\\":null},{\\\"id\\\":\\\"parent6\\\",\\\"text\\\":\\\"Kitchen\\\",\\\"parentId\\\":\\\"parent1\\\"},{\\\"id\\\":\\\"parent7\\\",\\\"text\\\":\\\"Washing Machine\\\",\\\"parentId\\\":\\\"parent1\\\"},{\\\"id\\\":\\\"parent8\\\",\\\"text\\\":\\\"Air Conditioners\\\",\\\"parentId\\\":\\\"parent1\\\"},{\\\"id\\\":\\\"parent9\\\",\\\"text\\\":\\\"Electric Cookers\\\",\\\"parentId\\\":\\\"parent6\\\"},{\\\"id\\\":\\\"parent10\\\",\\\"text\\\":\\\"Coffee Makers\\\",\\\"parentId\\\":\\\"parent6\\\"},{\\\"id\\\":\\\"parent11\\\",\\\"text\\\":\\\"Blenders\\\",\\\"parentId\\\":\\\"parent6\\\"},{\\\"id\\\":\\\"parent12\\\",\\\"text\\\":\\\"Fully Automatic\\\",\\\"parentId\\\":\\\"parent7\\\"},{\\\"id\\\":\\\"parent13\\\",\\\"text\\\":\\\"Semi Automatic\\\",\\\"parentId\\\":\\\"parent7\\\"},{\\\"id\\\":\\\"parent14\\\",\\\"text\\\":\\\"Inverter ACs\\\",\\\"parentId\\\":\\\"parent8\\\"},{\\\"id\\\":\\\"parent15\\\",\\\"text\\\":\\\"Split ACs\\\",\\\"parentId\\\":\\\"parent8\\\"},{\\\"id\\\":\\\"parent16\\\",\\\"text\\\":\\\"Window ACs\\\",\\\"parentId\\\":\\\"parent8\\\"},{\\\"id\\\":\\\"parent17\\\",\\\"text\\\":\\\"Mobile\\\",\\\"parentId\\\":\\\"parent2\\\"},{\\\"id\\\":\\\"parent18\\\",\\\"text\\\":\\\"Computer\\\",\\\"parentId\\\":\\\"parent2\\\"},{\\\"id\\\":\\\"parent19\\\",\\\"text\\\":\\\"Headphones\\\",\\\"parentId\\\":\\\"parent17\\\"},{\\\"id\\\":\\\"parent20\\\",\\\"text\\\":\\\"Memory Cards\\\",\\\"parentId\\\":\\\"parent17\\\"},{\\\"id\\\":\\\"parent21\\\",\\\"text\\\":\\\"Power Banks\\\",\\\"parentId\\\":\\\"parent17\\\"},{\\\"id\\\":\\\"parent22\\\",\\\"text\\\":\\\"Pendrives\\\",\\\"parentId\\\":\\\"parent18\\\"},{\\\"id\\\":\\\"parent23\\\",\\\"text\\\":\\\"External Hard Disks\\\",\\\"parentId\\\":\\\"parent18\\\"},{\\\"id\\\":\\\"parent24\\\",\\\"text\\\":\\\"Monitors\\\",\\\"parentId\\\":\\\"parent18\\\"},{\\\"id\\\":\\\"parent25\\\",\\\"text\\\":\\\"Men\\\",\\\"parentId\\\":\\\"parent3\\\"},{\\\"id\\\":\\\"parent26\\\",\\\"text\\\":\\\"Women\\\",\\\"parentId\\\":\\\"parent3\\\"},{\\\"id\\\":\\\"parent27\\\",\\\"text\\\":\\\"Shirts\\\",\\\"parentId\\\":\\\"parent25\\\"},{\\\"id\\\":\\\"parent28\\\",\\\"text\\\":\\\"Jackets\\\",\\\"parentId\\\":\\\"parent25\\\"},{\\\"id\\\":\\\"parent29\\\",\\\"text\\\":\\\"Track Suits\\\",\\\"parentId\\\":\\\"parent25\\\"},{\\\"id\\\":\\\"parent30\\\",\\\"text\\\":\\\"Kurtas\\\",\\\"parentId\\\":\\\"parent26\\\"},{\\\"id\\\":\\\"parent31\\\",\\\"text\\\":\\\"Salwars\\\",\\\"parentId\\\":\\\"parent26\\\"},{\\\"id\\\":\\\"parent32\\\",\\\"text\\\":\\\"Sarees\\\",\\\"parentId\\\":\\\"parent26\\\"},{\\\"id\\\":\\\"parent33\\\",\\\"text\\\":\\\"Furniture\\\",\\\"parentId\\\":\\\"parent4\\\"},{\\\"id\\\":\\\"parent34\\\",\\\"text\\\":\\\"Decor\\\",\\\"parentId\\\":\\\"parent4\\\"},{\\\"id\\\":\\\"parent35\\\",\\\"text\\\":\\\"Beds\\\",\\\"parentId\\\":\\\"parent33\\\"},{\\\"id\\\":\\\"parent36\\\",\\\"text\\\":\\\"Mattresses\\\",\\\"parentId\\\":\\\"parent33\\\"},{\\\"id\\\":\\\"parent37\\\",\\\"text\\\":\\\"Dining Tables\\\",\\\"parentId\\\":\\\"parent33\\\"},{\\\"id\\\":\\\"parent38\\\",\\\"text\\\":\\\"Clocks\\\",\\\"parentId\\\":\\\"parent34\\\"},{\\\"id\\\":\\\"parent39\\\",\\\"text\\\":\\\"Wall Decals\\\",\\\"parentId\\\":\\\"parent34\\\"},{\\\"id\\\":\\\"parent40\\\",\\\"text\\\":\\\"Paintings\\\",\\\"parentId\\\":\\\"parent34\\\"},{\\\"id\\\":\\\"parent41\\\",\\\"text\\\":\\\"Televisions\\\",\\\"parentId\\\":\\\"parent5\\\"},{\\\"id\\\":\\\"parent42\\\",\\\"text\\\":\\\"Home Theatres\\\",\\\"parentId\\\":\\\"parent5\\\"},{\\\"id\\\":\\\"parent43\\\",\\\"text\\\":\\\"Gaming Laptops\\\",\\\"parentId\\\":\\\"parent5\\\"}],\\\"scrollableData\\\":[{\\\"text\\\":\\\"Appliances\\\",\\\"id\\\":\\\"appliances\\\",\\\"items\\\":[{\\\"text\\\":\\\"Kitchen\\\",\\\"items\\\":[{\\\"text\\\":\\\"Electric Cookers\\\"},{\\\"text\\\":\\\"Coffee Makers\\\"},{\\\"text\\\":\\\"Blenders\\\"},{\\\"text\\\":\\\"Microwave Ovens\\\"}]},{\\\"text\\\":\\\"Television\\\",\\\"items\\\":[{\\\"text\\\":\\\"Our Exclusive TVs\\\"},{\\\"text\\\":\\\"Smart TVs\\\"},{\\\"text\\\":\\\"Big Screen TVs\\\"}]},{\\\"text\\\":\\\"Washing Machine\\\"},{\\\"text\\\":\\\"Refrigerators\\\"},{\\\"text\\\":\\\"Air Conditioners\\\",\\\"items\\\":[{\\\"text\\\":\\\"Inverter ACs\\\"},{\\\"text\\\":\\\"Split ACs\\\"},{\\\"text\\\":\\\"Window ACs\\\"}]},{\\\"text\\\":\\\"Water Purifiers\\\"},{\\\"text\\\":\\\"Air Purifiers\\\"},{\\\"text\\\":\\\"Chimneys\\\"},{\\\"text\\\":\\\"Inverters\\\"},{\\\"text\\\":\\\"Healthy Living\\\"},{\\\"text\\\":\\\"Vacuum Cleaners\\\"},{\\\"text\\\":\\\"Room Heaters\\\"},{\\\"text\\\":\\\"New Launches\\\"}]},{\\\"text\\\":\\\"Accessories\\\",\\\"items\\\":[{\\\"text\\\":\\\"Mobile\\\",\\\"id\\\":\\\"mobile\\\",\\\"items\\\":[{\\\"text\\\":\\\"Headphones\\\"},{\\\"text\\\":\\\"Batteries\\\"},{\\\"text\\\":\\\"Memory Cards\\\"},{\\\"text\\\":\\\"Power Banks\\\"},{\\\"text\\\":\\\"Mobile Cases\\\"},{\\\"text\\\":\\\"Screen Protectors\\\"},{\\\"text\\\":\\\"Data Cables\\\"},{\\\"text\\\":\\\"Chargers\\\"},{\\\"text\\\":\\\"Selfie Sticks\\\"},{\\\"text\\\":\\\"OTG Cable\\\"}]},{\\\"text\\\":\\\"Laptops\\\"},{\\\"text\\\":\\\"Desktop PC\\\",\\\"items\\\":[{\\\"text\\\":\\\"Pendrives\\\"},{\\\"text\\\":\\\"External Hard Disks\\\"},{\\\"text\\\":\\\"Monitors\\\"},{\\\"text\\\":\\\"Keyboards\\\"}]},{\\\"text\\\":\\\"Camera\\\",\\\"items\\\":[{\\\"text\\\":\\\"Lens\\\"},{\\\"text\\\":\\\"Tripods\\\"}]}]},{\\\"text\\\":\\\"Fashion\\\",\\\"items\\\":[{\\\"text\\\":\\\"Men\\\"},{\\\"text\\\":\\\"Women\\\"}]},{\\\"text\\\":\\\"Home & Living\\\",\\\"items\\\":[{\\\"text\\\":\\\"Furniture\\\"},{\\\"text\\\":\\\"Decor\\\"},{\\\"text\\\":\\\"Smart Home Automation\\\"},{\\\"text\\\":\\\"Dining & Serving\\\"}]},{\\\"text\\\":\\\"Entertainment\\\",\\\"items\\\":[{\\\"text\\\":\\\"Televisions\\\"},{\\\"text\\\":\\\"Home Theatres\\\"},{\\\"text\\\":\\\"Gaming Laptops\\\"}]},{\\\"text\\\":\\\"Contact Us\\\"},{\\\"text\\\":\\\"Help\\\"}],\\\"toolbarIntegrationData\\\":[{\\\"text\\\":\\\"Appliances\\\",\\\"items\\\":[{\\\"text\\\":\\\"Kitchen\\\",\\\"items\\\":[{\\\"text\\\":\\\"Electric Cookers\\\"},{\\\"text\\\":\\\"Coffee Makers\\\"},{\\\"text\\\":\\\"Blenders\\\"}]},{\\\"text\\\":\\\"Washing Machine\\\",\\\"items\\\":[{\\\"text\\\":\\\"Fully Automatic\\\"},{\\\"text\\\":\\\"Semi Automatic\\\"}]},{\\\"text\\\":\\\"Air Conditioners\\\",\\\"items\\\":[{\\\"text\\\":\\\"Inverter ACs\\\"},{\\\"text\\\":\\\"Split ACs\\\"},{\\\"text\\\":\\\"Window ACs\\\"}]}]},{\\\"text\\\":\\\"Accessories\\\",\\\"items\\\":[{\\\"text\\\":\\\"Mobile\\\",\\\"items\\\":[{\\\"text\\\":\\\"Headphones\\\"},{\\\"text\\\":\\\"Memory Cards\\\"},{\\\"text\\\":\\\"Power Banks\\\"}]},{\\\"text\\\":\\\"Computer\\\",\\\"items\\\":[{\\\"text\\\":\\\"Pendrives\\\"},{\\\"text\\\":\\\"External Hard Disks\\\"},{\\\"text\\\":\\\"Monitors\\\"}]}]},{\\\"text\\\":\\\"Fashion\\\",\\\"items\\\":[{\\\"text\\\":\\\"Men\\\",\\\"items\\\":[{\\\"text\\\":\\\"Shirts\\\"},{\\\"text\\\":\\\"Jackets\\\"},{\\\"text\\\":\\\"Track Suits\\\"}]},{\\\"text\\\":\\\"Women\\\",\\\"items\\\":[{\\\"text\\\":\\\"Kurtas\\\"},{\\\"text\\\":\\\"Salwars\\\"},{\\\"text\\\":\\\"Sarees\\\"}]}]},{\\\"text\\\":\\\"Home & Living\\\",\\\"items\\\":[{\\\"text\\\":\\\"Furniture\\\",\\\"items\\\":[{\\\"text\\\":\\\"Beds\\\"},{\\\"text\\\":\\\"Mattresses\\\"},{\\\"text\\\":\\\"Dining Tables\\\"}]},{\\\"text\\\":\\\"Decor\\\",\\\"items\\\":[{\\\"text\\\":\\\"Clocks\\\"},{\\\"text\\\":\\\"Wall Decals\\\"},{\\\"text\\\":\\\"Paintings\\\"}]}]}],\\\"userData\\\":[{\\\"text\\\":\\\"My Profile\\\"},{\\\"text\\\":\\\"Orders\\\"},{\\\"text\\\":\\\"Rewards\\\"},{\\\"text\\\":\\\"Logout\\\"}],\\\"hamburgerData\\\":[{\\\"text\\\":\\\"Accessories\\\",\\\"items\\\":[{\\\"text\\\":\\\"Mobile\\\",\\\"id\\\":\\\"mobile\\\",\\\"items\\\":[{\\\"text\\\":\\\"Headphones\\\"},{\\\"text\\\":\\\"Batteries\\\"},{\\\"text\\\":\\\"Memory Cards\\\"}]},{\\\"text\\\":\\\"Laptops\\\"},{\\\"text\\\":\\\"Desktop PC\\\",\\\"items\\\":[{\\\"text\\\":\\\"Pendrives\\\"},{\\\"text\\\":\\\"External Hard Disks\\\"}]},{\\\"text\\\":\\\"Camera\\\",\\\"items\\\":[{\\\"text\\\":\\\"Lens\\\"},{\\\"text\\\":\\\"Tripods\\\"}]}]},{\\\"text\\\":\\\"Fashion\\\",\\\"items\\\":[{\\\"text\\\":\\\"Men\\\"},{\\\"text\\\":\\\"Women\\\"}]},{\\\"text\\\":\\\"Home & Living\\\",\\\"items\\\":[{\\\"text\\\":\\\"Furniture\\\"},{\\\"text\\\":\\\"Decor\\\"},{\\\"text\\\":\\\"Smart Home Automation\\\"},{\\\"text\\\":\\\"Dining & Serving\\\"}]},{\\\"text\\\":\\\"Entertainment\\\",\\\"items\\\":[{\\\"text\\\":\\\"Televisions\\\"},{\\\"text\\\":\\\"Home Theatres\\\"},{\\\"text\\\":\\\"Gaming Laptops\\\"}]},{\\\"text\\\":\\\"Contact Us\\\"},{\\\"text\\\":\\\"Help\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/menu-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/**\\n* ej2 Menu styles\\n*/\\n.binding-menu-control[data-v-7fc90140] {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-AYH7XHMO6KSEIXRKCV5I64MQMMUYOJMXW32VBZ37W2N7QVS7ANEQ/Samples/menu/data-binding/App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;AAuBA;;EAEE;AACF;IACI,iBAAiB;IACjB,mBAAmB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=7fc90140&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/**\\n* ej2 Menu styles\\n*/\\n.binding-menu-control[data-v-7fc90140] {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/menu/data-binding/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/data-binding/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _menu_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-data.json */ \"./Samples/menu/data-binding/menu-data.json\");\nvar _menu_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menu-data.json */ \"./Samples/menu/data-binding/menu-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"MenuPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      menuItems: _menu_data_json__WEBPACK_IMPORTED_MODULE_2__[\"dataBinding\"]\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/data-binding/App.vue?vue&type=template&id=7fc90140&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/data-binding/App.vue?vue&type=template&id=7fc90140&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"binding-menu-control\"},[_c('ejs-menu',{attrs:{\"items\":_vm.menuItems}})],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the way of data binding in \"),_c('code',[_vm._v(\"menu\")]),_vm._v(\" component with JavaScript object array (local data source). Interact with \"),_c('code',[_vm._v(\"menu\")]),_vm._v(\" using hover / click action.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        The menu component loads the data through the \"),_c('code',[_vm._v(\"items\")]),_vm._v(\" property, where the data can either be structured as hierarchical or self-referential data, i.e. mapped with id and parentId fields.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"    \\n        In this demo, the component is bound with the list type data where the parent-child relation is referred by id and parentId mapping fields.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        More information about Menu can be found in this \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/menu/data-source-binding-and-custom-menu-items/#data-binding\"}},[_vm._v(\"data binding\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/menu/data-binding/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });