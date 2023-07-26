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
/******/ 		"circular-gauge/data-sample/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/data-sample/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/data-sample/App.vue":
/*!****************************************************!*\
  !*** ./Samples/circular-gauge/data-sample/App.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_045e2462_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=045e2462&scoped=true& */ \"./Samples/circular-gauge/data-sample/App.vue?vue&type=template&id=045e2462&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/data-sample/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css& */ \"./Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_045e2462_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_045e2462_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"045e2462\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/data-sample/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/data-sample/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./Samples/circular-gauge/data-sample/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/data-sample/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_045e2462_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/data-sample/App.vue?vue&type=template&id=045e2462&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./Samples/circular-gauge/data-sample/App.vue?vue&type=template&id=045e2462&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_045e2462_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=045e2462&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/data-sample/App.vue?vue&type=template&id=045e2462&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_045e2462_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_045e2462_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/data-sample/main.js":
/*!****************************************************!*\
  !*** ./Samples/circular-gauge/data-sample/main.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/data-sample/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#templateWrap img[data-v-045e2462] {\\n    width: 16px;\\n    height: 16px;\\n    margin-top: 4px;\\n}\\n#templateWrap .des[data-v-045e2462] {\\n    float: right;\\n    padding-left: 5px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/data-sample/App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=045e2462&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#templateWrap img[data-v-045e2462] {\\n    width: 16px;\\n    height: 16px;\\n    margin-top: 4px;\\n}\\n#templateWrap .des[data-v-045e2462] {\\n    float: right;\\n    padding-left: 5px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/data-sample/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/data-sample/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_2__[\"GridPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: () => {\n        let value1 = Math.round(Math.random() * (90 - 55) + 55);\n        let value2 = Math.round(Math.random() * (75 - 60) + 60);\n        let value3 = Math.round(Math.random() * (40 - 10) + 10);\n        let gridData1 = 4 * value1;\n        let gridData2 = 6 * value2;\n        let gridData3 = 7 * value3;\n        let orderData = [{\n            'Country': 'Germany',\n            'Sales': 500,\n            'Target': 400,\n            'vsTarget': gridData1\n        }, {\n            'Country': 'USA',\n            'Sales': 1000,\n            'Target': 600,\n            'vsTarget': gridData2\n        }, {\n            'Country': 'UK',\n            'Sales': 600,\n            'Target': 700,\n            'vsTarget': -gridData3\n        }];\n        return {\n            gauge1annotations: [{\n                content: \"<div id='templateWrap'><img src='./../../source/circular-gauge/images/positive.png' alt='Positive value for Germany' /><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>\",\n                angle: 180,\n                zIndex: '1',\n                radius: '30%'\n            }, {\n                content: '<div style=\"color:#9E9E9E;font-size:16px;font-family:Roboto\">Germany</div>',\n                angle: 180,\n                zIndex: '1',\n                radius: '65%'\n            }],\n            gauge1startAngle: 230,\n            gauge1endAngle: 130,\n            gauge1majorTicks: {\n                width: 0\n            },\n            gauge1lineStyle: {\n                width: 0\n            },\n            gauge1minorTicks: {\n                width: 0\n            },\n            gauge1labelStyle: {\n                font: {\n                    size: '0'\n                }\n            },\n            gauge1ranges: [{\n                start: 0,\n                end: 50,\n                startWidth: 15,\n                endWidth: 15,\n                color: '#EC121C'\n            }, {\n                start: 50,\n                end: 100,\n                startWidth: 15,\n                endWidth: 15,\n                color: '#45EA0C'\n            }],\n            value1: 75,\n            pointerRadius1: '60%',\n            animation1: {\n                enable: false\n            },\n            color1: '#777777',\n            pointerWidth1: 5,\n            cap1: {\n                radius: 6,\n                border: {\n                    width: 0\n                },\n                color: '#777777'\n            },\n            needleTail1: {\n                length: '25%',\n                color: '#777777'\n            },\n            gauge2annotations: [{\n                content: \"<div id='templateWrap'><img src='./../../source/circular-gauge/images/positive.png' alt='Positive value for USA' /><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>\",\n                angle: 180,\n                zIndex: '1',\n                radius: '30%'\n            }, {\n                content: '<div style=\"color:#9E9E9E;font-size:16px;font-family:Roboto\">USA</div>',\n                angle: 180,\n                zIndex: '1',\n                radius: '65%'\n            }],\n            gauge2startAngle: 230,\n            gauge2endAngle: 130,\n            gauge2majorTicks: {\n                width: 0\n            },\n            gauge2lineStyle: {\n                width: 0\n            },\n            gauge2minorTicks: {\n                width: 0\n            },\n            gauge2labelStyle: {\n                font: {\n                    size: '0'\n                }\n            },\n            gauge2ranges: [{\n                start: 0,\n                end: 50,\n                startWidth: 15,\n                endWidth: 15,\n                color: '#EC121C'\n            }, {\n                start: 50,\n                end: 100,\n                startWidth: 15,\n                endWidth: 15,\n                color: '#45EA0C'\n            }],\n            value2: 60,\n            pointerRadius2: '60%',\n            animation2: {\n                enable: false\n            },\n            color2: '#777777',\n            pointerWidth2: 5,\n            cap2: {\n                radius: 6,\n                border: {\n                    width: 0\n                },\n                color: '#777777'\n            },\n            needleTail2: {\n                length: '25%',\n                color: '#777777'\n            },\n            gauge3annotations: [{\n                content: \"<div id='templateWrap'><img src='./../../source/circular-gauge/images/negative.png' alt='Negative value for UK' /><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>\",\n                angle: 180,\n                zIndex: '1',\n                radius: '30%'\n            }, {\n                content: '<div style=\"color:#9E9E9E;font-size:16px;font-family:Roboto\">UK</div>',\n                angle: 180,\n                zIndex: '1',\n                radius: '65%'\n            }],\n            gauge3startAngle: 230,\n            gauge3endAngle: 130,\n            gauge3majorTicks: {\n                width: 0\n            },\n            gauge3lineStyle: {\n                width: 0\n            },\n            gauge3minorTicks: {\n                width: 0\n            },\n            gauge3labelStyle: {\n                font: {\n                    size: '0'\n                }\n            },\n            gauge3ranges: [{\n                start: 0,\n                end: 50,\n                startWidth: 15,\n                endWidth: 15,\n                color: '#EC121C'\n            }, {\n                start: 50,\n                end: 100,\n                startWidth: 15,\n                endWidth: 15,\n                color: '#45EA0C'\n            }],\n            value3: 25,\n            pointerRadius3: '60%',\n            animation3: {\n                enable: false\n            },\n            color3: '#777777',\n            pointerWidth3: 5,\n            cap3: {\n                radius: 6,\n                border: {\n                    width: 0\n                },\n                color: '#777777'\n            },\n            needleTail3: {\n                length: '25%',\n                color: '#777777'\n            },\n            data: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"DataManager\"](orderData).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"Query\"]().take(15))\n        }\n    },\n    provide: {\n        circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n    },\n    methods: {\n        /* custom code start */\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.gauge.theme =\n                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        },\n        /* custom code end */\n        toolTipInterval1: function () {\n            setInterval(function () {\n                let germany = document.getElementById('gauge1');\n                let usa = document.getElementById('gauge2');\n                let uk = document.getElementById('gauge3');\n                let grid = document.getElementById('grid');\n                if (grid) {\n                    let value1 = Math.round(Math.random() * (90 - 55) + 55);\n                    let value2 = Math.round(Math.random() * (75 - 60) + 60);\n                    let value3 = Math.round(Math.random() * (40 - 10) + 10);\n                    let gridData1 = 4 * value1;\n                    let gridData2 = 6 * value2;\n                    let gridData3 = 7 * value3;\n                    let orderData = [{\n                        'Country': 'Germany',\n                        'Sales': 500,\n                        'Target': 400,\n                        'vsTarget': gridData1\n                    }, {\n                        'Country': 'USA',\n                        'Sales': 1000,\n                        'Target': 600,\n                        'vsTarget': gridData2\n                    }, {\n                        'Country': 'UK',\n                        'Sales': 600,\n                        'Target': 700,\n                        'vsTarget': -gridData3\n                    }];\n                    let data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"DataManager\"](orderData).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"Query\"]().take(3));\n\n                    grid.ej2_instances[0].dataSource = data;\n                    grid.ej2_instances[0].refresh();\n\n                    germany.ej2_instances[0].axes[0].pointers[0].animation.enable = true;\n                    usa.ej2_instances[0].axes[0].pointers[0].animation.enable = true;\n                    uk.ej2_instances[0].axes[0].pointers[0].animation.enable = true;\n                    germany.ej2_instances[0].setPointerValue(0, 0, value1);\n                    usa.ej2_instances[0].setPointerValue(0, 0, value2);\n                    uk.ej2_instances[0].setPointerValue(0, 0, value3);\n                    germany.ej2_instances[0].setAnnotationValue(0, 0, \"<div id='templateWrap'><img src='./../../source/circular-gauge/images/positive.png' alt='Positive value for Germany'/><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>\");\n                    usa.ej2_instances[0].setAnnotationValue(0, 0, \"<div id='templateWrap'><img src='./../../source/circular-gauge/images/positive.png' alt='Positive value for USA'/><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>\");\n                    uk.ej2_instances[0].setAnnotationValue(0, 0, \"<div id='templateWrap'><img src='./../../source/circular-gauge/images/negative.png' alt='Negative value for UK'/><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>\");\n\n\n                } else {\n                    clearInterval(this.toolTipInterval1);\n                }\n            }, 2000)\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/data-sample/App.vue?vue&type=template&id=045e2462&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/data-sample/App.vue?vue&type=template&id=045e2462&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-sm-12\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"block:height:250px\" },\n                    attrs: { load: _vm.load, align: \"center\", id: \"gauge1\" }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              startAngle: _vm.gauge1startAngle,\n                              endAngle: _vm.gauge1endAngle,\n                              majorTicks: _vm.gauge1majorTicks,\n                              lineStyle: _vm.gauge1lineStyle,\n                              minorTicks: _vm.gauge1minorTicks,\n                              labelStyle: _vm.gauge1labelStyle,\n                              annotations: _vm.gauge1annotations,\n                              ranges: _vm.gauge1ranges\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value1,\n                                    radius: _vm.pointerRadius1,\n                                    color: _vm.color1,\n                                    pointerWidth: _vm.pointerWidth1,\n                                    cap: _vm.cap1,\n                                    needleTail: _vm.needleTail1,\n                                    animation: _vm.animation1\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"blaaock:height:250px\" },\n                    attrs: { load: _vm.load, align: \"center\", id: \"gauge2\" }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              startAngle: _vm.gauge2startAngle,\n                              endAngle: _vm.gauge2endAngle,\n                              majorTicks: _vm.gauge2majorTicks,\n                              lineStyle: _vm.gauge2lineStyle,\n                              minorTicks: _vm.gauge2minorTicks,\n                              labelStyle: _vm.gauge2labelStyle,\n                              annotations: _vm.gauge2annotations,\n                              ranges: _vm.gauge2ranges\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value2,\n                                    radius: _vm.pointerRadius2,\n                                    color: _vm.color2,\n                                    pointerWidth: _vm.pointerWidth2,\n                                    cap: _vm.cap2,\n                                    needleTail: _vm.needleTail2,\n                                    animation: _vm.animation2\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"block:height:250px\" },\n                    attrs: { load: _vm.load, align: \"center\", id: \"gauge3\" }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              startAngle: _vm.gauge3startAngle,\n                              endAngle: _vm.gauge3endAngle,\n                              majorTicks: _vm.gauge3majorTicks,\n                              lineStyle: _vm.gauge3lineStyle,\n                              minorTicks: _vm.gauge3minorTicks,\n                              labelStyle: _vm.gauge3labelStyle,\n                              annotations: _vm.gauge3annotations,\n                              ranges: _vm.gauge3ranges\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value3,\n                                    radius: _vm.pointerRadius3,\n                                    color: _vm.color3,\n                                    pointerWidth: _vm.pointerWidth3,\n                                    cap: _vm.cap3,\n                                    needleTail: _vm.needleTail3,\n                                    animation: _vm.animation3\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-sm-12\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-12\" },\n              [\n                _c(\n                  \"ejs-grid\",\n                  {\n                    attrs: {\n                      id: \"grid\",\n                      dataSource: _vm.data,\n                      load: _vm.toolTipInterval1\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-columns\",\n                      [\n                        _c(\"e-column\", {\n                          attrs: {\n                            field: \"Country\",\n                            headerText: \"Country\",\n                            width: \"80\"\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", {\n                          attrs: {\n                            field: \"Sales\",\n                            headerText: \"Sales $\",\n                            width: \"80\"\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", {\n                          attrs: {\n                            field: \"Target\",\n                            headerText: \"Target $\",\n                            width: \"80\"\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", {\n                          attrs: {\n                            field: \"vsTarget\",\n                            headerText: \"vs Target\",\n                            width: \"80\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates the live data sample in circular gauge.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Pointer values in the gauge can be updated dynamically by using \"\n        ),\n        _c(\"code\", [_vm._v(\"setPointerValue\")]),\n        _vm._v(\n          \" method. In this example, a stock price changes over the countries, are showed by using a gauge.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            More information on the gauge and its methods can be found in can be found in this\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\" documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/data-sample/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });