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
/******/ 		"accordion/ajax/main": 0
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
/******/ 	deferredModules.push(["./Samples/accordion/ajax/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/accordion/ajax/App.vue":
/*!****************************************!*\
  !*** ./Samples/accordion/ajax/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_264fea26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=264fea26&scoped=true& */ \"./Samples/accordion/ajax/App.vue?vue&type=template&id=264fea26&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/accordion/ajax/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_264fea26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css& */ \"./Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_264fea26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_264fea26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"264fea26\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/accordion/ajax/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?");

/***/ }),

/***/ "./Samples/accordion/ajax/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/accordion/ajax/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/accordion/ajax/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?");

/***/ }),

/***/ "./Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_264fea26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_264fea26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_264fea26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_264fea26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_264fea26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?");

/***/ }),

/***/ "./Samples/accordion/ajax/App.vue?vue&type=template&id=264fea26&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./Samples/accordion/ajax/App.vue?vue&type=template&id=264fea26&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_264fea26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=264fea26&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/accordion/ajax/App.vue?vue&type=template&id=264fea26&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_264fea26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_264fea26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?");

/***/ }),

/***/ "./Samples/accordion/ajax/main.js":
/*!****************************************!*\
  !*** ./Samples/accordion/ajax/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/accordion/ajax/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n@-moz-document url-prefix() {\\n.e-accordion .e-content table {\\n        border-collapse: initial;\\n}\\n}\\n.e-accordion table[data-v-264fea26] {\\n        border-collapse: collapse;\\n        border-spacing: 0;\\n        width: 100%;\\n}\\n.e-accordion table th[data-v-264fea26],\\n    .e-accordion table td[data-v-264fea26] {\\n        font-weight: normal;\\n        padding: 5px;\\n        text-align: left;\\n        border: 1px solid #ddd\\n}\\n.product_title[data-v-264fea26] {\\n        text-align: center;\\n        margin: 20px 0;\\n        padding: 10px 0;\\n        text-overflow: ellipsis;\\n        font-weight: bold;\\n        font-size: 16px;\\n}\\n.accordion-control-section[data-v-264fea26] {\\n        margin: 0 10% 0 10%;\\n        padding-bottom: 25px;\\n}\\n\\n/* custom code start */\\n#source_link[data-v-264fea26] {\\n        float: right;\\n        margin-right: 10px;\\n}\\n@media screen and (max-width: 768px) {\\n.accordion-control-section[data-v-264fea26] {\\n            margin: 0;\\n            margin-bottom: 20px;\\n}\\n#source_link[data-v-264fea26] {\\n          margin-top: -25px;\\n          margin-right: 0px;\\n}\\n}\\n/* custom code end */\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-C5EKKS4BQ56PWZD2Q2CJSEXDA66BNC7NERJHQ5NAJZLLHBTXWIEA/Samples/accordion/ajax/App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;AACA;QACQ,yBAAyB;CAChC;CACA;AACD;QACQ,0BAA0B;QAC1B,kBAAkB;QAClB,YAAY;CACnB;AACD;;QAEQ,oBAAoB;QACpB,aAAa;QACb,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,mBAAmB;QACnB,eAAe;QACf,gBAAgB;QAChB,wBAAwB;QACxB,kBAAkB;QAClB,gBAAgB;CACvB;AACD;QACQ,oBAAoB;QACpB,qBAAqB;CAC5B;;AAED,uBAAuB;AACvB;QACQ,aAAa;QACb,mBAAmB;CAC1B;AACD;AACA;YACY,UAAU;YACV,oBAAoB;CAC/B;AACD;UACU,kBAAkB;UAClB,kBAAkB;CAC3B;CACA;AACD,qBAAqB\",\"file\":\"App.vue?vue&type=style&index=0&id=264fea26&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n@-moz-document url-prefix() {\\n.e-accordion .e-content table {\\n        border-collapse: initial;\\n}\\n}\\n.e-accordion table[data-v-264fea26] {\\n        border-collapse: collapse;\\n        border-spacing: 0;\\n        width: 100%;\\n}\\n.e-accordion table th[data-v-264fea26],\\n    .e-accordion table td[data-v-264fea26] {\\n        font-weight: normal;\\n        padding: 5px;\\n        text-align: left;\\n        border: 1px solid #ddd\\n}\\n.product_title[data-v-264fea26] {\\n        text-align: center;\\n        margin: 20px 0;\\n        padding: 10px 0;\\n        text-overflow: ellipsis;\\n        font-weight: bold;\\n        font-size: 16px;\\n}\\n.accordion-control-section[data-v-264fea26] {\\n        margin: 0 10% 0 10%;\\n        padding-bottom: 25px;\\n}\\n\\n/* custom code start */\\n#source_link[data-v-264fea26] {\\n        float: right;\\n        margin-right: 10px;\\n}\\n@media screen and (max-width: 768px) {\\n.accordion-control-section[data-v-264fea26] {\\n            margin: 0;\\n            margin-bottom: 20px;\\n}\\n#source_link[data-v-264fea26] {\\n          margin-top: -25px;\\n          margin-right: 0px;\\n}\\n}\\n/* custom code end */\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/accordion/ajax/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/accordion/ajax/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-navigations */ \"./node_modules/@syncfusion/ej2-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"AccordionPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   methods: {\n       expanding: function(e) {\n        if (e.isExpanded && [].indexOf.call(this.$refs.Accordion_Nested.ej2Instances.items, e.item) === 1) {\n          if (e.element.querySelectorAll('.e-accordion').length > 0) {\n            return;\n        }\n        //Initialize Nested Accordion component\n        this.nestAcrdn = new _syncfusion_ej2_navigations__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"]({\n            expandMode: 'Single',\n            items: [\n                { header: 'Sensor', content: '#Sensor_features' },\n                { header: 'Camera', content: '#Camera_features' },\n                { header: 'Video Recording', content: '#Video_Rec_features' },\n            ]\n        });\n        //Render initialized Nested Accordion component\n        this.nestAcrdn.appendTo('#nested_Acc');\n    }\n     },\n     created: function(args){\n           let ajax = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"Ajax\"]('././../../source/accordion/ajax-content.html', 'GET', true);\n                ajax.onSuccess = (data) => {\n                    this.$refs.Accordion_Nested.ej2Instances.items[0].content = data;\n                     this.$refs.Accordion_Nested.ej2Instances.refresh();\n                };\n                ajax.send();\n     }\n   }\n}));\n\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/accordion/ajax/App.vue?vue&type=template&id=264fea26&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/accordion/ajax/App.vue?vue&type=template&id=264fea26&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"control_wrapper accordion-control-section\" },\n      [\n        _c(\"div\", { staticClass: \"product_title\" }, [\n          _vm._v(\" iPhone X Product Specification \")\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-accordion\",\n          {\n            ref: \"Accordion_Nested\",\n            attrs: {\n              expanding: _vm.expanding,\n              created: _vm.created,\n              expandMode: \"Single\"\n            }\n          },\n          [\n            _c(\n              \"e-accordionitems\",\n              [\n                _c(\"e-accordionitem\", {\n                  attrs: {\n                    header: \"Network & Connectivity\",\n                    content: \"\",\n                    expanded: \"true\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-accordionitem\", {\n                  attrs: {\n                    header: \"Feature\",\n                    content: '<div id=\"nested_Acc\"></div>'\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-accordionitem\", {\n                  attrs: {\n                    header: \"Hardware & Software\",\n                    content: \"#Hard_Soft_features\"\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5),\n    _vm._v(\" \"),\n    _vm._m(6)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { display: \"none\" }, attrs: { id: \"Sensor_features\" } },\n      [\n        _c(\"table\", [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\"Proximity sensor\")]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(\"Yes\")])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\"Face ID\")]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(\"Yes\")])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\"Accelerometer\")]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(\"Yes\")])\n            ])\n          ])\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { display: \"none\" }, attrs: { id: \"Hard_Soft_features\" } },\n      [\n        _c(\"table\", [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"th\", { attrs: { rowspan: \"3\" } }, [_vm._v(\" Hardware\")]),\n              _vm._v(\" \"),\n              _c(\"td\", { staticClass: \"e-bold\", attrs: { rowspan: \"2 \" } }, [\n                _vm._v(\"Chip\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _vm._v(\"Apple A11 Bionic chip with 64-bit architecture\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [_c(\"td\", [_vm._v(\"Embedded M11 motion coprocessor\")])]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\"Capacity\")]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(\"64GB/256GB\")])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"th\", [_vm._v(\" Software\")]),\n              _vm._v(\" \"),\n              _c(\"td\", { staticClass: \"e-bold\", attrs: { rowspan: \"2 \" } }, [\n                _vm._v(\"Operating System\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", [_vm._v(\"iOS 11\")])\n            ])\n          ])\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { display: \"none\" }, attrs: { id: \"Video_Rec_features\" } },\n      [\n        _c(\"table\", [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"th\", { staticClass: \"e-bold\", attrs: { rowspan: \"9\" } }, [\n                _vm._v(\"Video Recording\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"4K video recording\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"1080p & 720p HD video recording\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"Optical zoom, 6x digital zoom\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"Slow motion video support\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"Take 8MP still photos while recording 4K video\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\"Noise reduction\")])\n            ])\n          ])\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { display: \"none\" }, attrs: { id: \"Camera_features\" } },\n      [\n        _c(\"table\", [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"th\", { staticClass: \"e-bold\", attrs: { rowspan: \"3\" } }, [\n                _vm._v(\"Camera\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\" 12MP wide-angle\")])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"Live Photos with stabilization\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [\n                _vm._v(\"Body and face detection\")\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"th\", { staticClass: \"e-bold\", attrs: { rowspan: \"4\" } }, [\n                _vm._v(\"TrueDepth Camera\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\" 7MP camera\")])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\" Animoji\")])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { staticClass: \"e-bold\" }, [_vm._v(\" Face detection\")])\n            ])\n          ])\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"source_link\" } }, [\n      _vm._v(\"Source:  \\n        \"),\n      _c(\n        \"a\",\n        {\n          attrs: {\n            href: \"https://www.apple.com/iphone-x/specs/\",\n            target: \"_blank\"\n          }\n        },\n        [_vm._v(\"www.apple.com/iphone-x/specs/\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"This sample demonstrates rendering \"),\n        _c(\"code\", [_vm._v(\"Accordion\")]),\n        _vm._v(\" content from external source using \"),\n        _c(\"code\", [_vm._v(\"Ajax\")]),\n        _vm._v(\n          \" library. The content of panel “Network & Connectivity” is loaded from external element.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates the external webpage content loaded inside the Accordion panel by using AJAX library.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"More information about Accordion can be found in this \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/accordion/getting-started/\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"documentation\")]\n        ),\n        _vm._v(\" section.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/accordion/ajax/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });