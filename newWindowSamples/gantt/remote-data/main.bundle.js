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
/******/ 		"gantt/remote-data/main": 0
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
/******/ 	deferredModules.push(["./Samples/gantt/remote-data/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/gantt/remote-data/App.vue":
/*!*******************************************!*\
  !*** ./Samples/gantt/remote-data/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_47d402c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=47d402c4& */ \"./Samples/gantt/remote-data/App.vue?vue&type=template&id=47d402c4&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/gantt/remote-data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_47d402c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_47d402c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/gantt/remote-data/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/gantt/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/gantt/remote-data/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/gantt/remote-data/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/gantt/remote-data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/gantt/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/gantt/remote-data/App.vue?vue&type=template&id=47d402c4&":
/*!**************************************************************************!*\
  !*** ./Samples/gantt/remote-data/App.vue?vue&type=template&id=47d402c4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_47d402c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=47d402c4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/gantt/remote-data/App.vue?vue&type=template&id=47d402c4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_47d402c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_47d402c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/gantt/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/gantt/remote-data/main.js":
/*!*******************************************!*\
  !*** ./Samples/gantt/remote-data/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/gantt/remote-data/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/gantt/remote-data/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/gantt/remote-data/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/gantt/remote-data/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_gantt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-gantt */ \"./node_modules/@syncfusion/ej2-vue-gantt/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_gantt__WEBPACK_IMPORTED_MODULE_1__[\"GanttPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n      return{\n            dataSource: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"DataManager\"]({\n        url: 'https://services.syncfusion.com/vue/production/api/GanttData',\n        adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"WebApiAdaptor\"],\n        crossDomain: true\n    }),\n            height: '450px',\n            taskFields: {\n                id: 'TaskId',\n                name: 'TaskName',\n                startDate: 'StartDate',\n                progress: 'Progress',\n                duration: 'Duration',\n                dependency: 'Predecessor',\n                child: 'SubTasks'\n            },\n            columns: [\n\t\t\t    { field: 'TaskId', visible: false },\n                { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },\n                { field: 'StartDate' },\n                { field: 'Duration' },\n            ],\n            gridLines: 'Both',\n            timelineSettings: {\n                timelineUnitSize: 50,\n                topTier: {\n                    unit: 'Month',\n                    format: 'MMM dd, y',\n                },\n                bottomTier: {\n                    unit: 'Day',\n                    formatter: (date) => {\n                        let month = date.getMonth();\n                        if (month === 1) {\n                            return '';\n                        } else {\n                            let presentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());\n                            let start = new Date(presentDate.getFullYear(), 0, 0);\n                            let diff = Number(presentDate) - Number(start);\n                            let oneDay = 1000 * 60 * 60 * 24;\n                            let day = Math.floor(diff / oneDay);\n                            return 'day ' + (day - 59);\n                        }\n                    },\n                },\n            },\n            labelSettings: {\n                leftLabel: 'TaskName',\n            },\n            projectStartDate: new Date('02/24/2021'),\n            projectEndDate: new Date('06/10/2021')\n        };\n  },\n  provide: {\n      gantt: [_syncfusion_ej2_vue_gantt__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"], _syncfusion_ej2_vue_gantt__WEBPACK_IMPORTED_MODULE_1__[\"DayMarkers\"]]\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/gantt/remote-data/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/gantt/remote-data/App.vue?vue&type=template&id=47d402c4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/gantt/remote-data/App.vue?vue&type=template&id=47d402c4& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-gantt\", {\n            ref: \"gantt\",\n            attrs: {\n              id: \"GanttContainer\",\n              dataSource: _vm.dataSource,\n              height: _vm.height,\n              taskFields: _vm.taskFields,\n              columns: _vm.columns,\n              treeColumnIndex: 1,\n              allowSelection: true,\n              gridLines: _vm.gridLines,\n              highlightWeekends: true,\n              timelineSettings: _vm.timelineSettings,\n              labelSettings: _vm.labelSettings,\n              includeWeekend: true,\n              projectStartDate: _vm.projectStartDate,\n              projectEndDate: _vm.projectEndDate,\n            },\n          }),\n          _vm._v(\" \"),\n          _vm._m(0),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticStyle: { float: \"right\", margin: \"10px\" } }, [\n      _vm._v(\"Source:\\n            \"),\n      _c(\n        \"a\",\n        {\n          attrs: {\n            href: \"https://en.wikipedia.org/wiki/Cereal_growth_staging_scales\",\n            target: \"_blank\",\n          },\n        },\n        [_vm._v(\"https://en.wikipedia.org/\")]\n      ),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the way of binding data to Gantt chart with remote service. The Gantt chart data source\\n        is bound to remote data using DataManager. This sample data helps to visualize the various phases of Barley\\n        harvesting.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n        The \"),\n        _c(\"code\", [_vm._v(\"dataSource\")]),\n        _vm._v(\n          \" property in Gantt chart can be assigned with the instance of\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"DataManager\")]),\n        _vm._v(\n          \" to bind remote data.\\n        The DataManager, which will act as an interface between the service endpoint and the Gantt chart, will require\\n        the below minimal information to interact with service endpoint properly.\\n        \"\n        ),\n      ]),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"DataManager->url\")]),\n        _vm._v(\" - Defines the service endpoint to fetch data\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"DataManager->adaptor\")]),\n        _vm._v(\n          \" - Defines the adaptor option. By default, ODataAdaptor is used for remote\\n            binding.\"\n        ),\n      ]),\n      _vm._v(\n        \"\\n        Adaptor is responsible for processing response and request from/to the service endpoint.\\n        \"\n      ),\n      _c(\"code\", [_vm._v(\"@syncfusion/ej2-data\")]),\n      _vm._v(\n        \"\\n        package provides some predefined adaptors which are designed to interact with particular service endpoints. They\\n        are,\\n        \"\n      ),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"UrlAdaptor\")]),\n        _vm._v(\n          \" - Use this to interact any remote services. This is the base adaptor for all remote\\n            based adaptors.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"ODataAdaptor\")]),\n        _vm._v(\" - Use this to interact with OData endpoints.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"ODataV4Adaptor\")]),\n        _vm._v(\" - Use this to interact with OData V4 endpoints.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"WebApiAdaptor\")]),\n        _vm._v(\n          \" - Use this to interact with Web API created under OData standards.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"li\", [\n        _c(\"code\", [_vm._v(\"WebMethodAdaptor\")]),\n        _vm._v(\" - Use this to interact with web methods.\"),\n      ]),\n      _vm._v(\n        \"\\n        In this demo, remote data is bound by assigning service data as an instance of \"\n      ),\n      _c(\"code\", [_vm._v(\"DataManager\")]),\n      _vm._v(\" to the\\n        \"),\n      _c(\"code\", [_vm._v(\"dataSource\")]),\n      _vm._v(\n        \"\\n        property.\\n        More information on the data binding can be found in this documentation section.\\n    \"\n      ),\n      _c(\"p\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Gantt component features are segregated into individual feature-wise modules. To use a selection support, inject the\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"Selection\")]),\n        _vm._v(\" module.\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/gantt/remote-data/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });