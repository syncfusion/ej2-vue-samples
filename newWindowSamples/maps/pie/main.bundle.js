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
/******/ 		"maps/pie/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/pie/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/pie/App.vue":
/*!**********************************!*\
  !*** ./Samples/maps/pie/App.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1058ca7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1058ca7a& */ \"./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/pie/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1058ca7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1058ca7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/pie/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/pie/App.vue?");

/***/ }),

/***/ "./Samples/maps/pie/App.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./Samples/maps/pie/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/pie/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/pie/App.vue?");

/***/ }),

/***/ "./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a&":
/*!*****************************************************************!*\
  !*** ./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1058ca7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1058ca7a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1058ca7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1058ca7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/pie/App.vue?");

/***/ }),

/***/ "./Samples/maps/pie/main.js":
/*!**********************************!*\
  !*** ./Samples/maps/pie/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/pie/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/pie/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/pie/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/pie/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChartPlugin\"]);\n_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChart\"].Inject(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationTooltip\"]);\nlet chartCollection = [];\nlet count = 0;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () { \n        return {\n            titleSettings: {\n                text: 'Top 6 largest countries age group details',\n                textStyle: {\n                    size: '16px'\n                }\n            },\n            legendSettings: {\n                visible: true,\n                position: 'Bottom'\n            },\n            zoomSettings: {\n                enable: false\n            },\n            shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/world-map.json'),\n            shapeSettings: {\n                fill: '#E5E5E5',\n                colorMapping: [{\n                        from: 0,\n                        to: 4,\n                        color: '#634D6F',\n                        label: '0-14 years',\n                    },\n                    {\n                        from: 5,\n                        to: 14,\n                        color: '#B34D6D',\n                        label: '15-24 years'\n                    },\n                    {\n                        from: 15,\n                        to: 59,\n                        color: '#557C5C',\n                        label: '25-54 years'\n                    },\n                    {\n                        from: 60,\n                        to: 100,\n                        color: '#5E55E2',\n                        label: '55-64 years'\n                    }\n                ]\n            },\n             markerSettings: [\n                    {\n                        visible: true,\n                        template: '<div id=\"pieChart1\" style=\"height:70px;width:70px;\"></div>',\n                        dataSource: [\n                            { 'latitude': 61.938950426660604, 'longitude': 97.03125 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"pieChart2\" style=\"height:70px;width:70px;\">',\n                        dataSource: [\n                            { 'latitude': 57.70414723434193, 'longitude': -114.08203125 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"pieChart3\" style=\"top:10px;left:10px;height:70px;width:70px;\"></div>',\n                        dataSource: [\n                            { 'latitude': 39.90973623453719, 'longitude': -103.0078125 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"pieChart4\" style=\"height:70px;width:70px;\"></div>',\n                        dataSource: [\n                            { 'latitude': 35.746512259918504, 'longitude': 102.216796875 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"pieChart5\" style=\"height:70px;width:70px;\"></div>',\n                        dataSource: [\n                            { 'latitude': -8.667918002363107, 'longitude': -52.55859375 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"pieChart6\" style=\"height:70px;width:70px;\"></div>',\n                        dataSource: [\n                            { 'latitude': -23.725011735951796, 'longitude': 132.978515625 }\n                        ],\n                        animationDuration: 0\n                    }\n                ]\n        }\n    },\n    provide: {\n        maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"]],\n        accumulation: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"PieSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationDataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationTooltip\"] ]   \n  },\n    methods: {\n        /* custom code start */\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.maps.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        },\n        /* custom code end */\n    loaded:function(args){\n                let markers = document.getElementById(args.maps.element.id + '_LayerIndex_0_Markers_Template_Group');\n            if (markers) {\n                for (let i = 0; i < markers.childElementCount; i++) {\n                    this.AccumulationChartRender((markers.childNodes[i].childNodes[0]).id);\n                }\n                count = 0;\n            }\n    },\n    resize:function(args){\n              for (let i = 0; i < chartCollection.length; i++) {\n                chartCollection[i].destroy();\n            }\n    },\n    AccumulationChartRender:function(id){\n    let chartData = this.getData();\n    let dataSource = chartData['data'];\n    let name = chartData['name'];\n    let chart = new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChart\"]({\n        background: 'transparent',\n        width: '70',\n        height: '70',\n        tooltip: {\n            enable: true,\n            format: '${point.x} : ${point.y}%'\n        },\n        legendSettings: {visible: false},\n        series: [\n            {\n                explode: true,\n                explodeIndex: 0,\n                explodeOffset: '20%',\n                name: name,\n                palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],\n                dataSource: dataSource,\n                dataLabel: {\n                    visible: false\n                },\n                type: 'Pie',\n                xName: 'x',\n                yName: 'y'\n            }\n        ]\n    });\n    chart.appendTo('#' + id);\n    chartCollection.push(chart);\n},\n getData:function(){\n    let dataSource;\n    let dataName;\n    if (count === 0) {\n        dataSource = [\n            { 'x': '0-14 years', y: 16 }, { 'x': '15-24 years', y: 11.5 },\n            { 'x': '25-54 years', y: 45.9 }, { 'x': '55-64 years', y: 13.5 },\n        ];\n        dataName = 'Russia';\n    } else if (count === 1) {\n        dataSource = [\n            { 'x': '0-14 years', y: 15.5 }, { 'x': '15-24 years', y: 12.9 },\n            { 'x': '25-54 years', y: 41.4 }, { 'x': '55-64 years', y: 13.3 },\n        ];\n        dataName = 'Canada';\n    } else if (count === 2) {\n        dataSource = [\n            { 'x': '0-14 years', y: 20 }, { 'x': '15-24 years', y: 13.7 },\n            { 'x': '25-54 years', y: 40.2 }, { 'x': '55-64 years', y: 12.3 },\n        ];\n        dataName = 'USA';\n    } else if (count === 3) {\n        dataSource = [\n            { 'x': '0-14 years', y: 17.2 }, { 'x': '15-24 years', y: 15.4 },\n            { 'x': '25-54 years', y: 46.9 }, { 'x': '55-64 years', y: 11.3 },\n        ];\n        dataName = 'China';\n    } else if (count === 4) {\n        dataSource = [\n            { 'x': '0-14 years', y: 24.2 }, { 'x': '15-24 years', y: 16.7 },\n            { 'x': '25-54 years', y: 43.6 }, { 'x': '55-64 years', y: 8.2 },\n        ];\n        dataName = 'Brazil';\n    } else if (count === 5) {\n        dataSource = [\n            { 'x': '0-14 years', y: 18.1 }, { 'x': '15-24 years', y: 13.4 },\n            { 'x': '25-54 years', y: 42 }, { 'x': '55-64 years', y: 11.8 },\n        ];\n        dataName = 'Australia';\n    }\n    count++;\n    return new Object({ name: dataName, data: dataSource });\n}   \n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/pie/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            attrs: {\n              id: \"mapContainer\",\n              loaded: _vm.loaded,\n              load: _vm.load,\n              resize: _vm.resize,\n              titleSettings: _vm.titleSettings,\n              zoomSettings: _vm.zoomSettings,\n              legendSettings: _vm.legendSettings\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    shapeSettings: _vm.shapeSettings,\n                    markerSettings: _vm.markerSettings\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n            \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"http://www.nationmaster.com/country-info/stats/People/Age-structure/55--64-years\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"www.nationmaster.com\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample visualizes the placing of pie charts on the maps. Pie chart is rendered with the age group detais of top 6 largest countries.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\"),\n      _c(\"div\", { attrs: { id: \"description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"\\n                    In this example, you can see how to render the pie chart as marker in map. Any custom HTML elements can be used as a marker.\\n\\n                \"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n          _vm._v(\"Injecting Module\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"\\n                    Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject \"\n          ),\n          _c(\"code\", [_vm._v(\"Marker\")]),\n          _vm._v(\" module using \"),\n          _c(\"code\", [_vm._v(\"Maps.Inject(Marker)\")]),\n          _vm._v(\" method.\\n                \")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/pie/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });