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
/******/ 		"mention/multiple-list/main": 0
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
/******/ 	deferredModules.push(["./Samples/mention/multiple-list/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/mention/multiple-list/App.vue":
/*!***********************************************!*\
  !*** ./Samples/mention/multiple-list/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6bc007f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6bc007f8&scoped=true& */ \"./Samples/mention/multiple-list/App.vue?vue&type=template&id=6bc007f8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/mention/multiple-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6bc007f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css& */ \"./Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6bc007f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6bc007f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6bc007f8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/mention/multiple-list/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?");

/***/ }),

/***/ "./Samples/mention/multiple-list/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/mention/multiple-list/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/mention/multiple-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?");

/***/ }),

/***/ "./Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6bc007f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6bc007f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6bc007f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6bc007f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6bc007f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?");

/***/ }),

/***/ "./Samples/mention/multiple-list/App.vue?vue&type=template&id=6bc007f8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/mention/multiple-list/App.vue?vue&type=template&id=6bc007f8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6bc007f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6bc007f8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/mention/multiple-list/App.vue?vue&type=template&id=6bc007f8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6bc007f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6bc007f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?");

/***/ }),

/***/ "./Samples/mention/multiple-list/dataSource.json":
/*!*******************************************************!*\
  !*** ./Samples/mention/multiple-list/dataSource.json ***!
  \*******************************************************/
/*! exports provided: emailData, projects, useCosts, status, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"emailData\\\":[{\\\"Name\\\":\\\"Selma Rose\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"selma@gmail.com\\\"},{\\\"Name\\\":\\\"Russo Kay\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"russo@gmail.com\\\"},{\\\"Name\\\":\\\"Camden Kate\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"camden@gmail.com\\\"},{\\\"Name\\\":\\\"Garth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"garth@gmail.com\\\"},{\\\"Name\\\":\\\"Ursula Ann\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"ursula@gmail.com\\\"},{\\\"Name\\\":\\\"Margaret\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"margaret@gmail.com\\\"},{\\\"Name\\\":\\\"Laura Grace\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"laura@gmail.com\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"robert@gmail.com\\\"},{\\\"Name\\\":\\\"Albert\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"albert@gmail.com\\\"},{\\\"Name\\\":\\\"Michale\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"michale@gmail.com\\\"},{\\\"Name\\\":\\\"Andrew James\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"james@gmail.com\\\"},{\\\"Name\\\":\\\"William\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"william@gmail.com\\\"},{\\\"Name\\\":\\\"David\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"david@gmail.com\\\"},{\\\"Name\\\":\\\"Richard Rose\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"richard@gmail.com\\\"},{\\\"Name\\\":\\\"Joseph\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"joseph@gmail.com\\\"},{\\\"Name\\\":\\\"Thomas\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"thomas@gmail.com\\\"},{\\\"Name\\\":\\\"Charles Danny\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"charles@gmail.com\\\"},{\\\"Name\\\":\\\"Daniel\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"daniel@gmail.com\\\"},{\\\"Name\\\":\\\"Matthew\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"matthew@gmail.com\\\"},{\\\"Name\\\":\\\"Donald Krish\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"EmailId\\\":\\\"donald@gmail.com\\\"},{\\\"Name\\\":\\\"Paul\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"paul@gmail.com\\\"},{\\\"Name\\\":\\\"Kevin Paul\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"kevin@gmail.com\\\"}],\\\"projects\\\":[{\\\"Id\\\":\\\"Project1\\\",\\\"Value\\\":\\\"ERP\\\"},{\\\"Id\\\":\\\"Project2\\\",\\\"Value\\\":\\\"Help desk\\\"},{\\\"Id\\\":\\\"Project3\\\",\\\"Value\\\":\\\"Banking\\\"},{\\\"Id\\\":\\\"Project4\\\",\\\"Value\\\":\\\"Chat Box\\\"},{\\\"Id\\\":\\\"Project5\\\",\\\"Value\\\":\\\"Accounts\\\"}],\\\"useCosts\\\":[{\\\"Id\\\":\\\"Cost1\\\",\\\"Value\\\":\\\"$1000\\\"},{\\\"Id\\\":\\\"Cost2\\\",\\\"Value\\\":\\\"$1500\\\"},{\\\"Id\\\":\\\"Cost3\\\",\\\"Value\\\":\\\"$3000\\\"},{\\\"Id\\\":\\\"Cost4\\\",\\\"Value\\\":\\\"$3250\\\"},{\\\"Id\\\":\\\"Cost5\\\",\\\"Value\\\":\\\"$5000\\\"}],\\\"status\\\":[{\\\"Id\\\":\\\"status1\\\",\\\"Value\\\":\\\"Open\\\"},{\\\"Id\\\":\\\"status2\\\",\\\"Value\\\":\\\"In-progress\\\"},{\\\"Id\\\":\\\"status3\\\",\\\"Value\\\":\\\"Hold\\\"},{\\\"Id\\\":\\\"status4\\\",\\\"Value\\\":\\\"Closed\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/dataSource.json?");

/***/ }),

/***/ "./Samples/mention/multiple-list/main.js":
/*!***********************************************!*\
  !*** ./Samples/mention/multiple-list/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/mention/multiple-list/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#mention-multiplelist #multipleList[data-v-6bc007f8] {\\n    min-height: 100px;\\n    border: 1px solid #D7D7D7;\\n    width: 600px;\\n    font-size: 14px;\\n    padding: 8px;\\n    border-radius: 4px;\\n}\\n#mention-multiplelist[data-v-6bc007f8] {\\n    margin: 0 auto;\\n    width: 600px;\\n}\\n#mention-multiplelist #label[data-v-6bc007f8] {\\n    font-size: 15px;\\n    font-weight: 600;\\n}\\ndiv#multipleList[placeholder][data-v-6bc007f8]:empty:before {\\n    content: attr(placeholder);\\n    color: #555;\\n}\\n@media screen and (max-width: 1010px) {\\n#mention-multiplelist #multipleList[data-v-6bc007f8],\\n    #mention-multiplelist[data-v-6bc007f8], #mention-multiplelist table[data-v-6bc007f8]{\\n        width: 100%;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-BP5IK5FTVXDNHENTCUSRIRDGFBHOLESCF3OKJXTMKAMHM6P6WNYQ/Samples/mention/multiple-list/App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,aAAa;CAChB;AACD;IACI,gBAAgB;IAChB,iBAAiB;CACpB;AACD;IACI,2BAA2B;IAC3B,YAAY;CACf;AACD;AACA;;QAEQ,YAAY;CACnB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=6bc007f8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#mention-multiplelist #multipleList[data-v-6bc007f8] {\\n    min-height: 100px;\\n    border: 1px solid #D7D7D7;\\n    width: 600px;\\n    font-size: 14px;\\n    padding: 8px;\\n    border-radius: 4px;\\n}\\n#mention-multiplelist[data-v-6bc007f8] {\\n    margin: 0 auto;\\n    width: 600px;\\n}\\n#mention-multiplelist #label[data-v-6bc007f8] {\\n    font-size: 15px;\\n    font-weight: 600;\\n}\\ndiv#multipleList[placeholder][data-v-6bc007f8]:empty:before {\\n    content: attr(placeholder);\\n    color: #555;\\n}\\n@media screen and (max-width: 1010px) {\\n#mention-multiplelist #multipleList[data-v-6bc007f8],\\n    #mention-multiplelist[data-v-6bc007f8], #mention-multiplelist table[data-v-6bc007f8]{\\n        width: 100%;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/mention/multiple-list/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/multiple-list/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/mention/multiple-list/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/mention/multiple-list/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"MentionPlugin\"]);\n\n\nvar remoteData = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"DataManager\"]({\n    url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',\n    adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"WebApiAdaptor\"],\n    crossDomain: true\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n        data: function() {\n        return {\n          target: \"#multipleList\",\n          data: remoteData,\n          projectfields : {text: 'Value'},\n          costfields : {text: 'Value'},\n          statusfields : {text: 'Value'},\n          remoteFields: { text: 'FirstName', value: 'EmployeeID' },\n          query: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"Query\"]().select(['FirstName', 'EmployeeID']).requiresCount(),\n          projectsData : _dataSource_json__WEBPACK_IMPORTED_MODULE_3__[\"projects\"],\n          costData : _dataSource_json__WEBPACK_IMPORTED_MODULE_3__[\"useCosts\"],\n          statusData : _dataSource_json__WEBPACK_IMPORTED_MODULE_3__[\"status\"],\n        };\n    }\n});\n\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/mention/multiple-list/App.vue?vue&type=template&id=6bc007f8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/multiple-list/App.vue?vue&type=template&id=6bc007f8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section\"},[_c('div',{attrs:{\"id\":\"mention-multiplelist\"}},[_c('table',[_c('tr',[_c('td',[_vm._m(0),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"multipleList\",\"placeHolder\":\"Type here..!\"}}),_vm._v(\" \"),_c('ejs-mention',{attrs:{\"id\":\"employees\",\"mentionChar\":\"@\",\"target\":_vm.target,\"dataSource\":_vm.data,\"fields\":_vm.remoteFields,\"query\":_vm.query,\"popupWidth\":\"250px\",\"popupHeight\":\"215px\",\"allowSpaces\":\"true\",\"suggestionCount\":\"15\"}}),_vm._v(\" \"),_c('ejs-mention',{attrs:{\"id\":\"project\",\"mentionChar\":\"#\",\"target\":_vm.target,\"dataSource\":_vm.projectsData,\"fields\":_vm.projectfields,\"allowSpaces\":\"true\",\"displayTemplate\":'dTemplate'},scopedSlots:_vm._u([{key:\"dTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('span',{staticClass:\"e-success\"},[_vm._v(_vm._s(data.Value))])]}}])}),_vm._v(\" \"),_c('ejs-mention',{attrs:{\"id\":\"cost\",\"mentionChar\":\"$\",\"target\":_vm.target,\"dataSource\":_vm.costData,\"fields\":_vm.costfields,\"allowSpaces\":\"true\",\"displayTemplate\":'dTemplate'},scopedSlots:_vm._u([{key:\"dTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('span',{staticClass:\"e-error\"},[_vm._v(_vm._s(data.Value))])]}}])}),_vm._v(\" \"),_c('ejs-mention',{attrs:{\"id\":\"status\",\"mentionChar\":\"%\",\"target\":_vm.target,\"dataSource\":_vm.statusData,\"fields\":_vm.statusfields,\"allowSpaces\":\"true\",\"displayTemplate\":'dTemplate'},scopedSlots:_vm._u([{key:\"dTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('span',{staticClass:\"e-warning\"},[_vm._v(_vm._s(data.Value))])]}}])})],1)])])])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{attrs:{\"id\":\"label\"}},[_vm._v(\"Start typing \"),_c('code',[_vm._v(\"@\")]),_vm._v(\", \"),_c('code',[_vm._v(\"#\")]),_vm._v(\", \"),_c('code',[_vm._v(\"$\")]),_vm._v(\" or \"),_c('code',[_vm._v(\"%\")]),_vm._v(\" to select the respective values\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the default functionalities of the Mention component. Type the \"),_c('code',[_vm._v(\"@\")]),_vm._v(\" character in the editable element and select or tag the user from the suggestion list.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The \"),_c('code',[_vm._v(\"Mention\")]),_vm._v(\" is a component used to display a list of items that the users can select or tag from the list suggested. You can use the \"),_c('code',[_vm._v(\"@\")]),_vm._v(\" mention support with the \"),_c('code',[_vm._v(\"input\")]),_vm._v(\", \"),_c('code',[_vm._v(\"textarea\")]),_vm._v(\", and \"),_c('code',[_vm._v(\"contenteditable\")]),_vm._v(\" div elements.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"In the above sample, the input and div elements are configured with \"),_c('code',[_vm._v(\"@\")]),_vm._v(\" mentions listing the \"),_c('code',[_vm._v(\"emails\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"comments\")]),_vm._v(\" contents.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/mention/multiple-list/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });