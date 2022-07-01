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
/******/ 		"spreadsheet/hyperlink/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/hyperlink/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/hyperlink/App.vue":
/*!***********************************************!*\
  !*** ./Samples/spreadsheet/hyperlink/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3b285211___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3b285211& */ \"./Samples/spreadsheet/hyperlink/App.vue?vue&type=template&id=3b285211&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/hyperlink/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3b285211___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3b285211___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/hyperlink/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/hyperlink/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/spreadsheet/hyperlink/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/hyperlink/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/hyperlink/App.vue?vue&type=template&id=3b285211&":
/*!******************************************************************************!*\
  !*** ./Samples/spreadsheet/hyperlink/App.vue?vue&type=template&id=3b285211& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3b285211___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3b285211& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/hyperlink/App.vue?vue&type=template&id=3b285211&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3b285211___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3b285211___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/hyperlink/hyperlink-data.json":
/*!***********************************************************!*\
  !*** ./Samples/spreadsheet/hyperlink/hyperlink-data.json ***!
  \***********************************************************/
/*! exports provided: hyperlinkCart, hyperlinkStock, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"hyperlinkCart\\\":[{\\\"Product Name\\\":\\\"Coffee Maker\\\",\\\"Category\\\":\\\"Kitchen\\\",\\\"Quantity\\\":\\\"43\\\",\\\"Price\\\":\\\"399\\\",\\\"Total\\\":\\\"=E4*D4\\\"},{\\\"Product Name\\\":\\\"Apple Pencil\\\",\\\"Category\\\":\\\"Electronics\\\",\\\"Quantity\\\":\\\"7\\\",\\\"Price\\\":\\\"200\\\",\\\"Total\\\":\\\"=E5*D5\\\"},{\\\"Product Name\\\":\\\"Juicer\\\",\\\"Category\\\":\\\"Kitchen\\\",\\\"Quantity\\\":\\\"12\\\",\\\"Price\\\":\\\"100\\\",\\\"Total\\\":\\\"=E6*D6\\\"},{\\\"Product Name\\\":\\\"Toaster\\\",\\\"Category\\\":\\\"Kitchen\\\",\\\"Quantity\\\":\\\"69\\\",\\\"Price\\\":\\\"183\\\",\\\"Total\\\":\\\"=E7*D7\\\"},{\\\"Product Name\\\":\\\"Tea Kettle\\\",\\\"Category\\\":\\\"Kitchen\\\",\\\"Quantity\\\":\\\"83\\\",\\\"Price\\\":\\\"169\\\",\\\"Total\\\":\\\"=E8*D8\\\"},{\\\"Product Name\\\":\\\"Logitech Mouse\\\",\\\"Category\\\":\\\"Electronics\\\",\\\"Quantity\\\":\\\"16\\\",\\\"Price\\\":\\\"250\\\",\\\"Total\\\":\\\"=E9*D9\\\"},{\\\"Product Name\\\":\\\"Skillet\\\",\\\"Category\\\":\\\"Kitchen\\\",\\\"Quantity\\\":\\\"20\\\",\\\"Price\\\":\\\"149\\\",\\\"Total\\\":\\\"=E10*D10\\\"},{\\\"Product Name\\\":\\\"Hamilton Blender\\\",\\\"Category\\\":\\\"Appliances\\\",\\\"Quantity\\\":\\\"68\\\",\\\"Price\\\":\\\"109\\\",\\\"Total\\\":\\\"=E11*D11\\\"},{\\\"Product Name\\\":\\\"Plate set\\\",\\\"Category\\\":\\\"Kitchen\\\",\\\"Quantity\\\":\\\"59\\\",\\\"Price\\\":\\\"168\\\",\\\"Total\\\":\\\"=E12*D12\\\"}],\\\"hyperlinkStock\\\":[{\\\"Product ID\\\":\\\"AG940Z\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D4\\\",\\\"Available Quantity\\\":\\\"=B2-C2\\\"},{\\\"Product ID\\\":\\\"BJ120K\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D5\\\",\\\"Available Quantity\\\":\\\"=B3-C3\\\"},{\\\"Product ID\\\":\\\"BC120M\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D6\\\",\\\"Available Quantity\\\":\\\"=B4-C4\\\"},{\\\"Product ID\\\":\\\"BS121L\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D7\\\",\\\"Available Quantity\\\":\\\"=B5-C5\\\"},{\\\"Product ID\\\":\\\"BU121K\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D8\\\",\\\"Available Quantity\\\":\\\"=B6-C6\\\"},{\\\"Product ID\\\":\\\"BD121M\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D9\\\",\\\"Available Quantity\\\":\\\"=B7-C7\\\"},{\\\"Product ID\\\":\\\"AT992X\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D10\\\",\\\"Available Quantity\\\":\\\"=B8-C8\\\"},{\\\"Product ID\\\":\\\"AP992Z\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D11\\\",\\\"Available Quantity\\\":\\\"=B9-C9\\\"},{\\\"Product ID\\\":\\\"AW920X\\\",\\\"Products Received\\\":\\\"100\\\",\\\"Products Sold\\\":\\\"=100-Cart!D12\\\",\\\"Available Quantity\\\":\\\"=B10-C10\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/hyperlink-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/hyperlink/main.js":
/*!***********************************************!*\
  !*** ./Samples/spreadsheet/hyperlink/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/hyperlink/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-FV2XOM4YVX5QQDPGFQF66UAYBNA4X5LUWL6O7TKU72AW7WZNDCUQ/Samples/spreadsheet/hyperlink/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/hyperlink/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/hyperlink/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _hyperlink_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hyperlink-data.json */ \"./Samples/spreadsheet/hyperlink/hyperlink-data.json\");\nvar _hyperlink_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./hyperlink-data.json */ \"./Samples/spreadsheet/hyperlink/hyperlink-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n                        dataSource1: _hyperlink_data_json__WEBPACK_IMPORTED_MODULE_2__[\"hyperlinkCart\"],\n                        dataSource2: _hyperlink_data_json__WEBPACK_IMPORTED_MODULE_2__[\"hyperlinkStock\"],\n                        cells0: [{\n                            value: 'Shopping Cart', style: {\n                            fontSize: '20pt', fontWeight: 'bold',\n                            textAlign: 'center', backgroundColor: '#279377', verticalAlign: 'middle', color: '#ffffff'\n                        }\n                    }],\n\n                        cells1: [\n                        {\n                            value: 'Product ID', style: {\n                                fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',\n                                color: '#ffffff'\n                            }\n                        }\n                    ],\n\n                        cells2: [{ value: 'AG940Z', hyperlink: 'Stock!A2:D2' }],\n\n                        cells3: [{ value: 'BJ120K', hyperlink: 'Stock!A3:D3' }],\n\n                        cells4: [{ value: 'BC120M', hyperlink: 'Stock!A4:D4' }],\n\n                        cells5: [{ value: 'BS121L', hyperlink: 'Stock!A5:D5' }],\n\n                        cells6: [{ value: 'BU121K', hyperlink: 'Stock!A6:D6' }],\n\n                        cells7: [{ value: 'BD121M', hyperlink: 'Stock!A7:D7' }],\n\n                        cells8: [{ value: 'AT992X', hyperlink: 'Stock!A8:D8' }],\n\n                        cells9: [{ value: 'AP992Z', hyperlink: 'Stock!A9:D9' }],\n\n                        cells10: [{ value: 'AW920X', hyperlink: 'Stock!A10:D10' }],\n\n                        cells111: [{\n                        index: 4, value: 'Total Amount', style: { border: '1px solid #A6A6A6', fontWeight: 'bold',\n                            textAlign: 'center', verticalAlign: 'middle' }\n                    },\n                    {\n                        formula: '=Sum(F4:F12)', format: '$#,##0.00', style: {\n                            border: '1px solid #A6A6A6',\n                            textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold'\n                        }\n                    }],\n                    cells00: [\n                        {\n                            index: 4, value: 'Place Order', style: {\n                                fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',\n                                color: '#ffffff'\n                            }\n                        }\n                    ],\n                        cells11: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],\n\n                        cells22: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],\n\n                        cells33: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],\n\n                        cells44: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],\n\n                        cells55: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],\n\n                        cells66: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],\n\n                        cells77: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],\n\n                        cells88: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],\n\n                        cells99: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],\n\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.merge('Cart!A1:F2');\n        spreadsheet.numberFormat('$#,##0.00', 'Cart!E4:F12');\n        spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, 'Cart!A1:F12');\n        spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle' }, 'A1:F12');\n        spreadsheet.cellFormat({\n                    fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',\n                    color: '#ffffff'\n                }, 'Cart!A3:F3');\n        spreadsheet.cellFormat({\n                    fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',\n                    color: '#ffffff'\n                }, 'Stock!A1:E1');\n        spreadsheet.wrap('Stock!B1:D1');\n        spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, 'Stock!A1:E10');\n        spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle' }, 'Stock!A1:E11');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/hyperlink/App.vue?vue&type=template&id=3b285211&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/hyperlink/App.vue?vue&type=template&id=3b285211& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"created\":_vm.created}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":\"Cart\"}},[_c('e-ranges',[_c('e-range',{attrs:{\"dataSource\":_vm.dataSource1,\"startCell\":\"B3\"}})],1),_vm._v(\" \"),_c('e-rows',[_c('e-row',{attrs:{\"cells\":_vm.cells0}}),_vm._v(\" \"),_c('e-row',{attrs:{\"index\":2,\"cells\":_vm.cells1}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells2}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells3}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells4}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells5}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells6}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells7}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells8}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells9}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells10}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells111}})],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":88}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":120}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":100}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":100}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":110}})],1)],1),_vm._v(\" \"),_c('e-sheet',{attrs:{\"name\":\"Stock\"}},[_c('e-ranges',[_c('e-range',{attrs:{\"dataSource\":_vm.dataSource2}})],1),_vm._v(\" \"),_c('e-rows',[_c('e-row',{attrs:{\"cells\":_vm.cells00}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells11}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells22}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells33}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells44}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells55}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells66}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells77}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells88}}),_vm._v(\" \"),_c('e-row',{attrs:{\"cells\":_vm.cells99}})],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":88}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":88}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":88}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":88}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":88}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample demonstrates the Hyperlink feature with the shopping cart scenario as an example. To add hyperlink, click the link button in the insert tab or click hyperlink option using the cell context menu.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('ul',[_c('li',[_vm._v(\"\\n            This feature allows you to add reference as cell address or any web url to a cell and also navigate to a reference by clicking or tapping. You can enable or disable hyperlink by using the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#allowhyperlink\"}},[_vm._v(\"\\n                allowHyperlink\")]),_vm._v(\" property. \\n        \")]),_vm._v(\" \"),_c('li',[_vm._v(\"  \\n            In this sample, we have applied hyperlink to the cells using the \"),_c('code',[_vm._v(\"hyperlink\")]),_vm._v(\" property in cell. We can also add hyperlink using the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#addhyperlink\"}},[_vm._v(\"\\n                addHyperlink\")]),_vm._v(\" method. In shopping cart scenario, we have added cell reference as hyperlink in the product id column. In the stock sheet, we have added web url as hyperlink in the place order column.\\n        \")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        More information about the Hyperlink can be found in this\\n        \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/link\"}},[_vm._v(\"\\n            documentation\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/hyperlink/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });