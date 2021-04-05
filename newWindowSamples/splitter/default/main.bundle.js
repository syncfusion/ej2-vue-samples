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
/******/ 		"splitter/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/splitter/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/splitter/default/App.vue":
/*!******************************************!*\
  !*** ./Samples/splitter/default/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_69000b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=69000b42& */ \"./Samples/splitter/default/App.vue?vue&type=template&id=69000b42&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/splitter/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_69000b42___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_69000b42___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/splitter/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?");

/***/ }),

/***/ "./Samples/splitter/default/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/splitter/default/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/splitter/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?");

/***/ }),

/***/ "./Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?");

/***/ }),

/***/ "./Samples/splitter/default/App.vue?vue&type=template&id=69000b42&":
/*!*************************************************************************!*\
  !*** ./Samples/splitter/default/App.vue?vue&type=template&id=69000b42& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_69000b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=69000b42& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/default/App.vue?vue&type=template&id=69000b42&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_69000b42___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_69000b42___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?");

/***/ }),

/***/ "./Samples/splitter/default/main.js":
/*!******************************************!*\
  !*** ./Samples/splitter/default/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/splitter/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/splitter/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.default-splitter #panetext {\\n     font-size: 11px;\\n}\\n.default-splitter #pane-heading {\\n     font-size: 14px;\\n     margin-bottom: 4px;\\n}\\n /* custom code start */\\n.default-splitter .pane1 {\\n     margin: 20px auto;\\n     max-width: 440px;\\n}\\n.default-splitter .pane2 {\\n     margin: 20px auto;\\n     max-width: 440px;\\n}\\n/* custom code end */\\n.default-splitter.control-section {          \\n     min-height: 370px;\\n     margin-bottom: 15px;\\n     margin-top: 10px;\\n}\\n.default-splitter .splitterContent div.e-pane-horizontal, .default-splitter .splitterContent div.e-pane-vertical {\\n     text-align: center;\\n     align-items: center;\\n     justify-content: center;\\n     display: grid;\\n     height: 100%;\\n}\\n.default-splitter .splitterContent.e-rtl div.e-pane-horizontal, .default-splitter .splitterContent.e-rtl div.e-pane-vertical {\\n   justify-content: initial;\\n text-align: initial;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-V55EMCJG2NEC3AALTPADHFXFXUTFAIGQCOWFKU6ZMQVA2HIIMDFA/Samples/splitter/default/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,gBAAgB;CACpB;AACD;KACK,gBAAgB;KAChB,mBAAmB;CACvB;CACA,uBAAuB;AACxB;KACK,kBAAkB;KAClB,iBAAiB;CACrB;AACD;KACK,kBAAkB;KAClB,iBAAiB;CACrB;AACD,qBAAqB;AACrB;KACK,kBAAkB;KAClB,oBAAoB;KACpB,iBAAiB;CACrB;AACD;KACK,mBAAmB;KACnB,oBAAoB;KACpB,wBAAwB;KACxB,cAAc;KACd,aAAa;CACjB;AACD;GACG,yBAAyB;CAC3B,oBAAoB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.default-splitter #panetext {\\n     font-size: 11px;\\n}\\n.default-splitter #pane-heading {\\n     font-size: 14px;\\n     margin-bottom: 4px;\\n}\\n /* custom code start */\\n.default-splitter .pane1 {\\n     margin: 20px auto;\\n     max-width: 440px;\\n}\\n.default-splitter .pane2 {\\n     margin: 20px auto;\\n     max-width: 440px;\\n}\\n/* custom code end */\\n.default-splitter.control-section {          \\n     min-height: 370px;\\n     margin-bottom: 15px;\\n     margin-top: 10px;\\n}\\n.default-splitter .splitterContent div.e-pane-horizontal, .default-splitter .splitterContent div.e-pane-vertical {\\n     text-align: center;\\n     align-items: center;\\n     justify-content: center;\\n     display: grid;\\n     height: 100%;\\n}\\n.default-splitter .splitterContent.e-rtl div.e-pane-horizontal, .default-splitter .splitterContent.e-rtl div.e-pane-vertical {\\n   justify-content: initial;\\n text-align: initial;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/splitter/default/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/default/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"SplitterPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/default/App.vue?vue&type=template&id=69000b42&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/default/App.vue?vue&type=template&id=69000b42& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-12 control-section default-splitter\",\n        attrs: { id: \"target\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"control_wrapper\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"pane1\" },\n            [\n              _c(\"div\", { attrs: { id: \"pane-heading\" } }, [\n                _vm._v(\"Horizontal Splitter\")\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"ejs-splitter\",\n                {\n                  ref: \"splitterObj\",\n                  staticClass: \"splitterContent\",\n                  attrs: {\n                    id: \"splitter1\",\n                    separatorSize: 4,\n                    width: \"100%\",\n                    height: \"110px\"\n                  }\n                },\n                [\n                  _c(\n                    \"e-panes\",\n                    [\n                      _c(\"e-pane\", {\n                        attrs: {\n                          size: \"25%\",\n                          min: \"60px\",\n                          content:\n                            '<div>Left pane<div id=\"panetext\">size: 25%</div><div id=\"panetext\">min: 60px</div></div>'\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-pane\", {\n                        attrs: {\n                          size: \"50%\",\n                          min: \"60px\",\n                          content:\n                            '<span>Middle pane<div id=\"panetext\">size: 50%</div><div id=\"panetext\">min: 60px</div></span>'\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-pane\", {\n                        attrs: {\n                          size: \"25%\",\n                          min: \"60px\",\n                          content:\n                            '<span>Right pane<div id=\"panetext\">size: 25%</div><div id=\"panetext\">min: 60px</div></span>'\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"pane2\" },\n            [\n              _c(\"div\", { attrs: { id: \"pane-heading\" } }, [\n                _vm._v(\"Vertical Splitter\")\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"ejs-splitter\",\n                {\n                  ref: \"splitterObj\",\n                  staticClass: \"splitterContent\",\n                  attrs: {\n                    id: \"splitter2\",\n                    separatorSize: 4,\n                    orientation: \"Vertical\",\n                    width: \"100%\",\n                    height: \"240px\"\n                  }\n                },\n                [\n                  _c(\n                    \"e-panes\",\n                    [\n                      _c(\"e-pane\", {\n                        attrs: {\n                          size: \"30%\",\n                          min: \"60px\",\n                          content:\n                            '<span>Top pane<div id=\"panetext\">size: 30%</div><div id=\"panetext\">min: 60px</div></span>'\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-pane\", {\n                        attrs: {\n                          size: \"40%\",\n                          min: \"60px\",\n                          content:\n                            '<span>Middle pane<div id=\"panetext\">size: 40%</div><div id=\"panetext\">min: 60px</div></span>'\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-pane\", {\n                        attrs: {\n                          size: \"30%\",\n                          min: \"60px\",\n                          content:\n                            '<span>Bottom pane<div id=\"panetext\">size: 30%</div><div id=\"panetext\">min: 60px</div></span>'\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This example demonstrates the default functionalities of the \"\n        ),\n        _c(\"code\", [_vm._v(\"Splitter\")]),\n        _vm._v(\n          \" control. \\n            To resize panes and increase the dimension of a pane, drag a separator (divider) bar.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            The split panes of the Splitter control can be oriented horizontally or vertically using the Orientation property.\\n            \"\n        ),\n        _c(\"ul\", [\n          _c(\"li\", [\n            _vm._v(\n              \"Set orientation property to Horizontal to create horizontal splitter, which align panels left-to-right.\"\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\n              \"Set orientation property to Vertical to create vertical splitter, which align panels top-to-bottom.\"\n            )\n          ])\n        ]),\n        _vm._v(\n          \"\\n            The splitter allows resizing its panes when the drag separator (divider) bar is used to increase its dimension.\\n        \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });