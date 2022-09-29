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
/******/ 		"skeleton/animation/main": 0
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
/******/ 	deferredModules.push(["./Samples/skeleton/animation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/skeleton/animation/App.vue":
/*!********************************************!*\
  !*** ./Samples/skeleton/animation/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_d2e838b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d2e838b0& */ \"./Samples/skeleton/animation/App.vue?vue&type=template&id=d2e838b0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/skeleton/animation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_d2e838b0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=d2e838b0&lang=css& */ \"./Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_d2e838b0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_d2e838b0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/skeleton/animation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?");

/***/ }),

/***/ "./Samples/skeleton/animation/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/skeleton/animation/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/skeleton/animation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?");

/***/ }),

/***/ "./Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d2e838b0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=d2e838b0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d2e838b0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d2e838b0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d2e838b0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d2e838b0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?");

/***/ }),

/***/ "./Samples/skeleton/animation/App.vue?vue&type=template&id=d2e838b0&":
/*!***************************************************************************!*\
  !*** ./Samples/skeleton/animation/App.vue?vue&type=template&id=d2e838b0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d2e838b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=d2e838b0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/skeleton/animation/App.vue?vue&type=template&id=d2e838b0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d2e838b0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d2e838b0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?");

/***/ }),

/***/ "./Samples/skeleton/animation/main.js":
/*!********************************************!*\
  !*** ./Samples/skeleton/animation/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/skeleton/animation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.skeleton-animation .col-sm-6 {\\n     padding: 30px;\\n     min-height: 350px;\\n     position: relative;\\n}\\n#reloadSkeleton {\\n     margin-left: 30px;\\n}\\n\\n /* Skeleton customization */\\n.skeleton-animation .e-card {    \\n     display: block;\\n}\\n#skeletondatacard,\\n #skeletonCard {\\n     padding: 10px;\\n     line-height: inherit;\\n     height: 420px;\\n}\\n.skeleton-animation .cardProfile {\\n     float: left;\\n     margin-right: 15px;\\n}\\n.skeleton-animation .cardinfo {\\n     margin-top: 10px;\\n     overflow: hidden;\\n}\\n.skeleton-animation #skeleton-list,\\n.skeleton-animation .cardinfo label {\\n     margin: 0;\\n     white-space: nowrap;\\n}\\n.skeleton-animation .cardContent {\\n     margin: 20px 0px 30px;\\n}\\n.skeleton-animation .cardoptions {\\n     display: flex;\\n     justify-content: space-between;\\n}\\n.skeleton-animation .cardoptions>div {\\n     min-width: 60px;\\n}\\n#skeleton-list {\\n     padding-left: 12px;\\n     padding-top: 7px;\\n     height: 420px;\\n     line-height: inherit;\\n}\\n#skeleton-list li {\\n     list-style: none;\\n     display: flow-root;\\n     margin-bottom: 9px;\\n}\\n.skeleton-animation .listProfile {\\n     float: left;\\n     margin-right: 15px;\\n     width: 40px;\\n     height: 40px;\\n}\\n.skeleton-animation .listCtn {\\n     margin: 5px 0px;\\n     width: 80%;\\n     height: 14px;\\n}\\n.skeleton-animation .distCtn {\\n     width: 60%;\\n     height: 14px;\\n}\\n.skeleton-animation .image.profile-image {\\n     background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/profile.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n     background-size: 60px 60px;\\n     height: 60px;\\n     width: 60px;\\n     border-radius: 50%;\\n}\\n.skeleton-animation .image.post-image {\\n     background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/post.jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n     -webkit-background-size: cover;\\n     -moz-background-size: cover;\\n     -o-background-size: cover;\\n     background-size: cover;\\n     background-position: center;\\n     height: 250px;\\n     width: 100%;\\n}\\n\\n /* List view customization */\\n#skeleton-listview .e-list-item .e-avatar {\\n     color: white;\\n}\\n#skeleton-listview .e-list-item:nth-child(1) .e-avatar {\\n     background-color: #039be5;\\n}\\n#skeleton-listview .e-list-item:nth-child(2) .e-avatar {\\n     background-color: #e91e63;\\n}\\n#skeleton-listview .e-list-item:nth-child(6) .e-avatar {\\n     background-color: #009688;\\n}\\n#skeleton-listview .e-list-item:nth-child(8) .e-avatar {\\n     background-color: #0088;\\n}\\n#skeleton-listview .pic01 {\\n     background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n#skeleton-listview .pic02 {\\n     background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/3.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n#skeleton-listview .pic03 {\\n     background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/5.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n#skeleton-listview .pic04 {\\n     background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/2.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-PSBVH5LQFJBAXSBHFQ46PQJOQ6CYMUXP7LNGLLFY5DHKQNGTAQNA/Samples/skeleton/animation/App.vue?vue&type=style&index=0&id=d2e838b0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,cAAc;KACd,kBAAkB;KAClB,mBAAmB;CACvB;AACD;KACK,kBAAkB;CACtB;;CAEA,4BAA4B;AAC7B;KACK,eAAe;CACnB;AACD;;KAEK,cAAc;KACd,qBAAqB;KACrB,cAAc;CAClB;AACD;KACK,YAAY;KACZ,mBAAmB;CACvB;AACD;KACK,iBAAiB;KACjB,iBAAiB;CACrB;AACD;;KAEK,UAAU;KACV,oBAAoB;CACxB;AACD;KACK,sBAAsB;CAC1B;AACD;KACK,cAAc;KACd,+BAA+B;CACnC;AACD;KACK,gBAAgB;CACpB;AACD;KACK,mBAAmB;KACnB,iBAAiB;KACjB,cAAc;KACd,qBAAqB;CACzB;AACD;KACK,iBAAiB;KACjB,mBAAmB;KACnB,mBAAmB;CACvB;AACD;KACK,YAAY;KACZ,mBAAmB;KACnB,YAAY;KACZ,aAAa;CACjB;AACD;KACK,gBAAgB;KAChB,WAAW;KACX,aAAa;CACjB;AACD;KACK,WAAW;KACX,aAAa;CACjB;AACD;KACK,gDAA8C;KAC9C,2BAA2B;KAC3B,aAAa;KACb,YAAY;KACZ,mBAAmB;CACvB;AACD;KACK,0CAAqC;KACrC,+BAA+B;KAC/B,4BAA4B;KAC5B,0BAA0B;KAC1B,uBAAuB;KACvB,4BAA4B;KAC5B,cAAc;KACd,YAAY;CAChB;;CAEA,6BAA6B;AAC9B;KACK,aAAa;CACjB;AACD;KACK,0BAA0B;CAC9B;AACD;KACK,0BAA0B;CAC9B;AACD;KACK,0BAA0B;CAC9B;AACD;KACK,wBAAwB;CAC5B;AACD;KACK,gDAAwC;CAC5C;AACD;KACK,gDAAwC;CAC5C;AACD;KACK,gDAAwC;CAC5C;AACD;KACK,gDAAwC;CAC5C\",\"file\":\"App.vue?vue&type=style&index=0&id=d2e838b0&lang=css&\",\"sourcesContent\":[\"\\n.skeleton-animation .col-sm-6 {\\n     padding: 30px;\\n     min-height: 350px;\\n     position: relative;\\n}\\n#reloadSkeleton {\\n     margin-left: 30px;\\n}\\n\\n /* Skeleton customization */\\n.skeleton-animation .e-card {    \\n     display: block;\\n}\\n#skeletondatacard,\\n #skeletonCard {\\n     padding: 10px;\\n     line-height: inherit;\\n     height: 420px;\\n}\\n.skeleton-animation .cardProfile {\\n     float: left;\\n     margin-right: 15px;\\n}\\n.skeleton-animation .cardinfo {\\n     margin-top: 10px;\\n     overflow: hidden;\\n}\\n.skeleton-animation #skeleton-list,\\n.skeleton-animation .cardinfo label {\\n     margin: 0;\\n     white-space: nowrap;\\n}\\n.skeleton-animation .cardContent {\\n     margin: 20px 0px 30px;\\n}\\n.skeleton-animation .cardoptions {\\n     display: flex;\\n     justify-content: space-between;\\n}\\n.skeleton-animation .cardoptions>div {\\n     min-width: 60px;\\n}\\n#skeleton-list {\\n     padding-left: 12px;\\n     padding-top: 7px;\\n     height: 420px;\\n     line-height: inherit;\\n}\\n#skeleton-list li {\\n     list-style: none;\\n     display: flow-root;\\n     margin-bottom: 9px;\\n}\\n.skeleton-animation .listProfile {\\n     float: left;\\n     margin-right: 15px;\\n     width: 40px;\\n     height: 40px;\\n}\\n.skeleton-animation .listCtn {\\n     margin: 5px 0px;\\n     width: 80%;\\n     height: 14px;\\n}\\n.skeleton-animation .distCtn {\\n     width: 60%;\\n     height: 14px;\\n}\\n.skeleton-animation .image.profile-image {\\n     background-image: url('./images/profile.png');\\n     background-size: 60px 60px;\\n     height: 60px;\\n     width: 60px;\\n     border-radius: 50%;\\n}\\n.skeleton-animation .image.post-image {\\n     background: url('./images/post.jpg');\\n     -webkit-background-size: cover;\\n     -moz-background-size: cover;\\n     -o-background-size: cover;\\n     background-size: cover;\\n     background-position: center;\\n     height: 250px;\\n     width: 100%;\\n}\\n\\n /* List view customization */\\n#skeleton-listview .e-list-item .e-avatar {\\n     color: white;\\n}\\n#skeleton-listview .e-list-item:nth-child(1) .e-avatar {\\n     background-color: #039be5;\\n}\\n#skeleton-listview .e-list-item:nth-child(2) .e-avatar {\\n     background-color: #e91e63;\\n}\\n#skeleton-listview .e-list-item:nth-child(6) .e-avatar {\\n     background-color: #009688;\\n}\\n#skeleton-listview .e-list-item:nth-child(8) .e-avatar {\\n     background-color: #0088;\\n}\\n#skeleton-listview .pic01 {\\n     background-image: url(\\\"./images/1.png\\\");\\n}\\n#skeleton-listview .pic02 {\\n     background-image: url(\\\"./images/3.png\\\");\\n}\\n#skeleton-listview .pic03 {\\n     background-image: url(\\\"./images/5.png\\\");\\n}\\n#skeleton-listview .pic04 {\\n     background-image: url(\\\"./images/2.png\\\");\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/skeleton/animation/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/skeleton/animation/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-notifications */ \"./node_modules/@syncfusion/ej2-vue-notifications/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__[\"SkeletonPlugin\"],_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__[\"ListViewPlugin\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n    return {\n      isDataLoaded:false,\n      contactdata: [],\n      cardname: \"\",\n      cardtime: \"\",\n      cardProfileImage: \"image e-avatar\",\n      cardPostImage: \"image\",\n      fields: {text: 'text'},\n    };\n  },\n  methods:{\n     getData:function() {\n        return new Promise(function(resolve){ \n            setTimeout(function() {\n                var data = {};\n                data.listdata = [\n                    { text: \"Jenifer\", contact: \"(206) 555-985774\", id: \"1\", avatar: \"\", pic: \"pic01\" },\n                    { text: \"Amenda\", contact: \"(206) 555-3412\", id: \"2\", avatar: \"A\", pic: \"\" },\n                    { text: \"Isabella\", contact: \"(206) 555-8122\", id: \"4\", avatar: \"\", pic: \"pic02\" },\n                    { text: \"William \", contact: \"(206) 555-9482\", id: \"5\", avatar: \"W\", pic: \"\" },\n                    { text: \"Jacob\", contact: \"(71) 555-4848\", id: \"6\", avatar: \"\", pic: \"pic04\" },\n                    { text: \"Matthew\", contact: \"(71) 555-7773\", id: \"7\", avatar: \"M\", pic: \"\" },\n                    { text: \"Oliver\", contact: \"(71) 555-5598\", id: \"8\", avatar: \"\", pic: \"pic03\" },\n                    { text: \"Charlotte\", contact: \"(206) 555-1189\", id: \"9\", avatar: \"C\", pic: \"\" }\n                ];\n                data.name = 'Laura Callahan';\n                data.time = new Date().toLocaleString();\n                resolve(data);\n            }, 3000);\n        });\n    },\n    loadData:function() {\n        this.getData().then((data)=>{\n            this.cardProfileImage = \"image profile-image e-avatar\";\n            this.cardname = data.name;\n            this.cardtime = data.time;\n            this.cardPostImage = \"image post-image\";\n            this.contactdata = data.listdata;\n            this.isDataLoaded = true;\n        });\n    },\n    reloadClick:function() {\n        if (this.isDataLoaded) {\n            this.isDataLoaded = false;\n            this.cardProfileImage = \"image e-avatar\";\n            this.cardname =\"\";\n            this.cardtime = \"\";\n            this.cardPostImage = \"image\";\n            this.contactdata =[];\n            this.loadData();\n        }\n    },\n  },\n  mounted() {\n   this.loadData()\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/skeleton/animation/App.vue?vue&type=template&id=d2e838b0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/skeleton/animation/App.vue?vue&type=template&id=d2e838b0& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"row skeleton-animation\"},[_c('div',[_c('ejs-button',{staticClass:\"e-primary\",attrs:{\"id\":\"reloadSkeleton\"},nativeOn:{\"click\":function($event){return _vm.reloadClick.apply(null, arguments)}}},[_vm._v(\"Reload\")])],1),_vm._v(\" \"),_c('div',{staticClass:\"col-sm-6\"},[_c('h5',[_vm._v(\"Fade Effect\")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),(_vm.isDataLoaded)?_c('div',{staticClass:\"e-card\",attrs:{\"id\":\"skeletondatacard\"}},[_c('div',{staticClass:\"cardProfile\"},[_c('div',{class:_vm.cardProfileImage})]),_vm._v(\" \"),_c('div',{staticClass:\"cardinfo\"},[_c('label',{staticStyle:{\"font-size\":\"15px\"},attrs:{\"id\":\"name\"}},[_vm._v(_vm._s(_vm.cardname))]),_c('br'),_vm._v(\" \"),_c('label',{staticStyle:{\"font-weight\":\"normal\"},attrs:{\"id\":\"time\"}},[_vm._v(_vm._s(_vm.cardtime))])]),_vm._v(\" \"),_c('div',{staticClass:\"cardContent\"},[_c('div',{class:_vm.cardPostImage})]),_vm._v(\" \"),_vm._m(0)]):_c('div',{staticClass:\"e-card\",attrs:{\"id\":\"skeletonCard\"}},[_c('div',{staticClass:\"cardProfile\"},[_c('ejs-skeleton',{attrs:{\"id\":\"cardProfile\",\"shape\":\"Circle\",\"width\":\"60px\",\"shimmerEffect\":\"Fade\"}})],1),_vm._v(\" \"),_c('div',{staticClass:\"cardinfo\"},[_c('ejs-skeleton',{attrs:{\"id\":\"cardText1\",\"width\":\"30%\",\"height\":\"15px\",\"shimmerEffect\":\"Fade\"}}),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('ejs-skeleton',{attrs:{\"id\":\"cardText2\",\"width\":\"15%\",\"height\":\"15px\",\"shimmerEffect\":\"Fade\"}})],1),_vm._v(\" \"),_c('div',{staticClass:\"cardContent\"},[_c('ejs-skeleton',{attrs:{\"id\":\"cardContent\",\"shape\":\"Rectangle\",\"width\":\"100%\",\"height\":\"250px\",\"shimmerEffect\":\"Fade\"}})],1),_vm._v(\" \"),_c('div',{staticClass:\"cardoptions\"},[_c('ejs-skeleton',{attrs:{\"id\":\"cardLeftOptn\",\"shape\":\"Rectangle\",\"width\":\"20%\",\"height\":\"32px\",\"shimmerEffect\":\"Fade\"}}),_vm._v(\" \"),_c('ejs-skeleton',{attrs:{\"id\":\"cardRightOptn\",\"shape\":\"Rectangle\",\"width\":\"20%\",\"height\":\"32px\",\"shimmerEffect\":\"Fade\"}})],1)])]),_vm._v(\" \"),_c('div',{staticClass:\"col-sm-6\"},[_c('h5',[_vm._v(\"Pulse Effect\")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),(_vm.isDataLoaded)?_c('ejs-listview',{ref:\"listObj\",attrs:{\"id\":\"skeleton-listview\",\"height\":\"420px\",\"dataSource\":_vm.contactdata,\"cssClass\":\"e-list-template e-card\",\"template\":'listTemplate',\"sortOrder\":\"Ascending\"},scopedSlots:_vm._u([{key:\"listTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('div',{staticClass:\"e-list-wrapper e-list-multi-line e-list-avatar\"},[(data.avatar !== '')?_c('span',{class:['e-avatar e-avatar-circle']},[_vm._v(_vm._s(data.avatar))]):_vm._e(),_vm._v(\" \"),(data.pic !== '' )?_c('span',{class:[data.pic + ' e-avatar e-avatar-circle']}):_vm._e(),_vm._v(\" \"),_c('span',{staticClass:\"e-list-item-header\"},[_vm._v(_vm._s(data.text))]),_vm._v(\" \"),_c('span',{staticClass:\"e-list-content\"},[_vm._v(_vm._s(data.contact))])])]}}],null,false,1651373543)}):_c('ul',{staticClass:\"e-card\",attrs:{\"id\":\"skeleton-list\"}},_vm._l((8),function(n){return _c('li',{key:n},[_c('ejs-skeleton',{staticClass:\"listProfile\",attrs:{\"shape\":\"Circle\",\"shimmerEffect\":\"Pulse\"}}),_vm._v(\" \"),_c('div',[_c('ejs-skeleton',{staticClass:\"listCtn\",attrs:{\"width\":\"80%\",\"shimmerEffect\":\"Pulse\"}}),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('ejs-skeleton',{staticClass:\"distCtn\",attrs:{\"width\":\"60%\",\"shimmerEffect\":\"Pulse\"}})],1)],1)}),0)],1)]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"cardoptions\"},[_c('div',{staticStyle:{\"width\":\"20%\"},attrs:{\"id\":\"cardLeftOptn\"}},[_c('button',{staticClass:\"e-btn e-outline e-primary\",staticStyle:{\"width\":\"100%\"}},[_vm._v(\"Like\")])]),_vm._v(\" \"),_c('div',{staticStyle:{\"width\":\"20%\"},attrs:{\"id\":\"cardRightOptn\"}},[_c('button',{staticClass:\"e-btn e-primary\",staticStyle:{\"width\":\"100%\"}},[_vm._v(\"Share\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This sample demonstrates the fade and pulse shimmer effects of the skeleton with a card and a list layout. Click the reload button to load data to the card and list with a skeleton to show loading.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            The default skeleton shimmer effect is wave. This can be changed to \"),_c('b',[_vm._v(\"Fade\")]),_vm._v(\" and \"),_c('b',[_vm._v(\"Pulse\")]),_vm._v(\" shimmer effects using the \"),_c('code',[_vm._v(\"shimmerEffect\")]),_vm._v(\" property.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/skeleton/animation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });