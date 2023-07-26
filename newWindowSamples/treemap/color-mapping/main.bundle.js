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
/******/ 		"treemap/color-mapping/main": 0
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
/******/ 	deferredModules.push(["./Samples/treemap/color-mapping/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/treemap/color-mapping/App.vue":
/*!***********************************************!*\
  !*** ./Samples/treemap/color-mapping/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_03bfb57e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=03bfb57e&scoped=true& */ \"./Samples/treemap/color-mapping/App.vue?vue&type=template&id=03bfb57e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/treemap/color-mapping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css& */ \"./Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_03bfb57e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_03bfb57e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"03bfb57e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/treemap/color-mapping/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?");

/***/ }),

/***/ "./Samples/treemap/color-mapping/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/treemap/color-mapping/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/treemap/color-mapping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?");

/***/ }),

/***/ "./Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_03bfb57e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?");

/***/ }),

/***/ "./Samples/treemap/color-mapping/App.vue?vue&type=template&id=03bfb57e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/treemap/color-mapping/App.vue?vue&type=template&id=03bfb57e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_03bfb57e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=03bfb57e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/color-mapping/App.vue?vue&type=template&id=03bfb57e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_03bfb57e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_03bfb57e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?");

/***/ }),

/***/ "./Samples/treemap/color-mapping/main.js":
/*!***********************************************!*\
  !*** ./Samples/treemap/color-mapping/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/treemap/color-mapping/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.toolback[data-v-03bfb57e] {\\n    border-radius: 4px;\\n    border: 1px #abb9c6;\\n    opacity: 90%;\\n    background: rgba(53, 63, 76, 0.90);\\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);\\n    padding-bottom: 10px;\\n    padding-top: 10px;\\n    padding-left: 10px;\\n    padding-right: 10px;\\n    width: 170px;\\n}\\n.listing1[data-v-03bfb57e] {\\n     font-size:13px;\\n     color:#cccccc\\n}\\n.listing2[data-v-03bfb57e] {\\n     font-size:13px;\\n     color:#ffffff;\\n     font-weight: 500;\\n}\\n.property-text[data-v-03bfb57e] {\\n        font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n        font-size: 13px !important;\\n        font-weight: 400 !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/-treemap-vue-samples_master-JVFBB5II7S5VQS6QU3Q34AFRTO4FYDMRYMF3HL2CLP3QIMPPAEDA/Samples/treemap/color-mapping/App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;IACb,mCAAmC;IACnC,4CAA4C;IAC5C,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;CAChB;AACD;KACK,eAAe;KACf,aAAa;CACjB;AACD;KACK,eAAe;KACf,cAAc;KACd,iBAAiB;CACrB;AACD;QACQ,uFAAuF;QACvF,2BAA2B;QAC3B,4BAA4B;CACnC\",\"file\":\"App.vue?vue&type=style&index=0&id=03bfb57e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.toolback[data-v-03bfb57e] {\\n    border-radius: 4px;\\n    border: 1px #abb9c6;\\n    opacity: 90%;\\n    background: rgba(53, 63, 76, 0.90);\\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);\\n    padding-bottom: 10px;\\n    padding-top: 10px;\\n    padding-left: 10px;\\n    padding-right: 10px;\\n    width: 170px;\\n}\\n.listing1[data-v-03bfb57e] {\\n     font-size:13px;\\n     color:#cccccc\\n}\\n.listing2[data-v-03bfb57e] {\\n     font-size:13px;\\n     color:#ffffff;\\n     font-weight: 500;\\n}\\n.property-text[data-v-03bfb57e] {\\n        font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n        font-size: 13px !important;\\n        font-weight: 400 !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/treemap/color-mapping/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/color-mapping/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-treemap */ \"./node_modules/@syncfusion/ej2-vue-treemap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Top 10 largest islands in the World',\n            textStyle: { size: '15px' }\n        },\n        dataSource: new _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapAjax\"]('././../../source/treemap/treemap-data/color.json'),\n        tooltipSettings: {\n            visible: true,\n            format: 'Name: ${Name}<br>Area: ${Area} per square kms<br>Continent: ${Location}',\n            opacity: 0.8\n        },\n        legendSettings: {\n            visible: true,\n            position: 'Bottom',\n            mode: 'Interactive',\n            height: '10',\n            title: {\n                text: 'Area'\n            },\n        },\n        useGroupingSeparator: true,\n        rangeColorValuePath: 'Area',\n        weightValuePath: 'Area',\n        leafItemSettings: {\n            labelPath: 'Name',\n            border: { color: 'white', width: 0.5 },\n            colorMapping: [\n                { from: 100000, to: 250000, label: '0.1M - 0.25M', color: '#547C84' },\n                { from: 250000, to: 550000, label: '0.25M - 0.55M', color: '#37AFAB' },\n                { from: 550000, to: 750000, label: '0.55M - 0.75M', color: '#A4D6AD' },\n                { from: 750000, to: 2250000, label: '0.75M - 2M', color: '#DEEBAE' },\n                { to: null, from: null,  color: 'null' },\n                { to: null, from: null,  color: 'null' },\n            ]\n        },\n        labelswidth: 120,\n        localFields: { text: 'text', value: 'value' },\n        labelsdata:[\n            {value: 'RangeColorMapping', text: 'Range'},\n            {value: 'EqualColorMapping', text: 'Equal'},\n            {value: 'DesaturationColorMapping', text: 'Desaturation'},\n        ]\n}\n},\nprovide:{\n    treemap:[_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapTooltip\"], _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapLegend\"]]\n},\nmethods:{\n    /* custom code start */\n    load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material'; \n        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));\n        let dropDownElement = document.getElementById('colorMapping');\n        let opacityCheck = document.getElementById('opacity');\n        if(dropDownElement.value === 'Desaturation'){\n            document.getElementById('hideOne').style.visibility = \"visible\"; \n            if(opacityCheck.checked){\n                document.getElementById('hideTwo').style.visibility = \"visible\"; \n                document.getElementById('hideThree').style.visibility = \"visible\"; \n            } else{\n                document.getElementById('hideTwo').style.visibility = \"hidden\"; \n                document.getElementById('hideThree').style.visibility = \"hidden\"; \n            }            \n        } else{\n             document.getElementById('hideOne').style.visibility = \"hidden\";                 \n             document.getElementById('hideTwo').style.visibility = \"hidden\"; \n             document.getElementById('hideThree').style.visibility = \"hidden\"; \n        }        \n    },\n    /* custom code end */\n    // Code for Property Panel\n    changeColor:function(args){\n        let treemap = this.$refs.treemap.ej2Instances;\n        let opacity = this.$refs.opacity.ej2Instances;\n        let sampleValue = args.value;\n        let element = sampleValue.toString();\n            if (element === 'RangeColorMapping') {                \n                treemap.rangeColorValuePath = 'Area';\n\t\t\t\ttreemap.leafItemSettings.colorMapping[2].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[2].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[1].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[1].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[4].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[4].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[3].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[3].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[5].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[5].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[0].from = 100000;\n                treemap.leafItemSettings.colorMapping[0].to = 250000;\n                treemap.leafItemSettings.colorMapping[0].value = null;\n                treemap.leafItemSettings.colorMapping[0].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[0].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[1].value = null;\n                treemap.leafItemSettings.colorMapping[2].value = null;\n                treemap.leafItemSettings.colorMapping[0].label = '0.1M - 0.25M';\n                treemap.leafItemSettings.colorMapping[0].color = '#547C84';\n                treemap.leafItemSettings.colorMapping[1].from = 250000;\n                treemap.leafItemSettings.colorMapping[1].to = 500000;\n                treemap.leafItemSettings.colorMapping[1].label = '0.25M - 0.50M';\n                treemap.leafItemSettings.colorMapping[1].color = '#37AFAB';\n                treemap.leafItemSettings.colorMapping[2].from = 500000;\n                treemap.leafItemSettings.colorMapping[2].to = 750000;\n                treemap.leafItemSettings.colorMapping[2].label = '0.5M - 0.75M';\n                treemap.leafItemSettings.colorMapping[2].color = '#A4D6AD';\n                treemap.leafItemSettings.colorMapping[2].value = null;\n                treemap.leafItemSettings.colorMapping[3].from = 750000;\n                treemap.leafItemSettings.colorMapping[3].to = 2200000;\n                treemap.leafItemSettings.colorMapping[3].label = '0.75M - 2M';\n                treemap.leafItemSettings.colorMapping[3].color = '#DEEBAE';\n                treemap.leafItemSettings.colorMapping[4].from = null;\n                treemap.leafItemSettings.colorMapping[3].value = null;\n                treemap.leafItemSettings.colorMapping[4].to = null;\n                treemap.leafItemSettings.colorMapping[4].label = null;\n                treemap.leafItemSettings.colorMapping[4].value = null;\n                treemap.leafItemSettings.colorMapping[4].color = null;\n                treemap.leafItemSettings.colorMapping[5].to = null;\n                treemap.leafItemSettings.colorMapping[5].label = null;\n                treemap.leafItemSettings.colorMapping[5].value = null;\n                treemap.leafItemSettings.colorMapping[5].color = null;\n                treemap.leafItemSettings.colorMapping[5].from = null;\n                treemap.legendSettings.title.text = 'Area';\n                treemap.refresh();\n            } else if (element === 'EqualColorMapping') {                \n                treemap.rangeColorValuePath = null;\n                treemap.leafItemSettings.colorMapping[0].from = null;\n                treemap.leafItemSettings.colorMapping[0].to = null;\n                treemap.leafItemSettings.colorMapping[0].label = null;\n                treemap.leafItemSettings.colorMapping[1].label = null;\n                treemap.leafItemSettings.colorMapping[2].label = null;\n                treemap.leafItemSettings.colorMapping[3].label = null;\n                treemap.leafItemSettings.colorMapping[4].label = null;\n                treemap.leafItemSettings.colorMapping[0].value = 'North America';\n                treemap.leafItemSettings.colorMapping[0].color = '#DEEBAE';\n                treemap.leafItemSettings.colorMapping[1].from = null;\n                treemap.leafItemSettings.colorMapping[1].to = null;\n                treemap.leafItemSettings.colorMapping[1].value = 'Oceania';\n                treemap.leafItemSettings.colorMapping[1].color = '#A4D6AD';\n                treemap.leafItemSettings.colorMapping[2].from = null;\n                treemap.leafItemSettings.colorMapping[2].to = null;\n                treemap.leafItemSettings.colorMapping[2].value = 'Asia';\n                treemap.leafItemSettings.colorMapping[2].color = '#37AFAB';\n                treemap.leafItemSettings.colorMapping[3].from = null;\n                treemap.leafItemSettings.colorMapping[3].to = null;\n                treemap.leafItemSettings.colorMapping[3].value = 'Africa';\n                treemap.leafItemSettings.colorMapping[3].color = '#547C84';\n                treemap.leafItemSettings.colorMapping[4].from = null;\n                treemap.leafItemSettings.colorMapping[4].to = null;\n                treemap.leafItemSettings.colorMapping[4].value = 'Europe';\n                treemap.leafItemSettings.colorMapping[4].color = '#CEBF93';\n                treemap.leafItemSettings.colorMapping[0].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[0].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[1].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[1].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[2].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[2].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[3].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[3].maxOpacity = null;\n                treemap.leafItemSettings.colorMapping[4].minOpacity = null;\n                treemap.leafItemSettings.colorMapping[4].maxOpacity = null;\n                treemap.equalColorValuePath = 'Location';\n                treemap.legendSettings.title.text = 'Continent';\n                treemap.refresh();\n            }else if (element === 'DesaturationColorMapping') {                \n                treemap.rangeColorValuePath = 'Area';\n                treemap.equalColorValuePath = null;\n                let minOpacity = document.getElementById('minopacity');\n                let maxOpacity = document.getElementById('maxopacity');\n                treemap.leafItemSettings.colorMapping[2].from = null;\n                treemap.leafItemSettings.colorMapping[2].to = null;\n                treemap.leafItemSettings.colorMapping[1].from = null;\n                treemap.leafItemSettings.colorMapping[1].to = null;\n                treemap.leafItemSettings.colorMapping[1].label = null;\n                treemap.leafItemSettings.colorMapping[3].from = null;\n                treemap.leafItemSettings.colorMapping[3].to = null;\n                treemap.leafItemSettings.colorMapping[0].from = 100000;\n                treemap.leafItemSettings.colorMapping[0].to = 2230800;\n                treemap.leafItemSettings.colorMapping[0].label = '0.1M - 2M';\n                treemap.leafItemSettings.colorMapping[0].value = null;\n                treemap.leafItemSettings.colorMapping[1].value = null;\n                treemap.leafItemSettings.colorMapping[2].value = null;\n                treemap.leafItemSettings.colorMapping[3].value = null;\n                treemap.leafItemSettings.colorMapping[2].color = null;\n                treemap.leafItemSettings.colorMapping[1].color = null;\n                treemap.leafItemSettings.colorMapping[3].color = null;\n                treemap.leafItemSettings.colorMapping[0].color = ['#F0D6AD', '#19547B'];\n                if (opacity.checked) {\n                    treemap.leafItemSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);\n                    treemap.leafItemSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);\n                } else {\n                    treemap.leafItemSettings.colorMapping[0].minOpacity = null;\n                    treemap.leafItemSettings.colorMapping[0].maxOpacity = null;\n                }\n                treemap.legendSettings.title.text = 'Area';\n                treemap.refresh();\n            }\n            opacity.dataBind();\n    },\n    changeOpcity: function(args) {\n        let treemap = this.$refs.treemap.ej2Instances;\n        let minOpacity = document.getElementById('minopacity');\n        let maxOpacity = document.getElementById('maxopacity');\n        if (args.checked) {\n            treemap.leafItemSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);\n            treemap.leafItemSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);\n            treemap.leafItemSettings.colorMapping[1].minOpacity = parseFloat(minOpacity.value);\n            treemap.leafItemSettings.colorMapping[1].maxOpacity = parseFloat(maxOpacity.value);           \n        } else {\n            treemap.leafItemSettings.colorMapping[0].minOpacity = null;\n            treemap.leafItemSettings.colorMapping[0].maxOpacity = null;\n            treemap.leafItemSettings.colorMapping[1].minOpacity = null;\n            treemap.leafItemSettings.colorMapping[1].maxOpacity = null;           \n        }\n        treemap.refresh();\n    },\n    changeMaxOpacity: function() {\n        let treemap = this.$refs.treemap.ej2Instances;\n        let opacity = this.$refs.opacity.ej2Instances;\n        if (opacity.checked) {\n            let slider = document.getElementById('maxopacity');\n            let maxOpacity = parseFloat(slider.value);\n            treemap.leafItemSettings.colorMapping[0].maxOpacity = maxOpacity;\n            treemap.leafItemSettings.colorMapping[1].maxOpacity = maxOpacity;\n            treemap.refresh();\n        }\n    },\n    changeMinOpacity: function() {\n        let treemap = this.$refs.treemap.ej2Instances;\n        let opacity = this.$refs.opacity.ej2Instances;\n        if (opacity.checked) {\n            let slider = document.getElementById('minopacity');\n            let minOpacity = parseFloat(slider.value);\n            treemap.leafItemSettings.colorMapping[0].minOpacity = minOpacity;\n            treemap.leafItemSettings.colorMapping[1].minOpacity = minOpacity;\n            treemap.refresh();\n        }\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/color-mapping/App.vue?vue&type=template&id=03bfb57e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/color-mapping/App.vue?vue&type=template&id=03bfb57e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-9 control-section\" },\n      [\n        _c(\"ejs-treemap\", {\n          ref: \"treemap\",\n          attrs: {\n            id: \"container\",\n            align: \"center\",\n            load: _vm.load,\n            titleSettings: _vm.titleSettings,\n            rangeColorValuePath: _vm.rangeColorValuePath,\n            format: \"n\",\n            useGroupingSeparator: _vm.useGroupingSeparator,\n            dataSource: _vm.dataSource,\n            leafItemSettings: _vm.leafItemSettings,\n            legendSettings: _vm.legendSettings,\n            tooltipSettings: _vm.tooltipSettings,\n            weightValuePath: _vm.weightValuePath\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    staticStyle: { width: \"110\" },\n                    attrs: {\n                      id: \"colorMapping\",\n                      dataSource: _vm.labelsdata,\n                      fields: _vm.localFields,\n                      index: \"0\",\n                      width: _vm.labelswidth,\n                      change: _vm.changeColor\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"hideOne\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"opacity\",\n                      attrs: { id: \"opacity\", change: _vm.changeOpcity }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"hideTwo\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n                _c(\"input\", {\n                  staticStyle: { width: \"100%\", \"margin-top\": \"20%\" },\n                  attrs: {\n                    type: \"range\",\n                    id: \"minopacity\",\n                    step: \"0.1\",\n                    value: \"0.5\",\n                    min: \"0\",\n                    max: \"1\"\n                  },\n                  on: {\n                    pointermove: _vm.changeMinOpacity,\n                    touchmove: _vm.changeMinOpacity,\n                    change: _vm.changeMinOpacity\n                  }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"hideThree\" } }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n                _c(\"input\", {\n                  staticStyle: { width: \"100%\", \"margin-top\": \"20%\" },\n                  attrs: {\n                    type: \"range\",\n                    id: \"maxopacity\",\n                    step: \"0.1\",\n                    value: \"1\",\n                    min: \"0\",\n                    max: \"1\"\n                  },\n                  on: {\n                    pointermove: _vm.changeMaxOpacity,\n                    touchmove: _vm.changeMaxOpacity,\n                    change: _vm.changeMaxOpacity\n                  }\n                })\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticStyle: { display: \"none\" }, attrs: { id: \"template\" } }, [\n      _c(\"div\", { staticClass: \"toolback\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"listing2\" },\n          [\n            _c(\"center\", [\n              _vm._v(\n                \"\\n                        ${Name}                                            \\n                    \"\n              )\n            ])\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"hr\", {\n          staticStyle: {\n            \"margin-top\": \"2px\",\n            \"margin-bottom\": \"5px\",\n            border: \"0.5px solid #DDDDDD\"\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          [\n            _c(\"center\", [\n              _c(\"span\", { staticClass: \"listing1\" }, [_vm._v(\"Area : \")]),\n              _c(\"span\", { staticClass: \"listing2\" }, [_vm._v(\"${Area}\")])\n            ])\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          [\n            _c(\"center\", [\n              _c(\"span\", { staticClass: \"listing1\" }, [_vm._v(\"Continent : \")]),\n              _c(\n                \"span\",\n                {\n                  staticClass: \"listing2\",\n                  staticStyle: { display: \"inline-block\" }\n                },\n                [_vm._v(\"${Location}\")]\n              )\n            ])\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [\n        _vm._v(\"Color Mapping Type\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [_vm._v(\" Change Opacity\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { \"margin-top\": \"12%\" } },\n        [_vm._v(\"Min Opacity\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { \"margin-top\": \"12%\" } },\n        [_vm._v(\"Max Opacity\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the top 10 largest islands in the world based on area. The color mapping is applied to the items to differentiate them from other items.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render a tree map with color mapping. The range color mapping and desaturation color mapping group the shapes based on the area size, whereas the equal color mapping groups the shapes based on the continent value. The legend is enabled in this example to represent each color mapping.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            The TreeMap component features are segregated into individual modules by feature. To use a legend, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Legend\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"TreeMap.Inject(TreeMapLegend)\")]),\n        _vm._v(\" method.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/color-mapping/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });