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
/******/ 		"diagram/fishbone-diagram/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/fishbone-diagram/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/fishbone-diagram/App.vue":
/*!**************************************************!*\
  !*** ./Samples/diagram/fishbone-diagram/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b044b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b044b578&scoped=true& */ \"./Samples/diagram/fishbone-diagram/App.vue?vue&type=template&id=b044b578&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/fishbone-diagram/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_b044b578_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css& */ \"./Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_b044b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_b044b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b044b578\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/fishbone-diagram/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/fishbone-diagram/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/diagram/fishbone-diagram/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/fishbone-diagram/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b044b578_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b044b578_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b044b578_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b044b578_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b044b578_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/fishbone-diagram/App.vue?vue&type=template&id=b044b578&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./Samples/diagram/fishbone-diagram/App.vue?vue&type=template&id=b044b578&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b044b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b044b578&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/fishbone-diagram/App.vue?vue&type=template&id=b044b578&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b044b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b044b578_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/fishbone-diagram/main.js":
/*!**************************************************!*\
  !*** ./Samples/diagram/fishbone-diagram/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/fishbone-diagram/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section[data-v-b044b578] {\\n    padding-top: 0px;\\n    padding-bottom: 0px;\\n    padding-right: 0px;\\n    padding-left: 0px;\\n}\\n.container-fluid[data-v-b044b578] {\\n    padding-left: 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/fishbone-diagram/App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;CACrB;AACD;IACI,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=b044b578&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control-section[data-v-b044b578] {\\n    padding-top: 0px;\\n    padding-bottom: 0px;\\n    padding-right: 0px;\\n    padding-left: 0px;\\n}\\n.container-fluid[data-v-b044b578] {\\n    padding-left: 0px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/fishbone-diagram/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/fishbone-diagram/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nlet diagramInstance;\n//Initializes the nodes for the diagram\nlet nodes = [\n    {\n        id: 'Equipment', width: 120, height: 40, offsetX: 300, offsetY: 80,\n        annotations: [{ content: 'Equipment', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' }\n    },\n    {\n        id: 'Environment', width: 120, height: 40, offsetX: 450, offsetY: 80,\n        annotations: [{ content: 'Environment', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' }\n    },\n    {\n        id: 'Person', width: 120, height: 40, offsetX: 600, offsetY: 80,\n        annotations: [{ content: 'Person', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' }\n    },\n    {\n        id: 'Materials', width: 120, height: 40, offsetX: 300, offsetY: 600,\n        annotations: [{ content: 'Materials', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' }\n    },\n    {\n        id: 'Machine', width: 120, height: 40, offsetX: 450, offsetY: 600,\n        annotations: [{ content: 'Machine', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' }\n    },\n    {\n        id: 'Methods', width: 120, height: 40, offsetX: 600, offsetY: 600,\n        annotations: [{ content: 'Methods', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: {\n            type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z'\n        }\n    },\n    {\n        id: 'ellipse1', width: 20, height: 20, offsetX: 290, offsetY: 130,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse2', width: 20, height: 20, offsetX: 323, offsetY: 183,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse3', width: 20, height: 20, offsetX: 354, offsetY: 237,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse4', width: 20, height: 20, offsetX: 440, offsetY: 130,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse5', width: 20, height: 20, offsetX: 470, offsetY: 182,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse6', width: 20, height: 20, offsetX: 590, offsetY: 130,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse7', width: 20, height: 20, offsetX: 622, offsetY: 179,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse8', width: 20, height: 20, offsetX: 660, offsetY: 221,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse9', width: 20, height: 20, offsetX: 694, offsetY: 264,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse10', width: 20, height: 20, offsetX: 354, offsetY: 460,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse11', width: 20, height: 20, offsetX: 590, offsetY: 530,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse12', width: 20, height: 20, offsetX: 660, offsetY: 460,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse13', width: 20, height: 20, offsetX: 440, offsetY: 530,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse14', width: 20, height: 20, offsetX: 510, offsetY: 460,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'ellipse15', width: 20, height: 20, offsetX: 290, offsetY: 530,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'Colorellipse1', width: 50, height: 50, offsetX: 717, offsetY: 310,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'Colorellipse2', width: 50, height: 50, offsetX: 560, offsetY: 310,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'Colorellipse3', width: 50, height: 50, offsetX: 390, offsetY: 310,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'Colorellipse4', width: 50, height: 50, offsetX: 220, offsetY: 310,\n        annotations: [{ content: ' ', style: { color: 'white' } }],\n        shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeColor: '#A52A2A' }\n    },\n    {\n        id: 'Colorellipse5', width: 140, height: 90, offsetX: 900, offsetY: 310,\n        annotations: [{ content: 'Productivity Increase', style: { color: 'white' } }],\n        style: { fill: '#39AFA9' }, borderColor: '05776C',\n        shape: { type: 'Basic', shape: 'Ellipse' }\n    },\n    {\n        id: 'TextPrograms', width: 90, height: 20, offsetX: 189, offsetY: 130,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Text Programs' }\n    },\n    {\n        id: 'Ventilatorssound', width: 120, height: 20, offsetX: 359, offsetY: 130,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Ventilators Sound' }\n    },\n    {\n        id: 'Education', width: 70, height: 20, offsetX: 500, offsetY: 130,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Education' }\n    },\n    {\n        id: 'DataBooks', width: 70, height: 20, offsetX: 213, offsetY: 183,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'DataBooks' }\n    },\n    {\n        id: 'Fixtures', width: 70, height: 20, offsetX: 240, offsetY: 237,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Fixtures' }\n    },\n    {\n        id: 'Noise', width: 70, height: 20, offsetX: 390, offsetY: 182,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Noise' }\n    },\n    {\n        id: 'Motivation', width: 70, height: 20, offsetX: 535, offsetY: 182,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Motivation' }\n    },\n    {\n        id: 'Tiredness', width: 70, height: 20, offsetX: 565, offsetY: 224,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Tiredness' }\n    },\n    {\n        id: 'Storer', width: 70, height: 20, offsetX: 606, offsetY: 264,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Storer' }\n    },\n    {\n        id: 'Computer', width: 70, height: 20, offsetX: 260, offsetY: 460,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Computer' }\n    },\n    {\n        id: 'Quality', width: 120, height: 20, offsetX: 417, offsetY: 460,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Quality of Element' }\n    },\n    {\n        id: 'Order', width: 70, height: 20, offsetX: 562, offsetY: 460,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Order' }\n    },\n    {\n        id: 'Software', width: 70, height: 20, offsetX: 225, offsetY: 530,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Software' }\n    },\n    {\n        id: 'Procurement', width: 70, height: 20, offsetX: 358, offsetY: 530,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Procurement' }\n    },\n    {\n        id: 'Standardization', width: 90, height: 20, offsetX: 501, offsetY: 530,\n        style: { fill: 'transparent', strokeWidth: 0 },\n        shape: { type: 'Text', content: 'Standardization' }\n    },\n];\n//Initializes the Connectors for the diagram\nlet connectors = [\n    CreateConnector('equipellise', '5,5', 'Equipment', 'ellipse1', '#A52A2A', 2),\n    CreateConnector('connect12', '5,5', 'ellipse1', 'ellipse2', '#A52A2A', 2),\n    CreateConnector('connect13', '5,5', 'ellipse2', 'ellipse3', '#A52A2A', 2),\n    CreateConnector('connect14', '5,5', 'ellipse3', 'Colorellipse3', '#A52A2A', 2),\n    CreateConnector('connect15', '5,5', 'Environment', 'ellipse4', '#A52A2A', 2),\n    CreateConnector('connect16', '5,5', 'ellipse4', 'ellipse5', '#A52A2A', 2),\n    CreateConnector('connect17', '5,5', 'ellipse4', 'ellipse5', '#A52A2A', 2),\n    CreateConnector('connect18', '5,5', 'ellipse5', 'Colorellipse2', '#A52A2A', 2),\n    CreateConnector('connect19', '5,5', 'Person', 'ellipse6', '#A52A2A', 2),\n    CreateConnector('connect20', '5,5', 'ellipse6', 'ellipse7', '#A52A2A', 2),\n    CreateConnector('connect21', '5,5', 'ellipse7', 'ellipse8', '#A52A2A', 2),\n    CreateConnector('connect22', '5,5', 'ellipse8', 'ellipse9', '#A52A2A', 2),\n    CreateConnector('connect23', '5,5', 'ellipse9', 'Colorellipse1', '#A52A2A', 2),\n    CreateConnector('connect24', '5,5', 'Materials', 'ellipse15', '#A52A2A', 2),\n    CreateConnector('connect25', '5,5', 'ellipse15', 'ellipse10', '#A52A2A', 2),\n    CreateConnector('connect26', '5,5', 'ellipse10', 'Colorellipse3', '#A52A2A', 2),\n    CreateConnector('connect27', '5,5', 'Machine', 'ellipse13', '#A52A2A', 2),\n    CreateConnector('connect28', '5,5', 'ellipse13', 'ellipse14', '#A52A2A', 2),\n    CreateConnector('connect29', '5,5', 'ellipse14', 'Colorellipse2', '#A52A2A', 2),\n    CreateConnector('connect30', '5,5', 'Methods', 'ellipse11', '#A52A2A', 2),\n    CreateConnector('connect31', '5,5', 'ellipse11', 'ellipse12', '#A52A2A', 2),\n    CreateConnector('connect32', '5,5', 'ellipse12', 'Colorellipse1', '#A52A2A', 2),\n    CreateConnector('connect33', '', 'Colorellipse4', 'Colorellipse3', '#000000', 2),\n    CreateConnector('connect34', '', 'Colorellipse3', 'Colorellipse2', '#000000', 2),\n    CreateConnector('connect35', '', 'Colorellipse2', 'Colorellipse1', '#000000', 2),\n    CreateConnector('connect36', '', 'Colorellipse1', 'Colorellipse5', '#000000', 2),\n    CreateConnector('connect37', '5,5', 'TextPrograms', 'ellipse1', '#A52A2A', 2),\n    CreateConnector('connect38', '5,5', 'DataBooks', 'ellipse2', '#A52A2A', 2),\n    CreateConnector('connect39', '5,5', 'Fixtures', 'ellipse3', '#A52A2A', 2),\n    CreateConnector('connect40', '5,5', 'Ventilatorssound', 'ellipse4', '#A52A2A', 2),\n    CreateConnector('connect41', '5,5', 'Noise', 'ellipse5', '#A52A2A', 2),\n    CreateConnector('connect42', '5,5', 'Education', 'ellipse6', '#A52A2A', 2),\n    CreateConnector('connect43', '5,5', 'Motivation', 'ellipse7', '#A52A2A', 2),\n    CreateConnector('connect44', '5,5', 'Tiredness', 'ellipse8', '#A52A2A', 2),\n    CreateConnector('connect45', '5,5', 'Storer', 'ellipse9', '#A52A2A', 2),\n    CreateConnector('connect46', '5,5', 'Software', 'ellipse15', '#A52A2A', 2),\n    CreateConnector('connect47', '5,5', 'Computer', 'ellipse10', '#A52A2A', 2),\n    CreateConnector('connect48', '5,5', 'Procurement', 'ellipse13', '#A52A2A', 2),\n    CreateConnector('connect49', '5,5', 'Quality', 'ellipse14', '#A52A2A', 2),\n    CreateConnector('connect50', '5,5', 'Order', 'ellipse12', '#A52A2A', 2),\n    CreateConnector('connect51', '5,5', 'Standardization', 'ellipse11', '#A52A2A', 2)\n];\n\nfunction CreateConnector(\n    name, lineDashArray, source, target, lineColor, lineWidth) {\n    let connector = {};\n    connector.id = name;\n    connector.sourceID = source;\n    connector.targetID = target;\n    connector.style = {\n        strokeColor: lineColor,\n        strokeWidth: lineWidth,\n        strokeDashArray: lineDashArray,\n    };\n    if (connector.id !== 'connect33' && connector.id !== 'connect34' &&\n        connector.id !== 'connect35' && connector.id !== 'connect36') {\n        if (connector.targetDecorator && connector.targetDecorator.style) {\n            connector.targetDecorator.style.strokeColor = '#A52A2A';\n            connector.targetDecorator.style.fill = '#A52A2A';\n        }\n    }\n    return connector;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            //Initializes diagram control\n            width: \"100%\",\n            height: \"700px\",\n            mode: \"SVG\",\n            nodes: nodes,\n            connectors: connectors,\n            tool: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].ZoomPan,\n            snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n            getConnectorDefaults: getConnectorDefaults\n        };\n    },\n    provide: {\n        diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"UndoRedo\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DataBinding\"]]\n    },\n    mounted: function() {\n        diagramInstance = this.$refs.diagramObj.ej2Instances;\n        diagramInstance.fitToPage(\"Width\");\n    }\n}));\n\nfunction getConnectorDefaults(connector) {\n    connector.targetDecorator = { shape: 'Arrow', width: 5, height: 5 };\n    if (connector.id !== 'connect33' && connector.id !== 'connect34' &&\n        connector.id !== 'connect35' && connector.id !== 'connect36') {\n        connector.targetDecorator.style = {};\n        connector.targetDecorator.style.strokeColor = '#A52A2A';\n        connector.targetDecorator.style.fill = '#A52A2A';\n    }\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/fishbone-diagram/App.vue?vue&type=template&id=b044b578&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/fishbone-diagram/App.vue?vue&type=template&id=b044b578&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"control-section\" },\n    [\n      _c(\"ejs-diagram\", {\n        ref: \"diagramObj\",\n        staticStyle: { display: \"block\" },\n        attrs: {\n          id: \"diagram\",\n          mode: _vm.mode,\n          width: _vm.width,\n          tool: _vm.tool,\n          height: _vm.height,\n          connectors: _vm.connectors,\n          nodes: _vm.nodes,\n          snapSettings: _vm.snapSettings,\n          getConnectorDefaults: _vm.getConnectorDefaults\n        }\n      }),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1)\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample visually represents a simple fishbone diagram (Ishikawa). Diagram nodes and annotations are used to define fishbone diagrams. Read-only mode is enabled here.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample shows how to create a fishbone diagram (Ishikawa) using diagram control. Here, zoom and pan options are enabled. The tool property of the diagram control allows you to enable or disable zoom and pan options.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/fishbone-diagram/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });