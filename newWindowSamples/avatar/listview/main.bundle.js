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
/******/ 		"avatar/listview/main": 0
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
/******/ 	deferredModules.push(["./Samples/avatar/listview/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/avatar/listview/App.vue":
/*!*****************************************!*\
  !*** ./Samples/avatar/listview/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6ce84532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6ce84532& */ \"./Samples/avatar/listview/App.vue?vue&type=template&id=6ce84532&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/avatar/listview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6ce84532___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6ce84532___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/avatar/listview/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/avatar/listview/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/App.vue?vue&type=template&id=6ce84532&":
/*!************************************************************************!*\
  !*** ./Samples/avatar/listview/App.vue?vue&type=template&id=6ce84532& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ce84532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6ce84532& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/App.vue?vue&type=template&id=6ce84532&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ce84532___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ce84532___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/list-template.vue":
/*!***************************************************!*\
  !*** ./Samples/avatar/listview/list-template.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_template_vue_vue_type_template_id_c04642a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-template.vue?vue&type=template&id=c04642a2& */ \"./Samples/avatar/listview/list-template.vue?vue&type=template&id=c04642a2&\");\n/* harmony import */ var _list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-template.vue?vue&type=script&lang=js& */ \"./Samples/avatar/listview/list-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _list_template_vue_vue_type_template_id_c04642a2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _list_template_vue_vue_type_template_id_c04642a2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/avatar/listview/list-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/avatar/listview/list-template.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/list-template.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/avatar/listview/list-template.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./list-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/list-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/avatar/listview/list-template.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/list-template.vue?vue&type=template&id=c04642a2&":
/*!**********************************************************************************!*\
  !*** ./Samples/avatar/listview/list-template.vue?vue&type=template&id=c04642a2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_template_id_c04642a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./list-template.vue?vue&type=template&id=c04642a2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/list-template.vue?vue&type=template&id=c04642a2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_template_id_c04642a2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_template_id_c04642a2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/list-template.vue?");

/***/ }),

/***/ "./Samples/avatar/listview/listData.ts":
/*!*********************************************!*\
  !*** ./Samples/avatar/listview/listData.ts ***!
  \*********************************************/
/*! exports provided: avatarListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"avatarListData\", function() { return avatarListData; });\nvar avatarListData = [\n    { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04' },\n    { id: 's_02', text: 'Nancy', avatar: 'N', pic: '' },\n    { id: 's_05', text: 'John', pic: 'pic01', avatar: '' },\n    { id: 's_03', text: 'Andrew', avatar: 'A', pic: '' },\n    { id: 's_06', text: 'Michael', pic: 'pic02', avatar: '' },\n    { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '' },\n    { id: 's_08', text: 'Margaret', avatar: 'M', pic: '' }\n];\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/listData.ts?");

/***/ }),

/***/ "./Samples/avatar/listview/main.js":
/*!*****************************************!*\
  !*** ./Samples/avatar/listview/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/avatar/listview/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.avatar-listview {\\n       overflow: auto;\\n}\\n\\n   /* Listview Customization */\\n.avatar-listview #letterAvatarList {\\n       max-width: 360px;\\n       margin: auto;\\n       border: 1px solid #dddddd;\\n       border-radius: 3px;\\n}\\n.avatar-listview #letterAvatarList .listWrapper {\\n       width: inherit;\\n       height: inherit;\\n       position: relative;\\n}\\n.avatar-listview #letterAvatarList .e-list-header {\\n       height: 54px;\\n}\\n.material .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 22px;\\n}\\n.fabric .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 22px;\\n}\\n.bootstrap .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 13px;\\n}\\n.highcontrast .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 20px;\\n}\\n.avatar-listview #letterAvatarList .e-list-item {\\n       cursor: pointer;\\n       height: 50px;\\n       line-height: 44px;\\n       border: 0;\\n}\\n.tailwind .avatar-listview #letterAvatarList .e-list-item {\\n       line-height: 50px;\\n       padding-top: 0;\\n       padding-bottom: 0;\\n}\\n\\n   /* Badge Positioning */\\n.avatar-listview #letterAvatarList .e-badge {\\n       margin-top: 12px;\\n}\\n.avatar-listview #letterAvatarList .listWrapper .list-text {\\n       width: 60%;\\n       display: inline-block;\\n       vertical-align: middle;\\n       margin: 0 50px;\\n}\\n\\n   /* Avatar Positioning */\\n.avatar-listview #letterAvatarList .listWrapper .e-avatar {\\n       position: absolute;\\n       top: calc(100% - 40px);\\n       font-size: 10px;\\n       left: 5px;\\n}\\n\\n   /* Avatar Background Customization */\\n.avatar-listview #letterAvatarList .e-list-item:nth-child(1) .e-avatar {\\n       background-color: #039BE5;\\n}\\n.avatar-listview #letterAvatarList .e-list-item:nth-child(3) .e-avatar {\\n       background-color: #E91E63;\\n}\\n.avatar-listview #letterAvatarList .e-list-item:nth-child(5) .e-avatar {\\n       background-color: #009688;\\n}\\n\\n   /* Avatar images using 'background-image' property */\\n.avatar-listview .pic01 {\\n       background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.avatar-listview .pic02 {\\n       background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic02.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.avatar-listview .pic03 {\\n       background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic03.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.avatar-listview .pic04 {\\n       background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic04.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.bootstrap4 .avatar-listview #letterAvatarList .e-list-item {\\n       line-height: 30px;\\n       padding: 8px 16px 8px 16px;\\n}\\n.bootstrap4 .avatar-listview #letterAvatarList .e-list-item .e-avatar {\\n       top: calc(100% - 48px);\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-WGL2PLN7KYDG32TJ7CHRBLZ5QENFZDIWQ6CCHOERAN3YNCKJ54PA/Samples/avatar/listview/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;OACO,eAAe;CACrB;;GAEE,4BAA4B;AAC/B;OACO,iBAAiB;OACjB,aAAa;OACb,0BAA0B;OAC1B,mBAAmB;CACzB;AACD;OACO,eAAe;OACf,gBAAgB;OAChB,mBAAmB;CACzB;AACD;OACO,aAAa;CACnB;AACD;OACO,kBAAkB;CACxB;AACD;OACO,kBAAkB;CACxB;AACD;OACO,kBAAkB;CACxB;AACD;OACO,kBAAkB;CACxB;AACD;OACO,gBAAgB;OAChB,aAAa;OACb,kBAAkB;OAClB,UAAU;CAChB;AACD;OACO,kBAAkB;OAClB,eAAe;OACf,kBAAkB;CACxB;;GAEE,uBAAuB;AAC1B;OACO,iBAAiB;CACvB;AACD;OACO,WAAW;OACX,sBAAsB;OACtB,uBAAuB;OACvB,eAAe;CACrB;;GAEE,wBAAwB;AAC3B;OACO,mBAAmB;OACnB,uBAAuB;OACvB,gBAAgB;OAChB,UAAU;CAChB;;GAEE,qCAAqC;AACxC;OACO,0BAA0B;CAChC;AACD;OACO,0BAA0B;CAChC;AACD;OACO,0BAA0B;CAChC;;GAEE,qDAAqD;AACxD;OACO,gDAA4C;CAClD;AACD;OACO,gDAA4C;CAClD;AACD;OACO,gDAA4C;CAClD;AACD;OACO,gDAA4C;CAClD;AACD;OACO,kBAAkB;OAClB,2BAA2B;CACjC;AACD;OACO,uBAAuB;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.avatar-listview {\\n       overflow: auto;\\n}\\n\\n   /* Listview Customization */\\n.avatar-listview #letterAvatarList {\\n       max-width: 360px;\\n       margin: auto;\\n       border: 1px solid #dddddd;\\n       border-radius: 3px;\\n}\\n.avatar-listview #letterAvatarList .listWrapper {\\n       width: inherit;\\n       height: inherit;\\n       position: relative;\\n}\\n.avatar-listview #letterAvatarList .e-list-header {\\n       height: 54px;\\n}\\n.material .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 22px;\\n}\\n.fabric .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 22px;\\n}\\n.bootstrap .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 13px;\\n}\\n.highcontrast .avatar-listview #letterAvatarList .e-list-header .e-text {\\n       line-height: 20px;\\n}\\n.avatar-listview #letterAvatarList .e-list-item {\\n       cursor: pointer;\\n       height: 50px;\\n       line-height: 44px;\\n       border: 0;\\n}\\n.tailwind .avatar-listview #letterAvatarList .e-list-item {\\n       line-height: 50px;\\n       padding-top: 0;\\n       padding-bottom: 0;\\n}\\n\\n   /* Badge Positioning */\\n.avatar-listview #letterAvatarList .e-badge {\\n       margin-top: 12px;\\n}\\n.avatar-listview #letterAvatarList .listWrapper .list-text {\\n       width: 60%;\\n       display: inline-block;\\n       vertical-align: middle;\\n       margin: 0 50px;\\n}\\n\\n   /* Avatar Positioning */\\n.avatar-listview #letterAvatarList .listWrapper .e-avatar {\\n       position: absolute;\\n       top: calc(100% - 40px);\\n       font-size: 10px;\\n       left: 5px;\\n}\\n\\n   /* Avatar Background Customization */\\n.avatar-listview #letterAvatarList .e-list-item:nth-child(1) .e-avatar {\\n       background-color: #039BE5;\\n}\\n.avatar-listview #letterAvatarList .e-list-item:nth-child(3) .e-avatar {\\n       background-color: #E91E63;\\n}\\n.avatar-listview #letterAvatarList .e-list-item:nth-child(5) .e-avatar {\\n       background-color: #009688;\\n}\\n\\n   /* Avatar images using 'background-image' property */\\n.avatar-listview .pic01 {\\n       background-image: url('./images/pic01.png');\\n}\\n.avatar-listview .pic02 {\\n       background-image: url('./images/pic02.png');\\n}\\n.avatar-listview .pic03 {\\n       background-image: url('./images/pic03.png');\\n}\\n.avatar-listview .pic04 {\\n       background-image: url('./images/pic04.png');\\n}\\n.bootstrap4 .avatar-listview #letterAvatarList .e-list-item {\\n       line-height: 30px;\\n       padding: 8px 16px 8px 16px;\\n}\\n.bootstrap4 .avatar-listview #letterAvatarList .e-list-item .e-avatar {\\n       top: calc(100% - 48px);\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/listview/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _list_template_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-template.vue */ \"./Samples/avatar/listview/list-template.vue\");\n/* harmony import */ var _listData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listData */ \"./Samples/avatar/listview/listData.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__[\"ListViewPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        dataSource:_listData__WEBPACK_IMPORTED_MODULE_3__[\"avatarListData\"],\n        title: \"Contacts\",\n        header: true,\n        listTemplate: function () {\n            return { template : _list_template_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\n        },\n        sortOrder: 'Ascending'\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/list-template.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/listview/list-template.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n      data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/list-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/App.vue?vue&type=template&id=6ce84532&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/listview/App.vue?vue&type=template&id=6ce84532& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-12 control-section avatar-listview\" },\n    [\n      _c(\"ejs-listview\", {\n        attrs: {\n          id: \"letterAvatarList\",\n          dataSource: _vm.dataSource,\n          headerTitle: _vm.title,\n          showHeader: _vm.header,\n          template: _vm.listTemplate,\n          sortOrder: _vm.sortOrder\n        }\n      }),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1)\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the integration of avatar component into listview to create contacts applications.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The avatar can be used with other components to create various applications. Here, the avatar is used to display images\\n          or their initials from the persons contact lists.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Here, the xsmall avatar is used in circle type. To change the size of the avatar to xsmall and circle style, add\\n          \"\n        ),\n        _c(\"code\", [_vm._v(\".e-avatar-xsmall\")]),\n        _vm._v(\" and\\n          \"),\n        _c(\"code\", [_vm._v(\".e-avatar-circle\")]),\n        _vm._v(\".\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/listview/list-template.vue?vue&type=template&id=c04642a2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/listview/list-template.vue?vue&type=template&id=c04642a2& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"listWrapper\" }, [\n    _vm.data.avatar !== \"\"\n      ? _c(\"span\", { class: [\"e-avatar e-avatar-small e-avatar-circle\"] }, [\n          _vm._v(_vm._s(_vm.data.avatar))\n        ])\n      : _vm._e(),\n    _vm._v(\" \"),\n    _vm.data.pic !== \"\"\n      ? _c(\"span\", {\n          class: [_vm.data.pic + \" e-avatar e-avatar-small e-avatar-circle\"]\n        })\n      : _vm._e(),\n    _vm._v(\" \"),\n    _c(\"span\", { staticClass: \"list-text\" }, [_vm._v(_vm._s(_vm.data.text))])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/listview/list-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });