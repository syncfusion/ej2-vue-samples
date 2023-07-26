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
/******/ 		"maps/curved-lines/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/curved-lines/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/curved-lines/App.vue":
/*!*******************************************!*\
  !*** ./Samples/maps/curved-lines/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_007c79a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=007c79a6& */ \"./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_007c79a6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_007c79a6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/curved-lines/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/curved-lines/App.vue?");

/***/ }),

/***/ "./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/curved-lines/App.vue?");

/***/ }),

/***/ "./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6&":
/*!**************************************************************************!*\
  !*** ./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_007c79a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=007c79a6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_007c79a6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_007c79a6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/curved-lines/App.vue?");

/***/ }),

/***/ "./Samples/maps/curved-lines/main.js":
/*!*******************************************!*\
  !*** ./Samples/maps/curved-lines/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/curved-lines/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/curved-lines/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/map-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/navigation-data'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data:function(){\n      return{\n        centerPosition: {\n            latitude: 30.41078179084589,\n            longitude: 90.52734374999999\n        },\n        zoomSettings: {\n            enable: false,\n            zoomFactor: 3.5,\n            mouseWheelZoom: false,\n            toolbars: []\n        },\n        mapsArea: {\n            background: '#AEE2FA'\n        },\n        titleSettings: {\n            text: 'Flights from India to China',\n            textStyle: {\n                size: '16px'\n            }\n        },\n        animationDuration: 1000,\n        shapePropertyPath: 'name',\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/world-map.json'),\n        shapeDataPath: 'name',\n        dataSource: [\n                    {\n                        name: 'India'\n                    },\n                    {\n                        name: 'China'\n                    }\n                ],\n        shapeSettings: {\n                    colorValuePath: 'name',\n                    fill: '#fcfbf9',\n                    border: {\n                        width: 0.1,\n                        color: 'black'\n                    },\n                    colorMapping: [\n                        {\n                            value: 'China',\n                            color: '#f7d083'\n                        },\n                        {\n                            value: 'India',\n                            color: '#FFFE99'\n                        }\n                    ]\n                },\n        navigationLineSettings: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/navigation-data'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n        markerSettings: [\n                    {\n                        dataSource: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/map-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n                        visible: true,\n                        shape: 'Circle',\n                        fill: 'white',\n                        border: { width: 1, color: 'black' },\n                        width: 4,\n                        animationDuration: 0,\n                        tooltipSettings: {\n                            visible: true,\n                            valuePath: 'title'\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'New Delhi',\n                                'latitude': 28.6139391,\n                                'longitude': 77.2090212\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\">New Delhi' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: -50,\n                            y: 10\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Mumbai',\n                                'latitude': 19.0759837,\n                                'longitude': 72.8776559\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Mumbai' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Chennai',\n                                'latitude': 13.0826802,\n                                'longitude': 80.2707184\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Chennai' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Kolkata',\n                                'latitude': 22.572646,\n                                'longitude': 88.363895\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Kolkata' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Kunming',\n                                'latitude': 24.880095,\n                                'longitude': 102.832891\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Kunming' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Beijing',\n                                'latitude': 39.9041999,\n                                'longitude': 116.4073963\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Beijing' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Shanghai',\n                                'latitude': 31.2303904,\n                                'longitude': 121.4737021\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Shanghai' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Hong Kong',\n                                'latitude': 22.396428,\n                                'longitude': 114.109497\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Hong Kong' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 20,\n                            y: 20\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Guangzhou',\n                                'latitude': 23.12911,\n                                'longitude': 113.264385\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\";>Guangzhou' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 35,\n                            y: -10\n                        }\n                    }\n                ]\n      }\n  },\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"NavigationLine\"],_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Zoom\"] ]\n},\n/* custom code start */\nmethods:{\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    }  \n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/curved-lines/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            attrs: {\n              id: \"container\",\n              align: \"center\",\n              load: _vm.load,\n              titleSettings: _vm.titleSettings,\n              zoomSettings: _vm.zoomSettings,\n              centerPosition: _vm.centerPosition,\n              mapsArea: _vm.mapsArea\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    animationDuration: _vm.animationDuration,\n                    shapePropertyPath: _vm.shapePropertyPath,\n                    shapeDataPath: _vm.shapeDataPath,\n                    dataSource: _vm.dataSource,\n                    shapeSettings: _vm.shapeSettings,\n                    navigationLineSettings: _vm.navigationLineSettings,\n                    markerSettings: _vm.markerSettings\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n       \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://www.tibettravel.org/nepal-map/nepal-india-map.html\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"www.tibettravel.org\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n           This sample demonstrates the flight routes from India to China.\\n       \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n           In this example, you can see how to render the curved lines between two points in a map. You can use the \"\n        ),\n        _c(\"code\", [_vm._v(\"dashArray\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"width\")]),\n        _vm._v(\", and \"),\n        _c(\"code\", [_vm._v(\"color\")]),\n        _vm._v(\n          \" properties to customize the appearance of the navigation lines.\\n    \\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          Maps component features are segregated into individual feature-wise modules. To use the navigation lines, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"NavigationLine\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Maps.Inject(NavigationLine)\")]),\n        _vm._v(\" method.\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/curved-lines/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });