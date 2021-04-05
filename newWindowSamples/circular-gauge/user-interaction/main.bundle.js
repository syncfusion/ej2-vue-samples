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
/******/ 		"circular-gauge/user-interaction/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/user-interaction/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/user-interaction/App.vue":
/*!*********************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/App.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_74100682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=74100682& */ \"./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_74100682___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_74100682___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/user-interaction/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/user-interaction/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/user-interaction/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682&":
/*!****************************************************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_74100682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=74100682& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_74100682___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_74100682___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/user-interaction/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/user-interaction/main.js":
/*!*********************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/main.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/user-interaction/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/user-interaction/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        enablePointerDrag: true,\n        annotations: [{\n                content: '<div style=\"font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;\"><span>' + '70 MPH</span></div>',\n                angle: 180, zIndex: '1',\n                radius: '45%'\n            }],\n            endAngle: 140,\n            startAngle: 220,\n            lineStyle: { width: 0, color: '#9E9E9E' },\n            gaugeradius: '80%', \n            majorTicks: { useRangeColor: true },\n            minorTicks: { useRangeColor: true },\n            labelStyle: { useRangeColor: true },\n            ranges: [{\n                start: 0,\n                end: 40,\n                startWidth: 8, endWidth: 8,\n                radius: '108%',\n                color: '#30B32D'\n            }, {\n                start: 40,\n                end: 100,\n                startWidth: 8, endWidth: 8,\n                radius: '108%',\n                color: '#E5C31C'\n            }, {\n                start: 100, end: 120,\n                startWidth: 8, endWidth: 8,\n                radius: '108%',\n                color: '#F03E3E'\n            }],   \n            type: 'Marker', value: 70,\n            markerShape: 'InvertedTriangle',\n            pointerRadius: '110%',\n            markerHeight: 20,\n            color: '#E5C31C',\n            markerWidth: 20,\n            value2: 70,\n            pointerRadius2: '60%',\n            cap2: { radius: 10, border: { width: 5, color: '#E5C31C' } },\n            needleTail2: { length: '0%', color: '#E5C31C' },\n            color2: '#E5C31C',\n            markerWidth2: 5  \n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    dragMove: function(args){\n            if(isNaN(args.rangeIndex)) {\n                let content = '<div style=\"font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;\"><span>';\n                // let cotainerObj=document.getElementById('user-container');\n                let pointerValue = Math.round(args.currentValue);\n                document.getElementById('pointerValue').innerHTML = 'Pointer Value <span> &nbsp;&nbsp;&nbsp;' + pointerValue;\n                (document.getElementById('value')).value = pointerValue.toString();\n                this.$refs.circulargauge.ej2Instances.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');\n             }\n\n        },\n     dragEnd:function(args){\n            // let cotainerObj=document.getElementById('user-container');\n            let pointerValue = Math.round(args.currentValue);\n            if(isNaN(args.rangeIndex)) {\n            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);\n            }\n        },\n    pointerValue:function(args){\n            // let cotainerObj=document.getElementById('user-container');      \n            let pointerValue = parseInt((document.getElementById('value')).value, 10);\n            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);\n            document.getElementById('pointerValue').innerHTML = 'Pointer Value <span> &nbsp;&nbsp;&nbsp;' + pointerValue;        \n    },\n    enableDrag:function(args){\n        // let cotainerObj=document.getElementById('user-container');             \n        let value = (document.getElementById('enable')).checked;\n        this.$refs.circulargauge.ej2Instances.enablePointerDrag = value;        \n    },\n    enableRangeDrag:function(args){            \n        let value = (document.getElementById('rangedrag')).checked;\n        this.$refs.circulargauge.ej2Instances.enableRangeDrag = value;        \n    }\n}\n}));\n function setPointersValue(circulargauge, pointerValue) {\n        // let cotainerObj=document.getElementById('user-container');                    \n        let color = Object(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"getRangeColor\"])(pointerValue,circulargauge.axes[0].ranges, circulargauge.axes[0].pointers[0].color);\n        circulargauge.axes[0].pointers[0].color = color;\n        circulargauge.axes[0].pointers[1].color = color;\n        circulargauge.axes[0].pointers[0].animation.enable = false;\n        circulargauge.axes[0].pointers[1].animation.enable = false;\n        circulargauge.axes[0].pointers[0].needleTail.color = color;\n        circulargauge.axes[0].pointers[1].needleTail.color = color;\n        circulargauge.axes[0].pointers[0].cap.border.color = color;\n        circulargauge.axes[0].pointers[1].cap.border.color = color;\n        circulargauge.setPointerValue(0, 1, pointerValue);\n        circulargauge.setPointerValue(0, 0, pointerValue);\n        let content = '<div style=\"font-size: 14px;color:' + color + ';font-weight: lighter;font-style: oblique;\"><span>';\n        circulargauge.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');\n    }\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/user-interaction/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                load: _vm.load,\n                align: \"center\",\n                id: \"user-container\",\n                enablePointerDrag: _vm.enablePointerDrag,\n                dragMove: _vm.dragMove,\n                dragEnd: _vm.dragEnd\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        radius: _vm.gaugeradius,\n                        startAngle: _vm.startAngle,\n                        minimum: \"0\",\n                        maximum: \"120\",\n                        endAngle: _vm.endAngle,\n                        majorTicks: _vm.majorTicks,\n                        lineStyle: _vm.lineStyle,\n                        minorTicks: _vm.minorTicks,\n                        labelStyle: _vm.labelStyle,\n                        annotations: _vm.annotations,\n                        ranges: _vm.ranges\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              type: _vm.type,\n                              radius: _vm.pointerRadius,\n                              color: _vm.color,\n                              markerShape: _vm.markerShape,\n                              markerHeight: _vm.markerHeight,\n                              markerWidth: _vm.markerWidth\n                            }\n                          }),\n                          _vm._v(\" \"),\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value2,\n                              cap: _vm.cap2,\n                              radius: _vm.pointerRadius2,\n                              color: _vm.color2,\n                              needleTail: _vm.needleTail2,\n                              markerWidth: _vm.markerWidth\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n              _c(\"div\", [\n                _c(\"input\", {\n                  attrs: {\n                    type: \"range\",\n                    id: \"value\",\n                    value: \"70\",\n                    min: \"0\",\n                    max: \"120\"\n                  },\n                  on: {\n                    pointermove: _vm.pointerValue,\n                    touchmove: _vm.pointerValue,\n                    change: _vm.pointerValue\n                  }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n              _c(\"div\", [\n                _c(\"input\", {\n                  attrs: { type: \"checkbox\", id: \"enable\", checked: \"true\" },\n                  on: { change: _vm.enableDrag }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(2),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n              _c(\"div\", [\n                _c(\"input\", {\n                  attrs: { type: \"checkbox\", id: \"rangedrag\" },\n                  on: { change: _vm.enableRangeDrag }\n                })\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"30%\" } }, [\n      _c(\"div\", { attrs: { id: \"pointerValue\" } }, [\n        _vm._v(\"\\n            Pointer Value\\n            \"),\n        _c(\"span\", [_vm._v(\"   70\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"20%\" } }, [\n      _c(\"div\", { attrs: { id: \"enablePointer\" } }, [\n        _vm._v(\"Allow Pointer Drag\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"20%\" } }, [\n      _c(\"div\", { attrs: { id: \"enablePointer\" } }, [\n        _vm._v(\"Allow Range Drag\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample visualizes pointer drag in circular gauge. Position of pointer value can be changed by using\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"Pointer Value\")]),\n        _vm._v(\" and we can drag the pointer by enabling drag option.\\n    \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      In this example, you can see how to move pointers in gauge using drag and drop. Use\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"enablePointerDrag\")]),\n        _vm._v(\" property, to achieve this behavior.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      In this sample, you can drag the pointer using mouse or touch, the pointer value will be updated in an annotation placed\\n      in the gauge.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information on the gauge can be found in this\\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/user-interaction/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });