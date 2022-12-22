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
/******/ 		"card/horizontal/main": 0
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
/******/ 	deferredModules.push(["./Samples/card/horizontal/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/card/horizontal/App.vue":
/*!*****************************************!*\
  !*** ./Samples/card/horizontal/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6ec8689e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6ec8689e&scoped=true& */ \"./Samples/card/horizontal/App.vue?vue&type=template&id=6ec8689e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/card/horizontal/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6ec8689e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css& */ \"./Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6ec8689e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6ec8689e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6ec8689e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/card/horizontal/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?");

/***/ }),

/***/ "./Samples/card/horizontal/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/card/horizontal/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/card/horizontal/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?");

/***/ }),

/***/ "./Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ec8689e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ec8689e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ec8689e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ec8689e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ec8689e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?");

/***/ }),

/***/ "./Samples/card/horizontal/App.vue?vue&type=template&id=6ec8689e&scoped=true&":
/*!************************************************************************************!*\
  !*** ./Samples/card/horizontal/App.vue?vue&type=template&id=6ec8689e&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ec8689e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6ec8689e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/horizontal/App.vue?vue&type=template&id=6ec8689e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ec8689e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ec8689e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?");

/***/ }),

/***/ "./Samples/card/horizontal/main.js":
/*!*****************************************!*\
  !*** ./Samples/card/horizontal/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/card/horizontal/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/card/horizontal/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-card-horizontal.e-product[data-v-6ec8689e] {\\n        height: 420px;\\n}\\n.e-bigger.fluent .e-card-horizontal.e-product[data-v-6ec8689e],\\n    .e-bigger.fluent-dark .e-card-horizontal.e-product[data-v-6ec8689e] {\\n        height: 480px;\\n}\\n.card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-stacked[data-v-6ec8689e] {\\n        justify-content: flex-start;\\n}\\n.card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button[data-v-6ec8689e]:last-child {\\n        margin-left: 8px;\\n}\\n.fabric .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button[data-v-6ec8689e]:last-child,\\n    .highcontrast .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button[data-v-6ec8689e]:last-child {\\n        margin-left: 7px;\\n}\\n.card-control-section.horizontal_card_layout .e-card.e-card-horizontal.e-product .e-card-stacked[data-v-6ec8689e]> :first-child,\\n    .card-control-section.horizontal_card_layout #vertical_Sample .e-card.e-card-horizontal .e-card-stacked[data-v-6ec8689e]> :first-child,\\n    .card-control-section.horizontal_card_layout #vertical_Sample .e-card.e-card-horizontal .e-card-stacked[data-v-6ec8689e]> :first-child {\\n        flex-grow: initial;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample[data-v-6ec8689e] {\\n        height: inherit;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card img[data-v-6ec8689e] {\\n        height: 188px;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card[data-v-6ec8689e] {\\n        height: 50%;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card[data-v-6ec8689e]:first-child {\\n        margin-bottom: 10px;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card>*[data-v-6ec8689e] {\\n        width: 50%;\\n        justify-content: flex-start;\\n}\\n.card-control-section.horizontal_card_layout #horizontal_product .e-card-header[data-v-6ec8689e] {\\n        width: 100%;\\n}\\n#source_link[data-v-6ec8689e] {\\n        float: right;\\n        margin-right: 10px;\\n}\\n@media screen and (max-width: 768px) {\\n#source_link[data-v-6ec8689e] {\\n            margin-top: -10px;\\n            margin-right: 0px;\\n}\\n}\\n.card-control-section.horizontal_card_layout .e-card-resize-container[data-v-6ec8689e] {\\n        margin-bottom: 50px;\\n}\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n        width: 100%;\\n        padding: 10px;\\n        margin: auto;\\n}\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n        margin: auto;\\n        max-width: 870px;\\n}\\nimg[data-v-6ec8689e] {\\n\\t    height: 100%;\\n}\\n@media (min-width: 912px) {\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n            width: 50%;\\n}\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n            max-width: 800px;\\n}\\n}\\n@media (max-width: 600px) {\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n            max-width: 400px !important;\\n}\\n}\\n@media (max-width: 912px) {\\n.card-control-section.horizontal_card_layout .row.card-layout[data-v-6ec8689e] {\\n            display: flex;\\n            flex-direction: column;\\n}\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n            max-width: 640px;\\n}\\n}\\n@media (min-width: 700px) and (max-width: 912px) {\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n            width: 70%;\\n}\\n}\\n@media (min-width: 600px) and (max-width: 700px) {\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n            width: 80%;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/uts-vue-samples_release_20.4.0.1/Samples/card/horizontal/App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,cAAc;CACrB;AACD;;QAEQ,cAAc;CACrB;AACD;QACQ,4BAA4B;CACnC;AACD;QACQ,iBAAiB;CACxB;AACD;;QAEQ,iBAAiB;CACxB;AACD;;;QAGQ,mBAAmB;CAC1B;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,WAAW;QACX,4BAA4B;CACnC;AACD;QACQ,YAAY;CACnB;AACD;QACQ,aAAa;QACb,mBAAmB;CAC1B;AACD;AACA;YACY,kBAAkB;YAClB,kBAAkB;CAC7B;CACA;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,YAAY;QACZ,cAAc;QACd,aAAa;CACpB;AACD;QACQ,aAAa;QACb,iBAAiB;CACxB;AACD;KACK,aAAa;CACjB;AACD;AACA;YACY,WAAW;CACtB;AACD;YACY,iBAAiB;CAC5B;CACA;AACD;AACA;YACY,4BAA4B;CACvC;CACA;AACD;AACA;YACY,cAAc;YACd,uBAAuB;CAClC;AACD;YACY,iBAAiB;CAC5B;CACA;AACD;AACA;YACY,WAAW;CACtB;CACA;AACD;AACA;YACY,WAAW;CACtB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=6ec8689e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-card-horizontal.e-product[data-v-6ec8689e] {\\n        height: 420px;\\n}\\n.e-bigger.fluent .e-card-horizontal.e-product[data-v-6ec8689e],\\n    .e-bigger.fluent-dark .e-card-horizontal.e-product[data-v-6ec8689e] {\\n        height: 480px;\\n}\\n.card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-stacked[data-v-6ec8689e] {\\n        justify-content: flex-start;\\n}\\n.card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button[data-v-6ec8689e]:last-child {\\n        margin-left: 8px;\\n}\\n.fabric .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button[data-v-6ec8689e]:last-child,\\n    .highcontrast .card-control-section.horizontal_card_layout #horizontal_phone_product .e-card-actions button[data-v-6ec8689e]:last-child {\\n        margin-left: 7px;\\n}\\n.card-control-section.horizontal_card_layout .e-card.e-card-horizontal.e-product .e-card-stacked[data-v-6ec8689e]> :first-child,\\n    .card-control-section.horizontal_card_layout #vertical_Sample .e-card.e-card-horizontal .e-card-stacked[data-v-6ec8689e]> :first-child,\\n    .card-control-section.horizontal_card_layout #vertical_Sample .e-card.e-card-horizontal .e-card-stacked[data-v-6ec8689e]> :first-child {\\n        flex-grow: initial;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample[data-v-6ec8689e] {\\n        height: inherit;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card img[data-v-6ec8689e] {\\n        height: 188px;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card[data-v-6ec8689e] {\\n        height: 50%;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card[data-v-6ec8689e]:first-child {\\n        margin-bottom: 10px;\\n}\\n.card-control-section.horizontal_card_layout #vertical_Sample .e-card>*[data-v-6ec8689e] {\\n        width: 50%;\\n        justify-content: flex-start;\\n}\\n.card-control-section.horizontal_card_layout #horizontal_product .e-card-header[data-v-6ec8689e] {\\n        width: 100%;\\n}\\n#source_link[data-v-6ec8689e] {\\n        float: right;\\n        margin-right: 10px;\\n}\\n@media screen and (max-width: 768px) {\\n#source_link[data-v-6ec8689e] {\\n            margin-top: -10px;\\n            margin-right: 0px;\\n}\\n}\\n.card-control-section.horizontal_card_layout .e-card-resize-container[data-v-6ec8689e] {\\n        margin-bottom: 50px;\\n}\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n        width: 100%;\\n        padding: 10px;\\n        margin: auto;\\n}\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n        margin: auto;\\n        max-width: 870px;\\n}\\nimg[data-v-6ec8689e] {\\n\\t    height: 100%;\\n}\\n@media (min-width: 912px) {\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n            width: 50%;\\n}\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n            max-width: 800px;\\n}\\n}\\n@media (max-width: 600px) {\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n            max-width: 400px !important;\\n}\\n}\\n@media (max-width: 912px) {\\n.card-control-section.horizontal_card_layout .row.card-layout[data-v-6ec8689e] {\\n            display: flex;\\n            flex-direction: column;\\n}\\n.card-control-section.horizontal_card_layout .card-layout[data-v-6ec8689e] {\\n            max-width: 640px;\\n}\\n}\\n@media (min-width: 700px) and (max-width: 912px) {\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n            width: 70%;\\n}\\n}\\n@media (min-width: 600px) and (max-width: 700px) {\\n.card-control-section.horizontal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-6ec8689e] {\\n            width: 80%;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/card/horizontal/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/horizontal/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/horizontal/App.vue?vue&type=template&id=6ec8689e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/horizontal/App.vue?vue&type=template&id=6ec8689e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass:\n          \"col-lg-12 control-section card-control-section horizontal_card_layout\",\n      },\n      [\n        _c(\"div\", { staticClass: \"e-card-resize-container\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\"div\", { staticClass: \"row card-layout\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"e-card e-card-horizontal e-product\",\n                      attrs: { tabindex: \"0\", id: \"horizontal_phone_product\" },\n                    },\n                    [\n                      _c(\"div\", { staticClass: \"e-card-stacked\" }, [\n                        _c(\"div\", { staticClass: \"e-card-header\" }, [\n                          _c(\"div\", { staticClass: \"e-card-header-caption\" }, [\n                            _c(\"div\", { staticClass: \"e-card-header-title\" }, [\n                              _vm._v(\" iPhone X\"),\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"div\", { staticClass: \"e-card-sub-title\" }, [\n                              _vm._v(\"Marketed by Apple Inc\"),\n                            ]),\n                          ]),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"e-card-content\" }, [\n                          _vm._v(\n                            \"\\n                                The iPhone X has a 5.8-inch diagonal OLED color-accurate screen, has two cameras on the rear. One is a 12-megapixel with\\n                                support for face detection. It is capable of capturing 4K video at 24, 30 or 60 frames per\\n                                second. It supports Qi-standard wireless charging.\\n                            \"\n                          ),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticClass: \"e-card-actions\",\n                            staticStyle: { \"justify-content\": \"center\" },\n                          },\n                          [\n                            _c(\n                              \"button\",\n                              { staticClass: \"e-btn e-outline e-primary\" },\n                              [\n                                _c(\"div\", { staticClass: \"e-size\" }, [\n                                  _vm._v(\"64GB \"),\n                                ]),\n                              ]\n                            ),\n                            _vm._v(\" \"),\n                            _c(\n                              \"button\",\n                              { staticClass: \"e-btn e-outline e-primary\" },\n                              [\n                                _c(\"div\", { staticClass: \"e-size\" }, [\n                                  _vm._v(\"256GB \"),\n                                ]),\n                              ]\n                            ),\n                          ]\n                        ),\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"img\", {\n                        staticStyle: { width: \"50%\" },\n                        attrs: {\n                          src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/iphone.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                          alt: \"iPhone X\",\n                          height: \"415px\",\n                        },\n                      }),\n                    ]\n                  ),\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" },\n                [\n                  _c(\"div\", { attrs: { id: \"vertical_Sample\" } }, [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"e-card e-card-horizontal\",\n                        attrs: { tabindex: \"0\", id: \"horizontal_product\" },\n                      },\n                      [\n                        _c(\"div\", { staticClass: \"e-card-stacked\" }, [\n                          _c(\"div\", { staticClass: \"e-card-header\" }, [\n                            _c(\n                              \"div\",\n                              { staticClass: \"e-card-header-caption\" },\n                              [\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"e-card-header-title\" },\n                                  [_vm._v(\"Philips Trimmer\")]\n                                ),\n                              ]\n                            ),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\n                            \"div\",\n                            {\n                              staticClass: \"e-card-content\",\n                              staticStyle: { height: \"146px\" },\n                            },\n                            [\n                              _vm._v(\n                                \"\\n                                    Philips trimmers are designed to last longer than 4 ordinary trimmers and DuraPower Technology which optimizes power.\\n                                \"\n                              ),\n                            ]\n                          ),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"img\", {\n                          attrs: {\n                            src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/Trimmer.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                            alt: \"Trimmer\",\n                          },\n                        }),\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"e-card e-card-horizontal\",\n                        attrs: { tabindex: \"0\", id: \"horizontal_product\" },\n                      },\n                      [\n                        _c(\"img\", {\n                          staticStyle: { height: \"214px\" },\n                          attrs: {\n                            src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/Camera.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                            alt: \"Camera\",\n                          },\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"e-card-stacked\" }, [\n                          _c(\"div\", { staticClass: \"e-card-header\" }, [\n                            _c(\n                              \"div\",\n                              { staticClass: \"e-card-header-caption\" },\n                              [\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"e-card-header-title\" },\n                                  [_vm._v(\"Canon 135mm\")]\n                                ),\n                              ]\n                            ),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\n                            \"div\",\n                            {\n                              staticClass: \"e-card-content\",\n                              staticStyle: { height: \"146px\" },\n                            },\n                            [\n                              _vm._v(\n                                \"\\n                                    The fastest 135mm telephoto lens in its class. Two UD-glass elements\\n                                    correct secondary spectrum for outstanding sharpness and color.\\n                                \"\n                              ),\n                            ]\n                          ),\n                        ]),\n                      ]\n                    ),\n                  ]),\n                ]\n              ),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"source_link\" } }, [\n          _vm._v(\"Source:  \\n        \"),\n          _c(\"table\", [\n            _c(\"tbody\", [\n              _c(\"tr\", [\n                _c(\"td\", [\n                  _c(\n                    \"a\",\n                    {\n                      attrs: {\n                        href: \"https://www.philips.co.in/c-m-pe/face-stylers-and-grooming-kits/trimmers\",\n                        target: \"_blank\",\n                      },\n                    },\n                    [\n                      _vm._v(\n                        \"https://www.philips.co.in/c-m-pe/face-stylers-and-grooming-kits/trimmers\"\n                      ),\n                    ]\n                  ),\n                ]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"tr\", [\n                _c(\"td\", [\n                  _c(\n                    \"a\",\n                    {\n                      attrs: {\n                        href: \"https://en.wikipedia.org/wiki/IPhone_X\",\n                        target: \"_blank\",\n                      },\n                    },\n                    [_vm._v(\"https://en.wikipedia.org/wiki/IPhone_X\")]\n                  ),\n                ]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"tr\", [\n                _c(\"td\", [\n                  _c(\n                    \"a\",\n                    {\n                      attrs: {\n                        href: \"https://en.wikipedia.org/wiki/Canon_EF_135mm_lens\",\n                        target: \"_blank\",\n                      },\n                    },\n                    [\n                      _vm._v(\n                        \"https://en.wikipedia.org/wiki/Canon_EF_135mm_lens\"\n                      ),\n                    ]\n                  ),\n                ]),\n              ]),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"action-description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"This sample demonstrates card rendering with horizontal layout. Based on the horizontal structure, product card is shown with detailed information.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"By default, card elements are stacked one after another vertically. You can customize the card with specific direction by adding \"\n            ),\n            _c(\"strong\", [_vm._v(\"e-card-horizontal\")]),\n            _vm._v(\" to align elements horizontally. Using \"),\n            _c(\"strong\", [_vm._v(\"e-card-stacked\")]),\n            _vm._v(\n              \" class, you can split the horizontal layout with a stacked element on left or right of the card.\"\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"More information about Card can be found in this\\n        \"\n            ),\n            _c(\n              \"a\",\n              {\n                attrs: {\n                  href: \"https://ej2.syncfusion.com/vue/documentation/card/getting-started/\",\n                  target: \"_blank\",\n                },\n              },\n              [_vm._v(\" documentation section\")]\n            ),\n            _vm._v(\".\"),\n          ]),\n        ]),\n      ]\n    )\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/card/horizontal/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });