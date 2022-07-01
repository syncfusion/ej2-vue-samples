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
/******/ 		"tab/drag-and-drop/main": 0
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
/******/ 	deferredModules.push(["./Samples/tab/drag-and-drop/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/tab/drag-and-drop/App.vue":
/*!*******************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_48d7b9d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=48d7b9d2& */ \"./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_48d7b9d2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_48d7b9d2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/tab/drag-and-drop/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2&":
/*!**************************************************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_48d7b9d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=48d7b9d2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_48d7b9d2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_48d7b9d2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/main.js":
/*!*******************************************!*\
  !*** ./Samples/tab/drag-and-drop/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/tab/drag-and-drop/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#draggableTab .e-content .e-item {\\n    font-size: 12px;\\n    padding: 10px;\\n    text-align: justify;\\n}\\n.treeview-external-drag-tab .e-list-item,\\n.e-bigger .treeview-external-drag-tab .e-list-item {\\n    border: 0.5px solid #E1E7EC;\\n    line-height: 15px;\\n    padding: 0 5px;\\n}\\n.treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\n.treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\n.treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow,\\n.e-bigger .treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\n.e-bigger .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\n.e-bigger .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none !important;\\n}\\n#draggableTab .e-upload {\\n    width: 300px;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-GOXQA5NGRTSVE5AASF5K6J5IGS6NGJPBAFGTAXP5IVHINC5N44AA/Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,gBAAgB;IAChB,cAAc;IACd,oBAAoB;CACvB;AACD;;IAEI,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;CAClB;AACD;;;;;;IAMI,8BAA8B;IAC9B,0BAA0B;IAC1B,4BAA4B;CAC/B;AACD;IACI,aAAa;CAChB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#draggableTab .e-content .e-item {\\n    font-size: 12px;\\n    padding: 10px;\\n    text-align: justify;\\n}\\n.treeview-external-drag-tab .e-list-item,\\n.e-bigger .treeview-external-drag-tab .e-list-item {\\n    border: 0.5px solid #E1E7EC;\\n    line-height: 15px;\\n    padding: 0 5px;\\n}\\n.treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\n.treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\n.treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow,\\n.e-bigger .treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\n.e-bigger .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\n.e-bigger .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none !important;\\n}\\n#draggableTab .e-upload {\\n    width: 300px;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-schedule */ \"./node_modules/@syncfusion/ej2-vue-schedule/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-calendars */ \"./node_modules/@syncfusion/ej2-vue-calendars/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TabPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TreeViewPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__[\"SchedulePlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__[\"GridPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__[\"DropDownListPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__[\"DatePickerPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__[\"CalendarPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_7__[\"UploaderPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__[\"RichTextEditorPlugin\"]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\r\n  data: function () {\r\n    return {\r\n      draggedItemHeader: \"\",\r\n      i: 0,\r\n      fields: {\r\n        dataSource: [\r\n          { text: \"DropDown List\", id: \"list-01\", name: \"DropDownList\" },\r\n          { text: \"DatePicker\", id: \"list-02\", name: \"DatePicker\" },\r\n          { text: \"Calendar\", id: \"list-03\", name: \"Calendar\" },\r\n          { text: \"File Upload\", id: \"list-04\", name: \"FileUpload\" },\r\n        ],\r\n        id: \"id\", text: \"text\",\r\n      },\r\n      headerText0: { text: \"Grid\" },\r\n      headerText1: { text: \"Rich Text Editor\" },\r\n      headerText2: { text: \"Schedule\" },\r\n      Grid: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"GridComponent\", {\r\n            template: `<ejs-grid :dataSource='gridData'>\r\n                <e-columns>\r\n                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 type='number'></e-column>\r\n                  <e-column field='CustomerID' headerText='Customer ID'  type='string' width= 140></e-column>\r\n                  <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C'></e-column >\r\n                  <e-column field='OrderDate' headerText='Order Date' width=140 format='yMd'></e-column >\r\n                </e-columns>\r\n              </ejs-grid>`,\r\n            data() {\r\n              return {\r\n                gridData: [\r\n                  { OrderID: 10248, CustomerID: \"VINET\", OrderDate: new Date(8364186e5), Freight: 32.38 },\r\n                  { OrderID: 10249, CustomerID: \"TOMSP\", OrderDate: new Date(836505e6), Freight: 11.61 },\r\n                  { OrderID: 10250, CustomerID: \"HANAR\", OrderDate: new Date(8367642e5), Freight: 65.83 },\r\n                  { OrderID: 10251, CustomerID: \"VICTE\", OrderDate: new Date(8367642e5), Freight: 41.34 },\r\n                  { OrderID: 10252, CustomerID: \"SUPRD\", OrderDate: new Date(8368506e5), Freight: 51.3 }\r\n                ],\r\n              };\r\n            },\r\n          }),\r\n        };\r\n      },\r\n      RichTextEditor: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"RichTextEditorComponent\", {\r\n            template: `<ejs-richtexteditor height='340'>\r\n              <p>The Rich Text Editor is WYSIWYG (\"what you see is what you get\") editor useful to create and edit content, and return the valid <a href='https://ej2.syncfusion.com/home/' target='_blank'>HTML markup</a> or <a href='https://ej2.syncfusion.com/home/' target='_blank'>markdown</a> of the content</p>\r\n              <p><b>Toolbar</b></p><ol><li><p>Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc.</p></li><li><p>Toolbar is fully customizable</p></li></ol><p><b>Links</b></p><ol><li><p>You can insert a hyperlink with its corresponding dialog</p></li>\r\n              <li><p>Attach a hyperlink to the displayed text.</p></li><li><p>Customize the quick toolbar based on the hyperlink</p></li></ol><p><b>Image.</b></p><ol><li><p>Allows you to insert images from an online source as well as the local computer</p></li><li><p>You can upload an image</p></li>\r\n              <li><p>Provides an option to customize quick toolbar for an image</p></li></ol><img alt=\"Logo\" src=\"./../../source/rich-text-editor/images/RTEImage-Feather.png\" style=\"width: 300px;\">\r\n            </ejs-richtexteditor>`,\r\n            data() {\r\n              return {};\r\n            },\r\n            provide: {\r\n              richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__[\"QuickToolbar\"]]\r\n            }\r\n          }),\r\n        };\r\n      },\r\n      Schedule: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"ScheduleComponent\", {\r\n            template: `<ejs-schedule :height=\"height\" :selectedDate='selectedDate' :eventSettings='eventSettings' :readonly=\"readonly\">\r\n                </ejs-schedule>`,\r\n            data() {\r\n              return {\r\n                height: 350,\r\n                selectedDate: new Date(2020, 9, 20),\r\n                readonly: true,\r\n                eventSettings: {\r\n                  dataSource: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_8__[\"DataManager\"]({\r\n                    url: \"https://ej2services.syncfusion.com/production/web-services/api/Schedule\",\r\n                    adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_8__[\"ODataV4Adaptor\"](),\r\n                    crossDomain: true,\r\n                  }),\r\n                }\r\n              };\r\n            },\r\n            provide: {\r\n              schedule: [_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__[\"Day\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__[\"Week\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__[\"WorkWeek\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__[\"Month\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__[\"Agenda\"]],\r\n            },\r\n          }),\r\n        };\r\n      },\r\n      DropDownList: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"DropDownListComponent\", {\r\n            template: `<ejs-dropdownlist width=\"200px\" popupHeight=\"200px\" popupWidth=\"250px\" :dataSource='sportsData' placeholder='Select a game'></ejs-dropdownlist>`,\r\n            data() {\r\n              return {\r\n                sportsData: [\"Badminton\", \"Cricket\", \"Football\", \"Golf\", \"Tennis\"],\r\n              };\r\n            },\r\n          }),\r\n        };\r\n      },\r\n      DatePicker: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"DatePickerComponent\", {\r\n            template: `<ejs-datepicker width=\"200px\" placeholder=\"Enter date\"></ejs-datepicker>`,\r\n            data() {\r\n              return {};\r\n            },\r\n          }),\r\n        };\r\n      },\r\n      Calendar: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"CalenderComponent\", {\r\n            template: `<ejs-calendar></ejs-calendar>`,\r\n            data() {\r\n              return {};\r\n            },\r\n          }),\r\n        };\r\n      },\r\n      Uploader: function () {\r\n        return {\r\n          template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"UploaderComponent\", {\r\n            template: `<ejs-uploader></ejs-uploader>`,\r\n            data() {\r\n              return {};\r\n            },\r\n          }),\r\n        };\r\n      },\r\n    };\r\n  },\r\n  methods: {\r\n    onTabCreate: function (args) {\r\n      let tabElement = document.getElementById(\"draggableTab\");\r\n      if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"isNullOrUndefined\"])(tabElement)) {\r\n        tabElement.querySelector(\".e-tab-header\").classList.add(\"e-droppable\");\r\n        tabElement.querySelector(\".e-content\").classList.add(\"tab-content\");\r\n      }\r\n    },\r\n    onTabDragStart: function (args) {\r\n      var tabObj = this.$refs.tabObj.ej2Instances;\r\n      this.draggedItemHeader = tabObj.items[args.index].header.text;\r\n    },\r\n    onDraggedTab: function (args) {\r\n      var tabObj = this.$refs.tabObj.ej2Instances;\r\n      let dragTabIndex = Array.prototype.indexOf.call(tabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);\r\n      let dropNode = args.target.closest(\"#ListView .e-list-item\");\r\n      if (dropNode != null && !args.target.closest(\"#draggableTab .e-toolbar-item\") && tabObj.items.length > 1) {\r\n        var treeObj = this.$refs.treeObj.ej2Instances;\r\n        args.cancel = true;\r\n        let dropContainer = (document.querySelector('.treeview-external-drag-tab')).querySelectorAll('.e-list-item');\r\n        let dropIndex = Array.prototype.indexOf.call(dropContainer, dropNode);\r\n        let newNode = [{ id: \"list\" + this.i, text: this.draggedItemHeader }];\r\n        tabObj.removeTab(dragTabIndex);\r\n        treeObj.addNodes(newNode, \"Treeview\", dropIndex);\r\n      }\r\n    },\r\n    onNodeDragStop: function (args) {\r\n      let dropElement = args.target.closest(\"#draggableTab .e-toolbar-item\");\r\n      if (dropElement != null) {\r\n        let tabElement = document.querySelector(\"#draggableTab\");\r\n        let itemPosition = (((args.event.type.indexOf('touch') > -1) ? args.event.changedTouches[0].clientX\r\n          : args.event.clientX) < dropElement.getBoundingClientRect().left + dropElement.offsetWidth / 2) ? 0 : 1;\r\n        let dropItemIndex = [].slice.call(tabElement.querySelectorAll(\".e-toolbar-item\")).indexOf(dropElement) + itemPosition;\r\n        let tabContent;\r\n        switch (args.draggedNodeData.text) {\r\n          case \"DropDown List\":\r\n            tabContent = this.DropDownList;\r\n            break;\r\n          case \"DatePicker\":\r\n            tabContent = this.DatePicker;\r\n            break;\r\n          case \"Calendar\":\r\n            tabContent = this.Calendar;\r\n            break;\r\n          case \"File Upload\":\r\n            tabContent = this.Uploader;\r\n            break;\r\n          case \"Rich Text Editor\":\r\n            tabContent = this.RichTextEditor;\r\n            break;\r\n          case \"Grid\":\r\n            tabContent = this.Grid;\r\n            break;\r\n          case \"Schedule\":\r\n            tabContent = this.Schedule;\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n        let newTabItem = [{ header: { text: args.draggedNodeData.text.toString() }, content: tabContent }];\r\n        var tabObj = this.$refs.tabObj.ej2Instances;\r\n        var treeObj = this.$refs.treeObj.ej2Instances;\r\n        tabObj.addTab(newTabItem, dropItemIndex);\r\n        treeObj.removeNodes([args.draggedNode]);\r\n      }\r\n      args.cancel = true;\r\n    },\r\n    onNodeDrag: function (args) {\r\n      if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"isNullOrUndefined\"])(args.target.closest(\".tab-content\"))) {\r\n        args.dropIndicator = \"e-no-drop\";\r\n      } else if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"isNullOrUndefined\"])(args.target.closest(\"#draggableTab .e-tab-header\"))) {\r\n        args.dropIndicator = \"e-drop-in\";\r\n      }\r\n    },\r\n  }\r\n}));\r\n\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"TabContainer\"}},[_c('div',{staticClass:\"col-lg-4\",staticStyle:{\"margin-top\":\"10px\"}},[_c('div',{staticClass:\"property-panel-header\"},[_vm._v(\"List of Components\")]),_vm._v(\" \"),_c('ejs-treeview',{ref:\"treeObj\",attrs:{\"id\":\"ListView\",\"fields\":_vm.fields,\"allowDragAndDrop\":true,\"dragArea\":\"#TabContainer\",\"cssClass\":\"treeview-external-drag-tab\",\"nodeDragStop\":_vm.onNodeDragStop,\"nodeDragging\":_vm.onNodeDrag}})],1),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('ejs-tab',{ref:\"tabObj\",attrs:{\"id\":\"draggableTab\",\"dragArea\":\"#TabContainer\",\"allowDragAndDrop\":true,\"created\":_vm.onTabCreate,\"onDragStart\":_vm.onTabDragStart,\"dragged\":_vm.onDraggedTab}},[_c('e-tabitems',[_c('e-tabitem',{attrs:{\"header\":_vm.headerText0,\"content\":_vm.Grid}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText1,\"content\":_vm.RichTextEditor}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText2,\"content\":_vm.Schedule}})],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n          This example illustrates how to reorder tabs and add tabs from an external source(list of components) by drag and drop. \\n          Here, you can drag and drop the items from TreeView into Tab.\\n      \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n          In this example, the \"),_c('code',[_vm._v(\"allowDragAndDrop\")]),_vm._v(\" property is used to enable drag and drop and the \"),_c('code',[_vm._v(\"dragArea\")]),_vm._v(\" property is used to define the draggable area.\\n      \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        In this example, the list of components is rendered using the \"),_c('code',[_vm._v(\"treeview\")]),_vm._v(\" component. \\n        We can drag the item from the treeview component to the tab component by using the \"),_c('code',[_vm._v(\"nodeDragStop\")]),_vm._v(\" event of the treeview component and \\n        add the same item with the help of the \"),_c('code',[_vm._v(\"addTab\")]),_vm._v(\" public method of Tab and remove this item from the treeview by using the \"),_c('code',[_vm._v(\"removeNodes\")]),_vm._v(\" method. \\n      \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        In the same way, we can drag the tab item within the tab component and also add the tab item to the treeview component. \\n        Here, we can drop the tab item in the treeview component by using the \"),_c('code',[_vm._v(\"dragged\")]),_vm._v(\" event of the tab component. \\n        In this case, we can remove the dropped item from tab with the help of the \"),_c('code',[_vm._v(\"removeTab\")]),_vm._v(\" public method and add the item to the treeview in its \"),_c('code',[_vm._v(\"addNodes\")]),_vm._v(\" public method.\\n      \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/tab/drag-and-drop/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });