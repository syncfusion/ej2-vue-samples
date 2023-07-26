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
/******/ 		"heatmap/color-and-size-attributes/main": 0
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
/******/ 	deferredModules.push(["./Samples/heatmap/color-and-size-attributes/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/heatmap/color-and-size-attributes/App.vue":
/*!***********************************************************!*\
  !*** ./Samples/heatmap/color-and-size-attributes/App.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0aec80e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0aec80e4& */ \"./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=template&id=0aec80e4&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0aec80e4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0aec80e4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/heatmap/color-and-size-attributes/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/heatmap/color-and-size-attributes/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/heatmap/color-and-size-attributes/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=template&id=0aec80e4&":
/*!******************************************************************************************!*\
  !*** ./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=template&id=0aec80e4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0aec80e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0aec80e4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=template&id=0aec80e4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0aec80e4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0aec80e4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/color-and-size-attributes/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/color-and-size-attributes/main.js":
/*!***********************************************************!*\
  !*** ./Samples/heatmap/color-and-size-attributes/main.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/color-and-size-attributes/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/heatmap/color-and-size-attributes/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"HeatMapPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'Segoe UI'\n            }\n        },\n         xAxis: {\n            labels: ['2017', '2016', '2015', '2014', '2013', '2012']\n        },\n        yAxis: {\n            labels:  ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']\n        },\n        dataSource: [\n            { Year: '2017', Months: 'Jan-Feb', Accidents: 4, Fatalities: 39 },\n            { Year: '2017', Months: 'Mar-Apr', Accidents: 3, Fatalities: 8 },\n            { Year: '2017', Months: 'May-Jun', Accidents: 1, Fatalities: 3 },\n            { Year: '2017', Months: 'Jul-Aug', Accidents: 1, Fatalities: 0 },\n            { Year: '2017', Months: 'Sep-Oct', Accidents: 4, Fatalities: 4 },\n            { Year: '2017', Months: 'Nov-Dec', Accidents: 2, Fatalities: 15 },\n            { Year: '2016', Months: 'Jan-Feb', Accidents: 4, Fatalities: 28 },\n            { Year: '2016', Months: 'Mar-Apr', Accidents: 5, Fatalities: 92 },\n            { Year: '2016', Months: 'May-Jun', Accidents: 5, Fatalities: 73 },\n            { Year: '2016', Months: 'Jul-Aug', Accidents: 3, Fatalities: 1 },\n            { Year: '2016', Months: 'Sep-Oct', Accidents: 3, Fatalities: 4 },\n            { Year: '2016', Months: 'Nov-Dec', Accidents: 4, Fatalities: 126 },\n            { Year: '2015', Months: 'Jan-Feb', Accidents: 1, Fatalities: 45 },\n            { Year: '2015', Months: 'Mar-Apr', Accidents: 5, Fatalities: 152 },\n            { Year: '2015', Months: 'May-Jun', Accidents: 0, Fatalities: 0 },\n            { Year: '2015', Months: 'Jul-Aug', Accidents: 4, Fatalities: 54 },\n            { Year: '2015', Months: 'Sep-Oct', Accidents: 5, Fatalities: 243 },\n            { Year: '2015', Months: 'Nov-Dec', Accidents: 2, Fatalities: 45 },\n            { Year: '2014', Months: 'Jan-Feb', Accidents: 2, Fatalities: 18 },\n            { Year: '2014', Months: 'Mar-Apr', Accidents: 3, Fatalities: 239 },\n            { Year: '2014', Months: 'May-Jun', Accidents: 0, Fatalities: 0 },\n            { Year: '2014', Months: 'Jul-Aug', Accidents: 4, Fatalities: 501 },\n            { Year: '2014', Months: 'Sep-Oct', Accidents: 1, Fatalities: 2 },\n            { Year: '2014', Months: 'Nov-Dec', Accidents: 4, Fatalities: 162 },\n            { Year: '2013', Months: 'Jan-Feb', Accidents: 2, Fatalities: 68 },\n            { Year: '2013', Months: 'Mar-Apr', Accidents: 3, Fatalities: 7 },\n            { Year: '2013', Months: 'May-Jun', Accidents: 2, Fatalities: 12 },\n            { Year: '2013', Months: 'Jul-Aug', Accidents: 4, Fatalities: 15 },\n            { Year: '2013', Months: 'Sep-Oct', Accidents: 2, Fatalities: 64 },\n            { Year: '2013', Months: 'Nov-Dec', Accidents: 3, Fatalities: 83 },\n            { Year: '2012', Months: 'Jan-Feb', Accidents: 0, Fatalities: 0 },\n            { Year: '2012', Months: 'Mar-Apr', Accidents: 2, Fatalities: 158 },\n            { Year: '2012', Months: 'May-Jun', Accidents: 5, Fatalities: 90 },\n            { Year: '2012', Months: 'Jul-Aug', Accidents: 0, Fatalities: 0 },\n            { Year: '2012', Months: 'Sep-Oct', Accidents: 3, Fatalities: 33 },\n            { Year: '2012', Months: 'Nov-Dec', Accidents: 4, Fatalities: 42 }\n        ],\n        dataSourceSettings:  {\n            isJsonData: true,\n            adaptorType: 'Cell',\n            xDataMapping: 'Year',\n            yDataMapping: 'Months',\n            bubbleDataMapping: { size: 'Accidents', color: 'Fatalities' }\n        },\n        cellSettings: {\n           border: {\n                width: 0\n            },\n            showLabel: false,\n            tileType: 'Bubble',\n            bubbleType: 'SizeAndColor'\n        },\n        paletteSettings: {\n            palette: [{ color: '#C06C84' },\n            { color: '#355C7D' }\n            ],\n            type: 'Gradient'\n        },\n        legendSettings: {\n            visible: true\n        },\n        height:'200px'\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Adaptor\"]]\n},\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    tooltipRender:function(args)\n    {\n        args.content = ['Year ' + ' : ' + args.xLabel + '<br/>' + 'Months ' + ' : ' + args.yLabel + '<br/>'\n                + 'Accidents ' + ' : ' + args.value[0].bubbleData + '<br/>' + 'Fatalities ' + ' : '\n                + args.value[1].bubbleData];\n    },\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/heatmap/color-and-size-attributes/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=template&id=0aec80e4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/color-and-size-attributes/App.vue?vue&type=template&id=0aec80e4& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-heatmap\", {\n            attrs: {\n              id: \"container\",\n              titleSettings: _vm.titleSettings,\n              xAxis: _vm.xAxis,\n              yAxis: _vm.yAxis,\n              dataSource: _vm.dataSource,\n              dataSourceSettings: _vm.dataSourceSettings,\n              cellSettings: _vm.cellSettings,\n              legendSettings: _vm.legendSettings,\n              paletteSettings: _vm.paletteSettings,\n              load: _vm.load,\n              tooltipRender: _vm.tooltipRender\n            }\n          })\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm._m(0)\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n        \"),\n        _c(\n          \"a\",\n          { attrs: { href: \"https://en.wikipedia.org\", target: \"_blank\" } },\n          [_vm._v(\"https://en.wikipedia.org/\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates the number of commercial air craft accidents and the fatalities across the world between 2012 and 2017. Each data point interprets the accident count and the fatality associated with the accident, the size of the bubble depicts the accident count and the shade of the bubble depicts the fatality count.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to map more than one data for each data point or cell of the bubble heatmap. The size and shade parameters of the bubble is used to depict the data source values. The legend will be displayed only for the shade parameter of the bubble. For JSON data, you can specify which data source value should be mapped to either size or shade of the bubble parameters using the dataMapping property. The data source field should mapped to the size and color properties of the dataMapping property.In this example, you can see how to map more than one data for each data point or cell of the bubble heatmap. The \"\n        ),\n        _c(\"code\", [_vm._v(\"size\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"shade\")]),\n        _vm._v(\n          \" parameters of the bubble is used to depict the data source values. The legend will be displayed only for the shade parameter of the bubble. For JSON data, you can specify which data source value should be mapped to either size or shade of the bubble parameters using the \"\n        ),\n        _c(\"code\", [_vm._v(\"dataMapping\")]),\n        _vm._v(\" property. The data source field should mapped to the \"),\n        _c(\"code\", [_vm._v(\"size\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"color\")]),\n        _vm._v(\" properties of the \"),\n        _c(\"code\", [_vm._v(\"dataMapping\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Tooltip \")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Tooltip) \")]),\n        _vm._v(\" method.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/color-and-size-attributes/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });