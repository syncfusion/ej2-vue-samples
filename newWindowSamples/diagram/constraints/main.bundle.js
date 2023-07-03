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
/******/ 		"diagram/constraints/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/constraints/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/constraints/App.vue":
/*!*********************************************!*\
  !*** ./Samples/diagram/constraints/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2af9a928_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2af9a928&scoped=true& */ \"./Samples/diagram/constraints/App.vue?vue&type=template&id=2af9a928&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/constraints/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2af9a928_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css& */ \"./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2af9a928_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2af9a928_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2af9a928\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/constraints/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?");

/***/ }),

/***/ "./Samples/diagram/constraints/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/diagram/constraints/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?");

/***/ }),

/***/ "./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2af9a928_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2af9a928_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2af9a928_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2af9a928_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2af9a928_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?");

/***/ }),

/***/ "./Samples/diagram/constraints/App.vue?vue&type=template&id=2af9a928&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/diagram/constraints/App.vue?vue&type=template&id=2af9a928&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2af9a928_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2af9a928&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=template&id=2af9a928&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2af9a928_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2af9a928_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?");

/***/ }),

/***/ "./Samples/diagram/constraints/main.js":
/*!*********************************************!*\
  !*** ./Samples/diagram/constraints/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/constraints/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-panel-header[data-v-2af9a928]{\\n    margin-left : -40px\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/grams-vue-samples_release_22.1.1/Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,mBAAmB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-panel-header[data-v-2af9a928]{\\n    margin-left : -40px\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/constraints/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Diagram\"].Inject(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEditing\"]);\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\n\n\nlet diagramInstance;\n\nvar nodes = [\n    {\n        id:\"textNode1\",\n        // Position of the node\n        offsetX:340,\n        offsetY: 50,\n        // Size of the node\n        width: 500,\n        height: 50,\n        //Sets type of the node\n        shape: { type: 'Text', content: 'Use Node Constraints to restrict end-users from performing certain operations on Node.' },\n        //Customizes the appearances such as text, font, fill, and stroke.\n        style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center', },\n        constraints:  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].None\n       \n    },\n    {\n        id:\"rectangle\",\n        offsetX:80,\n        offsetY:160,\n        width: 80,\n        height: 65,\n        // style: { fill: '#6BA5D7', strokeColor: 'white' },\n        shape: { type: 'Basic', shape: 'Rectangle' },\n        annotations: [{ content: 'Selection = False', }],\n        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default & ~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Select\n    },\n    {\n        id:\"ellipse\",\n        offsetX:190,\n        offsetY:160,\n        width: 80,\n        height: 80,\n        // style: { fill: '#6BA5D7', strokeColor: 'white' },\n        shape: { type: 'Basic', shape: 'Ellipse',cornerRadius: 10 },\n        annotations: [{ content: 'Dragging = False' }],\n        constraints:  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default & ~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Drag\n       \n    },\n    {\n        id:\"heptagon\",\n        offsetX:295,\n        offsetY:160,\n        width: 80,\n        height: 80,\n        // style: { fill: '#6BA5D7', strokeColor: 'white' },\n        shape: { type: 'Basic', shape: 'Heptagon' },\n        annotations: [{ content: 'Delete = False' }],\n        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default & ~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Delete\n    },\n    {\n        id:\"directData\",\n        offsetX:410,\n        offsetY:160,\n        width: 80,\n        height: 80,\n        rotateAngle:-45,\n        // style: { fill: '#6BA5D7', strokeColor: 'white' },\n        shape: { type: 'Flow', shape: 'DirectData' },\n        annotations: [{ content: 'Rotate = False' }],\n        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default &~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Rotate\n    },\n    {\n        id:\"Plus\",\n        offsetX:530,\n        offsetY:160,\n        width: 80,\n        height: 80,\n        // style: { fill: '#6BA5D7', strokeColor: 'white' },\n        shape: { type: 'Basic', shape: 'Plus' },\n        annotations: [{ content: 'TextEdit = False',constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"AnnotationConstraints\"].ReadOnly }],\n    },\n    {\n        id:\"decision\",\n        offsetX:630,\n        offsetY:160,\n        width: 80,\n        height: 80,\n        // style: { fill: '#6BA5D7', strokeColor: 'white' },\n        shape: { type: 'Flow', shape: 'Decision' },\n        annotations: [{ content: 'Resizing = False' }],\n       constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default & ~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Resize\n    },\n    {\n        id:\"textNode2\",\n        // Position of the node\n        offsetX:350,\n        offsetY: 280,\n        // Size of the node\n        width: 550,\n        height: 50,\n        //Sets type of the node\n        shape: { type: 'Text', content: 'Use Connector Constraints to restrict end-users from performing certain operations on Connector.' },\n        //Customizes the appearances such as text, font, fill, and stroke.\n        style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center', },\n        constraints:  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].None\n    },\n];\n\nvar connectors = [\n {\n    id: \"select\",\n    type: 'Orthogonal',\n    annotations: [{ content: 'Selection = False' , horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],\n     constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Default & ~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Select,\n     style: {\n        strokeColor: '#6BA5D7',\n        fill: '#6BA5D7',\n        strokeWidth: 2\n    },\n    targetDecorator: {\n        style: {\n            fill: '#6BA5D7',\n            strokeColor: '#6BA5D7'\n        }\n    },\n    sourcePoint: {\n        x: 40,\n        y: 350\n    },\n    targetPoint: {\n        x: 120,\n        y: 430\n    }\n},\n{\n    id: \"connector2\",\n    type: 'Orthogonal',\n    annotations: [{ content: 'Dragging = True',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Default | ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Drag,\n     style: {\n        strokeColor: '#6BA5D7',\n        fill: '#6BA5D7',\n        strokeWidth: 2\n    },\n    targetDecorator: {\n        style: {\n            fill: '#6BA5D7',\n            strokeColor: '#6BA5D7'\n        }\n    },\n    sourcePoint: {\n        x: 140,\n        y: 350\n    },\n    targetPoint: {\n        x: 220,\n        y: 430\n    }\n},\n{\n    id: \"delete\",\n    type: 'Orthogonal',\n    annotations: [{ content: 'Delete = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],\n    constraints: (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].DragSegmentThumb) &~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Delete | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Drag),\n     style: {\n        strokeColor: '#6BA5D7',\n        fill: '#6BA5D7',\n        strokeWidth: 2\n    },\n    targetDecorator: {\n        style: {\n            fill: '#6BA5D7',\n            strokeColor: '#6BA5D7'\n        }\n    },\n    sourcePoint: {\n        x: 250,\n        y: 350\n    },\n    targetPoint: {\n        x: 320,\n        y: 430\n    }\n},\n{\n    id: \"endThumb\",\n    type: 'Orthogonal',\n    annotations: [{ content: 'EndThumb = False' ,horizontalAlignment: 'Right' , verticalAlignment: 'Bottom' }],\n    constraints:(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All ) &~ ( _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].ConnectorSourceThumb | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].ConnectorTargetThumb),\n     style: {\n        strokeColor: '#6BA5D7',\n        fill: '#6BA5D7',\n        strokeWidth: 2\n    },\n    targetDecorator: {\n        style: {\n            fill: '#6BA5D7',\n            strokeColor: '#6BA5D7'\n        }\n    },\n    sourcePoint: {\n        x: 360,\n        y: 350\n    },\n    targetPoint: {\n        x: 440,\n        y: 430\n    }\n},\n{\n    id: \"draggable\",\n    type: 'Orthogonal',\n    annotations: [{ content: 'EndDraggable = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],\n    constraints: (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].DragSegmentThumb) &~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].DragSourceEnd | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].DragTargetEnd),\n     style: {\n        strokeColor: '#6BA5D7',\n        fill: '#6BA5D7',\n        strokeWidth: 2\n    },\n    targetDecorator: {\n        style: {\n            fill: '#6BA5D7',\n            strokeColor: '#6BA5D7'\n        }\n    },\n    sourcePoint: {\n        x: 460,\n        y: 350\n    },\n    targetPoint: {\n        x: 540,\n        y: 430\n    }\n},\n{\n    id: \"segmentThumb\",\n    type: 'Orthogonal',\n    annotations: [{ content: 'SegmentThumb = False',horizontalAlignment: 'Right' , verticalAlignment: 'Bottom'  }],\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Default &~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Drag,\n     style: {\n        strokeColor: '#6BA5D7',\n        fill: '#6BA5D7',\n        strokeWidth: 2\n    },\n    targetDecorator: {\n        style: {\n            fill: '#6BA5D7',\n            strokeColor: '#6BA5D7'\n        }\n    },\n    sourcePoint: {\n        x: 580,\n        y: 350\n    },\n    targetPoint: {\n        x: 660,\n        y: 430\n    }\n},\n];\n\nlet handles = [\n{\n            name: 'delete', pathData: \"M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76 96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04 91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z\",\n            visible: true, offset: 0.5, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n        }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"80%\",\n      height: \"700px\",\n      nodes : nodes,\n      connectors : connectors,\n      rulerSettings : {\n        showRulers : true\n      },\n      contextMenuSettings: { show: true },\n      selectedItems : {\n        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle,\n        userHandles : handles\n      },\n       selectionChange :(args)=>{\n         var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n            if (args.state === 'Changing') {\n                if (args.type === 'Addition') {\n                    if (args.newValue.length > 0 && args.newValue[0].id === 'endThumb') {\n                        diagram.selectedItems.constraints =\n                            _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All &\n                                ~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].ConnectorSourceThumb |\n                                    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].ConnectorTargetThumb);\n                    }\n                    else {\n                        diagram.selectedItems.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All;\n                    }\n                }\n                else {\n                    diagram.selectedItems.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All;\n                }\n            }\n            if (args.state === 'Changed') {\n                if (args.newValue.length > 0 && args.newValue[0] instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Node\"]) {\n                    diagram.selectedItems = {\n                        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle,\n                        userHandles: handles,\n                    };\n                }\n                else {\n                    if (args.newValue[0].id !== 'endThumb') {\n                        diagram.selectedItems = {\n                            constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle,\n                        };\n                    }\n                    else {\n                        diagram.selectedItems = {\n                            constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].All &\n                                ~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle |\n                                    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].ConnectorSourceThumb |\n                                    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].ConnectorTargetThumb),\n                        };\n                    }\n                }\n            }\n    },\n      zoomingChange :(args)=>{\n        let diagram = document.getElementById(\"diagram\").ej2_instances[0];\n         diagram.constraints = diagram.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramConstraints\"].Zoom;\n      },\n      undoRedoChange :(args)=>{\n        let diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.constraints = diagram.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramConstraints\"].UndoRedo ;\n        diagram.dataBind();\n      },\n      editingChange : (args)=>{\n        let diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        for (var i= 0; i < diagram.nodes.length; i++) {\n            var node = diagram.nodes[i];\n            for (var j= 0; j < node.annotations.length; j++) {\n            if (node.annotations[j].content) {\n                if (args.checked) {\n                if (node.id !== 'Plus') {\n                    node.annotations[j].constraints =\n                    node.annotations[j].constraints ^\n                    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"AnnotationConstraints\"].ReadOnly;\n                }\n                } else {\n                node.annotations[j].constraints =\n                    node.annotations[j].constraints | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"AnnotationConstraints\"].ReadOnly;\n                }\n            }\n            }\n        }\n        for (var x = 0; x < diagram.connectors.length; x++) {\n            var connector = diagram.connectors[x];\n            for (var y= 0; y < connector.annotations.length; y++) {\n            if (connector.annotations[y].content) {\n                if (args.checked) {\n                if (connector.id === 'select') {\n                    connector.constraints =\n                    connector.constraints & ~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Select);\n                } else {\n                    connector.annotations[y].constraints =\n                    connector.annotations[y].constraints ^\n                    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"AnnotationConstraints\"].ReadOnly;\n                }\n                } else {\n                connector.annotations[y].constraints =\n                    connector.annotations[y].constraints ^\n                    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"AnnotationConstraints\"].ReadOnly;\n                }\n            }\n            }\n        }\n        diagram.dataBind();\n      },\n      contextChange : (args)=>{\n        let diagram = document.getElementById(\"diagram\").ej2_instances[0];\n          if (args.checked) {\n            diagram.contextMenuSettings.show = true;\n            diagram.refresh();\n            } \n        else {\n            diagram.contextMenuSettings.show = false;\n        }\n            diagram.dataBind();\n      },\n      selectableChange :(args)=>{\n      let diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        for (let i = 0; i < diagram.nodes.length; i++) {\n            let node = diagram.nodes[i];\n                if (args.checked) {\n                    node.constraints  = node.constraints | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Select;\n                } \n                else \n                {\n                    node.constraints = node.constraints &~  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Select;\n                }\n            diagram.dataBind();\n        }\n        for (let j = 0; j < diagram.connectors.length; j++) {\n            let connector = diagram.connectors[j];\n                if (args.checked) {\n                    if(connector.id ===\"select\"){\n                        connector.constraints= connector.constraints^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Select;\n                    }\n                    else{\n                        connector.constraints  = connector.constraints | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Select;\n                    }\n                } \n                else\n                {\n                    if(connector.id ===\"endThumb\"){\n                        connector.constraints= connector.constraints^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Select;\n                    }\n                    else\n                    {\n                    connector.constraints = connector.constraints &~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Select;\n                    }\n                    diagram.dataBind();\n               }\n        }\n    },\n    draggableChange : (args)=>{\n    let diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        for (let i = 0; i < diagram.nodes.length; i++) {\n    let nodes = diagram.nodes[i];\n    if (args.checked) {\n         if(nodes.id ===\"ellipse\"){\n            nodes.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Default & ~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Drag;\n        }\n        else{\n            nodes.constraints = nodes.constraints | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Drag;\n        }\n    } \n    else {\n          nodes.constraints = nodes.constraints &~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"NodeConstraints\"].Drag;\n    }\n    diagram.dataBind();\n}\nfor (let j  = 0; j < diagram.connectors.length; j++) {\n  let connectors = diagram.connectors[j];\n    if (args.checked) {\n        connectors.constraints =  connectors.constraints | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Drag;   \n    } else \n    {\n        connectors.constraints = connectors.constraints  &~ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorConstraints\"].Drag;   \n    }\n    diagram.dataBind();\n}\n    }\n  }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n       diagram.fitToPage();\n    },\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=template&id=2af9a928&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/constraints/App.vue?vue&type=template&id=2af9a928&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\"ejs-diagram\", {\n          ref: \"diagramObject\",\n          staticStyle: { display: \"block\" },\n          attrs: {\n            id: \"diagram\",\n            width: _vm.width,\n            height: _vm.height,\n            rulerSettings: _vm.rulerSettings,\n            selectionChange: _vm.selectionChange,\n            selectedItems: _vm.selectedItems,\n            nodes: _vm.nodes,\n            connectors: _vm.connectors,\n          },\n        }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-2 property-section\",\n        staticStyle: {\n          float: \"right\",\n          \"margin-top\": \"-720px\",\n          \"margin-right\": \"-10px\",\n        },\n      },\n      [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"row property-panel-content\",\n            staticStyle: { \"padding-top\": \"5px\", \"margin-left\": \"-40px\" },\n          },\n          [\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    label: \"Zooming\",\n                    checked: true,\n                    change: _vm.zoomingChange,\n                  },\n                }),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    label: \"Undo/Redo\",\n                    checked: true,\n                    change: _vm.undoRedoChange,\n                  },\n                }),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    label: \"Editing\",\n                    checked: true,\n                    change: _vm.editingChange,\n                  },\n                }),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    label: \"Context Menu\",\n                    checked: true,\n                    change: _vm.contextChange,\n                  },\n                }),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    label: \"Selectable\",\n                    checked: true,\n                    change: _vm.selectableChange,\n                  },\n                }),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    label: \"Draggable\",\n                    checked: true,\n                    change: _vm.draggableChange,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]\n        ),\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"property-panel-header\" }, [\n      _c(\"p\", [_vm._v(\"Diagram Constraints\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates how node constraints are used to restrict end-users from performing certain operations on nodes and connector constraints are used to restrict end-users from performing certain operation on connectors.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates how node constraints are used to restrict end-users from performing certain operations on nodes and connector constraints are used to restrict end-users from performing certain operation on connectors.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"NodeConstraints\")]),\n        _vm._v(\n          \" property allows you to enable or disable node behaviors like select, drag, resize, rotate, and delete.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"ConnectorConstraints\")]),\n        _vm._v(\n          \" property allows you to enable or disable connector behaviors like select, drag, delete, drag source end, and drag target end.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"AnnotationConstraints\")]),\n        _vm._v(\n          \" property allows you to enable or disable the annotation behavior, text editing.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\" Using the \"),\n        _c(\"code\", [_vm._v(\"DiagramConstraints\")]),\n        _vm._v(\n          \" property, enable or disable certain features of the diagram like zoom, undo/redo, context menu, drag, and select.\"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/constraints/App.vue?vue&type=style&index=0&id=2af9a928&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"372d8232\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/diagram/constraints/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });