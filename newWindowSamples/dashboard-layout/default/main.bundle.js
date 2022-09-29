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
/******/ 		"dashboard-layout/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/dashboard-layout/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/dashboard-layout/default/App.vue":
/*!**************************************************!*\
  !*** ./Samples/dashboard-layout/default/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_57a67c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=57a67c1b& */ \"./Samples/dashboard-layout/default/App.vue?vue&type=template&id=57a67c1b&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_57a67c1b_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=57a67c1b&lang=css& */ \"./Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_57a67c1b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_57a67c1b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/default/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/dashboard-layout/default/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_57a67c1b_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=57a67c1b&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_57a67c1b_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_57a67c1b_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_57a67c1b_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_57a67c1b_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/default/App.vue?vue&type=template&id=57a67c1b&":
/*!*********************************************************************************!*\
  !*** ./Samples/dashboard-layout/default/App.vue?vue&type=template&id=57a67c1b& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_57a67c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=57a67c1b& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/default/App.vue?vue&type=template&id=57a67c1b&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_57a67c1b___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_57a67c1b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/default/main.js":
/*!**************************************************!*\
  !*** ./Samples/dashboard-layout/default/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/dashboard-layout/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-default #defaultLayout.e-dashboardlayout.e-control .e-panel:hover span {\\n        display: block;\\n}\\n.dashboard-default #defaultLayout .e-panel .e-panel-container .text-align{\\n        vertical-align: middle;\\n        font-weight: 600;\\n        font-size: 20px;\\n        text-align: center;\\n}\\n.dashboard-default .e-template-icon {\\n        padding: 10px;\\n        float: right;\\n        display: none;\\n}\\n.dashboard-default .e-clear-icon::before {\\n        content: '\\\\E7A7';\\n        font-size: 12px;\\n        font-family: 'e-icons';\\n}\\n.bootstrap4 .dashboard-default .e-clear-icon::before {\\n        content: '\\\\E745';\\n}\\n.tailwind .dashboard-default .e-clear-icon::before, .tailwind-dark .dashboard-default .e-clear-icon::before {\\n        content: '\\\\E771';\\n        font-size: 16px;\\n}\\n.bootstrap5 .dashboard-default .e-clear-icon::before, .bootstrap5-dark .dashboard-default .e-clear-icon::before {\\n        content: '\\\\E7E7';\\n        font-size: 16px;\\n}\\n.dashboard-default .text-align {\\n        line-height: 160px;\\n}\\n.dashboard-default .e-clear-icon {\\n        position: absolute;\\n        right: 0;\\n        cursor: pointer;\\n}\\n/* high contrast style */\\nbody.highcontrast .dashboard-default #defaultLayout.e-dashboardlayout.e-control .e-panel {\\n        background: #000;\\n}\\nbody.tailwind-dark .e-dashboardlayout.e-control .e-panel {\\n        border: 1px solid #d7d7d7;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/uts-vue-samples_development-RQMLK5PGLHGSPFC7THNO6ASUVCMFWGCU5B5WCI6HTNFVTOCNLGMQ/Samples/dashboard-layout/default/App.vue?vue&type=style&index=0&id=57a67c1b&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,eAAe;CACtB;AACD;QACQ,uBAAuB;QACvB,iBAAiB;QACjB,gBAAgB;QAChB,mBAAmB;CAC1B;AACD;QACQ,cAAc;QACd,aAAa;QACb,cAAc;CACrB;AACD;QACQ,iBAAiB;QACjB,gBAAgB;QAChB,uBAAuB;CAC9B;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;QACjB,gBAAgB;CACvB;AACD;QACQ,iBAAiB;QACjB,gBAAgB;CACvB;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,mBAAmB;QACnB,SAAS;QACT,gBAAgB;CACvB;AACD,yBAAyB;AACzB;QACQ,iBAAiB;CACxB;AACD;QACQ,0BAA0B;CACjC\",\"file\":\"App.vue?vue&type=style&index=0&id=57a67c1b&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-default #defaultLayout.e-dashboardlayout.e-control .e-panel:hover span {\\n        display: block;\\n}\\n.dashboard-default #defaultLayout .e-panel .e-panel-container .text-align{\\n        vertical-align: middle;\\n        font-weight: 600;\\n        font-size: 20px;\\n        text-align: center;\\n}\\n.dashboard-default .e-template-icon {\\n        padding: 10px;\\n        float: right;\\n        display: none;\\n}\\n.dashboard-default .e-clear-icon::before {\\n        content: '\\\\e7a7';\\n        font-size: 12px;\\n        font-family: 'e-icons';\\n}\\n.bootstrap4 .dashboard-default .e-clear-icon::before {\\n        content: '\\\\e745';\\n}\\n.tailwind .dashboard-default .e-clear-icon::before, .tailwind-dark .dashboard-default .e-clear-icon::before {\\n        content: '\\\\e771';\\n        font-size: 16px;\\n}\\n.bootstrap5 .dashboard-default .e-clear-icon::before, .bootstrap5-dark .dashboard-default .e-clear-icon::before {\\n        content: '\\\\e7e7';\\n        font-size: 16px;\\n}\\n.dashboard-default .text-align {\\n        line-height: 160px;\\n}\\n.dashboard-default .e-clear-icon {\\n        position: absolute;\\n        right: 0;\\n        cursor: pointer;\\n}\\n/* high contrast style */\\nbody.highcontrast .dashboard-default #defaultLayout.e-dashboardlayout.e-control .e-panel {\\n        background: #000;\\n}\\nbody.tailwind-dark .e-dashboardlayout.e-control .e-panel {\\n        border: 1px solid #d7d7d7;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/default/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/default/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"DashboardLayoutPlugin\"],_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n          count: 8,\n          spacing: [10,10]\n        };\n    },\n    methods: {\n         addPanel: function(args) {\n            var panel = [{\n                'id': this.count.toString() + '_layout', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,\n                content: '<span id=\"close\" class=\"e-template-icon e-clear-icon\"></span><div class=\"text-align\">' + this.count.toString() + '</div>'\n            }];\n            this.$refs.DashbordInstance.addPanel(panel[0]);\n            var closeIcon = document.getElementById(this.count.toString() + '_layout').querySelector('.e-clear-icon');\n            closeIcon.addEventListener('click', this.onCloseIconHandler);\n            this.count = this.count + 1;\n        },\n        onCloseIconHandler: function(event) {\n        if (event.target.offsetParent) {\n            this.$refs.DashbordInstance.removePanel(event.target.offsetParent.id);\n        }\n    }\n    },\n    mounted(){\n        var closeElement = document.querySelectorAll('.e-clear-icon');\n        for (var i = 0; i < closeElement.length; i++) {\n            closeElement[i].addEventListener('click', this.onCloseIconHandler);\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/default/App.vue?vue&type=template&id=57a67c1b&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/default/App.vue?vue&type=template&id=57a67c1b& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section dashboard-default\"},[_c('div',{staticStyle:{\"padding\":\"5px\",\"text-align\":\"right\"}},[_c('ejs-button',{staticClass:\"e-btn e-info\",attrs:{\"id\":\"add\"},nativeOn:{\"click\":function($event){return _vm.addPanel.apply(null, arguments)}}},[_vm._v(\" Add Panel \")])],1),_vm._v(\" \"),_c('ejs-dashboardlayout',{ref:\"DashbordInstance\",attrs:{\"columns\":5,\"id\":\"defaultLayout\",\"allowResizing\":true,\"cellSpacing\":_vm.spacing}},[_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"one\",\"data-row\":\"0\",\"data-col\":\"0\",\"data-sizeX\":\"1\",\"data-sizeY\":\"1\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"0\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"two\",\"data-row\":\"1\",\"data-col\":\"0\",\"data-sizeX\":\"1\",\"data-sizeY\":\"2\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"1\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"three\",\"data-row\":\"0\",\"data-col\":\"1\",\"data-sizeX\":\"2\",\"data-sizeY\":\"2\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"2\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"four\",\"data-row\":\"2\",\"data-col\":\"1\",\"data-sizeX\":\"1\",\"data-sizeY\":\"1\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"3\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"five\",\"data-row\":\"2\",\"data-col\":\"2\",\"data-sizeX\":\"2\",\"data-sizeY\":\"1\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"4\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"six\",\"data-row\":\"0\",\"data-col\":\"3\",\"data-sizeX\":\"1\",\"data-sizeY\":\"1\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"5\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"seven\",\"data-row\":\"1\",\"data-col\":\"3\",\"data-sizeX\":\"1\",\"data-sizeY\":\"1\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"6\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-panel\",attrs:{\"id\":\"eight\",\"data-row\":\"0\",\"data-col\":\"4\",\"data-sizeX\":\"1\",\"data-sizeY\":\"3\"}},[_c('span',{staticClass:\"e-template-icon e-clear-icon\",attrs:{\"id\":\"close\"}}),_vm._v(\" \"),_c('div',{staticClass:\"e-panel-container\"},[_c('div',{staticClass:\"text-align\"},[_c('div',[_vm._v(\"7\")])])])])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"content\"}})],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This \"),_c('a',{attrs:{\"href\":\"https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout\"}},[_vm._v(\"Vue Dashboard Layout \")]),_vm._v(\" example demonstrates the default functionalities of the DashboardLayout component. Click the Add Panel button to add panels dynamically to the dashboard layout.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        The DashboardLayout component provides the capability to arrange, \"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing\",\"target\":\"_blank\"}},[_vm._v(\"resize\")]),_vm._v(\" and \\n        reorder the panels within the dashboard layout.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });