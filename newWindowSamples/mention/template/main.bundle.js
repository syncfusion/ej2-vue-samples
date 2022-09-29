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
/******/ 		"mention/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/mention/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/mention/template/App.vue":
/*!******************************************!*\
  !*** ./Samples/mention/template/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4a9cb865_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4a9cb865&scoped=true& */ \"./Samples/mention/template/App.vue?vue&type=template&id=4a9cb865&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/mention/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4a9cb865_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css& */ \"./Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4a9cb865_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4a9cb865_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4a9cb865\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/mention/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?");

/***/ }),

/***/ "./Samples/mention/template/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/mention/template/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/mention/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?");

/***/ }),

/***/ "./Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4a9cb865_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4a9cb865_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4a9cb865_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4a9cb865_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4a9cb865_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?");

/***/ }),

/***/ "./Samples/mention/template/App.vue?vue&type=template&id=4a9cb865&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./Samples/mention/template/App.vue?vue&type=template&id=4a9cb865&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4a9cb865_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4a9cb865&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/mention/template/App.vue?vue&type=template&id=4a9cb865&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4a9cb865_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4a9cb865_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?");

/***/ }),

/***/ "./Samples/mention/template/dataSource.json":
/*!**************************************************!*\
  !*** ./Samples/mention/template/dataSource.json ***!
  \**************************************************/
/*! exports provided: emailData, projects, useCosts, status, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"emailData\\\":[{\\\"Name\\\":\\\"Selma Rose\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"selma@gmail.com\\\"},{\\\"Name\\\":\\\"Russo Kay\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"russo@gmail.com\\\"},{\\\"Name\\\":\\\"Camden Kate\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"camden@gmail.com\\\"},{\\\"Name\\\":\\\"Garth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"garth@gmail.com\\\"},{\\\"Name\\\":\\\"Ursula Ann\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"ursula@gmail.com\\\"},{\\\"Name\\\":\\\"Margaret\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"margaret@gmail.com\\\"},{\\\"Name\\\":\\\"Laura Grace\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"laura@gmail.com\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"robert@gmail.com\\\"},{\\\"Name\\\":\\\"Albert\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"albert@gmail.com\\\"},{\\\"Name\\\":\\\"Michale\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"michale@gmail.com\\\"},{\\\"Name\\\":\\\"Andrew James\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"james@gmail.com\\\"},{\\\"Name\\\":\\\"William\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"william@gmail.com\\\"},{\\\"Name\\\":\\\"David\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"david@gmail.com\\\"},{\\\"Name\\\":\\\"Richard Rose\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"EmailId\\\":\\\"richard@gmail.com\\\"},{\\\"Name\\\":\\\"Joseph\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"EmailId\\\":\\\"joseph@gmail.com\\\"},{\\\"Name\\\":\\\"Thomas\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"EmailId\\\":\\\"thomas@gmail.com\\\"},{\\\"Name\\\":\\\"Charles Danny\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"EmailId\\\":\\\"charles@gmail.com\\\"},{\\\"Name\\\":\\\"Daniel\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"EmailId\\\":\\\"daniel@gmail.com\\\"},{\\\"Name\\\":\\\"Matthew\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"EmailId\\\":\\\"matthew@gmail.com\\\"},{\\\"Name\\\":\\\"Donald Krish\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"EmailId\\\":\\\"donald@gmail.com\\\"},{\\\"Name\\\":\\\"Paul\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"EmailId\\\":\\\"paul@gmail.com\\\"},{\\\"Name\\\":\\\"Kevin Paul\\\",\\\"Eimg\\\":\\\"styles/images/Employees/5.png\\\",\\\"EmailId\\\":\\\"kevin@gmail.com\\\"}],\\\"projects\\\":[{\\\"Id\\\":\\\"Project1\\\",\\\"Value\\\":\\\"ERP\\\"},{\\\"Id\\\":\\\"Project2\\\",\\\"Value\\\":\\\"Help desk\\\"},{\\\"Id\\\":\\\"Project3\\\",\\\"Value\\\":\\\"Banking\\\"},{\\\"Id\\\":\\\"Project4\\\",\\\"Value\\\":\\\"Chat Box\\\"},{\\\"Id\\\":\\\"Project5\\\",\\\"Value\\\":\\\"Accounts\\\"}],\\\"useCosts\\\":[{\\\"Id\\\":\\\"Cost1\\\",\\\"Value\\\":\\\"$1000\\\"},{\\\"Id\\\":\\\"Cost2\\\",\\\"Value\\\":\\\"$1500\\\"},{\\\"Id\\\":\\\"Cost3\\\",\\\"Value\\\":\\\"$3000\\\"},{\\\"Id\\\":\\\"Cost4\\\",\\\"Value\\\":\\\"$3250\\\"},{\\\"Id\\\":\\\"Cost5\\\",\\\"Value\\\":\\\"$5000\\\"}],\\\"status\\\":[{\\\"Id\\\":\\\"status1\\\",\\\"Value\\\":\\\"Open\\\"},{\\\"Id\\\":\\\"status2\\\",\\\"Value\\\":\\\"In-progress\\\"},{\\\"Id\\\":\\\"status3\\\",\\\"Value\\\":\\\"Hold\\\"},{\\\"Id\\\":\\\"status4\\\",\\\"Value\\\":\\\"Closed\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/mention/template/dataSource.json?");

/***/ }),

/***/ "./Samples/mention/template/main.js":
/*!******************************************!*\
  !*** ./Samples/mention/template/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/mention/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/mention/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#mention-template #templateMention[data-v-4a9cb865] {\\n        min-height: 100px;\\n        border: 1px solid #D7D7D7;\\n        width: 600px;\\n        padding: 8px;\\n        font-size: 14px;\\n        border-radius: 4px;\\n}\\n#mention-template[data-v-4a9cb865] {\\n        margin: 0 auto;\\n        width: 600px;\\n}\\n.template_listItems[data-v-4a9cb865] {\\n\\t\\tpadding-left: 12px;\\n\\t\\tvertical-align: middle;\\n\\t\\twidth: 80%;\\n}\\n#templateMention_popup .e-dropdownbase .e-list-item[data-v-4a9cb865] {\\n    \\tline-height: 25px;\\n    \\ttext-indent: 8px;\\n}\\n#templateMention_popup .mentionEmpImage[data-v-4a9cb865] {\\n\\t\\twidth: 44px;\\n\\t\\tfloat: left;\\n}\\n#templateMention_popup .person[data-v-4a9cb865] {\\n\\t\\tfont-size: 16px;\\n\\t\\tmargin-top: 8px;\\n}\\n#templateMention_popup .e-dropdownbase .e-list-item *[data-v-4a9cb865] {\\n        display: block;\\n}\\ndiv#templateMention[placeholder][data-v-4a9cb865]:empty:before {\\n        content: attr(placeholder);\\n        color: #555;\\n}\\n#mention-template #template-size[data-v-4a9cb865]{\\n        font-size: 15px;\\n\\t\\tfont-weight: 600;\\n}\\n@media screen and (max-width: 1010px) {\\n#mention-template #templateMention[data-v-4a9cb865],\\n        #mention-template[data-v-4a9cb865], #mention-template table[data-v-4a9cb865] {\\n            width: 100%;\\n}\\n}\\n    \\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-BP5IK5FTVXDNHENTCUSRIRDGFBHOLESCF3OKJXTMKAMHM6P6WNYQ/Samples/mention/template/App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,kBAAkB;QAClB,0BAA0B;QAC1B,aAAa;QACb,aAAa;QACb,gBAAgB;QAChB,mBAAmB;CAC1B;AACD;QACQ,eAAe;QACf,aAAa;CACpB;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;CACZ;AACD;KACK,kBAAkB;KAClB,iBAAiB;CACrB;AACD;EACE,YAAY;EACZ,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,gBAAgB;CACjB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,2BAA2B;QAC3B,YAAY;CACnB;AACD;QACQ,gBAAgB;EACtB,iBAAiB;CAClB;AACD;AACA;;YAEY,YAAY;CACvB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=4a9cb865&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#mention-template #templateMention[data-v-4a9cb865] {\\n        min-height: 100px;\\n        border: 1px solid #D7D7D7;\\n        width: 600px;\\n        padding: 8px;\\n        font-size: 14px;\\n        border-radius: 4px;\\n}\\n#mention-template[data-v-4a9cb865] {\\n        margin: 0 auto;\\n        width: 600px;\\n}\\n.template_listItems[data-v-4a9cb865] {\\n\\t\\tpadding-left: 12px;\\n\\t\\tvertical-align: middle;\\n\\t\\twidth: 80%;\\n}\\n#templateMention_popup .e-dropdownbase .e-list-item[data-v-4a9cb865] {\\n    \\tline-height: 25px;\\n    \\ttext-indent: 8px;\\n}\\n#templateMention_popup .mentionEmpImage[data-v-4a9cb865] {\\n\\t\\twidth: 44px;\\n\\t\\tfloat: left;\\n}\\n#templateMention_popup .person[data-v-4a9cb865] {\\n\\t\\tfont-size: 16px;\\n\\t\\tmargin-top: 8px;\\n}\\n#templateMention_popup .e-dropdownbase .e-list-item *[data-v-4a9cb865] {\\n        display: block;\\n}\\ndiv#templateMention[placeholder][data-v-4a9cb865]:empty:before {\\n        content: attr(placeholder);\\n        color: #555;\\n}\\n#mention-template #template-size[data-v-4a9cb865]{\\n        font-size: 15px;\\n\\t\\tfont-weight: 600;\\n}\\n@media screen and (max-width: 1010px) {\\n#mention-template #templateMention[data-v-4a9cb865],\\n        #mention-template[data-v-4a9cb865], #mention-template table[data-v-4a9cb865] {\\n            width: 100%;\\n}\\n}\\n    \\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/mention/template/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/template/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/mention/template/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/mention/template/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"MentionPlugin\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n        data: function() {\n        return {\n          mentionfields: { text: 'Name' },\n          data: _dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"emailData\"],\n          target: \"#templateMention\",\n        };\n    }\n});\n\n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/mention/template/App.vue?vue&type=template&id=4a9cb865&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/mention/template/App.vue?vue&type=template&id=4a9cb865&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section\"},[_c('div',{attrs:{\"id\":\"mention-template\"}},[_c('table',[_c('tr',[_c('td',[_c('label',{attrs:{\"id\":\"template-size\"}},[_vm._v(\"Compose your content\")]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"templateMention\",\"placeholder\":\"Type @ and tag user\"}}),_vm._v(\" \"),_c('ejs-mention',{attrs:{\"id\":\"template\",\"target\":_vm.target,\"mentionChar\":\"@\",\"dataSource\":_vm.data,\"fields\":_vm.mentionfields,\"allowSpaces\":\"true\",\"itemTemplate\":'iTemplate',\"displayTemplate\":'dTemplate',\"noRecordsTemplate\":\"No item related to the search\",\"popupWidth\":\"250px\",\"popupHeight\":\"200px\"},scopedSlots:_vm._u([{key:\"iTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('div',{staticClass:\"template_listItems\"},[_c('img',{staticClass:\"mentionEmpImage\",attrs:{\"src\":data.Eimg,\"alt\":\"employee\"}}),_c('span',{staticClass:\"person\"},[_vm._v(_vm._s(data.Name))]),_c('span',{staticClass:\"email\"},[_vm._v(_vm._s(data.EmailId))])])]}},{key:\"dTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_vm._v(_vm._s(data.Name))]}}])})],1)])])])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the template functionalities of the Mention component. Type the \"),_c('code',[_vm._v(\"@\")]),_vm._v(\" character in the editable element and select or tag the user from the customized suggestion list.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"In the above sample, for the template rendering the following are used\")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"itemTemplate\")]),_vm._v(\" - It is used for displaying customized lists.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"displayTemplate\")]),_vm._v(\" - It is used to display, how the the value selected is previewed in the element.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"noRecordsTemplate\")]),_vm._v(\" - It is used to display a message if a user searches for irrelevant data in the data source bound.\")])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/mention/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });