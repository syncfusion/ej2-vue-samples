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
/******/ 		"predefined-dialogs/customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/predefined-dialogs/customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/predefined-dialogs/customization/App.vue":
/*!**********************************************************!*\
  !*** ./Samples/predefined-dialogs/customization/App.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2109f664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2109f664& */ \"./Samples/predefined-dialogs/customization/App.vue?vue&type=template&id=2109f664&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/predefined-dialogs/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2109f664_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2109f664&lang=css& */ \"./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2109f664___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2109f664___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/predefined-dialogs/customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialogs/customization/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./Samples/predefined-dialogs/customization/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2109f664_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2109f664&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2109f664_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2109f664_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2109f664_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2109f664_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialogs/customization/App.vue?vue&type=template&id=2109f664&":
/*!*****************************************************************************************!*\
  !*** ./Samples/predefined-dialogs/customization/App.vue?vue&type=template&id=2109f664& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2109f664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2109f664& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=template&id=2109f664&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2109f664___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2109f664___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?");

/***/ }),

/***/ "./Samples/predefined-dialogs/customization/main.js":
/*!**********************************************************!*\
  !*** ./Samples/predefined-dialogs/customization/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/predefined-dialogs/customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#predefinedDialogCustomization{\\n        padding: 25px 0 0 15px;\\n}\\n#predefinedDialogCustomization .e-btn {\\n      margin-right: 10px;\\n}\\n#predefinedDialogCustomization #statusText{\\n      font-size:16px;\\n      margin-top: 20px;\\n}\\n.fileEdit{\\n        display:flex;\\n        justify-content:space-evenly;\\n        padding: 20px 0 0 50px;\\n}\\n.e-alert-dialog .e-footer-content {\\n        display: flex;\\n        justify-content: center;\\n}\\n.Table{\\n        line-height: 2.0;\\n}\\n.circle-border{\\n        align-items: center;\\n        justify-content: center;\\n        display: flex;\\n        color: green;\\n        width: 60px;\\n        height: 60px;\\n        border: 5px solid rgb(215,215,215);\\n        border-radius: 50%;\\n}\\n.e-changes-reject{\\n        display: inline;\\n        float: left;\\n        font-size: 40px;\\n        padding-right: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/2-popups-vue-samples_development/Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,uBAAuB;CAC9B;AACD;MACM,mBAAmB;CACxB;AACD;MACM,eAAe;MACf,iBAAiB;CACtB;AACD;QACQ,aAAa;QACb,6BAA6B;QAC7B,uBAAuB;CAC9B;AACD;QACQ,cAAc;QACd,wBAAwB;CAC/B;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,oBAAoB;QACpB,wBAAwB;QACxB,cAAc;QACd,aAAa;QACb,YAAY;QACZ,aAAa;QACb,mCAAmC;QACnC,mBAAmB;CAC1B;AACD;QACQ,gBAAgB;QAChB,YAAY;QACZ,gBAAgB;QAChB,oBAAoB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=2109f664&lang=css&\",\"sourcesContent\":[\"\\n#predefinedDialogCustomization{\\n        padding: 25px 0 0 15px;\\n}\\n#predefinedDialogCustomization .e-btn {\\n      margin-right: 10px;\\n}\\n#predefinedDialogCustomization #statusText{\\n      font-size:16px;\\n      margin-top: 20px;\\n}\\n.fileEdit{\\n        display:flex;\\n        justify-content:space-evenly;\\n        padding: 20px 0 0 50px;\\n}\\n.e-alert-dialog .e-footer-content {\\n        display: flex;\\n        justify-content: center;\\n}\\n.Table{\\n        line-height: 2.0;\\n}\\n.circle-border{\\n        align-items: center;\\n        justify-content: center;\\n        display: flex;\\n        color: green;\\n        width: 60px;\\n        height: 60px;\\n        border: 5px solid rgb(215,215,215);\\n        border-radius: 50%;\\n}\\n.e-changes-reject{\\n        display: inline;\\n        float: left;\\n        font-size: 40px;\\n        padding-right: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialogs/customization/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nlet dialogObj=undefined;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return { }\n    },\n    methods: {\n    alertBtnClick: function () {\n      document.getElementById(\"statusText\").style.display=\"none\";\n      dialogObj = _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].alert({\n        title: '',\n        content:'<div class=\"new\" style=\"display: flex;flex-direction: column;align-items: center;\"><p><span class=\"circle-border\"><span class=\"e-icons e-check\" style=\"font-size: 30px; color: green; padding:5px 0 0 0; font-weight: 700;\"></span></span></p><p><b style=\"font-size:25px; font-weight: 500 !important;\">Good job!</b></p><p>You clicked the button!</p></div>',\n        okButton: { text: 'OK',click:this.alertOkAction },\n        position: { X: 'center', Y: 'center' },\n        width:'240px',\n        closeOnEscape: true\n      });\n    },\n    alertOkAction:function(){\n      dialogObj.hide();\n      document.getElementById(\"statusText\").innerHTML = \"The user closed the Alert dialog.\"\n      document.getElementById(\"statusText\").style.display=\"block\";\n    },\n     confirmBtnClick: function () {\n      document.getElementById(\"statusText\").style.display=\"none\";\n      dialogObj = _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].confirm({\n        title: ' Delete file',\n        content: '<p ><span class= \"e-icons e-changes-reject\" style=\"float: left;padding-right: 10px;font-size: 25px;display: inline;\"></span>Are you sure you want to permanently delete this file?</p><p class=\"fileEdit\"><span class= \"e-icons e-image\" style=\"font-size: 60px;\"></span><span>failed personas.png<br/>Item type:PNG File<br/>Dimenstion: 1384 * 782<br/>Size:374 KB<br/>Original Location: C:/Users/Images</span></p>',\n        okButton: { text: 'YES',click:this.confirmOkAction },\n        cancelButton: { text: 'No',click:this.confirmCancelAction },\n        position: { X: 'center', Y: 'center' },\n        width:'420px',\n        closeOnEscape: true\n      });\n    },\n    confirmOkAction:function () {\n      dialogObj.hide();\n      document.getElementById(\"statusText\").innerHTML=\"The user confirmed the dialog box\";\n      document.getElementById(\"statusText\").style.display=\"block\";\n    },\n    confirmCancelAction:function(){\n      dialogObj.hide();\n      document.getElementById(\"statusText\").innerHTML=\"The user canceled the dialog box.\";\n      document.getElementById(\"statusText\").style.display=\"block\";\n    },\n     promptBtnClick  : function () {\n      document.getElementById(\"statusText\").style.display=\"none\";\n      dialogObj = _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogUtility\"].confirm({\n        title: 'Join Wi-Fi network',\n        content: '<table class=\"Table\"><tbody><tr><td>SSID: <b>AndroidAP</b></td></tr><tr> <td>Password:</td> </tr> <tr> <td> <span class=\"e-input-group\"> <input type=\"password\" id=\"password\" name=\"Required\" class=\"e-input\"> </span> </td> </tr> </tbody> </table> ',\n        okButton: { text: 'OK',click:this.promptOkAction },\n        cancelButton: { click:this.promptCancelAction },\n        position: { X: 'center', Y: 'center' },\n        width: '240px',\n        closeOnEscape: true\n      });\n    },\n    promptOkAction:function () {\n      value = document.getElementById(\"password\").value;\n        if(value ==\"\"){\n            dialogObj.hide();\n            document.getElementById(\"statusText\").innerHTML=\"The user's input is returned as\\\" \\\"\";\n            document.getElementById(\"statusText\").style.display=\"block\";\n        }\n        else{\n            dialogObj.hide();\n            document.getElementById(\"statusText\").innerHTML=\"The user's input is returned as\" +\" \"+ value;\n            document.getElementById(\"statusText\").style.display=\"block\";\n        } \n    },\n    promptCancelAction:function () {\n      dialogObj.hide ();\n      document.getElementById(\"statusText\").innerHTML =\"The user canceled the prompt dialog\";\n      document.getElementById(\"statusText\").style.display=\"block\";\n    }\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=template&id=2109f664&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialogs/customization/App.vue?vue&type=template&id=2109f664& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-12 control-section\",\n        attrs: { id: \"predefinedDialogCustomization\" },\n      },\n      [\n        _c(\n          \"ejs-button\",\n          {\n            attrs: { id: \"alertDlgBtn\", cssClass: \"e-danger\" },\n            nativeOn: {\n              click: function ($event) {\n                return _vm.alertBtnClick.apply(null, arguments)\n              },\n            },\n          },\n          [_vm._v(\"Alert\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-button\",\n          {\n            attrs: { id: \"ConfirmDlgBtn\", cssClass: \"e-success\" },\n            nativeOn: {\n              click: function ($event) {\n                return _vm.confirmBtnClick.apply(null, arguments)\n              },\n            },\n          },\n          [_vm._v(\"Confirm\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-button\",\n          {\n            attrs: { id: \"PromptDlgBtn\", isPrimary: true },\n            nativeOn: {\n              click: function ($event) {\n                return _vm.promptBtnClick.apply(null, arguments)\n              },\n            },\n          },\n          [_vm._v(\"Prompt\")]\n        ),\n        _vm._v(\" \"),\n        _c(\"span\", { attrs: { id: \"statusText\" } }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This example demonstrates how to customize the content of the predefined Alert, Confirm and Prompt dialogs. Three buttons have been added to this example, click one of them to open the relevant dialog box.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The predefined dialog is used to display messages such as supplemental content like graphics, text, and interactive content like form components within a web page. It can use the \"\n        ),\n        _c(\"code\", [_vm._v(\"\\n      content \")]),\n        _vm._v(\n          \" property to load customized content.\\n      The content property accepts both string and HTML elements as content.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"See also\")])]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\n            \"a\",\n            {\n              attrs: {\n                target: \"_blank\",\n                href: \"https://ej2.syncfusion.com/vue/documentation/dialog/dialog-utlility/\",\n              },\n            },\n            [_vm._v(\"\\n          Customization of predefined dialogs \")]\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2109f664&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/predefined-dialogs/customization/App.vue?vue&type=style&index=0&id=2109f664&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"f914cfba\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/predefined-dialogs/customization/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });