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
/******/ 		"circular-gauge/labels/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/labels/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/labels/App.vue":
/*!***********************************************!*\
  !*** ./Samples/circular-gauge/labels/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f9fe131e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f9fe131e&scoped=true& */ \"./Samples/circular-gauge/labels/App.vue?vue&type=template&id=f9fe131e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/labels/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css& */ \"./Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f9fe131e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f9fe131e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f9fe131e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/labels/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/labels/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/circular-gauge/labels/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/labels/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f9fe131e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/labels/App.vue?vue&type=template&id=f9fe131e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/circular-gauge/labels/App.vue?vue&type=template&id=f9fe131e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f9fe131e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f9fe131e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/labels/App.vue?vue&type=template&id=f9fe131e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f9fe131e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f9fe131e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/labels/main.js":
/*!***********************************************!*\
  !*** ./Samples/circular-gauge/labels/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/labels/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-f9fe131e] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/labels/App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=f9fe131e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-f9fe131e] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/labels/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/labels/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n            annotations: [{\n                content: '<div id=\"content\" style=\"color:#518C03;font-size:20px;font-family:Segoe UI;font-weight:semibold;\">145</div>',\n                angle: 0, radius: '0%', zIndex: '1',\n            }],\n            startAngle: 210,\n            endAngle: 150,\n            lineStyle: { width: 2, color: '#9E9E9E' },\n            labelStyle: {\n                position: 'Outside', autoAngle: true,\n                font: { size: '10px' }\n            },\n            majorTicks: {\n                position: 'Inside', color: '#757575', width: 2, height: 10, interval: 20\n            },\n            minorTicks: {\n                position: 'Inside', color: '#757575', height: 5, width: 2, interval: 10\n            },\n            radius: '75%',\n            minimum: 0, \n            maximum: 170,\n            type: 'RangeBar',\n            roundedCornerRadius: 10,\n            pointerWidth: 10,\n            color: '#8BC34A',\n            radius: '60%',\n            value: 145,\n            animation: { enable: false },\n            ticksdata:[ \n            { Id:'major', level:'Major Ticks'},\n            { Id:'minor', level:'Minor Ticks'}],\n            ticksfields:{ text: 'level', value: 'Id' },\n            tickstwidth:120,\n            tickpositiondata:['Inside','Cross','Outside'],\n            tickpositionwidth:120,\n            labelpositiondata:['Outside','Cross','Inside'],\n            labelpositionwidth:120\n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n     load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    changeTicks:function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            // let tickPosition=document.getElementById('tickposition');\n            let tick; let isMajorTicks = args.value === 'major';\n            if (isMajorTicks) {\n                tick = this.$refs.circulargauge.ej2Instances.axes[0].majorTicks;\n            } else {\n                tick = this.$refs.circulargauge.ej2Instances.axes[0].minorTicks;\n            }\n            this.$refs.tickPos.ej2Instances.value = tick.position;\n            this.$refs.tickOff.value = tick.offset.toString();\n            this.$refs.tickHeight.value = tick.height.toString();\n            document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + tick.offset;\n            document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + tick.height;  \n    },\n    changeTickposition:function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            // let tickPosition=document.getElementById('tickposition');\n            let tick; let isMajorTicks = args.value === 'major';\n            let value = this.$refs.tickPos.ej2Instances.value;\n            if (isMajorTicks) {\n                this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.position = value;\n            } else {\n                this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.position = value;\n            }\n            this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    changeLabelposition:function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            // let labelPosition=document.getElementById('labelposition');\n            this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.position = this.$refs.labelPos.ej2Instances.value;\n            this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    tickOffset:function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            let isMajorTicks = args.value === 'major';\n            let value = parseInt(this.$refs.tickOff.value, 10);\n            if (isMajorTicks) {\n                this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.offset = value;\n            } else {\n                this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.offset = value;\n            }\n            document.getElementById('offset').innerHTML = 'Tick Offset <span>&nbsp;&nbsp;&nbsp;' + value;\n            this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    tickHeight:function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            let isMajorTicks = args.value === 'major';\n            let value = parseInt(this.$refs.tickHeight.value, 10);\n            if (isMajorTicks) {\n                this.$refs.circulargauge.ej2Instances.axes[0].majorTicks.height = value;\n            } else {\n                this.$refs.circulargauge.ej2Instances.axes[0].minorTicks.height = value;\n            }\n            document.getElementById('height').innerHTML = 'Tick Height <span>&nbsp;&nbsp;&nbsp;' + value;\n            this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    labelOffset:function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            let value = parseInt(this.$refs.labelOff.value, 10);\n            this.$refs.circulargauge.ej2Instances.axes[0].labelStyle.offset = value;\n            document.getElementById('labelOffsetValue').innerHTML = 'Label Offset <span>&nbsp;&nbsp;&nbsp;' + value;\n            this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    changeEnablePointer:function(e){\n        let element = (document.getElementById('enable'));\n        let boolean = (event.target).checked;\n        this.$refs.circulargauge.ej2Instances.axes[0].showLastLabel = boolean;       \n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/labels/App.vue?vue&type=template&id=f9fe131e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/labels/App.vue?vue&type=template&id=f9fe131e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-circulargauge\",\n            {\n              ref: \"circulargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: { load: _vm.load, align: \"center\", id: \"labels-container\" }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        annotations: _vm.annotations,\n                        startAngle: _vm.startAngle,\n                        endAngle: _vm.endAngle,\n                        lineStyle: _vm.lineStyle,\n                        labelStyle: _vm.labelStyle,\n                        majorTicks: _vm.majorTicks,\n                        minorTicks: _vm.minorTicks,\n                        radius: _vm.radius,\n                        minimum: \"0\",\n                        maximum: \"170\"\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              type: _vm.type,\n                              roundedCornerRadius: _vm.roundedCornerRadius,\n                              value: _vm.value,\n                              radius: _vm.radius,\n                              color: _vm.color,\n                              pointerWidth: _vm.pointerWidth,\n                              animation: _vm.animation\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\", margin: \"10px\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"tick\",\n                      attrs: {\n                        id: \"Ticks\",\n                        dataSource: _vm.ticksdata,\n                        fields: _vm.ticksfields,\n                        value: \"major\",\n                        index: \"0\",\n                        width: _vm.tickstwidth,\n                        change: _vm.changeTicks\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"tickPos\",\n                      attrs: {\n                        id: \"tickposition\",\n                        dataSource: _vm.tickpositiondata,\n                        index: \"0\",\n                        width: _vm.tickpositionwidth,\n                        change: _vm.changeTickposition\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"labelPos\",\n                      attrs: {\n                        id: \"labelposition\",\n                        dataSource: _vm.labelpositiondata,\n                        index: \"0\",\n                        width: _vm.labelpositionwidth,\n                        change: _vm.changeLabelposition\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"tickOff\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"tickOffset\",\n                      value: \"0\",\n                      min: \"0\",\n                      max: \"50\"\n                    },\n                    on: {\n                      pointermove: _vm.tickOffset,\n                      touchmove: _vm.tickOffset,\n                      change: _vm.tickOffset\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"tickHeight\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"tickHeight\",\n                      value: \"10\",\n                      min: \"1\",\n                      max: \"50\"\n                    },\n                    on: {\n                      pointermove: _vm.tickHeight,\n                      touchmove: _vm.tickHeight,\n                      change: _vm.tickHeight\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"div\", [\n                  _c(\"input\", {\n                    ref: \"labelOff\",\n                    staticStyle: { width: \"90%\" },\n                    attrs: {\n                      type: \"range\",\n                      id: \"labelOffset\",\n                      value: \"0\",\n                      min: \"0\",\n                      max: \"50\"\n                    },\n                    on: {\n                      pointermove: _vm.labelOffset,\n                      touchmove: _vm.labelOffset,\n                      change: _vm.labelOffset\n                    }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \\n                \"),\n            _c(\"tr\", [\n              _vm._m(6),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    ref: \"enable\",\n                    attrs: {\n                      id: \"enable\",\n                      name: \"enable\",\n                      change: _vm.changeEnablePointer\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\")\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(7),\n    _vm._v(\" \"),\n    _vm._m(8)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Ticks \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Tick Position \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\" Label Position \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"offset\" } }, [\n        _vm._v(\"Tick Offset \"),\n        _c(\"span\", [_vm._v(\"   0\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"height\" } }, [\n        _vm._v(\"Tick Height \"),\n        _c(\"span\", [_vm._v(\"   10\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"labelOffsetValue\" } }, [\n        _vm._v(\"Label Offset \"),\n        _c(\"span\", [_vm._v(\"   0\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"height\" } }, [_vm._v(\" Show Last Label \")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates how to customize the ticks and labels of an axis. \\n        Position, offset, and height of the tick and label can be changed by using the options provided in the property panel.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure the ticks and labels of an axis in the circular gauge. Labels are\\n        units that are used to display the values in the axis. You can customize \"\n        ),\n        _c(\"code\", [_vm._v(\"labels\")]),\n        _vm._v(\" with the properties\\n        like \"),\n        _c(\"code\", [_vm._v(\"angle\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"font\")]),\n        _vm._v(\",\\n        \"),\n        _c(\"code\", [_vm._v(\"position\")]),\n        _vm._v(\n          \", etc. Ticks are used to mark some values on the axis. You can also customize the ticks using\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"majorTicks\")]),\n        _vm._v(\",\\n        \"),\n        _c(\"code\", [_vm._v(\"minorTicks\")]),\n        _vm._v(\" properties.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the labels can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/labels/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });