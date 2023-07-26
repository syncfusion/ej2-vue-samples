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
/******/ 		"spreadsheet/cell-formatting/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/cell-formatting/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/cell-formatting/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/spreadsheet/cell-formatting/App.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_833548ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=833548ca& */ \"./Samples/spreadsheet/cell-formatting/App.vue?vue&type=template&id=833548ca&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/cell-formatting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_833548ca_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=833548ca&lang=css& */ \"./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_833548ca___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_833548ca___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/cell-formatting/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-formatting/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-formatting/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_833548ca_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=833548ca&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_833548ca_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_833548ca_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_833548ca_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_833548ca_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-formatting/App.vue?vue&type=template&id=833548ca&":
/*!************************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-formatting/App.vue?vue&type=template&id=833548ca& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_833548ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=833548ca& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=template&id=833548ca&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_833548ca___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_833548ca___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-formatting/cell-format-data.json":
/*!*******************************************************************!*\
  !*** ./Samples/spreadsheet/cell-formatting/cell-format-data.json ***!
  \*******************************************************************/
/*! exports provided: orderDetails, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"orderDetails\\\":[{\\\"Order ID\\\":10248,\\\"Customer Name\\\":\\\"Paul Henriot\\\",\\\"Order Date\\\":\\\"7/4/1996\\\",\\\"Address\\\":\\\"59 rue de l Abbaye\\\",\\\"City\\\":\\\"Reims\\\",\\\"Postal Code\\\":\\\"51100\\\",\\\"Country\\\":\\\"France\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$32.38\\\"},{\\\"Order ID\\\":10249,\\\"Customer Name\\\":\\\"Karin Josephs\\\",\\\"Order Date\\\":\\\"7/5/1996\\\",\\\"Address\\\":\\\"Luisenstr. 48\\\",\\\"City\\\":\\\"Münster\\\",\\\"Postal Code\\\":\\\"44087\\\",\\\"Country\\\":\\\"Germany\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$11.61\\\"},{\\\"Order ID\\\":10250,\\\"Customer Name\\\":\\\"Mario Pontes\\\",\\\"Order Date\\\":\\\"7/8/1996\\\",\\\"Address\\\":\\\"Rua do Paço, 67\\\",\\\"City\\\":\\\"Rio de Janeiro\\\",\\\"Postal Code\\\":\\\"05454876\\\",\\\"Country\\\":\\\"Brazil\\\",\\\"Status\\\":\\\"Shipped\\\",\\\"Freight\\\":\\\"$65.83\\\"},{\\\"Order ID\\\":10251,\\\"Customer Name\\\":\\\"Mary Saveley\\\",\\\"Order Date\\\":\\\"7/4/1996\\\",\\\"Address\\\":\\\"2, rue du Commerce\\\",\\\"City\\\":\\\"Lyon\\\",\\\"Postal Code\\\":\\\"69004\\\",\\\"Country\\\":\\\"France\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$41.34\\\"},{\\\"Order ID\\\":10252,\\\"Customer Name\\\":\\\"Pascale Cartrain\\\",\\\"Order Date\\\":\\\"7/8/1996\\\",\\\"Address\\\":\\\"Boulevard Tirou, 255\\\",\\\"City\\\":\\\"Charleroi\\\",\\\"Postal Code\\\":\\\"6000\\\",\\\"Country\\\":\\\"Belgium\\\",\\\"Status\\\":\\\"Shipped\\\",\\\"Freight\\\":\\\"$51.3\\\"},{\\\"Order ID\\\":10253,\\\"Customer Name\\\":\\\"Carlos Hernández\\\",\\\"Order Date\\\":\\\"7/1/1996\\\",\\\"Address\\\":\\\"Rua do Paço, 67\\\",\\\"City\\\":\\\"Rio de Janeiro\\\",\\\"Postal Code\\\":\\\"05454876\\\",\\\"Country\\\":\\\"Brazil\\\",\\\"Status\\\":\\\"Cancelled\\\",\\\"Freight\\\":\\\"$58.17\\\"},{\\\"Order ID\\\":10254,\\\"Customer Name\\\":\\\"Yang Wang\\\",\\\"Order Date\\\":\\\"7/18/1996\\\",\\\"Address\\\":\\\"Hauptstr. 31\\\",\\\"City\\\":\\\"Bern\\\",\\\"Postal Code\\\":\\\"3012\\\",\\\"Country\\\":\\\"Switzerland\\\",\\\"Status\\\":\\\"Pending\\\",\\\"Freight\\\":\\\"$22.98\\\"},{\\\"Order ID\\\":10255,\\\"Customer Name\\\":\\\"Antonio Moreno\\\",\\\"Order Date\\\":\\\"7/7/1996\\\",\\\"Address\\\":\\\"Starenweg 5\\\",\\\"City\\\":\\\"Genève\\\",\\\"Postal Code\\\":\\\"1204\\\",\\\"Country\\\":\\\"Switzerland\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$148.33\\\"},{\\\"Order ID\\\":10256,\\\"Customer Name\\\":\\\"Paula Parente\\\",\\\"Order Date\\\":\\\"7/10/1996\\\",\\\"Address\\\":\\\"Rua do Mercado, 12\\\",\\\"City\\\":\\\"Resende\\\",\\\"Postal Code\\\":\\\"08737363\\\",\\\"Country\\\":\\\"Brazil\\\",\\\"Status\\\":\\\"Shipped\\\",\\\"Freight\\\":\\\"$13.97\\\"},{\\\"Order ID\\\":10257,\\\"Customer Name\\\":\\\"Michael Holz\\\",\\\"Order Date\\\":\\\"7/9/1996\\\",\\\"Address\\\":\\\"Carrera 22 con Ave. Carlos Soublette\\\",\\\"City\\\":\\\"San Cristóbal\\\",\\\"Postal Code\\\":\\\"5022\\\",\\\"Country\\\":\\\"Venezuela\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$81.91\\\"},{\\\"Order ID\\\":10258,\\\"Customer Name\\\":\\\"Roland Mendel\\\",\\\"Order Date\\\":\\\"7/3/1996\\\",\\\"Address\\\":\\\"Kirchgasse 6\\\",\\\"City\\\":\\\"Graz\\\",\\\"Postal Code\\\":\\\"8010\\\",\\\"Country\\\":\\\"Austria\\\",\\\"Status\\\":\\\"Cancelled\\\",\\\"Freight\\\":\\\"$140.51\\\"},{\\\"Order ID\\\":10259,\\\"Customer Name\\\":\\\"Francisco Chang\\\",\\\"Order Date\\\":\\\"7/22/1996\\\",\\\"Address\\\":\\\"Sierras de Granada 9993\\\",\\\"City\\\":\\\"México D.F.\\\",\\\"Postal Code\\\":\\\"05022\\\",\\\"Country\\\":\\\"Mexico\\\",\\\"Status\\\":\\\"Pending\\\",\\\"Freight\\\":\\\"$3.25\\\"},{\\\"Order ID\\\":10260,\\\"Customer Name\\\":\\\"Henriette Pfalzheim\\\",\\\"Order Date\\\":\\\"7/12/1996\\\",\\\"Address\\\":\\\"Mehrheimerstr. 369\\\",\\\"City\\\":\\\"Köln\\\",\\\"Postal Code\\\":\\\"50739\\\",\\\"Country\\\":\\\"Germany\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$55.09\\\"},{\\\"Order ID\\\":10261,\\\"Customer Name\\\":\\\"Bernardo Batista\\\",\\\"Order Date\\\":\\\"7/15/1996\\\",\\\"Address\\\":\\\"Rua da Panificadora, 12\\\",\\\"City\\\":\\\"Rio de Janeiro\\\",\\\"Postal Code\\\":\\\"02389673\\\",\\\"Country\\\":\\\"Brazil\\\",\\\"Status\\\":\\\"Shipped\\\",\\\"Freight\\\":\\\"$3.05\\\"},{\\\"Order ID\\\":10262,\\\"Customer Name\\\":\\\"Paula Wilson\\\",\\\"Order Date\\\":\\\"7/8/1996\\\",\\\"Address\\\":\\\"2817 Milton Dr.\\\",\\\"City\\\":\\\"Albuquerque\\\",\\\"Postal Code\\\":\\\"87110\\\",\\\"Country\\\":\\\"USA\\\",\\\"Status\\\":\\\"Delivered\\\",\\\"Freight\\\":\\\"$48.29\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/cell-format-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-formatting/main.js":
/*!*****************************************************!*\
  !*** ./Samples/spreadsheet/cell-formatting/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/cell-formatting/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-cell-format {\\n  height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n  display: inherit;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/sheet-vue-samples_release_22.1.1/Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&id=833548ca&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-cell-format {\\n  height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n  display: inherit;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _cell_format_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell-format-data.json */ \"./Samples/spreadsheet/cell-formatting/cell-format-data.json\");\nvar _cell_format_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cell-format-data.json */ \"./Samples/spreadsheet/cell-formatting/cell-format-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n      return {\n          sheets: [{\n              name: 'Order Details',\n              ranges: [{ dataSource: _cell_format_data_json__WEBPACK_IMPORTED_MODULE_2__[\"orderDetails\"] }],\n              columns:  [{ width: 80 }, { width: 140 }, { width: 100 }, { width: 232 }, { width: 120 }, { width: 100 },\n                  { width: 100 }, { width: 120 }, { width: 80 }],\n              rows: [{\n                  height: 36,\n                  //Applying cell formatting through cell binding\n                  cells: [{ style: { textAlign: 'right' } }, { style: { textIndent: '2pt' } }, { style: { textAlign: 'right' } },\n                      { style: { textIndent: '2pt' } }, { index: 5, style: { textAlign: 'right' } }, { index: 7, style: { textAlign: 'center' } },\n                      { index: 8, style: { textAlign: 'right' } }] }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },\n                      { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },\n                      { height: 42 }, { height: 42 }],\n                  showGridLines: false\n              }]\n      }\n  },\n  methods: {\n    createdHandler: function() {\n        //Applying cell formatting dynamically using cellFormat method\n        this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#4b5366', color: '#ffffff', fontSize: '12pt' }, 'A1:I1');\n        this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', textIndent: '2pt' }, 'B2:B16');\n        this.$refs.spreadsheet.cellFormat({ fontStyle: 'italic', textIndent: '2pt' }, 'D2:D16');\n        this.$refs.spreadsheet.cellFormat({ textIndent: '2pt' }, 'E1:E16');\n        this.$refs.spreadsheet.cellFormat({ textIndent: '2pt' }, 'G1:G16');\n        this.$refs.spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'H2:H16');\n        this.$refs.spreadsheet.cellFormat({ textAlign: 'center'}, 'A1:I1');\n        this.$refs.spreadsheet.cellFormat({ fontFamily: 'Helvetica New', verticalAlign: 'middle' }, 'A1:I16');\n        this.$refs.spreadsheet.cellFormat({ border: '1px solid #e0e0e0' }, 'A1:I16', 'Outer');\n        this.$refs.spreadsheet.cellFormat({ border: '1px solid #e0e0e0' }, 'A2:I15', 'Horizontal');\n    },\n    beforeCellRender: function(args) {\n       if (this.applyCellFormat()) {\n            if (args.cell && args.cell.value) {\n                //Applying cell formatting before rendering the particular cell\n                switch (args.cell.value) {\n                    case 'Delivered':\n                        this.$refs.spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, args.address);\n                        break;\n                    case 'Shipped':\n                        this.$refs.spreadsheet.cellFormat({ color: '#62c9e8' }, args.address);\n                        break;\n                    case 'Pending':\n                        this.$refs.spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, args.address);\n                        break;\n                    case 'Cancelled':\n                        this.$refs.spreadsheet.cellFormat({ color: '#ff5b5b' }, args.address);\n                        break;\n                }\n            }\n      }\n    },\n    applyCellFormat: function() {\n      return !this.$refs.spreadsheet.ej2Instances.isOpen && this.$refs.spreadsheet.ej2Instances.sheets[this.$refs.spreadsheet.ej2Instances.activeSheetIndex].name === 'Order Details';\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=template&id=833548ca&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=template&id=833548ca& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { id: \"spreadsheet-cell-format\" } },\n      [\n        _c(\"ejs-spreadsheet\", {\n          ref: \"spreadsheet\",\n          attrs: {\n            sheets: _vm.sheets,\n            showRibbon: false,\n            showFormulaBar: false,\n            created: _vm.createdHandler,\n            beforeCellRender: _vm.beforeCellRender,\n          },\n        }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n      This sample demonstrates the \"),\n        _c(\"code\", [_vm._v(\"Spreadsheet\")]),\n        _vm._v(\n          \" cell formatting feature by applying different styles to a\\n        range of cells.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          Cell formatting allows you to highlight cell data that appears in the Spreadsheet. It can be enabled\\n          or disabled using the \"\n        ),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              attrs: {\n                target: \"_blank\",\n                href: \"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowcellformatting\",\n              },\n            },\n            [_vm._v(\"allowCellFormatting\")]\n          ),\n        ]),\n        _vm._v(\" property.\\n      \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n          In this sample, gridlines are hidden using the \"),\n        _c(\"code\", [_vm._v(\"showGridLines\")]),\n        _vm._v(\" property and the styles are\\n          applied using the \"),\n        _c(\"code\", [_vm._v(\"style\")]),\n        _vm._v(\" property and \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              attrs: {\n                target: \"_blank\",\n                href: \"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#cellFormat\",\n              },\n            },\n            [_vm._v(\"cellFormat\")]\n          ),\n        ]),\n        _vm._v(\" method.\\n      \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n          More information about \"),\n        _c(\"code\", [_vm._v(\"cell formatting\")]),\n        _vm._v(\" can be found in this\\n          \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/spreadsheet/formatting/#text-and-cell-formatting\",\n            },\n          },\n          [_vm._v(\"\\n            documentation\")]\n        ),\n        _vm._v(\" section.\\n      \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=833548ca&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-formatting/App.vue?vue&type=style&index=0&id=833548ca&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"cedc0462\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-formatting/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });