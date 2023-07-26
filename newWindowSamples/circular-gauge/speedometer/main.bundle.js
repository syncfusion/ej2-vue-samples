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
/******/ 		"circular-gauge/speedometer/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/speedometer/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/speedometer/App.vue":
/*!****************************************************!*\
  !*** ./Samples/circular-gauge/speedometer/App.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3ffa8423_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3ffa8423&scoped=true& */ \"./Samples/circular-gauge/speedometer/App.vue?vue&type=template&id=3ffa8423&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/speedometer/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css& */ \"./Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3ffa8423_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3ffa8423_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3ffa8423\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/speedometer/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/speedometer/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./Samples/circular-gauge/speedometer/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/speedometer/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ffa8423_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/speedometer/App.vue?vue&type=template&id=3ffa8423&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./Samples/circular-gauge/speedometer/App.vue?vue&type=template&id=3ffa8423&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ffa8423_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3ffa8423&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/speedometer/App.vue?vue&type=template&id=3ffa8423&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ffa8423_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ffa8423_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/speedometer/main.js":
/*!****************************************************!*\
  !*** ./Samples/circular-gauge/speedometer/main.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/speedometer/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-3ffa8423] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/speedometer/App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=3ffa8423&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-3ffa8423] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/speedometer/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/speedometer/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\n\nlet templateString = '<div id=\"templateWrap\"><div class=\"des\">'+\n                '<div id=\"pointerannotation\" style=\"width:90px;text-align:center;font-size:20px;font-family:Roboto\">${pointers[0].value} km/h</div></div></div>';\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n            minimum: 0,\n            maximum: 120,\n            value: 40,\n            radius: '120%',\n            pointerRadius: '80%',\n            lineStyle: { width: 0 },\n            majorTicks: { width: 0, },\n            minorTicks: { width: 0 },\n            pointerWidth: 7,\n            titleStyle: { size: '18px' },\n            labelStyle: { useRangeColor: false, position: 'Outside', autoAngle: true,\n            font: { size: '13px', fontFamily: 'Roboto' } },\n            startAngle: 270, \n            endAngle: 90,\n            color: '#757575',\n            title: 'Speedometer',\n            animation: { enable: true, duration: 900 },\n            cap: {\n                    radius: 8,\n                    color: '#757575',\n                    border: { width: 0 }\n                },\n            needleTail: {\n                    color: '#757575',\n                    length: '15%'\n            },\n\n            annotations: [\n                {\n                    content: templateString,\n                    angle: 0, zIndex: '1',\n                    radius: '30%'\n                }\n            ],\n            ranges: [\n                {\n                    start: 0,\n                    end: 20,\n                    startWidth: 5, endWidth: 10,\n                    radius: '102%',\n                    color: '#82b944',\n                },\n                {\n                    start: 20,\n                    end: 40,\n                    startWidth: 10, endWidth: 15,\n                    radius: '102%',\n                    color: '#a1cb43',\n                }, {\n                    start: 40,\n                    end: 60,\n                    startWidth: 15, endWidth: 20,\n                    radius: '102%',\n                    color: '#ddec12',\n                },\n                {\n                    start: 60,\n                    end: 80,\n                    startWidth: 20, endWidth: 25,\n                    radius: '102%',\n                    color: '#ffbc00',\n                },\n                {\n                    start: 80,\n                    end: 100,\n                    startWidth: 25, endWidth: 30,\n                    radius: '102%',\n                    color: '#ff6000',\n                },\n                {\n                    start: 100,\n                    end: 120,\n                    startWidth: 30, endWidth: 35,\n                    radius: '102%',\n                    color: 'red',\n                }\n            ]\n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmounted : function(){\n   this.setIntervalStart();       \n},\nbeforeDestroy () {\n       clearInterval(this.intervalid1)\n},\nmethods: {\n    /* custom code start */\n     load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.gauge.theme = \n           selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    setIntervalStart : function(){       \n        let gauge = this.$refs.circulargauge.ej2Instances;   \n            this.intervalid1 = setInterval(function(){   \n                let newVal = gauge.axes[0].pointers[0].value + (Math.floor(Math.random() * (10 - (-10))) - 10);\n            if (newVal <= 0) {\n                newVal = 5;\n            }\n            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(document.getElementById('gauge-container'))) {\n                gauge.axes[0].pointers[0].animation.enable = true;\n                gauge.setPointerValue(0, 0, newVal);\n                if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(document.getElementById('pointerannotation'))) {\n                    document.getElementById('pointerannotation').innerHTML = newVal.toString() + ' km/h';\n                }\n            } else {\n                clearInterval(this.pointerInterval1);\n            }\n            }, 1000);\n    },\n    onChangeRange: function(args) {\n        let circulargauge=this.$refs.circulargauge.ej2Instances;\n        if (args.checked) {\n            circulargauge.axes[0].rangeGap = 5;\n        } else {\n            circulargauge.axes[0].rangeGap = null;\n        }\n        circulargauge.axes[0].pointers[0].animation.enable = false;\n        circulargauge.refresh();\n    },\n    onChangeText: function(args) {\n      let circulargauge=this.$refs.circulargauge.ej2Instances;\n      if (args.checked === true) {\n            circulargauge.axes[0].majorTicks.interval = 10;\n            circulargauge.axisLabelRender = function(args) {\n                let text;\n                switch (parseInt(args.text)) {\n                    case 10:\n                        text = 'Ideal';\n                        break;\n                    case 30:\n                        text = 'Safe';\n                        break;\n                    case 50:\n                        text = 'Good';\n                        break;\n                    case 70:\n                        text = 'Ok';\n                        break;\n                    case 90:\n                        text = 'Risk';\n                        break;\n                    case 110:\n                        text = 'Danger';\n                        break;\n\n                    default:\n                        text = '';\n                        break;\n                }\n                args.text = text;\n            };\n            circulargauge.axes[0].pointers[0].animation.enable = false;\n            circulargauge.refresh();\n        } else {\n            circulargauge.axes[0].majorTicks.interval = 20;\n            circulargauge.axes[0].minimum = 0;\n            circulargauge.axes[0].maximum = 120;\n            circulargauge.axisLabelRender = function(args) {};\n            circulargauge.axes[0].pointers[0].animation.enable = false;\n            circulargauge.refresh();\n        }\n    },\n    onChangeCombineRange: function(args) {\n        let circulargauge = this.$refs.circulargauge.ej2Instances;\n        let rangeCheckbox = this.$refs.gap.ej2Instances;\n        if (args.checked === true) {\n            rangeCheckbox.disabled = true;\n            circulargauge.axes[0].ranges[0].start = 0;\n            circulargauge.axes[0].ranges[0].end = 120;\n            circulargauge.axes[0].ranges[0].startWidth = 5;\n            circulargauge.axes[0].ranges[0].endWidth = 35;\n            circulargauge.axes[0].ranges[0].color = 'url(#grad1)';\n            circulargauge.axes[0].ranges[1].start = null;\n            circulargauge.axes[0].ranges[1].end = null;\n            circulargauge.axes[0].ranges[1].startWidth = '';\n            circulargauge.axes[0].ranges[1].endWidth = '';\n            circulargauge.axes[0].ranges[1].color = '';\n            circulargauge.axes[0].ranges[2].start = null;\n            circulargauge.axes[0].ranges[2].end = null;\n            circulargauge.axes[0].ranges[2].startWidth = '';\n            circulargauge.axes[0].ranges[2].endWidth = '';\n            circulargauge.axes[0].ranges[2].color = '';\n            circulargauge.axes[0].ranges[3].start = null;\n            circulargauge.axes[0].ranges[3].end = null;\n            circulargauge.axes[0].ranges[3].startWidth = '';\n            circulargauge.axes[0].ranges[3].endWidth = '';\n            circulargauge.axes[0].ranges[3].color = '';\n            circulargauge.axes[0].ranges[4].start = null;\n            circulargauge.axes[0].ranges[4].end = null;\n            circulargauge.axes[0].ranges[4].startWidth = '';\n            circulargauge.axes[0].ranges[4].endWidth = '';\n            circulargauge.axes[0].ranges[4].color = '';\n            circulargauge.axes[0].ranges[5].start = null;\n            circulargauge.axes[0].ranges[5].end = null;\n            circulargauge.axes[0].ranges[5].startWidth = '';\n            circulargauge.axes[0].ranges[5].endWidth = '';\n            circulargauge.axes[0].ranges[5].color = '';\n            circulargauge.axes[0].pointers[0].animation.enable = false;\n            circulargauge.refresh();\n        } else {\n            rangeCheckbox.disabled = false;\n            circulargauge.axes[0].ranges[0].start = 0;\n            circulargauge.axes[0].ranges[0].end = 20;\n            circulargauge.axes[0].ranges[0].startWidth = 5;\n            circulargauge.axes[0].ranges[0].endWidth = 10;\n            circulargauge.axes[0].ranges[0].color = '#82b944';\n            circulargauge.axes[0].ranges[1].start = 20;\n            circulargauge.axes[0].ranges[1].end = 40;\n            circulargauge.axes[0].ranges[1].startWidth = 10;\n            circulargauge.axes[0].ranges[1].endWidth = 15;\n            circulargauge.axes[0].ranges[1].color = '#a1cb43';\n            circulargauge.axes[0].ranges[2].start = 40;\n            circulargauge.axes[0].ranges[2].end = 60;\n            circulargauge.axes[0].ranges[2].startWidth = 15;\n            circulargauge.axes[0].ranges[2].endWidth = 20;\n            circulargauge.axes[0].ranges[2].color = '#ddec12';\n            circulargauge.axes[0].ranges[3].start = 60;\n            circulargauge.axes[0].ranges[3].end = 80;\n            circulargauge.axes[0].ranges[3].startWidth = 20;\n            circulargauge.axes[0].ranges[3].endWidth = 25;\n            circulargauge.axes[0].ranges[3].color = '#ffbc00';\n            circulargauge.axes[0].ranges[4].start = 80;\n            circulargauge.axes[0].ranges[4].end = 100;\n            circulargauge.axes[0].ranges[4].startWidth = 25;\n            circulargauge.axes[0].ranges[4].endWidth = 30;\n            circulargauge.axes[0].ranges[4].color = '#ff6000';\n            circulargauge.axes[0].ranges[5].start = 100;\n            circulargauge.axes[0].ranges[5].end = 120;\n            circulargauge.axes[0].ranges[5].startWidth = 30;\n            circulargauge.axes[0].ranges[5].endWidth = 35;\n            circulargauge.axes[0].ranges[5].color = 'red';\n            circulargauge.axes[0].pointers[0].animation.enable = false;\n            circulargauge.refresh();\n        }\n        rangeCheckbox.dataBind();\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/speedometer/App.vue?vue&type=template&id=3ffa8423&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/speedometer/App.vue?vue&type=template&id=3ffa8423&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                align: \"center\",\n                id: \"gauge-container\",\n                title: _vm.title,\n                centerY: \"75%\",\n                titleStyle: _vm.titleStyle,\n                load: _vm.load\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        startAngle: _vm.startAngle,\n                        endAngle: _vm.endAngle,\n                        lineStyle: _vm.lineStyle,\n                        labelStyle: _vm.labelStyle,\n                        majorTicks: _vm.majorTicks,\n                        minorTicks: _vm.minorTicks,\n                        radius: _vm.radius,\n                        minimum: \"0\",\n                        maximum: \"120\",\n                        annotations: _vm.annotations,\n                        ranges: _vm.ranges\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              radius: _vm.pointerRadius,\n                              color: _vm.color,\n                              pointerWidth: _vm.pointerWidth,\n                              animation: _vm.animation,\n                              cap: _vm.cap,\n                              needleTail: _vm.needleTail\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\", margin: \"10px\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"text\",\n                      attrs: { id: \"showText\", change: _vm.onChangeText }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                        \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"range\",\n                      attrs: {\n                        id: \"combineRange\",\n                        change: _vm.onChangeCombineRange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                        \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"gap\",\n                      attrs: { id: \"range\", change: _vm.onChangeRange }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\")\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _c(\"svg\", { staticStyle: { height: \"0px\", width: \"0px\" } }, [\n      _c(\n        \"defs\",\n        [\n          _c(\n            \"linearGradient\",\n            {\n              attrs: { id: \"grad1\", x1: \"0%\", y1: \"0%\", x2: \"100%\", y2: \"0%\" }\n            },\n            [\n              _c(\"stop\", {\n                staticStyle: { \"stop-color\": \"#82b944\", \"stop-opacity\": \"1\" },\n                attrs: { offset: \"0%\" }\n              }),\n              _vm._v(\" \"),\n              _c(\"stop\", {\n                staticStyle: {\n                  \"stop-color\": \"rgb(255,255,0)\",\n                  \"stop-opacity\": \"1\"\n                },\n                attrs: { offset: \"50%\" }\n              }),\n              _vm._v(\" \"),\n              _c(\"stop\", {\n                staticStyle: { \"stop-color\": \"red\", \"stop-opacity\": \"1\" },\n                attrs: { offset: \"100%\" }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [_vm._v(\" Show text labels\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [_vm._v(\" Combine ranges\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [\n        _vm._v(\" Gap between ranges\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample depicts the appearance of speedometer rendered using the circular gauge. The pointer is changed with random values dynamically.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to make the look of circular gauge like a speedometer. The labels can be changed to text values, gap can be added between the ranges, or the ranges can be combined to form single range using the options in the properties panel.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        For more information on ranges, refer to this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation\")]\n        ),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/speedometer/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });