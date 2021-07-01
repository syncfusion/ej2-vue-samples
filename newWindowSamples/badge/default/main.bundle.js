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
/******/ 		"badge/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/badge/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/badge/default/App.vue":
/*!***************************************!*\
  !*** ./Samples/badge/default/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3bd953fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3bd953fa& */ \"./Samples/badge/default/App.vue?vue&type=template&id=3bd953fa&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/badge/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_3bd953fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3bd953fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/badge/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/badge/default/App.vue?");

/***/ }),

/***/ "./Samples/badge/default/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./Samples/badge/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/badge/default/App.vue?");

/***/ }),

/***/ "./Samples/badge/default/App.vue?vue&type=template&id=3bd953fa&":
/*!**********************************************************************!*\
  !*** ./Samples/badge/default/App.vue?vue&type=template&id=3bd953fa& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bd953fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3bd953fa& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/default/App.vue?vue&type=template&id=3bd953fa&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bd953fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bd953fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/badge/default/App.vue?");

/***/ }),

/***/ "./Samples/badge/default/main.js":
/*!***************************************!*\
  !*** ./Samples/badge/default/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/badge/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/badge/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/default/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.badge-default .control-section {\\n    overflow: auto;\\n}\\n.badge-default .sample_container {\\n    max-width: 328px;\\n    margin: auto;\\n    margin-top: 130px;\\n}\\n.badge-default .e-btn {\\n    position: relative;\\n}\\n.badge-default .e-bigger .e-btn {\\n    padding: 3px 10px;\\n}\\n@media only screen and (max-width: 400px) {\\n.badge-default .sample_container .e-btn-group {\\n        left: calc(50% - 111px);\\n}\\n.badge-default .sample_container #task {\\n        display: none;\\n}\\n}\\n\\n/* Group Button Customization */\\n.badge-default .e-btn-group {\\n    width: auto;\\n    position: relative;\\n    left: calc(50% - 164px);\\n}\\n.badge-default .e-btn-group.e-custom-button {\\n    box-shadow: none;\\n}\\n.highcontrast .badge-default .e-btn-group.e-custom-button .e-btn:focus {\\n    outline: 0px;\\n    color: white;\\n}\\n.fabric .badge-default .e-btn-group.e-custom-button .e-btn,\\n.material .badge-default .e-btn-group.e-custom-button .e-btn,\\n.bootstrap .badge-default .e-btn-group.e-custom-button .e-btn {\\n    background: #F6F7F9;\\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\\n    text-transform: initial;\\n}\\n.badge-default #update.e-btn {\\n    border-bottom-left-radius: 8px;\\n    border-top-left-radius: 8px;\\n    border-right: 1px dotted #aaa;\\n    width: 100px;\\n}\\n.badge-default #task.e-btn {\\n    border-right: 1px dotted #aaa;\\n    width: 100px;\\n}\\n.badge-default #notify.e-btn {\\n    padding-left: 24px;\\n    padding-right: 24px;\\n    border-bottom-right-radius: 8px;\\n    border-top-right-radius: 8px;\\n}\\n.badge-default .default .e-badge.e-badge-overlap {\\n    transform: translateX(-110%);\\n    z-index: 100;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-OKSCHYEDL5Q4MAACC43OJVA4LT4RJZH6V5T4UUHQSKA26RT46Y7Q/Samples/badge/default/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;CACrB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,kBAAkB;CACrB;AACD;AACA;QACQ,wBAAwB;CAC/B;AACD;QACQ,cAAc;CACrB;CACA;;AAED,gCAAgC;AAChC;IACI,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;CAC3B;AACD;IACI,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,aAAa;CAChB;AACD;;;IAGI,oBAAoB;IACpB,gHAAgH;IAChH,wBAAwB;CAC3B;AACD;IACI,+BAA+B;IAC/B,4BAA4B;IAC5B,8BAA8B;IAC9B,aAAa;CAChB;AACD;IACI,8BAA8B;IAC9B,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,gCAAgC;IAChC,6BAA6B;CAChC;AACD;IACI,6BAA6B;IAC7B,aAAa;CAChB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.badge-default .control-section {\\n    overflow: auto;\\n}\\n.badge-default .sample_container {\\n    max-width: 328px;\\n    margin: auto;\\n    margin-top: 130px;\\n}\\n.badge-default .e-btn {\\n    position: relative;\\n}\\n.badge-default .e-bigger .e-btn {\\n    padding: 3px 10px;\\n}\\n@media only screen and (max-width: 400px) {\\n.badge-default .sample_container .e-btn-group {\\n        left: calc(50% - 111px);\\n}\\n.badge-default .sample_container #task {\\n        display: none;\\n}\\n}\\n\\n/* Group Button Customization */\\n.badge-default .e-btn-group {\\n    width: auto;\\n    position: relative;\\n    left: calc(50% - 164px);\\n}\\n.badge-default .e-btn-group.e-custom-button {\\n    box-shadow: none;\\n}\\n.highcontrast .badge-default .e-btn-group.e-custom-button .e-btn:focus {\\n    outline: 0px;\\n    color: white;\\n}\\n.fabric .badge-default .e-btn-group.e-custom-button .e-btn,\\n.material .badge-default .e-btn-group.e-custom-button .e-btn,\\n.bootstrap .badge-default .e-btn-group.e-custom-button .e-btn {\\n    background: #F6F7F9;\\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\\n    text-transform: initial;\\n}\\n.badge-default #update.e-btn {\\n    border-bottom-left-radius: 8px;\\n    border-top-left-radius: 8px;\\n    border-right: 1px dotted #aaa;\\n    width: 100px;\\n}\\n.badge-default #task.e-btn {\\n    border-right: 1px dotted #aaa;\\n    width: 100px;\\n}\\n.badge-default #notify.e-btn {\\n    padding-left: 24px;\\n    padding-right: 24px;\\n    border-bottom-right-radius: 8px;\\n    border-top-right-radius: 8px;\\n}\\n.badge-default .default .e-badge.e-badge-overlap {\\n    transform: translateX(-110%);\\n    z-index: 100;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/badge/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/default/App.vue?vue&type=template&id=3bd953fa&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/default/App.vue?vue&type=template&id=3bd953fa& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"badge-default\" }, [\n      _c(\"div\", { staticClass: \"col-lg-12 control-section default\" }, [\n        _c(\"div\", { staticClass: \"sample_container\" }, [\n          _c(\"div\", { staticClass: \"e-btn-group e-custom-button\" }, [\n            _c(\"button\", { staticClass: \"e-btn\", attrs: { id: \"update\" } }, [\n              _vm._v(\"Updates\\n                    \"),\n              _vm._v(\" \"),\n              _c(\n                \"span\",\n                {\n                  staticClass:\n                    \"e-badge e-badge-info e-badge-notification e-badge-overlap\"\n                },\n                [_vm._v(\"14\")]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"button\", { staticClass: \"e-btn\", attrs: { id: \"task\" } }, [\n              _vm._v(\"Tasks\\n                    \"),\n              _vm._v(\" \"),\n              _c(\n                \"span\",\n                {\n                  staticClass:\n                    \"e-badge e-badge-success e-badge-notification e-badge-overlap\"\n                },\n                [_vm._v(\"48\")]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"button\", { staticClass: \"e-btn\", attrs: { id: \"notify\" } }, [\n              _vm._v(\"Notifications\\n                    \"),\n              _vm._v(\" \"),\n              _c(\n                \"span\",\n                {\n                  staticClass:\n                    \"e-badge e-badge-secondary e-badge-notification e-badge-overlap\"\n                },\n                [_vm._v(\"99\")]\n              )\n            ])\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"action-description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"This sample demonstrates the default functionalities of the badge. To apply the badge, add\\n        \"\n          ),\n          _c(\"code\", [_vm._v(\".e-badge\")]),\n          _vm._v(\" class to the target element.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"\\n            The Badge is a component which is developed in pure CSS and designed in\\n            \"\n          ),\n          _c(\"code\", [_vm._v(\"em\")]),\n          _vm._v(\n            \" relative units, so that badge will always be in relevant to the parent and makes the badge super easy to customize.\\n        \"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"For example, to increase the size of the badge, increase the font-size, width, and height.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [_vm._v(\"There are 6 different types of badges as follows: \")]),\n        _vm._v(\" \"),\n        _c(\"ul\", [\n          _c(\"li\", [\n            _vm._v(\n              \"Default badge: To get the default badge, add the\\n                \"\n            ),\n            _c(\"code\", [_vm._v(\".e-badge\")]),\n            _vm._v(\" class to the target element.\\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\n              \"Notification badge: To get the notification badge, add the\\n                \"\n            ),\n            _c(\"code\", [_vm._v(\".e-badge-notification\")]),\n            _vm._v(\" class with\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge\")]),\n            _vm._v(\" and change the wrapper element to\\n                \"),\n            _c(\"code\", [_vm._v(\"position: relative\")]),\n            _vm._v(\" property.\\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\n              \"Circle badge: To get the circle badge, add the\\n                \"\n            ),\n            _c(\"code\", [_vm._v(\".e-badge-circle\")]),\n            _vm._v(\" class with\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge\")]),\n            _vm._v(\".\\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\n              \"Pill badge: To get the pill badge, add the\\n                \"\n            ),\n            _c(\"code\", [_vm._v(\".e-badge-pill\")]),\n            _vm._v(\" class with\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge\")]),\n            _vm._v(\".\\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\n              \"Dot badge: To get the dot badge, add the\\n                \"\n            ),\n            _c(\"code\", [_vm._v(\".e-badge-dot\")]),\n            _vm._v(\" class with\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge\")]),\n            _vm._v(\" and change the wrapper element to\\n                \"),\n            _c(\"code\", [_vm._v(\"position: relative\")]),\n            _vm._v(\" property.\\n            \")\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"The badge component supports two positions, and this is applicable only to notification and dot badge.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"ul\", [\n          _c(\"li\", [\n            _vm._v(\n              \"Top: It is the default position, so there is no additional class needed for the top position.\"\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\n              \"Bottom: To get the bottom badge, add the\\n                \"\n            ),\n            _c(\"code\", [_vm._v(\".e-.badge-bottom\")]),\n            _vm._v(\" class with\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge\")]),\n            _vm._v(\".\")\n          ])\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/badge/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });