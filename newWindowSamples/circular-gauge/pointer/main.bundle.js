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
/******/ 		"circular-gauge/pointer/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/pointer/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/pointer/App.vue":
/*!************************************************!*\
  !*** ./Samples/circular-gauge/pointer/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_fc1b6a42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=fc1b6a42& */ \"./Samples/circular-gauge/pointer/App.vue?vue&type=template&id=fc1b6a42&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/pointer/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_fc1b6a42___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_fc1b6a42___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/pointer/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/pointer/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/circular-gauge/pointer/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/pointer/App.vue?vue&type=template&id=fc1b6a42&":
/*!*******************************************************************************!*\
  !*** ./Samples/circular-gauge/pointer/App.vue?vue&type=template&id=fc1b6a42& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fc1b6a42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=fc1b6a42& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer/App.vue?vue&type=template&id=fc1b6a42&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fc1b6a42___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fc1b6a42___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/pointer/main.js":
/*!************************************************!*\
  !*** ./Samples/circular-gauge/pointer/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/pointer/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/pointer/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            gauge1startAngle: 270,\n            gauge1endAngle: 90,\n            gauge1lineStyle: {\n                width: 3,\n                color: '#ff5985'\n            },\n            gauge1labelStyle: {\n                position: 'Outside',\n                font: {\n                    size: '0px',\n                    color: '#ff5985'\n                }\n            },\n            gauge1majorTicks: {\n                width: 1,\n                height: 0,\n                interval: 100\n            },\n            gauge1minorTicks: {\n                height: 0,\n                width: 0,\n            },\n            gauge1Radius: '90%',\n            type1: 'RangeBar',\n            value1: 66,\n            pointerRadius1: '90%',\n            color1: '#ff5985',\n            pointerWidth1: 10,\n            animation1: {\n                enable: true,\n                duration: 1000\n            },\n            gauge1annotations: [{\n                angle: 180,\n                zIndex: '1',\n                radius: '20%',\n                content: '<div style=\"color:#757575; font-family:Roboto; font-size:14px;\">Range Bar</div>'\n            }],\n            gauge2startAngle: 270,\n            gauge2endAngle: 90,\n            gauge2lineStyle: {\n                width: 3,\n                color: '#01aebe'\n            },\n            gauge2labelStyle: {\n                position: 'Outside',\n                font: {\n                    size: '0px',\n                    color: '#01aebe'\n                }\n            },\n            gauge2majorTicks: {\n                width: 1,\n                height: 0,\n                interval: 100\n            },\n            gauge2minorTicks: {\n                height: 0,\n                width: 0,\n            },\n            gauge2Radius: '90%',\n            pointerRadius2: '100%',\n            value2: 80,\n            type2: 'Marker',\n            markerShape2: 'InvertedTriangle',\n            markerWidth2: 15,\n            markerHeight2: 15,\n            color2: 'rgb(0,171,169)',\n            gauge2annotations: [{\n                angle: 180,\n                zIndex: '1',\n                radius: '20%',\n                content: '<div style=\"color:#757575; font-family:Roboto; font-size:14px;\">Marker</div>'\n            }],\n            gauge3startAngle: 270,\n            gauge3endAngle: 90,\n            gauge3lineStyle: {\n                width: 3,\n                color: '#1E7145'\n            },\n            gauge3labelStyle: {\n                position: 'Outside',\n                font: {\n                    size: '0px',\n                    color: '#1E7145'\n                }\n            },\n            gauge3majorTicks: {\n                width: 1,\n                height: 0,\n                interval: 100\n            },\n            gauge3minorTicks: {\n                height: 0,\n                width: 0,\n            },\n            gauge3Radius: '90%',\n            animation3: {\n                enable: true,\n                duration: 1000\n            },\n            cap3: {\n                radius: 8,\n                color: 'green'\n            },\n            needleTail3: {\n                length: '0%'\n            },\n            value3: 70,\n            pointerWidth3: 2,\n            needleStartWidth3: 4,\n            needleEndWidth3: 4,\n            color3: '#1E7145',\n            gauge3annotations: [{\n                angle: 180,\n                zIndex: '1',\n                radius: '20%',\n                content: '<div style=\"color:#757575; font-family:Roboto; font-size:14px;\">Customized Needle</div>'\n            }],\n            centerY3: '40%',\n            gauge4startAngle: 270,\n            gauge4endAngle: 90,\n            gauge4lineStyle: {\n                width: 3,\n                color: '#9250e6'\n            },\n            gauge4labelStyle: {\n                position: 'Outside',\n                font: {\n                    size: '0px',\n                    color: '#9250e6'\n                }\n            },\n            gauge4majorTicks: {\n                width: 1,\n                height: 0,\n                interval: 100\n            },\n            gauge4minorTicks: {\n                height: 0,\n                width: 0,\n            },\n            gauge4Radius: '90%',\n            pointerRadius4: '100%',\n            animation4: {\n                enable: true,\n                duration: 900\n            },\n            value4: 70,\n            color4: '#923C99',\n            pointerWidth4: 6,\n            cap4: {\n                radius: 0\n            },\n            needleTail4: {\n                length: '4%',\n                color: '#923C99'\n            },\n            gauge4annotations: [{\n                angle: 180,\n                zIndex: '1',\n                radius: '20%',\n                content: '<div style=\"color:#757575; font-family:Roboto; font-size:14px;\">Needle</div>'\n            }],\n            centerY5: '40%',\n            gauge5startAngle: 270,\n            gauge5endAngle: 90,\n            gauge5lineStyle: {\n                width: 0\n            },\n            gauge5labelStyle: {\n                position: 'Outside',\n                font: {\n                    size: '0px',\n                    color: '#067bc2'\n                }\n            },\n            gauge5majorTicks: {\n                width: 1,\n                height: 0,\n                interval: 100\n            },\n            gauge5minorTicks: {\n                height: 0,\n                width: 0,\n            },\n            gauge5Radius: '90%',\n            pointerRadius5: '100%',\n            animation5: {\n                enable: true,\n                duration: 900\n            },\n            value5: 40,\n            color5: '#067bc2',\n            pointerWidth5: 6,\n            cap5: {\n                radius: 0\n            },\n            needleTail5: {\n                length: '4%',\n                color: '#067bc2'\n            },\n            pointerRadius6: '100%',\n            type6: 'RangeBar',\n            animation6: {\n                enable: true,\n                duration: 900\n            },\n            value6: 40,\n            color6: '#067bc2',\n            pointerWidth6: 5,\n            gauge5annotations: [{\n                angle: 180,\n                zIndex: '1',\n                radius: '20%',\n                content: '<div style=\"color:#757575; font-family:Roboto; font-size:14px;\">Live Update</div>'\n            }],\n            gauge6startAngle: 270,\n            gauge6endAngle: 90,\n            gauge6lineStyle: {\n                width: 3,\n                color: '#e3a21a'\n            },\n            gauge6labelStyle: {\n                position: 'Outside',\n                font: {\n                    size: '0px',\n                    color: '#e3a21a'\n                }\n            },\n            gauge6majorTicks: {\n                width: 1,\n                height: 0,\n                interval: 100\n            },\n            gauge6minorTicks: {\n                height: 0,\n                width: 0,\n            },\n            centerY6: '40%',\n            gauge6Radius: '90%',\n            pointerRadius7: '80%',\n            value7: 80,\n            markerWidth7: 5,\n            markerHeight7: 5,\n            animation7: {\n                enable: true,\n                duration: 1000\n            },\n            color7: '#e3a21a',\n            pointerWidth7: 10,\n            cap7: {\n                radius: 8,\n                color: 'white',\n                border: {\n                    color: '#e3a21a',\n                    width: 1\n                }\n            },\n            needleTail7: {\n                length: '20%',\n                color: '#e3a21a'\n            },\n            gauge6annotations: [{\n                angle: 180,\n                zIndex: '1',\n                radius: '25%',\n                content: '<div style=\"color:#757575; font-family:Roboto; font-size:14px;\">Multiple Needles</div>'\n            }],\n            pointerRadius8: '60%',\n            value8: 40,\n            markerWidth8: 5,\n            markerHeight8: 5,\n            animation8: {\n                duration: 1000\n            },\n            color8: '#ffb133',\n            pointerWidth8: 10,\n            cap8: {\n                radius: 8,\n                color: 'white',\n                border: {\n                    color: '#ffb133',\n                    width: 1\n                }\n            },\n            needleTail8: {\n                length: '20%',\n                color: '#e3a21a'\n            }\n        }\n    },\n    provide: {\n        circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n    },\n    mounted() {\n        this.setIntervalStart();\n    },\n    methods: {        \n        setIntervalStart : function(){\n            let gauge1 = this.$refs.circulargauge1.ej2Instances;\n            let gauge2 = this.$refs.circulargauge2.ej2Instances;\n            this.gauge5Interval1 = setInterval(function () {\n                let newVal = Math.random() * (90 - 20) + 20;\n                if (document.getElementById('container4')) {\n                    gauge1.setPointerValue(0, 0, newVal);\n                } else {\n                    clearInterval(this.gauge5Interval1);\n                }\n            }, 2000)\n            this.gauge6Interval1 = setInterval(function () {\n                let newVal = Math.random() * (80 - 30) + 30;\n                if (document.getElementById('container6')) {\n                    gauge2.setPointerValue(0, 0, newVal);\n                    gauge2.setPointerValue(0, 1, newVal);\n                } else {\n                    clearInterval(this.gauge6Interval1);\n                }\n            }, 2000)\n        },\n        /* custom code start */\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.gauge.theme =\n                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        }\n        /* custom code end */\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/pointer/App.vue?vue&type=template&id=fc1b6a42&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/pointer/App.vue?vue&type=template&id=fc1b6a42& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-sm-12\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"block\", height: \"250px\" },\n                    attrs: { load: _vm.load, align: \"center\", id: \"container2\" }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              radius: _vm.gauge2Radius,\n                              startAngle: _vm.gauge2startAngle,\n                              minimum: \"0\",\n                              maximum: \"100\",\n                              endAngle: _vm.gauge2endAngle,\n                              majorTicks: _vm.gauge2majorTicks,\n                              lineStyle: _vm.gauge2lineStyle,\n                              minorTicks: _vm.gauge2minorTicks,\n                              labelStyle: _vm.gauge2labelStyle,\n                              annotations: _vm.gauge2annotations\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    type: _vm.type2,\n                                    value: _vm.value2,\n                                    radius: _vm.pointerRadius2,\n                                    color: _vm.color2,\n                                    markerShape: _vm.markerShape2,\n                                    markerWidth: _vm.markerWidth2,\n                                    markerHeight: _vm.markerHeight2\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"block\", height: \"250px\" },\n                    attrs: { load: _vm.load, align: \"center\", id: \"container1\" }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              radius: _vm.gauge1Radius,\n                              startAngle: _vm.gauge1startAngle,\n                              minimum: \"0\",\n                              maximum: \"100\",\n                              endAngle: _vm.gauge1endAngle,\n                              majorTicks: _vm.gauge1majorTicks,\n                              lineStyle: _vm.gauge1lineStyle,\n                              minorTicks: _vm.gauge1minorTicks,\n                              labelStyle: _vm.gauge1labelStyle,\n                              annotations: _vm.gauge1annotations\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    type: _vm.type1,\n                                    value: _vm.value1,\n                                    radius: _vm.pointerRadius1,\n                                    color: _vm.color1,\n                                    pointerWidth: _vm.pointerWidth1,\n                                    animation: _vm.animation1\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    ref: \"circulargauge1\",\n                    staticStyle: { display: \"block\", height: \"250px\" },\n                    attrs: { load: _vm.load, align: \"center\", id: \"container4\" }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              radius: _vm.gauge4Radius,\n                              startAngle: _vm.gauge4startAngle,\n                              minimum: \"0\",\n                              maximum: \"100\",\n                              endAngle: _vm.gauge4endAngle,\n                              majorTicks: _vm.gauge4majorTicks,\n                              lineStyle: _vm.gauge4lineStyle,\n                              minorTicks: _vm.gauge4minorTicks,\n                              labelStyle: _vm.gauge4labelStyle,\n                              annotations: _vm.gauge4annotations\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value4,\n                                    radius: _vm.pointerRadius4,\n                                    color: _vm.color4,\n                                    pointerWidth: _vm.pointerWidth4,\n                                    animation: _vm.animation4,\n                                    cap: _vm.cap4,\n                                    needleTail: _vm.needleTail4\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-sm-12\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"block\", height: \"250px\" },\n                    attrs: {\n                      load: _vm.load,\n                      align: \"center\",\n                      id: \"container3\",\n                      centerY: _vm.centerY3\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              radius: _vm.gauge3Radius,\n                              startAngle: _vm.gauge3startAngle,\n                              minimum: \"0\",\n                              maximum: \"100\",\n                              endAngle: _vm.gauge3endAngle,\n                              majorTicks: _vm.gauge3majorTicks,\n                              lineStyle: _vm.gauge3lineStyle,\n                              minorTicks: _vm.gauge3minorTicks,\n                              labelStyle: _vm.gauge3labelStyle,\n                              annotations: _vm.gauge3annotations\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: \"70\",\n                                    radius: \"80%\",\n                                    color: \"green\",\n                                    pointerWidth: _vm.pointerWidth3,\n                                    needleStartWidth: _vm.needleStartWidth3,\n                                    needleEndWidth: _vm.needleEndWidth3,\n                                    animation: _vm.animation3,\n                                    cap: _vm.cap3,\n                                    needleTail: _vm.needleTail3\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    staticStyle: { display: \"block\", height: \"250px\" },\n                    attrs: {\n                      load: _vm.load,\n                      align: \"center\",\n                      id: \"container5\",\n                      centerY: _vm.centerY6\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              radius: _vm.gauge6Radius,\n                              startAngle: _vm.gauge6startAngle,\n                              minimum: \"0\",\n                              maximum: \"100\",\n                              endAngle: _vm.gauge6endAngle,\n                              majorTicks: _vm.gauge6majorTicks,\n                              lineStyle: _vm.gauge6lineStyle,\n                              minorTicks: _vm.gauge6minorTicks,\n                              labelStyle: _vm.gauge6labelStyle,\n                              annotations: _vm.gauge6annotations\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value7,\n                                    radius: _vm.pointerRadius7,\n                                    markerWidth: _vm.markerWidth7,\n                                    markerHeight: _vm.markerHeight7,\n                                    color: _vm.color7,\n                                    pointerWidth: _vm.pointerWidth7,\n                                    cap: _vm.cap7,\n                                    needleTail: _vm.needleTail7,\n                                    animation: _vm.animation7\n                                  }\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value8,\n                                    radius: _vm.pointerRadius8,\n                                    markerWidth: _vm.markerWidth8,\n                                    markerHeight: _vm.markerHeight8,\n                                    color: _vm.color8,\n                                    pointerWidth: _vm.pointerWidth8,\n                                    cap: _vm.cap8,\n                                    needleTail: _vm.needleTail8,\n                                    animation: _vm.animation8\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"col-sm-4\" },\n              [\n                _c(\n                  \"ejs-circulargauge\",\n                  {\n                    ref: \"circulargauge2\",\n                    staticStyle: { display: \"block\", height: \"250px\" },\n                    attrs: {\n                      load: _vm.load,\n                      align: \"center\",\n                      id: \"container6\",\n                      centerY: _vm.centerY5\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-axes\",\n                      [\n                        _c(\n                          \"e-axis\",\n                          {\n                            attrs: {\n                              radius: _vm.gauge5Radius,\n                              startAngle: _vm.gauge5startAngle,\n                              minimum: \"0\",\n                              maximum: \"100\",\n                              endAngle: _vm.gauge5endAngle,\n                              majorTicks: _vm.gauge5majorTicks,\n                              lineStyle: _vm.gauge5lineStyle,\n                              minorTicks: _vm.gauge5minorTicks,\n                              labelStyle: _vm.gauge5labelStyle,\n                              annotations: _vm.gauge5annotations\n                            }\n                          },\n                          [\n                            _c(\n                              \"e-pointers\",\n                              [\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    value: _vm.value5,\n                                    radius: _vm.pointerRadius5,\n                                    color: _vm.color5,\n                                    pointerWidth: _vm.pointerWidth5,\n                                    cap: _vm.cap5,\n                                    needleTail: _vm.needleTail5,\n                                    animation: _vm.animation5\n                                  }\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-pointer\", {\n                                  attrs: {\n                                    type: _vm.type6,\n                                    value: _vm.value6,\n                                    radius: _vm.pointerRadius6,\n                                    color: _vm.color6,\n                                    pointerWidth: _vm.pointerWidth6,\n                                    animation: _vm.animation6\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample visualizes the different types of pointers which are available in the gauge.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In this example, you can see how to customize the pointer for an axis in the circular gauge. Gauge supports different types of pointers like \"\n        ),\n        _c(\"code\", [_vm._v(\"marker\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"image\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"needle\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"rangeBar\")]),\n        _vm._v(\".\\n        \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Gauge with all type of pointer is used in this sample.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            More information on the pointers can be found in this\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/pointer/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });