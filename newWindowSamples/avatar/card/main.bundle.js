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
/******/ 		"avatar/card/main": 0
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
/******/ 	deferredModules.push(["./Samples/avatar/card/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/avatar/card/App.vue":
/*!*************************************!*\
  !*** ./Samples/avatar/card/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_e4bb2798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=e4bb2798& */ \"./Samples/avatar/card/App.vue?vue&type=template&id=e4bb2798&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_e4bb2798___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_e4bb2798___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/avatar/card/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/avatar/card/App.vue?");

/***/ }),

/***/ "./Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/avatar/card/App.vue?");

/***/ }),

/***/ "./Samples/avatar/card/App.vue?vue&type=template&id=e4bb2798&":
/*!********************************************************************!*\
  !*** ./Samples/avatar/card/App.vue?vue&type=template&id=e4bb2798& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e4bb2798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=e4bb2798& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/card/App.vue?vue&type=template&id=e4bb2798&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e4bb2798___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e4bb2798___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/card/App.vue?");

/***/ }),

/***/ "./Samples/avatar/card/main.js":
/*!*************************************!*\
  !*** ./Samples/avatar/card/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/avatar/card/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/avatar/card/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.avatar-card .sample_container {\\n    max-width: 300px;\\n    margin: auto;\\n    min-height: 400px;\\n}\\n\\n/* Card Customizations */\\n.avatar-card .e-custom-card {\\n    position: relative;\\n    margin-top: 80px;\\n    overflow: visible;\\n    border-radius: 15px;\\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\\n    transition: 0.2s;\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.avatar-card .e-custom-card.e-card:hover {\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.avatar-card .e-custom-card :nth-child(2) .e-card-header-title.name {\\n    margin-top: 20px;\\n}\\n.avatar-card p.avatar-content {\\n    line-height: 20px;\\n    font-family: inherit;\\n}\\n.avatar-card .e-custom-card .e-card-header {\\n    text-align: center;\\n}\\n.avatar-card .e-custom-card .e-avatar {\\n    font-size: 40px;\\n    position: absolute;\\n    top: calc(0% - 1.5em);\\n    left: calc(50% - 1.5em);\\n    box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\\n}\\n.avatar-card .e-card.e-custom-card :nth-child(3) {\\n    padding: 12px 0px 20px 0px;\\n    height: 130px;\\n}\\n.avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {\\n    font-size: 24px;\\n    font-weight: 500;\\n    line-height: normal;\\n    color: rgba(83, 101, 132, 0.65);\\n    text-shadow: 0 0 0.1px;\\n}\\n.avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {\\n    font-size: 12px;\\n    font-weight: 500;\\n    line-height: normal;\\n    color: rgba(86, 90, 97, 0.65);\\n    text-shadow: 0 0 0.1px;\\n}\\n.avatar-card .e-custom-card.e-card .e-card-content {\\n    overflow: visible;\\n    width: auto;\\n    margin: -5px 20px 0 20px;\\n    word-spacing: 1px;\\n}\\n.avatar-card .avatar-content {\\n    color: rgba(250, 200, 130, 0.6);\\n    margin: 0 auto;\\n    text-align: center;\\n    color: rgb(94, 94, 94);\\n    border: none;\\n    padding: 0;\\n    font-size: 14px;\\n}\\n.avatar-card .avatar-content {\\n    margin-bottom: 0;\\n}\\n.avatar-card .sample_container .name {\\n    margin-top: 10px;\\n}\\n.highcontrast .avatar-card .e-custom-card.e-card .avatar-content {\\n    color: rgba(255, 255, 255, 0.84);\\n}\\n.highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {\\n    color: rgba(255, 255, 255, 0.45);\\n}\\n.highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {\\n    color: rgba(255, 255, 255, 0.84);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-V55EMCJG2NEC3AALTPADHFXFXUTFAIGQCOWFKU6ZMQVA2HIIMDFA/Samples/avatar/card/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;CACrB;;AAED,yBAAyB;AACzB;IACI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;IACpB,mEAAmE;IACnE,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,kBAAkB;IAClB,qBAAqB;CACxB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,wBAAwB;IACxB,oHAAoH;CACvH;AACD;IACI,2BAA2B;IAC3B,cAAc;CACjB;AACD;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,gCAAgC;IAChC,uBAAuB;CAC1B;AACD;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,8BAA8B;IAC9B,uBAAuB;CAC1B;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;CACrB;AACD;IACI,gCAAgC;IAChC,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,gBAAgB;CACnB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iCAAiC;CACpC;AACD;IACI,iCAAiC;CACpC;AACD;IACI,iCAAiC;CACpC\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.avatar-card .sample_container {\\n    max-width: 300px;\\n    margin: auto;\\n    min-height: 400px;\\n}\\n\\n/* Card Customizations */\\n.avatar-card .e-custom-card {\\n    position: relative;\\n    margin-top: 80px;\\n    overflow: visible;\\n    border-radius: 15px;\\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\\n    transition: 0.2s;\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.avatar-card .e-custom-card.e-card:hover {\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.avatar-card .e-custom-card :nth-child(2) .e-card-header-title.name {\\n    margin-top: 20px;\\n}\\n.avatar-card p.avatar-content {\\n    line-height: 20px;\\n    font-family: inherit;\\n}\\n.avatar-card .e-custom-card .e-card-header {\\n    text-align: center;\\n}\\n.avatar-card .e-custom-card .e-avatar {\\n    font-size: 40px;\\n    position: absolute;\\n    top: calc(0% - 1.5em);\\n    left: calc(50% - 1.5em);\\n    box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\\n}\\n.avatar-card .e-card.e-custom-card :nth-child(3) {\\n    padding: 12px 0px 20px 0px;\\n    height: 130px;\\n}\\n.avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {\\n    font-size: 24px;\\n    font-weight: 500;\\n    line-height: normal;\\n    color: rgba(83, 101, 132, 0.65);\\n    text-shadow: 0 0 0.1px;\\n}\\n.avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {\\n    font-size: 12px;\\n    font-weight: 500;\\n    line-height: normal;\\n    color: rgba(86, 90, 97, 0.65);\\n    text-shadow: 0 0 0.1px;\\n}\\n.avatar-card .e-custom-card.e-card .e-card-content {\\n    overflow: visible;\\n    width: auto;\\n    margin: -5px 20px 0 20px;\\n    word-spacing: 1px;\\n}\\n.avatar-card .avatar-content {\\n    color: rgba(250, 200, 130, 0.6);\\n    margin: 0 auto;\\n    text-align: center;\\n    color: rgb(94, 94, 94);\\n    border: none;\\n    padding: 0;\\n    font-size: 14px;\\n}\\n.avatar-card .avatar-content {\\n    margin-bottom: 0;\\n}\\n.avatar-card .sample_container .name {\\n    margin-top: 10px;\\n}\\n.highcontrast .avatar-card .e-custom-card.e-card .avatar-content {\\n    color: rgba(255, 255, 255, 0.84);\\n}\\n.highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {\\n    color: rgba(255, 255, 255, 0.45);\\n}\\n.highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {\\n    color: rgba(255, 255, 255, 0.84);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/avatar/card/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/card/App.vue?vue&type=template&id=e4bb2798&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/card/App.vue?vue&type=template&id=e4bb2798& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-lg-12 control-section avatar-card\" }, [\n      _c(\"div\", { staticClass: \"sample_container\" }, [\n        _c(\"div\", { staticClass: \"e-card e-custom-card\" }, [\n          _c(\"div\", { staticClass: \"e-card-header\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"e-avatar e-avatar-circle e-avatar-xlarge\" },\n              [\n                _c(\"img\", {\n                  attrs: {\n                    src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic02.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                    alt: \"profile_pic\"\n                  }\n                })\n              ]\n            ),\n            _vm._v(\"\\n                 \\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"e-card-header\" }, [\n            _c(\"div\", { staticClass: \"e-card-header-caption center\" }, [\n              _c(\"div\", { staticClass: \"e-card-header-title name\" }, [\n                _vm._v(\"Laura Callahan\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-sub-title\" }, [\n                _vm._v(\"Sales Coordinator\")\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"e-card-content\" }, [\n            _c(\"p\", { staticClass: \"avatar-content\" }, [\n              _vm._v(\n                \" Laura received a BA in psychology from the University of Washington. She has also completed a course\\n                    in business French. She reads and writes French.\"\n              )\n            ])\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"action-description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"This sample demonstrates the integration of avatar component with card component to create business cards.\"\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"The circle avatar is integrated into card component to design business cards. The image element is wrapped by the avatar\\n            container to apply circle style to avatar and add\\n            \"\n          ),\n          _c(\"code\", [_vm._v(\".e-avatar-circle\")]),\n          _vm._v(\" class to the avatar container.\\n        \")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/card/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });