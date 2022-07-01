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
/******/ 		"breadcrumb/overflow-modes/main": 0
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
/******/ 	deferredModules.push(["./Samples/breadcrumb/overflow-modes/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/breadcrumb/overflow-modes/App.vue":
/*!***************************************************!*\
  !*** ./Samples/breadcrumb/overflow-modes/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_41622542_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=41622542&scoped=true& */ \"./Samples/breadcrumb/overflow-modes/App.vue?vue&type=template&id=41622542&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/breadcrumb/overflow-modes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_41622542_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css& */ \"./Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_41622542_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_41622542_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"41622542\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/breadcrumb/overflow-modes/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/overflow-modes/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/breadcrumb/overflow-modes/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_41622542_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_41622542_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_41622542_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_41622542_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_41622542_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/overflow-modes/App.vue?vue&type=template&id=41622542&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./Samples/breadcrumb/overflow-modes/App.vue?vue&type=template&id=41622542&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_41622542_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=41622542&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=template&id=41622542&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_41622542_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_41622542_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/overflow-modes/main.js":
/*!***************************************************!*\
  !*** ./Samples/breadcrumb/overflow-modes/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/breadcrumb/overflow-modes/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.content-wrapper[data-v-41622542] {\\n    width: 90%;\\n    margin: 0 auto;\\n    min-width: 85px;\\n}\\n.content-wrapper div.row[data-v-41622542] {\\n    padding: 15px 0px;\\n}\\n.content-wrapper div.row[data-v-41622542]:nth-child(even) {\\n    padding-top: 0;\\n}\\n@@media only screen and (max-width: 480px) {\\n.content-wrapper {\\n        width: 92%;\\n}\\n.col-xs-12,\\n    .col-xs-4,\\n    .col-xs-12 {\\n        padding: 10px 5px;\\n        width: 100%;\\n}\\n.content-wrapper div.row {\\n        padding: 0px;\\n}\\n}\\n.tailwind .e-breadcrumb[data-v-41622542],\\n.tailwind-dark .e-breadcrumb[data-v-41622542] {\\n    margin-left: -12px;\\n}\\n.material .e-breadcrumb[data-v-41622542],\\n.material-dark .e-breadcrumb[data-v-41622542] {\\n    margin-left: -8px;\\n}\\n.fabric .e-breadcrumb[data-v-41622542],\\n.fabric-dark .e-breadcrumb[data-v-41622542],\\n.highcontrast .e-breadcrumb[data-v-41622542] {\\n    margin-left: -4px;\\n}\\n#reset[data-v-41622542] {\\n    float: right;\\n    margin: 5px 2px 5px 0;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-GOXQA5NGRTSVE5AASF5K6J5IGS6NGJPBAFGTAXP5IVHINC5N44AA/Samples/breadcrumb/overflow-modes/App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;IACX,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,eAAe;CAClB;AACD;AACA;QACQ,WAAW;CAClB;AACD;;;QAGQ,kBAAkB;QAClB,YAAY;CACnB;AACD;QACQ,aAAa;CACpB;CACA;AACD;;IAEI,mBAAmB;CACtB;AACD;;IAEI,kBAAkB;CACrB;AACD;;;IAGI,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,sBAAsB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=41622542&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.content-wrapper[data-v-41622542] {\\n    width: 90%;\\n    margin: 0 auto;\\n    min-width: 85px;\\n}\\n.content-wrapper div.row[data-v-41622542] {\\n    padding: 15px 0px;\\n}\\n.content-wrapper div.row[data-v-41622542]:nth-child(even) {\\n    padding-top: 0;\\n}\\n@@media only screen and (max-width: 480px) {\\n.content-wrapper {\\n        width: 92%;\\n}\\n.col-xs-12,\\n    .col-xs-4,\\n    .col-xs-12 {\\n        padding: 10px 5px;\\n        width: 100%;\\n}\\n.content-wrapper div.row {\\n        padding: 0px;\\n}\\n}\\n.tailwind .e-breadcrumb[data-v-41622542],\\n.tailwind-dark .e-breadcrumb[data-v-41622542] {\\n    margin-left: -12px;\\n}\\n.material .e-breadcrumb[data-v-41622542],\\n.material-dark .e-breadcrumb[data-v-41622542] {\\n    margin-left: -8px;\\n}\\n.fabric .e-breadcrumb[data-v-41622542],\\n.fabric-dark .e-breadcrumb[data-v-41622542],\\n.highcontrast .e-breadcrumb[data-v-41622542] {\\n    margin-left: -4px;\\n}\\n#reset[data-v-41622542] {\\n    float: right;\\n    margin: 5px 2px 5px 0;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"BreadcrumbPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      \n    };\n  },\n  methods: {\n    btnClick: function() {\n        var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName(\"e-breadcrumb\");\n        for (var i = 0; i < breadcrumbs.length; i++) {\n            breadcrumb = breadcrumbs[i];\n            breadcrumbInst = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(breadcrumb, 'breadcrumb');\n            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;\n        }\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=template&id=41622542&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/overflow-modes/App.vue?vue&type=template&id=41622542&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"content-wrapper\"},[_c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('h5',{staticStyle:{\"display\":\"inline-block\"}},[_vm._v(\"Overflow Mode - Hidden\")]),_vm._v(\" \"),_c('ejs-button',{attrs:{\"id\":\"reset\",\"cssClass\":\"reset-btn e-small\",\"content\":\"Reset State\"},nativeOn:{\"click\":function($event){return _vm.btnClick.apply(null, arguments)}}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('ejs-breadcrumb',{attrs:{\"id\":\"hidden-mode\",\"enableNavigation\":false,\"maxItems\":3,\"overflowMode\":\"Hidden\"}},[_c('e-breadcrumb-items',[_c('e-breadcrumb-item',{attrs:{\"text\":\"Home\",\"url\":\"./\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Breadcrumb\",\"url\":\"./breadcrumb\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Default\",\"url\":\"./breadcrumb/default\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Icons\",\"url\":\"./breadcrumb/icons\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Navigations\",\"url\":\"./breadcrumb/navigations\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Overflow\",\"url\":\"./breadcrumb/overflow\"}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('ejs-breadcrumb',{attrs:{\"id\":\"menu-mode\",\"enableNavigation\":false,\"maxItems\":3,\"overflowMode\":\"Menu\"}},[_c('e-breadcrumb-items',[_c('e-breadcrumb-item',{attrs:{\"text\":\"Home\",\"url\":\"./\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Breadcrumb\",\"url\":\"./breadcrumb\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Default\",\"url\":\"./breadcrumb/default\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Icons\",\"url\":\"./breadcrumb/icons\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Navigations\",\"url\":\"./breadcrumb/navigations\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Overflow\",\"url\":\"./breadcrumb/overflow\"}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('ejs-breadcrumb',{attrs:{\"id\":\"collapsed-mode\",\"enableNavigation\":false,\"maxItems\":3,\"overflowMode\":\"Collapsed\"}},[_c('e-breadcrumb-items',[_c('e-breadcrumb-item',{attrs:{\"text\":\"Home\",\"url\":\"./\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Breadcrumb\",\"url\":\"./breadcrumb\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Default\",\"url\":\"./breadcrumb/default\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Icons\",\"url\":\"./breadcrumb/icons\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Navigations\",\"url\":\"./breadcrumb/navigations\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Overflow\",\"url\":\"./breadcrumb/overflow\"}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('ejs-breadcrumb',{attrs:{\"id\":\"wrap-mode\",\"enableNavigation\":false,\"maxItems\":3,\"overflowMode\":\"Wrap\"}},[_c('e-breadcrumb-items',[_c('e-breadcrumb-item',{attrs:{\"text\":\"Home\",\"url\":\"./\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Breadcrumb\",\"url\":\"./breadcrumb\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Default\",\"url\":\"./breadcrumb/default\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Icons\",\"url\":\"./breadcrumb/icons\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Navigations\",\"url\":\"./breadcrumb/navigations\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Overflow\",\"url\":\"./breadcrumb/overflow\"}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(3),_vm._v(\" \"),_c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('ejs-breadcrumb',{attrs:{\"id\":\"scroll-mode\",\"enableNavigation\":false,\"maxItems\":4,\"overflowMode\":\"Scroll\"}},[_c('e-breadcrumb-items',[_c('e-breadcrumb-item',{attrs:{\"text\":\"Home\",\"url\":\"./\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Breadcrumb\",\"url\":\"./breadcrumb\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Default\",\"url\":\"./breadcrumb/default\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Icons\",\"url\":\"./breadcrumb/icons\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Navigations\",\"url\":\"./breadcrumb/navigations\"}}),_vm._v(\" \"),_c('e-breadcrumb-item',{attrs:{\"text\":\"Overflow\",\"url\":\"./breadcrumb/overflow\"}})],1)],1)],1)])])]),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_vm._m(5)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('h5',[_vm._v(\"Overflow Mode - Menu\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('h5',[_vm._v(\"Overflow Mode - Collapsed\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('h5',[_vm._v(\"Overflow Mode - Wrap\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row material2\"},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-12 col-md-12\"},[_c('h5',[_vm._v(\"Overflow Mode - Scroll\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the different types of overflow mode such as \"),_c('code',[_vm._v(\"Hidden\")]),_vm._v(\", \"),_c('code',[_vm._v(\"Menu\")]),_vm._v(\", \"),_c('code',[_vm._v(\"Wrap\")]),_vm._v(\", \"),_c('code',[_vm._v(\"Collapsed\")]),_vm._v(\", and \"),_c('code',[_vm._v(\"Scroll\")]),_vm._v(\" in the \"),_c('b',[_vm._v(\"Breadcrumb\")]),_vm._v(\" component.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"Overflow mode limits the number of items to be displayed in the view when the breadcrumb's width exceeds the container width or \"),_c('code',[_vm._v(\"maxItems\")]),_vm._v(\" property.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"The following overflow mode's were available in the \"),_c('code',[_vm._v(\"Breadcrumb\")]),_vm._v(\" component.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"Hidden\")]),_vm._v(\" - Specified maxItems count will be visible and the remaining items will be hidden. While clicking on the previous item, the hidden item will become visible.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Collapsed\")]),_vm._v(\" - Only the first and last items will be visible, and the remaining items will be hidden with collapsed icon. When the collapsed icon is clicked, all the items become visible.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Menu\")]),_vm._v(\" - Shows the number of breadcrumb items that can be accommodated within the container space, and creates a sub menu with the remaining items.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Wrap\")]),_vm._v(\" - Wraps the items on multiple lines when the Breadcrumbs width exceeds the container space.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Scroll\")]),_vm._v(\" - Shows an HTML scroll bar when the Breadcrumbs width exceeds the container space.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"None\")]),_vm._v(\" - Shows all the items on a single line.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"More information about \"),_c('code',[_vm._v(\"Breadcrumb\")]),_vm._v(\" component can be found in this \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/breadcrumb/overflow/\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/overflow-modes/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });