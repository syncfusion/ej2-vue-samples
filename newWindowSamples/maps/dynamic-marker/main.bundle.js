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
/******/ 		"maps/dynamic-marker/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/dynamic-marker/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/dynamic-marker/App.vue":
/*!*********************************************!*\
  !*** ./Samples/maps/dynamic-marker/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_29268fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=29268fa4&scoped=true& */ \"./Samples/maps/dynamic-marker/App.vue?vue&type=template&id=29268fa4&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/dynamic-marker/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css& */ \"./Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_29268fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_29268fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"29268fa4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/dynamic-marker/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?");

/***/ }),

/***/ "./Samples/maps/dynamic-marker/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/maps/dynamic-marker/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/dynamic-marker/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?");

/***/ }),

/***/ "./Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_29268fa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?");

/***/ }),

/***/ "./Samples/maps/dynamic-marker/App.vue?vue&type=template&id=29268fa4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/maps/dynamic-marker/App.vue?vue&type=template&id=29268fa4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_29268fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=29268fa4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/dynamic-marker/App.vue?vue&type=template&id=29268fa4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_29268fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_29268fa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?");

/***/ }),

/***/ "./Samples/maps/dynamic-marker/main.js":
/*!*********************************************!*\
  !*** ./Samples/maps/dynamic-marker/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/dynamic-marker/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-text[data-v-29268fa4] {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\";\\n    font-size: 13px;\\n    font-weight: 400;\\n}\\n#width[data-v-29268fa4] {\\n    border-bottom-color: inherit;\\n    background-image: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/dynamic-marker/App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,4EAA4E;IAC5E,gBAAgB;IAChB,iBAAiB;CACpB;AACD;IACI,6BAA6B;IAC7B,uBAAuB;CAC1B\",\"file\":\"App.vue?vue&type=style&index=0&id=29268fa4&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-text[data-v-29268fa4] {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\";\\n    font-size: 13px;\\n    font-weight: 400;\\n}\\n#width[data-v-29268fa4] {\\n    border-bottom-color: inherit;\\n    background-image: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/dynamic-marker/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/dynamic-marker/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/marker-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__[\"TextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\nlet latitude = [];\nlet longitude = [];\nlet navigationLines = [];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        zoomSettings: {\n            enable: true\n        },\n        labelswidth: 120,\n        localFields: { text: 'text', value: 'value' },\n        labelsdata:[\n            {value: 'Image', text: 'Image'},\n            {value: 'Circle', text: 'Circle'},\n            {value: 'Diamond', text: 'Diamond'},\n            {value: 'Star', text: 'Star'},\n            {value: 'Triangle', text: 'Triangle'},\n        ],\n        markerDisabled:false,\n        disabled:true,\n        markerCheck:true,\n        lineCheck:false,\n        connectCheck:false,\n        togglebtnCheck:false,\n        ConnectDisabled: true,\n        textValue: 1,\n        widthDisabled: false,\n        dropDisabled: true\n    }\n},\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"NavigationLine\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Zoom\"]]\n},\n/* custom code start */\nmethods:{\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n\n    markerChange: function(args){\n        this.markerCheck = args.checked;\n        if(args.checked){\n           this.dropDisabled = true; \n        } else {\n            this.dropDisabled = false; \n        }\n    },\n\n    connectChange : function(args){\n        this.connectCheck = args.checked;\n        if(!args.checked){\n            this.emptySavedLinePositions();\n        }\n    },\n    \n    widthChange : function(args){\n        this.textValue = args.value;\n    },\n    \n    click: function(args){\n        let maps = this.$refs.maps.ej2Instances;\n        if(this.markerCheck){\n           this.addMarker(args); \n        }\n        if(this.lineCheck && !this.connectCheck) {\n            this.addLine(args, this.textValue);\n        }\n        if (this.connectCheck && !this.ConnectDisabled) {\n            this.addLine(args, this.textValue, true);\n        }\n        if (this.markerCheck || this.lineCheck || this.connectCheck) {\n            maps.refresh();\n            if (this.disabled && (maps.layers[0].markerSettings.length ||\n                    maps.layers[0].navigationLineSettings.length)) {\n                this.disabled = false;\n            }\n        }\n    },\n    btnClick: function(args){\n        let maps = this.$refs.maps.ej2Instances;\n        maps.layers[0].markerSettings = [];\n        maps.layers[0].navigationLineSettings = [];\n        navigationLines = [];\n        this.emptySavedLinePositions();\n        maps.refresh();\n        this.disabled = true;\n    },\n    lineChange: function(args) {\n       this.lineCheck = args.checked;\n       if(args.checked){\n           this.ConnectDisabled= false;\n           this.widthDisabled = true;\n       } else {\n           this.emptySavedLinePositions();\n           this.ConnectDisabled= true;\n           this.widthDisabled = false;\n       } \n    },\n    emptySavedLinePositions: function() {\n        latitude = [];\n        longitude = [];\n    },\n    \n    addMarker: function(args){\n        let marker; \n        let markerShape = this.$refs.type.ej2Instances;\n        if (args[\"latitude\"] !== null && args[\"longitude\"] !== null) {\n            let layerIndex = (args.target.indexOf('_LayerIndex_') !== -1) ?\n                parseFloat(args.target.split('_LayerIndex_')[1].split('_')[0]) : 0;\n            let maps = this.$refs.maps.ej2Instances;\n            let dynamicMarker = maps.layersCollection[layerIndex].markerSettings;\n            dynamicMarker.push(new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MarkerSettings\"](maps, 'markerSettings', marker));\n            let markerIndex = dynamicMarker.length - 1;\n            dynamicMarker[markerIndex].visible = true;\n            dynamicMarker[markerIndex].dataSource = [\n                { latitude: args[\"latitude\"], longitude: args[\"longitude\"], name: 'dynamicmarker' }\n            ];\n            dynamicMarker[markerIndex].animationDuration = 0;\n            dynamicMarker[markerIndex].fill = '#DB4537';\n            dynamicMarker[markerIndex].height = (markerShape.value !== 'Image') ? 12 : 20;\n            dynamicMarker[markerIndex].width = (markerShape.value !== 'Image') ? 12 : 20;\n            dynamicMarker[markerIndex].imageUrl = (markerShape.value !== 'Image') ? '' : './../../source/maps/images/ballon.png';\n            dynamicMarker[markerIndex].shape = (markerShape.value !== 'Image') ? markerShape.value : 'Image';\n        }\n    },\n    addLine : function(lineArgs, lineWidth, connectiveLine){\n        let maps = this.$refs.maps.ej2Instances; \n        if (lineArgs.latitude != null && lineArgs.longitude != null) {\n            latitude.push(lineArgs.latitude);\n            longitude.push(lineArgs.longitude);\n        } \n        if(latitude.length>=2){\n            navigationLines.push({\n            \"visible\": true,\n            \"latitude\": [latitude[(latitude.length - 2)], latitude[(latitude.length - 1)]],\n            \"longitude\":[longitude[(longitude.length - 2)], longitude[(longitude.length - 1)]],\n            \"angle\": 0,\n            \"width\": (lineWidth > 5) ? 5 : (((5 >= lineWidth) && (lineWidth >= 1)) ? lineWidth : 1),\n            \"color\": \"blue\"\n        });\n        maps.layers[0].navigationLineSettings = navigationLines;\n        if (!connectiveLine) {\n            this.emptySavedLinePositions();\n        }\n        }\n    },\n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/dynamic-marker/App.vue?vue&type=template&id=29268fa4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/dynamic-marker/App.vue?vue&type=template&id=29268fa4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-9 control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            ref: \"maps\",\n            attrs: {\n              id: \"container\",\n              load: _vm.load,\n              click: _vm.click,\n              zoomSettings: _vm.zoomSettings\n            }\n          },\n          [_c(\"e-layers\", [_c(\"e-layer\", { attrs: { layerType: \"OSM\" } })], 1)],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"40%\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    ref: \"marker\",\n                    attrs: {\n                      id: \"marker\",\n                      checked: _vm.markerCheck,\n                      change: _vm.markerChange\n                    },\n                    model: {\n                      value: _vm.markerCheck,\n                      callback: function($$v) {\n                        _vm.markerCheck = $$v\n                      },\n                      expression: \"markerCheck\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"35px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    ref: \"line\",\n                    attrs: {\n                      id: \"line\",\n                      change: _vm.lineChange,\n                      disabled: _vm.markerDisabled\n                    },\n                    model: {\n                      value: _vm.lineCheck,\n                      callback: function($$v) {\n                        _vm.lineCheck = $$v\n                      },\n                      expression: \"lineCheck\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"35px\" } }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    ref: \"connect\",\n                    attrs: {\n                      id: \"connect\",\n                      disabled: _vm.ConnectDisabled,\n                      change: _vm.connectChange\n                    },\n                    model: {\n                      value: _vm.connectCheck,\n                      callback: function($$v) {\n                        _vm.connectCheck = $$v\n                      },\n                      expression: \"connectCheck\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"35px\" } }, [\n              _vm._m(4),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"10%\", \"margin-left\": \"20px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"type\",\n                    staticStyle: { width: \"110\" },\n                    attrs: {\n                      id: \"type\",\n                      enabled: _vm.dropDisabled,\n                      dataSource: _vm.labelsdata,\n                      fields: _vm.localFields,\n                      index: \"0\",\n                      width: _vm.labelswidth\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"35px\" } }, [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"10%\" } }, [\n                _c(\n                  \"div\",\n                  { staticStyle: { width: \"120px\", \"margin-left\": \"-10px\" } },\n                  [\n                    _c(\"ejs-textbox\", {\n                      ref: \"text\",\n                      staticStyle: { width: \"60px\" },\n                      attrs: {\n                        id: \"width\",\n                        enabled: _vm.widthDisabled,\n                        value: \"1\",\n                        change: _vm.widthChange\n                      },\n                      model: {\n                        value: _vm.textValue,\n                        callback: function($$v) {\n                          _vm.textValue = $$v\n                        },\n                        expression: \"textValue\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\"td\", { attrs: { align: \"center\" } }, [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"margin-left\": \"60%\" } },\n                  [\n                    _c(\n                      \"ejs-button\",\n                      {\n                        ref: \"togglebtn\",\n                        staticStyle: {\n                          \"text-transform\": \"none !important\",\n                          width: \"80px\",\n                          \"margin-left\": \"-55%\",\n                          \"margin-top\": \"-2px\"\n                        },\n                        attrs: { id: \"togglebtn\", disabled: _vm.disabled },\n                        nativeOn: {\n                          click: function($event) {\n                            return _vm.btnClick($event)\n                          }\n                        },\n                        model: {\n                          value: _vm.togglebtnCheck,\n                          callback: function($$v) {\n                            _vm.togglebtnCheck = $$v\n                          },\n                          expression: \"togglebtnCheck\"\n                        }\n                      },\n                      [_vm._v(\"Clear\")]\n                    )\n                  ],\n                  1\n                )\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(6),\n    _vm._v(\" \"),\n    _vm._m(7)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { align: \"center\" } }, [\n      _c(\"p\", [\n        _c(\"i\", [\n          _c(\"div\", { attrs: { align: \"center\" } }, [\n            _c(\n              \"p\",\n              {\n                staticStyle: { \"font-size\": \"16px\", color: \"grey\" },\n                attrs: { id: \"content\" }\n              },\n              [_vm._v(\"Click on the maps to add marker/navigation line\")]\n            )\n          ])\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { padding: \"0px\" } },\n        [_vm._v(\"Marker\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"70%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { padding: \"0px\" } },\n        [_vm._v(\"Line\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"70%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { padding: \"0px\" } },\n        [_vm._v(\"Connecting line\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"70%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { padding: \"0px\" } },\n        [_vm._v(\" Marker type\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"70%\" } }, [\n      _c(\n        \"div\",\n        { staticClass: \"property-text\", staticStyle: { padding: \"0px\" } },\n        [_vm._v(\"Width\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample shows how custom markers and lines can be dynamically added to our maps with UI interaction. Marker or line can be chosen from the properties panel.\\n       \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          '\\n          Using UI interaction, the markers or line can be added as follows: You can get the currently clicked geo location by passing \"PointerEvent\" or \"MouseEvent\" argument \\n          and layer index to the \"getGeoLocation\" method. Then, use that geo position to place the marker or line in the appropriate position.\\n        '\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n           The features of maps component are segregated into individual feature-wise modules. To use navigation lines and marker, you need to inject the NavigationLine and Marker module using the Maps.Inject(NavigationLine, Marker) method.\\n        \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/dynamic-marker/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });