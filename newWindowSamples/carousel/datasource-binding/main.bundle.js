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
/******/ 		"carousel/datasource-binding/main": 0
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
/******/ 	deferredModules.push(["./Samples/carousel/datasource-binding/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/carousel/datasource-binding/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/carousel/datasource-binding/App.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_c214f38c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c214f38c& */ \"./Samples/carousel/datasource-binding/App.vue?vue&type=template&id=c214f38c&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/carousel/datasource-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_c214f38c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=c214f38c&lang=css& */ \"./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_c214f38c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_c214f38c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/carousel/datasource-binding/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?");

/***/ }),

/***/ "./Samples/carousel/datasource-binding/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/carousel/datasource-binding/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?");

/***/ }),

/***/ "./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c214f38c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=c214f38c&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c214f38c_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c214f38c_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c214f38c_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c214f38c_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?");

/***/ }),

/***/ "./Samples/carousel/datasource-binding/App.vue?vue&type=template&id=c214f38c&":
/*!************************************************************************************!*\
  !*** ./Samples/carousel/datasource-binding/App.vue?vue&type=template&id=c214f38c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c214f38c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c214f38c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=template&id=c214f38c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c214f38c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c214f38c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?");

/***/ }),

/***/ "./Samples/carousel/datasource-binding/main.js":
/*!*****************************************************!*\
  !*** ./Samples/carousel/datasource-binding/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/carousel/datasource-binding/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.db-carousel-section .carousel-sample {\\n  border: 1px solid #e5e5e5;\\n  border-radius: 0.5em;\\n  margin: 0 auto 2em;\\n  max-width: 420px;\\n  height: 420px;\\n}\\n.db-carousel {\\n  background-color: inherit;\\n  border-radius: 0.5em;\\n}\\n.db-carousel .e-carousel-items .e-carousel-item .card-title,\\n.db-carousel .e-carousel-items .e-carousel-item .card-text {\\n  opacity: 0;\\n  text-align: justify;\\n  transform: translateY(20px);\\n}\\n.db-carousel .e-carousel-items .e-carousel-item.e-active .card-title,\\n.db-carousel .e-carousel-items .e-carousel-item.e-active .card-text {\\n  opacity: 1;\\n  transform: translateY(0px);\\n}\\n.db-carousel .e-carousel-items .e-carousel-item .card-title {\\n  font-size: 20px;\\n  transition: transform 0.4s ease 0.2s;\\n}\\n.db-carousel .e-carousel-items .e-carousel-item .card-text {\\n  font-size: 14px;\\n  transition: transform 0.4s ease 0.2s;\\n}\\n.db-carousel .e-carousel-indicators {\\n  height: 3em;\\n}\\n.db-carousel .e-carousel-indicators.e-default .e-indicator-bar .e-indicator div {\\n  background-color: #e7e7e7;\\n}\\n@media screen and (max-width: 480px) {\\n.db-carousel-section .carousel-sample {\\n    width: 100%;\\n    height: 440px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/tions-vue-samples_release_22.1.1/Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;CACf;AACD;EACE,0BAA0B;EAC1B,qBAAqB;CACtB;AACD;;EAEE,WAAW;EACX,oBAAoB;EACpB,4BAA4B;CAC7B;AACD;;EAEE,WAAW;EACX,2BAA2B;CAC5B;AACD;EACE,gBAAgB;EAChB,qCAAqC;CACtC;AACD;EACE,gBAAgB;EAChB,qCAAqC;CACtC;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;CAC3B;AACD;AACA;IACI,YAAY;IACZ,cAAc;CACjB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=c214f38c&lang=css&\",\"sourcesContent\":[\"\\n.db-carousel-section .carousel-sample {\\n  border: 1px solid #e5e5e5;\\n  border-radius: 0.5em;\\n  margin: 0 auto 2em;\\n  max-width: 420px;\\n  height: 420px;\\n}\\n.db-carousel {\\n  background-color: inherit;\\n  border-radius: 0.5em;\\n}\\n.db-carousel .e-carousel-items .e-carousel-item .card-title,\\n.db-carousel .e-carousel-items .e-carousel-item .card-text {\\n  opacity: 0;\\n  text-align: justify;\\n  transform: translateY(20px);\\n}\\n.db-carousel .e-carousel-items .e-carousel-item.e-active .card-title,\\n.db-carousel .e-carousel-items .e-carousel-item.e-active .card-text {\\n  opacity: 1;\\n  transform: translateY(0px);\\n}\\n.db-carousel .e-carousel-items .e-carousel-item .card-title {\\n  font-size: 20px;\\n  transition: transform 0.4s ease 0.2s;\\n}\\n.db-carousel .e-carousel-items .e-carousel-item .card-text {\\n  font-size: 14px;\\n  transition: transform 0.4s ease 0.2s;\\n}\\n.db-carousel .e-carousel-indicators {\\n  height: 3em;\\n}\\n.db-carousel .e-carousel-indicators.e-default .e-indicator-bar .e-indicator div {\\n  background-color: #e7e7e7;\\n}\\n@media screen and (max-width: 480px) {\\n.db-carousel-section .carousel-sample {\\n    width: 100%;\\n    height: 440px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/datasource-binding/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"CarouselPlugin\"]);\n\nvar productVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"product\", {\n  template:\n    '<div class=\"card\">' +\n    '<img class=\"card-img-top\" :src=\"getImage\" :alt=\"getAlt\" style=\"height:210px;width:100%;\" />' +\n    '<div class=\"card-body\" style=\"padding:1rem;\">' +\n    \"<h5>{{data.Title}}</h5>\" +\n    '<p class=\"card-text\">{{data.Content}}</p>' +\n    \"</div>\" +\n    \"</div>\",\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {\n    getAlt: function (args) {\n      return args.$data.data.Title;\n    },\n    getImage: function (args) {\n      return args.$data.data.ImgPath;\n    },\n  },\n  methods: {},\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {\n      animation: \"Fade\",\n      productDetails: [\n        {\n          ID: 1,\n          Title: \"San Francisco\",\n          Content: \"San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city proper in the United States, and the fourth most populous in California.\",\n          ImgPath: \"./../../source/carousel/images/san-francisco.jpg\",\n          URL: \"https://en.wikipedia.org/wiki/San_Francisco\"\n        }, {\n          ID: 2,\n          Title: \"London\",\n          Content: \"London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.\",\n          ImgPath: \"./../../source/carousel/images/london.jpg\",\n          URL: \"https://en.wikipedia.org/wiki/London\"\n        }, {\n          ID: 3,\n          Title: \"Tokyo\",\n          Content: \"Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.\",\n          ImgPath: \"./../../source/carousel/images/tokyo.jpg\",\n          URL: \"https://en.wikipedia.org/wiki/Tokyo\"\n        }, {\n          ID: 4,\n          Title: \"Moscow\",\n          Content: \"Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia`s symbolic center.\",\n          ImgPath: \"./../../source/carousel/images/moscow.jpg\",\n          URL: \"https://en.wikipedia.org/wiki/Moscow\"\n        },\n      ],\n      productTemplate: function (e) {\n        return {\n          template: productVue,\n        };\n      },\n    };\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=template&id=c214f38c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/datasource-binding/App.vue?vue&type=template&id=c214f38c& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section db-carousel-section\" }, [\n    _c(\"div\", { staticClass: \"col-lg-12\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"carousel-sample\" },\n        [\n          _c(\"ejs-carousel\", {\n            attrs: {\n              cssClass: \"db-carousel\",\n              dataSource: _vm.productDetails,\n              buttonsVisibility: \"Hidden\",\n              itemTemplate: _vm.productTemplate,\n              animationEffect: _vm.animation,\n            },\n          }),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _vm._m(1),\n        ],\n        1\n      ),\n    ]),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          This sample demonstrates the basic rendering of the\\n          \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"https://www.syncfusion.com/vue-ui-components/vue-carousel\",\n              target: \"_blank\",\n            },\n          },\n          [_vm._v(\"Vue Carousel\")]\n        ),\n        _vm._v(\" component by binding\\n          \"),\n        _c(\"code\", [_vm._v(\"dataSource\")]),\n        _vm._v(\" property.\\n        \"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          In this demo, products and its details available in our Syncfusion\\n          has been shown as slide show. The data to the Vue Carousel component\\n          is bound using \"\n        ),\n        _c(\"code\", [_vm._v(\"dataSource\")]),\n        _vm._v(\" property. Also,\\n          \"),\n        _c(\"code\", [_vm._v(\"itemTemplate\")]),\n        _vm._v(\n          \" is used to customize the slides of the\\n          carousel.\\n        \"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=c214f38c&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/datasource-binding/App.vue?vue&type=style&index=0&id=c214f38c&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3d4f35f9\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/carousel/datasource-binding/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });