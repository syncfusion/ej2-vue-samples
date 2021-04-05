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
/******/ 		"circular-gauge/gradient-color/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/gradient-color/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/gradient-color/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/circular-gauge/gradient-color/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2fbd6410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2fbd6410& */ \"./Samples/circular-gauge/gradient-color/App.vue?vue&type=template&id=2fbd6410&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/gradient-color/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2fbd6410___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2fbd6410___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/gradient-color/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/gradient-color/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/gradient-color/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/circular-gauge/gradient-color/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/gradient-color/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/gradient-color/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/gradient-color/App.vue?vue&type=template&id=2fbd6410&":
/*!**************************************************************************************!*\
  !*** ./Samples/circular-gauge/gradient-color/App.vue?vue&type=template&id=2fbd6410& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2fbd6410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2fbd6410& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/gradient-color/App.vue?vue&type=template&id=2fbd6410&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2fbd6410___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2fbd6410___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/gradient-color/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/gradient-color/main.js":
/*!*******************************************************!*\
  !*** ./Samples/circular-gauge/gradient-color/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/gradient-color/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/gradient-color/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/gradient-color/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/gradient-color/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data:function(){\n    return{\n            gaugeRadius: '80%',\n            startAngle: 210,\n            endAngle: 150,\n            majorTicks: { width: 0, interval: 10 },\n            lineStyle: { width: 0 },\n            minorTicks: {\n                width: 0\n            },\n            start: 0,  end: 120, startWidth: 18, endWidth: 18, color: '#E63B86',\n            roundedCornerRadius: 10,\n            rangeLinearGradient:\n             {\n                startValue: '0%',\n                endValue: '100%',\n                colorStop: [ \n                   { color: '#9E40DC', offset: '0%', opacity: 0.9 },\n                   { color: '#E63B86', offset: '70%', opacity: 0.9 },]\n             },\n            rangeRadialGradient: {\n                radius: '50%',\n                innerPosition: { x: '50%', y: '50%' },\n                outerPosition: { x: '50%', y: '50%' },\n                colorStop: [\n                     { color: '#9E40DC', offset: '90%', opacity: 0.9 },\n                     { color: '#E63B86', offset: '160%', opacity: 0.9 }]\n             },\n            labelStyle: { font: { fontFamily: 'Roboto',\n            size: '12px',\n            fontWeight: 'Regular' }, offset: 10 },\n            value: 65,\n            color: '#E63B86',\n            pointerRadius: '85%',\n            pointerWidth: 12,\n            cap: { radius: 12 , border: {color: '#E63B86', width: 2.5}, color: 'white' },\n            needleTail: { length: '0%'},\n            animation: {enable : false},\n            needleStartWidth: 2,\n            pointerLinearGradient:\n            {\n                startValue: '0%',\n                endValue: '100%',\n                colorStop: [\n                   { color: '#FEF3F9', offset: '0%', opacity: 0.9 },\n                    { color: '#E63B86', offset: '70%', opacity: 0.9 }]\n            },\n            pointerRadialGradient:{\n                radius: '50%',\n                innerPosition: { x: '50%', y: '50%' },\n                outerPosition: { x: '50%', y: '50%' },\n                colorStop: [ \n                    { color: '#FEF3F9', offset: '0%', opacity: 0.9 },\n                    { color: '#E63B86', offset: '60%', opacity: 0.9 }]\n            },\n            selectGradientType: [\"Linear Gradient\", \"Radial Gradient\"],\n            selectElement: [\"Range\", \"Pointer\"],\n            width: 145,         \n    }\n   },\n   provide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Gradient\"]]\n   },\n   \n \n   /* custom code start */\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    changeGradient: function() {\n        if (gradientType.value === \"Radial Gradient\" && element.value === \"Range\") {\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = this.rangeRadialGradient;\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;\n            this.$refs.circulargauge.ej2Instances.refresh();\n        }\n        if (gradientType.value === \"Linear Gradient\" &&  element.value === \"Range\") {\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = this.rangeLinearGradient;\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;\n            this.$refs.circulargauge.ej2Instances.refresh();\n        }\n        if (gradientType.value === \"Radial Gradient\" && element.value=== \"Pointer\") {\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = this.pointerRadialGradient;\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;\n            this.$refs.circulargauge.ej2Instances.refresh();\n        }\n        if (gradientType.value === \"Linear Gradient\" && element.value === \"Pointer\") {\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].linearGradient = this.pointerLinearGradient;\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].radialGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].linearGradient = null;\n            this.$refs.circulargauge.ej2Instances.axes[0].ranges[0].radialGradient = null;\n            this.$refs.circulargauge.ej2Instances.refresh();\n        }   \n    },\n   \n    changeGradientselect: function(args) {\n        this.changeGradient();\n    },\n    changeElement: function(args) {\n        this.changeGradient();  \n    },    \n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/gradient-color/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/gradient-color/App.vue?vue&type=template&id=2fbd6410&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/gradient-color/App.vue?vue&type=template&id=2fbd6410& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\"div\", { staticClass: \"content-wrapper\" }, [\n        _c(\n          \"div\",\n          { staticStyle: { \"margin-top\": \"25px\" } },\n          [\n            _c(\n              \"ejs-circulargauge\",\n              {\n                ref: \"circulargauge\",\n                staticStyle: { display: \"block\" },\n                attrs: { load: _vm.load, align: \"center\", id: \"gauge\" }\n              },\n              [\n                _c(\n                  \"e-axes\",\n                  [\n                    _c(\n                      \"e-axis\",\n                      {\n                        attrs: {\n                          radius: _vm.gaugeRadius,\n                          startAngle: _vm.startAngle,\n                          endAngle: _vm.endAngle,\n                          minimum: 0,\n                          maximum: 100,\n                          majorTicks: _vm.majorTicks,\n                          lineStyle: _vm.lineStyle,\n                          minorTicks: _vm.minorTicks,\n                          labelStyle: _vm.labelStyle\n                        }\n                      },\n                      [\n                        _c(\n                          \"e-pointers\",\n                          [\n                            _c(\"e-pointer\", {\n                              attrs: {\n                                value: _vm.value,\n                                radius: _vm.pointerRadius,\n                                pointerWidth: _vm.pointerWidth,\n                                needleStartWidth: _vm.needleStartWidth,\n                                cap: _vm.cap,\n                                color: _vm.color,\n                                needleTail: _vm.needleTail,\n                                animation: _vm.animation\n                              }\n                            })\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-ranges\",\n                          [\n                            _c(\"e-range\", {\n                              attrs: {\n                                start: _vm.start,\n                                end: _vm.end,\n                                startWidth: _vm.startWidth,\n                                roundedCornerRadius: _vm.roundedCornerRadius,\n                                endWidth: _vm.endWidth,\n                                color: _vm.color,\n                                linearGradient: _vm.rangeLinearGradient\n                              }\n                            })\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      \"margin-top\": \"20px\",\n                      \"margin-left\": \"-15px\"\n                    }\n                  },\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"gradientType\",\n                      attrs: {\n                        id: \"gradientType\",\n                        dataSource: _vm.selectGradientType,\n                        width: _vm.width,\n                        index: \"0\",\n                        change: _vm.changeGradientselect\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      \"margin-top\": \"30px\",\n                      \"margin-left\": \"-15px\"\n                    }\n                  },\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"element\",\n                      attrs: {\n                        id: \"element\",\n                        dataSource: _vm.selectElement,\n                        width: _vm.width,\n                        index: \"0\",\n                        change: _vm.changeElement\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            \"margin-top\": \"30px\",\n            \"margin-left\": \"-15px\",\n            width: \"120px\"\n          }\n        },\n        [_vm._v(\" Gradient Type \")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\n        \"div\",\n        { staticStyle: { \"margin-top\": \"30px\", \"margin-left\": \"-15px\" } },\n        [_vm._v(\"Elements\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n         This sample shows how linear gradient color and radial gradient color are applied to the circular gauge elements.\\n   \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The circular gauge supports gradient coloring in a linear or radial manner. The gradient type can be changed using the \"\n        ),\n        _c(\"b\", [_vm._v(\"Gradient Type\")]),\n        _vm._v(\n          \" dropdown list in the properties panel. In the same way, the element for which the gradient color should be applied is decided by the \"\n        ),\n        _c(\"b\", [_vm._v(\"Elements\")]),\n        _vm._v(\" dropdown list.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _c(\"b\", [_vm._v(\"Injecting Module\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"To apply gradient coloring in the circular gauge, we need to inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Gradient\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/gradient-color/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });