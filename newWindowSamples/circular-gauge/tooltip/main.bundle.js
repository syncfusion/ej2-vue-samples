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
/******/ 		"circular-gauge/tooltip/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/tooltip/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/tooltip/App.vue":
/*!************************************************!*\
  !*** ./Samples/circular-gauge/tooltip/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_19abb6a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=19abb6a5&scoped=true& */ \"./Samples/circular-gauge/tooltip/App.vue?vue&type=template&id=19abb6a5&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/tooltip/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css& */ \"./Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_19abb6a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_19abb6a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"19abb6a5\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/tooltip/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/tooltip/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/circular-gauge/tooltip/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/tooltip/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_19abb6a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/tooltip/App.vue?vue&type=template&id=19abb6a5&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/circular-gauge/tooltip/App.vue?vue&type=template&id=19abb6a5&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_19abb6a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=19abb6a5&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/tooltip/App.vue?vue&type=template&id=19abb6a5&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_19abb6a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_19abb6a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/tooltip/main.js":
/*!************************************************!*\
  !*** ./Samples/circular-gauge/tooltip/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/tooltip/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#templateWrap img[data-v-19abb6a5] {\\n    border-radius: 30px;\\n    width: 30px;\\n    height: 30px;\\n    margin: 0 auto;\\n}\\n#templateWrap[data-v-19abb6a5] {\\n    background: #fff;\\n    padding: 3px;\\n    border-radius: 2px;\\n}\\n#templateWrap .des[data-v-19abb6a5] {\\n    float: right;\\n    padding-left: 10px;\\n    line-height: 30px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/tooltip/App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,oBAAoB;IACpB,YAAY;IACZ,aAAa;IACb,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=19abb6a5&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#templateWrap img[data-v-19abb6a5] {\\n    border-radius: 30px;\\n    width: 30px;\\n    height: 30px;\\n    margin: 0 auto;\\n}\\n#templateWrap[data-v-19abb6a5] {\\n    background: #fff;\\n    padding: 3px;\\n    border-radius: 2px;\\n}\\n#templateWrap .des[data-v-19abb6a5] {\\n    float: right;\\n    padding-left: 10px;\\n    line-height: 30px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/tooltip/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/tooltip/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            title: 'Tooltip Customization',\n            titleStyle: {\n                size: '15px',\n                color: 'grey'\n            },\n            gaugeradius: '90%',\n            startAngle: 240,\n            endAngle: 120,\n            lineStyle: {\n                width: 0\n            },\n            majorTicks: {\n                color: 'white',\n                offset: -5,\n                height: 12\n            },\n            minorTicks: {\n                width: 0\n            },\n            labelStyle: {\n                useRangeColor: true,\n                font: {\n                    color: '#424242',\n                    size: '13px',\n                    fontFamily: 'Roboto'\n                }\n            },\n            value: 70,\n            pointerRadius: '60%',\n            color: '#33BCBD',\n            cap: {\n                radius: 10,\n                border: {\n                    color: '#33BCBD',\n                    width: 5\n                }\n            },\n            animation: {\n                enable: true,\n                duration: 1500\n            },\n            ranges: [{\n                start: 0,\n                end: 50,\n                startWidth: 10,\n                endWidth: 10,\n                radius: '102%',\n                color: '#3A5DC8',\n            }, {\n                start: 50,\n                end: 120,\n                radius: '102%',\n                startWidth: 10,\n                endWidth: 10,\n                color: '#33BCBD',\n            }],\n            tooltip: {\n                enable: true,\n                type: ['Range', 'Pointer'],\n                enableAnimation: false\n            },\n            enablePointerDrag: true\n        }\n    },\n    provide: {\n        circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"GaugeTooltip\"]]\n    },\n    methods: {\n        /* custom code start */\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.gauge.theme =\n                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        },\n        /* custom code end */\n        tooltipRender: function (args) {\n\t\t\tlet imageName ; let borderColor;\n\t\t\tlet textColor;\n            if(args.pointer) {\n                imageName = ((args.pointer.currentValue >= 0 && args.pointer.currentValue <= 50) ? 'min' : 'max');\n                borderColor = ((args.pointer.currentValue >= 0 && args.pointer.currentValue <= 50) ? '#3A5DC8' : '#33BCBD');\n\t\t\t\ttextColor = this.$refs.circulargauge.ej2Instances.theme.toLowerCase() === 'highcontrast' ? 'White' : borderColor;\n                if (this.$refs.circulargauge.ej2Instances.theme.toLowerCase() === 'highcontrast') {\n                    args.tooltip.template = '<div id=\"templateWrap\" style=\"border:2px solid ' + borderColor +\n                        ';background-color:black\"><img src=\"./../../source/circular-gauge/images/' + imageName\n                        + '.png\"/><div class=\"des\" style=\"color: ' + textColor + '\"><span>${value} MPH</span></div></div>';\n                } else {\n                     args.tooltip.template = '<div id=\"templateWrap\" style=\"border:2px solid ' + borderColor +\n                        '\"><img src=\"./../../source/circular-gauge/images/' + imageName + '.png\"/><div class=\"des\" style=\"color: ' +\n                        borderColor + '\"><span>${value} MPH</span></div></div>';\n                }   \n            } else if (args.range){\n                imageName = ((args.range.start >= 0 && args.range.end <= 50)) ? 'min' : 'max';\n                borderColor = ((args.range.start >= 0 && args.range.end <= 50)) ? '#3A5DC8' : '#33BCBD';\n\t\t\t\ttextColor = this.$refs.circulargauge.ej2Instances.theme.toLowerCase() === 'highcontrast' ? 'White' : borderColor;\n                let start = args.range.start;\n                let end = args.range.end;\n                 if (this.$refs.circulargauge.ej2Instances.theme.toLowerCase() === 'highcontrast') {\n                     args.tooltip.rangeSettings.template = '<div id=templateWrap style=\"padding:5px;border:2px solid'\n                        + borderColor + ';color: ' + textColor + ';background-color:black\"><img src=\"./../../source/circular-gauge/images/'\n                        + imageName + '.png\"/> <span>' + start + ' - ' + end + ' MPH  </span> </div>';\n                 } else {\n                      args.tooltip.rangeSettings.template = '<div id=templateWrap style=\"padding:5px;border:2px solid'\n                        + borderColor + ';color: ' + borderColor + '\"><img src=\"./../../source/circular-gauge/images/'\n                        + imageName + '.png\"/> <span>' + start + ' - ' + end + ' MPH  </span> </div>';\n                 }\n            }\n        },\n        dragEnd: function (args) {\n        if (args.currentValue >= 0 && args.currentValue <= 50) {\n            args.pointer.color = '#3A5DC8';\n            args.pointer.cap.border.color = '#3A5DC8';  \n        }\n        else {\n            args.pointer.color = '#33BCBD';\n            args.pointer.cap.border.color = '#33BCBD';\n        }\n\t\targs.pointer.value = args.currentValue;\n        args.pointer.animation.enable = false;\n        this.$refs.circulargauge.ej2Instances.refresh();\n    }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/tooltip/App.vue?vue&type=template&id=19abb6a5&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/tooltip/App.vue?vue&type=template&id=19abb6a5&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-circulargauge\",\n          {\n            ref: \"circulargauge\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              load: _vm.load,\n              align: \"center\",\n              id: \"tooltip-container\",\n              title: _vm.title,\n              titleStyle: _vm.titleStyle,\n              enablePointerDrag: _vm.enablePointerDrag,\n              tooltipRender: _vm.tooltipRender,\n              dragEnd: _vm.dragEnd,\n              tooltip: _vm.tooltip\n            }\n          },\n          [\n            _c(\n              \"e-axes\",\n              [\n                _c(\n                  \"e-axis\",\n                  {\n                    attrs: {\n                      radius: _vm.gaugeradius,\n                      startAngle: _vm.startAngle,\n                      minimum: \"0\",\n                      maximum: \"120\",\n                      endAngle: _vm.endAngle,\n                      majorTicks: _vm.majorTicks,\n                      lineStyle: _vm.lineStyle,\n                      minorTicks: _vm.minorTicks,\n                      labelStyle: _vm.labelStyle,\n                      ranges: _vm.ranges\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-pointers\",\n                      [\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            value: _vm.value,\n                            cap: _vm.cap,\n                            radius: _vm.pointerRadius,\n                            color: _vm.color,\n                            animation: _vm.animation\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample visualizes the tooltip of the pointer value and ranges in gauge. To see the tooltip in action, hover pointer or tap the pointer.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In this example, you can see how to show the tooltip for pointer and ranges in gauge, to see the tooltip in action, hover pointer or range bar or tap on pointer or range bar in touch enabled devices.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Circular gauge component features are segregated into individual feature-wise modules. To use tooltip, we need to inject\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"GaugeTooltip\")]),\n        _vm._v(\n          \" module using CircularGauge.Inject(GaugeTooltip) method.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            More information on the tooltip can be found in this\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/tooltip/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });