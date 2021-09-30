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
/******/ 		"spreadsheet/conditional-formatting/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/conditional-formatting/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/conditional-formatting/App.vue":
/*!************************************************************!*\
  !*** ./Samples/spreadsheet/conditional-formatting/App.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6591a915___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6591a915& */ \"./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=template&id=6591a915&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6591a915___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6591a915___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/conditional-formatting/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=template&id=6591a915&":
/*!*******************************************************************************************!*\
  !*** ./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=template&id=6591a915& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6591a915___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6591a915& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=template&id=6591a915&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6591a915___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6591a915___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/conditional-formatting/conditional-formatting-data.json":
/*!*************************************************************************************!*\
  !*** ./Samples/spreadsheet/conditional-formatting/conditional-formatting-data.json ***!
  \*************************************************************************************/
/*! exports provided: conditionalFormatting, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"conditionalFormatting\\\":[{\\\"Item Code\\\":\\\"AG940Z\\\",\\\"Item Name\\\":\\\"Laser Printer\\\",\\\"Quantity\\\":\\\"144\\\",\\\"Purchase Price\\\":\\\"169.50\\\",\\\"Selling Price\\\":\\\"172.00\\\",\\\"Profit\\\":\\\"=E3-D3\\\",\\\"Last Updated\\\":\\\"5/25/19\\\",\\\"Rating\\\":\\\"4.5\\\"},{\\\"Item Code\\\":\\\"BJ120K\\\",\\\"Item Name\\\":\\\"Scientific Calculator\\\",\\\"Quantity\\\":\\\"116\\\",\\\"Purchase Price\\\":\\\"21.80\\\",\\\"Selling Price\\\":\\\"23.00\\\",\\\"Profit\\\":\\\"=E4-D4\\\",\\\"Last Updated\\\":\\\"7/28/19\\\",\\\"Rating\\\":\\\"4.0\\\"},{\\\"Item Code\\\":\\\"BC120M\\\",\\\"Item Name\\\":\\\"Wired Keyboard\\\",\\\"Quantity\\\":\\\"438\\\",\\\"Purchase Price\\\":\\\"26.80\\\",\\\"Selling Price\\\":\\\"29.00\\\",\\\"Profit\\\":\\\"=E5-D5\\\",\\\"Last Updated\\\":\\\"3/30/20\\\",\\\"Rating\\\":\\\"4.25\\\"},{\\\"Item Code\\\":\\\"BS121L\\\",\\\"Item Name\\\":\\\"Memory Card\\\",\\\"Quantity\\\":\\\"486\\\",\\\"Purchase Price\\\":\\\"23.50\\\",\\\"Selling Price\\\":\\\"25.00\\\",\\\"Profit\\\":\\\"=E6-D6\\\",\\\"Last Updated\\\":\\\"8/20/19\\\",\\\"Rating\\\":\\\"3.5\\\"},{\\\"Item Code\\\":\\\"BU121K\\\",\\\"Item Name\\\":\\\"Coffee Maker\\\",\\\"Quantity\\\":\\\"176\\\",\\\"Purchase Price\\\":\\\"56.50\\\",\\\"Selling Price\\\":\\\"59.00\\\",\\\"Profit\\\":\\\"=E7-D7\\\",\\\"Last Updated\\\":\\\"2/2/20\\\",\\\"Rating\\\":\\\"4.5\\\"},{\\\"Item Code\\\":\\\"BD121M\\\",\\\"Item Name\\\":\\\"Table Lamp\\\",\\\"Quantity\\\":\\\"0\\\",\\\"Purchase Price\\\":\\\"22.50\\\",\\\"Selling Price\\\":\\\"25.00\\\",\\\"Profit\\\":\\\"=E8-D8\\\",\\\"Last Updated\\\":\\\"11/11/19\\\",\\\"Rating\\\":\\\"5.0\\\"},{\\\"Item Code\\\":\\\"AT992X\\\",\\\"Item Name\\\":\\\"Document Scanner\\\",\\\"Quantity\\\":\\\"116\\\",\\\"Purchase Price\\\":\\\"175.00\\\",\\\"Selling Price\\\":\\\"177.00\\\",\\\"Profit\\\":\\\"=E9-D9\\\",\\\"Last Updated\\\":\\\"4/13/19\\\",\\\"Rating\\\":\\\"4.75\\\"},{\\\"Item Code\\\":\\\"AP992Z\\\",\\\"Item Name\\\":\\\"Gaming Headset\\\",\\\"Quantity\\\":\\\"58\\\",\\\"Purchase Price\\\":\\\"32.00\\\",\\\"Selling Price\\\":\\\"35.00\\\",\\\"Profit\\\":\\\"=E10-D10\\\",\\\"Last Updated\\\":\\\"2/14/20\\\",\\\"Rating\\\":\\\"4.4\\\"},{\\\"Item Code\\\":\\\"AW920X\\\",\\\"Item Name\\\":\\\"Laptop Bag\\\",\\\"Quantity\\\":\\\"232\\\",\\\"Purchase Price\\\":\\\"18.90\\\",\\\"Selling Price\\\":\\\"19.00\\\",\\\"Profit\\\":\\\"=E11-D11\\\",\\\"Last Updated\\\":\\\"6/10/19\\\",\\\"Rating\\\":\\\"3.9\\\"},{\\\"Item Code\\\":\\\"AQ920Z\\\",\\\"Item Name\\\":\\\"Table Fan\\\",\\\"Quantity\\\":\\\"405\\\",\\\"Purchase Price\\\":\\\"33.90\\\",\\\"Selling Price\\\":\\\"35.00\\\",\\\"Profit\\\":\\\"=E12-D12\\\",\\\"Last Updated\\\":\\\"5/28/19\\\",\\\"Rating\\\":\\\"3.75\\\"},{\\\"Item Code\\\":\\\"AE940X\\\",\\\"Item Name\\\":\\\"Electric Mop\\\",\\\"Quantity\\\":\\\"47\\\",\\\"Purchase Price\\\":\\\"153.50\\\",\\\"Selling Price\\\":\\\"155.00\\\",\\\"Profit\\\":\\\"=E13-D13\\\",\\\"Last Updated\\\":\\\"12/18/19\\\",\\\"Rating\\\":\\\"3.9\\\"},{\\\"Item Code\\\":\\\"UI152C\\\",\\\"Item Name\\\":\\\"Smart LED TV\\\",\\\"Quantity\\\":\\\"232\\\",\\\"Purchase Price\\\":\\\"201.25\\\",\\\"Selling Price\\\":\\\"204.00\\\",\\\"Profit\\\":\\\"=E14-D14\\\",\\\"Last Updated\\\":\\\"3/13/20\\\",\\\"Rating\\\":\\\"4.35\\\"},{\\\"Item Code\\\":\\\"UD152V\\\",\\\"Item Name\\\":\\\"Robotic Vacuum Cleaner\\\",\\\"Quantity\\\":\\\"210\\\",\\\"Purchase Price\\\":\\\"182.25\\\",\\\"Selling Price\\\":\\\"185.00\\\",\\\"Profit\\\":\\\"=E15-D15\\\",\\\"Last Updated\\\":\\\"8/26/19\\\",\\\"Rating\\\":\\\"4.0\\\"},{\\\"Item Code\\\":\\\"BK120L\\\",\\\"Item Name\\\":\\\"Gaming Mouse\\\",\\\"Quantity\\\":\\\"225\\\",\\\"Purchase Price\\\":\\\"34.80\\\",\\\"Selling Price\\\":\\\"38.00\\\",\\\"Profit\\\":\\\"=E16-D16\\\",\\\"Last Updated\\\":\\\"1/12/20\\\",\\\"Rating\\\":\\\"4.2\\\"},{\\\"Item Code\\\":\\\"UF162V\\\",\\\"Item Name\\\":\\\"Chair\\\",\\\"Quantity\\\":\\\"373\\\",\\\"Purchase Price\\\":\\\"104.800\\\",\\\"Selling Price\\\":\\\"108.00\\\",\\\"Profit\\\":\\\"=E17-D17\\\",\\\"Last Updated\\\":\\\"4/12/19\\\",\\\"Rating\\\":\\\"3.25\\\"},{\\\"Item Code\\\":\\\"UR162C\\\",\\\"Item Name\\\":\\\"Welding Gloves\\\",\\\"Quantity\\\":\\\"216\\\",\\\"Purchase Price\\\":\\\"19.00\\\",\\\"Selling Price\\\":\\\"21.00\\\",\\\"Profit\\\":\\\"=E18-D18\\\",\\\"Last Updated\\\":\\\"11/22/19\\\",\\\"Rating\\\":\\\"3.85\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/conditional-formatting-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/conditional-formatting/main.js":
/*!************************************************************!*\
  !*** ./Samples/spreadsheet/conditional-formatting/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/conditional-formatting/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section .control-wrapper {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n#spreadsheet-conditional-formatting {\\n  height: 550px;\\n}\\n.ej2-new .control-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content{\\n    margin-left: 0 !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-GO6KOJKEDYOMZPC2BDMVFW5W42CD5TC632RNUGKRAMXRAKJWOOZA/Samples/spreadsheet/conditional-formatting/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;EACE,cAAc;CACf;AACD;IACI,cAAc;CACjB;AACD;IACI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.control-section .control-wrapper {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n#spreadsheet-conditional-formatting {\\n  height: 550px;\\n}\\n.ej2-new .control-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content{\\n    margin-left: 0 !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _conditional_formatting_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditional-formatting-data.json */ \"./Samples/spreadsheet/conditional-formatting/conditional-formatting-data.json\");\nvar _conditional_formatting_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./conditional-formatting-data.json */ \"./Samples/spreadsheet/conditional-formatting/conditional-formatting-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n        height: 30,\n        InventoryList:\"Inventory List\",\n        dataSource: _conditional_formatting_data_json__WEBPACK_IMPORTED_MODULE_2__[\"conditionalFormatting\"],\n         openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',\n         saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n            spreadsheet.merge('A1:H1');\n            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:H2');\n            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: \"middle\", fontSize: '13pt' }, 'A1:H1');\n            spreadsheet.numberFormat('$#,##0.00', 'D3:F18');\n            spreadsheet.conditionalFormat({ type: 'BlueDataBar', range: 'D3:D18' });\n            spreadsheet.conditionalFormat({ type: 'GreenDataBar', range: 'E3:E18' });\n            spreadsheet.conditionalFormat({ type: 'ThreeStars', range: 'H3:H18' });\n            spreadsheet.conditionalFormat({ type: 'Top10Items', value:'1', format:{ style:{ color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold'}}, range: 'F3:F18' });\n            spreadsheet.conditionalFormat({ type: 'Bottom10Items', value:'1', format:{ style:{ color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold'}}, range: 'F3:F18' });\n            }\n        }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=template&id=6591a915&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/conditional-formatting/App.vue?vue&type=template&id=6591a915& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { id: \"spreadsheet-conditional-formatting\" } },\n      [\n        _c(\n          \"ejs-spreadsheet\",\n          {\n            ref: \"spreadsheet\",\n            attrs: {\n              openUrl: _vm.openUrl,\n              saveUrl: _vm.saveUrl,\n              created: _vm.created\n            }\n          },\n          [\n            _c(\n              \"e-sheets\",\n              [\n                _c(\n                  \"e-sheet\",\n                  { attrs: { name: _vm.InventoryList } },\n                  [\n                    _c(\n                      \"e-rows\",\n                      [\n                        _c(\n                          \"e-row\",\n                          { attrs: { height: _vm.height } },\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: { index: \"1\", value: \"Inventory List\" }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-ranges\",\n                      [\n                        _c(\"e-range\", {\n                          attrs: { dataSource: _vm.dataSource, startCell: \"A2\" }\n                        })\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-conditionalformats\",\n                      [\n                        _c(\"e-conditionalformat\", {\n                          attrs: { type: \"GYRColorScale\", range: \"C3:C18\" }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-conditionalformat\", {\n                          attrs: {\n                            type: \"LessThan\",\n                            cFColor: \"RedFT\",\n                            value: \"8/30/2019\",\n                            range: \"G3:G18\"\n                          }\n                        })\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-columns\",\n                      [\n                        _c(\"e-column\", { attrs: { width: 100 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 158 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 72 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 113 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 113 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 77 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 97 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 73 } })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample demonstrates about the conditional formatting features like highlight cell rules, data bars, color scales, and icon sets by using the inventory list details.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This feature allows you to format a cell or range of cells based on the conditions applied. You can enable or disable conditional formats by using the \"\n        ),\n        _c(\"code\", [_vm._v(\"allowConditionalFormat\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this sample, we have applied conditional formatting color scales in Quantity column, data bars in Purchase price and selling price column, highlight cell rules in last updated column and rating icon sets applied in rating column by using the \"\n        ),\n        _c(\"code\", [_vm._v(\"conditionalFormat\")]),\n        _vm._v(\" method and \"),\n        _c(\"code\", [_vm._v(\"conditionalFormats\")]),\n        _vm._v(\" property in sheets model.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In the Profit column, we have applied conditional formatting custom format. Using the support you can set cell styles like color, background color, font style, font weight and underline etc.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about the Spreadsheet component can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/documentation/spreadsheet/formatting/#conditional-formatting\"\n            }\n          },\n          [_vm._v(\"\\n            documentation\")]\n        ),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/conditional-formatting/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });