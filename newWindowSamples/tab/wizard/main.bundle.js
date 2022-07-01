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
/******/ 		"tab/wizard/main": 0
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
/******/ 	deferredModules.push(["./Samples/tab/wizard/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/tab/wizard/App.vue":
/*!************************************!*\
  !*** ./Samples/tab/wizard/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_475d758b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=475d758b&scoped=true& */ \"./Samples/tab/wizard/App.vue?vue&type=template&id=475d758b&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/tab/wizard/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_475d758b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css& */ \"./Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_475d758b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_475d758b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"475d758b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/tab/wizard/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?");

/***/ }),

/***/ "./Samples/tab/wizard/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./Samples/tab/wizard/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/tab/wizard/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?");

/***/ }),

/***/ "./Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_475d758b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_475d758b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_475d758b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_475d758b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_475d758b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?");

/***/ }),

/***/ "./Samples/tab/wizard/App.vue?vue&type=template&id=475d758b&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./Samples/tab/wizard/App.vue?vue&type=template&id=475d758b&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_475d758b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=475d758b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/wizard/App.vue?vue&type=template&id=475d758b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_475d758b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_475d758b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?");

/***/ }),

/***/ "./Samples/tab/wizard/main.js":
/*!************************************!*\
  !*** ./Samples/tab/wizard/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/tab/wizard/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/tab/wizard/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-content .e-item[data-v-475d758b] {\\n        font-size: 12px;\\n        margin: 10px;\\n}\\n#amount[data-v-475d758b] {\\n        text-align: right;\\n        font-size: 15px;\\n        padding: 15px 0px;\\n}\\n#passenger-table th[data-v-475d758b] {\\n        text-align: center;\\n        font-size: 14px;\\n        font-weight: 400;\\n        border: 1px solid gainsboro;\\n}\\n#passenger-table td[data-v-475d758b],\\n    th[data-v-475d758b] {\\n        padding: 10px;\\n}\\n#passenger-table td[data-v-475d758b] {\\n        border: 1px solid gainsboro;\\n}\\n.name-header[data-v-475d758b] {\\n        width: 200px;\\n}\\n.age-header[data-v-475d758b] {\\n        width: 80px;\\n}\\n.gender-header[data-v-475d758b] {\\n        width: 120px;\\n}\\n.type-header[data-v-475d758b] {\\n        width: 150px;\\n}\\n.btn-container[data-v-475d758b] {\\n        text-align: center;\\n}\\n.search-item[data-v-475d758b] {\\n        padding-right: 50px;\\n        padding-bottom: 20px;\\n}\\n.item-title[data-v-475d758b] {\\n        font-weight: 500;\\n        padding-top: 10px;\\n}\\n\\n/* custom code start */\\n@media (max-width: 450px) {\\n.e-sample-resize-container[data-v-475d758b] {\\n            height: 450px;\\n}\\n    \\n/* custom code end */\\n.responsive-align[data-v-475d758b] {\\n            width: 75%;\\n            margin: 0 auto;\\n}\\n.search-item[data-v-475d758b] {\\n            padding: 0 0 20px 0;\\n            width: 100%;\\n}\\n}\\n#err1[data-v-475d758b],\\n    #err2[data-v-475d758b],\\n    #err3[data-v-475d758b] {\\n        font-weight: bold;\\n        color: red;\\n        display: block;\\n        margin-top: 15px;\\n}\\n.wizard-title[data-v-475d758b] {\\n        font-size: 15px;\\n}\\n#PassengersList[data-v-475d758b] {\\n        overflow: auto;\\n}\\n#passenger-table[data-v-475d758b] {\\n        min-width: 500px;\\n        width: 100%;\\n}\\n#bookTickets[data-v-475d758b], #confirmTickets[data-v-475d758b], #makePayment[data-v-475d758b] {\\n        margin-left: 4px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-GOXQA5NGRTSVE5AASF5K6J5IGS6NGJPBAFGTAXP5IVHINC5N44AA/Samples/tab/wizard/App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,gBAAgB;QAChB,aAAa;CACpB;AACD;QACQ,kBAAkB;QAClB,gBAAgB;QAChB,kBAAkB;CACzB;AACD;QACQ,mBAAmB;QACnB,gBAAgB;QAChB,iBAAiB;QACjB,4BAA4B;CACnC;AACD;;QAEQ,cAAc;CACrB;AACD;QACQ,4BAA4B;CACnC;AACD;QACQ,aAAa;CACpB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,oBAAoB;QACpB,qBAAqB;CAC5B;AACD;QACQ,iBAAiB;QACjB,kBAAkB;CACzB;;AAED,uBAAuB;AACvB;AACA;YACY,cAAc;CACzB;;AAED,qBAAqB;AACrB;YACY,WAAW;YACX,eAAe;CAC1B;AACD;YACY,oBAAoB;YACpB,YAAY;CACvB;CACA;AACD;;;QAGQ,kBAAkB;QAClB,WAAW;QACX,eAAe;QACf,iBAAiB;CACxB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,iBAAiB;QACjB,YAAY;CACnB;AACD;QACQ,iBAAiB;CACxB\",\"file\":\"App.vue?vue&type=style&index=0&id=475d758b&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-content .e-item[data-v-475d758b] {\\n        font-size: 12px;\\n        margin: 10px;\\n}\\n#amount[data-v-475d758b] {\\n        text-align: right;\\n        font-size: 15px;\\n        padding: 15px 0px;\\n}\\n#passenger-table th[data-v-475d758b] {\\n        text-align: center;\\n        font-size: 14px;\\n        font-weight: 400;\\n        border: 1px solid gainsboro;\\n}\\n#passenger-table td[data-v-475d758b],\\n    th[data-v-475d758b] {\\n        padding: 10px;\\n}\\n#passenger-table td[data-v-475d758b] {\\n        border: 1px solid gainsboro;\\n}\\n.name-header[data-v-475d758b] {\\n        width: 200px;\\n}\\n.age-header[data-v-475d758b] {\\n        width: 80px;\\n}\\n.gender-header[data-v-475d758b] {\\n        width: 120px;\\n}\\n.type-header[data-v-475d758b] {\\n        width: 150px;\\n}\\n.btn-container[data-v-475d758b] {\\n        text-align: center;\\n}\\n.search-item[data-v-475d758b] {\\n        padding-right: 50px;\\n        padding-bottom: 20px;\\n}\\n.item-title[data-v-475d758b] {\\n        font-weight: 500;\\n        padding-top: 10px;\\n}\\n\\n/* custom code start */\\n@media (max-width: 450px) {\\n.e-sample-resize-container[data-v-475d758b] {\\n            height: 450px;\\n}\\n    \\n/* custom code end */\\n.responsive-align[data-v-475d758b] {\\n            width: 75%;\\n            margin: 0 auto;\\n}\\n.search-item[data-v-475d758b] {\\n            padding: 0 0 20px 0;\\n            width: 100%;\\n}\\n}\\n#err1[data-v-475d758b],\\n    #err2[data-v-475d758b],\\n    #err3[data-v-475d758b] {\\n        font-weight: bold;\\n        color: red;\\n        display: block;\\n        margin-top: 15px;\\n}\\n.wizard-title[data-v-475d758b] {\\n        font-size: 15px;\\n}\\n#PassengersList[data-v-475d758b] {\\n        overflow: auto;\\n}\\n#passenger-table[data-v-475d758b] {\\n        min-width: 500px;\\n        width: 100%;\\n}\\n#bookTickets[data-v-475d758b], #confirmTickets[data-v-475d758b], #makePayment[data-v-475d758b] {\\n        margin-left: 4px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/tab/wizard/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/wizard/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-calendars */ \"./node_modules/@syncfusion/ej2-vue-calendars/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_7__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__[\"DatePickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_3__[\"GridPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__[\"TabPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_5__[\"DialogPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        cities: [\n            { name: 'Chicago', fare: 300 },\n            { name: 'San Francisco', fare: 125 },\n            { name: 'Los Angeles', fare: 175 },\n            { name: 'Seattle', fare: 250 },\n            { name: 'Florida', fare: 150 }\n        ],\n        date: new Date(),\n        autoCompleteFields: { text: 'name', value: 'name' },\n        dateMin: new Date(new Date().getTime()),\n        dateMax: new Date(new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)),\n        quotas: [\n            { id: '1', text: 'Business Class' },\n            { id: '2', text: 'Economy Class' },\n            { id: '4', text: 'Common Class' }\n        ],\n        fields: { id: 'id', text: 'text', value: 'text' },\n        gender: [\n            { id: '1', text: 'Male' },\n            { id: '2', text: 'Female' }\n        ],\n        berths: [\n            { id: '1', text: 'Upper' },\n            { id: '2', text: 'Lower' },\n            { id: '3', text: 'Middle' },\n            { id: '4', text: 'Window' },\n            { id: '5', text: 'Aisle' }\n        ],\n       headerText0: { 'text': 'New Booking' },\n       headerText1: { 'text': 'Train List' },\n       headerText2: { 'text': 'Add Passenger' },\n       headerText3: { 'text': 'Make Payment' },\n       dlgButtons: [{\n            buttonModel: { content: \"Ok\", isPrimary: true },\n            click: this.dlgClick\n        }]\n    }\n  },\n   methods: {\n       showDate: function(args){\n           var journeyDate = this.$refs.dateObj.ej2Instances;\n           journeyDate.show();\n       },\n       btnClicked: function(args){\n          var startPoint = this.$refs.startObj.ej2Instances;\n          var endPoint = this.$refs.endObj.ej2Instances;\n          var quota = this.$refs.quotaObj.ej2Instances;\n          var date = this.$refs.dateObj.ej2Instances;\n          var availableTrain = this.$refs.gridObj1.ej2Instances;\n          var tabObj = this.$refs.tabObj.ej2Instances;\n          var alertDlg = this.$refs.dialogObj.ej2Instances;\n          var err1 = this.$refs.errorObj1;\n          var err2 = this.$refs.errorObj2;\n          var err3 = this.$refs.errorObj3;\n            switch (args.target.id) {\n                 case 'searchNext':\n                      if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(startPoint.value) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(endPoint.value) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(quota.value) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(date)) {\n                      if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(startPoint.value) && startPoint.value === endPoint.value) {\n                          err1.innerText = '* Arrival point can\\'t be same as Departure';\n                       } else {\n                            tabObj.enableTab(1, true);\n                            tabObj.enableTab(0, false);\n                            this.filterTrains(args);\n                            err1.innerText = '';\n                            err2.innerText = '';\n                       }\n                     } else {\n                           err1.innerText = '* Please fill all the details before proceeding';\n                     }\n                     break;\n                  case 'bookTickets':\n                      if (availableTrain.getSelectedRecords() === undefined || availableTrain.getSelectedRecords().length === 0) {\n                            err2.innerText = '* Select your convenient train';\n                      } else {\n                            tabObj.enableTab(2, true);\n                            tabObj.enableTab(1, false);\n                            err2.innerText = '';\n                       }\n                       break;\n                  case 'confirmTickets':\n                       var name = this.$refs.nameObj1;\n                       var age = this.$refs.ageObj1;\n                       var gender = this.$refs.genderObj1;\n                       if (name.value === '' || age.value === '' || gender.value === '') {\n                            err3.innerText = '* Please enter passenger details';\n                       } else {\n                            tabObj.enableTab(3, true);\n                            tabObj.enableTab(2, false);\n                            err3.innerText = '';\n                            this.finalizeDetails(args);\n                      }\n                      break;\n                  case 'makePayment':\n                        alertDlg.show();\n                        break;\n                  case 'goToSearch':\n                        this.selectedTrain = [];\n                        tabObj.enableTab(0, true);\n                        tabObj.select(0);\n                        tabObj.enableTab(1, false);\n                        break;\n                  case 'goBackToBook':\n                        tabObj.enableTab(1, true);\n                        tabObj.select(1);\n                        tabObj.enableTab(2, false);\n                        break;\n                 case 'goBackDetails':\n                        tabObj.enableTab(2, true);\n                        tabObj.select(2);\n                        tabObj.enableTab(3, false);\n                        break;\n                 }\n            },\n           trainSelected: function(args){\n                 this.selectedTrain = args.data;\n            },\n           tabSelecting: function(args){\n                 if (args.isSwiped)\n                      args.cancel = true;\n           },\n           dlgClick: function(args){\n                var tabObj = this.$refs.tabObj.ej2Instances;\n                var alertDlg = this.$refs.dialogObj.ej2Instances;\n                alertDlg.hide();\n                for (var i = 1; i <= 3; i++) {\n                    var name = document.getElementById('pass_name' + i);\n                    var berthSelected = document.getElementById('pass_berth' + i);\n                    var age = document.getElementById('pass_age' + i);\n                    var gender = document.getElementById('pass_gender' + i);\n                    name.value = '';\n                    age.value = 18;\n                    gender.value = 'Male';\n                    berthSelected.value = '';\n                }\n                tabObj.enableTab(0, true);\n                tabObj.enableTab(1, false);\n                tabObj.enableTab(2, false);\n                tabObj.enableTab(3, false);\n                tabObj.select(0);\n            },\n            filterTrains: function(args){\n                let result= [];\n                var fromCity = this.$refs.startObj.ej2Instances.value;\n                var toCity = this.$refs.endObj.ej2Instances.value;\n                var availableTrain = this.$refs.gridObj1.ej2Instances;\n                let count= Math.floor((Math.random() * 3) + 2);\n                for (var i = 0; i < count; i++) {\n                    let details= [];\n                    details.TrainNo = Math.floor((Math.random() * 20) + 19000);\n                    details.Name = 'Train ' + i;\n                    details.Departure = fromCity;\n                    details.Arrival = toCity;\n                    details.Availability = Math.floor((Math.random() * 20) + 20);\n                    result.push(details);\n                }\n            availableTrain.dataSource = result;\n          },\n          finalizeDetails: function(args){\n               var reserved= [];\n               var passCount = 0;\n               var startPoint = this.$refs.startObj.ej2Instances;\n               var endPoint = this.$refs.endObj.ej2Instances;\n               var quota = this.$refs.quotaObj.ej2Instances;\n               var ticketDetailGrid = this.$refs.gridObj2.ej2Instances;\n               for (let i = 1; i <= 3; i++) {\n                    let name = document.getElementById('pass_name' + i);\n                    let berthSelected= document.getElementById('pass_berth' + i);\n                    let gender = document.getElementById('pass_gender' + i);\n                    if (name.value !== '') {\n                        let details = [];\n                        let berth = berthSelected.value;\n                        details.TrainNo = this.selectedTrain.TrainNo.toString();\n                        details.PassName = name.value;\n                        details.Gender = gender.value;\n                        details.Berth = (berth === '') ? 'Any' : berth;\n                        reserved.push(details);\n                        passCount++;\n                   }\n                   let calcFare= 0;\n               for (let i= 0; i < this.cities; i++) {\n                   if (startPoint.value === this.cities[i].name) {\n                       calcFare = calcFare + this.cities[i].fare;\n                    }\n                    if (endPoint.value === this.cities[i].name) {\n                        calcFare = calcFare + this.cities[i].fare;\n                    }\n                }\n                var displayAmt = this.$refs.amountObj;\n                if (quota.value === 'Economy Class') {\n                     displayAmt.innerText = 'Total payable amount: $' + passCount * (300 + calcFare);\n                } else if (quota.value === 'Business Class') {\n                     displayAmt.innerText = 'Total payable amount: $' + passCount * (500 + calcFare);\n                } else if (quota.value === 'Common Class') {\n                    displayAmt.innerText = 'Total payable amount: $' + passCount * (150 + calcFare);\n              }\n          }\n          ticketDetailGrid.dataSource = reserved;\n       }\n   }\n}));\n\n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/wizard/App.vue?vue&type=template&id=475d758b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/wizard/App.vue?vue&type=template&id=475d758b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section e-tab-section\"},[_c('div',{staticClass:\"content-wrapper\"},[_c('div',{staticClass:\"e-sample-resize-container\",attrs:{\"id\":\"dialog_target\"}},[_c('div',{staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"booking\"}},[_c('div',{staticClass:\"wizard-title\"},[_vm._v(\"Plan your journey\")]),_vm._v(\" \"),_c('div',{staticClass:\"responsive-align\"},[_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item\"},[_c('ejs-dropdownlist',{ref:\"startObj\",attrs:{\"id\":\"startPoint\",\"width\":\"100%\",\"dataSource\":_vm.cities,\"fields\":_vm.autoCompleteFields,\"floatLabelType\":\"Auto\",\"placeholder\":\"From\"}})],1),_vm._v(\" \"),_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item\"},[_c('ejs-dropdownlist',{ref:\"endObj\",attrs:{\"id\":\"endPoint\",\"width\":\"100%\",\"dataSource\":_vm.cities,\"fields\":_vm.autoCompleteFields,\"floatLabelType\":\"Auto\",\"placeholder\":\"To\"}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item\"},[_c('ejs-datepicker',{ref:\"dateObj\",attrs:{\"id\":\"date\",\"width\":\"100%\",\"placeholder\":\"Journey Date\",\"floatLabelType\":\"Auto\",\"min\":_vm.dateMin,\"max\":_vm.dateMax,\"value\":_vm.date}})],1),_vm._v(\" \"),_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6 search-item\"},[_c('ejs-dropdownlist',{ref:\"quotaObj\",attrs:{\"id\":\"quota\",\"dataSource\":_vm.quotas,\"placeholder\":\"Ticket type\",\"floatLabelType\":\"Auto\",\"fields\":_vm.fields}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"btn-container\"},[_c('button',{ref:\"searchObj\",staticClass:\"e-btn\",attrs:{\"id\":\"searchNext\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Search Train\")])]),_vm._v(\" \"),_c('span',{ref:\"errorObj1\",attrs:{\"id\":\"err1\"}})])]),_vm._v(\" \"),_c('div',{staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"selectTrain\"}},[_c('div',{staticClass:\"wizard-title\"},[_vm._v(\"Select the train from the list \")]),_vm._v(\" \"),_c('ejs-grid',{ref:\"gridObj1\",attrs:{\"id\":\"availableTrain\",\"width\":\"100%\",\"rowSelected\":_vm.trainSelected}},[_c('e-columns',[_c('e-column',{attrs:{\"field\":\"TrainNo\",\"headerText\":\"Train No\",\"width\":\"120\",\"type\":\"number\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"Name\",\"headerText\":\"Name\",\"width\":\"140\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"Departure\",\"headerText\":\"Departure\",\"width\":\"120\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"Arrival\",\"headerText\":\"Arrival\",\"width\":\"140\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"Availability\",\"headerText\":\"Availability\",\"width\":\"140\",\"type\":\"number\"}})],1)],1),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('div',{staticClass:\"btn-container\"},[_c('button',{staticClass:\"e-btn\",attrs:{\"id\":\"goToSearch\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Back\")]),_vm._v(\" \"),_c('button',{staticClass:\"e-btn\",attrs:{\"id\":\"bookTickets\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Continue\")])]),_vm._v(\" \"),_c('span',{ref:\"errorObj2\",attrs:{\"id\":\"err2\"}})],1),_vm._v(\" \"),_c('div',{staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"details\"}},[_c('div',{staticClass:\"details-page wizard-title\"},[_vm._v(\"Enter the passenger details\")]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"PassengersList\"}},[_c('table',{attrs:{\"id\":\"passenger-table\"}},[_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('tbody',[_c('tr',[_c('td',[_c('input',{ref:\"nameObj1\",staticClass:\"e-input\",attrs:{\"id\":\"pass_name1\",\"type\":\"text\",\"placeholder\":\"Passenger Name\"}})]),_vm._v(\" \"),_c('td',[_c('ejs-numerictextbox',{ref:\"ageObj1\",attrs:{\"id\":\"pass_age1\",\"showSpinButton\":false,\"min\":\"1\",\"max\":\"100\",\"value\":\"18\",\"format\":\"n0\"}})],1),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"genderObj1\",attrs:{\"id\":\"pass_gender1\",\"dataSource\":_vm.gender,\"text\":\"Male\",\"fields\":_vm.fields}})],1),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"berthObj1\",attrs:{\"id\":\"pass_berth1\",\"dataSource\":_vm.berths,\"placeholder\":\"Optional\",\"fields\":_vm.fields}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',[_c('input',{ref:\"nameObj2\",staticClass:\"e-input\",attrs:{\"id\":\"pass_name2\",\"type\":\"text\",\"placeholder\":\"Passenger Name\"}})]),_vm._v(\" \"),_c('td',[_c('ejs-numerictextbox',{ref:\"ageObj2\",attrs:{\"id\":\"pass_age2\",\"showSpinButton\":false,\"min\":\"1\",\"max\":\"100\",\"value\":\"18\",\"format\":\"n0\"}})],1),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"genderObj2\",attrs:{\"id\":\"pass_gender2\",\"dataSource\":_vm.gender,\"text\":\"Male\",\"fields\":_vm.fields}})],1),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"berthObj2\",attrs:{\"id\":\"pass_berth2\",\"dataSource\":_vm.berths,\"placeholder\":\"Optional\",\"fields\":_vm.fields}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',[_c('input',{ref:\"nameObj3\",staticClass:\"e-input\",attrs:{\"id\":\"pass_name3\",\"type\":\"text\",\"placeholder\":\"Passenger Name\"}})]),_vm._v(\" \"),_c('td',[_c('ejs-numerictextbox',{ref:\"ageObj3\",attrs:{\"id\":\"pass_age3\",\"showSpinButton\":false,\"min\":\"1\",\"max\":\"100\",\"value\":\"18\",\"format\":\"n0\"}})],1),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"genderObj3\",attrs:{\"id\":\"pass_gender3\",\"dataSource\":_vm.gender,\"text\":\"Male\",\"fields\":_vm.fields}})],1),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"berthObj3\",attrs:{\"id\":\"pass_berth3\",\"dataSource\":_vm.berths,\"placeholder\":\"Optional\",\"fields\":_vm.fields}})],1)])])])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('div',{staticClass:\"btn-container\"},[_c('button',{staticClass:\"e-btn\",attrs:{\"id\":\"goBackToBook\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Back\")]),_vm._v(\" \"),_c('button',{staticClass:\"e-btn\",attrs:{\"id\":\"confirmTickets\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Continue\")])]),_vm._v(\" \"),_c('span',{ref:\"errorObj3\",attrs:{\"id\":\"err3\"}})]),_vm._v(\" \"),_c('div',{staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"confirm\"}},[_c('div',{staticClass:\"tab-title1 wizard-title\"},[_vm._v(\"Confirm the details and proceed\")]),_vm._v(\" \"),_c('ejs-grid',{ref:\"gridObj2\",attrs:{\"id\":\"ticketDetailGrid\",\"width\":\"100%\"}},[_c('e-columns',[_c('e-column',{attrs:{\"field\":\"TrainNo\",\"headerText\":\"Train No\",\"width\":\"120\",\"type\":\"number\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"PassName\",\"headerText\":\"Name\",\"width\":\"140\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"Gender\",\"headerText\":\"Gender\",\"width\":\"120\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"field\":\"Berth\",\"headerText\":\"Berth\",\"width\":\"140\"}})],1)],1),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('div',{ref:\"amountObj\",attrs:{\"id\":\"amount\"}}),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('div',{staticClass:\"btn-container\"},[_c('button',{staticClass:\"e-btn\",attrs:{\"id\":\"goBackDetails\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Back\")]),_vm._v(\" \"),_c('button',{staticClass:\"e-btn\",attrs:{\"id\":\"makePayment\"},on:{\"click\":_vm.btnClicked}},[_vm._v(\"Pay\")])])],1),_vm._v(\" \"),_c('ejs-tab',{ref:\"tabObj\",attrs:{\"id\":\"tab_wizard\",\"heightAdjustMode\":\"None\",\"height\":\"auto\",\"showCloseButton\":false,\"selecting\":_vm.tabSelecting}},[_c('e-tabitems',[_c('e-tabitem',{attrs:{\"header\":_vm.headerText0,\"content\":\"#booking\"}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText1,\"content\":\"#selectTrain\",\"disabled\":\"true\"}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText2,\"content\":\"#details\",\"disabled\":\"true\"}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText3,\"content\":\"#confirm\",\"disabled\":\"true\"}})],1)],1),_vm._v(\" \"),_c('ejs-dialog',{ref:\"dialogObj\",attrs:{\"id\":\"alertDialog\",\"header\":\"Success\",\"width\":\"250\",\"isModal\":\"true\",\"buttons\":_vm.dlgButtons,\"showCloseIcon\":\"true\",\"content\":\"Your payment was successfully processed\",\"target\":\"#dialog_target\",\"visible\":false}})],1),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_vm._m(3)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('colgroup',[_c('col'),_vm._v(\" \"),_c('col'),_vm._v(\" \"),_c('col'),_vm._v(\" \"),_c('col'),_vm._v(\" \"),_c('col'),_vm._v(\" \"),_c('col')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{staticClass:\"name-header\"},[_vm._v(\"Name\")]),_vm._v(\" \"),_c('th',{staticClass:\"age-header\"},[_vm._v(\"Age\")]),_vm._v(\" \"),_c('th',{staticClass:\"gender-header\"},[_vm._v(\"Gender\")]),_vm._v(\" \"),_c('th',{staticClass:\"type-header\"},[_vm._v(\"Berth Preference\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates simple train reservation wizard that enable/disable Tab items based on sequential validation of each Tab content.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"Tab items can be disabled dynamically by passing the index and boolean value to the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/tab/#enabletab\"}},[_vm._v(\"enableTab\")]),_vm._v(\" method.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"You can design wizard like sample with Tab using the in-built API and customizing the content with proper validations.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"More information about Tab can be found in this \"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/tab/getting-started/\",\"target\":\"_blank\"}},[_vm._v(\"documentation\")]),_vm._v(\" section.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/tab/wizard/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });