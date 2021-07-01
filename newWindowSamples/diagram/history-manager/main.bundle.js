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
/******/ 		"diagram/history-manager/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/history-manager/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/history-manager/App.vue":
/*!*************************************************!*\
  !*** ./Samples/diagram/history-manager/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6093b466_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6093b466&scoped=true& */ \"./Samples/diagram/history-manager/App.vue?vue&type=template&id=6093b466&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/history-manager/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6093b466_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css& */ \"./Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6093b466_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6093b466_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6093b466\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/history-manager/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?");

/***/ }),

/***/ "./Samples/diagram/history-manager/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/diagram/history-manager/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/history-manager/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?");

/***/ }),

/***/ "./Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6093b466_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6093b466_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6093b466_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6093b466_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6093b466_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?");

/***/ }),

/***/ "./Samples/diagram/history-manager/App.vue?vue&type=template&id=6093b466&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/diagram/history-manager/App.vue?vue&type=template&id=6093b466&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6093b466_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6093b466&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/history-manager/App.vue?vue&type=template&id=6093b466&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6093b466_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6093b466_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?");

/***/ }),

/***/ "./Samples/diagram/history-manager/main.js":
/*!*************************************************!*\
  !*** ./Samples/diagram/history-manager/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/history-manager/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#historyPropertySection .row[data-v-6093b466] {\\n    margin-left: 0px;\\n    margin-right: 0px;\\n}\\n#historyControlSection.content-wrapper[data-v-6093b466] {\\n    border: 1px solid #D7D7D7;\\n}\\n#historyPropertySection .listbox[data-v-6093b466] {\\n    width: 100%;\\n    height: 50%;\\n}\\n#historyPropertySection .heading[data-v-6093b466] {\\n    color: #807f7f;\\n    font-size: 15px;\\n    height: 50px;\\n    width: 100%;\\n    border-bottom: 1px solid #d9dedd;\\n    padding: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/history-manager/App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,kBAAkB;CACrB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,YAAY;IACZ,YAAY;CACf;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=6093b466&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#historyPropertySection .row[data-v-6093b466] {\\n    margin-left: 0px;\\n    margin-right: 0px;\\n}\\n#historyControlSection.content-wrapper[data-v-6093b466] {\\n    border: 1px solid #D7D7D7;\\n}\\n#historyPropertySection .listbox[data-v-6093b466] {\\n    width: 100%;\\n    height: 50%;\\n}\\n#historyPropertySection .heading[data-v-6093b466] {\\n    color: #807f7f;\\n    font-size: 15px;\\n    height: 50px;\\n    width: 100%;\\n    border-bottom: 1px solid #d9dedd;\\n    padding: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/history-manager/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/history-manager/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_5__[\"ListViewPlugin\"]);\n\nlet nodes = [\n    {\n        id: 'node1', offsetX: 400, offsetY: 30, style: { fill: '#FFB2B2', strokeColor: '#FFB2B2' }, width: 70, height: 40,\n        shape: { type: 'Flow', shape: 'Terminator' },\n        annotations: [{ id: 'label1', content: 'Start' }],\n    },\n    {\n        id: 'node2', offsetX: 400, offsetY: 100, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },\n        shape: { type: 'Flow', shape: 'Process' }, annotations: [{ id: 'label1', content: 'Design' }],\n        ports: [{ id: 'designPort', offset: { x: 0, y: 0.5 } }]\n    },\n    {\n        id: 'node3', offsetX: 400, offsetY: 180, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },\n        annotations: [{ id: 'label1', content: 'Coding' }],\n        shape: { type: 'Flow', shape: 'Process' }, ports: [{ id: 'codingPort', offset: { x: 0, y: 0.5 } }]\n    },\n    {\n        id: 'node4', offsetX: 400, offsetY: 260, style: { fill: '#DCDCDC', strokeColor: '#DCDCDC' },\n        annotations: [{ id: 'label1', content: 'Testing' }], shape: { type: 'Flow', shape: 'Process' }\n    },\n    {\n        id: 'node5', offsetX: 400, offsetY: 340, style: { fill: '#A2D8B0', strokeColor: '#A2D8B0' }, width: 80, height: 60,\n        annotations: [{ id: 'label1', content: 'Errors?' }], shape: { type: 'Flow', shape: 'Decision' }\n    },\n    {\n        id: 'node6', offsetX: 400, offsetY: 430, style: { fill: '#FFB2B2', strokeColor: '#FFB2B2' }, width: 70, height: 40,\n        annotations: [{ id: 'label1', content: 'End' }], shape: { type: 'Flow', shape: 'Terminator' }\n    },\n    {\n        id: 'node7', width: 100, offsetX: 220, offsetY: 180, style: { fill: '#A2D8B0', strokeColor: '#A2D8B0' }, height: 60,\n        annotations: [{ id: 'label1', content: 'Design Error?' }], shape: { type: 'Flow', shape: 'Decision' },\n        ports: [\n            { id: 'porterror', offset: { x: 0.5, y: 0 } },\n            { id: 'portcoding', offset: { x: 1, y: 0.5 } },\n            { id: 'portdesign', offset: { x: 0.5, y: 1 } }\n        ]\n    }\n];\n\nlet connectors = [\n    { id: 'connector1', sourceID: 'node1', targetID: 'node2' },\n    { id: 'connector2', sourceID: 'node2', targetID: 'node3' },\n    { id: 'connector3', sourceID: 'node3', targetID: 'node4' },\n    { id: 'connector4', sourceID: 'node4', targetID: 'node5' },\n    {\n        id: 'connector5', sourceID: 'node5', targetID: 'node6',\n        annotations: [{ content: 'No', style: { fill: 'white' } }]\n    },\n    {\n        id: 'connector6', sourceID: 'node5', targetID: 'node7', type: 'Orthogonal',\n        segments: [{ type: 'Orthogonal', length: 150, direction: 'Left' }],\n        annotations: [{ content: 'Yes', style: { fill: 'white' } }]\n    },\n    {\n        id: 'connector7', sourceID: 'node7', targetID: 'node3', sourcePortID: 'portcoding',\n        targetPortID: 'codingPort', type: 'Orthogonal',\n        segments: [{ type: 'Orthogonal', length: 10, direction: 'left' }],\n        annotations: [{ content: 'No', style: { fill: 'white' } }]\n    },\n    {\n        id: 'connector8', sourceID: 'node7', targetID: 'node2', sourcePortID: 'porterror',\n        targetPortID: 'designPort', type: 'Orthogonal',\n        annotations: [{ content: 'Yes', style: { fill: 'white' } }]\n    }\n];\nlet field = { value: 'value', text: 'text' };\nlet node;\nlet diagram;\nlet undoList;\nlet redoList;\nlet start;\nlet clear;\nlet end;\nlet undoButton;\nlet redoButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            width: \"100%\",\n            height: \"600px\",\n            nodes: nodes,\n            connectors: connectors,\n            getNodeDefaults: getNodeDefaults,\n            historyChange: historyChange,\n            setStackLimit: setStackLimit,\n            snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n            getConnectorDefaults: (obj) => {\n                obj.style.fill = '#707070';\n                obj.targetDecorator.style.fill = '#707070';\n                obj.targetDecorator.style.strokeColor = '#707070';\n            },\n            snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n        };\n    },\n    provide: {\n        diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"UndoRedo\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DataBinding\"]]\n    },\n    mounted: function() {\n        diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.fitToPage();\n        undoList = this.$refs.undoList.ej2Instances;\n        redoList = this.$refs.redoList.ej2Instances;\n        undoButton = this.$refs.undo.ej2Instances;\n        redoButton = this.$refs.redo.ej2Instances;\n        start = this.$refs.StartGroupAction.ej2Instances;\n        clear = this.$refs.ClearHistory.ej2Instances;\n        redoButton.element.onclick = () => {\n            diagram.redo();\n        };\n        undoButton.element.onclick = () => {\n            diagram.undo();\n        };\n        start.element.onclick = () => {\n            if (start.element.classList.contains('e-active')) {\n                start.content = 'End Group Action';\n                diagram.startGroupAction();\n            } else {\n                start.content = 'Start Group Action';\n                diagram.endGroupAction();\n            }\n        };\n        clear.element.onclick = () => {\n            diagram.clearHistory();\n            getValue();\n        }\n    }\n}));\nfunction setStackLimit(args) {\n    diagram.setStackLimit(args.value);\n}\nfunction historyChange(arg) {\n    getValue();\n};\nfunction getNodeDefaults(obj) {\n    obj.annotations[0].style.color = '#111111';\n    return obj;\n}\nfunction getValue() {\n    let undoStack = diagram.historyManager.undoStack;\n    let redoStack = diagram.historyManager.redoStack;\n    let undo = [];\n    for (let i = 0; i < undoStack.length; i++) {\n        undo.push({ 'text': undoStack[i].type, 'value': undoStack[i].type });\n    }\n\n    let redo = [];\n    for (let i = 0; i < redoStack.length; i++) {\n        redo.push({ 'text': redoStack[i].type, 'value': redoStack[i].type });\n    }\n    undoButton.disabled = undo.length ? false : true;\n    redoButton.disabled = redo.length ? false : true;\n    let itemsCount = diagram.historyManager.stackLimit ? diagram.historyManager.stackLimit : 0;\n    undoList.dataSource = undo;\n    undoList.fields = { text: 'text', value: 'text' };\n    undoList.index = 0;\n    undoList.dataBind();\n    redoList.dataSource = redo;\n    redoList.fields = { text: 'text', value: 'text' };\n    redoList.index = 0;\n    redoList.dataBind();\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/history-manager/App.vue?vue&type=template&id=6093b466&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/history-manager/App.vue?vue&type=template&id=6093b466&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"content-wrapper\",\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"historyControlSection\" }\n        },\n        [\n          _c(\"ejs-diagram\", {\n            ref: \"diagramObj\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              id: \"diagram\",\n              width: _vm.width,\n              height: _vm.height,\n              historyChange: _vm.historyChange,\n              nodes: _vm.nodes,\n              connectors: _vm.connectors,\n              getNodeDefaults: _vm.getNodeDefaults,\n              getConnectorDefaults: _vm.getConnectorDefaults,\n              snapSettings: _vm.snapSettings\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section\",\n        staticStyle: { \"padding-right\": \"0px\" },\n        attrs: { id: \"historyPropertySection\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"\\n            History manager settings\\n        \")\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"row property-panel-content\",\n            attrs: { id: \"appearance\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"row property-panel-content\" }, [\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"listbox\",\n                    staticStyle: { height: \"100%\", border: \"1px solid #e0e0e0\" }\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"heading\",\n                        staticStyle: { height: \"40px\" }\n                      },\n                      [\n                        _c(\"span\", [\n                          _vm._v(\n                            \"\\n                                Undo Stack\\n                            \"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticStyle: {\n                              float: \"right\",\n                              \"margin-top\": \"-5px\"\n                            }\n                          },\n                          [\n                            _c(\n                              \"ejs-button\",\n                              {\n                                ref: \"undo\",\n                                staticStyle: { width: \"100%\" },\n                                attrs: { id: \"undo\", disabled: \"true\" }\n                              },\n                              [\n                                _vm._v(\n                                  \"\\n                                    Undo\\n                                \"\n                                )\n                              ]\n                            )\n                          ],\n                          1\n                        )\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"ejs-listview\", {\n                      ref: \"undoList\",\n                      attrs: { id: \"undoList\", height: \"180px\" }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"listbox\",\n                      staticStyle: {\n                        height: \"100%\",\n                        border: \"1px solid #e0e0e0\"\n                      }\n                    },\n                    [\n                      _c(\n                        \"div\",\n                        {\n                          staticClass: \"heading\",\n                          staticStyle: { height: \"40px\" }\n                        },\n                        [\n                          _c(\"span\", [\n                            _vm._v(\n                              \"\\n                                Redo Stack\\n                            \"\n                            )\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\n                            \"div\",\n                            {\n                              staticStyle: {\n                                float: \"right\",\n                                \"margin-top\": \"-5px\"\n                              }\n                            },\n                            [\n                              _c(\n                                \"ejs-button\",\n                                {\n                                  ref: \"redo\",\n                                  staticStyle: { width: \"100%\" },\n                                  attrs: { id: \"redo\", disabled: \"true\" }\n                                },\n                                [\n                                  _vm._v(\n                                    \"\\n                                    Redo\\n                                \"\n                                  )\n                                ]\n                              )\n                            ],\n                            1\n                          )\n                        ]\n                      ),\n                      _vm._v(\" \"),\n                      _c(\"ejs-listview\", {\n                        ref: \"redoList\",\n                        attrs: { id: \"redoList\", height: \"180px\" }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"row\", staticStyle: { \"padding-top\": \"10px\" } },\n                [\n                  _vm._m(0),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-6\",\n                      staticStyle: {\n                        \"padding-left\": \"0px\",\n                        \"padding-right\": \"0px\"\n                      }\n                    },\n                    [\n                      _c(\"ejs-numerictextbox\", {\n                        attrs: {\n                          id: \"StackLimit\",\n                          value: \"0\",\n                          step: \"1\",\n                          format: \"###.##\",\n                          change: _vm.setStackLimit\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"row\", staticStyle: { \"padding-top\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-6\",\n                      staticStyle: { \"padding-left\": \"0px\" }\n                    },\n                    [\n                      _c(\n                        \"ejs-button\",\n                        {\n                          ref: \"StartGroupAction\",\n                          staticStyle: {\n                            width: \"100%\",\n                            overflow: \"hidden\",\n                            \"text-overflow\": \"ellipsis\"\n                          },\n                          attrs: {\n                            title: \"startGroupAction\",\n                            id: \"StartGroupAction\",\n                            type: \"Button\",\n                            isToggle: \"true\"\n                          }\n                        },\n                        [_vm._v(\"Start Group Action\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"col-xs-6\",\n                      staticStyle: {\n                        \"padding-left\": \"0px\",\n                        \"padding-right\": \"0px\"\n                      }\n                    },\n                    [\n                      _c(\n                        \"ejs-button\",\n                        {\n                          ref: \"ClearHistory\",\n                          attrs: { id: \"ClearHistory\", title: \"clearHistory\" }\n                        },\n                        [_vm._v(\"Clear History\")]\n                      )\n                    ],\n                    1\n                  )\n                ]\n              )\n            ])\n          ]\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass: \"col-xs-6\",\n        staticStyle: { display: \"table\", height: \"35px\", \"padding-left\": \"0px\" }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticStyle: { display: \"table-cell\", \"vertical-align\": \"middle\" }\n          },\n          [_vm._v(\"Stack Limit\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n              This sample demonstrates viewing, deleting, limiting diagram history and groups diagram actions and stores it as\\n    a single entry in the history manager.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n           Diagram history are being handle all the diagram history. Using \"\n        ),\n        _c(\"code\", [_vm._v(\"stackLimit\")]),\n        _vm._v(\n          \" property of the history manager\\n    we limit the no. of entries can be stored on the diagram history. Also, we can get the list of entries in the undo\\n    list and redo list using \"\n        ),\n        _c(\"code\", [_vm._v(\"undoStack\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"redoStack\")]),\n        _vm._v(\n          \". Also diagram history manager have the\\n    option to group the action as the single entry by the help of the \"\n        ),\n        _c(\"code\", [_vm._v(\"startGroupAction\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"endGroupAction\")]),\n        _vm._v(\n          \" public Api. Also, we can add the custom entries to the diagram history. method can be used to print the diagrams.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/history-manager/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });