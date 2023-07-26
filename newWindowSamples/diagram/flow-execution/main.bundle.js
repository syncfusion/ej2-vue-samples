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
/******/ 		"diagram/flow-execution/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/flow-execution/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/flow-execution/App.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/flow-execution/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1b6b145b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1b6b145b&scoped=true& */ \"./Samples/diagram/flow-execution/App.vue?vue&type=template&id=1b6b145b&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/flow-execution/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_1b6b145b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css& */ \"./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1b6b145b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1b6b145b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1b6b145b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/flow-execution/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?");

/***/ }),

/***/ "./Samples/diagram/flow-execution/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/diagram/flow-execution/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?");

/***/ }),

/***/ "./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b6b145b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b6b145b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b6b145b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b6b145b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b6b145b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?");

/***/ }),

/***/ "./Samples/diagram/flow-execution/App.vue?vue&type=template&id=1b6b145b&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/diagram/flow-execution/App.vue?vue&type=template&id=1b6b145b&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b6b145b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1b6b145b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=template&id=1b6b145b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b6b145b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b6b145b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?");

/***/ }),

/***/ "./Samples/diagram/flow-execution/main.js":
/*!************************************************!*\
  !*** ./Samples/diagram/flow-execution/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/flow-execution/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#flowExecitionPropertySection .row[data-v-1b6b145b] {\\n    margin-left: 0px;\\n    margin-right: 0px;\\n}\\n#flowExecitionPropertySection .col-xs-7[data-v-1b6b145b] {\\n    width: 300px;\\n}\\n#flowExecitionPropertySection .col-xs-7[data-v-1b6b145b] {\\n    padding-left: 0px;\\n    padding-right: 0px;\\n}\\n#flowExecitionControlSection.content-wrapper[data-v-1b6b145b] {\\n    border: 1px solid #D7D7D7;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/grams-vue-samples_release_22.1.1/Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,kBAAkB;CACrB;AACD;IACI,aAAa;CAChB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#flowExecitionPropertySection .row[data-v-1b6b145b] {\\n    margin-left: 0px;\\n    margin-right: 0px;\\n}\\n#flowExecitionPropertySection .col-xs-7[data-v-1b6b145b] {\\n    width: 300px;\\n}\\n#flowExecitionPropertySection .col-xs-7[data-v-1b6b145b] {\\n    padding-left: 0px;\\n    padding-right: 0px;\\n}\\n#flowExecitionControlSection.content-wrapper[data-v-1b6b145b] {\\n    border: 1px solid #D7D7D7;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/flow-execution/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonPlugin\"]);\n\nfunction CreateConnector(\n    name, source, target, content, type,\n    direction, targePort, length) {\n    let connector = {};\n    connector.id = name;\n    connector.sourceID = source;\n    connector.targetID = target;\n    connector.style = { strokeWidth: 2 };\n    let annotation = {};\n    annotation.content = content;\n    annotation.style = { fill: 'white' };\n    connector.annotations = [annotation];\n    connector.style.strokeColor = '#8D8D8D';\n    connector.targetDecorator = {};\n    connector.targetDecorator.style = {};\n    connector.targetDecorator.style.strokeColor = '#8D8D8D';\n    connector.targetDecorator.style.fill = '#8D8D8D';\n    if (targePort) {\n        connector.targetPortID = targePort;\n    }\n    let segment = {};\n    if (type) {\n        connector.type = type;\n        segment.direction = direction;\n        segment.type = type;\n        segment.length = length;\n        connector.segments = [segment];\n    }\n    return connector;\n}\n\nfunction CreateNodes(\n    name, offsetX, offsetY, shape, content,\n    width, height, ports) {\n    let node = {};\n    node.id = name;\n    node.offsetX = offsetX;\n    node.width = 150;\n    node.height = 50;\n    node.offsetY = offsetY;\n    let annotations = {};\n    annotations.content = content;\n    node.annotations = [annotations];\n    node.shape = { type: 'Flow', shape: shape };\n    node.style = { fill: '#FBF6E1', strokeColor: '#E8DFB6', strokeWidth: 2 };\n    if (ports) {\n        node.ports = ports;\n    }\n    return node;\n}\nlet nodes = [];\nlet port1 = { id: 'port1', offset: { x: 0.5, y: 1 } };\nlet port = { id: 'port', offset: { x: 1, y: 0.5 } };\nnodes.push(CreateNodes('node1', 100, 125, 'Terminator', 'Begin', 100, 35));\nnodes.push(CreateNodes('node2', 300, 125, 'Process', 'Specify collection', 120, 25, [port]));\nnodes.push(CreateNodes('node3', 500, 125, 'Decision', 'Particulars \\n required?', 100, 50, [port1]));\nnodes.push(CreateNodes('node4', 730, 125, 'Process', 'Specify particulars', 90, 25));\nnodes.push(CreateNodes('node5', 500, 225, 'Process', 'Design collection', 100, 25, [port]));\nnodes.push(CreateNodes('node6', 500, 320, 'Process', 'Cluster of events', 100, 25));\nnodes.push(CreateNodes('node7', 500, 420, 'Process', 'Start the process', 100, 25));\nnodes.push(CreateNodes('node8', 730, 320, 'Process', 'Record and analyze \\n results', 170, 25, [port]));\nnodes.push(CreateNodes('node9', 730, 420, 'Terminator', 'End ', 100, 35));\nlet connectors = [];\nconnectors.push(CreateConnector('connector1', 'node1', 'node2', ''));\nconnectors.push(CreateConnector('connector2', 'node2', 'node3', ''));\nconnectors.push(CreateConnector('connector3', 'node3', 'node4', 'Yes'));\nconnectors.push(CreateConnector('connector4', 'node3', 'node5', 'No'));\nconnectors.push(CreateConnector('connector5', 'node5', 'node6', ''));\nconnectors.push(CreateConnector('connector6', 'node6', 'node7', ''));\nconnectors.push(CreateConnector('connector7', 'node8', 'node6', ''));\nconnectors.push(CreateConnector('connector8', 'node7', 'node9', ''));\nconnectors.push(CreateConnector('connector10', 'node4', 'node5', '', 'Orthogonal', 'Bottom', 'port', 220));\n\nlet node;\nlet element;\nlet diagram;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            width: \"100%\",\n            height: \"600px\",\n            nodes: nodes,\n            connectors: connectors,\n            buttonChange: buttonChange,\n            snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None }\n        };\n    },\n    mounted: function() {\n        diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.selectionChange = (arg) => {\n            applyChanges(selectedButton);\n        };\n        diagram.select([diagram.nodes[2]]);\n    }\n}));\n\nlet highLightedObjects = [];\nlet selectedButton = 'LinksConnected';\n\nfunction buttonChange(args) {\n    applyChanges(args.event.srcElement.id);\n    selectedButton = args.event.srcElement.id;\n}\n\nfunction applyChanges(id) {\n    Unhighlight();\n    switch (id) {\n        case 'LinksInto':\n            linkedIn();\n            break;\n        case 'LinksOutOf':\n            LinksOut();\n            break;\n        case 'LinksConnected':\n            LinksConnector();\n            break;\n        case 'NodesInto':\n            NodesIn();\n            break;\n        case 'NodesOutOf':\n            NodesOut();\n            break;\n        case 'NodesConnected':\n            NodesConnect();\n            break;\n        case 'NodesReachable':\n            NodeReachable();\n            break;\n    }\n}\nfunction linkedIn() {\n    if (diagram.selectedItems.nodes.length) {\n        var node = diagram.selectedItems.nodes[0].inEdges;\n        for (var i = 0; i < node.length; i++) {\n            var index = diagram.connectors.indexOf(diagram.nameTable[node[i]]);\n            highLightedObjects.push(node[i]);\n            diagram.connectors[index].style.strokeColor = '#1413F8';\n            diagram.connectors[index].targetDecorator.style.strokeColor = '#1413F8';\n            diagram.connectors[index].targetDecorator.style.fill = '#1413F8';\n            diagram.dataBind();\n        }\n    }\n}\nfunction LinksOut() {\n    if (diagram.selectedItems.nodes.length) {\n        var node = diagram.selectedItems.nodes[0].outEdges;\n        for (var i = 0; i < node.length; i++) {\n            var index = diagram.connectors.indexOf(diagram.nameTable[node[i]]);\n            highLightedObjects.push(node[i]);\n            diagram.connectors[index].style.strokeColor = '#1413F8';\n            diagram.connectors[index].targetDecorator.style.strokeColor = '#1413F8';\n            diagram.connectors[index].targetDecorator.style.fill = '#1413F8';\n            diagram.dataBind();\n        }\n    }\n}\nfunction LinksConnector() {\n    LinksOut();\n    linkedIn();\n}\nfunction NodesIn() {\n    if (diagram.selectedItems.nodes.length) {\n        var node = diagram.selectedItems.nodes[0].inEdges;\n        for (var i = 0; i < node.length; i++) {\n            var nodeId = diagram.nameTable[node[i]].sourceID;\n            highLightedObjects.push(nodeId);\n            var index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);\n            diagram.nodes[index].style.strokeColor = '#1413F8';\n            diagram.dataBind();\n        }\n    }\n}\nfunction NodesOut() {\n    if (diagram.selectedItems.nodes.length) {\n        var node = diagram.selectedItems.nodes[0].outEdges;\n        for (var i = 0; i < node.length; i++) {\n            var nodeId = diagram.nameTable[node[i]].targetID;\n            highLightedObjects.push(nodeId);\n            var index = diagram.nodes.indexOf(diagram.nameTable[nodeId]);\n            diagram.nodes[index].style.strokeColor = '#1413F8';\n            diagram.dataBind();\n        }\n    }\n}\nfunction NodesConnect() {\n    NodesOut();\n    NodesIn();\n}\nfunction NodeReachable() {\n    if (diagram.selectedItems.nodes.length) {\n        var connectors_1 = diagram.selectedItems.nodes[0].outEdges;\n        var nodeList = foundNode(connectors_1, []);\n        for (var i = 0; i < nodeList.length; i++) {\n            var index = diagram.connectors.indexOf(diagram.nameTable[nodeList[i]]);\n            highLightedObjects.push(nodeList[i]);\n            diagram.connectors[index].style.strokeColor = '#1413F8';\n            diagram.connectors[index].targetDecorator.style.strokeColor = '#1413F8';\n            diagram.connectors[index].targetDecorator.style.fill = '#1413F8';\n            diagram.dataBind();\n        }\n    }\n}\nfunction foundNode(list, nodeList) {\n    for (var i = 0; i < list.length; i++) {\n        var connector = diagram.nameTable[list[i]];\n        if (nodeList.indexOf(connector.id) > -1) {\n            break;\n        }\n        if (!connector.annotations[0] || (connector.annotations[0] && connector.annotations[0].content !== 'No')) {\n            nodeList.push(connector.id);\n        }\n        if (diagram.nameTable[connector.targetID].outEdges.length) {\n            if (list.indexOf(connector.targetID) === -1) {\n                foundNode(diagram.nameTable[connector.targetID].outEdges, nodeList);\n            }\n        }\n    }\n    return nodeList;\n}\nfunction Unhighlight() {\n    for (var i = highLightedObjects.length - 1; i >= 0; i--) {\n        if (diagram.nameTable[highLightedObjects[i]] instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Node\"]) {\n            var index = diagram.nodes.indexOf(diagram.nameTable[highLightedObjects[i]]);\n            diagram.nodes[index].style.strokeColor = '#E8DFB6';\n            diagram.dataBind();\n        }\n        else {\n            var index = diagram.connectors.indexOf(diagram.nameTable[highLightedObjects[i]]);\n            diagram.connectors[index].style.strokeColor = '#8D8D8D';\n            diagram.connectors[index].targetDecorator.style.strokeColor = '#8D8D8D';\n            diagram.connectors[index].targetDecorator.style.fill = '#8D8D8D';\n            diagram.dataBind();\n        }\n    }\n    highLightedObjects = [];\n}\n\n\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=template&id=1b6b145b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/flow-execution/App.vue?vue&type=template&id=1b6b145b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"content-wrapper\",\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"flowExecitionControlSection\" },\n        },\n        [\n          _c(\"ejs-diagram\", {\n            ref: \"diagramObj\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              id: \"diagram\",\n              width: _vm.width,\n              height: _vm.height,\n              nodes: _vm.nodes,\n              connectors: _vm.connectors,\n              snapSettings: _vm.snapSettings,\n            },\n          }),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section\",\n        attrs: { id: \"flowExecitionPropertySection\" },\n      },\n      [\n        _c(\"div\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"\\n            Show flow execution\\n        \"),\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"row property-panel-content\",\n            attrs: { id: \"appearance\" },\n          },\n          [\n            _c(\n              \"div\",\n              {\n                staticClass: \"row property-panel-content\",\n                staticStyle: { width: \"260px\", overflow: \"hidden\" },\n              },\n              [\n                _c(\"div\", { staticClass: \"row\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-xs-7\" },\n                    [\n                      _c(\"ejs-radiobutton\", {\n                        attrs: {\n                          id: \"UnhighlightAll\",\n                          label: \"None\",\n                          value: \"UnhighlightAll\",\n                          name: \"radio\",\n                          change: _vm.buttonChange,\n                        },\n                      }),\n                    ],\n                    1\n                  ),\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"LinksInto\",\n                            label: \"Incoming connections\",\n                            value: \"LinksInto\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"LinksOutOf\",\n                            label: \"Outgoing connections\",\n                            value: \"LinksOutOf\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"LinksConnected\",\n                            label: \"Incoming and outgoing connections\",\n                            value: \"LinksConnected\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                            checked: \"true\",\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"NodesInto\",\n                            label: \"Incoming nodes\",\n                            value: \"NodesInto\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"NodesOutOf\",\n                            label: \"Outgoing nodes\",\n                            value: \"NodesOutOf\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"NodesConnected\",\n                            label: \"Incoming and outgoing nodes\",\n                            value: \"NodesConnected\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n                  [\n                    _c(\n                      \"div\",\n                      { staticClass: \"col-xs-7\" },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          attrs: {\n                            id: \"NodesReachable\",\n                            label: \"Adjacent nodes\",\n                            value: \"NodesReachable\",\n                            name: \"radio\",\n                            change: _vm.buttonChange,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                ),\n              ]\n            ),\n          ]\n        ),\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates how we can process and get the consecutive nodes and connectors respectively.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            We can get the inward connections and outward connections of the node using \"\n        ),\n        _c(\"code\", [_vm._v(\"inEdges\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"outEdges\")]),\n        _vm._v(\n          \"        properties of the node. By using this connector’s name collection, we can find the node using \"\n        ),\n        _c(\"code\", [_vm._v(\"getObject\")]),\n        _vm._v(\n          \".\\n    And also, we can get the nodes connected on the connector using \"\n        ),\n        _c(\"code\", [_vm._v(\"sourceNode\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"targetNode\")]),\n        _vm._v(\n          \"        properties of the connector. method can be used to print the diagrams.\\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/flow-execution/App.vue?vue&type=style&index=0&id=1b6b145b&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"5cec33c4\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/diagram/flow-execution/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });