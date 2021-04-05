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
/******/ 		"treemap/layout/main": 0
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
/******/ 	deferredModules.push(["./Samples/treemap/layout/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/treemap/layout/App.vue":
/*!****************************************!*\
  !*** ./Samples/treemap/layout/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_e16f2c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=e16f2c7e&scoped=true& */ \"./Samples/treemap/layout/App.vue?vue&type=template&id=e16f2c7e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/treemap/layout/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css& */ \"./Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_e16f2c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_e16f2c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e16f2c7e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/treemap/layout/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?");

/***/ }),

/***/ "./Samples/treemap/layout/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/treemap/layout/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/treemap/layout/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?");

/***/ }),

/***/ "./Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16f2c7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?");

/***/ }),

/***/ "./Samples/treemap/layout/App.vue?vue&type=template&id=e16f2c7e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./Samples/treemap/layout/App.vue?vue&type=template&id=e16f2c7e&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e16f2c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=e16f2c7e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/layout/App.vue?vue&type=template&id=e16f2c7e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e16f2c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e16f2c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?");

/***/ }),

/***/ "./Samples/treemap/layout/main.js":
/*!****************************************!*\
  !*** ./Samples/treemap/layout/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/treemap/layout/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/treemap/layout/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-text[data-v-e16f2c7e] {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n    font-size: 13px !important;\\n    font-weight: 400 !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/-treemap-vue-samples_master-JVFBB5II7S5VQS6QU3Q34AFRTO4FYDMRYMF3HL2CLP3QIMPPAEDA/Samples/treemap/layout/App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,uFAAuF;IACvF,2BAA2B;IAC3B,4BAA4B;CAC/B\",\"file\":\"App.vue?vue&type=style&index=0&id=e16f2c7e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-text[data-v-e16f2c7e] {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n    font-size: 13px !important;\\n    font-weight: 400 !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/treemap/layout/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/layout/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-treemap */ \"./node_modules/@syncfusion/ej2-vue-treemap/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../treemap/treemap-data/econmics'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        // To config title for treemap \n        titleSettings: {\n            text: 'Top 10 countries by GDP Nominal - 2015',\n            textStyle: {size: '15px'}\n        },\n        dataSource: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../treemap/treemap-data/econmics'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n        weightValuePath: 'GDP',\n         // To config tooltip for treemap \n        tooltipSettings: {\n            visible: true,\n            format: '${State}<br>Rank : ${Rank}'\n\n        },\n        rangeColorValuePath: 'GDP',\n        // To config leafitem customization for treemap\n        leafItemSettings: {\n            labelPath: 'State',\n            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',\n            labelStyle: {\n                color: '#000000'\n            },\n            border: {\n                color: '#000000',\n                width: 0.5\n            },\n            colorMapping: [\n                {\n                    from: 1550,\n                    to: 17946,\n                    color: '#9cbb59',\n                    minOpacity: 0.7,\n                    maxOpacity: 1,\n                }\n            ]\n        },\n        layoutModedata:[\n        { Id:'Squarified', level:'Squarified'},\n        { Id:'SliceAndDiceHorizontal', level:'Horizontal'},\n        { Id:'SliceAndDiceVertical', level:'Vertical'},\n        { Id:'SliceAndDiceAuto', level:'Auto'}],\n        labelsfields:{ text: 'level', value: 'Id' },\n        layoutModeplaceholder: 'Select layoutMode type',\n        layoutModewidth: 120,\n        directionModedata:[\n        { Id:'TopLeftBottomRight', level:'TopLeftBottomRight'},\n        { Id:'TopRightBottomLeft', level:'TopRightBottomLeft'},\n        { Id:'BottomLeftTopRight', level:'BottomLeftTopRight'},\n        { Id:'BottomRightTopLeft', level:'BottomRightTopLeft'}],\n        directionfields:{ text: 'level', value: 'Id' },\n        directionModeplaceholder: 'Select layoutMode type',\n        directionModewidth: 115\n}\n},\nprovide:{\n    treemap:[_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapTooltip\"]]\n},\nmethods:{\n    /* custom code start */\n    load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material'; \n        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));\n    },\n    /* custom code end */\n    changeLayoutMode:function(args){\n        this.$refs.treemap.ej2Instances.layoutType = this.$refs.layoutMode.ej2Instances.value;\n        this.$refs.treemap.ej2Instances.refresh();\n    },\n    changedirectionMode:function(args){\n        this.$refs.treemap.ej2Instances.renderDirection = this.$refs.directionMode.ej2Instances.value;\n        this.$refs.treemap.ej2Instances.refresh();\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/layout/App.vue?vue&type=template&id=e16f2c7e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/layout/App.vue?vue&type=template&id=e16f2c7e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-9 control-section\" },\n      [\n        _c(\"ejs-treemap\", {\n          ref: \"treemap\",\n          attrs: {\n            id: \"layout-container\",\n            load: _vm.load,\n            align: \"center\",\n            titleSettings: _vm.titleSettings,\n            rangeColorValuePath: _vm.rangeColorValuePath,\n            format: \"n\",\n            useGroupingSeparator: \"useGroupingSeparator\",\n            dataSource: _vm.dataSource,\n            leafItemSettings: _vm.leafItemSettings,\n            tooltipSettings: _vm.tooltipSettings,\n            weightValuePath: _vm.weightValuePath\n          }\n        }),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"40%\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"layoutMode\",\n                    attrs: {\n                      id: \"layoutMode\",\n                      dataSource: _vm.layoutModedata,\n                      fields: _vm.labelsfields,\n                      value: \"Squarified\",\n                      index: \"0\",\n                      placeholder: _vm.layoutModeplaceholder,\n                      width: _vm.layoutModewidth,\n                      change: _vm.changeLayoutMode\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"40%\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"directionMode\",\n                    attrs: {\n                      id: \"directionMode\",\n                      dataSource: _vm.directionModedata,\n                      fields: _vm.directionfields,\n                      value: \"TopLeftBottomRight\",\n                      index: \"0\",\n                      placeholder: _vm.directionModeplaceholder,\n                      width: _vm.directionModewidth,\n                      change: _vm.changedirectionMode\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n            \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \" https://www.reinisfischer.com/top-10-largest-economies-world-gdp-nominal-2015\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"www.reinisfischer.com\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"property-text\",\n          staticStyle: { \"padding-top\": \"0px !important\" }\n        },\n        [_vm._v(\"Layout Type\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"property-text\",\n          staticStyle: { \"padding-top\": \"0px !important\" }\n        },\n        [_vm._v(\"Render Direction\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates the GDP nominal of top 10 countries in the year 2015. The layout and rendering direction of the TreeMap can be changed by using the \"\n        ),\n        _c(\"code\", [_vm._v(\"Layout Type\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"Render Direction\")]),\n        _vm._v(\" in the properties panel.\\n    \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"In this example, you can change the layout of the TreeMap as desaturation color mapping has been applied to denote the weightage of the items by varying the fill color. The label's text also has been formatted and placed in multiple lines.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch-enabled devices.\\n    \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/layout/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });