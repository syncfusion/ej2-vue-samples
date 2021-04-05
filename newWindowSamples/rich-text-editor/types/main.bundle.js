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
/******/ 		"rich-text-editor/types/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/types/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/types/App.vue":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/types/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_09306ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=09306ea8&scoped=true& */ \"./Samples/rich-text-editor/types/App.vue?vue&type=template&id=09306ea8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/types/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_09306ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css& */ \"./Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_09306ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_09306ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"09306ea8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/types/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/types/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/rich-text-editor/types/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/types/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_09306ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_09306ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_09306ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_09306ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_09306ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/types/App.vue?vue&type=template&id=09306ea8&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/rich-text-editor/types/App.vue?vue&type=template&id=09306ea8&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_09306ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=09306ea8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/types/App.vue?vue&type=template&id=09306ea8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_09306ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_09306ea8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/types/main.js":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/types/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/types/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start */\\n.sb-header[data-v-09306ea8] {\\n  z-index: 100;\\n}\\n.property-panel-table div[data-v-09306ea8] {\\n  padding-left: 0;\\n}\\n.sb-content.e-view.hide-header[data-v-09306ea8] {\\n    top: 0 !important;\\n}\\n.sb-header.e-view.hide-header[data-v-09306ea8] {\\n    display: none;\\n}\\n/* custom code end */\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-HTI3XUCYBVSIODYF4EYW6R22RTD4LT5YFWU25ACX5FNZJ3MNAD2A/Samples/rich-text-editor/types/App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuEA,uBAAuB;AACvB;EACE,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,cAAc;CACjB;AACD,qBAAqB\",\"file\":\"App.vue?vue&type=style&index=0&id=09306ea8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start */\\n.sb-header[data-v-09306ea8] {\\n  z-index: 100;\\n}\\n.property-panel-table div[data-v-09306ea8] {\\n  padding-left: 0;\\n}\\n.sb-content.e-view.hide-header[data-v-09306ea8] {\\n    top: 0 !important;\\n}\\n.sb-header.e-view.hide-header[data-v-09306ea8] {\\n    display: none;\\n}\\n/* custom code end */\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/types/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/types/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"CheckBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      data: [{ text: \"Expand\", value: 1 }, { text: \"MultiRow\", value: 2 }],\n      fields: { text: \"text\", value: \"value\" },\n      toolbarSettings: {\n        type: \"Expand\",\n        enableFloating: true,\n        items: [\n          \"Bold\",\n          \"Italic\",\n          \"Underline\",\n          \"StrikeThrough\",\n          \"FontName\",\n          \"FontSize\",\n          \"FontColor\",\n          \"BackgroundColor\",\n          \"LowerCase\",\n          \"UpperCase\",\n          \"|\",\n          \"Formats\",\n          \"Alignments\",\n          \"OrderedList\",\n          \"UnorderedList\",\n          \"Outdent\",\n          \"Indent\",\n          \"|\",\n          \"CreateLink\",\n          \"Image\",\n          \"|\",\n          \"ClearFormat\",\n          \"Print\",\n          \"SourceCode\",\n          \"FullScreen\",\n          \"|\",\n          \"Undo\",\n          \"Redo\"\n        ]\n      }\n    };\n  },\n  methods: {\n    onChange: function(e) {\n      switch (this.$refs.dropdownInstance.ej2Instances.value) {\n        case 1:\n          this.$refs.rteInstance.ej2Instances.toolbarSettings.type = \"Expand\";\n          break;\n        case 2:\n          this.$refs.rteInstance.ej2Instances.toolbarSettings.type = \"MultiRow\";\n          break;\n      }\n      this.$refs.rteInstance.ej2Instances.dataBind();\n    },\n    onFloatChange: function(args) {\n      this.$refs.rteInstance.ej2Instances.toolbarSettings.enableFloating =\n        args.checked;\n    },\n    handleFullScreen: function(e) {\n      var sbCntEle = document.querySelector('.sb-content.e-view');\n      var sbHdrEle = document.querySelector('.sb-header.e-view');\n      var leftBar;\n      var transformElement;\n      if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n        leftBar = document.querySelector(\"#right-sidebar\");\n        transformElement = document.querySelector(\n          \".sample-browser.e-view.e-content-animation\"\n        );\n      } else {\n        leftBar = document.querySelector(\"#left-sidebar\");\n        transformElement = document.querySelector(\"#right-pane\");\n      }\n      if (e.targetItem === \"Maximize\") {\n        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isIos) {\n          Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([sbCntEle, sbHdrEle], ['hide-header']);\n        }\n        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([leftBar], [\"e-close\"]);\n        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([leftBar], [\"e-open\"]);\n        if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n          transformElement.style.marginLeft = \"0px\";\n        }\n        transformElement.style.transform = \"inherit\";\n      } else if (e.targetItem === \"Minimize\") {\n        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isIos) {\n          Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([sbCntEle, sbHdrEle], ['hide-header']);\n        }\n        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([leftBar], [\"e-close\"]);\n        if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n          Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([leftBar], [\"e-open\"]);\n          transformElement.style.marginLeft = leftBar.offsetWidth + \"px\";\n        }\n        transformElement.style.transform = \"translateX(0px)\";\n      }\n    },\n    actionCompleteHandler: function(e) {\n        var proxy = this;\n        setTimeout(function() {\n          proxy.$refs.rteInstance.ej2Instances.refreshUI();\n        }, 400);\n    }\n  },\n  provide: {\n    richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"]]\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/types/App.vue?vue&type=template&id=09306ea8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/types/App.vue?vue&type=template&id=09306ea8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"default-section\" },\n          [\n            _c(\n              \"ejs-richtexteditor\",\n              {\n                ref: \"rteInstance\",\n                attrs: {\n                  id: \"rte\",\n                  actionBegin: _vm.handleFullScreen,\n                  actionComplete: _vm.actionCompleteHandler,\n                  toolbarSettings: _vm.toolbarSettings\n                }\n              },\n              [\n                _c(\"p\", [\n                  _vm._v(\n                    'The Rich Text Editor is a WYSIWYG (\"what you see is what you get\") editor useful to create and edit content and return the valid HTML markup or markdown of the content'\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", [_c(\"b\", [_vm._v(\"Toolbar\")])]),\n                _vm._v(\" \"),\n                _c(\"ol\", [\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"The Toolbar contains commands to align the text, insert a link, insert an image, insert list, undo/redo operations, HTML view, etc \"\n                      )\n                    ])\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"li\", [\n                    _c(\"p\", [_vm._v(\"The Toolbar is fully customizable \")])\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", [_c(\"b\", [_vm._v(\"Links\")])]),\n                _vm._v(\" \"),\n                _c(\"ol\", [\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"You can insert a hyperlink with its corresponding dialog \"\n                      )\n                    ])\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\"Attach a hyperlink to the displayed text. \")\n                    ])\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"Customize the quick toolbar based on the hyperlink \"\n                      )\n                    ])\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", [_c(\"b\", [_vm._v(\"Validation\")])]),\n                _vm._v(\" \"),\n                _c(\"ul\", [\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"The editor’s content can be validated on form submission by applying validation rules and validation message\"\n                      )\n                    ])\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", [_c(\"b\", [_vm._v(\"Locale.\")])]),\n                _c(\"p\"),\n                _vm._v(\" \"),\n                _c(\"ul\", [\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"The editor provides an option to localize its static strings to adapt the editor to a local language.\"\n                      )\n                    ])\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", [_c(\"b\", [_vm._v(\"Image.\")])]),\n                _c(\"p\"),\n                _vm._v(\" \"),\n                _c(\"ol\", [\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"Allows you to insert images from an online source as well as the local computer \"\n                      )\n                    ])\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"li\", [_c(\"p\", [_vm._v(\"You can upload an image \")])]),\n                  _vm._v(\" \"),\n                  _c(\"li\", [\n                    _c(\"p\", [\n                      _vm._v(\n                        \"Provides an option to customize the quick toolbar for an image \"\n                      )\n                    ])\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"img\", {\n                  attrs: {\n                    alt: \"Logo\",\n                    src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/RTEImage-Feather.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n                  }\n                })\n              ]\n            )\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"div\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n        _c(\"table\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticStyle: { width: \"150px\" } },\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"dropdownInstance\",\n                      attrs: {\n                        dataSource: _vm.data,\n                        change: _vm.onChange,\n                        index: \"0\",\n                        fields: _vm.fields,\n                        placeholder: \"Types\",\n                        floatLabelType: \"Auto\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"checkInstance\",\n                      attrs: {\n                        label: \"Enable Floating\",\n                        change: _vm.onFloatChange,\n                        id: \"float\",\n                        checked: \"false\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the different behavior of toolbar support in the Rich Text Editor. Change the toolbar type as multiRow or expand from the property panel to see its appearance . Check or uncheck the floating toolbar in property panel to look on its behavior.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Floating\")]),\n        _vm._v(\n          \": set boolean value to toolbarSettings.enableFloating property to enable or disable the floating toolbar.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \" The Rich Text Editor allows you to configure different types of toolbar using \"\n        ),\n        _c(\"code\", [_vm._v(\"toolbarSettings.type\")]),\n        _vm._v(\" property. The types of\\n        toolbar are: \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Expand\")]),\n          _vm._v(\n            \": The toolbar hides the overflowing items in the next row. Click the expand arrow to view overflowing toolbar items\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Multi Row\")]),\n          _vm._v(\": The toolbar hides the overflowing items in the next row.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Injecting Module\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Toolbar, Link, Image, HtmlEditor, QuickToolbar\")]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/types/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });