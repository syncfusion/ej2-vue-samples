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
/******/ 		"progress-bar/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/progress-bar/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/progress-bar/default/App.vue":
/*!**********************************************!*\
  !*** ./Samples/progress-bar/default/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_28c5520b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=28c5520b&scoped=true& */ \"./Samples/progress-bar/default/App.vue?vue&type=template&id=28c5520b&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/progress-bar/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_28c5520b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css& */ \"./Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_28c5520b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_28c5520b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"28c5520b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/progress-bar/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/default/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/progress-bar/default/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28c5520b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28c5520b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28c5520b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28c5520b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28c5520b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/default/App.vue?vue&type=template&id=28c5520b&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/progress-bar/default/App.vue?vue&type=template&id=28c5520b&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28c5520b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=28c5520b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/default/App.vue?vue&type=template&id=28c5520b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28c5520b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28c5520b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/default/main.js":
/*!**********************************************!*\
  !*** ./Samples/progress-bar/default/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/progress-bar/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-28c5520b] {\\n     padding: 0px !important;\\n}\\n.annotaion-pro[data-v-28c5520b] {\\n         font-family: Roboto-Regular;\\n         font-size: 20px;\\n         color: #1B1C1A;\\n         letter-spacing: 0.01px;\\n}\\n.progress-bar-parent[data-v-28c5520b] {\\n         margin-top: 8%;\\n         text-align: center;\\n}\\n.progress-text[data-v-28c5520b] {\\n         display: inline-flex;\\n         margin: auto;\\n}\\n.progress-text-align[data-v-28c5520b] {\\n         font-family: Roboto-Regular;\\n         font-size: 14px;\\n         color: #3D3E3C;\\n         letter-spacing: 0;\\n         margin: auto;\\n}\\n#control-container[data-v-28c5520b] {\\n         padding: 0px !important;\\n}\\n.progress-container-align[data-v-28c5520b] {\\n         text-align: center;\\n}\\n.reload-btn[data-v-28c5520b] {\\n         text-align: center;\\n         margin-top:6%;\\n}\\n#reLoad[data-v-28c5520b] {\\n         border-radius: 4px;\\n         text-transform: capitalize;\\n}\\n.progress-container[data-v-28c5520b] {\\n         /*height: -webkit-fill-available; */\\n         display: inline-flex;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-OKSCHYEDL5Q4MAACC43OJVA4LT4RJZH6V5T4UUHQSKA26RT46Y7Q/Samples/progress-bar/default/App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,wBAAwB;CAC5B;AACD;SACS,4BAA4B;SAC5B,gBAAgB;SAChB,eAAe;SACf,uBAAuB;CAC/B;AACD;SACS,eAAe;SACf,mBAAmB;CAC3B;AACD;SACS,qBAAqB;SACrB,aAAa;CACrB;AACD;SACS,4BAA4B;SAC5B,gBAAgB;SAChB,eAAe;SACf,kBAAkB;SAClB,aAAa;CACrB;AACD;SACS,wBAAwB;CAChC;AACD;SACS,mBAAmB;CAC3B;AACD;SACS,mBAAmB;SACnB,cAAc;CACtB;AACD;SACS,mBAAmB;SACnB,2BAA2B;CACnC;AACD;SACS,oCAAoC;SACpC,qBAAqB;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&id=28c5520b&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-28c5520b] {\\n     padding: 0px !important;\\n}\\n.annotaion-pro[data-v-28c5520b] {\\n         font-family: Roboto-Regular;\\n         font-size: 20px;\\n         color: #1B1C1A;\\n         letter-spacing: 0.01px;\\n}\\n.progress-bar-parent[data-v-28c5520b] {\\n         margin-top: 8%;\\n         text-align: center;\\n}\\n.progress-text[data-v-28c5520b] {\\n         display: inline-flex;\\n         margin: auto;\\n}\\n.progress-text-align[data-v-28c5520b] {\\n         font-family: Roboto-Regular;\\n         font-size: 14px;\\n         color: #3D3E3C;\\n         letter-spacing: 0;\\n         margin: auto;\\n}\\n#control-container[data-v-28c5520b] {\\n         padding: 0px !important;\\n}\\n.progress-container-align[data-v-28c5520b] {\\n         text-align: center;\\n}\\n.reload-btn[data-v-28c5520b] {\\n         text-align: center;\\n         margin-top:6%;\\n}\\n#reLoad[data-v-28c5520b] {\\n         border-radius: 4px;\\n         text-transform: capitalize;\\n}\\n.progress-container[data-v-28c5520b] {\\n         /*height: -webkit-fill-available; */\\n         display: inline-flex;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/default/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/default/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-progressbar */ \"./node_modules/@syncfusion/ej2-vue-progressbar/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n \nlet div = document.getElementsByClassName('progress-text-align');\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressBarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value1: 100,\n      value2: 70,\n      value3: 100,\n      value4: 20,\n      secondary:90,\n      startAngle:180,\n      endAngle:180,\n      animation: {\n        enable: true,\n        duration: 2000,\n        delay: 0\n      },\n      count:4,\n     };\n  },\n  provide: {\n    progressbar: [_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressAnnotation\"]]\n  },\n  methods: {\n    onclick: function() {\n      this.$refs.circluar.ej2Instances.refresh();\n      this.$refs.rtl.ej2Instances.refresh();\n      this.$refs.track.ej2Instances.refresh();\n      this.$refs.rounded.ej2Instances.refresh();\n    },\n    load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +\n        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n        if(selectedTheme === 'highcontrast') {\n            for (let i = 0; i < div.length; i++) {\n                div[i].setAttribute('style', 'color:white');\n            }\n         }\n      }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/default/App.vue?vue&type=template&id=28c5520b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/default/App.vue?vue&type=template&id=28c5520b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section progress-bar-parent\" }, [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-lg-3 col-md-3 col-3 progress-container\" }, [\n        _c(\"div\", { staticClass: \"row progress-container-align\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-lg-12 col-md-12 col-12\",\n              attrs: { id: \"circular-container\" }\n            },\n            [\n              _c(\"ejs-progressbar\", {\n                ref: \"circluar\",\n                attrs: {\n                  id: \"circular-container\",\n                  type: \"Circular\",\n                  value: _vm.value1,\n                  width: \"160px\",\n                  height: \"160px\",\n                  startAngle: _vm.startAngle,\n                  endAngle: _vm.endAngle,\n                  animation: _vm.animation,\n                  load: _vm.load\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(0)\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-lg-3 col-md-3 col-3 progress-container\" }, [\n        _c(\"div\", { staticClass: \"row progress-container-align\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-lg-12 col-md-12 col-12\",\n              attrs: { id: \"rtl-container\" }\n            },\n            [\n              _c(\"ejs-progressbar\", {\n                ref: \"rtl\",\n                attrs: {\n                  id: \"rtl-container\",\n                  type: \"Circular\",\n                  value: _vm.value2,\n                  width: \"160px\",\n                  height: \"160px\",\n                  secondaryProgress: _vm.secondary,\n                  animation: _vm.animation,\n                  load: _vm.load\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(1)\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-lg-3 col-md-3 col-3 progress-container\" }, [\n        _c(\"div\", { staticClass: \"row progress-container-align\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-lg-12 col-md-12 col-12\",\n              attrs: { id: \"track-container\" }\n            },\n            [\n              _c(\"ejs-progressbar\", {\n                ref: \"track\",\n                attrs: {\n                  id: \"track-container\",\n                  type: \"Circular\",\n                  minimum: \"0\",\n                  maximum: \"100\",\n                  value: _vm.value3,\n                  width: \"160px\",\n                  height: \"160px\",\n                  segmentCount: _vm.count,\n                  animation: _vm.animation,\n                  load: _vm.load\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(2)\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-lg-3 col-md-3 col-3 progress-container\" }, [\n        _c(\"div\", { staticClass: \"row progress-container-align\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-lg-12 col-md-12 col-12\",\n              attrs: { id: \"rounded-container\" }\n            },\n            [\n              _c(\"ejs-progressbar\", {\n                ref: \"rounded\",\n                attrs: {\n                  id: \"rounded-container\",\n                  type: \"Circular\",\n                  value: _vm.value4,\n                  width: \"160px\",\n                  height: \"160px\",\n                  cornerRadius: \"Round\",\n                  isIndeterminate: \"true\",\n                  load: _vm.load\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(3)\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-lg-12 col-md-12 col-12 reload-btn\" }, [\n        _c(\n          \"button\",\n          {\n            staticClass: \"e-control e-btn e-lib e-outline e-primary\",\n            attrs: { id: \"reLoad\" },\n            on: { click: _vm.onclick }\n          },\n          [_vm._v(\"\\n      Reload\\n    \")]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"col-lg-12 col-md-12 col-12 progress-text\" },\n      [\n        _c(\"div\", { staticClass: \"progress-text-align\" }, [\n          _vm._v(\"Determinate\")\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"col-lg-12 col-md-12 col-12 progress-text\" },\n      [_c(\"div\", { staticClass: \"progress-text-align\" }, [_vm._v(\"Buffer \")])]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"col-lg-12 col-md-12 col-12 progress-text\" },\n      [_c(\"div\", { staticClass: \"progress-text-align\" }, [_vm._v(\"Segment\")])]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"col-lg-12 col-md-12 col-12 progress-text\" },\n      [\n        _c(\"div\", { staticClass: \"progress-text-align\" }, [\n          _vm._v(\"Indeterminate\")\n        ])\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates a circular progress bar with determinate and indeterminate states, segments and buffer value.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \" In this example, you can see how to render and configure the circular progress bar. Progress bar is used to visualize the progression of an extended operation. The sample shows the determinate and indeterminate states, buffer and segments of circular progress bar.\"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });