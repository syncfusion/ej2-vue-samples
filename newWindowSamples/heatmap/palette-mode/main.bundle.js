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
/******/ 		"heatmap/palette-mode/main": 0
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
/******/ 	deferredModules.push(["./Samples/heatmap/palette-mode/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/heatmap/palette-mode/App.vue":
/*!**********************************************!*\
  !*** ./Samples/heatmap/palette-mode/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5b89b3de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5b89b3de& */ \"./Samples/heatmap/palette-mode/App.vue?vue&type=template&id=5b89b3de&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/heatmap/palette-mode/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5b89b3de___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5b89b3de___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/heatmap/palette-mode/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/palette-mode/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/heatmap/palette-mode/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/palette-mode/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/palette-mode/App.vue?vue&type=template&id=5b89b3de&":
/*!*****************************************************************************!*\
  !*** ./Samples/heatmap/palette-mode/App.vue?vue&type=template&id=5b89b3de& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b89b3de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5b89b3de& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/palette-mode/App.vue?vue&type=template&id=5b89b3de&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b89b3de___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b89b3de___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/palette-mode/main.js":
/*!**********************************************!*\
  !*** ./Samples/heatmap/palette-mode/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/palette-mode/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/main.js?");

/***/ }),

/***/ "./Samples/heatmap/palette-mode/palatte-sample-data.json":
/*!***************************************************************!*\
  !*** ./Samples/heatmap/palette-mode/palatte-sample-data.json ***!
  \***************************************************************/
/*! exports provided: palatteSampleData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"palatteSampleData\\\":[[17.2,24.6,18.4,9.6,8.6,18.8,10.3,5],[15.8,29.9,15.2,31.3,18.1,5.5,10.2,14.6],[17.8,25.5,19.1,12.9,7.5,30.7,12.6,5.6],[7.3,20.1,18.8,20.3,6.1,9,29.8,7.7],[7.8,30.5,19.6,10.8,7.9,15.5,5.2,14.3],[5.8,31.7,17.8,10.4,17.3,15.7,9.1,7.7],[11.3,29.1,19.5,11.5,6.3,12.9,10.1,6.7],[13.7,31.3,15.3,6.2,7.7,16.1,18.9,12.6],[9.3,29.9,16.4,14.5,5.2,12.3,18.7,7.3],[16.3,27.4,27,5.5,16.2,12.6,8.3,15.2],[7.2,20.1,16.9,9,7.6,16.2,8.4,29]]}\");\n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/palatte-sample-data.json?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/palette-mode/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/palette-mode/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _palatte_sample_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palatte-sample-data.json */ \"./Samples/heatmap/palette-mode/palatte-sample-data.json\");\nvar _palatte_sample_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./palatte-sample-data.json */ \"./Samples/heatmap/palette-mode/palatte-sample-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"HeatMapPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonPlugin\"], _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        titleSettings: {\n           text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal'\n            }\n        },\n         xAxis: {\n            labels: ['2005', '2006', '2007', '2008', '2009', '2010',\n                '2011', '2012', '2013', '2014', '2015'],\n            labelRotation: 45,\n            labelIntersectAction: 'None'\n        },\n        yAxis: {\n            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',\n                'Justice', 'NASA', 'Transportation']\n        },\n        dataSource: _palatte_sample_data_json__WEBPACK_IMPORTED_MODULE_3__[\"palatteSampleData\"],\n        cellSettings: { border: { width: 0 }, showLabel: false },\n        legendSettings: {\n            position: 'Bottom',\n            width: '400px',\n            enableSmartLegend: true\n        },\n        paletteSettings: {\n            palette: [{ value: 4.3, color: '#FFFFDA' },\n            { value: 7, color: '#EDF8B6' },\n            { value: 9, color: '#CAE8B4' },\n            { value: 15, color: '#78D1BD' },\n            { value: 18, color: '#36BCC6' },\n            { value: 25, color: '#208FC6' },\n            { value: 30, color: '#2C2F9A' },\n            { value: 34, color: '#071C58' },\n            ],\n            type: 'Fixed'\n        }\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"]]\n},\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    paletteChange : function()\n    {\n        this.$refs.isSmartLegend.ej2Instances.disabled = !this.$refs.fixedType.ej2Instances.checked;\n        this.$refs.heatmap.ej2Instances.paletteSettings.type = this.$refs.fixedType.ej2Instances.checked ? 'Fixed' : 'Gradient';\n    },\n    valueChange: function() {\n        this.$refs.heatmap.ej2Instances.legendSettings.enableSmartLegend = this.$refs.isSmartLegend.ej2Instances.checked;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/palette-mode/App.vue?vue&type=template&id=5b89b3de&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/palette-mode/App.vue?vue&type=template&id=5b89b3de& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section col-lg-9\" }, [\n      _c(\"div\", [\n        _c(\n          \"div\",\n          { staticClass: \"content-wrapper\", staticStyle: { width: \"99%\" } },\n          [\n            _c(\"ejs-heatmap\", {\n              ref: \"heatmap\",\n              attrs: {\n                id: \"container\",\n                titleSettings: _vm.titleSettings,\n                xAxis: _vm.xAxis,\n                yAxis: _vm.yAxis,\n                dataSource: _vm.dataSource,\n                cellSettings: _vm.cellSettings,\n                paletteSettings: _vm.paletteSettings,\n                legendSettings: _vm.legendSettings,\n                load: _vm.load\n              }\n            })\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"row\" },\n                  [\n                    _c(\"ejs-radiobutton\", {\n                      ref: \"fixedType\",\n                      attrs: {\n                        id: \"fixed\",\n                        label: \"Fixed\",\n                        name: \"paletteType\",\n                        value: \"Fixed\",\n                        checked: \"true\",\n                        change: _vm.paletteChange\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"row\" },\n                  [\n                    _c(\"ejs-radiobutton\", {\n                      ref: \"graidentType\",\n                      attrs: {\n                        id: \"gradient\",\n                        label: \"Gradient\",\n                        name: \"paletteType\",\n                        value: \"Gradient\",\n                        change: _vm.paletteChange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\"div\", [\n                  _c(\n                    \"div\",\n                    { staticClass: \"row\" },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        ref: \"isSmartLegend\",\n                        attrs: {\n                          id: \"smartLegend\",\n                          checked: true,\n                          disabled: false,\n                          change: _vm.valueChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ])\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n      _c(\"div\", [_vm._v(\"Palette Type:\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n      _c(\"div\", { staticStyle: { \"margin-top\": \"22px\" } }, [\n        _vm._v(\"Enable Smart Legend:\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the energy consumption in trillion British thermal units (btu) by the various public sectors in US government over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change palette type in Heatmap by means of radio button.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to change the palette type between \"\n        ),\n        _c(\"code\", [_vm._v(\"Fixed \")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"Gradient \")]),\n        _vm._v(\" types in Heatmap. The palette type can be defined using the \"),\n        _c(\"code\", [_vm._v(\"type \")]),\n        _vm._v(\" property in \"),\n        _c(\"code\", [_vm._v(\"paletteSettings \")]),\n        _vm._v(\n          \". Legend is enabled in this example, changing the palette mode the legend type will be automatically switched between gradient legend and list type legend.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Tooltip \")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Tooltip) \")]),\n        _vm._v(\" method, and use a legend by injecting the \"),\n        _c(\"code\", [_vm._v(\"Legend \")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Legend) \")]),\n        _vm._v(\" method.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/palette-mode/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });