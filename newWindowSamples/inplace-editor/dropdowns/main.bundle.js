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
/******/ 		"inplace-editor/dropdowns/main": 0
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
/******/ 	deferredModules.push(["./Samples/inplace-editor/dropdowns/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/inplace-editor/dropdowns/App.vue":
/*!**************************************************!*\
  !*** ./Samples/inplace-editor/dropdowns/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0a222d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0a222d9e&scoped=true& */ \"./Samples/inplace-editor/dropdowns/App.vue?vue&type=template&id=0a222d9e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/inplace-editor/dropdowns/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css& */ \"./Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0a222d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0a222d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0a222d9e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/inplace-editor/dropdowns/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?");

/***/ }),

/***/ "./Samples/inplace-editor/dropdowns/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/inplace-editor/dropdowns/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/inplace-editor/dropdowns/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?");

/***/ }),

/***/ "./Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a222d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?");

/***/ }),

/***/ "./Samples/inplace-editor/dropdowns/App.vue?vue&type=template&id=0a222d9e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./Samples/inplace-editor/dropdowns/App.vue?vue&type=template&id=0a222d9e&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0a222d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0a222d9e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/inplace-editor/dropdowns/App.vue?vue&type=template&id=0a222d9e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0a222d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0a222d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?");

/***/ }),

/***/ "./Samples/inplace-editor/dropdowns/main.js":
/*!**************************************************!*\
  !*** ./Samples/inplace-editor/dropdowns/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/inplace-editor/dropdowns/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide[data-v-0a222d9e],\\n.inplace-control-section.drop-down-layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide[data-v-0a222d9e] {\\ndisplay: block;\\nvisibility: hidden;\\n}\\n\\n/* custom code start */\\n.inplace-control-section.drop-down-layout .control_wrapper  label[data-v-0a222d9e] {\\n    padding: 15px;\\n    text-align: left;\\n    font-weight: 400;\\n    font-size: 14px;\\n    margin-bottom: 0px;\\n}\\n.inplace-control-section.drop-down-layout .control_wrapper[data-v-0a222d9e] {\\n    margin: auto;\\n    max-width: 400px;\\n    border: none;\\n}\\n.inplace-control-section.drop-down-layout .control_wrapper table[data-v-0a222d9e] {\\n    margin: auto;\\n}\\n.inplace-control-section.drop-down-layout .control_wrapper table td[data-v-0a222d9e] {\\n    width: 200px;\\n    height: 100px;\\n}\\n/* custom code end */\\n#dropdownProperty table td[data-v-0a222d9e] {\\n    width: 50%;\\n}\\n#dropdownProperty .property-panel-table div[data-v-0a222d9e] {\\n    padding-left: 10px;\\n    padding-top: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/e-editor-vue-samples_master-4CNZKIM37HZT3PL45ICDGQLISMX34KLM7YEMLFN2A77JIC4BDIBA/Samples/inplace-editor/dropdowns/App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;AAEA,eAAe;AACf,mBAAmB;CAClB;;AAED,uBAAuB;AACvB;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,aAAa;CAChB;AACD;IACI,aAAa;IACb,cAAc;CACjB;AACD,qBAAqB;AACrB;IACI,WAAW;CACd;AACD;IACI,mBAAmB;IACnB,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=0a222d9e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-inplaceeditor-tip .e-editable-component .e-input-group .e-clear-icon.e-clear-icon-hide[data-v-0a222d9e],\\n.inplace-control-section.drop-down-layout .e-inplaceeditor .e-editable-component .e-clear-icon-hide[data-v-0a222d9e] {\\ndisplay: block;\\nvisibility: hidden;\\n}\\n\\n/* custom code start */\\n.inplace-control-section.drop-down-layout .control_wrapper  label[data-v-0a222d9e] {\\n    padding: 15px;\\n    text-align: left;\\n    font-weight: 400;\\n    font-size: 14px;\\n    margin-bottom: 0px;\\n}\\n.inplace-control-section.drop-down-layout .control_wrapper[data-v-0a222d9e] {\\n    margin: auto;\\n    max-width: 400px;\\n    border: none;\\n}\\n.inplace-control-section.drop-down-layout .control_wrapper table[data-v-0a222d9e] {\\n    margin: auto;\\n}\\n.inplace-control-section.drop-down-layout .control_wrapper table td[data-v-0a222d9e] {\\n    width: 200px;\\n    height: 100px;\\n}\\n/* custom code end */\\n#dropdownProperty table td[data-v-0a222d9e] {\\n    width: 50%;\\n}\\n#dropdownProperty .property-panel-table div[data-v-0a222d9e] {\\n    padding-left: 10px;\\n    padding-top: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/inplace-editor/dropdowns/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/inplace-editor/dropdowns/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inplace_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inplace-editor */ \"./node_modules/@syncfusion/ej2-vue-inplace-editor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inplace_editor__WEBPACK_IMPORTED_MODULE_1__[\"InPlaceEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: () => {\n    let dropdownData = ['Australia', 'Bermuda', 'Canada', 'Cameroon', 'Denmark', 'Finland', 'Greenland', 'Poland'];\n    return {\n        multiValue: ['Canada', 'Bermuda'],\n        dropdownModel: {\n            dataSource: dropdownData,\n            placeholder: 'Find a country'\n        },\n        autoCompleteModel: {\n            dataSource: dropdownData,\n            placeholder: ' Type to search country'\n        },\n        comboBoxModel: {\n            dataSource: dropdownData,\n            placeholder: 'Find a country'\n        },\n        multiSelectModel: {\n            dataSource: dropdownData,\n            placeholder: 'Choose the countries',\n            mode: 'Box'\n        },\n        popupSettings: {\n            model: { width: 'auto' }\n        },\n        placeFields: { text: 'mode', value: 'value' },\n        dataPlace: [{ value: 'inline', mode: 'Inline' }, { value: 'popup', mode: 'Popup' }],\n        dataValue: 'inline'\n    };\n  },\n  mounted: function(){\n      this.dropObj = this.$refs.dropObj.ej2Instances;\n      this.autoObj = this.$refs.autoObj.ej2Instances;\n      this.comboObbj = this.$refs.comboObbj.ej2Instances;\n      this.multiObj = this.$refs.multiObj.ej2Instances;\n      this.editorMode = this.$refs.editorMode.ej2Instances;\n  },\n  methods: {\n        changeEditorMode: function(args) {\n           var editMode = this.$refs.editorMode.ej2Instances.text;\n           this.dropObj.mode = editMode;\n           this.autoObj.mode = editMode;\n           this.comboObbj.mode = editMode;\n           this.multiObj.mode = editMode;\n        },\n        created: function() {\n            if (document.getElementById(\"right-pane\")) {\n                document.getElementById(\"right-pane\").addEventListener(\"scroll\", this.onScroll);\n            }\n        },\n        onScroll: function() {\n            if (this.editorMode.text === 'Inline') { return; }\n            if (this.$refs.dropObj && this.$refs.dropObj.$el.querySelectorAll('.e-editable-open').length > 0) {\n                this.dropObj.enableEditMode = false;\n            }\n            if (this.$refs.autoObj && this.$refs.autoObj.$el.querySelectorAll('.e-editable-open').length > 0) {\n                this.autoObj.enableEditMode = false;\n            }\n            if (this.$refs.comboObbj && this.$refs.comboObbj.$el.querySelectorAll('.e-editable-open').length > 0) {\n                this.comboObbj.enableEditMode = false;\n            }\n            if (this.$refs.multiObj && this.$refs.multiObj.$el.querySelectorAll('.e-editable-open').length > 0) {\n                this.multiObj.enableEditMode = false;\n            }\n        }\n  },\n  provide:{\n        \"inplaceeditor\":[_syncfusion_ej2_vue_inplace_editor__WEBPACK_IMPORTED_MODULE_1__[\"AutoComplete\"], _syncfusion_ej2_vue_inplace_editor__WEBPACK_IMPORTED_MODULE_1__[\"MultiSelect\"], _syncfusion_ej2_vue_inplace_editor__WEBPACK_IMPORTED_MODULE_1__[\"ComboBox\"]]\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/inplace-editor/dropdowns/App.vue?vue&type=template&id=0a222d9e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/inplace-editor/dropdowns/App.vue?vue&type=template&id=0a222d9e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"control-sections\", staticStyle: { overflow: \"hidden\" } },\n    [\n      _c(\n        \"div\",\n        {\n          staticClass:\n            \"col-lg-8 control-section inplace-control-section drop-down-layout\"\n        },\n        [\n          _c(\"div\", { staticClass: \"control_wrapper\" }, [\n            _c(\"table\", [\n              _c(\"tr\", [\n                _vm._m(0),\n                _vm._v(\" \"),\n                _c(\n                  \"td\",\n                  [\n                    _c(\"ejs-inplaceeditor\", {\n                      ref: \"dropObj\",\n                      attrs: {\n                        id: \"dropdownEle\",\n                        mode: \"Inline\",\n                        type: \"DropDownList\",\n                        value: \"Canada\",\n                        model: _vm.dropdownModel\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"tr\", [\n                _vm._m(1),\n                _vm._v(\" \"),\n                _c(\n                  \"td\",\n                  [\n                    _c(\"ejs-inplaceeditor\", {\n                      ref: \"autoObj\",\n                      attrs: {\n                        id: \"autoCompleteEle\",\n                        mode: \"Inline\",\n                        type: \"AutoComplete\",\n                        value: \"Australia\",\n                        model: _vm.autoCompleteModel\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"tr\", [\n                _vm._m(2),\n                _vm._v(\" \"),\n                _c(\n                  \"td\",\n                  [\n                    _c(\"ejs-inplaceeditor\", {\n                      ref: \"comboObbj\",\n                      attrs: {\n                        id: \"comboBoxEle\",\n                        mode: \"Inline\",\n                        type: \"ComboBox\",\n                        value: \"Finland\",\n                        model: _vm.comboBoxModel\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"tr\", [\n                _vm._m(3),\n                _vm._v(\" \"),\n                _c(\n                  \"td\",\n                  [\n                    _c(\"ejs-inplaceeditor\", {\n                      ref: \"multiObj\",\n                      attrs: {\n                        id: \"multiSelectEle\",\n                        mode: \"Inline\",\n                        type: \"MultiSelect\",\n                        value: _vm.multiValue,\n                        model: _vm.multiSelectModel,\n                        popupSettings: _vm.popupSettings,\n                        created: _vm.created\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ])\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"col-lg-4 property-section\",\n          attrs: { id: \"dropdownProperty\" }\n        },\n        [\n          _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n            _c(\"tr\", [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"editorMode\",\n                      staticClass: \"form-control\",\n                      attrs: {\n                        id: \"editorMode\",\n                        width: \"90%\",\n                        dataSource: _vm.dataPlace,\n                        change: _vm.changeEditorMode,\n                        value: _vm.dataValue,\n                        fields: _vm.placeFields\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ])\n        ]\n      ),\n      _vm._v(\" \"),\n      _vm._m(5),\n      _vm._v(\" \"),\n      _vm._m(6)\n    ]\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"label\", { staticClass: \"control-label\" }, [\n        _vm._v(\"\\n                        DropDownList \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"label\", { staticClass: \"control-label\" }, [\n        _vm._v(\"\\n                        AutoComplete \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"label\", { staticClass: \"control-label\" }, [\n        _vm._v(\" ComboBox\\n                        \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"label\", { staticClass: \"control-label\" }, [\n        _vm._v(\" MultiSelect\\n                        \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Mode\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates the usage of drop-down components such as AutoComplete, ComboBox, DropDownList, and MultiSelect. Click on the dotted input element to switch to the\\n            editable state of the corresponding integrated component.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample illustrates the way to integrate drop-down components with \"\n        ),\n        _c(\"code\", [_vm._v(\"In-place Editor\")]),\n        _vm._v(\n          \". The\\n            applicable types of components are:\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"ul\", [\n          _c(\"li\", [_c(\"code\", [_vm._v(\"DropDownList\")])]),\n          _vm._v(\" \"),\n          _c(\"li\", [_c(\"code\", [_vm._v(\"AutoComplete\")])]),\n          _vm._v(\" \"),\n          _c(\"li\", [_c(\"code\", [_vm._v(\"ComboBox\")])]),\n          _vm._v(\" \"),\n          _c(\"li\", [_c(\"code\", [_vm._v(\"MultiSelect\")])])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            The above components and their features are editable in place and can be customized with the model\\n            properties of the specific component.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n            More information on the \"),\n        _c(\"code\", [_vm._v(\"In-place Editor\")]),\n        _vm._v(\" instantiation can be found in the \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/inplace-editor/getting-started/\"\n            }\n          },\n          [_vm._v(\"\\n                documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/inplace-editor/dropdowns/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });