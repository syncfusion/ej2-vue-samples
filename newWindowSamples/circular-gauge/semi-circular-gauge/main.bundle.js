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
/******/ 		"circular-gauge/semi-circular-gauge/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/semi-circular-gauge/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue":
/*!************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_400b4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=400b4fa8&scoped=true& */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css& */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_400b4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_400b4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"400b4fa8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/semi-circular-gauge/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_400b4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_400b4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=400b4fa8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_400b4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_400b4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/main.js":
/*!************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-400b4fa8] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=400b4fa8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-400b4fa8] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n            startAngle: 270,\n            endAngle: 90,\n            lineStyle: { width: 0, color: '#0450C2' },\n            labelStyle: {\n                 position: 'Outside', autoAngle: true,\n                font: { fontWeight: 'normal' }\n            },\n            majorTicks: {\n                position: 'Inside', width: 2, height: 12, interval: 4\n            },\n            minorTicks: {\n                position: 'Inside', height: 5, width: 1, interval: 2\n            },\n            radius: '80%',\n            pointerWidth: 10,\n            color: '#FF9200',\n            pointerRadius: '75%',\n            value: 30,\n            animation: { enable: false },\n            cap: { radius: 8, color: '#565656', border: { width: 0 } },\n            needleTail: { length: '13%', color: '#FF9200' }\n\n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n     load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.gauge.theme = \n           selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        document.getElementById('startangle').value = args.gauge.axes[0].startAngle;\n        document.getElementById('end').value = args.gauge.axes[0].endAngle;\n    },\n    /* custom code end */\n    // Code for Property Panel\n    angleStart:function(args){\n      let min = parseInt(document.getElementById('startangle').value, 10);\n      document.getElementById('rangeStart').innerHTML = 'Start Angle <span> &nbsp;&nbsp;&nbsp;' + min + '°';\n      this.$refs.circulargauge.ej2Instances.axes[0].startAngle = min;\n      this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    angleEnd:function(args){\n      let max = parseInt(document.getElementById('end').value, 10);\n      document.getElementById('rangeEnd').innerHTML = 'End Angle <span> &nbsp;&nbsp;&nbsp;' + max + '°';\n      this.$refs.circulargauge.ej2Instances.axes[0].endAngle = max;\n      this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    gaugeRadius:function(args){\n      let max = parseInt(document.getElementById('radius').value, 10);\n      document.getElementById('radius1').innerHTML = 'Radius <span> &nbsp;&nbsp;&nbsp;' + max + '%';\n      this.$refs.circulargauge.ej2Instances.axes[0].radius = '' + max + '%';\n      this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    gaugeCenterX:function(args){\n      let checkbox = this.$refs.angle.ej2Instances;\n      if(!checkbox.checked) {\n         let max = parseInt(document.getElementById('centerX').value, 10);\n         document.getElementById('center1').innerHTML = 'Center X <span> &nbsp;&nbsp;&nbsp;' + max + '%';\n         this.$refs.circulargauge.ej2Instances.centerX = '' + max + '%';\n         this.$refs.circulargauge.ej2Instances.refresh();\n      }      \n    },\n    gaugeCenterY:function(args){\n      let checkbox = this.$refs.angle.ej2Instances;\n      if(!checkbox.checked) {\n            let max = parseInt(document.getElementById('centerY').value, 10);\n            document.getElementById('center2').innerHTML = 'Center Y <span> &nbsp;&nbsp;&nbsp;' + max + '%';\n            this.$refs.circulargauge.ej2Instances.centerY = '' + max + '%';\n            this.$refs.circulargauge.ej2Instances.refresh();\n      }      \n    },\n    onChange: function(args) {\n      let centerX = document.getElementById('centerX');\n      let centerY = document.getElementById('centerY');\n       if (args.checked) {\n            this.$refs.circulargauge.ej2Instances.centerX = null;\n            this.$refs.circulargauge.ej2Instances.centerY = null;\n            this.$refs.circulargauge.ej2Instances.moveToCenter = true;\n            centerX.disabled = true;\n            centerY.disabled = true;\n        } else {\n             this.$refs.circulargauge.ej2Instances.centerX = centerX.value + '%';\n             this.$refs.circulargauge.ej2Instances.centerY = centerY.value + '%';\n             centerX.disabled = false;\n             centerY.disabled = false;\n             this.$refs.circulargauge.ej2Instances.moveToCenter = false;\n        }\n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    hideLabel: function(args) {\n        this.$refs.circulargauge.ej2Instances.axes[0].hideIntersectingLabel = args.checked;\n        this.$refs.circulargauge.ej2Instances.refresh();\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\", attrs: { align: \"center\" } },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                align: \"center\",\n                load: _vm.load,\n                id: \"semi-container\",\n                moveToCenter: false\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        startAngle: _vm.startAngle,\n                        endAngle: _vm.endAngle,\n                        lineStyle: _vm.lineStyle,\n                        labelStyle: _vm.labelStyle,\n                        majorTicks: _vm.majorTicks,\n                        minorTicks: _vm.minorTicks,\n                        radius: _vm.radius,\n                        hideIntersectingLabel: true,\n                        minimum: \"0\",\n                        maximum: \"100\"\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              radius: _vm.pointerRadius,\n                              color: _vm.color,\n                              pointerWidth: _vm.pointerWidth,\n                              animation: _vm.animation,\n                              cap: _vm.cap,\n                              needleTail: _vm.needleTail\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\", margin: \"10px\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"startangle\",\n                      value: \"270\",\n                      min: \"0\",\n                      max: \"360\"\n                    },\n                    on: {\n                      pointermove: _vm.angleStart,\n                      touchmove: _vm.angleStart,\n                      change: _vm.angleStart\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                 \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"end\",\n                      value: \"270\",\n                      min: \"0\",\n                      max: \"360\"\n                    },\n                    on: {\n                      pointermove: _vm.angleEnd,\n                      touchmove: _vm.angleEnd,\n                      change: _vm.angleEnd\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                 \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"radius\",\n                      value: \"80\",\n                      min: \"0\",\n                      max: \"100\"\n                    },\n                    on: {\n                      pointermove: _vm.gaugeRadius,\n                      touchmove: _vm.gaugeRadius,\n                      change: _vm.gaugeRadius\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                 \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"padding-top\": \"0px\" } },\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"angle\",\n                      attrs: { id: \"angle\", change: _vm.onChange }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                   \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"centerX\",\n                      value: \"50\",\n                      min: \"0\",\n                      max: \"100\"\n                    },\n                    on: {\n                      pointermove: _vm.gaugeCenterX,\n                      touchmove: _vm.gaugeCenterX,\n                      change: _vm.gaugeCenterX\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"centerY\",\n                      value: \"50\",\n                      min: \"0\",\n                      max: \"100\"\n                    },\n                    on: {\n                      pointermove: _vm.gaugeCenterY,\n                      touchmove: _vm.gaugeCenterY,\n                      change: _vm.gaugeCenterY\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n            \"),\n            _c(\"tr\", [\n              _vm._m(6),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n                _c(\n                  \"div\",\n                  { staticStyle: { \"padding-top\": \"0px\" } },\n                  [\n                    _c(\"ejs-checkbox\", {\n                      ref: \"Hide\",\n                      attrs: {\n                        checked: \"true\",\n                        id: \"label\",\n                        change: _vm.hideLabel\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\")\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(7),\n    _vm._v(\" \"),\n    _vm._m(8)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangeStart\" } }, [\n        _vm._v(\"Start Angle \"),\n        _c(\"span\", [_vm._v(\"    270°\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"rangeEnd\" } }, [\n        _vm._v(\"End Angle\"),\n        _c(\"span\", [_vm._v(\"    90°\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"radius1\" } }, [\n        _vm._v(\"Radius \"),\n        _c(\"span\", [_vm._v(\"    80%\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [\n        _vm._v(\" Radius based on angle\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"center1\" } }, [\n        _vm._v(\"Center X \"),\n        _c(\"span\", [_vm._v(\"    50%\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"center2\" } }, [\n        _vm._v(\"Center Y \"),\n        _c(\"span\", [_vm._v(\"    50%\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", { staticClass: \"property-text\" }, [\n        _vm._v(\" Hide intersecting labels\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the rendering of circular gauge with modified start and end angles. Radius, start angle, end angle, center X and center Y of the circular gauge can be customized using the options in properties panel.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render the circular gauge with modified start and end angles to form semi or quarter circular gauges. By enabling the radius based on angle option, circular gauge radius will be calculated based on the start and end angles.\\n\\t\\tYou can also hide the intersect labels using 'hideIntersectingLabel' property.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the ranges can be found in this \\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/semi-circular-gauge/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });