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
/******/ 		"progress-bar/linear/main": 0
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
/******/ 	deferredModules.push(["./Samples/progress-bar/linear/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/progress-bar/linear/App.vue":
/*!*********************************************!*\
  !*** ./Samples/progress-bar/linear/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3eb63122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3eb63122&scoped=true& */ \"./Samples/progress-bar/linear/App.vue?vue&type=template&id=3eb63122&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/progress-bar/linear/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3eb63122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css& */ \"./Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3eb63122_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3eb63122_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3eb63122\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/progress-bar/linear/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/linear/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/progress-bar/linear/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/linear/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3eb63122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3eb63122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3eb63122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3eb63122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3eb63122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/linear/App.vue?vue&type=template&id=3eb63122&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/progress-bar/linear/App.vue?vue&type=template&id=3eb63122&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3eb63122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3eb63122&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/linear/App.vue?vue&type=template&id=3eb63122&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3eb63122_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3eb63122_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/linear/main.js":
/*!*********************************************!*\
  !*** ./Samples/progress-bar/linear/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/progress-bar/linear/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-progressbar[data-v-3eb63122], #lineardeterminate[data-v-3eb63122], #linearindeterminate[data-v-3eb63122], #linearbuffer[data-v-3eb63122], #linearsegment[data-v-3eb63122] {\\n          display: block;\\n}\\n.actual-txt[data-v-3eb63122]{\\n          font-size: 14px;\\n}\\n#control-container[data-v-3eb63122] {\\n          padding: 0px !important;\\n}\\n.replay-progressbar[data-v-3eb63122] {\\n          right: 100px;\\n}\\n.linear-parent[data-v-3eb63122] {\\n          text-align: center;\\n}\\n.progressbar-label[data-v-3eb63122] {\\n          text-align: left;\\n          font-family: Roboto-Regular;\\n          font-size: 14px;\\n          color: #3D3E3C;\\n          letter-spacing: 0;\\n          margin-left: 13.5%;\\n}\\n.linear-progress[data-v-3eb63122] {\\n          width: 80%;\\n          margin: auto;\\n}\\n.lineartxt[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          left: 13.5%;\\n}\\n#successtext[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          right: 245px;\\n}\\n#warningtext[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          right: 268px;\\n}\\n#errortext[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          right: 260px;\\n}\\n.reload-btn[data-v-3eb63122] {\\n          text-align: center;\\n}\\n#reLoad[data-v-3eb63122] {\\n          border-radius: 4px;\\n          text-transform: capitalize;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_release_20.4.0.1/Samples/progress-bar/linear/App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;UACU,eAAe;CACxB;AACD;UACU,gBAAgB;CACzB;AACD;UACU,wBAAwB;CACjC;AACD;UACU,aAAa;CACtB;AACD;UACU,mBAAmB;CAC5B;AACD;UACU,iBAAiB;UACjB,4BAA4B;UAC5B,gBAAgB;UAChB,eAAe;UACf,kBAAkB;UAClB,mBAAmB;CAC5B;AACD;UACU,WAAW;UACX,aAAa;CACtB;AACD;UACU,aAAa;UACb,UAAU;UACV,YAAY;CACrB;AACD;UACU,aAAa;UACb,UAAU;UACV,aAAa;CACtB;AACD;UACU,aAAa;UACb,UAAU;UACV,aAAa;CACtB;AACD;UACU,aAAa;UACb,UAAU;UACV,aAAa;CACtB;AACD;UACU,mBAAmB;CAC5B;AACD;UACU,mBAAmB;UACnB,2BAA2B;CACpC\",\"file\":\"App.vue?vue&type=style&index=0&id=3eb63122&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-progressbar[data-v-3eb63122], #lineardeterminate[data-v-3eb63122], #linearindeterminate[data-v-3eb63122], #linearbuffer[data-v-3eb63122], #linearsegment[data-v-3eb63122] {\\n          display: block;\\n}\\n.actual-txt[data-v-3eb63122]{\\n          font-size: 14px;\\n}\\n#control-container[data-v-3eb63122] {\\n          padding: 0px !important;\\n}\\n.replay-progressbar[data-v-3eb63122] {\\n          right: 100px;\\n}\\n.linear-parent[data-v-3eb63122] {\\n          text-align: center;\\n}\\n.progressbar-label[data-v-3eb63122] {\\n          text-align: left;\\n          font-family: Roboto-Regular;\\n          font-size: 14px;\\n          color: #3D3E3C;\\n          letter-spacing: 0;\\n          margin-left: 13.5%;\\n}\\n.linear-progress[data-v-3eb63122] {\\n          width: 80%;\\n          margin: auto;\\n}\\n.lineartxt[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          left: 13.5%;\\n}\\n#successtext[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          right: 245px;\\n}\\n#warningtext[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          right: 268px;\\n}\\n#errortext[data-v-3eb63122] {\\n          color: black;\\n          top: 20px;\\n          right: 260px;\\n}\\n.reload-btn[data-v-3eb63122] {\\n          text-align: center;\\n}\\n#reLoad[data-v-3eb63122] {\\n          border-radius: 4px;\\n          text-transform: capitalize;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/linear/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/linear/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-progressbar */ \"./node_modules/@syncfusion/ej2-vue-progressbar/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nlet div = document.getElementsByClassName('progressbar-label');\n \nfunction annotationElementContent(color, controlID) {\n        let content;\n        let annotation='';\n        switch (controlID) {\n         case 'rounded-container':\n                content = '60%';\n                annotation='<div id=\"point1\" style=\"font-size:20px;font-weight:bold;color: ' + color + ' \"><span>' + content + '</span></div>';\n                break;\n        }\n        return annotation;\n    }\n let annotationColors = ['#e91e63', '#0078D6', '#317ab9', '#007bff', '#FFD939'];\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressBarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value1: 100,\n      value2: 20,\n      value3: 100,\n      value4: 40,\n      secvalue:60,\n      count:8,\n      animation: {\n        enable: true,\n        duration: 2000,\n        delay: 0\n      }\n    };\n  },\n  provide: {},\n  methods: {\n    onclick: function() {\n      this.$refs.determinate.ej2Instances.refresh();\n      this.$refs.indeterminate.ej2Instances.refresh();\n      this.$refs.buffer.ej2Instances.refresh();\n      this.$refs.segment.ej2Instances.refresh();\n    },\n    load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +\n        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n        if(args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark'\n                || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'FluentDark') {\n            for (let i = 0; i < div.length; i++) {\n                div[i].setAttribute('style', 'color:white');\n            }\n         }\n  }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/linear/App.vue?vue&type=template&id=3eb63122&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/linear/App.vue?vue&type=template&id=3eb63122&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { staticClass: \"row linear-parent\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-12 col-md-12\",\n          staticStyle: { \"margin-top\": \"1%\" },\n        },\n        [\n          _c(\"div\", { staticClass: \"col-lg-12 col-md-12 progressbar-label\" }, [\n            _vm._v(\"Determinate\"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"linear-progress\" }, [\n            _c(\n              \"div\",\n              { attrs: { id: \"lineardeterminate\" } },\n              [\n                _c(\"ejs-progressbar\", {\n                  ref: \"determinate\",\n                  attrs: {\n                    id: \"lineardeterminate\",\n                    type: \"Linear\",\n                    height: \"60\",\n                    width: \"90%\",\n                    value: _vm.value1,\n                    animation: _vm.animation,\n                    load: _vm.load,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-12 col-md-12\",\n          staticStyle: { \"margin-top\": \"2.5%\" },\n        },\n        [\n          _c(\"div\", { staticClass: \"col-lg-12 col-md-12 progressbar-label\" }, [\n            _vm._v(\"Indeterminate\"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"linear-progress\" }, [\n            _c(\n              \"div\",\n              { attrs: { id: \"linearindeterminate\" } },\n              [\n                _c(\"ejs-progressbar\", {\n                  ref: \"indeterminate\",\n                  attrs: {\n                    id: \"successcontainer\",\n                    type: \"Linear\",\n                    height: \"60\",\n                    width: \"90%\",\n                    isIndeterminate: \"true\",\n                    value: _vm.value2,\n                    load: _vm.load,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-12 col-md-12\",\n          staticStyle: { \"margin-top\": \"2.5%\" },\n        },\n        [\n          _c(\"div\", { staticClass: \"col-lg-12 col-md-12 progressbar-label\" }, [\n            _vm._v(\"Segment\"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"linear-progress\" }, [\n            _c(\n              \"div\",\n              { attrs: { id: \"linearsegment\" } },\n              [\n                _c(\"ejs-progressbar\", {\n                  ref: \"segment\",\n                  attrs: {\n                    id: \"errorcontainer\",\n                    type: \"Linear\",\n                    height: \"60\",\n                    width: \"90%\",\n                    segmentCount: _vm.count,\n                    value: _vm.value3,\n                    animation: _vm.animation,\n                    load: _vm.load,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-12 col-md-12\",\n          staticStyle: { \"margin-top\": \"2.5%\" },\n        },\n        [\n          _vm._m(0),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"linear-progress\" }, [\n            _c(\n              \"div\",\n              { attrs: { id: \"linearbuffer\" } },\n              [\n                _c(\"ejs-progressbar\", {\n                  ref: \"buffer\",\n                  attrs: {\n                    id: \"warningscontainer\",\n                    type: \"Linear\",\n                    height: \"60\",\n                    width: \"90%\",\n                    value: _vm.value4,\n                    secondaryProgress: _vm.secvalue,\n                    animation: _vm.animation,\n                    load: _vm.load,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-12 col-md-12\",\n          staticStyle: { \"margin-top\": \"2.5%\" },\n        },\n        [\n          _vm._m(1),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"linear-progress\" }, [\n            _c(\n              \"div\",\n              { attrs: { id: \"linearactive\" } },\n              [\n                _c(\"ejs-progressbar\", {\n                  ref: \"active\",\n                  attrs: {\n                    id: \"activecontainer\",\n                    type: \"Linear\",\n                    height: \"60\",\n                    width: \"90%\",\n                    value: _vm.value3,\n                    isActive: \"true\",\n                    load: _vm.load,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]\n      ),\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticStyle: { \"margin-top\": \"2%\", \"margin-left\": \"45.5%\" },\n        attrs: { id: \"replay-progressbar\" },\n      },\n      [\n        _c(\n          \"button\",\n          {\n            staticClass: \"e-control e-btn e-lib e-outline e-primary\",\n            attrs: { id: \"reLoad\" },\n            on: { click: _vm.onclick },\n          },\n          [_vm._v(\"Reload\")]\n        ),\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-lg-12 col-md-12 progressbar-label\" }, [\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-lg-8 col-md-8\" }, [_vm._v(\"Buffer\")]),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-lg-12 col-md-12 progressbar-label\" }, [\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-lg-8 col-md-8\" }, [_vm._v(\"Active\")]),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates a linear progress bar with determinate and indeterminate states, segments and buffer value.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \" In this example, you can see how to render and configure the linear progress bar. Progress bar is used to visualize the progression of an extended operation. The sample shows the determinate and indeterminate states, buffer and segments of linear progress bar.\"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/linear/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });