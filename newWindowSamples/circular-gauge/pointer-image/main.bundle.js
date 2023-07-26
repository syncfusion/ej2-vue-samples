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
/******/ 		"circular-gauge/pointer-image/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/pointer-image/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/pointer-image/App.vue":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/pointer-image/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_e0c33326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=e0c33326& */ \"./Samples/circular-gauge/pointer-image/App.vue?vue&type=template&id=e0c33326&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/pointer-image/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_e0c33326___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_e0c33326___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/pointer-image/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer-image/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/pointer-image/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/circular-gauge/pointer-image/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer-image/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer-image/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/pointer-image/App.vue?vue&type=template&id=e0c33326&":
/*!*************************************************************************************!*\
  !*** ./Samples/circular-gauge/pointer-image/App.vue?vue&type=template&id=e0c33326& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e0c33326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=e0c33326& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer-image/App.vue?vue&type=template&id=e0c33326&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e0c33326___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e0c33326___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer-image/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/pointer-image/main.js":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/pointer-image/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/pointer-image/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer-image/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer-image/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/pointer-image/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n    title: 'Short Put Distance',\n    titleStyle: {\n            size: '18px'\n        },\n    centerY: '57%',\n    annotations: [{\n            content: '12 M', radius: '108%', angle: 98, zIndex: '1'\n        }, {\n            content: '11 M', radius: '80%', angle: 81, zIndex: '1'\n        }, {\n            content: '10 M', radius: '50%', angle: 69, zIndex: '1'\n        }, {\n            content: 'Doe', radius: '108%', angle: 190, zIndex: '1'\n        }, {\n            content: 'Almaida', radius: '80%', angle: 185, zIndex: '1'\n        }, {\n            content: 'John', radius: '50%', angle: 180, zIndex: '1'\n        }],\n        lineStyle: {\n            width: 0, color: '#1d1d1d'\n        },\n        gaugeRadius: '90%',\n        labelStyle: {\n            font: {\n                    size: '0px'\n            }\n        }, \n        majorTicks: {\n            interval: 20, width: 0,\n        }, \n        minorTicks: {\n            width: 0,\n        },\n        startAngle: 200, endAngle: 130,\n        ranges: [{\n                start: 0, end: 12, radius: '115%',\n                color: '#01aebe', startWidth: 25, endWidth: 25\n            }, {\n                start: 0, end: 11, radius: '85%',\n                color: '#3bceac', startWidth: 25, endWidth: 25\n            }, {\n                start: 0, end: 10, radius: '55%',\n                color: '#ee4266', startWidth: 25, endWidth: 25\n        }],\n        type1: 'Marker', value1: 12, markerShape1: 'Image',\n        imageUrl1: './../../source/circular-gauge/images/foot-ball.png',\n        pointerRadius1: '108%', markerWidth1: 28, markerHeight1: 28,\n        animation1: { duration: 1500 },\n\n        type2: 'Marker', value2: 11, markerShape2: 'Image',\n        imageUrl2: './../../source/circular-gauge/images/basket-ball.png',\n        pointerRadius2: '78%', markerWidth2: 28, markerHeight2: 28,\n        animation2: { duration: 1200 },\n\n        type3: 'Marker', value3: 10, markerShape3: 'Image',\n        imageUrl3: './../../source/circular-gauge/images/golf-ball.png',\n        pointerRadius3: '48%', markerWidth3: 28, markerHeight3: 28,\n        animation3: { duration: 900 },\n\n        type4: 'Marker', value4: 12, markerShape4: 'Image',\n        imageUrl4: './../../source/circular-gauge/images/athletics.png',\n        pointerRadius4: '0%', markerWidth4: 90, markerHeight4: 90,\n        animation4: { duration: 0 },\n\n        type5: 'Marker', value5: 0.1, markerShape5: 'Image',\n        imageUrl5: './../../source/circular-gauge/images/girl.png',\n        pointerRadius5: '108%', markerWidth5: 28, markerHeight5: 28,\n        animation5: { duration: 1500 },\n\n        type6: 'Marker', value6: 0.1, markerShape6: 'Image',\n        imageUrl6: './../../source/circular-gauge/images/man-one.png',\n        pointerRadius6: '78%', markerWidth6: 28, markerHeight6: 28,\n        animation6: { duration: 1500 },\n\n        type7: 'Marker', value7: 0.1, markerShape7: 'Image',\n        imageUrl7: './../../source/circular-gauge/images/man-two.png',\n        pointerRadius7: '48%', markerWidth7: 28, markerHeight7: 28,\n        animation7: { duration: 1500 }\n    }\n},\n/* custom code start */\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    }\n},\n/* custom code end */\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer-image/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer-image/App.vue?vue&type=template&id=e0c33326&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/pointer-image/App.vue?vue&type=template&id=e0c33326& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-circulargauge\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              load: _vm.load,\n              align: \"center\",\n              id: \"pointer-container\",\n              title: _vm.title,\n              titleStyle: _vm.titleStyle,\n              centerY: _vm.centerY\n            }\n          },\n          [\n            _c(\n              \"e-axes\",\n              [\n                _c(\n                  \"e-axis\",\n                  {\n                    attrs: {\n                      radius: _vm.gaugeRadius,\n                      startAngle: _vm.startAngle,\n                      minimum: \"0\",\n                      maximum: \"14\",\n                      endAngle: _vm.endAngle,\n                      majorTicks: _vm.majorTicks,\n                      lineStyle: _vm.lineStyle,\n                      minorTicks: _vm.minorTicks,\n                      labelStyle: _vm.labelStyle,\n                      annotations: _vm.annotations,\n                      ranges: _vm.ranges\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-pointers\",\n                      [\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type1,\n                            value: _vm.value1,\n                            radius: _vm.pointerRadius1,\n                            markerShape: _vm.markerShape1,\n                            imageUrl: _vm.imageUrl1,\n                            markerWidth: _vm.markerWidth1,\n                            markerHeight: _vm.markerHeight1,\n                            animation: _vm.animation1\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type2,\n                            value: _vm.value2,\n                            radius: _vm.pointerRadius2,\n                            markerShape: _vm.markerShape2,\n                            imageUrl: _vm.imageUrl2,\n                            markerWidth: _vm.markerWidth2,\n                            markerHeight: _vm.markerHeight2,\n                            animation: _vm.animation2\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type3,\n                            value: _vm.value3,\n                            radius: _vm.pointerRadius3,\n                            markerShape: _vm.markerShape3,\n                            imageUrl: _vm.imageUrl3,\n                            markerWidth: _vm.markerWidth3,\n                            markerHeight: _vm.markerHeight3,\n                            animation: _vm.animation3\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type4,\n                            value: _vm.value4,\n                            radius: _vm.pointerRadius4,\n                            markerShape: _vm.markerShape4,\n                            imageUrl: _vm.imageUrl4,\n                            markerWidth: _vm.markerWidth4,\n                            markerHeight: _vm.markerHeight4,\n                            animation: _vm.animation4\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type5,\n                            value: _vm.value5,\n                            radius: _vm.pointerRadius5,\n                            markerShape: _vm.markerShape5,\n                            imageUrl: _vm.imageUrl5,\n                            markerWidth: _vm.markerWidth5,\n                            markerHeight: _vm.markerHeight5,\n                            animation: _vm.animation5\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type6,\n                            value: _vm.value6,\n                            radius: _vm.pointerRadius6,\n                            markerShape: _vm.markerShape6,\n                            imageUrl: _vm.imageUrl6,\n                            markerWidth: _vm.markerWidth6,\n                            markerHeight: _vm.markerHeight6,\n                            animation: _vm.animation6\n                          }\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            type: _vm.type7,\n                            value: _vm.value7,\n                            radius: _vm.pointerRadius7,\n                            markerShape: _vm.markerShape7,\n                            imageUrl: _vm.imageUrl7,\n                            markerWidth: _vm.markerWidth7,\n                            markerHeight: _vm.markerHeight7,\n                            animation: _vm.animation7\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the short-put distance covered by the athletes by using the image pointer in gauge.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to use the pointer image for an axis in the circular gauge. Pointer value points out the\\n        actual value set in the \"\n        ),\n        _c(\"b\", [_vm._v(\"Circular Gauge\")]),\n        _vm._v(\". You can customize the \"),\n        _c(\"code\", [_vm._v(\"pointers\")]),\n        _vm._v(\" to improve the\\n        appearance of \"),\n        _c(\"b\", [_vm._v(\"Gauge\")]),\n        _vm._v(\".\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this sample, a pointer with image is used to show the short-put distance thrown by the player.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the pointers can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer-image/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });