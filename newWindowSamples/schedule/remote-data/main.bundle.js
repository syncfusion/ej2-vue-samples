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
/******/ 		"schedule/remote-data/main": 0
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
/******/ 	deferredModules.push(["./Samples/schedule/remote-data/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/schedule/remote-data/App.vue":
/*!**********************************************!*\
  !*** ./Samples/schedule/remote-data/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2d74b2bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2d74b2bf& */ \"./Samples/schedule/remote-data/App.vue?vue&type=template&id=2d74b2bf&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/schedule/remote-data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2d74b2bf___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2d74b2bf___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/schedule/remote-data/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/schedule/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/schedule/remote-data/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/schedule/remote-data/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/schedule/remote-data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/schedule/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/schedule/remote-data/App.vue?vue&type=template&id=2d74b2bf&":
/*!*****************************************************************************!*\
  !*** ./Samples/schedule/remote-data/App.vue?vue&type=template&id=2d74b2bf& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2d74b2bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2d74b2bf& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/remote-data/App.vue?vue&type=template&id=2d74b2bf&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2d74b2bf___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2d74b2bf___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/schedule/remote-data/main.js":
/*!**********************************************!*\
  !*** ./Samples/schedule/remote-data/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/schedule/remote-data/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/schedule/remote-data/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/schedule/remote-data/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/remote-data/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-schedule */ \"./node_modules/@syncfusion/ej2-vue-schedule/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__[\"SchedulePlugin\"]);\n\nvar dataManager = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__[\"DataManager\"]({\n    url: 'https://services.syncfusion.com/vue/production/api/schedule',\n    adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__[\"WebApiAdaptor\"],\n    crossDomain: true\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            readonly: true,\n            eventSettings: { dataSource: dataManager },\n            currentView: 'Month'\n        }\n    },\n    provide: {\n        schedule: [_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__[\"Day\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__[\"Week\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__[\"WorkWeek\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__[\"Month\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_2__[\"Agenda\"]]\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/remote-data/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/remote-data/App.vue?vue&type=template&id=2d74b2bf&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/remote-data/App.vue?vue&type=template&id=2d74b2bf& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"schedule-vue-sample\" }, [\n    _c(\"div\", { staticClass: \"col-md-12 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-schedule\", {\n            attrs: {\n              id: \"Schedule\",\n              height: \"650px\",\n              eventSettings: _vm.eventSettings,\n              currentView: _vm.currentView,\n              readonly: _vm.readonly,\n            },\n          }),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This demo showcases the way of binding remote services to Scheduler component. Here, the DataManager is used to\\n            bind the remote data with Schedule.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Scheduler can be bound to remote services by assigning the\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"dataSource\")]),\n        _vm._v(\" property with the instance of\\n            \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href: \"http://ej2.syncfusion.com/documentation/data/api-dataManager.html\",\n              },\n            },\n            [_vm._v(\"DataManager\")]\n          ),\n        ]),\n        _vm._v(\".\\n        \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The DataManager here acts as an interface between the service endpoint and the Schedule, and will require the\\n            below minimal information to interact with the service endpoint properly.\\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"url\")]),\n          _vm._v(\n            \" - Defines the service endpoint from where the data needs to be fetched\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"adaptor\")]),\n          _vm._v(\n            \" - Defines the adaptor option. By default,\\n                \"\n          ),\n          _c(\"code\", [_vm._v(\"ODataAdaptor\")]),\n          _vm._v(\" is used for remote binding.\"),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Adaptor is responsible for processing response and request from/to the service endpoint.\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"@syncfusion/ej2-data\")]),\n        _vm._v(\n          \" package provides some predefined adaptors which are designed to interact\\n            with particular service endpoints. They are as follows,\\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"UrlAdaptor\")]),\n          _vm._v(\n            \" - Use this to interact with any remote services. This is the base adaptor for\\n                all the remote based adaptors.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ODataAdaptor\")]),\n          _vm._v(\" - Use this to interact with OData endpoints.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ODataV4Adaptor\")]),\n          _vm._v(\" - Use this to interact with OData V4 endpoints.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"WebApiAdaptor\")]),\n          _vm._v(\n            \" - Use this to interact with Web API created under OData standards.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"WebMethodAdaptor\")]),\n          _vm._v(\" - Use this to interact with web methods.\"),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/remote-data/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });