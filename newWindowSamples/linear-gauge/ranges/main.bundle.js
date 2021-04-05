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
/******/ 		"linear-gauge/ranges/main": 0
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
/******/ 	deferredModules.push(["./Samples/linear-gauge/ranges/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/linear-gauge/ranges/App.vue":
/*!*********************************************!*\
  !*** ./Samples/linear-gauge/ranges/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3bf01e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3bf01e82&scoped=true& */ \"./Samples/linear-gauge/ranges/App.vue?vue&type=template&id=3bf01e82&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/linear-gauge/ranges/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css& */ \"./Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3bf01e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3bf01e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3bf01e82\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/linear-gauge/ranges/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/ranges/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/linear-gauge/ranges/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/ranges/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3bf01e82_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/ranges/App.vue?vue&type=template&id=3bf01e82&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/linear-gauge/ranges/App.vue?vue&type=template&id=3bf01e82&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bf01e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3bf01e82&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/ranges/App.vue?vue&type=template&id=3bf01e82&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bf01e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bf01e82_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/ranges/main.js":
/*!*********************************************!*\
  !*** ./Samples/linear-gauge/ranges/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/ranges/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-3bf01e82] {\\n    padding: 0px !important;\\n}\\n.property-panel-section[data-v-3bf01e82] {\\n    height: 380px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eargauge-vue-samples_master-I2MPOSABLCZ3MA3ENCOCSUUKUZ2MMI7UTDWJNE2FXOBSRXGYFYDQ/Samples/linear-gauge/ranges/App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=3bf01e82&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-3bf01e82] {\\n    padding: 0px !important;\\n}\\n.property-panel-section[data-v-3bf01e82] {\\n    height: 380px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/ranges/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/ranges/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"LinearGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            orientation: 'Horizontal',\n            labelStyle: {\n                format: '{value}%',\n                offset: 30\n            },\n            line: {\n                width: 0\n            },\n            height: 10,\n            width: 10,\n            markerType: 'Triangle',\n            placement: 'Near',\n            offset: -40,\n            majorTicks: {\n                height: 0\n            },\n            minorTicks: {\n                height: 0\n            },\n            ranges: [{\n                    start: 0,\n                    end: 32,\n                    color: '#30B32D',\n                    startWidth: 15,\n                    endWidth: 15\n                },\n                {\n                    start: 32,\n                    end: 68,\n                    startWidth: 15,\n                    endWidth: 15,\n                    color: '#FFDF00'\n                },\n                {\n                    start: 68,\n                    end: 100,\n                    startWidth: 15,\n                    endWidth: 15,\n                    color: '#F03E3E'\n                }\n            ],\n            annotations: [{\n                content: '<div id=\"pointer\" style=\"width:20px\"><h1 style=\"font-size:18px;\">35</h1></div>',\n                axisIndex: 0,\n                zIndex: '1',\n                axisValue: 35,\n                y: -50\n            }],\n            rangedata: [{\n                    Id: '0',\n                    level: 'Low'\n                },\n                {\n                    Id: '1',\n                    level: 'Moderate'\n                },\n                {\n                    Id: '2',\n                    level: 'High'\n                }\n            ],\n            rangefields: {\n                text: 'level',\n                value: 'Id'\n            },\n            rangewidth: 120,\n            rangecolordata: [{\n                    Id: 'font',\n                    type: 'Default Color'\n                },\n                {\n                    Id: 'range',\n                    type: 'Range Color'\n                }\n            ],\n            rangecolorfields: {\n                text: 'type',\n                value: 'Id'\n            },\n            rangecolorwidth: 120\n        }\n    },\n    provide: {\n        lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n    },\n    methods: {\n        /* custom code start */\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.gauge.theme =\n                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        },\n        /* custom code end */\n        changeRange: function (args) {\n            /* custom code start */\n            // let cotainerObj = document.getElementById('rangeContainer');\n            /* custom code end */\n            // Code for Property Panel\n            let start = document.getElementById('start');\n            let end = document.getElementById('end');\n            let rangeColor = document.getElementById('color');\n            let startWidth = document.getElementById('startWidth');\n            let endWidth = document.getElementById('endWidth');\n            start.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].start.toString();\n            end.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].end.toString();\n            startWidth.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].startWidth.toString();\n            endWidth.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].endWidth.toString();\n            rangeColor.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].color.toString();\n            document.getElementById('startWidthValue').innerHTML = 'Range Start Width<span>&nbsp;&nbsp;&nbsp;' + startWidth.value;\n            document.getElementById('endWidthValue').innerHTML = 'Range End Width<span>&nbsp;&nbsp;&nbsp;' + endWidth.value;\n            document.getElementById('startRangeValue').innerHTML = 'Range Start <span>&nbsp;&nbsp;&nbsp;' + start.value;\n            document.getElementById('endRangeValue').innerHTML = 'Range End <span>&nbsp;&nbsp;&nbsp;' + end.value;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        },\n        changeFontcolor: function (args) {\n            this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.useRangeColor = (args.value === 'range') ? true : false;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        },\n        changeRangecolor: function (args) {\n            let ele = document.getElementById('color');\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].color = ele.value;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        },\n        rangeStart: function (args) {\n            let start = document.getElementById('start');\n            let end = document.getElementById('end');\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].start = parseInt(start.value, 10);\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].end = parseInt(end.value, 10);\n            document.getElementById('startRangeValue').innerHTML = 'Range Start <span>&nbsp;&nbsp;&nbsp;' + start.value;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        },\n        rangeEnd: function (args) {\n            let start = document.getElementById('start');\n            let end = document.getElementById('end');\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].start = parseInt(start.value, 10);\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].end = parseInt(end.value, 10);\n            document.getElementById('endRangeValue').innerHTML = 'Range End <span>&nbsp;&nbsp;&nbsp;' + end.value;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        },\n        rangeStartwidth: function (args) {\n            let ele = document.getElementById('startWidth');\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].startWidth = parseInt(ele.value, 10);\n            document.getElementById('startWidthValue').innerHTML = 'Range Start Width<span>&nbsp;&nbsp;&nbsp;' + ele.value;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        },\n        rangeEndwidth: function (args) {\n            let ele = document.getElementById('endWidth');\n            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].endWidth = parseInt(ele.value, 10);\n            document.getElementById('endWidthValue').innerHTML = 'Range End Width<span>&nbsp;&nbsp;&nbsp;' + ele.value;\n            this.$refs.lineargauge.ej2Instances.refresh();\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/ranges/App.vue?vue&type=template&id=3bf01e82&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/ranges/App.vue?vue&type=template&id=3bf01e82&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-lineargauge\",\n            {\n              ref: \"lineargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                load: _vm.load,\n                align: \"center\",\n                id: \"rangeContainer\",\n                orientation: _vm.orientation,\n                annotations: _vm.annotations\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        labelStyle: _vm.labelStyle,\n                        line: _vm.line,\n                        majorTicks: _vm.majorTicks,\n                        minorTicks: _vm.minorTicks,\n                        ranges: _vm.ranges\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: \"35\",\n                              height: _vm.height,\n                              width: _vm.width,\n                              markerType: _vm.markerType,\n                              placement: _vm.placement,\n                              offset: _vm.offset\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"selectRange\",\n                      attrs: {\n                        id: \"rangeIndex\",\n                        dataSource: _vm.rangedata,\n                        fields: _vm.rangefields,\n                        value: \"0\",\n                        index: \"0\",\n                        width: _vm.rangewidth,\n                        change: _vm.changeRange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"e-float-input\",\n                      staticStyle: { \"margin-top\": \"0px\" }\n                    },\n                    [\n                      _c(\"input\", {\n                        ref: \"rangeColor\",\n                        staticStyle: { width: \"100%\", \"margin-left\": \"-10px\" },\n                        attrs: { type: \"text\", value: \"#F03E3E\", id: \"color\" },\n                        on: { change: _vm.changeRangecolor }\n                      })\n                    ]\n                  )\n                ])\n              ])\n            ]),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"rangeFontColor\",\n                      attrs: {\n                        id: \"useRangeColor\",\n                        dataSource: _vm.rangecolordata,\n                        value: \"font\",\n                        fields: _vm.rangecolorfields,\n                        index: \"0\",\n                        width: _vm.rangecolorwidth,\n                        change: _vm.changeFontcolor\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"rangeStart\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"start\",\n                      value: \"0\",\n                      min: \"0\",\n                      max: \"100\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeStart,\n                      touchmove: _vm.rangeStart,\n                      change: _vm.rangeStart\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"rangeEnd\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"end\",\n                      value: \"32\",\n                      min: \"0\",\n                      max: \"100\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeEnd,\n                      touchmove: _vm.rangeEnd,\n                      change: _vm.rangeEnd\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"startWidth\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"startWidth\",\n                      value: \"15\",\n                      min: \"0\",\n                      max: \"30\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeStartwidth,\n                      touchmove: _vm.rangeStartwidth,\n                      change: _vm.rangeStartwidth\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(6),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"endWidth\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"endWidth\",\n                      value: \"15\",\n                      min: \"0\",\n                      max: \"30\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeEndwidth,\n                      touchmove: _vm.rangeEndwidth,\n                      change: _vm.rangeEndwidth\n                    }\n                  })\n                ])\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(7),\n    _vm._v(\" \"),\n    _vm._m(8)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Select Range\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Range Color\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Range Font Color\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"startRangeValue\" } }, [\n        _vm._v(\"Range Start\\n                        \"),\n        _c(\"span\", [_vm._v(\"   0\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"endRangeValue\" } }, [\n        _vm._v(\"Range End\\n                        \"),\n        _c(\"span\", [_vm._v(\"   32\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"startWidthValue\" } }, [\n        _vm._v(\" Range Start Width\\n                        \"),\n        _c(\"span\", [_vm._v(\"   15\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"endWidthValue\" } }, [\n        _vm._v(\"Range End Width\\n                        \"),\n        _c(\"span\", [_vm._v(\"   15\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample illustrates how to highlight a region in an axis by using ranges in gauge. Start, end, color, and width of the range can be changed by using the options provided in the property panel.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In this example, you can see how to render and configure the ranges in linear gauge. You can use\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"start\")]),\n        _vm._v(\",\\n            \"),\n        _c(\"code\", [_vm._v(\"end\")]),\n        _vm._v(\",\\n            \"),\n        _c(\"code\", [_vm._v(\"startWidth\")]),\n        _vm._v(\",\\n            \"),\n        _c(\"code\", [_vm._v(\"endWidth\")]),\n        _vm._v(\" and\\n            \"),\n        _c(\"code\", [_vm._v(\"position\")]),\n        _vm._v(\n          \" properties to customize the ranges. You can also specify various colors for the ranges in the axis. If you enable the\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"useRangeColor\")]),\n        _vm._v(\n          \" property, then the axis labels will be displayed based on its range color.\\n            \"\n        ),\n        _c(\"br\")\n      ]),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n                More information about ranges can be found in this\\n                \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n            \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/ranges/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });