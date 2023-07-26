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
/******/ 		"file-manager/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/file-manager/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/file-manager/default/App.vue":
/*!**********************************************!*\
  !*** ./Samples/file-manager/default/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f9e59018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f9e59018& */ \"./Samples/file-manager/default/App.vue?vue&type=template&id=f9e59018&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/file-manager/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_f9e59018_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=f9e59018&lang=css& */ \"./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f9e59018___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f9e59018___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/file-manager/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?");

/***/ }),

/***/ "./Samples/file-manager/default/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/file-manager/default/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?");

/***/ }),

/***/ "./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9e59018_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f9e59018&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9e59018_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9e59018_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9e59018_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9e59018_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?");

/***/ }),

/***/ "./Samples/file-manager/default/App.vue?vue&type=template&id=f9e59018&":
/*!*****************************************************************************!*\
  !*** ./Samples/file-manager/default/App.vue?vue&type=template&id=f9e59018& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f9e59018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f9e59018& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=template&id=f9e59018&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f9e59018___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f9e59018___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?");

/***/ }),

/***/ "./Samples/file-manager/default/main.js":
/*!**********************************************!*\
  !*** ./Samples/file-manager/default/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/file-manager/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/file-manager/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.file-api .property-panel-table div {\\n        padding-top: 0;\\n}\\n.file-api #tool {\\n        padding-top: 5px;\\n}\\n.file-api #tool_toggle {\\n        width: 100px;\\n}\\n#checkboxElement{\\n\\t\\tfont-size:14px;\\n}\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/emanager-vue-samples_development/Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,eAAe;CACtB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;AACD;EACE,eAAe;CAChB\",\"file\":\"App.vue?vue&type=style&index=0&id=f9e59018&lang=css&\",\"sourcesContent\":[\"\\n.file-api .property-panel-table div {\\n        padding-top: 0;\\n}\\n.file-api #tool {\\n        padding-top: 5px;\\n}\\n.file-api #tool_toggle {\\n        width: 100px;\\n}\\n#checkboxElement{\\n\\t\\tfont-size:14px;\\n}\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/file-manager/default/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_filemanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-filemanager */ \"./node_modules/@syncfusion/ej2-vue-filemanager/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_filemanager__WEBPACK_IMPORTED_MODULE_1__[\"FileManagerPlugin\"]);\n/**\n * File Manager API sample\n */\nlet hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {               \n         ajaxSettings:\n            {\n                url: hostUrl + 'api/FileManager/FileOperations',\n                getImageUrl: hostUrl + 'api/FileManager/GetImage',\n                uploadUrl: hostUrl + 'api/FileManager/Upload',\n                downloadUrl: hostUrl + 'api/FileManager/Download' \n            },\n\t\t\ttoolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']},\n            contextMenuSettings: {\n                layout: [\"SortBy\", \"View\", \"Refresh\", \"|\", \"Paste\",  \"|\", \"NewFolder\", \"|\", \"Details\", \"|\", \"SelectAll\"],\n                visible: true\n            },\n            view:\"LargeIcons\",   \t\t\t\n            navigationPaneSettings:\n            {\n                visible: false\n            }, \n\t\t\titems:  ['NewFolder', 'Cut', 'Copy', 'Paste', 'Download', 'Delete', 'Refresh', 'Selection', 'View', 'Details']\n        };\n    },   \n    provide: {\n            filemanager: [_syncfusion_ej2_vue_filemanager__WEBPACK_IMPORTED_MODULE_1__[\"NavigationPane\"], _syncfusion_ej2_vue_filemanager__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_filemanager__WEBPACK_IMPORTED_MODULE_1__[\"DetailsView\"]]\n    },\n    methods: {\n        onChange: function(args) {\n           var fileObj = document.getElementById(\"file\").ej2_instances[0];\n\t\t   if (args.event.target.previousElementSibling.id == \"toolbar\"){\n\t\t\t   fileObj.toolbarSettings.visible = args.checked;\n\t\t   }\n\t\t   if (args.event.target.previousElementSibling.id == \"multiSelect\") {\n            \tfileObj.allowMultiSelection = args.checked;\n        \t}\n           if (args.event.target.previousElementSibling.id == \"fileExtension\") {\n            \tfileObj.showFileExtension = args.checked;\n        \t}\n           if (args.event.target.previousElementSibling.id == \"thumbnail\") {\n            \tfileObj.showThumbnail = args.checked;\n        \t}  \n\t\t},\n\t\titemChange: function(args) {\n\t\t\tvar fileObj = document.getElementById(\"file\").ej2_instances[0];\n        \tvar changedItem = args.itemData.value;\n        \tif (args.element.id == 'enable') {\n            \tfileObj.enableToolbarItems([changedItem]);\n        \t} else {\n            \tfileObj.disableToolbarItems([changedItem]);\n        \t}\n    \t}\n\t}\n}));\n\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=template&id=f9e59018&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/file-manager/default/App.vue?vue&type=template&id=f9e59018& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"file-api\" }, [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"sample-container\" },\n        [\n          _c(\"ejs-filemanager\", {\n            ref: \"fileObject\",\n            attrs: {\n              id: \"file\",\n              ajaxSettings: _vm.ajaxSettings,\n              view: _vm.view,\n              navigationPaneSettings: _vm.navigationPaneSettings,\n              toolbarSettings: _vm.toolbarSettings,\n              contextMenuSettings: _vm.contextMenuSettings,\n            },\n          }),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"div\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n        _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: {\n                      id: \"toolbar\",\n                      checked: true,\n                      change: _vm.onChange,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: {\n                      id: \"multiSelect\",\n                      checked: true,\n                      change: _vm.onChange,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: {\n                      id: \"fileExtension\",\n                      checked: true,\n                      change: _vm.onChange,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: {\n                      id: \"thumbnail\",\n                      checked: true,\n                      change: _vm.onChange,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"disable\",\n                      dataSource: _vm.items,\n                      placeholder: \"Select item\",\n                      change: _vm.itemChange,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"enable\",\n                      dataSource: _vm.items,\n                      placeholder: \"Select item\",\n                      change: _vm.itemChange,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n          ]),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(6),\n    _vm._v(\" \"),\n    _vm._m(7),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { attrs: { id: \"checkboxElement\" } }, [_vm._v(\"Toolbar\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { attrs: { id: \"checkboxElement\" } }, [\n        _vm._v(\"allowMultiSelection\"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { attrs: { id: \"checkboxElement\" } }, [\n        _vm._v(\"showFileExtension\"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { attrs: { id: \"checkboxElement\" } }, [\n        _vm._v(\"showThumbnail\"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { attrs: { id: \"checkboxElement\" } }, [_vm._v(\"Disable\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { attrs: { id: \"checkboxElement\" } }, [_vm._v(\"Enable\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The File Manager component in the property pane displays its features in this sample. The visibility of the toolbar, multi-selection, file extensions,\\n                        and image thumbnails can all be easily controlled by checking or unchecking the respective checkboxes. Additionally, specific toolbar items can be\\n                        enabled or disabled by selecting values in the Dropdown List.\\n                    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"In this demo, the above mentioned requirements are achieved by using the following API properties and method of the File Manager component. \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"toolbarSettings\")]),\n        _vm._v(\n          \" defines the group of items in the toolbar that are aligned horizontally.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/react/documentation/api/file-manager/#allowmultiselection\",\n            },\n          },\n          [_vm._v(\"allowMultiSelection\")]\n        ),\n        _vm._v(\n          \" property enables or disables the File Manager's multiple folder or file selection.  \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/react/documentation/api/file-manager/#showfileextension\",\n            },\n          },\n          [_vm._v(\"showFileExtension\")]\n        ),\n        _vm._v(\n          \" property shows or hides the file extension in the File Manager.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/react/documentation/api/file-manager/#showthumbnail\",\n            },\n          },\n          [_vm._v(\"showThumbnail\")]\n        ),\n        _vm._v(\n          \" property shows or hides thumbnail images in the large icons view. . \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"enableToolbarItems\")]),\n        _vm._v(\" specifies which items should be enabled in the toolbar.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"disableToolbarItems\")]),\n        _vm._v(\" specifies which items should be disabled in the toolbar.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"b\", [_vm._v(\"Note: \")]),\n        _vm._v(\n          \"File Manager's upload functionality is restricted in the online demo. If you need to test upload functionality, please install \\n                    \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://www.syncfusion.com/downloads\",\n            },\n          },\n          [_vm._v(\" Syncfusion Essential Studio \")]\n        ),\n        _vm._v(\"on your machine and run the demo.\\n                    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f9e59018&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/file-manager/default/App.vue?vue&type=style&index=0&id=f9e59018&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"5de1293e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/file-manager/default/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });