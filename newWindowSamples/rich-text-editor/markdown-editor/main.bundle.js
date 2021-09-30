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
/******/ 		"rich-text-editor/markdown-editor/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/markdown-editor/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/markdown-editor/App.vue":
/*!**********************************************************!*\
  !*** ./Samples/rich-text-editor/markdown-editor/App.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2c615a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2c615a04& */ \"./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=template&id=2c615a04&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2c615a04___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2c615a04___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/markdown-editor/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=template&id=2c615a04&":
/*!*****************************************************************************************!*\
  !*** ./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=template&id=2c615a04& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2c615a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2c615a04& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=template&id=2c615a04&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2c615a04___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2c615a04___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/markdown-editor/main.js":
/*!**********************************************************!*\
  !*** ./Samples/rich-text-editor/markdown-editor/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/markdown-editor/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.rte-markdown-overview .e-richtexteditor textarea.e-content {\\n  float: left;\\n}\\n.rte-markdown-overview .e-richtexteditor .e-rte-content {\\n  overflow: hidden;\\n}\\n.rte-markdown-overview .e-md-preview::before {\\n  content: \\\"\\\\E345\\\";\\n}\\n.rte-markdown-overview .e-icon-btn.e-active .e-md-preview.e-icons::before {\\n  content: \\\"\\\\E350\\\";\\n}\\n.bootstrap4 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {\\n  content: \\\"\\\\E790\\\";\\n}\\n.bootstrap4 .rte-markdown-overview .e-icon-btn .e-md-preview::before {\\n  content: \\\"\\\\E787\\\";\\n}\\n.tailwind .rte-markdown-overview .e-icon-btn .e-md-preview::before {\\n  content: '\\\\E7D0';\\n}\\n.tailwind .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {\\n  content: '\\\\E748';\\n}\\n.bootstrap5 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {\\n}\\n.bootstrap5 .rte-markdown-overview .e-icon-btn .e-md-preview::before {\\n    content: '\\\\E7DE';\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-NRYKUOM7NHKJM376GVKLR3KK33Y66MQVQKZQHRDE2GOQNLXZ2DUQ/Samples/rich-text-editor/markdown-editor/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;CACC;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.rte-markdown-overview .e-richtexteditor textarea.e-content {\\n  float: left;\\n}\\n.rte-markdown-overview .e-richtexteditor .e-rte-content {\\n  overflow: hidden;\\n}\\n.rte-markdown-overview .e-md-preview::before {\\n  content: \\\"\\\\e345\\\";\\n}\\n.rte-markdown-overview .e-icon-btn.e-active .e-md-preview.e-icons::before {\\n  content: \\\"\\\\e350\\\";\\n}\\n.bootstrap4 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {\\n  content: \\\"\\\\e790\\\";\\n}\\n.bootstrap4 .rte-markdown-overview .e-icon-btn .e-md-preview::before {\\n  content: \\\"\\\\e787\\\";\\n}\\n.tailwind .rte-markdown-overview .e-icon-btn .e-md-preview::before {\\n  content: '\\\\e7d0';\\n}\\n.tailwind .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {\\n  content: '\\\\e748';\\n}\\n.bootstrap5 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {\\n}\\n.bootstrap5 .rte-markdown-overview .e-icon-btn .e-md-preview::before {\\n    content: '\\\\e7de';\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-base */ \"./node_modules/@syncfusion/ej2-vue-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n  \nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);  \n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      id: \"\",\n      mdsource: null,\n      htmlPreview: null,\n      textArea: null,\n      previewTextArea: null,\n      height: \"250px\",\n      editorMode: \"Markdown\",\n      formatter: new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"MarkdownFormatter\"]({ listTags: { 'OL': '1., 2., 3.'} }),\n      toolbarSettings: {\n        items: [\"Bold\", \"Italic\", \"StrikeThrough\", \"|\", \"Formats\", \"OrderedList\", \"UnorderedList\", 'SuperScript', 'SubScript', \"|\",\n          \"CreateLink\", \"Image\", \"CreateTable\", \"|\",\n          { tooltipText: \"Preview\", template: '<button id=\"preview-code\" class=\"e-tbar-btn e-control e-btn e-icon-btn\">' +\n            '<span class=\"e-btn-icon e-md-preview e-icons\"></span></button>'\n            }, \"|\", \"Undo\", \"Redo\"\n        ]\n      }\n    };\n  },\n  methods: {\n    created: function() {\n      this.rteObj = this.$refs.rteInstance.ej2Instances;\n      this.textArea = this.rteObj.contentModule.getEditPanel();\n      this.id = this.$refs.rteInstance.ej2Instances.getID() + \"html-preview\";\n      this.mdsource = document.getElementById(\"preview-code\");\n      this.htmlPreview = this.rteObj.element.querySelector(this.id);\n      this.previewTextArea = this.rteObj.element.querySelector(\".e-rte-content\");\n      this.textArea.onkeyup = Event => {\n        this.markDownConversion();\n      };\n      this.mdsource.onclick = e => {\n        this.fullPreview();\n        if (e.currentTarget.classList.contains(\"e-active\")) {\n          this.$refs.rteInstance.disableToolbarItem([\"Bold\", \"Italic\", 'SuperScript', 'SubScript', \"StrikeThrough\", \"Formats\", \"OrderedList\", \"UnorderedList\", \"CreateLink\", \"Image\", \"CreateTable\"]);\n        } else {\n          this.$refs.rteInstance.enableToolbarItem([\"Bold\", \"Italic\", 'SuperScript', 'SubScript', \"StrikeThrough\", \"Formats\", \"OrderedList\", \"UnorderedList\", \"CreateLink\", \"Image\", \"CreateTable\"]);\n        }\n      };\n    },\n    markDownConversion: function() {\n      if (this.mdsource.classList.contains(\"e-active\")) {\n        this.htmlPreview.innerHTML = marked(this.textArea.value);\n      }\n    },\n    fullPreview: function() {\n      if (this.mdsource.classList.contains(\"e-active\")) {\n        this.mdsource.classList.remove(\"e-active\");\n        this.textArea.style.display = \"block\";\n        this.htmlPreview.style.display = \"none\";\n        this.previewTextArea.style.overflow = \"hidden\";\n      } else {\n        this.mdsource.classList.add(\"e-active\");\n        if (!this.htmlPreview) {\n          this.htmlPreview = document.createElement(\"div\");\n          this.htmlPreview.setAttribute(\"class\", \"e-content e-pre-source\");\n          this.htmlPreview.setAttribute(\"id\", this.id);\n          this.textArea.parentNode.appendChild(this.htmlPreview);\n          this.previewTextArea.style.overflow = \"auto\";\n        }\n        if (this.previewTextArea.style.overflow === \"hidden\") {\n          this.previewTextArea.style.overflow = \"auto\";\n        }\n        this.textArea.style.display = \"none\";\n        this.htmlPreview.style.display = \"block\";\n        this.htmlPreview.innerHTML = marked(this.textArea.value);\n        this.mdsource.parentElement.title = \"Code View\";\n      }\n    }\n  },\n  provide: {\n    richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"MarkdownEditor\"]]\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=template&id=2c615a04&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/markdown-editor/App.vue?vue&type=template&id=2c615a04& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section rte-markdown-overview\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\"div\", { staticClass: \"default-section\" }, [\n          _c(\n            \"div\",\n            { attrs: { id: \"defaultRTE\" } },\n            [\n              _c(\n                \"ejs-richtexteditor\",\n                {\n                  ref: \"rteInstance\",\n                  attrs: {\n                    id: \"MDdefault\",\n                    toolbarSettings: _vm.toolbarSettings,\n                    formatter: _vm.formatter,\n                    created: _vm.created,\n                    editorMode: _vm.editorMode,\n                    height: _vm.height\n                  }\n                },\n                [\n                  _vm._v(\n                    \"\\nThe sample is added to showcase **markdown editing**.\\n\\nType or edit the content and apply formatting to view markdown formatted content.\\n\\nWe can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).\\n\\nThe third-party library \"\n                  ),\n                  _c(\"b\", [_vm._v(\"Marked\")]),\n                  _vm._v(\n                    \" is used in this sample to convert markdown into HTML content.\\n            \"\n                  )\n                ]\n              )\n            ],\n            1\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/markdown-editor/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });