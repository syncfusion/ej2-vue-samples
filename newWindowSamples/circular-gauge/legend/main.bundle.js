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
/******/ 		"circular-gauge/legend/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/legend/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/legend/App.vue":
/*!***********************************************!*\
  !*** ./Samples/circular-gauge/legend/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_c7d4a702_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c7d4a702&scoped=true& */ \"./Samples/circular-gauge/legend/App.vue?vue&type=template&id=c7d4a702&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/legend/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css& */ \"./Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_c7d4a702_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_c7d4a702_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c7d4a702\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/legend/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/legend/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/circular-gauge/legend/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/legend/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c7d4a702_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/legend/App.vue?vue&type=template&id=c7d4a702&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/circular-gauge/legend/App.vue?vue&type=template&id=c7d4a702&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c7d4a702_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c7d4a702&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/legend/App.vue?vue&type=template&id=c7d4a702&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c7d4a702_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c7d4a702_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/legend/main.js":
/*!***********************************************!*\
  !*** ./Samples/circular-gauge/legend/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/legend/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-c7d4a702] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/legend/App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=c7d4a702&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-c7d4a702] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/legend/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/legend/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n            title: 'Measure of wind speed in Km/h',\n            legendSettings: { \n                visible: true,\n                position: 'Bottom'\n            },\n            startAngle: 210,\n            endAngle: 150,\n            lineStyle: { width: 2 },\n            labelStyle: {\n                position: 'Inside', useRangeColor: false,\n                font: { size: '12px', color: '#424242', fontFamily: 'Roboto', fontStyle: 'Regular' }\n            },\n            majorTicks: {\n                height: 16, color: '#9E9E9E', interval: 20\n            },\n            minorTicks: {\n                height: 8, interval: 10\n            },\n            radius: '80%',\n            minimum: 0,\n            maximum: 120,\n            pointerWidth: 8,\n            color: '#757575',\n            radius: '60%',\n            value: 70,\n            animation: { enable: true },\n            ranges: [\n                { start: 0, end: 5, color:'#ccffff', radius: '110%', legendText: 'Light air'},\n                { start: 5, end: 11, color:'#99ffff', radius: '110%', legendText: 'Light breeze' },\n                { start: 11, end: 19, color:'#99ff99', radius: '110%', legendText: 'Gentle breeze' },\n                { start: 19, end: 28, color:'#79ff4d', radius: '110%', legendText: 'Moderate breeze' },\n                { start: 28, end: 49, color:'#c6ff1a', radius: '110%', legendText: 'Strong breeze' },\n                { start: 49, end: 74, color:'#e6ac00', radius: '110%', legendText: 'Gale' },\n                { start: 74, end: 102, color:'#ff6600', radius: '110%', legendText: 'Storm' },\n                { start: 102, end: 120, color:'#ff0000', radius: '110%', legendText: 'Hurricane force' },\n                ],\n            positiondata:['Auto', 'Top', 'Bottom', 'Left', 'Right'],\n            positionwidth:120,\n            alignmentdata:['Far', 'Center', 'Near'],\n            alignmentwidth:120,\n            shapedata:[\n            { Id:'Circle', level:'Circle'},\n            { Id:'Rectangle', level:'Rectangle'},\n            { Id:'Triangle', level:'Triangle'},\n            { Id:'Diamond', level:'Diamond'},\n            { Id:'InvertedTriangle', level:'Inverted triangle'}\n            ],\n            shapefields:{ text: 'level', value: 'Id' },\n            shapewidth:120\n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"]]\n},\nmethods: {\n    // Code for Property Panel\n      load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    changePosition:function(args){\n            this.$refs.circulargauge.ej2Instances.legendSettings.position = this.$refs.legendPos.ej2Instances.value;\n    },\n    changeAlignment:function(args){\n             this.$refs.circulargauge.ej2Instances.legendSettings.alignment = this.$refs.legendAlignment.ej2Instances.value;\n    },\n    changeShape:function(args){\n            this.$refs.circulargauge.ej2Instances.legendSettings.shape = this.$refs.legendShape.ej2Instances.value;\n    },\n    changeEnableLegend:function(e){\n        this.$refs.circulargauge.ej2Instances.legendSettings.visible = e.checked;\n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    changeEnableToggle:function(e){\n        this.$refs.circulargauge.ej2Instances.legendSettings.toggleVisibility = e.checked;\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/legend/App.vue?vue&type=template&id=c7d4a702&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/legend/App.vue?vue&type=template&id=c7d4a702&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                load: _vm.load,\n                align: \"center\",\n                id: \"legend-container\",\n                legendSettings: _vm.legendSettings,\n                title: _vm.title\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        startAngle: _vm.startAngle,\n                        endAngle: _vm.endAngle,\n                        lineStyle: _vm.lineStyle,\n                        labelStyle: _vm.labelStyle,\n                        ranges: _vm.ranges,\n                        majorTicks: _vm.majorTicks,\n                        minorTicks: _vm.minorTicks,\n                        radius: _vm.radius,\n                        minimum: \"0\",\n                        maximum: \"120\"\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              radius: _vm.radius,\n                              color: _vm.color,\n                              pointerWidth: _vm.pointerWidth,\n                              animation: _vm.animation\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"padding-top\": \"0px\" } },\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"enable\",\n                      attrs: {\n                        id: \"enable\",\n                        change: _vm.changeEnableLegend,\n                        checked: \"true\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"padding-top\": \"0px\" } },\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"enabletoggle\",\n                      attrs: {\n                        id: \"enabletoggle\",\n                        change: _vm.changeEnableToggle,\n                        checked: \"true\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"legendPos\",\n                      attrs: {\n                        id: \"position\",\n                        dataSource: _vm.positiondata,\n                        index: \"0\",\n                        width: _vm.positionwidth,\n                        change: _vm.changePosition\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"legendAlignment\",\n                      attrs: {\n                        id: \"alignment\",\n                        dataSource: _vm.alignmentdata,\n                        index: \"0\",\n                        width: _vm.alignmentwidth,\n                        change: _vm.changeAlignment\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n               \"),\n            _c(\"tr\", [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"legendShape\",\n                      attrs: {\n                        id: \"shape\",\n                        dataSource: _vm.shapedata,\n                        fields: _vm.shapefields,\n                        index: \"0\",\n                        width: _vm.shapewidth,\n                        change: _vm.changeShape\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\")\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(5),\n    _vm._v(\" \"),\n    _vm._m(6)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Show legend \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", [_vm._v(\" Show range when the legend item is toggled \")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Position \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Alignment \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Shape \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes moving air types in the legend based on their speed. The visibility, shape, alignment and position of the legend can be changed using the properties panel options.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n\\t\\tIn this example, you can see how to render a legend in circular gauge. A legend item denotes the axis ranges. Any number of legend items can be added to a legend. You can bind the desired colors  and Legend text to the corresponding ranges. \\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The circular gauge component features are segregated into individual modules by feature. To use a legend, inject the Legend module using the \"\n        ),\n        _c(\"code\", [_vm._v(\"CircularGauge.Inject(Legend)\")]),\n        _vm._v(\"  method.\\n        \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the labels can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/legend/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });