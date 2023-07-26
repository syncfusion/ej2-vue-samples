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
/******/ 		"kanban/dialog-addedit-content/main": 0
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
/******/ 	deferredModules.push(["./Samples/kanban/dialog-addedit-content/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/kanban/dialog-addedit-content/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/kanban/dialog-addedit-content/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_d7702950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d7702950& */ \"./Samples/kanban/dialog-addedit-content/App.vue?vue&type=template&id=d7702950&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/kanban/dialog-addedit-content/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_d7702950___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_d7702950___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/kanban/dialog-addedit-content/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/kanban/dialog-addedit-content/App.vue?");

/***/ }),

/***/ "./Samples/kanban/dialog-addedit-content/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/kanban/dialog-addedit-content/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/kanban/dialog-addedit-content/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/kanban/dialog-addedit-content/App.vue?");

/***/ }),

/***/ "./Samples/kanban/dialog-addedit-content/App.vue?vue&type=template&id=d7702950&":
/*!**************************************************************************************!*\
  !*** ./Samples/kanban/dialog-addedit-content/App.vue?vue&type=template&id=d7702950& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d7702950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=d7702950& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/kanban/dialog-addedit-content/App.vue?vue&type=template&id=d7702950&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d7702950___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d7702950___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/kanban/dialog-addedit-content/App.vue?");

/***/ }),

/***/ "./Samples/kanban/dialog-addedit-content/main.js":
/*!*******************************************************!*\
  !*** ./Samples/kanban/dialog-addedit-content/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/kanban/dialog-addedit-content/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/kanban/dialog-addedit-content/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/kanban/dialog-addedit-content/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/kanban/dialog-addedit-content/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    var statusData = [\n      { text: \"Open\" },\n      { text: \"InProgress\" },\n      { text: \"Testing\" },\n      { text: \"Close\" }\n    ];\n    var priorityData = [\"Low\", \"Normal\", \"Critical\", \"Release Breaker\", \"High\"];\n    var assigneeData = [\n      \"Nancy Davloio\",\n      \"Andrew Fuller\",\n      \"Janet Leverling\",\n      \"Steven walker\",\n      \"Robert King\",\n      \"Margaret hamilt\",\n      \"Michael Suyama\"\n    ];\n    return {\n      dataSource1: statusData,\n      dataSource2: assigneeData,\n      dataSource3: priorityData,\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/kanban/dialog-addedit-content/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/kanban/dialog-addedit-content/App.vue?vue&type=template&id=d7702950&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/kanban/dialog-addedit-content/App.vue?vue&type=template&id=d7702950& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"table\", [\n      _c(\"tbody\", [\n        _c(\"tr\", [\n          _c(\"td\", { staticClass: \"e-label\" }, [_vm._v(\"ID\")]),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _c(\"div\", { staticClass: \"e-float-input e-control-wrapper\" }, [\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.data.Id,\n                    expression: \"data.Id\",\n                  },\n                ],\n                staticClass: \"e-field\",\n                attrs: { id: \"Id\", name: \"Id\", type: \"text\", disabled: \"\" },\n                domProps: { value: _vm.data.Id },\n                on: {\n                  input: function ($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.$set(_vm.data, \"Id\", $event.target.value)\n                  },\n                },\n              }),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\"td\", { staticClass: \"e-label\" }, [_vm._v(\"Status\")]),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-dropdownlist\", {\n                staticClass: \"e-field\",\n                attrs: {\n                  id: \"Status\",\n                  name: \"Status\",\n                  dataSource: _vm.dataSource1,\n                  placeholder: \"Status\",\n                },\n                model: {\n                  value: _vm.data.Status,\n                  callback: function ($$v) {\n                    _vm.$set(_vm.data, \"Status\", $$v)\n                  },\n                  expression: \"data.Status\",\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\"td\", { staticClass: \"e-label\" }, [_vm._v(\"Assignee\")]),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-dropdownlist\", {\n                staticClass: \"e-field\",\n                attrs: {\n                  id: \"Assignee\",\n                  name: \"Assignee\",\n                  dataSource: _vm.dataSource2,\n                  placeholder: \"Assignee\",\n                },\n                model: {\n                  value: _vm.data.Assignee,\n                  callback: function ($$v) {\n                    _vm.$set(_vm.data, \"Assignee\", $$v)\n                  },\n                  expression: \"data.Assignee\",\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\"td\", { staticClass: \"e-label\" }, [_vm._v(\"Priority\")]),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-dropdownlist\", {\n                staticClass: \"e-field\",\n                attrs: {\n                  type: \"text\",\n                  name: \"Priority\",\n                  id: \"Priority\",\n                  popupHeight: \"300px\",\n                  placeholder: \"Priority\",\n                  dataSource: _vm.dataSource3,\n                },\n                model: {\n                  value: _vm.data.Priority,\n                  callback: function ($$v) {\n                    _vm.$set(_vm.data, \"Priority\", $$v)\n                  },\n                  expression: \"data.Priority\",\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\"td\", { staticClass: \"e-label\" }, [_vm._v(\"Summary\")]),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _c(\"div\", { staticClass: \"e-float-input e-control-wrapper\" }, [\n              _c(\"textarea\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.data.Summary,\n                    expression: \"data.Summary\",\n                  },\n                ],\n                staticClass: \"e-field\",\n                attrs: { type: \"text\", name: \"Summary\", id: \"Summary\" },\n                domProps: { value: _vm.data.Summary },\n                on: {\n                  input: function ($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.$set(_vm.data, \"Summary\", $event.target.value)\n                  },\n                },\n              }),\n            ]),\n          ]),\n        ]),\n      ]),\n    ]),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/kanban/dialog-addedit-content/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });