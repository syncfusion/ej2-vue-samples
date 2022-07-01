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
/******/ 		"progress-bar/semi-circular/main": 0
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
/******/ 	deferredModules.push(["./Samples/progress-bar/semi-circular/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/progress-bar/semi-circular/App.vue":
/*!****************************************************!*\
  !*** ./Samples/progress-bar/semi-circular/App.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_9dda9630_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9dda9630&scoped=true& */ \"./Samples/progress-bar/semi-circular/App.vue?vue&type=template&id=9dda9630&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/progress-bar/semi-circular/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_9dda9630_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css& */ \"./Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_9dda9630_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_9dda9630_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9dda9630\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/progress-bar/semi-circular/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/semi-circular/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./Samples/progress-bar/semi-circular/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/semi-circular/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9dda9630_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9dda9630_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9dda9630_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9dda9630_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9dda9630_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/semi-circular/App.vue?vue&type=template&id=9dda9630&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./Samples/progress-bar/semi-circular/App.vue?vue&type=template&id=9dda9630&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9dda9630_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9dda9630&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/semi-circular/App.vue?vue&type=template&id=9dda9630&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9dda9630_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9dda9630_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/semi-circular/main.js":
/*!****************************************************!*\
  !*** ./Samples/progress-bar/semi-circular/main.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/progress-bar/semi-circular/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-9dda9630] {\\n      padding: 0px !important;\\n}\\n.annotaion-pro[data-v-9dda9630] {\\n          font-family: Roboto-Regular;\\n          font-size: 20px;\\n          color: #1B1C1A;\\n          letter-spacing: 0.01px;\\n}\\n.progress-bar-parent[data-v-9dda9630] {\\n          margin-top: 8%;\\n          text-align: center;\\n}\\n.progress-text[data-v-9dda9630] {\\n          display: inline-flex;\\n          margin: auto;\\n}\\n.progress-text-align[data-v-9dda9630] {\\n          font-family: Roboto-Regular;\\n          font-size: 12px;\\n          color: #3D3E3C;\\n          letter-spacing: 0;\\n          margin: auto;\\n}\\n#control-container[data-v-9dda9630] {\\n          padding: 0px !important;\\n}\\n.progress-container-align[data-v-9dda9630] {\\n          text-align: center;\\n}\\n.reload-btn[data-v-9dda9630] {\\n          text-align: center;\\n           margin-top:6%;\\n}\\n#reLoad[data-v-9dda9630] {\\n          border-radius: 4px;\\n          text-transform: capitalize;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-ADKVGR5MXUZJEO52WBQWUD4E34V4AOXCCXCS6Q5FAOSOYKFMOWTQ/Samples/progress-bar/semi-circular/App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;MACM,wBAAwB;CAC7B;AACD;UACU,4BAA4B;UAC5B,gBAAgB;UAChB,eAAe;UACf,uBAAuB;CAChC;AACD;UACU,eAAe;UACf,mBAAmB;CAC5B;AACD;UACU,qBAAqB;UACrB,aAAa;CACtB;AACD;UACU,4BAA4B;UAC5B,gBAAgB;UAChB,eAAe;UACf,kBAAkB;UAClB,aAAa;CACtB;AACD;UACU,wBAAwB;CACjC;AACD;UACU,mBAAmB;CAC5B;AACD;UACU,mBAAmB;WAClB,cAAc;CACxB;AACD;UACU,mBAAmB;UACnB,2BAA2B;CACpC\",\"file\":\"App.vue?vue&type=style&index=0&id=9dda9630&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-9dda9630] {\\n      padding: 0px !important;\\n}\\n.annotaion-pro[data-v-9dda9630] {\\n          font-family: Roboto-Regular;\\n          font-size: 20px;\\n          color: #1B1C1A;\\n          letter-spacing: 0.01px;\\n}\\n.progress-bar-parent[data-v-9dda9630] {\\n          margin-top: 8%;\\n          text-align: center;\\n}\\n.progress-text[data-v-9dda9630] {\\n          display: inline-flex;\\n          margin: auto;\\n}\\n.progress-text-align[data-v-9dda9630] {\\n          font-family: Roboto-Regular;\\n          font-size: 12px;\\n          color: #3D3E3C;\\n          letter-spacing: 0;\\n          margin: auto;\\n}\\n#control-container[data-v-9dda9630] {\\n          padding: 0px !important;\\n}\\n.progress-container-align[data-v-9dda9630] {\\n          text-align: center;\\n}\\n.reload-btn[data-v-9dda9630] {\\n          text-align: center;\\n           margin-top:6%;\\n}\\n#reLoad[data-v-9dda9630] {\\n          border-radius: 4px;\\n          text-transform: capitalize;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/semi-circular/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/semi-circular/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-progressbar */ \"./node_modules/@syncfusion/ej2-vue-progressbar/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n function annotationElementContent(color, controlID) {\n        let content;\n        switch (controlID) {\n            case 'angle-container':\n                content = '100%';\n                break;\n            case 'vertical-container':\n                content = '100%';\n                break;\n            case 'semi-container':\n                content = '100%';\n                break;\n            case 'vsemi-container':\n                content = '100%';\n                break;\n        }\n        return ('<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color: ' + color + ' \"><span>' + content + '</span></div>');\n    }\n    let annotationColors = ['#e91e63', '#0078D6', '#317ab9', '#007bff', '#4F46E5', '#FFD939', '#9A9A9A', '#22D3EE', '#0D6EFD'];\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressBarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      startAngle1:240,\n      endAngle1:120,\n      value1:100,\n      startAngle2:180,\n      endAngle2:0,\n      value2:100,\n      startAngle3:0,\n      endAngle3:180,\n      value3:100,\n      startAngle4:270,\n      endAngle4:90,\n      value4:100,\n      minimum:0,\n      maximum:100,\n      trackThickness:5,\n      progressThickness:5,\n      cornerRadius: 'Round',\n       animation: {\n        enable: true,\n        duration: 2000,\n        delay: 0\n      },\n      angle1:310,\n      angle2:340,\n      angle3:330,\n      content1: '<div id=\"point1\" style=\"font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6\"><span>100%</span></div>',\n      content2: '<div id=\"point1\" style=\"font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6\"><span>100%</span></div>',\n      content3: '<div id=\"point1\" style=\"font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6\"><span>100%</span></div>',\n      content4: '<div id=\"point1\" style=\"font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6\"><span>100%</span></div>',\n     };\n  },\n  provide: {\n    progressbar: [_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressAnnotation\"]]\n  },\n  methods: {\n     onclick: function() {\n      this.$refs.angle.ej2Instances.refresh();\n      this.$refs.vertical.ej2Instances.refresh();\n       this.$refs.vsemi.ej2Instances.refresh();\n      this.$refs.semi.ej2Instances.refresh();\n     },\n     load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +\n        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n        switch (selectedTheme) {\n            case 'material':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[0], args.progressBar.element.id);\n                break;\n            case 'fabric':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[1], args.progressBar.element.id);\n                break;\n            case 'bootstrap':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[2], args.progressBar.element.id);\n                break;\n            case 'bootstrap4':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[3], args.progressBar.element.id);\n                break;\n            case 'tailwind':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[4], args.progressBar.element.id);\n                break;\n            case 'bootstrap-dark':\n            case 'fabric-dark':\n            case 'material-dark':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[6], args.progressBar.element.id);\n                break;\n            case 'bootstrap5':\n            case 'bootstrap5-dark':\n            case 'fluent':\n            case 'fluent-dark':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[8], args.progressBar.element.id);\n                break;\n            case 'tailwind-dark':\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[7], args.progressBar.element.id);\n                break;\n            default:\n                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[5], args.progressBar.element.id);\n                break;\n          }\n      }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/semi-circular/App.vue?vue&type=template&id=9dda9630&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/semi-circular/App.vue?vue&type=template&id=9dda9630&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section progress-bar-parent\"},[_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-lg-3 col-md-3 col-3 progress-container\"},[_c('div',{staticClass:\"col-lg-3 col-md-3 col-3 progress-container\"},[_c('div',{attrs:{\"id\":\"angle-container\"}},[_c('ejs-progressbar',{ref:\"angle\",attrs:{\"id\":\"angle-container\",\"type\":\"Circular\",\"startAngle\":_vm.startAngle1,\"endAngle\":_vm.endAngle1,\"minimum\":_vm.minimum,\"width\":\"160px\",\"height\":\"160px\",\"maximum\":_vm.maximum,\"value\":_vm.value1,\"cornerRadius\":\"Round\",\"trackThickness\":_vm.trackThickness,\"progressThickness\":_vm.progressThickness,\"animation\":_vm.animation,\"load\":_vm.load}},[_c('e-progressbar-annotations',[_c('e-progressbar-annotation',{attrs:{\"content\":_vm.content1}})],1)],1)],1)])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 col-md-3 col-3 progress-container\"},[_c('div',{staticClass:\"progress-container-align\"},[_c('div',{attrs:{\"id\":\"vertical-container\"}},[_c('ejs-progressbar',{ref:\"vertical\",attrs:{\"id\":\"vertical-container\",\"type\":\"Circular\",\"startAngle\":_vm.startAngle2,\"endAngle\":_vm.endAngle2,\"minimum\":_vm.minimum,\"width\":\"160px\",\"height\":\"160px\",\"maximum\":_vm.maximum,\"value\":_vm.value2,\"cornerRadius\":\"Round\",\"trackThickness\":_vm.trackThickness,\"progressThickness\":_vm.progressThickness,\"animation\":_vm.animation,\"load\":_vm.load}},[_c('e-progressbar-annotations',[_c('e-progressbar-annotation',{attrs:{\"content\":_vm.content2}})],1)],1)],1)])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 col-md-3 col-3 progress-container\"},[_c('div',{staticClass:\"progress-container-align\"},[_c('div',{attrs:{\"id\":\"vsemi-container\"}},[_c('ejs-progressbar',{ref:\"vsemi\",attrs:{\"id\":\"vsemi-container\",\"type\":\"Circular\",\"startAngle\":_vm.startAngle3,\"endAngle\":_vm.endAngle3,\"minimum\":_vm.minimum,\"width\":\"160px\",\"height\":\"160px\",\"maximum\":_vm.maximum,\"value\":_vm.value3,\"cornerRadius\":\"Round\",\"trackThickness\":_vm.trackThickness,\"progressThickness\":_vm.progressThickness,\"animation\":_vm.animation,\"load\":_vm.load}},[_c('e-progressbar-annotations',[_c('e-progressbar-annotation',{attrs:{\"content\":_vm.content3}})],1)],1)],1)])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 col-md-3 col-3 progress-container\"},[_c('div',{staticClass:\"progress-container-align\"},[_c('div',{attrs:{\"id\":\"semi-container\"}},[_c('ejs-progressbar',{ref:\"semi\",attrs:{\"id\":\"semi-container\",\"type\":\"Circular\",\"startAngle\":_vm.startAngle4,\"endAngle\":_vm.endAngle4,\"minimum\":_vm.minimum,\"width\":\"160px\",\"height\":\"160px\",\"maximum\":_vm.maximum,\"value\":_vm.value4,\"cornerRadius\":\"Round\",\"trackThickness\":_vm.trackThickness,\"progressThickness\":_vm.progressThickness,\"animation\":_vm.animation,\"load\":_vm.load}},[_c('e-progressbar-annotations',[_c('e-progressbar-annotation',{attrs:{\"content\":_vm.content4}})],1)],1)],1)])])]),_vm._v(\" \"),_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-lg-12 col-md-12 col-12 reload-btn\"},[_c('button',{staticClass:\"e-control e-btn e-lib e-outline e-primary\",attrs:{\"id\":\"reLoad\"},on:{\"click\":_vm.onclick}},[_vm._v(\"Reload\")])])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample illustrates a circular progress bar with start and end angle customized.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\" This demo for Essential JS2 Progress Bar control shows the customizing options for angle in circular progress bar. Annotation is enabled in the sample to represent the progress value with animation.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/semi-circular/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });