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
/******/ 		"chart/box-and-whisker/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/box-and-whisker/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/box-and-whisker/App.vue":
/*!***********************************************!*\
  !*** ./Samples/chart/box-and-whisker/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_fbd53e7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=fbd53e7c&scoped=true& */ \"./Samples/chart/box-and-whisker/App.vue?vue&type=template&id=fbd53e7c&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/box-and-whisker/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_fbd53e7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_fbd53e7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"fbd53e7c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/box-and-whisker/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/box-and-whisker/App.vue?");

/***/ }),

/***/ "./Samples/chart/box-and-whisker/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/chart/box-and-whisker/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/box-and-whisker/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/box-and-whisker/App.vue?");

/***/ }),

/***/ "./Samples/chart/box-and-whisker/App.vue?vue&type=template&id=fbd53e7c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/chart/box-and-whisker/App.vue?vue&type=template&id=fbd53e7c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fbd53e7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=fbd53e7c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/box-and-whisker/App.vue?vue&type=template&id=fbd53e7c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fbd53e7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fbd53e7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/box-and-whisker/App.vue?");

/***/ }),

/***/ "./Samples/chart/box-and-whisker/main.js":
/*!***********************************************!*\
  !*** ./Samples/chart/box-and-whisker/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/box-and-whisker/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/box-and-whisker/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/box-and-whisker/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/box-and-whisker/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\nlet materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',\n        '#ea7a57', '#404041', '#00bdae'];\nlet fabricColors= ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',\n        '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];\nlet bootstrapColors =  ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',\n        '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\nlet fluentColors = ['#614570', '#4C6FB1', '#CC6952', '#3F579A', '#4EA09B', '#6E7A89', '#D4515C', '#E6AF5D', '#639751',\n        '#9D4D69'];\nlet fluentDarkColors = ['#8AB113', '#2A72D5', '#43B786', '#584EC6', '#E85F9C', '#6E7A89', '#EA6266', '#EBA844', '#26BC7A', \n        '#BC4870'];        \n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n        seriesData: [\n                { x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },\n                    { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },\n                    { x: 'Training', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] },\n                    { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },\n                    { x: 'R&D', y: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },\n                    { x: 'Sales', y: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },\n                    { x: 'Inventory', y: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },\n                    { x: 'Graphics', y: [26, 28, 29, 30, 32, 33, 35, 36, 52] },\n                    { x: 'HR', y: [28, 29, 30, 31, 32, 34, 35, 36] }\n        ],\n        \n           //Initializing Primary X Axis\n        primaryXAxis: {\n            interval: 1,\n            valueType: 'Category',\n            majorGridLines: { width: 0 },\n            edgeLabelPlacement: 'Shift',\n            labelIntersectAction: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'None' : 'Rotate45',\n            labelRotation: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? -45 : 0,\n            majorTickLines: { width: 0 },\n            minorTickLines: { width: 0 }\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n\n      //Initializing Primary Y Axis\n        primaryYAxis:\n        {\n            minimum: 10, maximum: 60,\n            interval: 10, title: 'Age',\n            majorGridLines: { width: 0 },\n            majorTickLines: { width: 0 }\n        },\n        \n        \n        boxType: \"Normal\",\n        showMean: true,\n         marker: {\n                    visible: true,\n                    width: 10,\n                    height: 10\n                },\n\n        tooltip: { enable: true },\n        \n        legendSettings: {\n            visible: false\n        },\n\n       modedata : [ 'Normal', 'Exclusive', 'Inclusive', ],\n       animation: { enable: false },\n\n      listwidth:120,\n        modetype: \"Normal\",\n      title: \"Employee Age Group in Various Department\"\n\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"BoxAndWhiskerSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"]]\n  },\n  updated: function () {\n    this.$nextTick(function() {\n      this.$refs.chart.ej2Instances.refresh();\n    });\n  },\n\n  methods: { \n      load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n   \n        mode: function(args) {   \n          this.boxType = modeid.value;\n       \n    },\n\n    meanCheck: function(args) {\n        let target = document.getElementById('mean');\n        this.showMean = target.checked;\n    },\n     pointRender: function (args) {\n        let selectedTheme= location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {\n            args.fill = fabricColors[args.point.index % 10];\n        } else if (selectedTheme === 'material') {\n            args.fill = materialColors[args.point.index % 10];\n        } else if (selectedTheme === 'fluent') {\n            args.fill = fluentColors[args.point.index % 10];\n        } else if (selectedTheme === 'fluent-dark') {\n            args.fill = fluentDarkColors[args.point.index % 10];\n        } else {\n            args.fill = bootstrapColors[args.point.index % 10];\n        }\n        args.border.color = Object(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"getSaturationColor\"])(args.fill, -0.6);\n    }\n\n   \n  },\n \n  \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/box-and-whisker/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/box-and-whisker/App.vue?vue&type=template&id=fbd53e7c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/box-and-whisker/App.vue?vue&type=template&id=fbd53e7c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-md-8 control-section\" },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            ref: \"chart\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              chartArea: _vm.chartArea,\n              tooltip: _vm.tooltip,\n              animation: _vm.animation,\n              pointRender: _vm.pointRender,\n              legendSettings: _vm.legendSettings,\n            },\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    animation: _vm.animation,\n                    showMean: _vm.showMean,\n                    type: \"BoxAndWhisker\",\n                    boxPlotMode: _vm.boxType,\n                    xName: \"x\",\n                    yName: \"y\",\n                    marker: _vm.marker,\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", [\n      _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n        _c(\n          \"table\",\n          {\n            staticClass: \"property-panel-table\",\n            staticStyle: { width: \"100%\" },\n            attrs: { id: \"property\", title: \"Properties\" },\n          },\n          [\n            _c(\"br\"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      attrs: {\n                        id: \"modeid\",\n                        change: _vm.mode,\n                        dataSource: _vm.modedata,\n                        index: \"0\",\n                        width: _vm.listwidth,\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                {\n                  staticStyle: {\n                    width: \"50%\",\n                    \"padding-left\": \"10px\",\n                    \"padding-right\": \"10px\",\n                  },\n                },\n                [\n                  _c(\"div\", [\n                    _c(\"input\", {\n                      attrs: { type: \"checkbox\", id: \"mean\", checked: \"true\" },\n                      on: { change: _vm.meanCheck },\n                    }),\n                  ]),\n                ]\n              ),\n            ]),\n          ]\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Mode\")])])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Mean: \")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the employee's age group in various departments of a country with box and whisker type series in the chart. Mode of box and whisker series can be changed by \"\n        ),\n        _c(\"code\", [_vm._v(\"Mode\")]),\n        _vm._v(\" in property panel. To display the \"),\n        _c(\"code\", [_vm._v(\"mean\")]),\n        _vm._v(\n          \" value in a series, enable the Mean in the property panel.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       In this example, you can see how to render and configure the box and whisker type charts. Similar to line type series, but the area get closed and filled with series color. You can use \"\n        ),\n        _c(\"code\", [_vm._v(\"border\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"fill\")]),\n        _vm._v(\" properties to customize the area. \"),\n        _c(\"code\", [_vm._v(\"marker\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"dataLabel\")]),\n        _vm._v(\n          \" are used to represent individual data and its value. Legend is enabled in this example with series type shape.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Chart component features are segregated into individual feature-wise modules. To use box and whisker series, we need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"BoxAndWhiskerSeries\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [BoxAndWhiskerSeries] },\")]),\n        _vm._v(\" method.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the error bar can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype\",\n            },\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/box-and-whisker/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });