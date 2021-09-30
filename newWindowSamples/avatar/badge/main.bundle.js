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
/******/ 		"avatar/badge/main": 0
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
/******/ 	deferredModules.push(["./Samples/avatar/badge/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/avatar/badge/App.vue":
/*!**************************************!*\
  !*** ./Samples/avatar/badge/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_36595cd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=36595cd3& */ \"./Samples/avatar/badge/App.vue?vue&type=template&id=36595cd3&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_36595cd3___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_36595cd3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/avatar/badge/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/avatar/badge/App.vue?");

/***/ }),

/***/ "./Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/avatar/badge/App.vue?");

/***/ }),

/***/ "./Samples/avatar/badge/App.vue?vue&type=template&id=36595cd3&":
/*!*********************************************************************!*\
  !*** ./Samples/avatar/badge/App.vue?vue&type=template&id=36595cd3& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36595cd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=36595cd3& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/badge/App.vue?vue&type=template&id=36595cd3&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36595cd3___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_36595cd3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/badge/App.vue?");

/***/ }),

/***/ "./Samples/avatar/badge/main.js":
/*!**************************************!*\
  !*** ./Samples/avatar/badge/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/avatar/badge/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/avatar/badge/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.avatar-badge {\\n    overflow: auto;\\n    padding-left: 0px;\\n    padding-right: 0px;\\n}\\n.avatar-badge .sample_container .avatar-sub-block {\\n    display: inline-block;\\n    position: relative;\\n    margin: 9px\\n}\\n.avatar-badge .sample_container .avatar-block {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n\\n/* Media Queries for various devices */\\n@media only screen and (max-width: 965px) {\\n.avatar-badge .sample_container {\\n        max-width: 332px;\\n        margin: auto;\\n        margin-top: 0;\\n}\\n.avatar-badge .circleAvatar {\\n        margin-top: 15px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card {\\n        width: 320px;\\n}\\n}\\n@media only screen and (min-width: 965px) {\\n.avatar-badge .sample_container {\\n        max-width: 825px;\\n        margin: auto;\\n        margin-top: 70px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card {\\n        width: 400px;\\n}\\n}\\n.avatar-badge .e-avatar.image {\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\n/* Card Customization */\\n.avatar-badge .e-avatar-showcase.e-card {\\n    height: 140px;\\n    padding: 4px;\\n    margin: 5px;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    border-radius: 8px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-content {\\n    overflow: visible;\\n    align-self: center;\\n    padding: 10px 11px 10px 0px;\\n    color: rgba(0, 0, 0, 0.75)\\n}\\n.bootstrap4 .avatar-badge .e-avatar-showcase.e-card {\\n    box-shadow: none;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-VJEC7HBY5NTXUHA5ZZO7LWIVXVPVHIAKFKVUZCG2B6BEQF2A46MA/Samples/avatar/badge/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;CACd;AACD;IACI,sBAAsB;IACtB,oBAAoB;CACvB;;AAED,uCAAuC;AACvC;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,cAAc;CACrB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;CACA;AACD;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;CACA;AACD;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,4BAA4B;CAC/B;;AAED,wBAAwB;AACxB;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,yEAAyE;IACzE,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;CACpC;AACD;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,iCAAiC;CACpC;AACD;IACI,UAAU;CACb;AACD;IACI,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B;IAC5B,0BAA0B;CAC7B;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.avatar-badge {\\n    overflow: auto;\\n    padding-left: 0px;\\n    padding-right: 0px;\\n}\\n.avatar-badge .sample_container .avatar-sub-block {\\n    display: inline-block;\\n    position: relative;\\n    margin: 9px\\n}\\n.avatar-badge .sample_container .avatar-block {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n\\n/* Media Queries for various devices */\\n@media only screen and (max-width: 965px) {\\n.avatar-badge .sample_container {\\n        max-width: 332px;\\n        margin: auto;\\n        margin-top: 0;\\n}\\n.avatar-badge .circleAvatar {\\n        margin-top: 15px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card {\\n        width: 320px;\\n}\\n}\\n@media only screen and (min-width: 965px) {\\n.avatar-badge .sample_container {\\n        max-width: 825px;\\n        margin: auto;\\n        margin-top: 70px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card {\\n        width: 400px;\\n}\\n}\\n.avatar-badge .e-avatar.image {\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\n/* Card Customization */\\n.avatar-badge .e-avatar-showcase.e-card {\\n    height: 140px;\\n    padding: 4px;\\n    margin: 5px;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    border-radius: 8px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.avatar-badge .e-avatar-showcase.e-card .e-card-content {\\n    overflow: visible;\\n    align-self: center;\\n    padding: 10px 11px 10px 0px;\\n    color: rgba(0, 0, 0, 0.75)\\n}\\n.bootstrap4 .avatar-badge .e-avatar-showcase.e-card {\\n    box-shadow: none;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/avatar/badge/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/badge/App.vue?vue&type=template&id=36595cd3&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/badge/App.vue?vue&type=template&id=36595cd3& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"col-lg-12 control-section avatar-badge\" },\n      [\n        _c(\"div\", { staticClass: \"sample_container\" }, [\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\"div\", { staticClass: \"e-avatar e-avatar-xsmall\" }, [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"profile_pic\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle\"\n                    },\n                    [_vm._v(\"6\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\"div\", { staticClass: \"e-avatar e-avatar-small\" }, [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"profile_pic\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle\"\n                    },\n                    [_vm._v(\"12\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\"div\", { staticClass: \"e-avatar\" }, [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"profile_pic\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification\"\n                    },\n                    [_vm._v(\"46\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\"div\", { staticClass: \"e-avatar e-avatar-large\" }, [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"profile_pic\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification\"\n                    },\n                    [_vm._v(\"82\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\"div\", { staticClass: \"e-avatar e-avatar-xlarge\" }, [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"profile_pic\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification\"\n                    },\n                    [_vm._v(\"99+\")]\n                  )\n                ])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"circleAvatar avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"e-avatar e-avatar-circle e-avatar-xsmall\" },\n                    [\n                      _c(\"img\", {\n                        attrs: {\n                          src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                          alt: \"profile_pic\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle\"\n                    },\n                    [_vm._v(\"6\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"e-avatar e-avatar-circle e-avatar-small\" },\n                    [\n                      _c(\"img\", {\n                        attrs: {\n                          src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                          alt: \"profile_pic\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle\"\n                    },\n                    [_vm._v(\"12\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\"div\", { staticClass: \"e-avatar e-avatar-circle\" }, [\n                    _c(\"img\", {\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"profile_pic\"\n                      }\n                    })\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification\"\n                    },\n                    [_vm._v(\"46\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"e-avatar e-avatar-circle e-avatar-large\" },\n                    [\n                      _c(\"img\", {\n                        attrs: {\n                          src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                          alt: \"profile_pic\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification\"\n                    },\n                    [_vm._v(\"82\")]\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"avatar-sub-block\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"e-avatar e-avatar-circle e-avatar-xlarge\" },\n                    [\n                      _c(\"img\", {\n                        attrs: {\n                          src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                          alt: \"profile_pic\"\n                        }\n                      })\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass:\n                        \"e-badge e-badge-primary e-badge-overlap e-badge-notification\"\n                    },\n                    [_vm._v(\"99+\")]\n                  )\n                ])\n              ])\n            ])\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"action-description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"This sample demonstrates the integration of avatar component with badges to create notification avatars.\"\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"The avatar can be used with badges to indicate the new activities to users. The container needs\\n            \"\n            ),\n            _c(\"code\", [_vm._v(\"position: relative\")]),\n            _vm._v(\n              \" property to achieve the notifications styled avatar. In this sample, the wrapper is applied with\\n            \"\n            ),\n            _c(\"code\", [_vm._v(\"position: relative\")]),\n            _vm._v(\n              \" property with avatar and badge elements inside it.\\n        \"\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"Since the avatar is a supportive and dependent component, it can be used in many ways and have wide variety of use-cases.\"\n            )\n          ])\n        ])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/badge/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });