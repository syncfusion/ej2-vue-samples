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
/******/ 		"spreadsheet/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/default/App.vue":
/*!*********************************************!*\
  !*** ./Samples/spreadsheet/default/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_27e1792c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=27e1792c& */ \"./Samples/spreadsheet/default/App.vue?vue&type=template&id=27e1792c&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_27e1792c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_27e1792c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/default/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/spreadsheet/default/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/default/App.vue?vue&type=template&id=27e1792c&":
/*!****************************************************************************!*\
  !*** ./Samples/spreadsheet/default/App.vue?vue&type=template&id=27e1792c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_27e1792c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=27e1792c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/default/App.vue?vue&type=template&id=27e1792c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_27e1792c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_27e1792c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/default/default-data.json":
/*!*******************************************************!*\
  !*** ./Samples/spreadsheet/default/default-data.json ***!
  \*******************************************************/
/*! exports provided: defaultData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"defaultData\\\":[{\\\"Customer Name\\\":\\\"Romona Heaslip\\\",\\\"Model\\\":\\\"Taurus\\\",\\\"Color\\\":\\\"Aquamarine\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"07/11/2015\\\",\\\"Amount\\\":\\\"8529.22\\\"},{\\\"Customer Name\\\":\\\"Clare Batterton\\\",\\\"Model\\\":\\\"Sparrow\\\",\\\"Color\\\":\\\"Pink\\\",\\\"Payment Mode\\\":\\\"Cash On Delivery\\\",\\\"Delivery Date\\\":\\\"7/13/2016\\\",\\\"Amount\\\":\\\"17866.19\\\"},{\\\"Customer Name\\\":\\\"Eamon Traise\\\",\\\"Model\\\":\\\"Grand Cherokee\\\",\\\"Color\\\":\\\"Blue\\\",\\\"Payment Mode\\\":\\\"Net Banking\\\",\\\"Delivery Date\\\":\\\"09/04/2015\\\",\\\"Amount\\\":\\\"13853.09\\\"},{\\\"Customer Name\\\":\\\"Julius Gorner\\\",\\\"Model\\\":\\\"GTO\\\",\\\"Color\\\":\\\"Aquamarine\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"12/15/2017\\\",\\\"Amount\\\":\\\"2338.74\\\"},{\\\"Customer Name\\\":\\\"Jenna Schoolfield\\\",\\\"Model\\\":\\\"LX\\\",\\\"Color\\\":\\\"Yellow\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"10/08/2014\\\",\\\"Amount\\\":\\\"9578.45\\\"},{\\\"Customer Name\\\":\\\"Marylynne Harring\\\",\\\"Model\\\":\\\"Catera\\\",\\\"Color\\\":\\\"Green\\\",\\\"Payment Mode\\\":\\\"Cash On Delivery\\\",\\\"Delivery Date\\\":\\\"7/01/2017\\\",\\\"Amount\\\":\\\"19141.62\\\"},{\\\"Customer Name\\\":\\\"Vilhelmina Leipelt\\\",\\\"Model\\\":\\\"7 Series\\\",\\\"Color\\\":\\\"Goldenrod\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"12/20/2015\\\",\\\"Amount\\\":\\\"6543.30\\\"},{\\\"Customer Name\\\":\\\"Barby Heisler\\\",\\\"Model\\\":\\\"Corvette\\\",\\\"Color\\\":\\\"Red\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"11/24/2014\\\",\\\"Amount\\\":\\\"13035.06\\\"},{\\\"Customer Name\\\":\\\"Karyn Boik\\\",\\\"Model\\\":\\\"Regal\\\",\\\"Color\\\":\\\"Indigo\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"05/12/2014\\\",\\\"Amount\\\":\\\"18488.80\\\"},{\\\"Customer Name\\\":\\\"Jeanette Pamplin\\\",\\\"Model\\\":\\\"S4\\\",\\\"Color\\\":\\\"Fuscia\\\",\\\"Payment Mode\\\":\\\"Net Banking\\\",\\\"Delivery Date\\\":\\\"12/30/2014\\\",\\\"Amount\\\":\\\"12317.04\\\"},{\\\"Customer Name\\\":\\\"Cristi Espinos\\\",\\\"Model\\\":\\\"TL\\\",\\\"Color\\\":\\\"Aquamarine\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"12/18/2013\\\",\\\"Amount\\\":\\\"6230.13\\\"},{\\\"Customer Name\\\":\\\"Issy Humm\\\",\\\"Model\\\":\\\"Club Wagon\\\",\\\"Color\\\":\\\"Pink\\\",\\\"Payment Mode\\\":\\\"Cash On Delivery\\\",\\\"Delivery Date\\\":\\\"02/02/2015\\\",\\\"Amount\\\":\\\"9709.49\\\"},{\\\"Customer Name\\\":\\\"Tuesday Fautly\\\",\\\"Model\\\":\\\"V8 Vantage\\\",\\\"Color\\\":\\\"Crimson\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"11/19/2014\\\",\\\"Amount\\\":\\\"9766.10\\\"},{\\\"Customer Name\\\":\\\"Rosemaria Thomann\\\",\\\"Model\\\":\\\"Caravan\\\",\\\"Color\\\":\\\"Violet\\\",\\\"Payment Mode\\\":\\\"Net Banking\\\",\\\"Delivery Date\\\":\\\"02/08/2014\\\",\\\"Amount\\\":\\\"7685.49\\\"},{\\\"Customer Name\\\":\\\"Lyell Fuentez\\\",\\\"Model\\\":\\\"Bravada\\\",\\\"Color\\\":\\\"Violet\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"08/05/2016\\\",\\\"Amount\\\":\\\"18012.45\\\"},{\\\"Customer Name\\\":\\\"Raynell Layne\\\",\\\"Model\\\":\\\"Colorado\\\",\\\"Color\\\":\\\"Pink\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"05/30/2016\\\",\\\"Amount\\\":\\\"2785.49\\\"},{\\\"Customer Name\\\":\\\"Raye Whines\\\",\\\"Model\\\":\\\"4Runner\\\",\\\"Color\\\":\\\"Red\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"12/10/2016\\\",\\\"Amount\\\":\\\"9967.74\\\"},{\\\"Customer Name\\\":\\\"Virgina Aharoni\\\",\\\"Model\\\":\\\"TSX\\\",\\\"Color\\\":\\\"Pink\\\",\\\"Payment Mode\\\":\\\"Cash On Delivery\\\",\\\"Delivery Date\\\":\\\"10/23/2014\\\",\\\"Amount\\\":\\\"5584.33\\\"},{\\\"Customer Name\\\":\\\"Peta Cheshir\\\",\\\"Model\\\":\\\"Pathfinder\\\",\\\"Color\\\":\\\"Red\\\",\\\"Payment Mode\\\":\\\"Net Banking\\\",\\\"Delivery Date\\\":\\\"12/24/2015\\\",\\\"Amount\\\":\\\"5286.53\\\"},{\\\"Customer Name\\\":\\\"Jule Urion\\\",\\\"Model\\\":\\\"Charger\\\",\\\"Color\\\":\\\"Violet\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"11/20/2013\\\",\\\"Amount\\\":\\\"13511.91\\\"},{\\\"Customer Name\\\":\\\"Lew Gilyatt\\\",\\\"Model\\\":\\\"Bonneville\\\",\\\"Color\\\":\\\"Crimson\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"11/19/2013\\\",\\\"Amount\\\":\\\"6498.19\\\"},{\\\"Customer Name\\\":\\\"Jobey Fortun\\\",\\\"Model\\\":\\\"B-Series\\\",\\\"Color\\\":\\\"Blue\\\",\\\"Payment Mode\\\":\\\"Net Banking\\\",\\\"Delivery Date\\\":\\\"10/30/2014\\\",\\\"Amount\\\":\\\"10359.67\\\"},{\\\"Customer Name\\\":\\\"Blondie Crump\\\",\\\"Model\\\":\\\"Voyager\\\",\\\"Color\\\":\\\"Turquoise\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"04/06/2018\\\",\\\"Amount\\\":\\\"8118.39\\\"},{\\\"Customer Name\\\":\\\"Florentia Binns\\\",\\\"Model\\\":\\\"Grand Prix\\\",\\\"Color\\\":\\\"Orange\\\",\\\"Payment Mode\\\":\\\"Cash On Delivery\\\",\\\"Delivery Date\\\":\\\"10/13/2016\\\",\\\"Amount\\\":\\\"10204.37\\\"},{\\\"Customer Name\\\":\\\"Jaquelin Galtone\\\",\\\"Model\\\":\\\"Sunbird\\\",\\\"Color\\\":\\\"Red\\\",\\\"Payment Mode\\\":\\\"Net Banking\\\",\\\"Delivery Date\\\":\\\"10/22/2013\\\",\\\"Amount\\\":\\\"6528.06\\\"},{\\\"Customer Name\\\":\\\"Hakeem Easseby\\\",\\\"Model\\\":\\\"Mirage\\\",\\\"Color\\\":\\\"Crimson\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"9/12/2014\\\",\\\"Amount\\\":\\\"5619.25\\\"},{\\\"Customer Name\\\":\\\"Nickolaus Gidman\\\",\\\"Model\\\":\\\"XK\\\",\\\"Color\\\":\\\"Orange\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"05/12/2016\\\",\\\"Amount\\\":\\\"5091.43\\\"},{\\\"Customer Name\\\":\\\"Jenine Iglesia\\\",\\\"Model\\\":\\\"Accord\\\",\\\"Color\\\":\\\"Orange\\\",\\\"Payment Mode\\\":\\\"Debit Card\\\",\\\"Delivery Date\\\":\\\"09/03/2018\\\",\\\"Amount\\\":\\\"14566.08\\\"},{\\\"Customer Name\\\":\\\"Fax Witherspoon\\\",\\\"Model\\\":\\\"Range Rover Sport\\\",\\\"Color\\\":\\\"Orange\\\",\\\"Payment Mode\\\":\\\"Credit Card\\\",\\\"Delivery Date\\\":\\\"2/22/2018\\\",\\\"Amount\\\":\\\"5284.87\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/default-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/default/main.js":
/*!*********************************************!*\
  !*** ./Samples/spreadsheet/default/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-default-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content {\\n    margin-left: 0 !important;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n.ej2-new .sb-header,\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new #description {\\n    display: none\\n}\\n.ej2-new .container-fluid,\\n.ej2-new .container-fluid .control-section,\\n#sidebar-section {\\n    padding: 0px;\\n}\\n.ej2-new .sample-browser>.content.e-view {\\n    top: 0px;\\n    padding: 0px;\\n    text-align: initial;\\n    height: 100%;\\n    overflow: hidden;\\n}\\n.ej2-new .control-section .control-section {\\n    height: 100vh;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-2F6MJJQ7IME35RYC6XJFVXWHKF5TUQ4BWNZV3EHLNOCNDTPJLZOA/Samples/spreadsheet/default/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,iBAAiB;CACpB;AACD;;;;;IAKI,aAAa;CAChB;AACD;;;IAGI,aAAa;CAChB;AACD;IACI,SAAS;IACT,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-default-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content {\\n    margin-left: 0 !important;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n.ej2-new .sb-header,\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new #description {\\n    display: none\\n}\\n.ej2-new .container-fluid,\\n.ej2-new .container-fluid .control-section,\\n#sidebar-section {\\n    padding: 0px;\\n}\\n.ej2-new .sample-browser>.content.e-view {\\n    top: 0px;\\n    padding: 0px;\\n    text-align: initial;\\n    height: 100%;\\n    overflow: hidden;\\n}\\n.ej2-new .control-section .control-section {\\n    height: 100vh;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/default/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/default/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _default_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-data.json */ \"./Samples/spreadsheet/default/default-data.json\");\nvar _default_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./default-data.json */ \"./Samples/spreadsheet/default/default-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n      dataSource: _default_data_json__WEBPACK_IMPORTED_MODULE_2__[\"defaultData\"],\n      rowIndex: 30,\n      colIndex: 4,\n      cells: [\n        { index: 4, value: 'Total Amount:', style: { fontWeight: 'bold', textAlign: 'right' } },\n        { formula: '=SUM(F2:F30)', style: { fontWeight: 'bold' } },\n      ],\n      width1: 180,\n      width2: 130,\n      width3: 120,\n      openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',\n      saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'\n    }\n  },\n  methods: {\n    created: function() {\n      var spreadsheet = this.$refs.spreadsheet;\n      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');\n      spreadsheet.numberFormat('$#,##0.00', 'F2:F31');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/default/App.vue?vue&type=template&id=27e1792c&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/default/App.vue?vue&type=template&id=27e1792c& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { id: \"spreadsheet-default-section\" } },\n      [\n        _c(\n          \"ejs-spreadsheet\",\n          {\n            ref: \"spreadsheet\",\n            attrs: {\n              openUrl: _vm.openUrl,\n              saveUrl: _vm.saveUrl,\n              created: _vm.created\n            }\n          },\n          [\n            _c(\n              \"e-sheets\",\n              [\n                _c(\n                  \"e-sheet\",\n                  { attrs: { name: \"Car Sales Report\" } },\n                  [\n                    _c(\n                      \"e-ranges\",\n                      [\n                        _c(\"e-range\", { attrs: { dataSource: _vm.dataSource } })\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-rows\",\n                      [\n                        _c(\"e-row\", {\n                          attrs: { index: _vm.rowIndex, cells: _vm.cells }\n                        })\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-columns\",\n                      [\n                        _c(\"e-column\", { attrs: { width: _vm.width1 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width2 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width2 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width1 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width2 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width3 } })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n      This sample demonstrates the \"),\n        _c(\"code\", [_vm._v(\"Spreadsheet\")]),\n        _vm._v(\n          \" component and its features such as editing, formulas,\\n      formatting, importing, and exporting.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n      The \"),\n        _c(\"code\", [_vm._v(\"Spreadsheet\")]),\n        _vm._v(\n          \" component is used to organize and analyze data in tabular format.\\n      It has a built-in calculation library that supports most commonly used formulas. Excel workbook files can be\\n      imported and exported by providing \"\n        ),\n        _c(\"code\", [_vm._v(\"openUrl\")]),\n        _vm._v(\" &\\n      \"),\n        _c(\"code\", [_vm._v(\"saveUrl\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      Data binding can be achieved by setting an array of JavaScript objects or an instance of Data Manager to the\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"dataSource\")]),\n        _vm._v(\" property under the range of sheet. The \"),\n        _c(\"code\", [_vm._v(\"cellFormat\")]),\n        _vm._v(\" and\\n      \"),\n        _c(\"code\", [_vm._v(\"numberFormat\")]),\n        _vm._v(\" methods are used to apply format to a \"),\n        _c(\"code\", [_vm._v(\"ranges\")]),\n        _vm._v(\" of cells in the \"),\n        _c(\"code\", [_vm._v(\"created\")]),\n        _vm._v(\" event.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information about the Spreadsheet component can be found in this\\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/spreadsheet/getting-started\"\n            }\n          },\n          [_vm._v(\"\\n          documentation\")]\n        ),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });