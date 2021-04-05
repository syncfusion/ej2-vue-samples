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
/******/ 		"diagram/node/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/node/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/node/App.vue":
/*!**************************************!*\
  !*** ./Samples/diagram/node/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_faa2cbb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=faa2cbb8&scoped=true& */ \"./Samples/diagram/node/App.vue?vue&type=template&id=faa2cbb8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/node/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_faa2cbb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css& */ \"./Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_faa2cbb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_faa2cbb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"faa2cbb8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/node/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?");

/***/ }),

/***/ "./Samples/diagram/node/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/diagram/node/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/node/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?");

/***/ }),

/***/ "./Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_faa2cbb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_faa2cbb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_faa2cbb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_faa2cbb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_faa2cbb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?");

/***/ }),

/***/ "./Samples/diagram/node/App.vue?vue&type=template&id=faa2cbb8&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./Samples/diagram/node/App.vue?vue&type=template&id=faa2cbb8&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_faa2cbb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=faa2cbb8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/node/App.vue?vue&type=template&id=faa2cbb8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_faa2cbb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_faa2cbb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?");

/***/ }),

/***/ "./Samples/diagram/node/main.js":
/*!**************************************!*\
  !*** ./Samples/diagram/node/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/node/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/node/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.image-pattern-style[data-v-faa2cbb8] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 75px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.image-pattern-style[data-v-faa2cbb8]:hover {\\n  border-color: gray;\\n  border-width: 2px;\\n}\\n.row[data-v-faa2cbb8] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-faa2cbb8] {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.e-selected-style[data-v-faa2cbb8] {\\n  border-color: #006ce6;\\n  border-width: 2px;\\n}\\n.e-checkbox-wrapper .e-label[data-v-faa2cbb8] {\\n  font-size: 12px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-3VLQGA6JVBJKC7Y3SWW2UJHIGECK7PEV7YKTTS2GF5SSBQYQTCUQ/Samples/diagram/node/App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;EAChB,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,gBAAgB;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=faa2cbb8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.image-pattern-style[data-v-faa2cbb8] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 75px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.image-pattern-style[data-v-faa2cbb8]:hover {\\n  border-color: gray;\\n  border-width: 2px;\\n}\\n.row[data-v-faa2cbb8] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-faa2cbb8] {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.e-selected-style[data-v-faa2cbb8] {\\n  border-color: #006ce6;\\n  border-width: 2px;\\n}\\n.e-checkbox-wrapper .e-label[data-v-faa2cbb8] {\\n  font-size: 12px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/node/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/node/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@syncfusion/ej2-diagrams/./../../source/diagram/primitives/point'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\n\nlet nodes =  [\n  {id: 'sdlc', offsetX: 300, offsetY: 288, annotations: [{content: 'SDLC'}]},\n  {id: 'support', offsetX: 150, offsetY: 250, annotations: [{content: 'Support'}]},\n  {id: 'analysis', offsetX: 300, offsetY: 150, annotations: [{content: 'Analysis'}]},\n  {id: 'design', offsetX: 450, offsetY: 250, annotations: [{content: 'Design'}]},\n  {id: 'implement', offsetX: 400, offsetY: 400, annotations: [{content: 'implement'}]},\n  {id: 'deploy', offsetX: 200, offsetY: 400, annotations: [{content: 'Deploy'}]}\n];\n\nlet connections = [\n  {id: 'connector1', sourceID: 'analysis', targetID: 'design'},\n  {id: 'connector2', sourceID: 'design', targetID: 'implement'},\n  {id: 'connector3', sourceID: 'implement', targetID: 'deploy'},\n  {id: 'connector4', sourceID: 'deploy', targetID: 'support'},\n  {id: 'connector5', sourceID: 'support', targetID: 'analysis'}\n];\n\nlet node;\nlet diagramInstance;\nlet element;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"645px\",\n      nodes: nodes,\n      connectors: connections,\n      //Sets the default values of a node\n      getNodeDefaults: (obj) => {\n        obj.width = 100;\n        obj.height = 100;\n        obj.shape = { shape: \"Ellipse\" };\n        obj.style = { fill: \"#37909A\", strokeColor: \"#024249\" };\n        obj.annotations[0].margin = { left: 10, right: 10 };\n        obj.annotations[0].style = { color: 'white', fill: 'none', strokeColor: 'none' };\n        return obj;\n      },\n      //Sets the default values of a Connector\n      getConnectorDefaults: (connector) => {\n        if (connector.targetDecorator) {\n          connector.targetDecorator.style = {\n            fill: \"#024249\",\n            strokeColor: \"#024249\"\n          };\n        }\n        return { style: { strokeColor: \"#024249\", strokeWidth: 2 } };\n      },\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n\n      aspectRatiochecked: false,\n      aspectRatiolabel: \"Aspect ratio\",\n      aspectRatiochange: changed,\n\n      lockchecked: false,\n      label: \"Lock\",\n      lockchange: changed\n    };\n  },\n  mounted: function() {\n    diagramInstance = this.$refs.diagramObject.ej2Instances;\n    diagramInstance.fitToPage();\n    element = this.$refs.aspectRatioobj.ej2Instances;\n    //Click event for Appearance of the Property Panel\n    let appearanceObj = document.getElementById(\"appearance\");\n    //Click event for Appearance of the Property Panel\n    appearanceObj.onclick = (args) => {\n      let target = args.target;\n\n      let selectedElement = document.getElementsByClassName(\n        \"e-selected-style\"\n      );\n      if (selectedElement.length) {\n        selectedElement[0].classList.remove(\"e-selected-style\");\n      }\n      if (target.className === \"image-pattern-style\") {\n        for (let i = 0; i < diagramInstance.nodes.length; i++) {\n          node = diagramInstance.nodes[i];\n          switch (target.id) {\n            case \"preview0\":\n              applyStyle(\n                node,\n                0,\n                undefined,\n                ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Shadow,\n                undefined,\n                undefined,\n                target\n              );\n              break;\n            case \"preview1\":\n              applyStyle(\n                node,\n                2,\n                undefined,\n                ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Shadow,\n                undefined,\n                undefined,\n                target\n              );\n              break;\n            case \"preview2\":\n              applyStyle(\n                node,\n                2,\n                \"5 5\",\n                ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Shadow,\n                undefined,\n                undefined,\n                target\n              );\n              break;\n            case \"preview3\":\n              applyStyle(\n                node,\n                2,\n                \"5 5\",\n                ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Shadow,\n                \"Radial\",\n                undefined,\n                target\n              );\n              break;\n            case \"preview4\":\n              let shadow = {\n                angle: 45,\n                distance: 15,\n                opacity: 0.3,\n                color: \"grey\"\n              };\n              applyStyle(\n                node,\n                2,\n                \"5 5\",\n                _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Shadow,\n                undefined,\n                shadow,\n                target\n              );\n              break;\n          }\n        }\n      }\n    };\n  }\n}));\n\n//Enable or disable the Constraints for Node.\nfunction changed(args) {\n  for (let i = 0; i < diagramInstance.nodes.length; i++) {\n    node = diagramInstance.nodes[i];\n    if (node.constraints) {\n      if (args.event && (args.event.target).id === \"lock\") {\n        if (args.checked) {\n          node.constraints &= ~(\n            _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Resize |\n            _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Rotate |\n            _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Drag\n          );\n          node.constraints |= _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].ReadOnly;\n        } else {\n          node.constraints |=\n            _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].ReadOnly;\n        }\n      } else {\n        if (element.checked) {\n          node.constraints |= _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].AspectRatio;\n        } else {\n          node.constraints &= ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].AspectRatio;\n        }\n      }\n    }\n    diagramInstance.dataBind();\n  }\n}\n\n//Set customStyle for Node.\n//Set customStyle for Node.\nfunction applyStyle( //it is in dedicated line here.\n  node,\n  width,\n  array,\n  con,\n  type,\n  sh,\n  target\n) {\n  if (node.style) {\n    node.style.fill = \"#37909A\";\n    node.style.strokeWidth = width;\n    node.style.strokeColor = \"#024249\";\n    node.style.strokeDashArray = array;\n  }\n  if (node.constraints) node.constraints &= con;\n  if (!type && node.style && node.style.gradient) {\n    node.style.gradient.type = \"None\";\n  } else {\n    let gradient;\n    gradient = {\n      cx: 50,\n      cy: 50,\n      fx: 50,\n      fy: 50,\n      stops: [\n        { color: \"#00555b\", offset: 0 },\n        { color: \"#37909A\", offset: 90 }\n      ],\n      type: \"Radial\"\n    };\n    if (node.style) node.style.gradient = gradient;\n  }\n  if (con & _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Shadow) {\n    node.shadow = { angle: 45, distance: 15, opacity: 0.3, color: \"grey\" };\n  }\n  diagramInstance.dataBind();\n  target.classList.add(\"e-selected-style\");\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/node/App.vue?vue&type=template&id=faa2cbb8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/node/App.vue?vue&type=template&id=faa2cbb8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { staticClass: \"col-lg-9 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-diagram\", {\n            ref: \"diagramObject\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              id: \"diagram\",\n              width: _vm.width,\n              height: _vm.height,\n              nodes: _vm.nodes,\n              connectors: _vm.connectors,\n              getNodeDefaults: _vm.getNodeDefaults,\n              getConnectorDefaults: _vm.getConnectorDefaults,\n              snapSettings: _vm.snapSettings\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\"div\", { staticClass: \"property-panel-header\" }, [\n        _vm._v(\"\\n        Properties\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"row\", staticStyle: { \"padding-top\": \"10px\" } },\n        [\n          _c(\"div\", { staticClass: \"row row-header\" }, [\n            _vm._v(\"\\n            Behavior\\n        \")\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n            [\n              _c(\"ejs-checkbox\", {\n                ref: \"aspectRatioobj\",\n                attrs: {\n                  id: \"aspectRatio\",\n                  checked: _vm.aspectRatiochecked,\n                  label: _vm.aspectRatiolabel,\n                  change: _vm.aspectRatiochange\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n            [\n              _c(\"ejs-checkbox\", {\n                attrs: {\n                  id: \"lock\",\n                  checked: _vm.lockchecked,\n                  label: _vm.label,\n                  change: _vm.lockchange\n                }\n              })\n            ],\n            1\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\", attrs: { id: \"appearance\" } }, [\n      _c(\"div\", { staticClass: \"row row-header\" }, [\n        _vm._v(\"\\n            Appearance\\n        \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } }, [\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/node/Nodes_1.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { id: \"preview0\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/node/Nodes_2.png)\",\n            \"margin-right\": \"0px 3px\"\n          },\n          attrs: { id: \"preview1\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/node/Nodes_3.png)\",\n            margin: \"0px 3px\"\n          },\n          attrs: { id: \"preview2\" }\n        })\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } }, [\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/node/Nodes_4.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { id: \"preview3\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/node/Nodes_5.png)\",\n            \"margin-right\": \"0px 3px\"\n          },\n          attrs: { id: \"preview4\" }\n        })\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the different stages of a software development life cycle using a circular flow diagram. Customizing the appearance of the nodes is illustrated in this example.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example shows how to add nodes to a diagram control and how to customize the appearance of the nodes. The\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"style\")]),\n        _vm._v(\n          \" property of the node can be used to customize the appearance of the nodes.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        To change the appearance, click different styles in the property panel.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Here, you can see how to lock nodes to disable editing and how to enable proportional resizing. The\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"constraints\")]),\n        _vm._v(\n          \" property of the node allows you to enable/disable editing and proportional resizing.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/node/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });