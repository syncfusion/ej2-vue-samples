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
/******/ 		"grid/grid-overview/main": 0
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
/******/ 	deferredModules.push(["./Samples/grid/grid-overview/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/grid/grid-overview/App.vue":
/*!********************************************!*\
  !*** ./Samples/grid/grid-overview/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_a24b9906_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=a24b9906&scoped=true& */ \"./Samples/grid/grid-overview/App.vue?vue&type=template&id=a24b9906&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/grid/grid-overview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_a24b9906_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css& */ \"./Samples/grid/grid-overview/App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_a24b9906_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_a24b9906_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a24b9906\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/grid/grid-overview/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?");

/***/ }),

/***/ "./Samples/grid/grid-overview/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/grid/grid-overview/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/grid/grid-overview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?");

/***/ }),

/***/ "./Samples/grid/grid-overview/App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./Samples/grid/grid-overview/App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_a24b9906_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/grid/grid-overview/App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_a24b9906_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_a24b9906_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_a24b9906_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_a24b9906_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?");

/***/ }),

/***/ "./Samples/grid/grid-overview/App.vue?vue&type=template&id=a24b9906&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./Samples/grid/grid-overview/App.vue?vue&type=template&id=a24b9906&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a24b9906_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=a24b9906&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/grid/grid-overview/App.vue?vue&type=template&id=a24b9906&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a24b9906_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a24b9906_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?");

/***/ }),

/***/ "./Samples/grid/grid-overview/main.js":
/*!********************************************!*\
  !*** ./Samples/grid/grid-overview/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/grid/grid-overview/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/grid/grid-overview/App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/grid-overview/App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\nexports.i(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/index.js??ref--4!./style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), \"\");\n\n// module\nexports.push([module.i, \"\\n\", \"\", {\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"file\":\"App.vue?vue&type=style&index=0&id=a24b9906&scoped=true&lang=css&\",\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/grid/grid-overview/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/grid-overview/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"GridPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: () => {\n        return {\n            ddData: [{ value: 1000, text: '1,000 Rows and 11 Columns' }, { value: 10000, text: '10,000 Rows and 11 Columns' }],\n            ddValue: 1000,\n            stTime: null,\n            loadTime: null,\n            dReady: false,\n            isDataChanged: true,\n            fields: { text: 'text', value: 'value' },\n            empTemplate: function () {\n                return {\n                    template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('empTemplate', {\n                        template: `<div>\n                        <div class=\"e-grid-empimg\">\n                            <span :class=\"{'e-userimg': true, 'sf-grid-icon-Male': data.EmployeeImg == usermale, 'sf-grid-icon-FeMale': data.EmployeeImg == userfemale}\"></span>\n                            </span>\n                        </div>\n                        <span id=\"Emptext\">{{data.Employees}}</span>                            \n                    </div>`,\n                        data: function () { return { data: {}, usermale: 'usermale', userfemale: 'userfemale' }; }\n                    })\n                }\n            },\n            coltemplate: function () {\n                return {\n                    template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('coltemplate', {\n                        template: '<div><img src=\"./../../source/grid/images/Map.png\" class=\"e-image\" :alt=\"data.Location\"/> &nbsp<span id=\"locationtext\">{{data.Location}}</span></div>',\n                        data: function () { return { data: {} }; }\n                    })\n                }\n            },\n\n            statusTemplate: function () {\n                return {\n                    template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('statusTemplate', {\n                        template: `<div id=\"status\" :class=\"{'statustemp': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}\">\\\n         <span :class=\"{'statustxt': true, 'e-activecolor': data.Status == active, 'e-inactivecolor': data.Status == inactive}\">{{data.Status}}</span></div>`,\n                        data: function () { return { data: {}, active: 'Active', inactive: 'Inactive' }; }\n                    })\n                }\n            },\n            trustTemplate: function () {\n                return {\n                    template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('trustTemplate', {\n                        template: '<div><img style=\"width: 31px; height: 24px\" :src=\"image\" :alt=\"data.Trustworthiness\" /><span id=\"Trusttext\">{{data.Trustworthiness}}</span></div>',\n                        data: function () { return { data: {}, Perfect: 'Perfect', Sufficient: 'Sufficient', Insufficient: 'Insufficient' }; },\n                        computed: {\n                            image: function () {\n                                return './../../source/grid/images/' + this.data.Trustworthiness + '.png';\n                            }\n                        }\n                    })\n                }\n            },\n            ratingTemplate: function () {\n                return {\n                    template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('ratingTemplate', {\n                        template: '<div id=\"status\" class=\"rating\">\\\n                    <span v-for=\"i in item\" :class=\"{checked: i <= data.Rating, star: true}\"></span>\\\n                  </div>',\n                        data: function () { return { data: {}, item: [1, 2, 3, 4, 5] }; }\n                    })\n                }\n            },\n\n            progessTemplate: function () {\n                return {\n                    template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('progessTemplate', {\n                        template: `<div id=\"myProgress\" class=\"pbar\">\n                      <div id=\"myBar\" :class=\"{'bar': true, 'progressdisable': data.Status == inactive}\" :style=\"{'width': width}\">\n                        <div id=\"label\" class=\"barlabel\" v-html=width ></div>\n                      </div>\n                    </div>`,\n                        data: function () { return { data: {}, inactive: 'Inactive' }; },\n                        computed: {\n                            width: function () {\n                                if (this.data.Software <= 20) {\n                                    this.data.Software += 20;\n                                }\n                                return this.data.Software + '%';\n                            }\n                        }\n                    })\n                }\n            },\n            filterOptions: {\n                type: 'Menu'\n            },\n            filter: {\n                type: 'CheckBox'\n            },\n            selectionSettings: { persistSelection: true, type: 'Multiple', checkboxOnly: true }\n        };\n    },\n    methods: {\n        valueChange: function (args) {\n            this.$refs.dropdown.$el.ej2_instances[0].closePopup();\n            this.$refs.overviewgrid.showSpinner();\n            this.isDataChanged = true;\n            this.stTime = null;\n            let contentElement = this.$refs.overviewgrid.ej2Instances.contentModule.content;\n            contentElement.scrollLeft = 0;\n            contentElement.scrollTop = 0;\n            this.$refs.overviewgrid.ej2Instances.pageSettings.currentPage = 1;\n            this.stTime = performance.now();\n            this.ddValue = args.value;\n            this.$refs.overviewgrid.hideSpinner();\n        },\n        load: function() {\n            let proxy = this;\n            this.$refs.overviewgrid.$el.ej2_instances[0].on('data-ready', function () {\n                proxy.dReady =  true;\n             })\n            this.$refs.overviewgrid.$el.addEventListener('DOMSubtreeModified', function () {\n                if (proxy.dReady && proxy.stTime && proxy.isDataChanged) {\n                    let e = performance.now() - proxy.stTime;\n                    proxy.loadTime = \"Load Time: <b>\" + e.toFixed(0) + \"</b><b>ms</b>\";\n                    proxy.stTime = null;\n                    proxy.dReady = false;\n                    proxy.isDataChanged = false;\n                    proxy.$refs.msgelement.classList.remove('e-hide');\n                }\n            })\n        }\n    },\n    computed: {\n        getTradeData: function () {\n            let dataCount = this.ddValue;\n            let employees = [\n                'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',\n                'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',\n                'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'];\n            let designation = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead'];\n            let mail = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];\n            let location = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];\n            let status = ['Active', 'Inactive'];\n            let trustworthiness = ['Perfect', 'Sufficient', 'Insufficient'];\n            let tradeData = [];\n            let address = ['59 rue de lAbbaye', 'Luisenstr. 48', 'Rua do Paço, 67', '2, rue du Commerce', 'Boulevard Tirou, 255',\n                'Rua do mailPaço, 67', 'Hauptstr. 31', 'Starenweg 5', 'Rua do Mercado, 12',\n                'Carrera 22 con Ave. Carlos Soublette #8-35', 'Kirchgasse 6',\n                'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Kirchgasse 6',\n                'Åkergatan 24', '24, place Kléber', 'Torikatu 38', 'Berliner Platz 43', '5ª Ave. Los Palos Grandes', '1029 - 12th Ave. S.',\n                'Torikatu 38', 'P.O. Box 555', '2817 Milton Dr.', 'Taucherstraße 10', '59 rue de lAbbaye', 'Via Ludovico il Moro 22',\n                'Avda. Azteca 123', 'Heerstr. 22', 'Berguvsvägen  8', 'Magazinweg 7', 'Berguvsvägen  8', 'Gran Vía, 1', 'Gran Vía, 1',\n                'Carrera 52 con Ave. Bolívar #65-98 Llano Largo', 'Magazinweg 7', 'Taucherstraße 10', 'Taucherstraße 10',\n                'Av. Copacabana, 267', 'Strada Provinciale 124', 'Fauntleroy Circus', 'Av. dos Lusíadas, 23',\n                'Rua da Panificadora, 12', 'Av. Inês de Castro, 414', 'Avda. Azteca 123', '2817 Milton Dr.'];\n            let employeeimg = ['usermale', 'userfemale'];\n            if (typeof dataCount === 'string') {\n                dataCount = parseInt(dataCount, 10);\n            }\n            for (let i = 1; i <= dataCount; i++) {\n                let code = 10000;\n                tradeData.push({\n                    'EmployeeID': code + i,\n                    'Employees':\n                    employees[Math.floor(Math.random() * employees.length)] + ' ' + employees[Math.floor(Math.random() * employees.length)],\n                    'Designation': designation[Math.floor(Math.random() * designation.length)],\n                    'Location': location[Math.floor(Math.random() * location.length)],\n                    'Status': status[Math.floor(Math.random() * status.length)],\n                    'Trustworthiness': trustworthiness[Math.floor(Math.random() * trustworthiness.length)],\n                    'Rating': Math.floor(Math.random() * 5),\n                    'Software': Math.floor(Math.random() * 100),\n                    'EmployeeImg': employeeimg[Math.floor(Math.random() * employeeimg.length)],\n                    'CurrentSalary': Math.floor((Math.random() * 100000)),\n                    'Address': address[Math.floor(Math.random() * address.length)],\n                });\n                let employee = 'Employees';\n                let emp = tradeData[i - 1][employee];\n                let sName = emp.substr(0, emp.indexOf(' ')).toLowerCase();\n                let empmail = 'Mail';\n                tradeData[i - 1][empmail] = sName + (Math.floor(Math.random() * 100) + 10) + '@' + mail[Math.floor(Math.random() * mail.length)];\n            }\n            this.stTime = performance.now();\n            return tradeData;\n        }\n    },\n    provide: {\n        grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"Filter\"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"Sort\"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"VirtualScroll\"]]\n    }\n\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/grid/grid-overview/App.vue?vue&type=template&id=a24b9906&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/grid-overview/App.vue?vue&type=template&id=a24b9906&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"content-wrapper\" },\n      [\n        _c(\n          \"div\",\n          [\n            _c(\"ejs-dropdownlist\", {\n              ref: \"dropdown\",\n              attrs: {\n                id: \"dropdownlist\",\n                dataSource: _vm.ddData,\n                width: \"220px\",\n                fields: _vm.fields,\n                change: _vm.valueChange,\n                value: _vm.ddValue\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"span\", {\n              ref: \"msgelement\",\n              attrs: { id: \"msg\" },\n              domProps: { innerHTML: _vm._s(_vm.loadTime) }\n            }),\n            _vm._v(\" \"),\n            _c(\"br\")\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-grid\",\n          {\n            ref: \"overviewgrid\",\n            attrs: {\n              id: \"overviewgrid\",\n              dataSource: _vm.getTradeData,\n              selectionSettings: _vm.selectionSettings,\n              allowFiltering: true,\n              filterSettings: _vm.filterOptions,\n              allowSelection: true,\n              allowSorting: true,\n              enableVirtualization: true,\n              height: \"600\",\n              rowHeight: \"38\",\n              enableHover: false,\n              enableHeaderFocus: true,\n              load: _vm.load\n            }\n          },\n          [\n            _c(\n              \"e-columns\",\n              [\n                _c(\"e-column\", {\n                  attrs: {\n                    type: \"checkbox\",\n                    allowFiltering: false,\n                    allowSorting: false,\n                    width: \"60\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"EmployeeID\",\n                    visible: false,\n                    headerText: \"Employee ID\",\n                    isPrimaryKey: true,\n                    width: \"130\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Employees\",\n                    headerText: \"Employee Name\",\n                    width: \"200\",\n                    filter: _vm.filter,\n                    clipMode: \"EllipsisWithTooltip\",\n                    template: _vm.empTemplate\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Designation\",\n                    headerText: \"Designation\",\n                    width: \"170\",\n                    clipMode: \"EllipsisWithTooltip\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Mail\",\n                    headerText: \"Mail\",\n                    width: \"230\",\n                    filter: _vm.filter\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Location\",\n                    headerText: \"Location\",\n                    width: \"140\",\n                    filter: _vm.filter,\n                    template: _vm.coltemplate\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Status\",\n                    headerText: \"Status\",\n                    width: \"150\",\n                    filter: _vm.filter,\n                    template: _vm.statusTemplate\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Trustworthiness\",\n                    headerText: \"Trustworthiness\",\n                    width: \"200\",\n                    filter: _vm.filter,\n                    template: _vm.trustTemplate\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Rating\",\n                    headerText: \"Rating\",\n                    width: \"160\",\n                    template: _vm.ratingTemplate,\n                    allowFiltering: false\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Software\",\n                    allowFiltering: false,\n                    allowSorting: false,\n                    headerText: \"Software Proficiency\",\n                    width: \"180\",\n                    template: _vm.progessTemplate\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"CurrentSalary\",\n                    headerText: \"Current Salary\",\n                    format: \"C2\",\n                    width: \"160\",\n                    textAlign: \"Right\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"Address\",\n                    headerText: \"Address\",\n                    width: \"240\",\n                    clipMode: \"EllipsisWithTooltip\"\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the overview of basic grid features with its performance metrics of large data. To change datasource\\n            count, select rows and columns count from dropdown.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            The Grid is used to display and manipulate tabular data with configuration options to control the way the data is presented\\n            and manipulated. It will pull the data from a data source, such as an array of JSON objects, OData web services,\\n            or \"\n        ),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href:\n                  \"http://ej2.syncfusion.com/documentation/data/api-dataManager.html\"\n              }\n            },\n            [_vm._v(\"\\n            DataManager\")]\n          )\n        ]),\n        _vm._v(\n          \" binding data fields to columns. Also, displaying a column header to identify the field with\\n            support for grouped records.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n            In this demo, Grid features such as \"),\n        _c(\"code\", [\n          _vm._v(\n            \"Virtual Scrolling, Filtering, Sorting, Column Template, filter template \"\n          )\n        ]),\n        _vm._v(\n          \" etc... are\\n            used along with large data source.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\n        \" More information on the Grid instantiation can be found in this\\n        \"\n      ),\n      _c(\n        \"a\",\n        {\n          attrs: {\n            target: \"_blank\",\n            href:\n              \"http://ej2.syncfusion.com/vue/documentation/grid/getting-started.html#getting-started\"\n          }\n        },\n        [_vm._v(\"documentation section\")]\n      ),\n      _vm._v(\".\\n        \"),\n      _c(\"p\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/grid/grid-overview/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });