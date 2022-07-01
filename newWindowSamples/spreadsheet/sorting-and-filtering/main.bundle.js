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
/******/ 		"spreadsheet/sorting-and-filtering/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/sorting-and-filtering/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/sorting-and-filtering/App.vue":
/*!***********************************************************!*\
  !*** ./Samples/spreadsheet/sorting-and-filtering/App.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_153b3f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=153b3f96& */ \"./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=template&id=153b3f96&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_153b3f96___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_153b3f96___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/sorting-and-filtering/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=template&id=153b3f96&":
/*!******************************************************************************************!*\
  !*** ./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=template&id=153b3f96& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_153b3f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=153b3f96& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=template&id=153b3f96&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_153b3f96___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_153b3f96___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/sorting-and-filtering/main.js":
/*!***********************************************************!*\
  !*** ./Samples/spreadsheet/sorting-and-filtering/main.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/sorting-and-filtering/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/main.js?");

/***/ }),

/***/ "./Samples/spreadsheet/sorting-and-filtering/sorting-and-filtering-data.json":
/*!***********************************************************************************!*\
  !*** ./Samples/spreadsheet/sorting-and-filtering/sorting-and-filtering-data.json ***!
  \***********************************************************************************/
/*! exports provided: sortingAndFiltering, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"sortingAndFiltering\\\":[{\\\"Employee ID\\\":\\\"5389863\\\",\\\"Employee Name\\\":\\\"Liuka Tewkesberry\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Human Resources\\\",\\\"Date of Joining\\\":\\\"08/22/2018\\\",\\\"Salary\\\":\\\"$32940.53\\\",\\\"City\\\":\\\"Valencia\\\"},{\\\"Employee ID\\\":\\\"9141760\\\",\\\"Employee Name\\\":\\\"Maurine McGreal\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Accounting\\\",\\\"Date of Joining\\\":\\\"02/19/2016\\\",\\\"Salary\\\":\\\"$12769.67\\\",\\\"City\\\":\\\"Thị Xã Lai Châu\\\"},{\\\"Employee ID\\\":\\\"0440371\\\",\\\"Employee Name\\\":\\\"Abby Marcum\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Legal\\\",\\\"Date of Joining\\\":\\\"03/12/2019\\\",\\\"Salary\\\":\\\"$18565.98\\\",\\\"City\\\":\\\"Lachute\\\"},{\\\"Employee ID\\\":\\\"4319060\\\",\\\"Employee Name\\\":\\\"Colet Dreghorn\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Marketing\\\",\\\"Date of Joining\\\":\\\"11/02/2018\\\",\\\"Salary\\\":\\\"$36075.62\\\",\\\"City\\\":\\\"Cincinnati\\\"},{\\\"Employee ID\\\":\\\"8524811\\\",\\\"Employee Name\\\":\\\"Morey Ilyin\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Sales\\\",\\\"Date of Joining\\\":\\\"07/13/2018\\\",\\\"Salary\\\":\\\"$19845.66\\\",\\\"City\\\":\\\"Liudu\\\"},{\\\"Employee ID\\\":\\\"3536836\\\",\\\"Employee Name\\\":\\\"Justus Eilert\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Services\\\",\\\"Date of Joining\\\":\\\"08/30/2016\\\",\\\"Salary\\\":\\\"$25054.73\\\",\\\"City\\\":\\\"Kitamilo\\\"},{\\\"Employee ID\\\":\\\"6035100\\\",\\\"Employee Name\\\":\\\"Lorelle Whyberd\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Marketing\\\",\\\"Date of Joining\\\":\\\"09/16/2010\\\",\\\"Salary\\\":\\\"$21552.49\\\",\\\"City\\\":\\\"Qandala\\\"},{\\\"Employee ID\\\":\\\"9595117\\\",\\\"Employee Name\\\":\\\"Hans Sponer\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Legal\\\",\\\"Date of Joining\\\":\\\"11/25/2019\\\",\\\"Salary\\\":\\\"$12751.78\\\",\\\"City\\\":\\\"Parakou\\\"},{\\\"Employee ID\\\":\\\"9251706\\\",\\\"Employee Name\\\":\\\"Esme Beaglehole\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Engineering\\\",\\\"Date of Joining\\\":\\\"11/24/2017\\\",\\\"Salary\\\":\\\"$34244.64\\\",\\\"City\\\":\\\"Saint-Ambroise\\\"},{\\\"Employee ID\\\":\\\"5041677\\\",\\\"Employee Name\\\":\\\"Fernandina Grindrod\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Marketing\\\",\\\"Date of Joining\\\":\\\"01/21/2019\\\",\\\"Salary\\\":\\\"$25722.37\\\",\\\"City\\\":\\\"Huashi\\\"},{\\\"Employee ID\\\":\\\"9596007\\\",\\\"Employee Name\\\":\\\"Glen Lambrechts\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Human Resources\\\",\\\"Date of Joining\\\":\\\"09/25/2019\\\",\\\"Salary\\\":\\\"$47190.81\\\",\\\"City\\\":\\\"Krajan Nglinggis\\\"},{\\\"Employee ID\\\":\\\"3506310\\\",\\\"Employee Name\\\":\\\"Judy Crick\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Human Resources\\\",\\\"Date of Joining\\\":\\\"10/22/2013\\\",\\\"Salary\\\":\\\"$14168.85\\\",\\\"City\\\":\\\"Jianchang\\\"},{\\\"Employee ID\\\":\\\"0283605\\\",\\\"Employee Name\\\":\\\"Megen McSherry\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Engineering\\\",\\\"Date of Joining\\\":\\\"10/19/2016\\\",\\\"Salary\\\":\\\"$49673.94\\\",\\\"City\\\":\\\"Talisayan\\\"},{\\\"Employee ID\\\":\\\"5918336\\\",\\\"Employee Name\\\":\\\"Aloysius Blunden\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Services\\\",\\\"Date of Joining\\\":\\\"06/16/2010\\\",\\\"Salary\\\":\\\"$23992.84\\\",\\\"City\\\":\\\"Italó\\\"},{\\\"Employee ID\\\":\\\"0858107\\\",\\\"Employee Name\\\":\\\"Colene Game\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Training\\\",\\\"Date of Joining\\\":\\\"10/18/2015\\\",\\\"Salary\\\":\\\"$21768.47\\\",\\\"City\\\":\\\"Podbrdo\\\"},{\\\"Employee ID\\\":\\\"7239057\\\",\\\"Employee Name\\\":\\\"Bruce Pook\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Services\\\",\\\"Date of Joining\\\":\\\"08/15/2019\\\",\\\"Salary\\\":\\\"$46169.78\\\",\\\"City\\\":\\\"Drawsko\\\"},{\\\"Employee ID\\\":\\\"2603324\\\",\\\"Employee Name\\\":\\\"Reggie Gethins\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Training\\\",\\\"Date of Joining\\\":\\\"05/03/2014\\\",\\\"Salary\\\":\\\"$48793.33\\\",\\\"City\\\":\\\"Baiqiao\\\"},{\\\"Employee ID\\\":\\\"8641019\\\",\\\"Employee Name\\\":\\\"Happy Terrell\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Product Management\\\",\\\"Date of Joining\\\":\\\"01/07/2010\\\",\\\"Salary\\\":\\\"$11971.89\\\",\\\"City\\\":\\\"Bandar-e Lengeh\\\"},{\\\"Employee ID\\\":\\\"2229621\\\",\\\"Employee Name\\\":\\\"Dermot Swithenby\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Business Development\\\",\\\"Date of Joining\\\":\\\"05/31/2017\\\",\\\"Salary\\\":\\\"$14627.52\\\",\\\"City\\\":\\\"Da’an\\\"},{\\\"Employee ID\\\":\\\"6507226\\\",\\\"Employee Name\\\":\\\"Dusty Naulls\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Engineering\\\",\\\"Date of Joining\\\":\\\"05/17/2012\\\",\\\"Salary\\\":\\\"$49569.60\\\",\\\"City\\\":\\\"Kelowna\\\"},{\\\"Employee ID\\\":\\\"9588238\\\",\\\"Employee Name\\\":\\\"Boycey Gemlbett\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Accounting\\\",\\\"Date of Joining\\\":\\\"08/19/2014\\\",\\\"Salary\\\":\\\"$11400.60\\\",\\\"City\\\":\\\"Quezon\\\"},{\\\"Employee ID\\\":\\\"4783061\\\",\\\"Employee Name\\\":\\\"Gregoire Craik\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Support\\\",\\\"Date of Joining\\\":\\\"01/07/2015\\\",\\\"Salary\\\":\\\"$28536.96\\\",\\\"City\\\":\\\"Sacramento\\\"},{\\\"Employee ID\\\":\\\"1086662\\\",\\\"Employee Name\\\":\\\"Paquito Keetch\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Legal\\\",\\\"Date of Joining\\\":\\\"07/20/2017\\\",\\\"Salary\\\":\\\"$10948.94\\\",\\\"City\\\":\\\"Xieshui\\\"},{\\\"Employee ID\\\":\\\"7111790\\\",\\\"Employee Name\\\":\\\"Siouxie Lippini\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Engineering\\\",\\\"Date of Joining\\\":\\\"02/08/2012\\\",\\\"Salary\\\":\\\"$42688.51\\\",\\\"City\\\":\\\"Bigoudine\\\"},{\\\"Employee ID\\\":\\\"9189124\\\",\\\"Employee Name\\\":\\\"Valerye Russell\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Services\\\",\\\"Date of Joining\\\":\\\"07/17/2012\\\",\\\"Salary\\\":\\\"$32651.96\\\",\\\"City\\\":\\\"Pichilemu\\\"},{\\\"Employee ID\\\":\\\"6015219\\\",\\\"Employee Name\\\":\\\"Patience Ludman\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Training\\\",\\\"Date of Joining\\\":\\\"09/25/2018\\\",\\\"Salary\\\":\\\"$17589.61\\\",\\\"City\\\":\\\"Binjiang\\\"},{\\\"Employee ID\\\":\\\"5210163\\\",\\\"Employee Name\\\":\\\"Helene Borsay\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Services\\\",\\\"Date of Joining\\\":\\\"01/19/2018\\\",\\\"Salary\\\":\\\"$34017.42\\\",\\\"City\\\":\\\"Chengkan\\\"},{\\\"Employee ID\\\":\\\"6656266\\\",\\\"Employee Name\\\":\\\"Garrek Fatharly\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Business Development\\\",\\\"Date of Joining\\\":\\\"08/22/2018\\\",\\\"Salary\\\":\\\"$49775.81\\\",\\\"City\\\":\\\"San Antonio Oeste\\\"},{\\\"Employee ID\\\":\\\"8740096\\\",\\\"Employee Name\\\":\\\"Fulton Culverhouse\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Product Management\\\",\\\"Date of Joining\\\":\\\"01/11/2014\\\",\\\"Salary\\\":\\\"$36633.61\\\",\\\"City\\\":\\\"Borlänge\\\"},{\\\"Employee ID\\\":\\\"7875847\\\",\\\"Employee Name\\\":\\\"Lavena Yandle\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Accounting\\\",\\\"Date of Joining\\\":\\\"08/31/2016\\\",\\\"Salary\\\":\\\"$25835.58\\\",\\\"City\\\":\\\"Borino\\\"},{\\\"Employee ID\\\":\\\"8436792\\\",\\\"Employee Name\\\":\\\"Sophia Cowwell\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Product Management\\\",\\\"Date of Joining\\\":\\\"08/06/2011\\\",\\\"Salary\\\":\\\"$46836.53\\\",\\\"City\\\":\\\"Fécamp\\\"},{\\\"Employee ID\\\":\\\"2789522\\\",\\\"Employee Name\\\":\\\"Dode Bowmen\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Sales\\\",\\\"Date of Joining\\\":\\\"02/21/2010\\\",\\\"Salary\\\":\\\"$27575.10\\\",\\\"City\\\":\\\"Karangwaru\\\"},{\\\"Employee ID\\\":\\\"2816501\\\",\\\"Employee Name\\\":\\\"Peggi Grishelyov\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Accounting\\\",\\\"Date of Joining\\\":\\\"12/08/2012\\\",\\\"Salary\\\":\\\"$41712.59\\\",\\\"City\\\":\\\"San Antonio\\\"},{\\\"Employee ID\\\":\\\"5648843\\\",\\\"Employee Name\\\":\\\"Ailsun Porker\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Services\\\",\\\"Date of Joining\\\":\\\"11/23/2016\\\",\\\"Salary\\\":\\\"$46533.06\\\",\\\"City\\\":\\\"Mayisyan\\\"},{\\\"Employee ID\\\":\\\"3645602\\\",\\\"Employee Name\\\":\\\"Licha McKee\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Research and Development\\\",\\\"Date of Joining\\\":\\\"08/29/2018\\\",\\\"Salary\\\":\\\"$31008.69\\\",\\\"City\\\":\\\"Wenqiao\\\"},{\\\"Employee ID\\\":\\\"7413262\\\",\\\"Employee Name\\\":\\\"Ives Tunn\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Product Management\\\",\\\"Date of Joining\\\":\\\"08/31/2018\\\",\\\"Salary\\\":\\\"$27791.30\\\",\\\"City\\\":\\\"Tabia\\\"},{\\\"Employee ID\\\":\\\"9348082\\\",\\\"Employee Name\\\":\\\"Cathy Bugdale\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Training\\\",\\\"Date of Joining\\\":\\\"04/23/2016\\\",\\\"Salary\\\":\\\"$31759.16\\\",\\\"City\\\":\\\"Azul\\\"},{\\\"Employee ID\\\":\\\"7109150\\\",\\\"Employee Name\\\":\\\"Waverley Gingedale\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Accounting\\\",\\\"Date of Joining\\\":\\\"09/04/2011\\\",\\\"Salary\\\":\\\"$27893.84\\\",\\\"City\\\":\\\"Frýdek-Místek\\\"},{\\\"Employee ID\\\":\\\"1119404\\\",\\\"Employee Name\\\":\\\"Cooper Capes\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Sales\\\",\\\"Date of Joining\\\":\\\"01/02/2016\\\",\\\"Salary\\\":\\\"$26407.41\\\",\\\"City\\\":\\\"Ash Sharyah\\\"},{\\\"Employee ID\\\":\\\"9560117\\\",\\\"Employee Name\\\":\\\"Shayna Potebury\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Human Resources\\\",\\\"Date of Joining\\\":\\\"10/23/2012\\\",\\\"Salary\\\":\\\"$35332.31\\\",\\\"City\\\":\\\"Baluk\\\"},{\\\"Employee ID\\\":\\\"2598799\\\",\\\"Employee Name\\\":\\\"Doro Gaitone\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Sales\\\",\\\"Date of Joining\\\":\\\"02/04/2012\\\",\\\"Salary\\\":\\\"$22904.55\\\",\\\"City\\\":\\\"Wulingyuan\\\"},{\\\"Employee ID\\\":\\\"6767113\\\",\\\"Employee Name\\\":\\\"Chantal Ventam\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Training\\\",\\\"Date of Joining\\\":\\\"07/02/2014\\\",\\\"Salary\\\":\\\"$25515.12\\\",\\\"City\\\":\\\"Xinshui\\\"},{\\\"Employee ID\\\":\\\"3735396\\\",\\\"Employee Name\\\":\\\"Tobie Brodeur\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Training\\\",\\\"Date of Joining\\\":\\\"08/11/2015\\\",\\\"Salary\\\":\\\"$24508.84\\\",\\\"City\\\":\\\"Xin’an\\\"},{\\\"Employee ID\\\":\\\"2942841\\\",\\\"Employee Name\\\":\\\"Feodor MacDermid\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Human Resources\\\",\\\"Date of Joining\\\":\\\"06/02/2019\\\",\\\"Salary\\\":\\\"$14844.80\\\",\\\"City\\\":\\\"Rantauambacang\\\"},{\\\"Employee ID\\\":\\\"1511001\\\",\\\"Employee Name\\\":\\\"Allyce Decker\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Support\\\",\\\"Date of Joining\\\":\\\"04/14/2017\\\",\\\"Salary\\\":\\\"$39356.65\\\",\\\"City\\\":\\\"Saint Paul\\\"},{\\\"Employee ID\\\":\\\"9062663\\\",\\\"Employee Name\\\":\\\"Ricard Connock\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Product Management\\\",\\\"Date of Joining\\\":\\\"11/25/2010\\\",\\\"Salary\\\":\\\"$27421.61\\\",\\\"City\\\":\\\"Lokorae\\\"},{\\\"Employee ID\\\":\\\"6210073\\\",\\\"Employee Name\\\":\\\"Minerva Greenham\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Support\\\",\\\"Date of Joining\\\":\\\"05/23/2014\\\",\\\"Salary\\\":\\\"$48300.27\\\",\\\"City\\\":\\\"Pakemitan\\\"},{\\\"Employee ID\\\":\\\"1830385\\\",\\\"Employee Name\\\":\\\"Cyb Gallant\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Accounting\\\",\\\"Date of Joining\\\":\\\"11/25/2010\\\",\\\"Salary\\\":\\\"$36518.72\\\",\\\"City\\\":\\\"Berëzovyy\\\"},{\\\"Employee ID\\\":\\\"7466629\\\",\\\"Employee Name\\\":\\\"Harman Free\\\",\\\"Gender\\\":\\\"Male\\\",\\\"Department\\\":\\\"Human Resources\\\",\\\"Date of Joining\\\":\\\"07/15/2012\\\",\\\"Salary\\\":\\\"$35939.87\\\",\\\"City\\\":\\\"Watodei\\\"},{\\\"Employee ID\\\":\\\"2963633\\\",\\\"Employee Name\\\":\\\"Kylie Phettis\\\",\\\"Gender\\\":\\\"Female\\\",\\\"Department\\\":\\\"Marketing\\\",\\\"Date of Joining\\\":\\\"03/18/2011\\\",\\\"Salary\\\":\\\"$26038.56\\\",\\\"City\\\":\\\"Huangzhai\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/sorting-and-filtering-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section .control-wrapper {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n#spreadsheet-sorting-and-filtering {\\n  height: 550px;\\n}\\n.ej2-new .control-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content{\\n    margin-left: 0 !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-FV2XOM4YVX5QQDPGFQF66UAYBNA4X5LUWL6O7TKU72AW7WZNDCUQ/Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;EACE,cAAc;CACf;AACD;IACI,cAAc;CACjB;AACD;IACI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.control-section .control-wrapper {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n#spreadsheet-sorting-and-filtering {\\n  height: 550px;\\n}\\n.ej2-new .control-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content{\\n    margin-left: 0 !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _sorting_and_filtering_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorting-and-filtering-data.json */ \"./Samples/spreadsheet/sorting-and-filtering/sorting-and-filtering-data.json\");\nvar _sorting_and_filtering_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./sorting-and-filtering-data.json */ \"./Samples/spreadsheet/sorting-and-filtering/sorting-and-filtering-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n        Employeedetails:\"Employee deatils\",\n        dataSource: _sorting_and_filtering_data_json__WEBPACK_IMPORTED_MODULE_2__[\"sortingAndFiltering\"],\n        openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',\n        saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:G1');\n        spreadsheet.sort({ sortDescriptors: { field: 'B' } }, 'A2:G51').then(() => {\n                // Filtered D(Department  field) column with value 'Services'\n                spreadsheet.applyFilter([{ field: 'D', operator: 'equal', value: 'Services' }], 'A1:G51');\n            });\n            }\n        }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=template&id=153b3f96&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/sorting-and-filtering/App.vue?vue&type=template&id=153b3f96& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet-sorting-and-filtering\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"created\":_vm.created,\"openUrl\":_vm.openUrl,\"saveUrl\":_vm.saveUrl}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":_vm.Employeedetails}},[_c('e-ranges',[_c('e-range',{attrs:{\"dataSource\":_vm.dataSource}})],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":142}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":80}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":137}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":122}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":92}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":124}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample demonstrates sorting and filtering feature using employee details.\\n  \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this demo, sorting is applied to B(Employee Name) column in ascending order using \"),_c('code',[_vm._v(\"sort\")]),_vm._v(\" method.\\n      The sort order can be specified in \"),_c('code',[_vm._v(\"order\")]),_vm._v(\" property with following values `Ascending` or `Descending` and its\\n      default value is `Ascending`.\\n\\n      The sorted data is filtered with value 'Services' in `D` column using \"),_c('code',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter\"}},[_vm._v(\"applyFilter\")])]),_vm._v(\" method in call back function of \"),_c('code',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/api/spreadsheet/#sort\"}},[_vm._v(\"sort\")])]),_vm._v(\" method.\\n  \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      More information about sorting and filtering feature can be found in this\\n      \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/sort/\"}},[_vm._v(\"\\n          documentation\")]),_vm._v(\" section.\\n  \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/sorting-and-filtering/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });