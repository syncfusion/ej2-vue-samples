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
/******/ 		"color-picker/api/main": 0
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
/******/ 	deferredModules.push(["./Samples/color-picker/api/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/color-picker/api/App.vue":
/*!******************************************!*\
  !*** ./Samples/color-picker/api/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_d80751ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d80751ae&scoped=true& */ \"./Samples/color-picker/api/App.vue?vue&type=template&id=d80751ae&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/color-picker/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_d80751ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css& */ \"./Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_d80751ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_d80751ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d80751ae\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/color-picker/api/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/api/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/color-picker/api/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d80751ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d80751ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d80751ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d80751ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d80751ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/api/App.vue?vue&type=template&id=d80751ae&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./Samples/color-picker/api/App.vue?vue&type=template&id=d80751ae&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d80751ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=d80751ae&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/api/App.vue?vue&type=template&id=d80751ae&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d80751ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d80751ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/api/main.js":
/*!******************************************!*\
  !*** ./Samples/color-picker/api/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/color-picker/api/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/color-picker/api/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-panel-content[data-v-d80751ae] {\\n    padding: 0 10px 10px 0;\\n    overflow: auto;\\n}\\n#colorpicker-control[data-v-d80751ae] {\\n    margin: 30px auto;\\n    padding-top: 50px;\\n    text-align: center;\\n}\\n#colorpicker-control h4[data-v-d80751ae] {\\n    margin-bottom: 20px;\\n}\\n.e-bigger #colorpicker-control h4[data-v-d80751ae] {\\n    font-size: 20px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-HDQEWOHKK4ROBQTKHEEVAL6MVLGEH6ZUTQSWDUDGZL3GN4MELIRQ/Samples/color-picker/api/App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,uBAAuB;IACvB,eAAe;CAClB;AACD;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,gBAAgB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=d80751ae&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-panel-content[data-v-d80751ae] {\\n    padding: 0 10px 10px 0;\\n    overflow: auto;\\n}\\n#colorpicker-control[data-v-d80751ae] {\\n    margin: 30px auto;\\n    padding-top: 50px;\\n    text-align: center;\\n}\\n#colorpicker-control h4[data-v-d80751ae] {\\n    margin-bottom: 20px;\\n}\\n.e-bigger #colorpicker-control h4[data-v-d80751ae] {\\n    font-size: 20px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/api/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/api/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"ColorPickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"CheckBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            hex: '#0db1e7',\n            mode: 'picker',\n            disabled: false,\n            showButtons: true,\n            modeSwitcher: true,\n            items: [\n                { mode: 'Picker' },\n                { mode: 'Palette' }\n            ],\n            fields: { text: 'mode', value: 'mode' }\n        };\n    },\n    computed: {\n        hexValue: {\n            get: function () {\n                return this.hex;\n            },\n            set: function (hex) {\n                this.hex = hex\n            }\n        },\n        modeValue: {\n            get: function () {\n                return this.mode;\n            },\n            set: function (mode) {\n                this.mode = mode\n            }\n        },\n        disabledValue: {\n            get: function () {\n                return this.disabled;\n            },\n            set: function (disabled) {\n                this.disabled = disabled\n            }\n        },\n        modeSwitcherValue: {\n            get: function () {\n                return this.modeSwitcher;\n            },\n            set: function (modeSwitcher) {\n                this.modeSwitcher = modeSwitcher\n            }\n        },\n        showButtonsValue: {\n            get: function () {\n                return this.showButtons;\n            },\n            set: function (showButtons) {\n                this.showButtons = showButtons\n            }\n        }\n    },\n    methods: {\n        onChange: function(args) {\n            const val = args.target.value;\n            // Sets to color picker default color value if user enters the invalid hex code\n            this.hexValue = val && val.length > 2 ? (val[0] !== '#' ? `#${val}` : val) : '#008000';\n        },\n        change: function(args) {\n            this.hexValue = args.currentValue.hex;\n        },\n        modeChange: function(args) {\n            this.modeValue = args.value;\n        },\n        button_onChange: function(args) {\n            this.showButtonsValue = args.checked;\n        },\n        mode_onChange: function(args) {\n            this.modeSwitcherValue = args.checked;\n        },\n        disabled_onChange: function(args) {\n            this.disabledValue = args.checked;\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/api/App.vue?vue&type=template&id=d80751ae&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/api/App.vue?vue&type=template&id=d80751ae&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        { attrs: { id: \"colorpicker-control\" } },\n        [\n          _c(\"h4\", [_vm._v(\"Choose a color\")]),\n          _vm._v(\" \"),\n          _c(\"ejs-colorpicker\", {\n            ref: \"colorPicker\",\n            attrs: {\n              showButtons: _vm.showButtonsValue,\n              disabled: _vm.disabledValue,\n              modeSwitcher: _vm.modeSwitcherValue,\n              id: \"color-picker\",\n              mode: _vm.modeValue,\n              value: _vm.hexValue,\n              change: _vm.change\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n                _c(\"div\", { staticStyle: { \"max-width\": \"200px\" } }, [\n                  _c(\"input\", {\n                    ref: \"inputValue\",\n                    staticClass: \"e-input\",\n                    attrs: { maxlength: 9, value: \"#0db1e7\", type: \"text\" },\n                    on: { input: _vm.onChange }\n                  })\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-top\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    { staticStyle: { \"max-width\": \"200px\" } },\n                    [\n                      _c(\"ejs-dropdownlist\", {\n                        attrs: {\n                          dataSource: _vm.items,\n                          value: \"Picker\",\n                          fields: _vm.fields,\n                          change: _vm.modeChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-top\": \"15px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: { change: _vm.disabled_onChange }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-top\": \"15px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: { checked: true, change: _vm.button_onChange }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-top\": \"15px\" } },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: { checked: true, change: _vm.mode_onChange }\n                  })\n                ],\n                1\n              )\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(5),\n    _vm._v(\" \"),\n    _vm._m(6)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Value\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\", \"padding-top\": \"10px\" } }, [\n      _c(\"div\", [_vm._v(\"Mode\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\", \"padding-top\": \"15px\" } }, [\n      _c(\"div\", [_vm._v(\"Disable\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\", \"padding-top\": \"15px\" } }, [\n      _c(\"div\", [_vm._v(\"Show Buttons\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\", \"padding-top\": \"15px\" } }, [\n      _c(\"div\", [_vm._v(\"Mode Switcher\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates customization of the ColorPicker component by using its properties from the property pane. Select\\n        any combination of properties from the property pane to customize the ColorPicker component.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The ColorPicker is a user interface to select and adjust color values. This supports various color specifications like RGB\\n        (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, ColorPicker is rendered with default configuration.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"This sample can be customized further with the combination of ColorPicker properties from the property pane. For example,\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Control (apply/cancel) buttons can be enabled or disabled using\\n            \"\n          ),\n          _c(\"i\", [_vm._v(\"Show Buttons\")]),\n          _vm._v(\" checkbox from the property pane.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"You can select the color by entering the color value in the property pane\\n            \"\n          ),\n          _c(\"i\", [_vm._v(\"Value\")]),\n          _vm._v(\" textbox.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"You can switch to 'Picker' and 'Palette' modes by clicking and selecting the mode from\\n            \"\n          ),\n          _c(\"i\", [_vm._v(\"Select Mode\")]),\n          _vm._v(\" dropdownlist.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"you can enable or disable the ColorPicker using\\n            \"\n          ),\n          _c(\"i\", [_vm._v(\"Disabled\")]),\n          _vm._v(\" checkbox from property pane.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"you can enable or disable the mode switcher using\\n            \"\n          ),\n          _c(\"i\", [_vm._v(\"Mode Switcher\")]),\n          _vm._v(\" checkbox from property pane.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about ColorPicker can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/api/color-picker\"\n            }\n          },\n          [_vm._v(\"\\n            documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/color-picker/api/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });