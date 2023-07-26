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
/******/ 		"mention/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/mention/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/mention/default/App.vue":
/*!*****************************************!*\
  !*** ./Samples/mention/default/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5631714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5631714a&scoped=true& */ \"./Samples/mention/default/App.vue?vue&type=template&id=5631714a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/mention/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5631714a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css& */ \"./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5631714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5631714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5631714a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/mention/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?");

/***/ }),

/***/ "./Samples/mention/default/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/mention/default/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?");

/***/ }),

/***/ "./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5631714a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5631714a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5631714a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5631714a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5631714a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?");

/***/ }),

/***/ "./Samples/mention/default/App.vue?vue&type=template&id=5631714a&scoped=true&":
/*!************************************************************************************!*\
  !*** ./Samples/mention/default/App.vue?vue&type=template&id=5631714a&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5631714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5631714a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=template&id=5631714a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5631714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5631714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?");

/***/ }),

/***/ "./Samples/mention/default/dataSource.json":
/*!*************************************************!*\
  !*** ./Samples/mention/default/dataSource.json ***!
  \*************************************************/
/*! exports provided: emailData, projects, useCosts, status, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"emailData\\\":[{\\\"Name\\\":\\\"Selma Rose\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"selma@gmail.com\\\"},{\\\"Name\\\":\\\"Russo Kay\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"russo@gmail.com\\\"},{\\\"Name\\\":\\\"Camden Kate\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"camden@gmail.com\\\"},{\\\"Name\\\":\\\"Mary Kate\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"marry@gmail.com\\\"},{\\\"Name\\\":\\\"Ursula Ann\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"ursula@gmail.com\\\"},{\\\"Name\\\":\\\"Margaret\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"margaret@gmail.com\\\"},{\\\"Name\\\":\\\"Laura Grace\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"EmailId\\\":\\\"laura@gmail.com\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"robert@gmail.com\\\"},{\\\"Name\\\":\\\"Albert\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"albert@gmail.com\\\"},{\\\"Name\\\":\\\"Michale\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"michale@gmail.com\\\"},{\\\"Name\\\":\\\"Andrew James\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"james@gmail.com\\\"},{\\\"Name\\\":\\\"Rosalie\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"rosalie@gmail.com\\\"},{\\\"Name\\\":\\\"Stella Ruth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"stella@gmail.com\\\"},{\\\"Name\\\":\\\"Richard Rose\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"richard@gmail.com\\\"},{\\\"Name\\\":\\\"Gabrielle\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"gabrielle@gmail.com\\\"},{\\\"Name\\\":\\\"Thomas\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"thomas@gmail.com\\\"},{\\\"Name\\\":\\\"Charles Danny\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"charles@gmail.com\\\"},{\\\"Name\\\":\\\"Daniel\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"daniel@gmail.com\\\"},{\\\"Name\\\":\\\"Matthew\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"matthew@gmail.com\\\"},{\\\"Name\\\":\\\"Donald Krish\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"donald@gmail.com\\\"},{\\\"Name\\\":\\\"Yohana\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"EmailId\\\":\\\"yohana@gmail.com\\\"},{\\\"Name\\\":\\\"Kevin Paul\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"kevin@gmail.com\\\"}],\\\"projects\\\":[{\\\"Id\\\":\\\"Project1\\\",\\\"Value\\\":\\\"ERP\\\"},{\\\"Id\\\":\\\"Project2\\\",\\\"Value\\\":\\\"Help desk\\\"},{\\\"Id\\\":\\\"Project3\\\",\\\"Value\\\":\\\"Banking\\\"},{\\\"Id\\\":\\\"Project4\\\",\\\"Value\\\":\\\"Chat Box\\\"},{\\\"Id\\\":\\\"Project5\\\",\\\"Value\\\":\\\"Accounts\\\"}],\\\"useCosts\\\":[{\\\"Id\\\":\\\"Cost1\\\",\\\"Value\\\":\\\"$1000\\\"},{\\\"Id\\\":\\\"Cost2\\\",\\\"Value\\\":\\\"$1500\\\"},{\\\"Id\\\":\\\"Cost3\\\",\\\"Value\\\":\\\"$3000\\\"},{\\\"Id\\\":\\\"Cost4\\\",\\\"Value\\\":\\\"$3250\\\"},{\\\"Id\\\":\\\"Cost5\\\",\\\"Value\\\":\\\"$5000\\\"}],\\\"status\\\":[{\\\"Id\\\":\\\"status1\\\",\\\"Value\\\":\\\"Open\\\"},{\\\"Id\\\":\\\"status2\\\",\\\"Value\\\":\\\"In-progress\\\"},{\\\"Id\\\":\\\"status3\\\",\\\"Value\\\":\\\"Hold\\\"},{\\\"Id\\\":\\\"status4\\\",\\\"Value\\\":\\\"Closed\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/mention/default/dataSource.json?");

/***/ }),

/***/ "./Samples/mention/default/main.js":
/*!*****************************************!*\
  !*** ./Samples/mention/default/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/mention/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/mention/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#mention-controls .default-size[data-v-5631714a]{\\n    font-size: 15px;\\n    font-weight: 600;\\n}\\n#mention-controls #commentsMention[data-v-5631714a] {\\n    min-height: 100px;\\n    border: 1px solid #D7D7D7;\\n    border-radius: 4px;\\n    padding: 8px;\\n    font-size: 14px;\\n    width:600px;\\n}\\n#mention-controls[data-v-5631714a] {\\n    margin: 0 auto;\\n    width: 600px;\\n}\\ndiv#commentsMention[placeholder][data-v-5631714a]:empty:before {\\n    content: attr(placeholder);\\n    color: #555;\\n}\\n#mention-controls .e-input-group[data-v-5631714a], #mention-controls .e-input-group.e-control-wrapper[data-v-5631714a]{\\n    margin-bottom:20px;\\n}\\n@media screen and (max-width: 1010px) {\\n#mention-controls[data-v-5631714a], #mention-controls table[data-v-5631714a]{\\n        width: 100%;\\n}\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/pdown-vue-samples_release_22.1.1/Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,gBAAgB;IAChB,iBAAiB;CACpB;AACD;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,YAAY;CACf;AACD;IACI,eAAe;IACf,aAAa;CAChB;AACD;IACI,2BAA2B;IAC3B,YAAY;CACf;AACD;IACI,mBAAmB;CACtB;AACD;AACA;QACQ,YAAY;CACnB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#mention-controls .default-size[data-v-5631714a]{\\n    font-size: 15px;\\n    font-weight: 600;\\n}\\n#mention-controls #commentsMention[data-v-5631714a] {\\n    min-height: 100px;\\n    border: 1px solid #D7D7D7;\\n    border-radius: 4px;\\n    padding: 8px;\\n    font-size: 14px;\\n    width:600px;\\n}\\n#mention-controls[data-v-5631714a] {\\n    margin: 0 auto;\\n    width: 600px;\\n}\\ndiv#commentsMention[placeholder][data-v-5631714a]:empty:before {\\n    content: attr(placeholder);\\n    color: #555;\\n}\\n#mention-controls .e-input-group[data-v-5631714a], #mention-controls .e-input-group.e-control-wrapper[data-v-5631714a]{\\n    margin-bottom:20px;\\n}\\n@media screen and (max-width: 1010px) {\\n#mention-controls[data-v-5631714a], #mention-controls table[data-v-5631714a]{\\n        width: 100%;\\n}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/default/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/mention/default/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/mention/default/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"MentionPlugin\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n        data: function() {\n        return {\n          commenttarget : '#commentsMention',\n          commentsfields : { text: 'Name' },\n          commentsData : _dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"emailData\"]\n        };\n    }\n});\n\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=template&id=5631714a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/default/App.vue?vue&type=template&id=5631714a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n      _c(\"div\", { attrs: { id: \"mention-controls\" } }, [\n        _c(\"table\", [\n          _c(\"tr\", [\n            _c(\n              \"td\",\n              [\n                _c(\"label\", { staticClass: \"default-size\" }, [\n                  _vm._v(\"Comments\"),\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", {\n                  attrs: {\n                    id: \"commentsMention\",\n                    placeholder: \"Type @ and tag user\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"ejs-mention\", {\n                  attrs: {\n                    target: _vm.commenttarget,\n                    dataSource: _vm.commentsData,\n                    fields: _vm.commentsfields,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the default functionalities of the Mention component. Type the \"\n        ),\n        _c(\"code\", [_vm._v(\"@\")]),\n        _vm._v(\n          \" character in the editable element and select or tag the user from the suggestion list.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"Mention\")]),\n        _vm._v(\n          \" is a component used to display a list of items that the users can select or tag from the list suggested. You can use the \"\n        ),\n        _c(\"code\", [_vm._v(\"@\")]),\n        _vm._v(\" mention support with the \"),\n        _c(\"code\", [_vm._v(\"input\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"textarea\")]),\n        _vm._v(\", and \"),\n        _c(\"code\", [_vm._v(\"contenteditable\")]),\n        _vm._v(\" div elements.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"In the above sample, the div elements are configured with \"),\n        _c(\"code\", [_vm._v(\"@\")]),\n        _vm._v(\" mentions listing the \"),\n        _c(\"code\", [_vm._v(\"comments\")]),\n        _vm._v(\" contents.\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/default/App.vue?vue&type=style&index=0&id=5631714a&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"39c27c1a\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/mention/default/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });