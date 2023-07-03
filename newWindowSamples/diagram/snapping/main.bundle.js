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
/******/ 		"diagram/snapping/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/snapping/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/snapping/App.vue":
/*!******************************************!*\
  !*** ./Samples/diagram/snapping/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_250f425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=250f425e&scoped=true& */ \"./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/snapping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css& */ \"./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_250f425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_250f425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"250f425e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/snapping/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/diagram/snapping/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_250f425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=250f425e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_250f425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_250f425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./Samples/diagram/snapping/main.js":
/*!******************************************!*\
  !*** ./Samples/diagram/snapping/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/snapping/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.header_text[data-v-250f425e]{\\n     color: rgb(9, 9, 9);\\n     font-weight: bold;\\n     font-size: 20px;\\n     font-family: 'Calibri';\\n     margin-left: 5px;\\n     margin-top: 5px;\\n}\\n.db-diagram-container[data-v-250f425e] {\\n width:calc(100% - 300px);\\n height: 100%;\\n float: left;\\n}\\n.db-prop-row[data-v-250f425e] {\\n margin-top: 6px;\\n}\\n.db-col-left[data-v-250f425e] {\\n padding-left: 10px;\\n padding-right: 3px;\\n}\\n.db-prop-text-style[data-v-250f425e] {\\n font-size: 13px;\\n font-weight: normal;\\n font-family: 'Calibri';\\n margin-top: 25px;\\n}\\n.radio-text-style[data-v-250f425e]{\\n font-size: 13px;\\n font-weight: normal;\\n font-family: 'Calibri';\\n margin-top: 10px;\\n}\\n.text-content[data-v-250f425e]{\\n     margin-left: 10px;\\n}\\n.db-check-input[data-v-250f425e]{\\n     float: right;\\n}\\n.db-text-input[data-v-250f425e]{\\n     height: 25px!important;\\n}\\n.e-checkbox-wrapper .e-label[data-v-250f425e]{\\n     font-size: 12px!important;\\n}\\n.e-radio+label .e-label[data-v-250f425e]{\\n     font-size: 12px!important;\\n}\\n#properties_Container[data-v-250f425e]{\\n /* background: #e3e3e3; */\\n width: 300px;\\n float: right;\\n /* margin-left: 20px; */\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/grams-vue-samples_release_22.1.1/Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,oBAAoB;KACpB,kBAAkB;KAClB,gBAAgB;KAChB,uBAAuB;KACvB,iBAAiB;KACjB,gBAAgB;CACpB;AACD;CACC,yBAAyB;CACzB,aAAa;CACb,YAAY;CACZ;AACD;CACC,gBAAgB;CAChB;AACD;CACC,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,oBAAoB;CACpB,uBAAuB;CACvB,iBAAiB;CACjB;AACD;CACC,gBAAgB;CAChB,oBAAoB;CACpB,uBAAuB;CACvB,iBAAiB;CACjB;AACD;KACK,kBAAkB;CACtB;AACD;KACK,aAAa;CACjB;AACD;KACK,uBAAuB;CAC3B;AACD;KACK,0BAA0B;CAC9B;AACD;KACK,0BAA0B;CAC9B;AACD;CACC,0BAA0B;CAC1B,aAAa;CACb,aAAa;CACb,wBAAwB;CACxB\",\"file\":\"App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.header_text[data-v-250f425e]{\\n     color: rgb(9, 9, 9);\\n     font-weight: bold;\\n     font-size: 20px;\\n     font-family: 'Calibri';\\n     margin-left: 5px;\\n     margin-top: 5px;\\n}\\n.db-diagram-container[data-v-250f425e] {\\n width:calc(100% - 300px);\\n height: 100%;\\n float: left;\\n}\\n.db-prop-row[data-v-250f425e] {\\n margin-top: 6px;\\n}\\n.db-col-left[data-v-250f425e] {\\n padding-left: 10px;\\n padding-right: 3px;\\n}\\n.db-prop-text-style[data-v-250f425e] {\\n font-size: 13px;\\n font-weight: normal;\\n font-family: 'Calibri';\\n margin-top: 25px;\\n}\\n.radio-text-style[data-v-250f425e]{\\n font-size: 13px;\\n font-weight: normal;\\n font-family: 'Calibri';\\n margin-top: 10px;\\n}\\n.text-content[data-v-250f425e]{\\n     margin-left: 10px;\\n}\\n.db-check-input[data-v-250f425e]{\\n     float: right;\\n}\\n.db-text-input[data-v-250f425e]{\\n     height: 25px!important;\\n}\\n.e-checkbox-wrapper .e-label[data-v-250f425e]{\\n     font-size: 12px!important;\\n}\\n.e-radio+label .e-label[data-v-250f425e]{\\n     font-size: 12px!important;\\n}\\n#properties_Container[data-v-250f425e]{\\n /* background: #e3e3e3; */\\n width: 300px;\\n float: right;\\n /* margin-left: 20px; */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/snapping/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Diagram\"].Inject(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Snapping\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEditing\"]);\n_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Diagram\"].Inject(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"UndoRedo\"]);\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"ColorPickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\n\nlet diagramInstance;\n\nlet nodes = [\n     {\n            id:'node_1',width:100,height:100,offsetX:350,offsetY:250,\n            ports:[\n                {id:'port1',offset:{x:0.5,y:0.5},visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Visible,\n                style:{fill:'black'},\n                constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Default|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Draw\n            }],\n            annotations:[{id:'annot1',content:'Shape 1', offset:{x:0.5,y:1.2},style:{bold:true}}]\n        },\n        {\n            id:'node_2',width:100,height:100,offsetX:600,offsetY:250,\n            ports:[\n                {id:'port11', offset:{x:0.5,y:0.5},visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Visible,style:{fill:'black'},\n                constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Default|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Draw\n            },{\n                id:'port2',offset:{x:0,y:0.5},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Visible,\n                style:{fill:'black'},\n                constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Default|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Draw,\n                height:100,width:7\n            }],\n            annotations:[{id:'annot1',content:'Shape 2',offset:{x:0.5,y:1.2},style:{bold:true}}]\n    \n        },\n        {\n            id:'node_3',width:100,height:100,offsetX:500,offsetY:400,\n            annotations:[{id:'annot1',content:'Shape 3', offset:{x:0.5,y:1.2}, style:{bold:true}}]\n    \n        },\n  ];\n\nlet connectors = [\n    {\n        id:'connector_1',sourceID:'node_1',targetID:'node_3',type:'Orthogonal',\n    }\n  ];\n   let handles = [\n       {\n           name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z',tooltip:{content:'Clone'},\n           visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n       },\n       {\n           name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z',tooltip:{content:'Delete'},\n           visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n       },\n       {\n           name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z',tooltip:{content:'Draw'},\n           visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n       },\n    ];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"95%\",\n      height: \"645px\",\n      nodes: nodes,\n      connectors: connectors,\n      selectedItems : {\n        userHandles : handles\n      },\n      drawingObject : { type : 'Orthogonal'},\n      getCustomTool : getTool,\n      snapSettings: {\n               snapAngle : 5\n            },\n      getNodeDefaults: (obj) => {\n        obj.style = {fill: \"orange\", strokeColor:'orange'};\n        return obj;\n      },\n      getConnectorDefaults: (obj) => {\n        obj.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Default| _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].DragSegmentThumb;\n        return obj;\n      },\n      selectionChange :(args)=>{\n         var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n           if(args.state === 'Changed'){\n            var selectedItems = diagram.selectedItems.nodes;\n            selectedItems = selectedItems.concat(diagram.selectedItems.connectors);\n            if(selectedItems.length > 0){\n                if(args.newValue.length > 0 && args.newValue[0].sourceID == undefined && args.newValue[0].targetID == undefined){\n                    diagram.selectedItems = { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle, userHandles: handles };\n                    if(diagram.selectedItems.nodes.length>0){\n                        drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length-1];\n                    }\n                }\n                else\n                {\n                 diagram.selectedItems = { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All&~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle };\n                }\n            }\n        }\n    },\n      snappingInterval : (args) =>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.horizontalGridlines.snapIntervals[0] = args.value;\n        diagram.snapSettings.verticalGridlines.snapIntervals[0] = args.value;\n        diagram.dataBind();\n      },\n      snappingAngle : (args) =>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.snapAngle = args.value;\n        diagram.dataBind();\n      },\n      colorChange : (args)=>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.snapLineColor = args.value;\n        diagram.dataBind();\n      },\n      showGridline : (args)=>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines;\n        diagram.dataBind();\n        scale();\n      },\n      snappingToobjects : (args)=>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n       diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject;\n       diagram.dataBind();\n      },\n     snapToLines : (args) =>{\n         var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n         var showGridlines = document.getElementById(\"showgridline\").ej2_instances[0];\n         var snapToObject = document.getElementById(\"snaptoobject\").ej2_instances[0];\n        if(showGridlines.checked && snapToObject.checked){\n            diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All;\n        }\n       else if(showGridlines.checked && !snapToObject.checked){\n        diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject;\n       }\n       else if(!showGridlines.checked && snapToObject.checked){\n        diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines;\n       }\n       else if(!showGridlines.checked && !snapToObject.checked){\n        diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject);\n       }\n        switch(args.value){\n            case 'Snap To Gridlines':\n                diagram.snapSettings.constraints =  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All| _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToLines;\n                if( !showGridlines.checked && !snapToObject.checked ) {\n                   diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject);\n                }\n                else if( !snapToObject.checked && showGridlines.checked ){\n                    diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject);\n                }\n                else if(snapToObject.checked && !showGridlines.checked) {\n                    diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines);\n                }\n            break;\n            case 'Snap To Horizontal Gridlines':\n                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToVerticalLines;\n            break;\n            case 'Snap To Vertical Gridlines':\n                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToHorizontalLines;\n            break;\n            case 'None':\n                diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToLines);\n                if(!showGridlines.checked && !snapToObject.checked){\n                    diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToLines);\n                 }\n                 else if(showGridlines.checked && !snapToObject.checked){\n                     diagram.snapSettings.constraints =  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToLines);\n                 }\n                 else if(!showGridlines.checked && snapToObject.checked){\n                     diagram.snapSettings.constraints =  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToLines);\n                 }\n            break;\n        }\n        diagram.dataBind();\n        scale();\n    },\n      rulerSettings : {\n        showRulers : true\n      }\n    }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n       diagram.fitToPage();\n    },\n}));\n\nfunction scale(){\n    var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n     var getsnap = document.getElementById('snappingInterval');\n    getsnap = (getsnap).ej2_instances[0];\n     diagram.snapSettings.horizontalGridlines.snapIntervals[0] = (getsnap).value;\n     diagram.snapSettings.verticalGridlines.snapIntervals[0] = (getsnap).value;\n     diagram.dataBind();\n}\nfunction getTool(action){\n     var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n    if (action == \"Delete\") {\n        diagram.remove();\n    }\n    else if (action == \"Clone\"){\n        diagram.paste(diagram.selectedItems.selectedObjects);\n    }\n   else if (action == \"Draw\"){\n     (diagram.drawingObject).type = (diagram.drawingObject).type?(diagram.drawingObject).type: 'Orthogonal';\n     (diagram.drawingObject).sourceID = diagram.selectedItems.nodes[0].id;\n     diagram.dataBind();\n    }\n}\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"db-diagram-container\" },\n        [\n          _c(\"ejs-diagram\", {\n            ref: \"diagramObj\",\n            attrs: {\n              id: \"diagram\",\n              width: _vm.width,\n              height: _vm.height,\n              nodes: _vm.nodes,\n              getNodeDefaults: _vm.getNodeDefaults,\n              selectionChange: _vm.selectionChange,\n              snapSettings: _vm.snapSettings,\n              connectors: _vm.connectors,\n              getConnectorDefaults: _vm.getConnectorDefaults,\n              rulerSettings: _vm.rulerSettings,\n              getCustomTool: _vm.getCustomTool,\n              selectedItems: _vm.selectedItems,\n              drawingObject: _vm.drawingObject,\n            },\n          }),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"properties_Container\" } }, [\n        _c(\"span\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"\\n            Properties\\n        \"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"db-prop-row\" }, [\n          _c(\"div\", { staticClass: \"db-prop-text-style\" }, [\n            _c(\"span\", { staticClass: \"db-prop-text-style text-content\" }, [\n              _vm._v(\"Snapping Interval \"),\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    id: \"snappingInterval\",\n                    value: 20,\n                    format: \"n0\",\n                    min: 1,\n                    step: 1,\n                    width: 150,\n                    change: _vm.snappingInterval,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"db-prop-text-style\" }, [\n            _c(\"span\", { staticClass: \"db-prop-text-style text-content\" }, [\n              _vm._v(\"Snapping Angle\"),\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n              [\n                _c(\"ejs-numerictextbox\", {\n                  attrs: {\n                    value: 5,\n                    format: \"n0\",\n                    min: 1,\n                    step: 1,\n                    width: 150,\n                    change: _vm.snappingAngle,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"db-prop-text-style\" }, [\n            _c(\"span\", { staticClass: \"db-prop-text-style text-content\" }, [\n              _vm._v(\"Snapping Line Color\"),\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"db-text-input\",\n                staticStyle: {\n                  float: \"right\",\n                  \"margin-right\": \"10px\",\n                  width: \"50%\",\n                },\n              },\n              [\n                _c(\"ejs-colorpicker\", {\n                  attrs: {\n                    id: \"color-picker\",\n                    value: \"#07EDE1\",\n                    width: \"100%\",\n                    type: \"color\",\n                    mode: \"Palette\",\n                    change: _vm.colorChange,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"db-prop-text-style\" },\n            [\n              _c(\"ejs-checkbox\", {\n                attrs: {\n                  id: \"showgridline\",\n                  label: \"Show Gridline\",\n                  checked: true,\n                  change: _vm.showGridline,\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"db-prop-text-style\",\n              staticStyle: { \"margin-top\": \"7px!important\" },\n            },\n            [\n              _c(\"ejs-checkbox\", {\n                attrs: {\n                  id: \"snaptoobject\",\n                  label: \"Snapping to Objects\",\n                  checked: true,\n                  change: _vm.snappingToobjects,\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row radio-text-style\",\n              staticStyle: { \"margin-left\": \"7px\" },\n            },\n            [\n              _c(\"ejs-radiobutton\", {\n                attrs: {\n                  label: \"Snap To Gridlines\",\n                  name: \"snapping\",\n                  checked: true,\n                  value: \"Snap To Gridlines\",\n                  change: _vm.snapToLines,\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row radio-text-style\",\n              staticStyle: { \"margin-left\": \"7px\" },\n            },\n            [\n              _c(\"ejs-radiobutton\", {\n                attrs: {\n                  label: \"Snap To Horizontal Gridlines\",\n                  name: \"snapping\",\n                  checked: false,\n                  value: \"Snap To Horizontal Gridlines\",\n                  change: _vm.snapToLines,\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row radio-text-style\",\n              staticStyle: { \"margin-left\": \"7px\" },\n            },\n            [\n              _c(\"ejs-radiobutton\", {\n                attrs: {\n                  label: \"Snap To Vertical Gridlines\",\n                  name: \"snapping\",\n                  checked: false,\n                  value: \"Snap To Vertical Gridlines\",\n                  change: _vm.snapToLines,\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row radio-text-style\",\n              staticStyle: { \"margin-left\": \"7px\" },\n            },\n            [\n              _c(\"ejs-radiobutton\", {\n                attrs: {\n                  label: \"None\",\n                  name: \"snapping\",\n                  checked: false,\n                  value: \"None\",\n                  change: _vm.snapToLines,\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"db-prop-text-style\" }, [\n      _c(\n        \"span\",\n        {\n          staticClass: \"db-prop-text-style text-content\",\n          staticStyle: { \"font-weight\": \"bold\" },\n        },\n        [_vm._v(\"Snapping To Lines\")]\n      ),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n    This sample shows how diagram objects snap to the nearest intersection of gridlines or objects while being dragged or resized.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"SnapInterval\")]),\n        _vm._v(\n          \" property in snapSettings allows you to specify the interval at which objects should snap to a grid or other objects in the control.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"snapAngle\")]),\n        _vm._v(\n          \" property in snapSettings allows you to define the snap angle by which the object needs to be rotated.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"snapLineColor\")]),\n        _vm._v(\n          \" property is used to set the color of the snap lines that appear when objects snap to a grid or other objects in the control.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"constraints\")]),\n        _vm._v(\n          \" property controls the visibility of gridlines and enables or disables snapping.\"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"f508ff26\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/diagram/snapping/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });