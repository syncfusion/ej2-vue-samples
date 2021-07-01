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
/******/ 		"document-editor/notes/main": 0
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
/******/ 	deferredModules.push(["./Samples/document-editor/notes/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/document-editor/notes/App.vue":
/*!***********************************************!*\
  !*** ./Samples/document-editor/notes/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6c9e813f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6c9e813f& */ \"./Samples/document-editor/notes/App.vue?vue&type=template&id=6c9e813f&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/document-editor/notes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6c9e813f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6c9e813f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/document-editor/notes/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?");

/***/ }),

/***/ "./Samples/document-editor/notes/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/document-editor/notes/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/document-editor/notes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?");

/***/ }),

/***/ "./Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?");

/***/ }),

/***/ "./Samples/document-editor/notes/App.vue?vue&type=template&id=6c9e813f&":
/*!******************************************************************************!*\
  !*** ./Samples/document-editor/notes/App.vue?vue&type=template&id=6c9e813f& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6c9e813f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6c9e813f& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/document-editor/notes/App.vue?vue&type=template&id=6c9e813f&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6c9e813f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6c9e813f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?");

/***/ }),

/***/ "./Samples/document-editor/notes/data.ts":
/*!***********************************************!*\
  !*** ./Samples/document-editor/notes/data.ts ***!
  \***********************************************/
/*! exports provided: WEB_API_ACTION, defaultDocument, bulletAndNumbering, characterFormat, headerFooter, links, paragraphFormat, sectionFormat, styles, tableFormat, toc, rtlDocument, chartDocument, dataProtection, comments, weblayout, formfields, trackchanges, mailmerge, notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./Samples/document-editor/notes/main.js":
/*!***********************************************!*\
  !*** ./Samples/document-editor/notes/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/document-editor/notes/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#documenteditor_titlebar {\\n    height: 36px;\\n    line-height: 26px;\\n    width: 100%;\\n    font-size: 12px;\\n    padding-left: 15px;\\n    padding-right: 10px;\\n    font-family: inherit;\\n}\\n#documenteditor_title_contentEditor {\\n    height: 26px;\\n    max-width: 85%;\\n    width: auto;\\n    overflow: hidden;\\n    display: inline-block;\\n    padding-left: 4px;\\n    padding-right: 4px;\\n    margin: 5px;\\n}\\n[contenteditable=\\\"true\\\"].single-line {\\n    white-space: nowrap;\\n    border-color: #e4e4e4 !important;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-AIA54XEIIKJDIBO4SKXTECHJ7VIXW5YT2FB7FJRKSFIN3ZZH64CQ/Samples/document-editor/notes/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;CACxB;AACD;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;CACf;AACD;IACI,oBAAoB;IACpB,iCAAiC;CACpC\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#documenteditor_titlebar {\\n    height: 36px;\\n    line-height: 26px;\\n    width: 100%;\\n    font-size: 12px;\\n    padding-left: 15px;\\n    padding-right: 10px;\\n    font-family: inherit;\\n}\\n#documenteditor_title_contentEditor {\\n    height: 26px;\\n    max-width: 85%;\\n    width: auto;\\n    overflow: hidden;\\n    display: inline-block;\\n    padding-left: 4px;\\n    padding-right: 4px;\\n    margin: 5px;\\n}\\n[contenteditable=\\\"true\\\"].single-line {\\n    white-space: nowrap;\\n    border-color: #e4e4e4 !important;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/document-editor/notes/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/document-editor/notes/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_documenteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-documenteditor */ \"./node_modules/@syncfusion/ej2-vue-documenteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_splitbuttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-splitbuttons */ \"./node_modules/@syncfusion/ej2-vue-splitbuttons/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./Samples/document-editor/notes/data.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_documenteditor__WEBPACK_IMPORTED_MODULE_1__[\"DocumentEditorContainerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_splitbuttons__WEBPACK_IMPORTED_MODULE_2__[\"DropDownButtonPlugin\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  components: {\n    },\n    data: function() {\n        return {\n          hostUrl : 'https://ej2services.syncfusion.com/production/web-services/',\n          documentName : 'Footnotes and Endnotes',\n          documentTitle: 'Untitled Document',\n          iconStyle: 'float:right;background: transparent;box-shadow:none;border-color: transparent;border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400;font-family:inherit;',\n            titileStyle: 'text-transform:capitalize;font-weight:400;font-family:inherit;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text',\n            openIconCss: 'e-de-icon-Open e-de-padding-right',\n            printIconCss: 'e-de-icon-Print e-de-padding-right',\n            exportIconCss: 'e-de-icon-Download e-de-padding-right',\n            exportItems: [\n                { text: 'Microsoft Word (.docx)', id: 'word' },\n                { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' }\n            ]\n        };\n    },  \n    provide:{\n        DocumentEditorContainer:[_syncfusion_ej2_vue_documenteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"]]\n    },\n      methods: {\n        onExport: function (args) {\n            switch (args.item.id) {\n                case 'word':\n                    this.save('Docx');\n                    break;\n                case 'sfdt':\n                    this.save('Sfdt');\n                    break;\n            }\n        },\n        openExportDropDown: function () {\n            // tslint:disable-next-line:max-line-length\n            document.getElementById('word').setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');\n            // tslint:disable-next-line:max-line-length\n            document.getElementById('sfdt').setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');\n        },\n        save: function (format) {\n            // tslint:disable-next-line:max-line-length\n             this.$refs.doceditcontainer.ej2Instances.documentEditor.save( this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName === '' ? 'sample' :  this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName, format);\n        },\n        openBtnClick: function () {\n            this.$refs.uploadDocument.click();\n        },\n        printBtnClick: function () {\n            this.$refs.doceditcontainer.ej2Instances.documentEditor.print();\n        },\n        titleBarKeydownEvent: function (e) {\n            if (e.keyCode === 13) {\n                e.preventDefault();\n                document.getElementById(\"documenteditor_title_contentEditor\").contentEditable = 'false';\n                if (document.getElementById(\"documenteditor_title_contentEditor\").textContent === '') {\n                    document.getElementById(\"documenteditor_title_contentEditor\").textContent = 'Document1';\n                }\n            }\n        },\n        titleBarBlurEvent: function (args) {\n            if (document.getElementById(\"documenteditor_title_contentEditor\").textContent === '') {\n                document.getElementById(\"documenteditor_title_contentEditor\").textContent = 'Document1';\n            }\n            document.getElementById(\"documenteditor_title_contentEditor\").contentEditable = 'false';\n            this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName = document.getElementById(\"documenteditor_title_name\").textContent;\n        },\n        titleBarClickEvent: function () {\n            this.updateDocumentEditorTitle();\n        },\n        updateDocumentEditorTitle: function () {\n            document.getElementById(\"documenteditor_title_contentEditor\").contentEditable = 'true';\n            document.getElementById(\"documenteditor_title_contentEditor\").focus();\n            window.getSelection().selectAllChildren(document.getElementById(\"documenteditor_title_contentEditor\"));\n        },\n        documentChangedEvent: function () {\n            var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;\n            this.documentTitle = obj.documentName === '' ? 'Untitled Document' : obj.documentName;\n            document.getElementById(\"documenteditor_title_name\").textContent = obj.documentName ;\n            setTimeout(() => { obj.scrollToPage(1); }, 10);\n        }\n    },\n    mounted() {\n        this.$nextTick(function () {\n          var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;\n          obj.open(JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_3__[\"notes\"]));\n          obj.documentName='Footnotes and Endnotes';\n          this.$refs.doceditcontainer.ej2Instances.serviceUrl = this.hostUrl + 'api/documenteditor/';\n          this.$refs.doceditcontainer.ej2Instances.documentChange = () => {\n                this.documentChangedEvent();\n            };\n       });\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/document-editor/notes/App.vue?vue&type=template&id=6c9e813f&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/document-editor/notes/App.vue?vue&type=template&id=6c9e813f& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { staticClass: \"sample-container\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"default-section\" },\n        [\n          _c(\n            \"div\",\n            {\n              ref: \"de_titlebar\",\n              staticClass: \"e-de-ctn-title\",\n              attrs: { id: \"documenteditor_titlebar\" }\n            },\n            [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"single-line\",\n                  attrs: {\n                    id: \"documenteditor_title_contentEditor\",\n                    title:\n                      \"Document Name. Click or tap to rename this document.\",\n                    contenteditable: \"false\"\n                  },\n                  on: {\n                    keydown: _vm.titleBarKeydownEvent,\n                    click: _vm.titleBarClickEvent\n                  }\n                },\n                [\n                  _c(\n                    \"label\",\n                    {\n                      style: _vm.titileStyle,\n                      attrs: { id: \"documenteditor_title_name\" },\n                      on: { blur: _vm.titleBarBlurEvent }\n                    },\n                    [_vm._v(_vm._s(_vm.documentName))]\n                  )\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"ejs-button\",\n                {\n                  style: _vm.iconStyle,\n                  attrs: {\n                    id: \"de-print\",\n                    iconCss: _vm.printIconCss,\n                    title: \"Print this document (Ctrl+P).\"\n                  },\n                  nativeOn: {\n                    click: function($event) {\n                      return _vm.printBtnClick.apply(null, arguments)\n                    }\n                  }\n                },\n                [_vm._v(\"Print\")]\n              ),\n              _vm._v(\" \"),\n              _c(\"ejs-dropdownbutton\", {\n                ref: \"de-export\",\n                style: _vm.iconStyle,\n                attrs: {\n                  items: _vm.exportItems,\n                  iconCss: _vm.exportIconCss,\n                  cssClass: \"e-caret-hide\",\n                  content: \"Download\",\n                  select: _vm.onExport,\n                  open: _vm.openExportDropDown,\n                  title: \"Download this document.\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\"ejs-documenteditorcontainer\", {\n            ref: \"doceditcontainer\",\n            attrs: { enableToolbar: true, height: \"600px\" }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This example demonstrates footnotes and endnotes support in DocumentEditor. You can add footnotes and endnotes to the document.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", { staticStyle: { display: \"block\" } }, [\n        _vm._v(\n          \"In this example, you can find footnotes and endnotes feature in DocumentEditor.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\"You can insert footnote and end note using toolbar options\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { display: \"block\" } }, [\n        _vm._v(\n          \" More information about the document editor features can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/vue/documentation/document-editor\"\n            }\n          },\n          [_vm._v(\"documentation section.\")]\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/document-editor/notes/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });