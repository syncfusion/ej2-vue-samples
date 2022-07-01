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
/******/ 		"uploader/chunk-upload/main": 0
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
/******/ 	deferredModules.push(["./Samples/uploader/chunk-upload/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/uploader/chunk-upload/App.vue":
/*!***********************************************!*\
  !*** ./Samples/uploader/chunk-upload/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_716ee090_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=716ee090&scoped=true& */ \"./Samples/uploader/chunk-upload/App.vue?vue&type=template&id=716ee090&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/uploader/chunk-upload/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_716ee090_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css& */ \"./Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_716ee090_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_716ee090_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"716ee090\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/uploader/chunk-upload/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?");

/***/ }),

/***/ "./Samples/uploader/chunk-upload/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/uploader/chunk-upload/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/uploader/chunk-upload/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?");

/***/ }),

/***/ "./Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_716ee090_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_716ee090_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_716ee090_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_716ee090_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_716ee090_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?");

/***/ }),

/***/ "./Samples/uploader/chunk-upload/App.vue?vue&type=template&id=716ee090&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/uploader/chunk-upload/App.vue?vue&type=template&id=716ee090&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_716ee090_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=716ee090&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/chunk-upload/App.vue?vue&type=template&id=716ee090&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_716ee090_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_716ee090_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?");

/***/ }),

/***/ "./Samples/uploader/chunk-upload/main.js":
/*!***********************************************!*\
  !*** ./Samples/uploader/chunk-upload/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/uploader/chunk-upload/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.chunk .control_wrapper[data-v-716ee090] {\\n    max-width: 450px;\\n    min-width: 245px;\\n    margin: auto;\\n}\\n#chunkupload .e-upload.e-control[data-v-716ee090] {\\n    position: relative;\\n    margin: 15px 0;\\n}\\n.control-section .uploader.col-lg-8[data-v-716ee090] {\\n    padding: 20px;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/uts-vue-samples_development-F5F5PTSUAV7LW2UFX2U6PDJSQOER7LJSEKP5DGZR5WFAUMILFS4A/Samples/uploader/chunk-upload/App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=716ee090&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.chunk .control_wrapper[data-v-716ee090] {\\n    max-width: 450px;\\n    min-width: 245px;\\n    margin: auto;\\n}\\n#chunkupload .e-upload.e-control[data-v-716ee090] {\\n    position: relative;\\n    margin: 15px 0;\\n}\\n.control-section .uploader.col-lg-8[data-v-716ee090] {\\n    padding: 20px;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/uploader/chunk-upload/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/chunk-upload/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs/uploader */ \"./node_modules/@syncfusion/ej2-vue-inputs/uploader.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"UploaderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function(){\n        return {\n          path:  {\n            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',\n            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',\n            chunkSize: 500000\n          },\n\t\t  isAuto: false,\n          dropElement: '.control-fluid',\n          currentIndex: 0,\n          isInteraction: false,\n        items: [\n            { sizeVal: '500000' , sizeTxt: '500 KB' },\n            { sizeVal: '1000000' , sizeTxt: '1 MB' },\n            { sizeVal: '2000000' , sizeTxt: '2 MB' },\n        ],\n        fields: { text: 'sizeTxt', value: 'sizeVal' },\n          popupHeight: 200,\n          change: (args) => {\n            this.$refs.uploadObj.asyncSettings.chunkSize = parseInt(args.itemData.value, 10);\n          }\n        }\n    },\n    methods:{\n        // to update flag variable value for automatic pause and resume\n        onPausing: function(args) {\n            if (args.event !== null && !navigator.onLine) {\n                this.isInteraction = true;\n            } else {\n                this.isInteraction = false;\n            }\n        },\n        // to update flag variable value for automatic pause and resume\n        onResuming: function(args) {\n            if (args.event !== null && !navigator.onLine) {\n                this.isInteraction = true;\n            } else {\n                this.isInteraction = false;\n            }\n        },\n        onFileRemove: function (args) {\n            args.postRawFile = false;\n        },\n        // to prevent triggering chunk-upload failure event and to pause uploading on network failure\n        onBeforeFailure: function (args) {\n            let proxy = this;\n            args.cancel = !this.isInteraction;\n            /* tslint:disable */\n            // interval to check network availability on every 500 milliseconds\n            let clearTimeInterval = setInterval(() => {\n                if (navigator.onLine && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(proxy.$refs.uploadObj.getFilesData()[0]) && proxy.$refs.uploadObj.getFilesData()[0].statusCode == 4) {\n                    proxy.$refs.uploadObj.resume(proxy.$refs.uploadObj.getFilesData());\n                    clearSetInterval();\n                } else {\n                    if (!proxy.isInteraction && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(proxy.$refs.uploadObj.getFilesData()[0]) && proxy.$refs.uploadObj.getFilesData()[0].statusCode == 3) {\n                        proxy.$refs.uploadObj.pause(proxy.$refs.uploadObj.getFilesData());\n                    }\n                }\n            }, 500);\n            // clear Interval after when network is available.\n            function clearSetInterval() {\n                clearInterval(clearTimeInterval);\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/uploader/chunk-upload/App.vue?vue&type=template&id=716ee090&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/uploader/chunk-upload/App.vue?vue&type=template&id=716ee090&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-8 control-section uploader chunk\"},[_c('div',{staticClass:\"control_wrapper\"},[_c('ejs-uploader',{ref:\"uploadObj\",attrs:{\"id\":\"chunkupload\",\"name\":\"UploadFiles\",\"autoUpload\":_vm.isAuto,\"asyncSettings\":_vm.path,\"dropArea\":_vm.dropElement,\"maxFileSize\":\"104857600\",\"removing\":_vm.onFileRemove,\"pausing\":_vm.onPausing,\"resuming\":_vm.onResuming,\"chunkFailure\":_vm.onBeforeFailure}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',[_c('td',{staticClass:\"left-side\"},[_vm._v(\"Chunk size :\")]),_vm._v(\" \"),_c('td',[_c('div',{attrs:{\"id\":\"default\"}},[_c('ejs-dropdownlist',{attrs:{\"id\":\"chunk-sizes\",\"fields\":_vm.fields,\"index\":_vm.currentIndex,\"dataSource\":_vm.items,\"popupHeight\":_vm.popupHeight,\"change\":_vm.change}})],1)])])])])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This \"),_c('a',{attrs:{\"href\":\"https://www.syncfusion.com/vue-ui-components/vue-file-upload\",\"target\":\"_blank\"}},[_vm._v(\" Vue File Upload\")]),_vm._v(\" example demonstrates the chunk upload functionalities of the Uploader component.\\n          Browse or drag-and-drop a large file to upload with pause, resume, and retry options. \")]),_vm._v(\" \"),_c('p',[_vm._v(\"Also, configured property panel to change the chunk size dynamically.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"When the file size is large or transfer the file with slow network connection, the chunk upload feature slices the files and upload the sliced chunks to server in sequential order\\n           using the \"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/uploader/asyncSettingsModel/#chunksize\",\"target\":\"_blank\"}},[_vm._v(\" chunkSize\")]),_vm._v(\" API. It will slice the files and upload it in sequential order.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"The sample is configured with the following options:\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"While uploading, you can pause the upload and resume it later.\")]),_vm._v(\" \"),_c('li',[_vm._v(\" If the upload fails, retry option will be enabled.\")]),_vm._v(\" \"),_c('li',[_vm._v(\" The sample is configured with maximum file size as `100 MB` to upload.\")])]),_vm._v(\" \"),_c('h4',[_vm._v(\"Automatic pause and resume\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            If the application lost its connection (\"),_c('code',[_vm._v(\"offline\")]),_vm._v(\"), the upload component pauses the process automatically. After the connection is up (\"),_c('code',[_vm._v(\"online\")]),_vm._v(\"), the upload component will resume its process.\\n          \")]),_vm._v(\" \"),_c('p',[_vm._v(\"More information on the Uploader instantiation can be found in this \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/uploader/chunk-upload/\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/uploader/chunk-upload/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });