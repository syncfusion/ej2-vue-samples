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
/******/ 		"barcode/qrcode/main": 0
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
/******/ 	deferredModules.push(["./Samples/barcode/qrcode/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/barcode/qrcode/App.vue":
/*!****************************************!*\
  !*** ./Samples/barcode/qrcode/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_394bd33a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=394bd33a& */ \"./Samples/barcode/qrcode/App.vue?vue&type=template&id=394bd33a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/barcode/qrcode/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_394bd33a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_394bd33a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/barcode/qrcode/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?");

/***/ }),

/***/ "./Samples/barcode/qrcode/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/barcode/qrcode/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/barcode/qrcode/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?");

/***/ }),

/***/ "./Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?");

/***/ }),

/***/ "./Samples/barcode/qrcode/App.vue?vue&type=template&id=394bd33a&":
/*!***********************************************************************!*\
  !*** ./Samples/barcode/qrcode/App.vue?vue&type=template&id=394bd33a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_394bd33a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=394bd33a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/barcode/qrcode/App.vue?vue&type=template&id=394bd33a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_394bd33a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_394bd33a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?");

/***/ }),

/***/ "./Samples/barcode/qrcode/main.js":
/*!****************************************!*\
  !*** ./Samples/barcode/qrcode/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/barcode/qrcode/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.row {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.top {\\n  margin-top: 10px;\\n}\\n.column-style {\\n  display: table;\\n  height: 35px;\\n  padding-right: 4px;\\n  padding-left: 0px;\\n  width: calc((100% - 12px) / 3);\\n}\\n.row {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header {\\n  font-size: 15px;\\n  font-weight: 500;\\n}\\n.labelstyle {\\n  padding-top: 10px;\\n  float: left;\\n  padding-right: 10px;\\n}\\n.propertystyle {\\n  padding-top: 22px;\\n  font-weight: 600;\\n  font-size: 15px;\\n}\\n.sb-child-row {\\n  margin-top: 8px;\\n}\\n.barcodecenter {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  min-width: 280px;\\n  width: auto;\\n  border: 2px solid lightgray;\\n  min-height: 40%;\\n  padding-top: 35px;\\n}\\n.col-lg-4-property-section {\\n  width: 36%;\\n}\\n.rightProperty {\\n  margin-top: 10px;\\n  width: 16.66666667%;\\n  float: left;\\n  position: relative;\\n  min-height: 1px;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n}\\n.textProperty {\\n  width: 81%;\\n  padding-left: 0px;\\n  padding-right: 0;\\n  float: left;\\n  position: relative;\\n  min-height: 1px;\\n}\\n.sb-mobile-prop-pane .svgTextClass {\\n  width: 40px;\\n  padding-left: 24px;\\n}\\n.svgTextClass {\\n  width: 100px;\\n  float: left;\\n  position: relative;\\n  min-height: 1px;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n}\\n.sb-mobile-prop-pane .rightProperty {\\n  padding-left: 2px;\\n}\\n.sb-mobile-prop-pane .textPropertyClass {\\n  padding-left: 30px;\\n}\\n.sb-mobile-prop-pane .textProperty {\\n  padding-left: 30px;\\n  width: 77%;\\n}\\n.textPropertyClass {\\n  width: 83.33333333%;\\n  float: left;\\n  padding-left: 0px;\\n  position: relative;\\n  min-height: 1px;\\n  padding-right: 15px;\\n}\\n.allowedText {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  width: auto;\\n  height: auto;\\n}\\n.errorMessage {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  width: auto;\\n  height: auto;\\n}\\n.errorMessage {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  width: auto;\\n  height: auto;\\n}\\n.top {\\n  margin-top: 10px;\\n}\\n.centercontrol {\\n  margin: auto;\\n  height: 150px;\\n  width: 200px;\\n}\\n#password-info {\\n  position: absolute;\\n  margin-top: 38px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/barcodes-vue-samples_master-N42V2KTHLXVXYLI5IXQNBOS64CPR6MYTVWURNWM6AZIKRS2Q7YHA/Samples/barcode/qrcode/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,+BAA+B;CAChC;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,aAAa;CACd;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,cAAc;EACd,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.row {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.top {\\n  margin-top: 10px;\\n}\\n.column-style {\\n  display: table;\\n  height: 35px;\\n  padding-right: 4px;\\n  padding-left: 0px;\\n  width: calc((100% - 12px) / 3);\\n}\\n.row {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header {\\n  font-size: 15px;\\n  font-weight: 500;\\n}\\n.labelstyle {\\n  padding-top: 10px;\\n  float: left;\\n  padding-right: 10px;\\n}\\n.propertystyle {\\n  padding-top: 22px;\\n  font-weight: 600;\\n  font-size: 15px;\\n}\\n.sb-child-row {\\n  margin-top: 8px;\\n}\\n.barcodecenter {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  min-width: 280px;\\n  width: auto;\\n  border: 2px solid lightgray;\\n  min-height: 40%;\\n  padding-top: 35px;\\n}\\n.col-lg-4-property-section {\\n  width: 36%;\\n}\\n.rightProperty {\\n  margin-top: 10px;\\n  width: 16.66666667%;\\n  float: left;\\n  position: relative;\\n  min-height: 1px;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n}\\n.textProperty {\\n  width: 81%;\\n  padding-left: 0px;\\n  padding-right: 0;\\n  float: left;\\n  position: relative;\\n  min-height: 1px;\\n}\\n.sb-mobile-prop-pane .svgTextClass {\\n  width: 40px;\\n  padding-left: 24px;\\n}\\n.svgTextClass {\\n  width: 100px;\\n  float: left;\\n  position: relative;\\n  min-height: 1px;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n}\\n.sb-mobile-prop-pane .rightProperty {\\n  padding-left: 2px;\\n}\\n.sb-mobile-prop-pane .textPropertyClass {\\n  padding-left: 30px;\\n}\\n.sb-mobile-prop-pane .textProperty {\\n  padding-left: 30px;\\n  width: 77%;\\n}\\n.textPropertyClass {\\n  width: 83.33333333%;\\n  float: left;\\n  padding-left: 0px;\\n  position: relative;\\n  min-height: 1px;\\n  padding-right: 15px;\\n}\\n.allowedText {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  width: auto;\\n  height: auto;\\n}\\n.errorMessage {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  width: auto;\\n  height: auto;\\n}\\n.errorMessage {\\n  margin-left: 14px;\\n  margin-right: 17px;\\n  margin-top: 14px;\\n  width: auto;\\n  height: auto;\\n}\\n.top {\\n  margin-top: 10px;\\n}\\n.centercontrol {\\n  margin: auto;\\n  height: 150px;\\n  width: 200px;\\n}\\n#password-info {\\n  position: absolute;\\n  margin-top: 38px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/barcode/qrcode/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/barcode/qrcode/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_barcode_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-barcode-generator */ \"./node_modules/@syncfusion/ej2-vue-barcode-generator/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_barcode_generator__WEBPACK_IMPORTED_MODULE_3__[\"QRCodeGeneratorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"ColorPickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"TextBoxPlugin\"]);\nlet barCodeInstance;\nlet errorCorrectionLevel = [\n  { value: \"7\", text: \"Low\" },\n  { value: \"15\", text: \"Medium\" },\n  { value: \"25\", text: \"Quartile\" },\n  { value: \"30\", text: \"High\" }\n];\nlet canShowError = false;\nvar customFn = args => {\n  if (canShowError) {\n    return false;\n  }\n  return true;\n};\n\nlet options = {\n  rules: {\n    password: { minLength: [customFn, \"Invalid input\"] }\n  },\n  keyup() {\n    if (canShowError) {\n      canShowError = false;\n    }\n  },\n  focusout(args) {\n    displayText.value = barcode.value = document.getElementById(\n      \"barcodeValue\"\n    ).value;\n    barcode.dataBind();\n  }\n};\n\nlet textAlignmentdataSourceValue = [\n  { type: \"Center\", text: \"Center\" },\n  { type: \"Left\", text: \"Left\" },\n  { type: \"Right\", text: \"Right\" }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"200px\",\n      height: \"150px\",\n      mode: \"SVG\",\n      displaytext: { visibility: false },\n      type: \"QRCode\",\n      value: \"Syncfusion\",\n      fontcolorvalue: \"#000\",\n      textPositionwidth: \"100%\",\n      fieldValue: { value: \"type\", text: \"text\" },\n      errorCorrectionLevelSrc: errorCorrectionLevel,\n      textAlignmentdataSource: textAlignmentdataSourceValue,\n      textboxchange: arg => {\n        barCodeInstance.value = arg.value;\n      },\n      widthchange: arg => {\n        barCodeInstance.width = arg.value;\n      },\n      heightchange: arg => {\n        barCodeInstance.height = arg.value;\n      },\n      textVisibilitychange: arg => {\n        barCodeInstance.displayText.visibility = arg.checked;\n      },\n      svgModechange: arg => {\n        barCodeInstance.mode = arg.checked ? \"SVG\" : \"Canvas\";\n      },\n      bgColorchange: arg => {\n        barCodeInstance.backgroundColor = arg.currentValue.hex;\n      },\n      foreColorchange: arg => {\n        barCodeInstance.foreColor = arg.currentValue.hex;\n      },\n      MarginLeftchange: arg => {\n        barCodeInstance.margin.left = arg.value;\n      },\n      MarginRightchange: arg => {\n        barCodeInstance.margin.right = arg.value;\n      },\n      MarginTopchange: arg => {\n        barCodeInstance.margin.top = arg.value;\n      },\n      MarginBottomchange: arg => {\n        barCodeInstance.margin.bottom = arg.value;\n      },\n      errorCorrectionChange: arg => {\n        barCodeInstance.errorCorrectionLevel = (Number(arg.itemData.value));\n      },\n\n      VerionChange: arg => {\n        barCodeInstance.version = Number(arg.value);\n      },\n\n      TextMarginTopchange: arg => {\n        barCodeInstance.displayText.margin.top = arg.value;\n      },\n      TextMarginBottomchange: arg => {\n        barCodeInstance.displayText.margin.bottom = arg.value;\n      },\n      \n      textAlignmentchange: arg => {\n        barCodeInstance.displayText.alignment = arg.value;\n      },\n      displayTextchange: arg => {\n        barCodeInstance.displayText.text = arg.value.toString();\n      },\n      created: args => {\n        addEvents();\n      }\n    };\n  },\n  mounted: function() {\n    barCodeInstance = this.$refs.barcodeControl.ej2Instances;\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/barcode/qrcode/App.vue?vue&type=template&id=394bd33a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/barcode/qrcode/App.vue?vue&type=template&id=394bd33a& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-8 control-section\",\n        staticStyle: { width: \"64%\" }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"content-wrapper\",\n            staticStyle: { width: \"100%\", height: \"590px\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"barcodecenter\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"centercontrol\" },\n                [\n                  _c(\"ejs-qrcodegenerator\", {\n                    ref: \"barcodeControl\",\n                    attrs: {\n                      id: \"barcode\",\n                      width: _vm.width,\n                      displayText: _vm.displaytext,\n                      height: _vm.height,\n                      value: _vm.value,\n                      mode: _vm.mode\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section\",\n        staticStyle: { \"padding-right\": \"0px\", \"padding-left\": \"18px\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"Appearance\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"e-remove-selection\",\n          attrs: { id: \"propertypanel\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"property-section-content\" }, [\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Value\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-10\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\n                  \"div\",\n                  { attrs: { id: \"barcodevaluediv\" } },\n                  [\n                    _c(\"ejs-textbox\", {\n                      attrs: {\n                        id: \"textbox\",\n                        value: \"Syncfusion\",\n                        change: _vm.textboxchange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\"div\", [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-2 top\",\n                  staticStyle: {\n                    \"padding-left\": \"0px\",\n                    \"padding-right\": \"20px\"\n                  }\n                },\n                [_vm._v(\"Width\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-3\",\n                  staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\"ejs-numerictextbox\", {\n                    ref: \"widthObj\",\n                    attrs: {\n                      id: \"width\",\n                      format: \"###.##\",\n                      value: 200,\n                      step: 2,\n                      min: 150,\n                      max: 250,\n                      change: _vm.widthchange\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", [\n              _c(\"div\", { staticClass: \"rightProperty\" }, [_vm._v(\"Height\")]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-3\",\n                  staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\"ejs-numerictextbox\", {\n                    ref: \"heightObj\",\n                    attrs: {\n                      id: \"height\",\n                      format: \"###.##\",\n                      value: \"150\",\n                      step: 2,\n                      min: 100,\n                      max: 200,\n                      change: _vm.heightchange\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row sb-child-row\",\n              staticStyle: { \"margin-top\": \"20px\" }\n            },\n            [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-6\",\n                  staticStyle: { \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-1\",\n                      staticStyle: { \"padding-left\": \"0px\" }\n                    },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"textVisibility\",\n                          checked: true,\n                          change: _vm.textVisibilitychange\n                        }\n                      })\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"col-xs-10\" }, [\n                    _vm._v(\"Text Visibility\")\n                  ])\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-4\",\n                  staticStyle: { \"padding-left\": \"0\", \"margin-left\": \"13px\" }\n                },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-1\",\n                      staticStyle: { \"padding-left\": \"0px\" }\n                    },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"svgMode\",\n                          checked: true,\n                          change: _vm.svgModechange\n                        }\n                      })\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"svgTextClass\" }, [\n                    _vm._v(\"SVG Mode\")\n                  ])\n                ]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\"div\", { staticStyle: { \"margin-top\": \"15px\" } }, [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-2\",\n                  staticStyle: { \"margin-top\": \"5px\", \"padding-left\": \"0px\" }\n                },\n                [_vm._v(\"BG Color\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-4\",\n                  staticStyle: { \"padding-left\": \"0px\" }\n                },\n                [\n                  _c(\"ejs-colorpicker\", {\n                    ref: \"bgColor\",\n                    attrs: {\n                      id: \"bgColor\",\n                      value: _vm.fontcolorvalue,\n                      change: _vm.bgColorchange\n                    }\n                  })\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-2\",\n                  staticStyle: {\n                    width: \"18%\",\n                    \"padding-left\": \"12px\",\n                    \"margin-top\": \"5px\"\n                  }\n                },\n                [_vm._v(\"Fore Color\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"col-xs-3\",\n                  staticStyle: { \"padding-left\": \"2px\" }\n                },\n                [\n                  _c(\"ejs-colorpicker\", {\n                    ref: \"foreColor\",\n                    attrs: {\n                      id: \"foreColor\",\n                      value: _vm.fontcolorvalue,\n                      change: _vm.foreColorchange\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"property-panel-header\" }, [\n            _vm._v(\"Margin\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Left\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"marginLeft\",\n                    format: \"###.##\",\n                    value: \"10\",\n                    step: 1,\n                    min: -10,\n                    max: 30,\n                    change: _vm.MarginLeftchange\n                  }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"Right\" }, [_vm._v(\"Right\")]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"MarginRight\",\n                    format: \"###.##\",\n                    value: \"10\",\n                    step: 1,\n                    min: -10,\n                    max: 30,\n                    change: _vm.MarginRightchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Top\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"padding-bottom\": \"8px\" } },\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        id: \"marginTop\",\n                        format: \"###.##\",\n                        value: \"10\",\n                        step: 1,\n                        min: -10,\n                        max: 30,\n                        change: _vm.MarginTopchange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"Right\" }, [_vm._v(\"Bottom\")]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"MarginBottom\",\n                    format: \"###.##\",\n                    value: \"10\",\n                    step: 1,\n                    min: -10,\n                    max: 30,\n                    change: _vm.MarginBottomchange\n                  }\n                })\n              ],\n              1\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-2 top\",\n                staticStyle: { \"padding-left\": \"0px\" }\n              },\n              [_vm._v(\"Version\")]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-xs-3\",\n                staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n              },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"MarginBottom\",\n                    format: \"###.##\",\n                    value: \"1\",\n                    step: 1,\n                    min: 1,\n                    max: 40,\n                    change: _vm.VerionChange\n                  }\n                })\n              ],\n              1\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row sb-child-row\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-2 top\",\n              staticStyle: { \"padding-left\": \"0px\" }\n            },\n            [_vm._v(\"Error Correction Level\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-3\",\n              staticStyle: { width: \"33%\", \"padding-left\": \"0px\" }\n            },\n            [\n              _c(\"ejs-dropdownlist\", {\n                ref: \"errorCorrection\",\n                attrs: {\n                  id: \"errorCorrection\",\n                  dataSource: _vm.errorCorrectionLevelSrc,\n                  popupWidth: 150,\n                  width: _vm.textPositionwidth,\n                  value: \"Medium\",\n                  index: 0,\n                  change: _vm.errorCorrectionChange\n                }\n              })\n            ],\n            1\n          )\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample displays a machine-readable optical label that contains information about the item to which it is\\n        attached. The information may be a location, a URL, an address book, etc.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example shows how to display a URL as the optical label using the Barcode component. The `type` property\\n        can be used to set the barcode type as one-dimensional or two-dimensional.\\n        The `version` property is used to set the version of the QR barcode. Also, the Barcode component provides\\n        support to set the error correction level on a QR-type barcode by using the `errorCorrectionLevel` property.\\n        \\n      \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/barcode/qrcode/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });