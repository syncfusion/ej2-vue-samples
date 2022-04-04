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
/******/ 		"progress-bar/progress_segment/main": 0
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
/******/ 	deferredModules.push(["./Samples/progress-bar/progress_segment/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/progress-bar/progress_segment/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/progress-bar/progress_segment/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_32a6d76b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=32a6d76b&scoped=true& */ \"./Samples/progress-bar/progress_segment/App.vue?vue&type=template&id=32a6d76b&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/progress-bar/progress_segment/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_32a6d76b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css& */ \"./Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_32a6d76b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_32a6d76b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"32a6d76b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/progress-bar/progress_segment/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/progress_segment/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/progress-bar/progress_segment/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/progress_segment/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_32a6d76b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_32a6d76b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_32a6d76b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_32a6d76b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_32a6d76b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/progress_segment/App.vue?vue&type=template&id=32a6d76b&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./Samples/progress-bar/progress_segment/App.vue?vue&type=template&id=32a6d76b&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_32a6d76b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=32a6d76b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/progress_segment/App.vue?vue&type=template&id=32a6d76b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_32a6d76b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_32a6d76b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?");

/***/ }),

/***/ "./Samples/progress-bar/progress_segment/main.js":
/*!*******************************************************!*\
  !*** ./Samples/progress-bar/progress_segment/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/progress-bar/progress_segment/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-32a6d76b] {\\n       padding: 0px !important;\\n}\\n.linear-parent[data-v-32a6d76b] {\\n       text-align: center;\\n       width: 75%;\\n       margin: auto;\\n       margin-top: 5%;\\n}\\n.linear-button[data-v-32a6d76b] {\\n      text-align: center;\\n      padding:2%;\\n}\\n.progressbar-mode[data-v-32a6d76b] {\\n       text-align: left;\\n       font-family: Roboto-Regular;\\n       font-size: 14px;\\n       color: #3D3E3C;\\n       margin-left: 10px;\\n       margin-top: 5%;\\n       padding: 0px;\\n       top: 20px;\\n}\\n#reLoad[data-v-32a6d76b] {\\n       border-radius: 4px;\\n       text-transform: capitalize;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-TBEZQMVJYHQGC4AGWNLKMB5E5MHJ7J6VA3JEILKENKJRWPMH6O6Q/Samples/progress-bar/progress_segment/App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;OACO,wBAAwB;CAC9B;AACD;OACO,mBAAmB;OACnB,WAAW;OACX,aAAa;OACb,eAAe;CACrB;AACD;MACM,mBAAmB;MACnB,WAAW;CAChB;AACD;OACO,iBAAiB;OACjB,4BAA4B;OAC5B,gBAAgB;OAChB,eAAe;OACf,kBAAkB;OAClB,eAAe;OACf,aAAa;OACb,UAAU;CAChB;AACD;OACO,mBAAmB;OACnB,2BAA2B;CACjC\",\"file\":\"App.vue?vue&type=style&index=0&id=32a6d76b&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-32a6d76b] {\\n       padding: 0px !important;\\n}\\n.linear-parent[data-v-32a6d76b] {\\n       text-align: center;\\n       width: 75%;\\n       margin: auto;\\n       margin-top: 5%;\\n}\\n.linear-button[data-v-32a6d76b] {\\n      text-align: center;\\n      padding:2%;\\n}\\n.progressbar-mode[data-v-32a6d76b] {\\n       text-align: left;\\n       font-family: Roboto-Regular;\\n       font-size: 14px;\\n       color: #3D3E3C;\\n       margin-left: 10px;\\n       margin-top: 5%;\\n       padding: 0px;\\n       top: 20px;\\n}\\n#reLoad[data-v-32a6d76b] {\\n       border-radius: 4px;\\n       text-transform: capitalize;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/progress_segment/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/progress_segment/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-progressbar */ \"./node_modules/@syncfusion/ej2-vue-progressbar/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressBarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value:40,\n      trackThickness:15,\n      progressThickness:15,\n      count:50,\n      gap:5,\n      startAngle: 220,\n      endAngle: 140,\n      content: '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#0078D6\"><span></span></div>',\n      animation: {\n          enable: true,\n          duration: 2000,\n          delay: 0,\n        },\n    };\n  },\n  provide: {\n    progressbar: [_syncfusion_ej2_vue_progressbar__WEBPACK_IMPORTED_MODULE_2__[\"ProgressAnnotation\"]]\n  },\n  methods: {\n     progressLoad: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +\n        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n     },\n  load: function(args) {\n            let selectedTheme = location.hash.split('/')[1];\n            selectedTheme = selectedTheme ? selectedTheme : 'Material';\n            args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n            switch (selectedTheme) {\n                case 'material':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#e91e63\"><span></span></div>';\n                    break;\n                case 'fabric':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#0078D6\"><span></span></div>';\n                    break;\n                case 'bootstrap':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#317ab9\"><span></span></div>';\n                    break;\n                case 'bootstrap4':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#007bff\"><span></span></div>';\n                    break;\n                case 'tailwind':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#4F46E5\"><span></span></div>';\n                    break;\n                case 'bootstrap-dark':\n                case 'fabric-dark':\n                case 'material-dark':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#9A9A9A\"><span></span></div>';\n                    break;\n                case 'bootstrap5':\n                case 'bootstrap5-dark':\n                case 'fluent':\n                case 'fluent-dark':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#0D6EFD\"><span></span></div>';\n                    break;\n                case 'tailwind-dark':\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#22D3EE\"><span></span></div>';\n                    break;\n                default:\n                    args.progressBar.annotations[0].content = '<div id=\"point1\" style=\"font-size:24px;font-weight:bold;color:#FFD939\"><span></span></div>';\n                    break;\n    \n            }\n        },\n  loaded: function(args) {\n       let timer = setInterval(timing,2500)\n       function timing() {\n        if( args.progressBar.value >=  args.progressBar.maximum) {\n        clearInterval(timer)\n        } else {\n         args.progressBar.value += 20;\n       } \n      }\n   }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/progress-bar/progress_segment/App.vue?vue&type=template&id=32a6d76b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/progress-bar/progress_segment/App.vue?vue&type=template&id=32a6d76b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"row linear-parent\"},[_c('div',[_c('div',{staticClass:\"col-lg-12 col-sm-12 progressbar-mode\"}),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"linearprogress\"}},[_c('ejs-progressbar',{ref:\"linearseg\",attrs:{\"id\":\"Linearsegment\",\"type\":\"Linear\",\"height\":\"30\",\"width\":\"70%\",\"trackThickness\":_vm.trackThickness,\"progressThickness\":_vm.progressThickness,\"value\":_vm.value,\"segmentCount\":_vm.count,\"gapWidth\":_vm.gap,\"loaded\":_vm.loaded,\"animation\":_vm.animation,\"cornerRadius\":\"Square\",\"load\":_vm.progressLoad}})],1)]),_vm._v(\" \"),_c('div',[_c('div',{staticClass:\"col-lg-12 col-sm-12 progressbar-mode\"}),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"circularprogress\"}},[_c('ejs-progressbar',{ref:\"circularseg\",attrs:{\"id\":\"Circularsegment\",\"type\":\"Circular\",\"height\":\"200px\",\"width\":\"200px\",\"trackThickness\":_vm.trackThickness,\"progressThickness\":_vm.progressThickness,\"startAngle\":_vm.startAngle,\"endAngle\":_vm.endAngle,\"value\":_vm.value,\"segmentCount\":_vm.count,\"gapWidth\":_vm.gap,\"cornerRadius\":\"Square\",\"load\":_vm.load,\"loaded\":_vm.loaded,\"animation\":_vm.animation}}),_vm._v(\" \"),_c('e-progressbar-annotations',[_c('e-progressbar-annotation',{attrs:{\"content\":_vm.content}})],1)],1)])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample illustrates a segmented progress of a task\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n       This demo for Essential JS2 Progress Bar control shows the segmented progress of a task using \"),_c('code',[_vm._v(\"segmentCount\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"gapWidth\")]),_vm._v(\" property.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/progress-bar/progress_segment/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });