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
/******/ 		"predefined-dialog/animation/main": 0
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
/******/ 	deferredModules.push(["./Samples/predefined-dialog/animation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/predefined-dialog/animation/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/predefined-dialog/animation/App.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3add6492_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3add6492&scoped=true& */ \"./Samples/predefined-dialog/animation/App.vue?vue&type=template&id=3add6492&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/predefined-dialog/animation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3add6492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css& */ \"./Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3add6492_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3add6492_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3add6492\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/predefined-dialog/animation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/animation/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/predefined-dialog/animation/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/animation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3add6492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3add6492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3add6492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3add6492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3add6492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/animation/App.vue?vue&type=template&id=3add6492&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./Samples/predefined-dialog/animation/App.vue?vue&type=template&id=3add6492&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3add6492_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3add6492&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/animation/App.vue?vue&type=template&id=3add6492&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3add6492_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3add6492_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialog/animation/main.js":
/*!*****************************************************!*\
  !*** ./Samples/predefined-dialog/animation/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/predefined-dialog/animation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-btn-hide[data-v-3add6492] {\\n\\t\\tdisplay: none;\\n}\\n    /* custom code start */\\n.dlgbtn[data-v-3add6492] {\\n\\t    margin-right: 2%;\\n}\\n.control-section[data-v-3add6492] {\\n        height: 100%;\\n        min-height: 350px;\\n}\\n    /* custom code end */\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ups-vue-samples_development-X5FQGTAEE77BIOG4VJEY7D6J7R7DIQAUFAFTI2UG4SVDPYRGNC7A/Samples/predefined-dialog/animation/App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;CACf;IACG,uBAAuB;AAC3B;KACK,iBAAiB;CACrB;AACD;QACQ,aAAa;QACb,kBAAkB;CACzB;IACG,qBAAqB\",\"file\":\"App.vue?vue&type=style&index=0&id=3add6492&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-btn-hide[data-v-3add6492] {\\n\\t\\tdisplay: none;\\n}\\n    /* custom code start */\\n.dlgbtn[data-v-3add6492] {\\n\\t    margin-right: 2%;\\n}\\n.control-section[data-v-3add6492] {\\n        height: 100%;\\n        min-height: 350px;\\n}\\n    /* custom code end */\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/animation/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialog/animation/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return { }\n    },\n    methods: {\n        confirmBtnClick: function () {\n            _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].confirm({\n                title: \" Delete Multiple Items\",\n                content: \"Are you sure you want to permanently delete these items?\",\n                okButton: { text: \"Okay \" },\n                cancelButton: { text: \"Cancel \" },\n                showCloseIcon: true,\n                closeOnEscape: true,\n                animationSettings: { effect: 'Zoom',delay:0,duration: 250},\n                position: { X: 'center', Y: 'center' },\n                width:'420px'\n            });\n        },\n        onChange(value) {\n            var args = {\n            title: \" Delete Multiple Items\",\n            content: \"Are you sure you want to permanently delete these items?\",\n            okButton: { text: \"Okay \" },\n            cancelButton: { text: \"Cancel \" },\n            showCloseIcon: true,\n            closeOnEscape: true,\n            animationSettings: { effect: 'Zoom',delay:0,duration: 250},\n            position: { X: 'center', Y: 'center' },\n            width:'420px'\n        }\n            args.animationSettings.effect = value;\n            _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].confirm(args);\n        }\n    },\n}));\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialog/animation/App.vue?vue&type=template&id=3add6492&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialog/animation/App.vue?vue&type=template&id=3add6492&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-8 control-section\",staticStyle:{\"padding\":\"10px\",\"position\":\"relative\"}},[_c('div',{staticStyle:{\"position\":\"relative\",\"top\":\"10px\",\"left\":\"10px\"}},[_c('ejs-button',{attrs:{\"id\":\"dlgbtn\"},nativeOn:{\"click\":function($event){return _vm.confirmBtnClick.apply(null, arguments)}}},[_vm._v(\"confirm\")])],1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_c('table',{attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',[_vm._m(0),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"60%\",\"padding-right\":\"10px\"}},[_c('div',[_c('select',{staticClass:\"form-control\",attrs:{\"id\":\"effectDropdown\"},on:{\"change\":function($event){return _vm.onChange($event.target.value)}}},[_c('option',{attrs:{\"value\":\"FadeZoom\"}},[_vm._v(\"FadeZoom\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipLeftDown\"}},[_vm._v(\"FlipLeftDown\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipLeftUp\"}},[_vm._v(\"FlipLeftUp\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipRightDown\"}},[_vm._v(\"FlipRightDown\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipRightUp\"}},[_vm._v(\"FlipRightUp\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipXDown\"}},[_vm._v(\"FlipXDown\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipXUp\"}},[_vm._v(\"FlipXUp\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipYLeft\"}},[_vm._v(\"FlipYLeft\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"FlipYRight\"}},[_vm._v(\"FlipYRight\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"SlideBottom\"}},[_vm._v(\"SlideBottom\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"SlideLeft\"}},[_vm._v(\"SlideLeft\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"SlideRight\"}},[_vm._v(\"SlideRight\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"SlideTop\"}},[_vm._v(\"SlideTop\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"Zoom\"}},[_vm._v(\"Zoom\")]),_vm._v(\" \"),_c('option',{attrs:{\"value\":\"Fade\"}},[_vm._v(\"Fade\")])])])])])])])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"40%\"}},[_c('h5',[_vm._v(\"Animations Effect:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n         This example demonstrates how to open or close the dialog with animation effects by selecting the appropriate dropdown item in the dropdown button. \\n      \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n          The dialog can be opened or closed with an animation effect using the \"),_c('code',[_vm._v(\"animationSettings\")]),_vm._v(\" property. \\n          You can also customize the duration of the animation and delay to begin the animation or disable the dialog's animation by setting the animation effect as none. \\n          More information on the Dialog instantiation can be found in the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/dialog/dialog-utility/\"}},[_vm._v(\"\\n          documentation section\")]),_vm._v(\". \\n         \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialog/animation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });