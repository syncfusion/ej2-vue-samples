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
/******/ 		"circular-gauge/multiple-axis/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/multiple-axis/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/multiple-axis/App.vue":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/multiple-axis/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f5975240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f5975240& */ \"./Samples/circular-gauge/multiple-axis/App.vue?vue&type=template&id=f5975240&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/multiple-axis/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f5975240___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f5975240___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/multiple-axis/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/multiple-axis/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/multiple-axis/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/circular-gauge/multiple-axis/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/multiple-axis/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/multiple-axis/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/multiple-axis/App.vue?vue&type=template&id=f5975240&":
/*!*************************************************************************************!*\
  !*** ./Samples/circular-gauge/multiple-axis/App.vue?vue&type=template&id=f5975240& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f5975240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f5975240& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/multiple-axis/App.vue?vue&type=template&id=f5975240&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f5975240___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f5975240___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/multiple-axis/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/multiple-axis/main.js":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/multiple-axis/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/multiple-axis/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/multiple-axis/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/multiple-axis/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/multiple-axis/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        title: 'Gauge with Multiple Axes',\n        titleStyle: { color: 'gray', size: '16px' },\n        lineStyle: { width: 1.5, color: ' #9E9E9E' },\n        gaugeradius: '95%',\n        labelStyle: {\n                position: 'Inside', autoAngle: true,\n                hiddenLabel: 'None',\n        }, majorTicks: {\n                position: 'Inside',\n                width: 2, height: 10, color: '#757575'\n        }, minorTicks: {\n                position: 'Inside', width: 2,\n                height: 5, color: '#757575'\n        },\n        startAngle: 220, endAngle: 140,\n        value: 80, pointerRadius: '100%', color: '#333333',\n        markerHeight: 15, markerWidth: 15, type: 'Marker',\n        markerShape: 'Triangle',\n        lineStyle2: { width: 1.5, color: '#E84011' }, gaugeradius2: '95%',\n        labelStyle2: {\n                position: 'Outside', autoAngle: true,\n                hiddenLabel: 'None', font: { color: '#E84011' }\n        }, majorTicks2: {\n                position: 'Outside', width: 2, height: 10,\n                color: '#E84011'\n        }, minorTicks2: {\n                position: 'Outside', width: 2,\n                height: 5, color: '#E84011'\n        },\n        startAngle2: 220, endAngle2: 140,\n        value2: 120, pointerRadius2: '100%', color2: '#C62E0A',\n        markerHeight2: 15, markerWidth2: 15, type2: 'Marker',\n        markerShape2: 'InvertedTriangle',\n        axisindexdata:[\n            { Id:'0', level:'Axis 1'},\n            { Id:'1', level:'Axis 2'}],\n        axisindexfields:{ text: 'level', value: 'Id' },\n        axisindexwidth:120,\n        axisdirectiondata:['ClockWise','AntiClockWise'],\n        axisdirectionwidth:120\n    }\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    changeAxisindex:function(args){\n            let axisIndex = parseInt(this.$refs.axis.ej2Instances.value);\n            // let cotainerObj=document.getElementById('axis-container');\n            // let direction=document.getElementById('axisDirection');\n            // let axis=document.getElementById('axisIndex');\n            axisIndex = this.$refs.axis.ej2Instances.value;\n            this.$refs.direction.ej2Instances.value = this.$refs.circulargauge.ej2Instances.axes[axisIndex].direction;\n            let startAngle = this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle;\n            let endAngle = this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle;\n            document.getElementById('start').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + startAngle;\n            document.getElementById('end').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + endAngle;\n            (document.getElementById('startAngle')).value = startAngle.toString();\n            (document.getElementById('endAngle')).value = endAngle.toString();        \n    },\n    changeAxisdirection: function(args){\n             let axisIndex = parseInt(this.$refs.axis.ej2Instances.value); \n            // let cotainerObj=document.getElementById('axis-container');\n            // let direction=document.getElementById('axisDirection');\n            this.$refs.circulargauge.ej2Instances.axes[axisIndex].direction = this.$refs.direction.ej2Instances.value.toString();\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;\n            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;\n            this.$refs.circulargauge.ej2Instances.refresh();        \n    },\n    startAnglechange:function(args){\n             let axisIndex = parseInt(this.$refs.axis.ej2Instances.value);       \n            // let cotainerObj=document.getElementById('axis-container');      \n            let value = parseInt((document.getElementById('startAngle')).value, 10);\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;\n            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;\n            this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle = value;\n            document.getElementById('start').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + value;\n            this.$refs.circulargauge.ej2Instances.axes[axisIndex].labelStyle.hiddenLabel =\n                Object(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"isCompleteAngle\"])(this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle, this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle) ?\n                    'First' : 'None';\n            this.$refs.circulargauge.ej2Instances.refresh();        \n    },\n    endAnglechange:function(args){\n           let axisIndex = parseInt(this.$refs.axis.ej2Instances.value);       \n            // let cotainerObj=document.getElementById('axis-container');    \n            let value = parseInt((document.getElementById('endAngle')).value, 10);\n            this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;\n            this.$refs.circulargauge.ej2Instances.axes[1].pointers[0].animation.enable = false;\n            this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle = value;\n            document.getElementById('end').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + value;\n            this.$refs.circulargauge.ej2Instances.axes[axisIndex].labelStyle.hiddenLabel =\n                Object(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"isCompleteAngle\"])(this.$refs.circulargauge.ej2Instances.axes[axisIndex].startAngle, this.$refs.circulargauge.ej2Instances.axes[axisIndex].endAngle) ?\n                    'First' : 'None';\n            this.$refs.circulargauge.ej2Instances.refresh();        \n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/multiple-axis/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/multiple-axis/App.vue?vue&type=template&id=f5975240&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/multiple-axis/App.vue?vue&type=template&id=f5975240& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                load: _vm.load,\n                align: \"center\",\n                id: \"axis-container\",\n                title: _vm.title,\n                titleStyle: _vm.titleStyle\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        radius: _vm.gaugeradius,\n                        startAngle: _vm.startAngle,\n                        minimum: \"0\",\n                        maximum: \"160\",\n                        endAngle: _vm.endAngle,\n                        majorTicks: _vm.majorTicks,\n                        lineStyle: _vm.lineStyle,\n                        minorTicks: _vm.minorTicks,\n                        labelStyle: _vm.labelStyle\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              radius: _vm.pointerRadius,\n                              color: _vm.color,\n                              markerHeight: _vm.markerHeight,\n                              markerWidth: _vm.markerWidth,\n                              type: _vm.type,\n                              markerShape: _vm.markerShape\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        radius: _vm.gaugeradius2,\n                        startAngle: _vm.startAngle2,\n                        minimum: \"0\",\n                        maximum: \"240\",\n                        endAngle: _vm.endAngle2,\n                        majorTicks: _vm.majorTicks2,\n                        lineStyle: _vm.lineStyle2,\n                        minorTicks: _vm.minorTicks2,\n                        labelStyle: _vm.labelStyle2\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value2,\n                              radius: _vm.pointerRadius2,\n                              color: _vm.color2,\n                              markerHeight: _vm.markerHeight2,\n                              markerWidth: _vm.markerWidth2,\n                              type: _vm.type2,\n                              markerShape: _vm.markerShape2\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"axis\",\n                    attrs: {\n                      id: \"axisIndex\",\n                      dataSource: _vm.axisindexdata,\n                      fields: _vm.axisindexfields,\n                      value: \"0\",\n                      index: \"0\",\n                      width: _vm.axisindexwidth,\n                      change: _vm.changeAxisindex\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \\n            \"),\n          _c(\"tr\", [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"direction\",\n                    attrs: {\n                      id: \"axisDirection\",\n                      dataSource: _vm.axisdirectiondata,\n                      index: \"0\",\n                      width: _vm.axisdirectionwidth,\n                      change: _vm.changeAxisdirection\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \\n            \"),\n          _c(\"tr\", [\n            _vm._m(2),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", [\n                _c(\"input\", {\n                  ref: \"start\",\n                  attrs: {\n                    type: \"range\",\n                    id: \"startAngle\",\n                    value: \"220\",\n                    min: \"0\",\n                    max: \"360\"\n                  },\n                  on: {\n                    pointermove: _vm.startAnglechange,\n                    touchmove: _vm.startAnglechange,\n                    change: _vm.startAnglechange\n                  }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \\n            \"),\n          _c(\"tr\", [\n            _vm._m(3),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", [\n                _c(\"input\", {\n                  ref: \"end\",\n                  attrs: {\n                    type: \"range\",\n                    id: \"endAngle\",\n                    value: \"140\",\n                    min: \"0\",\n                    max: \"360\"\n                  },\n                  on: {\n                    pointermove: _vm.endAnglechange,\n                    touchmove: _vm.endAnglechange,\n                    change: _vm.endAnglechange\n                  }\n                })\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Axis \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Direction \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"start\" } }, [\n        _vm._v(\"Start Angle \"),\n        _c(\"span\", [_vm._v(\"    220\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"end\" } }, [\n        _vm._v(\"End Angle \"),\n        _c(\"span\", [_vm._v(\"    140\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the multiple axes in the gauge and options are available to change the direction, start, and end angle of an axis.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure multipe axes in gauge. Use \"\n        ),\n        _c(\"code\", [_vm._v(\"axes\")]),\n        _vm._v(\n          \" collection\\n        to render multiple axis in gauge. Each axis can be customized with its own \"\n        ),\n        _c(\"code\", [_vm._v(\"pointer\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"scales\")]),\n        _vm._v(\".\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this sample, two axes with a pointer has been used.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the axis can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/multiple-axis/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });