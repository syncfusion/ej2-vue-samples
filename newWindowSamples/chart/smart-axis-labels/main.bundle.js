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
/******/ 		"chart/smart-axis-labels/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/smart-axis-labels/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/smart-axis-labels/App.vue":
/*!*************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_c363ec38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c363ec38&scoped=true& */ \"./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_c363ec38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_c363ec38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c363ec38\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/smart-axis-labels/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/smart-axis-labels/App.vue?");

/***/ }),

/***/ "./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/smart-axis-labels/App.vue?");

/***/ }),

/***/ "./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c363ec38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c363ec38&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c363ec38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c363ec38_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/smart-axis-labels/App.vue?");

/***/ }),

/***/ "./Samples/chart/smart-axis-labels/main.js":
/*!*************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/smart-axis-labels/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/smart-axis-labels/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n      seriesData: [\n        { x: 'South Korea', y: 39 }, { x: 'India', y: 61 },\n                { x: 'Pakistan', y: 20 }, { x: 'Germany', y: 65 },\n                { x: 'Australia', y: 16 }, { x: 'Italy', y: 29 },\n                { x: 'France', y: 45 }, { x: 'United Arab Emitrates', y: 10 },\n                { x: 'Russia', y: 41 }, { x: 'Mexico', y: 31 },\n                { x: 'Brazil', y: 76 }, { x: 'China', y: 51 }\n      ],\n\n      //Initializing Primary X Axis\n          primaryXAxis: {\n            valueType: 'Category',\n            interval: 1,\n            majorGridLines: { width: 0 },\n            labelIntersectAction: 'Hide',\n            edgeLabelPlacement: 'None',\n            labelPosition: 'Outside'\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n\n      //Initializing Primary Y Axis\n        primaryYAxis:\n            {\n                labelStyle: { size: '0px' },\n                majorTickLines: { width: 0 },\n                majorGridLines: { width: 0 },\n                lineStyle: { width: 0 },\n            },\n         actiondata : [ 'Hide', 'Trim', 'Wrap', 'MultipleRows', 'Rotate45', 'Rotate90', 'None'],\n         labeldata : [ 'None', 'Hide', 'Shift'],\n          positiondata : [ 'Outside', 'Inside'],\n         listwidth:120,\n      marker: {\n                    dataLabel: {\n                        visible: true,\n                        position: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'Outer' : 'Top',\n                        font: { fontWeight: '600', color: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '#404041' : '#ffffff' }\n                    }\n                },\n\n      tooltip: { enable: true },\n\n      legendSettings: {\n        visible: false\n      },\n\n      pointRender: function(args) {\n        let selectedTheme = location.hash.split(\"/\")[1];\n        selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n        if (selectedTheme && selectedTheme.indexOf(\"fabric\") > -1) {\n          args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        } else if (selectedTheme === \"material\") {\n          args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        } else if (selectedTheme === \"highcontrast\") {\n          args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        } else {\n          args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n      },\n      width: \"80%\",\n      title: \"Internet Users in Millions\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"DataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Tooltip\"]]\n  },\n   updated: function () {\n    this.$nextTick(function() {\n      this.$refs.chart.ej2Instances.dataBind();\n    });\n  },\n  \n  methods: {\n    actionChange: function(args) {\n     let axis = document.getElementById('actionId').value;\n        let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryXAxis);\n            primaryXAxis.labelIntersectAction = axis;\n            this.primaryXAxis = primaryXAxis;\n    },\n     labelChange: function(args) {\n       let label = document.getElementById('labelId').value;\n        let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryXAxis);\n            primaryXAxis.edgeLabelPlacement = label;\n            this.primaryXAxis = primaryXAxis; \n    },\n     positionChange: function(args) {\n      let position = document.getElementById('positionId').value;\n        let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryXAxis);\n            primaryXAxis.labelPosition = position;\n            this.primaryXAxis = primaryXAxis; \n    },\n     widthChange: function(e) {\n      let width = document.getElementById('labelWidth').value;\n      let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryXAxis);\n        primaryXAxis.maximumLabelWidth = width;\n        this.primaryXAxis = primaryXAxis;  \n    },\n     trimChange: function(args) {\n      let trim = document.getElementById(\"Trim\");\n      let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryXAxis);\n      primaryXAxis.enableTrim = trim.checked;\n      this.primaryXAxis = primaryXAxis;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/smart-axis-labels/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-8 control-section\"},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"theme\":_vm.theme,\"align\":\"center\",\"id\":\"chartcontainer\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"pointRender\":_vm.pointRender,\"legendSettings\":_vm.legendSettings,\"tooltip\":_vm.tooltip}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":\"Column\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Users\",\"width\":\"2\",\"marker\":_vm.marker}})],1)],1)],1),_vm._v(\" \"),_c('div',[_c('div',{staticClass:\"col-md-4 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('br'),_c('br'),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"actionId\",\"change\":_vm.actionChange,\"dataSource\":_vm.actiondata,\"index\":\"0\",\"width\":_vm.listwidth}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(1),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"labelId\",\"change\":_vm.labelChange,\"dataSource\":_vm.labeldata,\"index\":\"0\",\"width\":_vm.listwidth}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(2),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"positionId\",\"change\":_vm.positionChange,\"dataSource\":_vm.positiondata,\"index\":\"0\",\"width\":_vm.listwidth}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(3),_vm._v(\" \"),_c('td',[_c('div',[_c('input',{attrs:{\"type\":\"checkbox\",\"id\":\"Trim\",\"unchecked\":\"true\",\"width\":120},on:{\"change\":_vm.trimChange}})])])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(4),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-numerictextbox',{attrs:{\"value\":\"34\",\"min\":1,\"width\":\"120\",\"change\":_vm.widthChange,\"id\":\"labelWidth\"}})],1)])])])])]),_vm._v(\" \"),_vm._m(5),_vm._v(\" \"),_vm._m(6)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Intersect Action\\n                    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Edge Label Placement\\n                    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Label Position\\n                    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Enable Trim: \\n                    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Maximum Label Width: \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample demonstrates the rendering of category axis in the chart with internet users of different countries.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to arrange the axis labels and how to trim the axis label smartly. When the Axis labels overlap with each other based on\\n        the chart dimensions and label size, you can use the \\n        \"),_c('code',[_vm._v(\"labelPlacement\")]),_vm._v(\" property. \\n  \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n  Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n  \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            Chart component features are segregated into individual feature-wise modules. To use Category axis, we need to inject\\n            \"),_c('code',[_vm._v(\"Category\")]),_vm._v(\" module using \"),_c('code',[_vm._v(\"provide: {chart: [Category]},\")]),_vm._v(\" method.\\n        \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            More information on the Category axis can be found in this\\n            \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/smart-axis-labels/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });