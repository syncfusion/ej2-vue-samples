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
/******/ 		"heatmap/cell-json-binding/main": 0
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
/******/ 	deferredModules.push(["./Samples/heatmap/cell-json-binding/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/heatmap/cell-json-binding/App.vue":
/*!***************************************************!*\
  !*** ./Samples/heatmap/cell-json-binding/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0d4ad714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0d4ad714& */ \"./Samples/heatmap/cell-json-binding/App.vue?vue&type=template&id=0d4ad714&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/heatmap/cell-json-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0d4ad714___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0d4ad714___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/heatmap/cell-json-binding/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-json-binding/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-json-binding/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/heatmap/cell-json-binding/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-json-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/heatmap/cell-json-binding/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-json-binding/App.vue?vue&type=template&id=0d4ad714&":
/*!**********************************************************************************!*\
  !*** ./Samples/heatmap/cell-json-binding/App.vue?vue&type=template&id=0d4ad714& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0d4ad714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0d4ad714& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-json-binding/App.vue?vue&type=template&id=0d4ad714&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0d4ad714___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0d4ad714___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-json-binding/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-json-binding/main.js":
/*!***************************************************!*\
  !*** ./Samples/heatmap/cell-json-binding/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/cell-json-binding/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-json-binding/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-json-binding/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/cell-json-binding/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"HeatMapPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Most Visited Destinations by International Tourist Arrivals',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'Segoe UI'\n            }\n        },\n         xAxis: {\n            labels: ['Austria', 'China', 'France', 'Germany', 'Italy', 'Mexico', 'Spain', 'Thailand', 'UK', 'USA']\n        },\n        yAxis: {\n            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']\n        },\n        dataSource: [\n            { 'rowid': 'France', 'columnid': '2010', 'value': '77.6' },\n            { 'rowid': 'France', 'columnid': '2011', 'value': '79.4' },\n            { 'rowid': 'France', 'columnid': '2012', 'value': '80.8' },\n            { 'rowid': 'France', 'columnid': '2013', 'value': '86.6' },\n            { 'rowid': 'France', 'columnid': '2014', 'value': '83.7' },\n            { 'rowid': 'France', 'columnid': '2015', 'value': '84.5' },\n            { 'rowid': 'France', 'columnid': '2016', 'value': '82.6' },\n            { 'rowid': 'USA', 'columnid': '2010', 'value': '60.6' },\n            { 'rowid': 'USA', 'columnid': '2011', 'value': '65.4' },\n            { 'rowid': 'USA', 'columnid': '2012', 'value': '70.8' },\n            { 'rowid': 'USA', 'columnid': '2013', 'value': '73.8' },\n            { 'rowid': 'USA', 'columnid': '2014', 'value': '75.3' },\n            { 'rowid': 'USA', 'columnid': '2015', 'value': '77.5' },\n            { 'rowid': 'USA', 'columnid': '2016', 'value': '77.6' },\n            { 'rowid': 'Spain', 'columnid': '2010', 'value': '64.9' },\n            { 'rowid': 'Spain', 'columnid': '2011', 'value': '52.6' },\n            { 'rowid': 'Spain', 'columnid': '2012', 'value': '60.8' },\n            { 'rowid': 'Spain', 'columnid': '2013', 'value': '65.6' },\n            { 'rowid': 'Spain', 'columnid': '2014', 'value': '52.6' },\n            { 'rowid': 'Spain', 'columnid': '2015', 'value': '68.5' },\n            { 'rowid': 'Spain', 'columnid': '2016', 'value': '75.6' },\n            { 'rowid': 'China', 'columnid': '2010', 'value': '55.6' },\n            { 'rowid': 'China', 'columnid': '2011', 'value': '52.3' },\n            { 'rowid': 'China', 'columnid': '2012', 'value': '54.8' },\n            { 'rowid': 'China', 'columnid': '2013', 'value': '51.1' },\n            { 'rowid': 'China', 'columnid': '2014', 'value': '55.6' },\n            { 'rowid': 'China', 'columnid': '2015', 'value': '56.9' },\n            { 'rowid': 'China', 'columnid': '2016', 'value': '59.3' },\n            { 'rowid': 'Italy', 'columnid': '2010', 'value': '43.6' },\n            { 'rowid': 'Italy', 'columnid': '2011', 'value': '43.2' },\n            { 'rowid': 'Italy', 'columnid': '2012', 'value': '55.8' },\n            { 'rowid': 'Italy', 'columnid': '2013', 'value': '50.1' },\n            { 'rowid': 'Italy', 'columnid': '2014', 'value': '48.5' },\n            { 'rowid': 'Italy', 'columnid': '2015', 'value': '50.7' },\n            { 'rowid': 'Italy', 'columnid': '2016', 'value': '52.4' },\n            { 'rowid': 'UK', 'columnid': '2010', 'value': '28.2' },\n            { 'rowid': 'UK', 'columnid': '2011', 'value': '31.6' },\n            { 'rowid': 'UK', 'columnid': '2012', 'value': '29.8' },\n            { 'rowid': 'UK', 'columnid': '2013', 'value': '33.1' },\n            { 'rowid': 'UK', 'columnid': '2014', 'value': '32.6' },\n            { 'rowid': 'UK', 'columnid': '2015', 'value': '34.4' },\n            { 'rowid': 'UK', 'columnid': '2016', 'value': '35.8' },\n            { 'rowid': 'Germany', 'columnid': '2010', 'value': '26.8' },\n            { 'rowid': 'Germany', 'columnid': '2011', 'value': '29' },\n            { 'rowid': 'Germany', 'columnid': '2012', 'value': '26.8' },\n            { 'rowid': 'Germany', 'columnid': '2013', 'value': '27.6' },\n            { 'rowid': 'Germany', 'columnid': '2014', 'value': '33' },\n            { 'rowid': 'Germany', 'columnid': '2015', 'value': '35' },\n            { 'rowid': 'Germany', 'columnid': '2016', 'value': '35.6' },\n            { 'rowid': 'Mexico', 'columnid': '2010', 'value': '23.2' },\n            { 'rowid': 'Mexico', 'columnid': '2011', 'value': '24.9' },\n            { 'rowid': 'Mexico', 'columnid': '2012', 'value': '30.1' },\n            { 'rowid': 'Mexico', 'columnid': '2013', 'value': '22.2' },\n            { 'rowid': 'Mexico', 'columnid': '2014', 'value': '29.3' },\n            { 'rowid': 'Mexico', 'columnid': '2015', 'value': '32.1' },\n            { 'rowid': 'Mexico', 'columnid': '2016', 'value': '35' },\n            { 'rowid': 'Thailand', 'columnid': '2010', 'value': '15.9' },\n            { 'rowid': 'Thailand', 'columnid': '2011', 'value': '19.8' },\n            { 'rowid': 'Thailand', 'columnid': '2012', 'value': '21.8' },\n            { 'rowid': 'Thailand', 'columnid': '2013', 'value': '23.5' },\n            { 'rowid': 'Thailand', 'columnid': '2014', 'value': '24.8' },\n            { 'rowid': 'Thailand', 'columnid': '2015', 'value': '29.9' },\n            { 'rowid': 'Thailand', 'columnid': '2016', 'value': '32.6' },\n            { 'rowid': 'Austria', 'columnid': '2010', 'value': '22' },\n            { 'rowid': 'Austria', 'columnid': '2011', 'value': '21.3' },\n            { 'rowid': 'Austria', 'columnid': '2012', 'value': '24.2' },\n            { 'rowid': 'Austria', 'columnid': '2013', 'value': '23.2' },\n            { 'rowid': 'Austria', 'columnid': '2014', 'value': '25' },\n            { 'rowid': 'Austria', 'columnid': '2015', 'value': '26.7' },\n            { 'rowid': 'Austria', 'columnid': '2016', 'value': '28.1' },\n        ],\n        dataSourceSettings:  {\n            isJsonData: true,\n            adaptorType: 'Cell',\n            xDataMapping: 'rowid',\n            yDataMapping: 'columnid',\n            valueMapping: 'value'\n        },\n        paletteSettings: {\n            palette: [{ color: '#DCD57E' },\n            { color: '#A6DC7E' },\n            { color: '#7EDCA2' },\n            { color: '#6EB5D0' }\n            ]\n        },\n        cellSettings: {\n            border: {\n                radius: 4,\n                width: 1,\n                color: 'white'\n            },\n            showLabel: true,\n            format: '{value} M'\n        }\n      \n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Adaptor\"]]\n},\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-json-binding/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/cell-json-binding/App.vue?vue&type=template&id=0d4ad714&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/cell-json-binding/App.vue?vue&type=template&id=0d4ad714& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-heatmap\", {\n            attrs: {\n              id: \"container\",\n              titleSettings: _vm.titleSettings,\n              xAxis: _vm.xAxis,\n              yAxis: _vm.yAxis,\n              dataSource: _vm.dataSource,\n              dataSourceSettings: _vm.dataSourceSettings,\n              paletteSettings: _vm.paletteSettings,\n              cellSettings: _vm.cellSettings,\n              load: _vm.load\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n    \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"https://en.wikipedia.org/wiki/World_Tourism_rankings\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"https://en.wikipedia.org/\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the number of international tourist arrivals in millions of the most visited destinations in the world\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to bind JSON data and configure the Heatmap using the data adaptor support. You can bind the JSON data with information for each individual cell to the Heatmap using \"\n        ),\n        _c(\"code\", [_vm._v(\"isJsonData \")]),\n        _vm._v(\" and by defining the \"),\n        _c(\"code\", [_vm._v(\"adaptorType \")]),\n        _vm._v(\n          \" properties. In cell JSON data, the value for each cell is mapped using the \"\n        ),\n        _c(\"code\", [_vm._v(\"xDataMapping \")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"yDataMapping \")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"valueMapping \")]),\n        _vm._v(\"properties.  \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices. \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n     Heatmap component features are segregated into individual feature-wise modules. To use data adaptor support, we need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Adaptor \")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Adaptor) \")]),\n        _vm._v(\" method, to use a tooltip, inject the \"),\n        _c(\"code\", [_vm._v(\"Tooltip \")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Tooltip) \")]),\n        _vm._v(\" method, and use a legend by injecting the \"),\n        _c(\"code\", [_vm._v(\"Legend \")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Legend) \")]),\n        _vm._v(\" method.  \\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/cell-json-binding/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });