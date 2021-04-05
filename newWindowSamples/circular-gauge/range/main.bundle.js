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
/******/ 		"circular-gauge/range/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/range/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/range/App.vue":
/*!**********************************************!*\
  !*** ./Samples/circular-gauge/range/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_02378bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=02378bdf&scoped=true& */ \"./Samples/circular-gauge/range/App.vue?vue&type=template&id=02378bdf&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/range/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css& */ \"./Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_02378bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_02378bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"02378bdf\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/range/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/range/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/circular-gauge/range/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/range/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_02378bdf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/range/App.vue?vue&type=template&id=02378bdf&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/circular-gauge/range/App.vue?vue&type=template&id=02378bdf&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_02378bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=02378bdf&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/range/App.vue?vue&type=template&id=02378bdf&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_02378bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_02378bdf_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/range/main.js":
/*!**********************************************!*\
  !*** ./Samples/circular-gauge/range/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/range/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-02378bdf] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/range/App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=02378bdf&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-02378bdf] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/range/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/range/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n            lineStyle: { width: 10, color: 'transparent' },\n            labelStyle: {\n                position: 'Inside', useRangeColor: false,\n                font: { size: '12px', fontFamily: 'Roboto', fontStyle: 'Regular' }\n            }, majorTicks: { height: 10, offset: 5 }, minorTicks: { height: 0 },\n            annotations: [{\n                content: '<div><span style=\"font-size:14px; color:#9E9E9E; font-family:Regular\">Speedometer</span></div>',\n                radius: '30%', angle: 0, zIndex: '1'\n            }, {\n                content: '<div><span style=\"font-size:20px; color:#424242; font-family:Regular\">65 MPH</span></div>',\n                radius: '40%', angle: 180, zIndex: '1'\n            }],\n            startAngle: 210,\n            endAngle: 150,\n            gaugeRadius: '80%',\n            ranges: [{ start: 0, end: 40, color: '#30B32D' }, { start: 40, end: 80, color: '#FFDD00' },\n            { start: 80, end: 120, color: '#F03E3E' }],\n            value: 65, \n            pointerRadius: '60%', \n            color: '#757575', \n            pointerWidth: 8,\n            cap: { radius: 7 },\n            needleTail: { length: '18%'},\n            rangeselectdata:[\n            { Id:'0', level:'Low'},\n            { Id:'1', level:'Medium'},\n            { Id:'2', level:'High'}],\n            rangeselectfields:{ text: 'level', value: 'Id' },\n            rangecolordata:['#30B32D','#FFDD00','#F03E3E'],\n            rangeselectwidth:120,\n            rangecolorwidth:120\n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    changeRangeselect: function(args){\n            let index = args.value;\n            let container = this.$refs.circulargauge.ej2Instances;\n            this.$refs.rangeColor.ej2Instances.value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].color;\n            (document.getElementById('endWidth')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].endWidth.toString();\n            document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' +\n                this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].endWidth;\n            (document.getElementById('startWidth')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].startWidth.toString();\n            document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' +\n                this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].startWidth;\n            (document.getElementById('end')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].end.toString();\n            document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' +\n                this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].end;\n            (document.getElementById('start')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].start.toString();\n            document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' +\n                this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].start;\n            (document.getElementById('radius')).value = this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].roundedCornerRadius.toString();\n            document.getElementById('roundedRadius').innerHTML = 'Corner Radius <span> &nbsp;&nbsp;&nbsp;' +\n                this.$refs.circulargauge.ej2Instances.axes[0].ranges[index].roundedCornerRadius;\n    },\n    changeRangeColor: function(args){\n        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].color = this.$refs.rangeColor.ej2Instances.value.toString();\n        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;\n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    rangeStart:function(args){\n        let min = this.$refs.rangeStart.value;\n        document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' + min;\n        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].start = min;\n        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; \n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    rangeEnd:function(args){\n        let max = this.$refs.rangeEnd.value;\n        document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' + max;\n        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].end = max;\n        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; \n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    rangeStartwidth:function(args){\n        let startWidth = this.$refs.startWidth.value;\n        document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' + startWidth;\n        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].startWidth = startWidth;\n        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; \n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    rangeEndwidth:function(args){\n        let endWidth = this.$refs.endWidth.value;\n        document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' + endWidth;\n        this.$refs.circulargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].endWidth = endWidth;\n        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false;\n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    roundedRadius:function(args){\n        let cotainerObj=document.getElementById('range-container');\n        let listObj=document.getElementById('rangeSelect');     \n        let radius = parseInt((document.getElementById('radius')).value, 10);\n        document.getElementById('roundedRadius').innerHTML = 'Corner Radius <span> &nbsp;&nbsp;&nbsp;' + radius;\n        cotainerObj.ej2_instances[0].axes[0].ranges[+listObj.ej2_instances[0].value].roundedCornerRadius = radius;\n        cotainerObj.ej2_instances[0].axes[0].pointers[0].animation.enable = false;\n        cotainerObj.ej2_instances[0].refresh();\n    },\n    changeRangefont:function(args){\n        let useRangeColor = this.$refs.fontColor.checked;\n        this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.useRangeColor = useRangeColor;\n        this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.useRangeColor = useRangeColor;\n        this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.useRangeColor = useRangeColor;\n        this.$refs.circulargauge.ej2Instances.axes[0].pointers[0].animation.enable = false; \n        this.$refs.circulargauge.ej2Instances.refresh();\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/range/App.vue?vue&type=template&id=02378bdf&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/range/App.vue?vue&type=template&id=02378bdf&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: { load: _vm.load, align: \"center\", id: \"range-container\" }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        radius: _vm.gaugeRadius,\n                        startAngle: _vm.startAngle,\n                        minimum: \"0\",\n                        maximum: \"120\",\n                        endAngle: _vm.endAngle,\n                        majorTicks: _vm.majorTicks,\n                        lineStyle: _vm.lineStyle,\n                        minorTicks: _vm.minorTicks,\n                        labelStyle: _vm.labelStyle,\n                        annotations: _vm.annotations,\n                        ranges: _vm.ranges\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              radius: _vm.pointerRadius,\n                              pointerWidth: _vm.pointerWidth,\n                              cap: _vm.cap,\n                              needleTail: _vm.needleTail\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"selectRange\",\n                      attrs: {\n                        id: \"rangeSelect\",\n                        dataSource: _vm.rangeselectdata,\n                        fields: _vm.rangeselectfields,\n                        value: \"0\",\n                        index: \"0\",\n                        width: _vm.rangeselectwidth,\n                        change: _vm.changeRangeselect\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"rangeStart\",\n                    staticStyle: { width: \"100%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"start\",\n                      value: \"0\",\n                      min: \"0\",\n                      max: \"120\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeStart,\n                      touchmove: _vm.rangeStart,\n                      change: _vm.rangeStart\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"rangeEnd\",\n                    staticStyle: { width: \"100%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"end\",\n                      value: \"40\",\n                      min: \"0\",\n                      max: \"120\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeEnd,\n                      touchmove: _vm.rangeEnd,\n                      change: _vm.rangeEnd\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"rangeColor\",\n                      attrs: {\n                        id: \"rangeColor\",\n                        dataSource: _vm.rangecolordata,\n                        index: \"0\",\n                        width: _vm.rangecolorwidth,\n                        change: _vm.changeRangeColor\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"fontColor\",\n                    attrs: { type: \"checkbox\", id: \"enable\" },\n                    on: { change: _vm.changeRangefont }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"startWidth\",\n                    staticStyle: { width: \"100%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"startWidth\",\n                      value: \"10\",\n                      min: \"0\",\n                      max: \"30\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeStartwidth,\n                      touchmove: _vm.rangeStartwidth,\n                      change: _vm.rangeStartwidth\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(6),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"endWidth\",\n                    staticStyle: { width: \"100%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"endWidth\",\n                      value: \"10\",\n                      min: \"0\",\n                      max: \"30\"\n                    },\n                    on: {\n                      pointermove: _vm.rangeEndwidth,\n                      touchmove: _vm.rangeEndwidth,\n                      change: _vm.rangeEndwidth\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(7),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"cornerRadius\",\n                    staticStyle: { width: \"100%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"radius\",\n                      value: \"0\",\n                      min: \"0\",\n                      max: \"30\",\n                      step: \"5\"\n                    },\n                    on: {\n                      pointermove: _vm.roundedRadius,\n                      touchmove: _vm.roundedRadius,\n                      change: _vm.roundedRadius\n                    }\n                  })\n                ])\n              ])\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(8),\n    _vm._v(\" \"),\n    _vm._m(9)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Select Range \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangeStart\" } }, [\n        _vm._v(\"Range Start \"),\n        _c(\"span\", [_vm._v(\"    0\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangeEnd\" } }, [\n        _vm._v(\"Range End \"),\n        _c(\"span\", [_vm._v(\"    40\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", { attrs: { id: \"\" } }, [_vm._v(\"Range Color\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"20%\" } }, [\n      _c(\"div\", { attrs: { id: \"enablePointer\" } }, [\n        _vm._v(\"Range Font Color\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangeStartWidth\" } }, [\n        _vm._v(\"Start Width \"),\n        _c(\"span\", [_vm._v(\"    10\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangeEndWidth\" } }, [\n        _vm._v(\"End Width \"),\n        _c(\"span\", [_vm._v(\"    10\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"roundedRadius\" } }, [\n        _vm._v(\"Corner Radius \"),\n        _c(\"span\", [_vm._v(\"    0\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates how to highlight a region in an axis by using ranges in gauge. Start, end, color, width and corner radius of the range can be changed by using the options provided \\n        in the property panel.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to customize the ranges of an axis in the circular gauge. Ranges are used to group the axis\\n        values, you can use \"\n        ),\n        _c(\"code\", [_vm._v(\"start\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"end\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"color\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"startWidth\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"endWidth\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"radius\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"roundedCornerRadius\")]),\n        _vm._v(\n          \" properties to customize the ranges. In this sample, an axis is shown with one range and options\\n        to customize the range properties with property panel.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the ranges can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/range/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });