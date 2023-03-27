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
/******/ 		"menu/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/menu/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/menu/template/App.vue":
/*!***************************************!*\
  !*** ./Samples/menu/template/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=097eef50& */ \"./Samples/menu/template/App.vue?vue&type=template&id=097eef50&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/menu/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_097eef50_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=097eef50&lang=css& */ \"./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/menu/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/menu/template/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&":
/*!************************************************************************************!*\
  !*** ./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_097eef50_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=097eef50&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_097eef50_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_097eef50_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_097eef50_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_097eef50_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/App.vue?vue&type=template&id=097eef50&":
/*!**********************************************************************!*\
  !*** ./Samples/menu/template/App.vue?vue&type=template&id=097eef50& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=097eef50& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=template&id=097eef50&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/main.js":
/*!***************************************!*\
  !*** ./Samples/menu/template/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/menu/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/menu/template/main.js?");

/***/ }),

/***/ "./Samples/menu/template/template-data.json":
/*!**************************************************!*\
  !*** ./Samples/menu/template/template-data.json ***!
  \**************************************************/
/*! exports provided: templateData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"templateData\\\":[{\\\"category\\\":\\\"Products\\\",\\\"options\\\":[{\\\"value\\\":\\\"JavaScript\\\",\\\"url\\\":\\\"src/menu/images/javascript.png\\\"},{\\\"value\\\":\\\"Angular\\\",\\\"url\\\":\\\"src/menu/images/angular.png\\\"},{\\\"value\\\":\\\"ASP.NET Core\\\",\\\"url\\\":\\\"src/menu/images/core.png\\\"},{\\\"value\\\":\\\"ASP.NET MVC\\\",\\\"url\\\":\\\"src/menu/images/mvc.png\\\"}]},{\\\"category\\\":\\\"Services\\\",\\\"options\\\":[{\\\"value\\\":\\\"Application Development\\\",\\\"count\\\":\\\"1200+\\\"},{\\\"value\\\":\\\"Maintenance & Support\\\",\\\"count\\\":\\\"3700+\\\"},{\\\"value\\\":\\\"Quality Assurance\\\"},{\\\"value\\\":\\\"Cloud Integration\\\",\\\"count\\\":\\\"900+\\\"}]},{\\\"category\\\":\\\"About Us\\\",\\\"options\\\":[{\\\"id\\\":\\\"about\\\",\\\"about\\\":{\\\"value\\\":\\\"We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses.\\\"}}]},{\\\"category\\\":\\\"Careers\\\"},{\\\"category\\\":\\\"Sign In\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/menu/template/template-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* EJ2 Menu - template sample styles */\\n.template-menu-control {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n/* Common ul & li styles */\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul,\\n.e-template-menu.e-menu-wrapper ul.e-ul {\\n    padding: 0;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item,\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item {\\n    display: flex;\\n    padding: 0 10px;\\n    outline-color: transparent;\\n}\\n.e-template-menu.e-menu-wrapper .e-ul .e-menu-item{\\n    height: 36px;\\n    line-height: 36px;\\n}\\n\\n/** Avatar customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    background-color: inherit;\\n    font-size: 8px;\\n    margin-right: 8px;\\n    align-self: center;\\n    width: auto;\\n    overflow: visible;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    font-size: 10px;\\n}\\n\\n/** Badge customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-badge {\\n    margin-left: 10px;\\n    align-self: center;\\n    overflow: visible;\\n}\\n\\n/** Card customization */\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 290px;\\n    font-size: inherit;\\n    background-color: inherit;\\n    border-color: transparent;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 320px;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-content {\\n    white-space: normal;\\n    color: inherit;\\n    padding-top: 0;\\n    text-align: justify;\\n    font-size: inherit;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about {\\n    height: auto;\\n    padding: 0;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about.e-focused {\\n    background-color: transparent;\\n    outline-color: transparent;\\n    pointer-events: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/tions-vue-samples_release_21.1.1/Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqDA,uCAAuC;AACvC;IACI,iBAAiB;IACjB,mBAAmB;CACtB;AACD,2BAA2B;AAC3B;;IAEI,WAAW;CACd;AACD;;IAEI,cAAc;IACd,gBAAgB;IAChB,2BAA2B;CAC9B;AACD;IACI,aAAa;IACb,kBAAkB;CACrB;;AAED,2BAA2B;AAC3B;IACI,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;CACrB;AACD;IACI,gBAAgB;CACnB;;AAED,0BAA0B;AAC1B;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;CACrB;;AAED,yBAAyB;AACzB;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,0BAA0B;CAC7B;AACD;IACI,aAAa;CAChB;AACD;IACI,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,WAAW;CACd;AACD;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,qBAAqB;CACxB\",\"file\":\"App.vue?vue&type=style&index=0&id=097eef50&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* EJ2 Menu - template sample styles */\\n.template-menu-control {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n/* Common ul & li styles */\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul,\\n.e-template-menu.e-menu-wrapper ul.e-ul {\\n    padding: 0;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item,\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item {\\n    display: flex;\\n    padding: 0 10px;\\n    outline-color: transparent;\\n}\\n.e-template-menu.e-menu-wrapper .e-ul .e-menu-item{\\n    height: 36px;\\n    line-height: 36px;\\n}\\n\\n/** Avatar customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    background-color: inherit;\\n    font-size: 8px;\\n    margin-right: 8px;\\n    align-self: center;\\n    width: auto;\\n    overflow: visible;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    font-size: 10px;\\n}\\n\\n/** Badge customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-badge {\\n    margin-left: 10px;\\n    align-self: center;\\n    overflow: visible;\\n}\\n\\n/** Card customization */\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 290px;\\n    font-size: inherit;\\n    background-color: inherit;\\n    border-color: transparent;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 320px;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-content {\\n    white-space: normal;\\n    color: inherit;\\n    padding-top: 0;\\n    text-align: justify;\\n    font-size: inherit;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about {\\n    height: auto;\\n    padding: 0;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about.e-focused {\\n    background-color: transparent;\\n    outline-color: transparent;\\n    pointer-events: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _template_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-data.json */ \"./Samples/menu/template/template-data.json\");\nvar _template_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./template-data.json */ \"./Samples/menu/template/template-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"MenuPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        data: _template_data_json__WEBPACK_IMPORTED_MODULE_2__.templateData,\n        menuFields: {\n            text: ['category', 'value'],\n            children: ['options']\n        }\n    };\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=template&id=097eef50&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=template&id=097eef50& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"template-menu-control\" },\n      [\n        _c(\"ejs-menu\", {\n          attrs: {\n            items: _vm.data,\n            fields: _vm.menuFields,\n            template: \"menuTemplate\",\n            cssClass: \"e-template-menu\",\n          },\n          scopedSlots: _vm._u([\n            {\n              key: \"menuTemplate\",\n              fn: function (ref) {\n                var data = ref.data\n                return [\n                  data.category\n                    ? _c(\"span\", [_vm._v(_vm._s(data.category))])\n                    : data.value\n                    ? _c(\n                        \"div\",\n                        {\n                          staticStyle: {\n                            width: \"100%\",\n                            display: \"flex\",\n                            \"justify-content\": \"space-between\",\n                          },\n                        },\n                        [\n                          data.url\n                            ? _c(\"img\", {\n                                staticClass: \"e-avatar e-avatar-small\",\n                                attrs: { src: data.url },\n                              })\n                            : _vm._e(),\n                          _vm._v(\" \"),\n                          _c(\"span\", { staticStyle: { width: \"100%\" } }, [\n                            _vm._v(_vm._s(data.value)),\n                          ]),\n                          _vm._v(\" \"),\n                          data.count\n                            ? _c(\n                                \"span\",\n                                { staticClass: \"e-badge e-badge-success\" },\n                                [_vm._v(_vm._s(data.count))]\n                              )\n                            : _vm._e(),\n                        ]\n                      )\n                    : _c(\n                        \"div\",\n                        { staticClass: \"e-card\", attrs: { tabindex: \"0\" } },\n                        [\n                          _c(\"div\", { staticClass: \"e-card-header\" }, [\n                            _c(\n                              \"div\",\n                              { staticClass: \"e-card-header-caption\" },\n                              [\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"e-card-header-title\" },\n                                  [_vm._v(\"About Us\")]\n                                ),\n                              ]\n                            ),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"div\", { staticClass: \"e-card-content\" }, [\n                            _vm._v(_vm._s(data.about.value)),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"div\", { staticClass: \"e-card-actions\" }, [\n                            _c(\n                              \"button\",\n                              {\n                                staticClass: \"e-btn e-outline\",\n                                staticStyle: { \"pointer-events\": \"auto\" },\n                              },\n                              [_vm._v(\"Read More\")]\n                            ),\n                          ]),\n                        ]\n                      ),\n                ]\n              },\n            },\n          ]),\n        }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates the template functionalities of the \"\n        ),\n        _c(\"code\", [_vm._v(\"menu\")]),\n        _vm._v(\" component. Interact with \"),\n        _c(\"code\", [_vm._v(\"menu\")]),\n        _vm._v(\n          \" using hover / click to display sub menu pop-up items with its customized templates.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            The menu component has an option to customize menu items using the \"\n        ),\n        _c(\"code\", [_vm._v(\"template\")]),\n        _vm._v(\n          \" property, so that the menu items can be rendered according to the requirement.\\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In this demo, the below customization are demonstrated.\\n        \\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Header menu items and the Products sub menu items represents the customization of default rendering of li elements i.e. \"\n          ),\n          _c(\"b\", [_vm._v(\"data.category\")]),\n          _vm._v(\" in template.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Services sub menu item represent the customization of li element with \"\n          ),\n          _c(\"code\", [_vm._v(\"badge\")]),\n          _vm._v(\" component.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"About Us sub menu item showed with \"),\n          _c(\"code\", [_vm._v(\"card\")]),\n          _vm._v(\" component in a single li.\"),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            For more information, you can refer to the \\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/menu/data-source-binding-and-custom-menu-items/#custom-menu-items\",\n            },\n          },\n          [_vm._v(\"\\n            templates\")]\n        ),\n        _vm._v(\" section from the documentation.\\n        \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=097eef50&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=style&index=0&id=097eef50&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2a2ad240\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });