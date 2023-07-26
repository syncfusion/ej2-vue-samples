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
/******/ 		"schedule/year/main": 0
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
/******/ 	deferredModules.push(["./Samples/schedule/year/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/schedule/year/App.vue":
/*!***************************************!*\
  !*** ./Samples/schedule/year/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=34c3323a& */ \"./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/schedule/year/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_34c3323a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=34c3323a&lang=css& */ \"./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/schedule/year/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/schedule/year/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&":
/*!************************************************************************************!*\
  !*** ./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34c3323a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=34c3323a&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34c3323a_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34c3323a_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34c3323a_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_34c3323a_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&":
/*!**********************************************************************!*\
  !*** ./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=34c3323a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/main.js":
/*!***************************************!*\
  !*** ./Samples/schedule/year/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/schedule/year/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.year-view.e-schedule .e-timeline-year-view .e-resource-column-table,\\n.year-view.e-schedule .e-timeline-year-view .e-resource-left-td {\\n  width: 120px;\\n}\\n.year-property-panel td {\\n  padding-bottom: 1rem;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/schedule-vue-samples_development/Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;EAEE,aAAa;CACd;AACD;EACE,qBAAqB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=34c3323a&lang=css&\",\"sourcesContent\":[\"\\n.year-view.e-schedule .e-timeline-year-view .e-resource-column-table,\\n.year-view.e-schedule .e-timeline-year-view .e-resource-left-td {\\n  width: 120px;\\n}\\n.year-property-panel td {\\n  padding-bottom: 1rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-schedule */ \"./node_modules/@syncfusion/ej2-vue-schedule/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"SchedulePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"NumericTextBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      eventSettings: {\n        dataSource: this.generateEvents()\n      },\n      categoriesData: [\n        { text: \"Nancy\", id: 1, color: \"#df5286\" },\n        { text: \"Steven\", id: 2, color: \"#7fa900\" },\n        { text: \"Robert\", id: 3, color: \"#ea7a57\" },\n        { text: \"Smith\", id: 4, color: \"#5978ee\" },\n        { text: \"Michael\", id: 5, color: \"#df5286\" }\n      ],\n      groupSettings: { resources: [\"Categories\"] },\n      months: [\n        { text: 'January', value: 0 },\n        { text: 'February', value: 1 },\n        { text: 'March', value: 2 },\n        { text: 'April', value: 3 },\n        { text: 'May', value: 4 },\n        { text: 'June', value: 5 },\n        { text: 'July', value: 6 },\n        { text: 'August', value: 7 },\n        { text: 'September', value: 8 },\n        { text: 'October', value: 9 },\n        { text: 'November', value: 10 },\n        { text: 'December', value: 11 }\n      ],\n      fields: { text: 'text', value: 'value' },\n      firstMonthValue: 0,\n      monthsCount: 12,\n      min: 1,\n      max: 24,\n    };\n  },\n  provide: {\n    schedule: [_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Year\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"TimelineYear\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Resize\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"DragAndDrop\"]]\n  },\n  methods: {\n    onEventRendered: function(args) {\n      let eventColor = args.data.EventColor;\n      if (!args.element || !eventColor) {\n        return;\n      }\n      args.element.style.backgroundColor = eventColor;\n    },\n    firstMonthOfYear: function(args) {\n      this.$refs.ScheduleObj.ej2Instances.firstMonthOfYear = args.value;\n    },\n    numberOfMonths: function(args) {\n      this.$refs.ScheduleObj.ej2Instances.monthsCount = args.value;\n    },\n    generateEvents(count = 250, date = new Date()) {\n      const names = [\n        \"Bering Sea Gold\", \"Technology\", \"Maintenance\", \"Meeting\", \"Travelling\", \"Annual Conference\",\n        \"Birthday Celebration\", \"Farewell Celebration\", \"Wedding Anniversary\", \"Alaska: The Last Frontier\",\n        \"Deadliest Catch\", \"Sports Day\", \"MoonShiners\", \"Close Encounters\", \"HighWay Thru Hell\", \"Daily Planet\",\n        \"Cash Cab\", \"Basketball Practice\", \"Rugby Match\", \"Guitar Class\", \"Music Lessons\", \"Doctor checkup\",\n        \"Brazil - Mexico\", \"Opening ceremony\", \"Final presentation\"\n      ];\n      const colors = [\n        \"#ff8787\", \"#9775fa\", \"#748ffc\", \"#3bc9db\", \"#69db7c\", \"#fdd835\", \"#748ffc\", \n        \"#9775fa\", \"#df5286\", \"#7fa900\", \"#fec200\", \"#5978ee\", \"#00bdae\", \"#ea80fc\"\n      ];\n      const startDate = new Date(date.getFullYear() - 2, 0, 1);\n      const endDate = new Date(date.getFullYear() + 2, 11, 31);\n      const dateCollections = [];\n      for (let a = 0, id = 1; a < count; a++) {\n        const start = new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());\n        const end = new Date(new Date(start.getTime()).setHours(start.getHours() + 1));\n        const nCount = Math.floor(Math.random() * names.length);\n        const n = Math.floor(Math.random() * colors.length);\n        dateCollections.push({\n          Id: id,\n          Subject: names[nCount],\n          StartTime: new Date(start.getTime()),\n          EndTime: new Date(end.getTime()),\n          IsAllDay: id % 10 ? true : false,\n          EventColor: colors[n],\n          TaskId: (id % 5) + 1\n        });\n        id++;\n      }\n      return dateCollections;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"schedule-vue-sample\" }, [\n    _c(\"div\", { staticClass: \"col-md-9 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-schedule\",\n            {\n              ref: \"ScheduleObj\",\n              attrs: {\n                id: \"Schedule\",\n                cssClass: \"year-view\",\n                height: \"650px\",\n                firstMonthOfYear: _vm.firstMonthValue,\n                monthsCount: _vm.monthsCount,\n                eventSettings: _vm.eventSettings,\n                eventRendered: _vm.onEventRendered,\n              },\n            },\n            [\n              _c(\n                \"e-views\",\n                [\n                  _c(\"e-view\", {\n                    attrs: { option: \"Year\", isSelected: \"true\" },\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-view\", {\n                    attrs: {\n                      option: \"TimelineYear\",\n                      displayName: \"Horizontal TimelineYear\",\n                    },\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-view\", {\n                    attrs: {\n                      option: \"TimelineYear\",\n                      displayName: \"Vertical TimelineYear\",\n                      orientation: \"Vertical\",\n                      group: _vm.groupSettings,\n                    },\n                  }),\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"e-resources\",\n                [\n                  _c(\"e-resource\", {\n                    attrs: {\n                      field: \"TaskId\",\n                      title: \"Category\",\n                      name: \"Categories\",\n                      allowMultiple: \"true\",\n                      dataSource: _vm.categoriesData,\n                      textField: \"text\",\n                      idField: \"id\",\n                      colorField: \"color\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticClass: \"year-property-panel\",\n          attrs: { id: \"property\", title: \"Properties\" },\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\n                \"td\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"firstMonthElement\",\n                      placeholder: \"First month of year\",\n                      floatLabelType: \"Always\",\n                      dataSource: _vm.months,\n                      value: _vm.firstMonthValue,\n                      fields: _vm.fields,\n                      change: _vm.firstMonthOfYear,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _c(\n                \"td\",\n                [\n                  _c(\"ejs-numerictextbox\", {\n                    attrs: {\n                      id: \"numberOfMonthsElement\",\n                      placeholder: \"Number of months\",\n                      floatLabelType: \"Always\",\n                      min: _vm.min,\n                      max: _vm.max,\n                      value: _vm.monthsCount,\n                      format: \"###.##\",\n                      change: _vm.numberOfMonths,\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n          ]),\n        ]\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This example showcases the year and timeline year views of the Scheduler with the firstMonthOfYear and monthCount properties customizations.\\n      Once the property value has been changed in the properties, it will be reflected in the Scheduler.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n      In this demo, we have showcased the\\n      \"),\n        _c(\"code\", [_vm._v(\"Year\")]),\n        _vm._v(\" and\\n      \"),\n        _c(\"code\", [_vm._v(\"TimelineYear\")]),\n        _vm._v(\n          \" views that help to view the appointment in an annual calendar view. The view options are enabled by using the views property.\\n      In the\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"TimelineYear\")]),\n        _vm._v(\",\\n      \"),\n        _c(\"code\", [_vm._v(\"Horizontal\")]),\n        _vm._v(\" and\\n      \"),\n        _c(\"code\", [_vm._v(\"Vertical\")]),\n        _vm._v(\n          \" orientations are available to view the events with a different layout. Also this demo explains the customization of the different\\n      starting month of the year using \"\n        ),\n        _c(\"code\", [_vm._v(\"firstMonthOfYear\")]),\n        _vm._v(\" property and the number of months using the \"),\n        _c(\"code\", [_vm._v(\"monthsCount\")]),\n        _vm._v(\" property.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"strong\", [_vm._v(\"Module Injection\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      To work with Year and TimelineYear views on Scheduler – it is necessary to inject the\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"Year\")]),\n        _vm._v(\" and\\n      \"),\n        _c(\"code\", [_vm._v(\"TimelineYear\")]),\n        _vm._v(\" module into the\\n      \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=34c3323a&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=style&index=0&id=34c3323a&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"018af254\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });