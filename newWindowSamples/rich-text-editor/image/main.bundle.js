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
/******/ 		"rich-text-editor/image/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/image/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/image/App.vue":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=72e1178e& */ \"./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/image/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&":
/*!*******************************************************************************!*\
  !*** ./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=72e1178e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_72e1178e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/data-source.json":
/*!*********************************************************!*\
  !*** ./Samples/rich-text-editor/image/data-source.json ***!
  \*********************************************************/
/*! exports provided: formatData, saveFormat, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formatData\\\":[{\\\"Id\\\":\\\"prompt\\\",\\\"format\\\":\\\"Prompt\\\"},{\\\"Id\\\":\\\"plainTextFormatting\\\",\\\"format\\\":\\\"Plain Text\\\"},{\\\"Id\\\":\\\"keepFormating\\\",\\\"format\\\":\\\"Keep Format\\\"},{\\\"Id\\\":\\\"cleanFormatting\\\",\\\"format\\\":\\\"Clean Format\\\"}],\\\"saveFormat\\\":[{\\\"Id\\\":\\\"Blob\\\",\\\"format\\\":\\\"blob\\\"},{\\\"Id\\\":\\\"Base64\\\",\\\"format\\\":\\\"base\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/data-source.json?");

/***/ }),

/***/ "./Samples/rich-text-editor/image/main.js":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/image/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/image/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E341\\\";\\n}\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E354\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E752\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E778\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\E7BD\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\E7B9\\\";\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-V34WO6CYYBJ3BND54PDYYHTZIVCCO5H4E4LMJD5OWRF7D4CRQISA/Samples/rich-text-editor/image/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e341\\\";\\n}\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e354\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e752\\\";\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e778\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {\\n    content: \\\"\\\\e7bd\\\";\\n}\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {\\n    content: \\\"\\\\e7b9\\\";\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _data_source_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source.json */ \"./Samples/rich-text-editor/image/data-source.json\");\nvar _data_source_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-source.json */ \"./Samples/rich-text-editor/image/data-source.json\", 1);\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"CheckBoxPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n             height: '200px',\n            formatData: _data_source_json__WEBPACK_IMPORTED_MODULE_3__[\"saveFormat\"],\n            fields: { text: 'Id', value: 'Id' },\n            value: 'Blob',\n            enableAutoUrl : false,\n             insertImageSettings: {\n                saveFormat: 'Blob'\n            },\n    quickToolbarSettings: {\n            image: [\n                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',\n                'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',\n                {\n                    tooltipText: 'Rotate Left',\n                    template: '<button class=\"e-tbar-btn e-btn\" id=\"roatateLeft\"><span class=\"e-btn-icon e-icons e-rotate-left\"></span>'\n                },\n                {\n                    tooltipText: 'Rotate Right',\n                    template: '<button class=\"e-tbar-btn e-btn\" id=\"roatateRight\"><span class=\"e-btn-icon e-icons e-rotate-right\"></span>'\n                }\n            ]\n        }\n        };\n        },\n        methods: {\n            onToolbarClick: function(e) {\n            var nodeObj = new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"NodeSelection\"]();\n            var range = nodeObj.getRange(this.$refs.rteObj.ej2Instances.contentModule.getDocument());\n            var imgEle = nodeObj.getNodeCollection(range)[0];\n            if (e.item.tooltipText === 'Rotate Right') {\n                var transform = (imgEle.style.transform === '') ? 0 :\n                    parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);\n                imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';\n                this.$refs.rteObj.ej2Instances.formatter.saveData();\n                this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);\n            }\n            else if (e.item.tooltipText === 'Rotate Left') {\n                var transform = (imgEle.style.transform === '') ? 0 :\n                    Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));\n                imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';\n                defaulthis.$refs.rteObj.ej2Instances.tRTE.formatter.saveData();\n                this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);\n            }\n            },\n             formatChange: function() {\n             if (this.$refs.formatOptionInstance.ej2Instances.value === 'Base64') {\n                this.$refs.rteObj.ej2Instances.insertImageSettings.saveFormat = 'Base64';\n            } else {\n                this.$refs.rteObj.ej2Instances.insertImageSettings.saveFormat = 'Blob';\n            }\n            this.$refs.rteObj.ej2Instances.dataBind();\n        },\n        changeCheck: function(args) {\n           this.$refs.rteObj.ej2Instances.enableAutoUrl = args.checked;\n           this.$refs.rteObj.ej2Instances.dataBind();\n    },\n        },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"],  _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image/App.vue?vue&type=template&id=72e1178e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\", staticStyle: { overflow: \"hidden\" } },\n      [\n        _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n          _c(\"div\", { staticClass: \"control-wrapper\" }, [\n            _c(\"div\", { staticClass: \"sample-container\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"default-section\" },\n                [\n                  _c(\n                    \"ejs-richtexteditor\",\n                    {\n                      ref: \"rteObj\",\n                      attrs: {\n                        enableAutoUrl: _vm.enableAutoUrl,\n                        insertImageSettings: _vm.insertImageSettings,\n                        quickToolbarSettings: _vm.quickToolbarSettings,\n                        toolbarClick: _vm.onToolbarClick\n                      }\n                    },\n                    [\n                      _c(\"p\", [\n                        _vm._v(\n                          \"Rich Text Editor allows inserting images from online sources as well as the local computers where you want to insert the image in your content.\"\n                        )\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"p\", [\n                        _c(\"b\", [\n                          _vm._v(\n                            \"Get started Quick Toolbar to click on the image\"\n                          )\n                        ])\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"p\", [\n                        _vm._v(\n                          \"It is possible to add custom style on the selected image inside the Rich Text Editor through the quick toolbar.\"\n                        )\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"img\", {\n                        staticStyle: {\n                          width: \"300px\",\n                          height: \"300px\",\n                          transform: \"rotate(0deg)\"\n                        },\n                        attrs: {\n                          id: \"rteImageID\",\n                          alt: \"Logo\",\n                          src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/RTEImage-Feather.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n                        }\n                      })\n                    ]\n                  )\n                ],\n                1\n              )\n            ])\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n          _c(\"div\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n            _c(\"table\", { attrs: { title: \"Properties\", id: \"property\" } }, [\n              _c(\"tbody\", [\n                _c(\"tr\", [\n                  _vm._m(0),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      [\n                        _c(\"ejs-checkbox\", {\n                          ref: \"checkInstance\",\n                          attrs: { change: _vm.changeCheck, id: \"enablehtml\" }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"tr\", [\n                  _vm._m(1),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      [\n                        _c(\"ejs-dropdownlist\", {\n                          ref: \"formatOptionInstance\",\n                          attrs: {\n                            dataSource: _vm.formatData,\n                            fields: _vm.fields,\n                            popupHeight: _vm.height,\n                            change: _vm.formatChange,\n                            value: _vm.value\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ])\n              ])\n            ])\n          ])\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Enable AutoUrl\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Format Option \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the option to insert the image to the Rich Text Editor content. Click the image button from the\\n            toolbar item to insert the image.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"Image tools used to insert an image to the Rich Text Editor and click on the image to easily customize the image using quick toolbar. \\n    The quick toolbar has the following items\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Replace\")]),\n          _vm._v(\" – can replace the image with some other image.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Align\")]),\n          _vm._v(\" – Align the image with left, right and justify.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Image captions\")]),\n          _vm._v(\" – set the captions for the image.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Change size\")]),\n          _vm._v(\" – modify width and height of image.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Delete\")]),\n          _vm._v(\" – delete the image.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Link\")]),\n          _vm._v(\" – provide the link to the image.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Display\")]),\n          _vm._v(\" - display the image as inline or with break.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Alternate text\")]),\n          _vm._v(\n            \" – provide the alternative text for the image if the image is not present in the location.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Resize\")]),\n          _vm._v(\" – can resize the image dimension with resize options.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Injecting Module:\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Toolbar, Link, Image, HtmlEditor, QuickToolbar\")]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });