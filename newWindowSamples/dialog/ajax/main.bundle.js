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
/******/ 		"dialog/ajax/main": 0
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
/******/ 	deferredModules.push(["./Samples/dialog/ajax/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/dialog/ajax/App.vue":
/*!*************************************!*\
  !*** ./Samples/dialog/ajax/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_a57d1896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=a57d1896& */ \"./Samples/dialog/ajax/App.vue?vue&type=template&id=a57d1896&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/dialog/ajax/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_a57d1896___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_a57d1896___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dialog/ajax/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?");

/***/ }),

/***/ "./Samples/dialog/ajax/App.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./Samples/dialog/ajax/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dialog/ajax/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?");

/***/ }),

/***/ "./Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?");

/***/ }),

/***/ "./Samples/dialog/ajax/App.vue?vue&type=template&id=a57d1896&":
/*!********************************************************************!*\
  !*** ./Samples/dialog/ajax/App.vue?vue&type=template&id=a57d1896& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a57d1896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=a57d1896& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/ajax/App.vue?vue&type=template&id=a57d1896&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a57d1896___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a57d1896___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?");

/***/ }),

/***/ "./Samples/dialog/ajax/main.js":
/*!*************************************!*\
  !*** ./Samples/dialog/ajax/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/dialog/ajax/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section.ajaxsample {\\n        height: 100%;\\n        min-height: 350px;\\n}\\n.ajaxsample .e-dialog .e-dlg-header > img.img1 {\\n        height: 20px;\\n        width: 20px;\\n\\t\\tmargin-right: 10px;\\n        margin-top: 4px;\\n        float: left;\\n}\\n.ajaxsample .e-footer-content button.e-control.e-btn.e-flat {\\n        width: 100%\\n}\\n.ajaxsample .e-dialog .e-footer-content .e-btn {\\n\\t\\tmargin-left: 0px;\\n}\\n.ajaxsample .e-dlg-header-content {\\n       min-height: 65px;\\n}\\n.ajaxsample .e-dialog .e-icon-dlg-close::before{\\n\\t    top: 6px;\\n}\\n.material .ajaxsample .e-dialog {\\n        height: 278px;\\n}\\n.fabric .ajaxsample .e-dialog, .bootstrap .ajaxsample .e-dialog, .highcontrast .ajaxsample .e-dialog {\\n        height: 334px;\\n}\\n.highcontrast .ajaxsample .e-dialog .e-dlg-content {\\n        padding: 28px 25px 19px;\\n}\\n.ajaxsample .e-bigger.e-dialog .e-footer-content .e-btn, .ajaxsample .e-bigger .e-dialog .e-footer-content .e-btn{\\n\\t   margin-left: 0px;\\n}\\n.ajaxsample .e-footer-content button.e-control.e-btn.e-flat {\\n\\t\\twidth: initial;\\n}\\n.ajaxsample .e-btn .e-btn-icon {\\n        margin-top: -12px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-TOIZRZSOLCFPOP4CJVT3RQMBIZGJGVSDL7ZSGY7N2G3ME7SZ2XFQ/Samples/dialog/ajax/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,aAAa;QACb,kBAAkB;CACzB;AACD;QACQ,aAAa;QACb,YAAY;EAClB,mBAAmB;QACb,gBAAgB;QAChB,YAAY;CACnB;AACD;QACQ,WAAW;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;OACO,iBAAiB;CACvB;AACD;KACK,SAAS;CACb;AACD;QACQ,cAAc;CACrB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,wBAAwB;CAC/B;AACD;IACI,iBAAiB;CACpB;AACD;EACE,eAAe;CAChB;AACD;QACQ,kBAAkB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.control-section.ajaxsample {\\n        height: 100%;\\n        min-height: 350px;\\n}\\n.ajaxsample .e-dialog .e-dlg-header > img.img1 {\\n        height: 20px;\\n        width: 20px;\\n\\t\\tmargin-right: 10px;\\n        margin-top: 4px;\\n        float: left;\\n}\\n.ajaxsample .e-footer-content button.e-control.e-btn.e-flat {\\n        width: 100%\\n}\\n.ajaxsample .e-dialog .e-footer-content .e-btn {\\n\\t\\tmargin-left: 0px;\\n}\\n.ajaxsample .e-dlg-header-content {\\n       min-height: 65px;\\n}\\n.ajaxsample .e-dialog .e-icon-dlg-close::before{\\n\\t    top: 6px;\\n}\\n.material .ajaxsample .e-dialog {\\n        height: 278px;\\n}\\n.fabric .ajaxsample .e-dialog, .bootstrap .ajaxsample .e-dialog, .highcontrast .ajaxsample .e-dialog {\\n        height: 334px;\\n}\\n.highcontrast .ajaxsample .e-dialog .e-dlg-content {\\n        padding: 28px 25px 19px;\\n}\\n.ajaxsample .e-bigger.e-dialog .e-footer-content .e-btn, .ajaxsample .e-bigger .e-dialog .e-footer-content .e-btn{\\n\\t   margin-left: 0px;\\n}\\n.ajaxsample .e-footer-content button.e-control.e-btn.e-flat {\\n\\t\\twidth: initial;\\n}\\n.ajaxsample .e-btn .e-btn-icon {\\n        margin-top: -12px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dialog/ajax/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/ajax/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            header: '<img class=\"img1\" src=\"./../../source/dialog/images/dialog-img2.png\">Whats Coming from Microsoft this Fall',\n            target:'.control-section',\n            showCloseIcon:  true,\n            ajaxHeight:  '270px',\n            width:'500px',\n            animationSettings: { effect: 'None' },\n            innerContent1: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform.',\n            innerContent2: 'Much like its previous counter part, the Spring Creators Update ...',\n            contentData: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform. '\n            + 'Much like its previous counterpart, the Spring Creators Update, the release is set to deliver more features '\n            + 'to Windows 10 for both developers and users, with particular emphasis this time around on app modernization, '\n            + 'mixed reality, and game development and software updates. App modernization is the term Microsoft used in ' \n            + 'its press event to encompass the features that will affect most Windows 10 users and developers.',\n            content: this.innerContent1 + this.innerContent2,\n            dlgButtons: [{ click: this.dlgButtonClick.bind(this), buttonModel: { isPrimary:'true', content: 'More Details' } }]\n        }\n    },\n    mounted: function(){\n        document.getElementById('ajaxBtn').focus();\n    },\n    methods: {\n        dialogClose: function() {\n            document.getElementById('ajaxBtn').style.display = '';\n        },\n        ajaxBtnClick: function() {\n            this.$refs.dialogObj.show();\n        },\n        dialogOpen: function() {\n            document.getElementById('ajaxBtn').style.display = 'none';\n        },\n        dlgButtonClick: function() {\n            let localObj = this;\n            if (document.querySelector('.e-footer-content .e-btn').textContent === 'More Details') {\n                let ajax = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"Ajax\"]('././../../source/dialog/blog.html', 'GET', true);\n                ajax.onSuccess = (data) => {\n                    this.$refs.dialogObj.content = data;\n                };\n                ajax.send();\n                document.querySelector('.e-footer-content .e-btn').textContent = 'Less Details';\n            } else {\n                this.$refs.dialogObj.content = this.contentData;\n                document.querySelector('.e-footer-content .e-btn').textContent = 'More Details';\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/ajax/App.vue?vue&type=template&id=a57d1896&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/ajax/App.vue?vue&type=template&id=a57d1896& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section ajaxsample\",staticStyle:{\"padding\":\"10px\",\"position\":\"relative\"}},[_c('ejs-button',{attrs:{\"id\":\"ajaxBtn\"},nativeOn:{\"click\":function($event){return _vm.ajaxBtnClick.apply(null, arguments)}}},[_vm._v(\"Open\")]),_vm._v(\" \"),_c('ejs-dialog',{ref:\"dialogObj\",attrs:{\"header\":_vm.header,\"buttons\":_vm.dlgButtons,\"content\":_vm.contentData,\"animationSettings\":_vm.animationSettings,\"showCloseIcon\":_vm.showCloseIcon,\"target\":_vm.target,\"width\":_vm.width,\"open\":_vm.dialogOpen,\"close\":_vm.dialogClose}})],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n          This example demonstrates that the content of dialog can be loaded from external HTML file.\\n          Click \\\"more details\\\" on dialog to load the content dynamically from external HTML file.\\n          Click “open” to show the dialog again, if it is closed. \\n      \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n          The user can load dialog's content dynamically from external source like external file using AJAX library.\\n          The AJAX library can make the request and load dialog's content using its success event. \\n      \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/dialog/ajax/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });