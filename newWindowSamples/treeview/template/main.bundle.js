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
/******/ 		"treeview/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/treeview/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/treeview/template/App.vue":
/*!*******************************************!*\
  !*** ./Samples/treeview/template/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_54107e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=54107e18& */ \"./Samples/treeview/template/App.vue?vue&type=template&id=54107e18&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/treeview/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_54107e18___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_54107e18___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/treeview/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?");

/***/ }),

/***/ "./Samples/treeview/template/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/treeview/template/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/treeview/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?");

/***/ }),

/***/ "./Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?");

/***/ }),

/***/ "./Samples/treeview/template/App.vue?vue&type=template&id=54107e18&":
/*!**************************************************************************!*\
  !*** ./Samples/treeview/template/App.vue?vue&type=template&id=54107e18& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_54107e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=54107e18& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treeview/template/App.vue?vue&type=template&id=54107e18&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_54107e18___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_54107e18___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?");

/***/ }),

/***/ "./Samples/treeview/template/main.js":
/*!*******************************************!*\
  !*** ./Samples/treeview/template/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/treeview/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/treeview/template/main.js?");

/***/ }),

/***/ "./Samples/treeview/template/template-data.json":
/*!******************************************************!*\
  !*** ./Samples/treeview/template/template-data.json ***!
  \******************************************************/
/*! exports provided: templateData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"templateData\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"Favorites\\\",\\\"hasChild\\\":true},{\\\"id\\\":2,\\\"pid\\\":1,\\\"name\\\":\\\"Sales Reports\\\",\\\"count\\\":\\\"4\\\"},{\\\"id\\\":3,\\\"pid\\\":1,\\\"name\\\":\\\"Sent Items\\\"},{\\\"id\\\":4,\\\"pid\\\":1,\\\"name\\\":\\\"Marketing Reports \\\",\\\"count\\\":\\\"6\\\"},{\\\"id\\\":5,\\\"name\\\":\\\"My Folder\\\",\\\"hasChild\\\":true,\\\"expanded\\\":true},{\\\"id\\\":6,\\\"pid\\\":5,\\\"name\\\":\\\"Inbox\\\",\\\"selected\\\":true,\\\"count\\\":\\\"20\\\"},{\\\"id\\\":7,\\\"pid\\\":5,\\\"name\\\":\\\"Drafts\\\",\\\"count\\\":\\\"5\\\"},{\\\"id\\\":8,\\\"pid\\\":5,\\\"name\\\":\\\"Deleted Items\\\"},{\\\"id\\\":9,\\\"pid\\\":5,\\\"name\\\":\\\"Sent Items\\\"},{\\\"id\\\":10,\\\"pid\\\":5,\\\"name\\\":\\\"Sales Reports\\\",\\\"count\\\":\\\"4\\\"},{\\\"id\\\":11,\\\"pid\\\":5,\\\"name\\\":\\\"Marketing Reports\\\",\\\"count\\\":\\\"6\\\"},{\\\"id\\\":12,\\\"pid\\\":5,\\\"name\\\":\\\"Outbox\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/treeview/template/template-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.tree-template .tree-template-control-wrapper {\\n\\t\\tmax-width: 320px;\\n        margin: auto;\\n        border: 1px solid #dddddd;\\n        border-radius: 3px;\\n}\\n.tree-template .tree-template-control-wrapper .e-treeview .e-list-text {\\n        width: 100%;\\n}\\n.tree-template .treeCount.e-badge {\\n        padding: 0.4em;\\n        vertical-align: text-bottom;\\n}\\n.material .tree-template .treeCount.e-badge {\\n        vertical-align: middle;\\n}\\n.bootstrap4 .treeviewdiv .treeCount.e-badge,\\n    .bootstrap5 .treeviewdiv .treeCount.e-badge,\\n    .bootstrap5-dark .treeviewdiv .treeCount.e-badge,\\n    .bootstrap .treeviewdiv .treeCount.e-badge,\\n    .bootstrap-dark .treeviewdiv .treeCount.e-badge,\\n    .highcontrast .treeviewdiv .treeCount.e-badge {\\n        background-color: #008800;\\n}\\n.highcontrast .treeviewdiv .treeCount.e-badge {\\n        color: white;\\n}\\n.bootstrap5.e-bigger .tree-template .treeCount.e-badge,\\n    .tailwind.e-bigger .tree-template .treeCount.e-badge,\\n    .tailwind-dark.e-bigger .tree-template .treeCount.e-badge,\\n    .bootstrap5-dark.e-bigger .tree-template .treeCount.e-badge {\\n        line-height: 11px;\\n}\\n.tree-template .nodetext {\\n        float: left;\\n}\\n.tree-template .e-rtl .nodetext {\\n        float: right;\\n}\\n.tree-template .nodebadge {\\n        float: right;\\n        margin-right: 5px\\n}\\n.tree-template .e-rtl .nodebadge {\\n        float: left;\\n        margin-left: 5px\\n}\\n.tree-template .e-treeview.e-interaction.e-fullrow-wrap .e-text-content {\\n        pointer-events: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-AYH7XHMO6KSEIXRKCV5I64MQMMUYOJMXW32VBZ37W2N7QVS7ANEQ/Samples/treeview/template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;QACX,aAAa;QACb,0BAA0B;QAC1B,mBAAmB;CAC1B;AACD;QACQ,YAAY;CACnB;AACD;QACQ,eAAe;QACf,4BAA4B;CACnC;AACD;QACQ,uBAAuB;CAC9B;AACD;;;;;;QAMQ,0BAA0B;CACjC;AACD;QACQ,aAAa;CACpB;AACD;;;;QAIQ,kBAAkB;CACzB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,aAAa;QACb,iBAAiB;CACxB;AACD;QACQ,YAAY;QACZ,gBAAgB;CACvB;AACD;QACQ,qBAAqB;CAC5B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.tree-template .tree-template-control-wrapper {\\n\\t\\tmax-width: 320px;\\n        margin: auto;\\n        border: 1px solid #dddddd;\\n        border-radius: 3px;\\n}\\n.tree-template .tree-template-control-wrapper .e-treeview .e-list-text {\\n        width: 100%;\\n}\\n.tree-template .treeCount.e-badge {\\n        padding: 0.4em;\\n        vertical-align: text-bottom;\\n}\\n.material .tree-template .treeCount.e-badge {\\n        vertical-align: middle;\\n}\\n.bootstrap4 .treeviewdiv .treeCount.e-badge,\\n    .bootstrap5 .treeviewdiv .treeCount.e-badge,\\n    .bootstrap5-dark .treeviewdiv .treeCount.e-badge,\\n    .bootstrap .treeviewdiv .treeCount.e-badge,\\n    .bootstrap-dark .treeviewdiv .treeCount.e-badge,\\n    .highcontrast .treeviewdiv .treeCount.e-badge {\\n        background-color: #008800;\\n}\\n.highcontrast .treeviewdiv .treeCount.e-badge {\\n        color: white;\\n}\\n.bootstrap5.e-bigger .tree-template .treeCount.e-badge,\\n    .tailwind.e-bigger .tree-template .treeCount.e-badge,\\n    .tailwind-dark.e-bigger .tree-template .treeCount.e-badge,\\n    .bootstrap5-dark.e-bigger .tree-template .treeCount.e-badge {\\n        line-height: 11px;\\n}\\n.tree-template .nodetext {\\n        float: left;\\n}\\n.tree-template .e-rtl .nodetext {\\n        float: right;\\n}\\n.tree-template .nodebadge {\\n        float: right;\\n        margin-right: 5px\\n}\\n.tree-template .e-rtl .nodebadge {\\n        float: left;\\n        margin-left: 5px\\n}\\n.tree-template .e-treeview.e-interaction.e-fullrow-wrap .e-text-content {\\n        pointer-events: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/treeview/template/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/treeview/template/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _template_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-data.json */ \"./Samples/treeview/template/template-data.json\");\nvar _template_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./template-data.json */ \"./Samples/treeview/template/template-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TreeViewPlugin\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            fields: { dataSource: _template_data_json__WEBPACK_IMPORTED_MODULE_2__[\"templateData\"], id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' }\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treeview/template/App.vue?vue&type=template&id=54107e18&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treeview/template/App.vue?vue&type=template&id=54107e18& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section tree-template\"},[_c('div',{staticClass:\"tree-template-control-wrapper\"},[_c('ejs-treeview',{attrs:{\"id\":\"template\",\"fields\":_vm.fields,\"cssClass\":\"custom\",\"nodeTemplate\":'myTemplate'},scopedSlots:_vm._u([{key:\"myTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('div',[_c('div',{staticClass:\"treeviewdiv\"},[_c('div',{staticClass:\"nodetext\"},[_c('span',{staticClass:\"treeName\"},[_vm._v(_vm._s(data.name))])]),_vm._v(\" \"),(data.count)?_c('div',{staticClass:\"nodebadge\"},[_c('span',{staticClass:\"treeCount e-badge e-badge-primary\"},[_vm._v(_vm._s(data.count))])]):_vm._e()])])]}}])})],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This \"),_c('a',{attrs:{\"href\":\"https://www.syncfusion.com/vue-ui-components/vue-tree-view\",\"target\":\"_blank\"}},[_vm._v(\"Vue TreeView example\")]),_vm._v(\" demonstrates the template functionalities of the TreeView. Select the root node by clicking on it, or expand the root node and select the customized child node.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The \"),_c('code',[_vm._v(\"TreeView\")]),_vm._v(\" component has an option to customize the node structure through the \"),_c('code',[_vm._v(\"nodeTemplate\")]),_vm._v(\" property, so that the tree node can be formed with any custom structure.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"In this demo, the node is formed as like webmail with folder name and number of unread messages.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"For more information, you can refer to the \"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/treeview/template/\",\"target\":\"_blank\"}},[_vm._v(\"Templates\")]),_vm._v(\" section from the documentation.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/treeview/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });