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
/******/ 		"maps/selection/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/selection/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/selection/App.vue":
/*!****************************************!*\
  !*** ./Samples/maps/selection/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3fa7e10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3fa7e10c&scoped=true& */ \"./Samples/maps/selection/App.vue?vue&type=template&id=3fa7e10c&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css& */ \"./Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3fa7e10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3fa7e10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3fa7e10c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/selection/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/selection/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/maps/selection/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fa7e10c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/selection/App.vue?vue&type=template&id=3fa7e10c&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./Samples/maps/selection/App.vue?vue&type=template&id=3fa7e10c&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3fa7e10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3fa7e10c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/selection/App.vue?vue&type=template&id=3fa7e10c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3fa7e10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3fa7e10c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/selection/main.js":
/*!****************************************!*\
  !*** ./Samples/maps/selection/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/selection/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/selection/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#container[data-v-3fa7e10c]{\\nmargin-top: -10px;\\n}\\n.tip[data-v-3fa7e10c] {\\n     border: 1px solid #4D4D4D;\\n     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\\n     border-radius: 7px;\\n     margin-right: 25px;\\n     min-width: 110px;\\n     padding-top: 9px;\\n     padding-right: 10px;\\n     padding-left: 10px;\\n     width: auto;\\n     height: auto;\\n     background: #4D4D4D;\\n}\\n#chart[data-v-3fa7e10c]{\\n    display: none!important;\\n}\\n.popup[data-v-3fa7e10c] {\\n     border: 0.5px groove #CCCCCC;\\n     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\\n     left: 70%;\\n     top: 65%;     \\n     border-radius: 2px;\\n     display: none;\\n\\t max-width: 220px;\\n     position: absolute;\\n     padding: 1em;\\n     background: #F4F4F4;\\n}\\n.close-btn[data-v-3fa7e10c] {\\n     border: 2px solid #5B5B5B;\\n     margin-left: -9px;\\n     position: absolute;\\n     opacity: 0.8;\\n     background-color: #605F61;\\n     border-radius: 50%/50%;\\n     width: 20px;\\n     height: 19px;\\n     display: none;\\n     z-index: 1000;\\n}\\n.close-btn a[data-v-3fa7e10c] {\\n         margin-left: 2px;\\n         font-weight: bold;\\n         color: white;\\n         text-decoration: none;\\n}\\n#closebutton[data-v-3fa7e10c] {\\n    float:right;\\n\\tfont-size:16px;\\n    display:inline-block;\\n    padding:2px 5px;\\n\\tcursor:pointer;\\n    color:black;\\n}\\n.firstLine td[data-v-3fa7e10c]{\\n    border-bottom: 2px solid black;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/selection/App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;AACA,kBAAkB;CACjB;AACD;KACK,0BAA0B;KAC1B,2CAA2C;KAC3C,mBAAmB;KACnB,mBAAmB;KACnB,iBAAiB;KACjB,iBAAiB;KACjB,oBAAoB;KACpB,mBAAmB;KACnB,YAAY;KACZ,aAAa;KACb,oBAAoB;CACxB;AACD;IACI,wBAAwB;CAC3B;AACD;KACK,6BAA6B;KAC7B,2CAA2C;KAC3C,UAAU;KACV,SAAS;KACT,mBAAmB;KACnB,cAAc;EACjB,iBAAiB;KACd,mBAAmB;KACnB,aAAa;KACb,oBAAoB;CACxB;AACD;KACK,0BAA0B;KAC1B,kBAAkB;KAClB,mBAAmB;KACnB,aAAa;KACb,0BAA0B;KAC1B,uBAAuB;KACvB,YAAY;KACZ,aAAa;KACb,cAAc;KACd,cAAc;CAClB;AACD;SACS,iBAAiB;SACjB,kBAAkB;SAClB,aAAa;SACb,sBAAsB;CAC9B;AACD;IACI,YAAY;CACf,eAAe;IACZ,qBAAqB;IACrB,gBAAgB;CACnB,eAAe;IACZ,YAAY;CACf;AACD;IACI,+BAA+B;CAClC\",\"file\":\"App.vue?vue&type=style&index=0&id=3fa7e10c&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#container[data-v-3fa7e10c]{\\nmargin-top: -10px;\\n}\\n.tip[data-v-3fa7e10c] {\\n     border: 1px solid #4D4D4D;\\n     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\\n     border-radius: 7px;\\n     margin-right: 25px;\\n     min-width: 110px;\\n     padding-top: 9px;\\n     padding-right: 10px;\\n     padding-left: 10px;\\n     width: auto;\\n     height: auto;\\n     background: #4D4D4D;\\n}\\n#chart[data-v-3fa7e10c]{\\n    display: none!important;\\n}\\n.popup[data-v-3fa7e10c] {\\n     border: 0.5px groove #CCCCCC;\\n     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\\n     left: 70%;\\n     top: 65%;     \\n     border-radius: 2px;\\n     display: none;\\n\\t max-width: 220px;\\n     position: absolute;\\n     padding: 1em;\\n     background: #F4F4F4;\\n}\\n.close-btn[data-v-3fa7e10c] {\\n     border: 2px solid #5B5B5B;\\n     margin-left: -9px;\\n     position: absolute;\\n     opacity: 0.8;\\n     background-color: #605F61;\\n     border-radius: 50%/50%;\\n     width: 20px;\\n     height: 19px;\\n     display: none;\\n     z-index: 1000;\\n}\\n.close-btn a[data-v-3fa7e10c] {\\n         margin-left: 2px;\\n         font-weight: bold;\\n         color: white;\\n         text-decoration: none;\\n}\\n#closebutton[data-v-3fa7e10c] {\\n    float:right;\\n\\tfont-size:16px;\\n    display:inline-block;\\n    padding:2px 5px;\\n\\tcursor:pointer;\\n    color:black;\\n}\\n.firstLine td[data-v-3fa7e10c]{\\n    border-bottom: 2px solid black;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/selection/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/selection/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data:function(){\n      return{\n        titleSettings: {\n            text: 'USA Election Results - 2016',\n            textStyle: {\n                size: '16px'\n            }\n        },\n        legendSettings: {\n            visible: true,\n            mode: 'Interactive',\n            position: 'Top',\n            width: '80%',\n            textStyle: {\n                fontWeight: '400',\n                size: '14px'\n            }\n        },\n        zoomSettings: {\n            enable: false\n        },\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/usa.json'),\n        shapePropertyPath: 'name',\n        shapeDataPath: 'State',\n        dataSource: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/selection-datasource.json'),\n        tooltipSettings: {\n                    visible: true,\n                    valuePath: 'State'\n        },\n        highlightSettings: {\n                    enable: true,\n                    fill: '#A3B0D0'\n        },\n        selectionSettings: {\n                    enable: true,\n                    fill: '#4C515B ',\n                    opacity: 1\n        },\n        shapeSettings: {\n        colorValuePath: 'Candidate',\n        colorMapping: [\n                        {\n                            value: 'Trump', color: '#D84444'\n                        },\n                        {\n                            value: 'Clinton', color: '#316DB5'\n                        }\n                    ]\n            }\n      }\n  },\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Highlight\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"]]\n},\nmethods:{\n    /* custom code start */\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    itemSelection:function(args){\n         if (args.shapeData !== _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"isNullOrUndefined\"]) {\n                let matched = navigator.userAgent;\n                let browser = matched.toLowerCase();\n                let isIE11 = !!navigator.userAgent.match(/Trident\\/7\\./);\n                if (isIE11) {\n                    browser = 'msie';\n                }\n                let object = args.data;\n                let popup = document.getElementById('closepopup');\n                let closebutton = document.getElementById('closebutton');\n                let winner = document.getElementById('winner');\n                let state = document.getElementById('state');\n                let trumpvote = document.getElementById('trumpvotes');\n                let clintonvote = document.getElementById('clintonvotes');\n                popup.style.display = 'block';\n                closebutton.style.display = 'block';\n                closebutton.onclick = () => {\n                    let popup = document.getElementById('closepopup');\n                    let closebutton = document.getElementById('closebutton');\n                    popup.style.display = 'none';\n                    closebutton.style.display = 'none';\n                };\n\n                if (browser !== 'mozilla') {\n                    state.innerText = (args.data).State;\n                    winner.innerText = (args.data).Candidate;\n                    trumpvote.innerText = (args.data).Trump + '%';\n                    clintonvote.innerText = (args.data).Clinton + '%';\n                } else {\n                    state.textContent = (args.data).State;\n                    winner.textContent = (args.data).Candidate;\n                    trumpvote.textContent = (args.data).Trump + '%';\n                    clintonvote.textContent = (args.data).Clinton + '%';\n                }\n            }\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/selection/App.vue?vue&type=template&id=3fa7e10c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/selection/App.vue?vue&type=template&id=3fa7e10c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"control-section\" },\n    [\n      _c(\"div\", { attrs: { id: \"chart\" } }),\n      _vm._v(\" \"),\n      _c(\n        \"ejs-maps\",\n        {\n          attrs: {\n            id: \"container\",\n            align: \"center\",\n            load: _vm.load,\n            itemSelection: _vm.itemSelection,\n            titleSettings: _vm.titleSettings,\n            zoomSettings: _vm.zoomSettings,\n            legendSettings: _vm.legendSettings\n          }\n        },\n        [\n          _c(\n            \"e-layers\",\n            [\n              _c(\"e-layer\", {\n                attrs: {\n                  shapeData: _vm.shapeData,\n                  shapePropertyPath: _vm.shapePropertyPath,\n                  shapeDataPath: _vm.shapeDataPath,\n                  dataSource: _vm.dataSource,\n                  shapeSettings: _vm.shapeSettings,\n                  tooltipSettings: _vm.tooltipSettings,\n                  highlightSettings: _vm.highlightSettings,\n                  selectionSettings: _vm.selectionSettings\n                }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1),\n      _vm._v(\" \"),\n      _vm._m(2),\n      _vm._v(\" \"),\n      _vm._m(3)\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n       \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://en.wikipedia.org/wiki/United_States_presidential_election,_2016\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"en.wikipedia.org\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"popup\", attrs: { id: \"closepopup\" } }, [\n      _c(\"span\", { attrs: { id: \"closebutton\" } }, [_vm._v(\"x\")]),\n      _vm._v(\" \"),\n      _c(\"table\", { staticStyle: { \"margin-top\": \"5px\", width: \"auto\" } }, [\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\"label\", {\n                staticStyle: {\n                  color: \"#666666\",\n                  \"font-size\": \"12px\",\n                  \"font-family\": \"Roboto\",\n                  \"font-weight\": \"700\"\n                },\n                attrs: { id: \"winner\" }\n              })\n            ]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", { staticStyle: { \"border-top\": \"1px solid #CCCCCC\" } }, [\n          _c(\n            \"td\",\n            {\n              staticStyle: { padding: \"0.3px\", \"padding-top\": \"0.5em\" },\n              attrs: { align: \"left\" }\n            },\n            [\n              _c(\n                \"label\",\n                {\n                  staticStyle: {\n                    color: \"#575757\",\n                    \"font-size\": \"12px\",\n                    \"font-family\": \"Roboto\",\n                    \"font-weight\": \"400\"\n                  }\n                },\n                [_vm._v(\"State\")]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            {\n              staticStyle: { padding: \"0.3px\", \"padding-top\": \"0.5em\" },\n              attrs: { align: \"left\" }\n            },\n            [\n              _c(\n                \"label\",\n                {\n                  staticStyle: {\n                    color: \"#575757\",\n                    \"font-size\": \"12px\",\n                    \"font-family\": \"Roboto\",\n                    \"font-weight\": \"400\",\n                    \"margin-left\": \"8px\"\n                  }\n                },\n                [_vm._v(\":\")]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            {\n              staticStyle: { padding: \"0.3px\", \"padding-top\": \"0.5em\" },\n              attrs: { align: \"left\" }\n            },\n            [\n              _c(\"label\", {\n                staticStyle: {\n                  color: \"#575757\",\n                  \"font-size\": \"12px\",\n                  \"font-family\": \"Roboto\",\n                  \"font-weight\": \"400\",\n                  \"margin-left\": \"8px\"\n                },\n                attrs: { id: \"state\" }\n              })\n            ]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\n                \"label\",\n                {\n                  staticStyle: {\n                    color: \"#575757\",\n                    \"font-size\": \"12px\",\n                    \"font-family\": \"Roboto\",\n                    \"font-weight\": \"400\",\n                    \"white-space\": \"nowrap\"\n                  }\n                },\n                [_vm._v(\"Trump\")]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\n                \"label\",\n                {\n                  staticStyle: {\n                    color: \"#575757\",\n                    \"font-size\": \"12px\",\n                    \"font-family\": \"Roboto\",\n                    \"font-weight\": \"400\",\n                    \"margin-left\": \"8px\"\n                  }\n                },\n                [_vm._v(\":\")]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\"label\", {\n                staticStyle: {\n                  color: \"#575757\",\n                  \"font-size\": \"12px\",\n                  \"font-family\": \"Roboto\",\n                  \"font-weight\": \"400\",\n                  \"margin-left\": \"8px\"\n                },\n                attrs: { id: \"trumpvotes\" }\n              })\n            ]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\n                \"label\",\n                {\n                  staticStyle: {\n                    color: \"#575757\",\n                    \"font-size\": \"12px\",\n                    \"font-family\": \"Roboto\",\n                    \"font-weight\": \"400\",\n                    \"white-space\": \"nowrap\"\n                  }\n                },\n                [_vm._v(\"Clinton\")]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\n                \"label\",\n                {\n                  staticStyle: {\n                    color: \"#575757\",\n                    \"font-size\": \"12px\",\n                    \"font-family\": \"Roboto\",\n                    \"font-weight\": \"400\",\n                    \"margin-left\": \"8px\"\n                  }\n                },\n                [_vm._v(\":\")]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            { staticStyle: { padding: \"0.3px\" }, attrs: { align: \"left\" } },\n            [\n              _c(\"label\", {\n                staticStyle: {\n                  color: \"#575757\",\n                  \"font-size\": \"12px\",\n                  \"font-family\": \"Roboto\",\n                  \"font-weight\": \"400\",\n                  \"margin-left\": \"8px\"\n                },\n                attrs: { id: \"clintonvotes\" }\n              })\n            ]\n          )\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample visualizes USA president election results in the year 2016. Vote details of a state will be displayed in a popup on clicking a state. Placed interactive legend at the top of the map. \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n           In this example, you can see how to apply various styles for a shape in the map, when it is clicked or mouse hovered. \\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n           Maps component features are segregated into individual feature-wise modules. To use selection, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Selection\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Maps.Inject(Selection)\")]),\n        _vm._v(\" method, and use highlight by injecting the \"),\n        _c(\"code\", [_vm._v(\"Highlight\")]),\n        _vm._v(\" module.\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/selection/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });