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
/******/ 		"chart/rounded-column/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/rounded-column/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/rounded-column/App.vue":
/*!**********************************************!*\
  !*** ./Samples/chart/rounded-column/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_a0b187a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=a0b187a6&scoped=true& */ \"./Samples/chart/rounded-column/App.vue?vue&type=template&id=a0b187a6&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/rounded-column/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_a0b187a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_a0b187a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a0b187a6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/rounded-column/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/rounded-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/rounded-column/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/chart/rounded-column/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/rounded-column/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/rounded-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/rounded-column/App.vue?vue&type=template&id=a0b187a6&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/chart/rounded-column/App.vue?vue&type=template&id=a0b187a6&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a0b187a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=a0b187a6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/rounded-column/App.vue?vue&type=template&id=a0b187a6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a0b187a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a0b187a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/rounded-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/rounded-column/main.js":
/*!**********************************************!*\
  !*** ./Samples/chart/rounded-column/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/rounded-column/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/rounded-column/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/rounded-column/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/rounded-column/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\nlet count = 0;\nlet datasource1 = [\n  { x: \"Tea\", y: 206, text: \"Bangaladesh\" },\n  { x: \"Misc\", y: 123, text: \"Bhutn\" },\n  { x: \"Fish\", y: 48, text: \"Nepal\" },\n  { x: \"Egg\", y: 240, text: \"Thiland\" },\n  { x: \"Fruits\", y: 170, text: \"Malaysia\" }\n];\nlet datasource2 = [\n  { x: \"Tea\", y: 86, text: \"Bangaladesh\" },\n  { x: \"Misc\", y: 173, text: \"Bhutn\" },\n  { x: \"Fish\", y: 188, text: \"Nepal\" },\n  { x: \"Egg\", y: 109, text: \"Thiland\" },\n  { x: \"Fruits\", y: 100, text: \"Malaysia\" }\n];\nlet datasource3 = [\n  { x: \"Tea\", y: 156, text: \"Bangaladesh\" },\n  { x: \"Misc\", y: 33, text: \"Bhutn\" },\n  { x: \"Fish\", y: 260, text: \"Nepal\" },\n  { x: \"Egg\", y: 200, text: \"Thiland\" },\n  { x: \"Fruits\", y: 30, text: \"Malaysia\" }\n];\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (\n  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)\n).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      seriesData: [\n        { x: \"Tea\", y: 106, text: \"Bangaladesh\" },\n        { x: \"Misc\", y: 103, text: \"Bhutn\" },\n        { x: \"Fish\", y: 198, text: \"Nepal\" },\n        { x: \"Egg\", y: 189, text: \"Thiland\" },\n        { x: \"Fruits\", y: 250, text: \"Malaysia\" }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        valueType: \"Category\",\n        interval: 1,\n        majorGridLines: { width: 0 },\n        tickPosition: \"Inside\",\n        labelPosition: \"Inside\",\n        labelStyle: { color: \"#ffffff\" }\n      },\n      chartArea: { border: { width: 0 } },\n\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        minimum: 0,\n        maximum: 300,\n        interval: 50,\n        majorGridLines: { width: 0 },\n        majorTickLines: { width: 0 },\n        lineStyle: { width: 0 },\n        labelStyle: { color: \"transparent\" }\n      },\n\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"60%\",\n\n      marker: {\n        dataLabel: {\n          visible: true,\n          position: \"Top\",\n          font: { fontWeight: \"600\", color: \"#ffffff\" }\n        }\n      },\n\n      legendSettings: { visible: false },\n\n      tooltip: {\n        enable: false\n      },\n\n      cornerRadius: {\n        bottomLeft: 10,\n        bottomRight: 10,\n        topLeft: 10,\n        topRight: 10\n      },\n      title: \"Trade in Food Groups\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"]]\n  },\n  methods: {\n    \n    pointRender: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      if (selectedTheme && selectedTheme.indexOf(\"fabric\") > -1) {\n        args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n      } else if (selectedTheme === \"material\") {\n        args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n      } else if (selectedTheme === \"highcontrast\") {\n        args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n      } else {\n        args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n      }\n    },\n    loaded: function(args) {\n      this.$refs.chart.ej2Instances.loaded = null;\n      let columninterval = setInterval(() => {\n        if (document.getElementById('chartcontainerR')) {\n        if (count === 0) {\n          this.$refs.chart.ej2Instances.series[0].dataSource = datasource1;\n          this.$refs.chart.ej2Instances.animate();\n          count++;\n        } else if (count === 1) {\n          this.$refs.chart.ej2Instances.series[0].dataSource = datasource2;\n          this.$refs.chart.ej2Instances.animate();\n          count++;\n        } else if (count === 2) {\n          this.$refs.chart.ej2Instances.series[0].dataSource = datasource3;\n          this.$refs.chart.ej2Instances.animate();\n          count = 0;\n        }\n        } else {\n          clearInterval(columninterval)\n        }\n      }, 2000);\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/rounded-column/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/rounded-column/App.vue?vue&type=template&id=a0b187a6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/rounded-column/App.vue?vue&type=template&id=a0b187a6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"theme\":_vm.theme,\"align\":\"center\",\"id\":\"chartcontainerR\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"tooltip\":_vm.tooltip,\"legendSettings\":_vm.legendSettings,\"pointRender\":_vm.pointRender,\"loaded\":_vm.loaded}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":\"Column\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Tiger\",\"width\":\"2\",\"marker\":_vm.marker,\"cornerRadius\":_vm.cornerRadius}})],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{\"float\":\"right\",\"margin-right\":\"10px\"}},[_vm._v(\"\\n    Source:\\n    \"),_c('a',{attrs:{\"href\":\"https://blogs.scientificamerican.com/extinction-countdown/tiger-populations-increasing/\",\"target\":\"_blank\"}},[_vm._v(\"blogs.scientificamerican.com\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample illustrates a rounded column series. Data points values are showed by using data label.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing\\n      the frequency, count, total or average of data in different categories. You can use\\n      \"),_c('code',[_vm._v(\"border\")]),_vm._v(\",\\n      \"),_c('code',[_vm._v(\"fill\")]),_vm._v(\" properties to customize the vertical rect.\\n      \"),_c('code',[_vm._v(\"dataLabel\")]),_vm._v(\" is used to represent individual\\n      data and its value.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject\\n      \"),_c('code',[_vm._v(\"ColumnSeries\")]),_vm._v(\" module using\\n      \"),_c('code',[_vm._v(\"provide: { chart: [ ColumnSeries ] },\")]),_vm._v(\" method.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      More information on the column series can be found in this\\n      \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/rounded-column/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });