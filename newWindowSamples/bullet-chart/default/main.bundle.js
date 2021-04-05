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
/******/ 		"bullet-chart/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/bullet-chart/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/bullet-chart/default/App.vue":
/*!**********************************************!*\
  !*** ./Samples/bullet-chart/default/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7708c4eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7708c4eb& */ \"./Samples/bullet-chart/default/App.vue?vue&type=template&id=7708c4eb&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/bullet-chart/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7708c4eb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7708c4eb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/bullet-chart/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/bullet-chart/default/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/default/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/bullet-chart/default/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/bullet-chart/default/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/default/App.vue?vue&type=template&id=7708c4eb&":
/*!*****************************************************************************!*\
  !*** ./Samples/bullet-chart/default/App.vue?vue&type=template&id=7708c4eb& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7708c4eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7708c4eb& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/default/App.vue?vue&type=template&id=7708c4eb&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7708c4eb___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7708c4eb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/default/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/default/main.js":
/*!**********************************************!*\
  !*** ./Samples/bullet-chart/default/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/bullet-chart/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/default/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/default/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/bullet-chart/default/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"BulletChartPlugin\"]);\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))\n  .replace(/-dark/i, \"Dark\")\n  .replace(/light/i, \"Light\")\n  .replace(/contrast/i, \"Contrast\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      margin1: { left: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 10 : 62 },\n      margin2: { left: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 10 : 80 },\n      margin3: { left: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 10 : 22 }, \n      margin4: { left: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 10 : 22 },\n      margin5: { left: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 10 : 8 },\n      theme: theme,\n      titlePosition: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'Top' : 'Left',\n      tooltip: {\n        enable: true\n      },\n      data1: [{ value: 270, target: 250 }],\n      data2: [{ value: 23, target: 27 }],\n      data3: [{ value: 350, target: 550 }],\n      data4: [{ value: 1600, target: 2100 }],\n      data5: [{ value: 4.9, target: 4 }],\n      animation: { enable: false },\n      minimum1: 0,\n      maximum1: 300,\n      interval1: 50,\n      minimum2: 0,\n      maximum2: 30,\n      interval2: 5,\n      minimum3: 0,\n      maximum3: 600,\n      interval3: 100,\n      minimum4: 0,\n      maximum4: 2500,\n      interval4: 500,\n      minimum5: 0,\n      maximum5: 5,\n      interval5: 1\n    };\n  },\n\n  provide: {\n    bulletChart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"BulletTooltip\"]]\n  },\n  methods: {}\n}));\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/default/App.vue?vue&type=template&id=7708c4eb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/bullet-chart/default/App.vue?vue&type=template&id=7708c4eb& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-bulletchart\",\n          {\n            attrs: {\n              id: \"revenue\",\n              margin: _vm.margin1,\n              theme: _vm.theme,\n              tooltip: _vm.tooltip,\n              dataSource: _vm.data1,\n              valueField: \"value\",\n              targetField: \"target\",\n              animation: _vm.animation,\n              width: _vm.width,\n              minimum: _vm.minimum1,\n              maximum: _vm.maximum1,\n              interval: _vm.interval1,\n              title: \"Revenue\",\n              labelFormat: \"${value}K\",\n              subtitle: \"U.S. $\",\n              titlePosition: _vm.titlePosition\n            }\n          },\n          [\n            _c(\n              \"e-bullet-range-collection\",\n              [\n                _c(\"e-bullet-range\", { attrs: { end: \"150\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"250\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"300\" } })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-bulletchart\",\n          {\n            attrs: {\n              id: \"profit\",\n              margin: _vm.margin2,\n              theme: _vm.theme,\n              tooltip: _vm.tooltip,\n              dataSource: _vm.data2,\n              valueField: \"value\",\n              targetField: \"target\",\n              animation: _vm.animation,\n              width: _vm.width,\n              minimum: _vm.minimum2,\n              maximum: _vm.maximum2,\n              interval: _vm.interval2,\n              title: \"Profit\",\n              labelFormat: \"{value}%\",\n              subtitle: \"%\",\n              titlePosition: _vm.titlePosition\n            }\n          },\n          [\n            _c(\n              \"e-bullet-range-collection\",\n              [\n                _c(\"e-bullet-range\", { attrs: { end: \"20\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"25\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"30\" } })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-bulletchart\",\n          {\n            attrs: {\n              id: \"order\",\n              margin: _vm.margin3,\n              theme: _vm.theme,\n              tooltip: _vm.tooltip,\n              dataSource: _vm.data3,\n              valueField: \"value\",\n              targetField: \"target\",\n              animation: _vm.animation,\n              width: _vm.width,\n              minimum: _vm.minimum3,\n              maximum: _vm.maximum3,\n              interval: _vm.interval3,\n              title: \"Avg Order Size\",\n              labelFormat: \"${value}\",\n              subtitle: \"U.S. $\",\n              titlePosition: _vm.titlePosition\n            }\n          },\n          [\n            _c(\n              \"e-bullet-range-collection\",\n              [\n                _c(\"e-bullet-range\", { attrs: { end: \"350\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"500\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"600\" } })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-bulletchart\",\n          {\n            attrs: {\n              id: \"customer\",\n              margin: _vm.margin4,\n              theme: _vm.theme,\n              tooltip: _vm.tooltip,\n              dataSource: _vm.data4,\n              valueField: \"value\",\n              targetField: \"target\",\n              animation: _vm.animation,\n              width: _vm.width,\n              minimum: _vm.minimum4,\n              maximum: _vm.maximum4,\n              interval: _vm.interval4,\n              enableGroupSeparator: \"{true}\",\n              title: \"New Customers\",\n              subtitle: \"Count\",\n              titlePosition: _vm.titlePosition\n            }\n          },\n          [\n            _c(\n              \"e-bullet-range-collection\",\n              [\n                _c(\"e-bullet-range\", { attrs: { end: \"1700\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"2000\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"2500\" } })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-bulletchart\",\n          {\n            attrs: {\n              id: \"rating\",\n              margin: _vm.margin5,\n              theme: _vm.theme,\n              tooltip: _vm.tooltip,\n              dataSource: _vm.data5,\n              valueField: \"value\",\n              targetField: \"target\",\n              animation: _vm.animation,\n              width: _vm.width,\n              minimum: _vm.minimum5,\n              maximum: _vm.maximum5,\n              interval: _vm.interval5,\n              title: \"Cust Satisfication\",\n              subtitle: \"Top Rating of 5\",\n              titlePosition: _vm.titlePosition\n            }\n          },\n          [\n            _c(\n              \"e-bullet-range-collection\",\n              [\n                _c(\"e-bullet-range\", { attrs: { end: \"3.7\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"4.2\" } }),\n                _vm._v(\" \"),\n                _c(\"e-bullet-range\", { attrs: { end: \"5\" } })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates a default bullet chart to compare the feature (value) bar with comparative (target) bar. It includes variety of configurations to change the look and feel of the chart.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"Tooltip is enabled in this example, to see the tooltip in action, hover a feature bar or comparative bar on the bullet chart.\"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });