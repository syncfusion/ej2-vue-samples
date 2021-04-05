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
/******/ 		"circular-gauge/customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/customization/App.vue":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/customization/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7f90ec75_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7f90ec75&scoped=true& */ \"./Samples/circular-gauge/customization/App.vue?vue&type=template&id=7f90ec75&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css& */ \"./Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7f90ec75_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7f90ec75_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7f90ec75\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/customization/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/circular-gauge/customization/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f90ec75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/customization/App.vue?vue&type=template&id=7f90ec75&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./Samples/circular-gauge/customization/App.vue?vue&type=template&id=7f90ec75&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7f90ec75_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7f90ec75&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/customization/App.vue?vue&type=template&id=7f90ec75&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7f90ec75_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7f90ec75_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/customization/main.js":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/customization/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-7f90ec75] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/customization/App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=7f90ec75&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-7f90ec75] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/customization/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/customization/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nlet isUsage = false;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n            centerY: '70%',\n            annotations: [{\n                content: '<div style=\"color:#666666;font-size:35px;\">1800</div>',\n                angle: 0,\n                zIndex: '1',\n                radius: '110%'\n            }],\n            lineStyle: { width: 0 },\n            radius: '80%',\n            labelStyle: { font: { size: '0px' } },\n            majorTicks: { width: 0 },\n            minorTicks: { height: 0 },\n            ranges: [{\n                start: 1000, end: 2000,\n                radius: '90%',\n                startWidth: 30, endWidth: 30,\n                color: '#E0E0E0'\n            }],\n            pointers: [{\n                type: 'RangeBar',\n                value: 1800, radius: '90%',\n                color: '#FFDD00', animation: { duration: 0 },\n                pointerWidth: 30\n            }, {\n                radius: '90%', value: 1800,\n                color: '#424242',\n                animation: { duration: 0 },\n                pointerWidth: 9,\n                cap: { radius: 10, color: '#424242', border: { width: 0 } }\n            }],\n            annotations2: [{\n                content: '<div style=\"color:#666666;font-size:35px;\">50.5GB</div>',\n                angle: 180, radius: '0%', zIndex: '1',\n            }, {\n                content: '<div style=\"color:#757575;font-size:15px;\">Used</div>',\n                angle: 180, radius: '25%', zIndex: '1',\n                textStyle: {\n                    fontFamily: 'Roboto',\n                    color: '#9E9E9E',\n                    fontStyle: 'Bold',\n                    fontWeight: 'Regular',\n                    size: '14px'\n                }\n            }],\n            lineStyle2: { width: 0 },\n            radius2: '80%',\n            labelStyle2: { font: { size: '0px' } },\n            majorTicks2: { width: 0 },\n            minorTicks2: { height: 0 },\n            ranges2: [{\n                start: 0, end: 100,\n                radius: '80%', startWidth: 30,\n                endWidth: 30, color: '#E0E0E0'\n            }],\n            pointers2: [{\n                type: 'RangeBar',\n                value: 50.5, radius: '80%',\n                color: '#FF2680', animation: { duration: 0 },\n                pointerWidth: 30\n            }],\n            barColordata:['#FFDD00','#00bdae','#FF2680'],\n            rangeColordata:['#E0E0E0','#7bb4eb','#ea7a57'],\n            pointerColordata:['#424242','#6f6fe2','#9e480e']\n}\n},\nprovide:{\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmounted:function(){\n    let selectedTheme = location.hash.split('/')[1]; \n    let color;\n    if (selectedTheme === 'bootstrap') {\n        color = '#a16ee5';\n    } else if (selectedTheme === 'fabric') {\n        color = '#1783FF';\n    } else {\n        color = '#ff4081';\n    }\n    let exisLine = document.getElementById('usage_line');\n    let currentLine = document.getElementById('random_line');\n    exisLine.style.background = color; \n    currentLine.style.background = color;\n},\nmethods:{\n    /* custom code start */\n     load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    usageClick:function(){\n        let random = this.$refs.customizationgauge1;\n        document.getElementById('customizationgauge1').style.display=\"none\";\n        let usage = this.$refs.customizationgauge2;\n        let container2 = document.getElementById('customizationgauge2').style.display=\"block\";\n        let gauge = usage; \n        let isUsage = true;\n        let element = document.getElementById('currentValue');\n        element.min = '0.5'; element.max = '100';\n        element.value = usage.ej2Instances.axes[0].pointers[0].value.toString();\n        document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;'\n            + usage.ej2Instances.axes[0].pointers[0].value + '</span>';\n        barColor.value = usage.ej2Instances.axes[0].pointers[0].color; rangeColor.value = usage.ej2Instances.axes[0].ranges[0].color;\n        // let pointerColor = document.getElementById('pointerColor');\n        this.$refs.pointer.enabled = false;\n        let pointElement = document.getElementById('pointColor');\n        pointElement.className = 'e-disabled';\n        let currentElement = document.getElementById('usage');\n        let existElement = document.getElementById('random');\n        let currentLine = document.getElementById('usage_line');\n        let exisLine = document.getElementById('random_line');\n        currentLine.style.display = 'block';\n        exisLine.style.display = 'none';\n    },\n     randomClick:function(){\n        let usage = this.$refs.customizationgauge2;\n        document.getElementById('customizationgauge2').style.display=\"none\";\n        let random = this.$refs.customizationgauge1;\n        let container1 = document.getElementById('customizationgauge1').style.display=\"block\";\n        let gauge = random; \n        let isUsage = false;\n        let currentElement = document.getElementById('random');\n        let existElement = document.getElementById('usage');\n        let exisLine = document.getElementById('usage_line');\n        let currentLine = document.getElementById('random_line');\n        currentLine.style.display = 'block'; exisLine.style.display = 'none';\n        let element = document.getElementById('currentValue');\n        let pointElement = document.getElementById('pointColor');\n        pointElement.className = 'e-enabled'; \n        // let pointerColor = document.getElementById('pointerColor');\n        this.$refs.pointer.enabled = true;\n        element.min = '1000'; element.max = '2000';\n        element.value = random.ej2Instances.axes[0].pointers[0].value.toString();\n        document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' +\n            random.ej2Instances.axes[0].pointers[0].value + '</span>';\n        barColor.value = random.ej2Instances.axes[0].pointers[0].color;\n        rangeColor.value = random.ej2Instances.axes[0].ranges[0].color;\n        pointerColor.value = random.ej2Instances.axes[0].pointers[1].color;\n    },\n    changeCurrentval:function(){\n         if(document.getElementById('customizationgauge1').style.display==\"block\"){\n        //    let gauge = document.getElementById('customizationgauge1');\n              let value =  document.getElementById('currentValue').value;\n            if (isUsage) {\n                this.$refs.customizationgauge1.ej2Instances.setPointerValue(0, 0, value);\n            } else {\n                this.$refs.customizationgauge1.ej2Instances.setPointerValue(0, 0, value);\n                this.$refs.customizationgauge1.ej2Instances.setPointerValue(0, 1, value);\n            }\n            this.$refs.customizationgauge1.ej2Instances.setAnnotationValue(0, 0, '<div style=\"color:#666666;font-size:35px;\">' + value + (isUsage ? 'GB' : '') + '</div>');\n            document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' + value + '</span>';\n         }         \n         else{\n            //  let gauge = document.getElementById('customizationgauge2');\n            let isUsage = true;\n              let value = document.getElementById('currentValue').value;\n            if (isUsage) {\n                this.$refs.customizationgauge2.ej2Instances.setPointerValue(0, 0, value);\n            } else {\n                this.$refs.customizationgauge2.ej2Instances.setPointerValue(0, 0, value);\n                this.$refs.customizationgauge2.ej2Instances.setPointerValue(0, 1, value);\n            }\n            this.$refs.customizationgauge2.ej2Instances.setAnnotationValue(0, 0, '<div style=\"color:#666666;font-size:35px;\">' + value + (isUsage ? 'GB' : '') + '</div>');\n            document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' + value + '</span>';\n         }\n         \n    },\n    changeBarcolor:function(args){\n           if(document.getElementById('customizationgauge1').style.display==\"block\"){\n            // let gauge = document.getElementById('customizationgauge1');          \n            this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[0].color = barColor.value.toString();\n            this.$refs.customizationgauge1.ej2Instances.refresh();\n           }\n           else{\n        //    let gauge = document.getElementById('customizationgauge2');            \n            this.$refs.customizationgauge2.ej2Instances.axes[0].pointers[0].color = barColor.value.toString();\n            this.$refs.customizationgauge2.ej2Instances.refresh();\n           }\n    },\n    changeRangecolor:function(args){\n        if(document.getElementById('customizationgauge1').style.display==\"block\"){\n        // let gauge = document.getElementById('customizationgauge1');  \n        this.$refs.customizationgauge1.ej2Instances.axes[0].ranges[0].color = rangeColor.value.toString();\n        this.$refs.customizationgauge1.ej2Instances.refresh();\n        }else{\n        // let gauge = document.getElementById('customizationgauge2');   \n        this.$refs.customizationgauge2.ej2Instances.axes[0].ranges[0].color = rangeColor.value.toString();\n        this.$refs.customizationgauge2.ej2Instances.refresh();\n        }\n    },\n    changePointercolor:function(args){\n        if(document.getElementById('customizationgauge1').style.display==\"block\"){\n        // let gauge = document.getElementById('customizationgauge1');    \n         let color = pointerColor.value.toString();\n            if (!isUsage) {\n                this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[1].color = color;\n                this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[1].cap.border.color = color;\n                this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[1].cap.color = color;\n            }\n            this.$refs.customizationgauge1.ej2Instances.refresh();\n        }\n   }   \n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/customization/App.vue?vue&type=template&id=7f90ec75&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/customization/App.vue?vue&type=template&id=7f90ec75&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"customizationgauge1\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                id: \"customizationgauge1\",\n                load: _vm.load,\n                centerY: _vm.centerY\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\"e-axis\", {\n                    attrs: {\n                      ranges: _vm.ranges,\n                      radius: _vm.radius,\n                      startAngle: \"300\",\n                      endAngle: \"60\",\n                      annotations: _vm.annotations,\n                      majorTicks: _vm.majorTicks,\n                      minorTicks: _vm.minorTicks,\n                      lineStyle: _vm.lineStyle,\n                      labelStyle: _vm.labelStyle,\n                      minimum: \"999\",\n                      maximum: \"2000\",\n                      pointers: _vm.pointers\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"customizationgauge2\",\n              staticStyle: { display: \"none\" },\n              attrs: { id: \"customizationgauge2\", load: _vm.load }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\"e-axis\", {\n                    attrs: {\n                      ranges: _vm.ranges2,\n                      radius: _vm.radius2,\n                      startAngle: \"180\",\n                      endAngle: \"180\",\n                      annotations: _vm.annotations2,\n                      majorTicks: _vm.majorTicks2,\n                      minorTicks: _vm.minorTicks2,\n                      lineStyle: _vm.lineStyle2,\n                      labelStyle: _vm.labelStyle2,\n                      minimum: \"0\",\n                      maximum: \"100\",\n                      pointers: _vm.pointers2\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _c(\"td\", [\n              _c(\"img\", {\n                staticStyle: { \"margin-left\": \"25px\", \"margin-top\": \"10px\" },\n                attrs: {\n                  id: \"random\",\n                  src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../source/circular-gauge/images/gauge-one.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                  alt: \"Customized gauge 1\"\n                },\n                on: { click: _vm.randomClick }\n              }),\n              _vm._v(\" \"),\n              _c(\"div\", {\n                staticStyle: {\n                  display: \"block\",\n                  left: \"0px\",\n                  background: \"#ff4081\",\n                  \"padding-top\": \"0px\",\n                  height: \"2px !important\",\n                  width: \"85px\",\n                  margin: \"2px 2px 2px 17px\"\n                },\n                attrs: { id: \"random_line\" }\n              })\n            ]),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"img\", {\n                staticStyle: { \"margin-left\": \"25px\", \"margin-top\": \"10px\" },\n                attrs: {\n                  id: \"usage\",\n                  src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../source/circular-gauge/images/gauge-two.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                  alt: \"Customized gauge 2\"\n                },\n                on: { click: _vm.usageClick }\n              }),\n              _vm._v(\" \"),\n              _c(\"div\", {\n                staticStyle: {\n                  display: \"none\",\n                  left: \"0px\",\n                  background: \"#ff4081\",\n                  \"padding-top\": \"0px\",\n                  height: \"2px !important\",\n                  width: \"85px\",\n                  margin: \"2px 2px 2px 17px\"\n                },\n                attrs: { id: \"usage_line\" }\n              })\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", [\n                _c(\"input\", {\n                  ref: \"curVal\",\n                  attrs: {\n                    type: \"range\",\n                    id: \"currentValue\",\n                    min: \"1000\",\n                    max: \"2000\",\n                    value: \"1800\"\n                  },\n                  on: {\n                    pointermove: _vm.changeCurrentval,\n                    touchmove: _vm.changeCurrentval,\n                    change: _vm.changeCurrentval\n                  }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"rangeBar\",\n                    attrs: {\n                      id: \"barColor\",\n                      dataSource: _vm.barColordata,\n                      index: \"0\",\n                      width: 120,\n                      change: _vm.changeBarcolor\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(2),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"range\",\n                    attrs: {\n                      id: \"rangeColor\",\n                      dataSource: _vm.rangeColordata,\n                      index: \"0\",\n                      width: 120,\n                      change: _vm.changeRangecolor\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(3),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"pointer\",\n                    attrs: {\n                      id: \"pointerColor\",\n                      dataSource: _vm.pointerColordata,\n                      index: \"0\",\n                      width: 120,\n                      change: _vm.changePointercolor\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"currentPointerValue\" } }, [\n        _vm._v(\"Current Value \"),\n        _c(\"span\", [_vm._v(\"    1800\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangebarColor\" } }, [_vm._v(\"RangeBar Color\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"range\" } }, [_vm._v(\"Range Color\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"pointColor\" } }, [_vm._v(\"Pointer Color\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates how to customize the gauge with pointers. \\n        Options to change the color and type of the pointer are available in the property panel.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to customize the gauge elements such as \"\n        ),\n        _c(\"code\", [_vm._v(\"pointers\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"range\")]),\n        _vm._v(\n          \".\\n        Here a needle and range bar are added to show the current value and its appearance\\n        can be customized by using options in property panel.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the range and pointer customization can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\" documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });