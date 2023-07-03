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
/******/ 		"listview/nested-list/main": 0
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
/******/ 	deferredModules.push(["./Samples/listview/nested-list/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/listview/nested-list/App.vue":
/*!**********************************************!*\
  !*** ./Samples/listview/nested-list/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_16a08a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=16a08a4e& */ \"./Samples/listview/nested-list/App.vue?vue&type=template&id=16a08a4e&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/listview/nested-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_16a08a4e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=16a08a4e&lang=css& */ \"./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_16a08a4e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_16a08a4e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/listview/nested-list/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?");

/***/ }),

/***/ "./Samples/listview/nested-list/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/listview/nested-list/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?");

/***/ }),

/***/ "./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16a08a4e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=16a08a4e&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16a08a4e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16a08a4e_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16a08a4e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16a08a4e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?");

/***/ }),

/***/ "./Samples/listview/nested-list/App.vue?vue&type=template&id=16a08a4e&":
/*!*****************************************************************************!*\
  !*** ./Samples/listview/nested-list/App.vue?vue&type=template&id=16a08a4e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16a08a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=16a08a4e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=template&id=16a08a4e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16a08a4e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16a08a4e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?");

/***/ }),

/***/ "./Samples/listview/nested-list/listData.ts":
/*!**************************************************!*\
  !*** ./Samples/listview/nested-list/listData.ts ***!
  \**************************************************/
/*! exports provided: callHistory, flatData, groupDataList, groupTemplateData, nestedListData, virtualizationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callHistory\", function() { return callHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatData\", function() { return flatData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupDataList\", function() { return groupDataList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupTemplateData\", function() { return groupTemplateData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nestedListData\", function() { return nestedListData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"virtualizationData\", function() { return virtualizationData; });\nvar callHistory = [\n    {\n        text: \"Smith\",\n        id: \"received-01\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"2 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Johnson\",\n        id: \"received-02\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Williams\",\n        id: \"missed-01\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"4 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Jones\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Brown\",\n        id: \"received-03\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Anderson\",\n        id: \"received-01\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"12 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Thomas\",\n        id: \"received-02\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Jackson\",\n        id: \"missed-01\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Emily\",\n        id: \"missed-01\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"14 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"White\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Jones\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"18 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Grace\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Brooklyn\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Arianna\",\n        id: \"received-01\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Katherine\",\n        id: \"received-02\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    }\n];\nvar flatData = [\n    { text: 'Hennessey Venom', id: 'list-01' },\n    { text: 'Bugatti Chiron', id: 'list-02' },\n    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },\n    { text: 'SSC Ultimate Aero', id: 'list-04' },\n    { text: 'Koenigsegg CCR', id: 'list-05' },\n    { text: 'McLaren F1', id: 'list-06' },\n    { text: 'Aston Martin One- 77', id: 'list-07' },\n    { text: 'Jaguar XJ220', id: 'list-08' },\n    { text: 'McLaren P1', id: 'list-09' },\n    { text: 'Ferrari LaFerrari', id: 'list-10' },\n    { text: 'Zenvo ST1', id: 'list-11' },\n    { text: 'Lamborghini Veneno', id: 'list-12' }\n];\nvar groupDataList = [\n    {\n        'text': 'Audi A4',\n        'id': '9bdb',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A5',\n        'id': '4589',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A6',\n        'id': 'e807',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A7',\n        'id': 'a0cc',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A8',\n        'id': '5e26',\n        'category': 'Audi'\n    },\n    {\n        'text': 'BMW 501',\n        'id': 'f849',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 502',\n        'id': '7aff',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 503',\n        'id': 'b1da',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 507',\n        'id': 'de2f',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 3200',\n        'id': 'b2b1',\n        'category': 'BMW'\n    }\n];\nvar groupTemplateData = [\n    {\n        Name: \"WI-FI\",\n        content: \"Disabled\",\n        id: \"1\",\n        class: \"wifi\",\n        category: \"Wireless & networks\",\n        order: 0\n    },\n    {\n        Name: \"Bluetooth\",\n        content: \"Disabled\",\n        id: \"2\",\n        class: \"bluetooth\",\n        category: \"Wireless & networks\",\n        order: 0\n    },\n    {\n        Name: \"SIM cards\",\n        id: \"3\",\n        class: \"sim\",\n        content: \"AT&T\",\n        category: \"Wireless & networks\",\n        order: 0\n    },\n    {\n        Name: \"Display\",\n        content: \"Adaptive brightness is OFF\",\n        id: \"4\",\n        class: \"display\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Sound\",\n        content: \"Ringer volume at 50%\",\n        id: \"5\",\n        class: \"sound\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Battery\",\n        content: \"85%\",\n        id: \"5\",\n        class: \"battery\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Users\",\n        content: \"Signed in as Albert\",\n        id: \"6\",\n        class: \"user\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Location\",\n        content: \"ON / High accuracy\",\n        id: \"7\",\n        class: \"location\",\n        category: \"Personal\",\n        order: 2\n    },\n    {\n        Name: \"Security\",\n        id: \"8\",\n        class: \"security\",\n        content: \"Screen Lock\",\n        category: \"Personal\",\n        order: 2\n    },\n    {\n        Name: \"Languages & input\",\n        content: \"English (US)\",\n        id: \"9\",\n        class: \"language\",\n        category: \"Personal\",\n        order: 2\n    }\n];\nvar nestedListData = [\n    {\n        id: '01', text: 'Music', icon: 'folder',\n        child: [\n            { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }\n        ]\n    },\n    {\n        id: '02', text: 'Videos', icon: 'folder',\n        child: [\n            { id: '02-01', text: 'Naturals.mp4', icon: 'file' },\n            { id: '02-02', text: 'Wild.mpeg', icon: 'file' },\n        ]\n    },\n    {\n        id: '03', text: 'Documents', icon: 'folder',\n        child: [\n            { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },\n            { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },\n            { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },\n            { id: '03-04', text: 'Social Network.pdf', icon: 'file' },\n            { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },\n        ]\n    },\n    {\n        id: '04', text: 'Pictures', icon: 'folder',\n        child: [\n            {\n                id: '04-01', text: 'Camera Roll', icon: 'folder',\n                child: [\n                    { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },\n                    { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },\n                    { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }\n                ]\n            },\n            {\n                id: '04-02', text: 'Wind.jpg', icon: 'file'\n            },\n            {\n                id: '04-02', text: 'Stone.jpg', icon: 'file'\n            },\n            {\n                id: '04-02', text: 'Home.jpg', icon: 'file'\n            },\n            {\n                id: '04-02', text: 'Bridge.png', icon: 'file'\n            }\n        ]\n    },\n    {\n        id: '05', text: 'Downloads', icon: 'folder',\n        child: [\n            { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },\n            { id: '05-02', text: 'Tutorials.zip', icon: 'file' },\n            { id: '05-03', text: 'Game.exe', icon: 'file' },\n            { id: '05-04', text: 'TypeScript.7z', icon: 'file' },\n        ]\n    }\n];\nvar virtualizationData = [{\n        name: \"Nancy\",\n        icon: \"N\",\n        id: \"0\"\n    },\n    {\n        name: \"Andrew\",\n        icon: \"A\",\n        id: \"1\"\n    },\n    {\n        name: \"Janet\",\n        icon: \"J\",\n        id: \"2\"\n    },\n    {\n        name: \"Margaret\",\n        imgUrl: \"./src/listview/images/laura.png\",\n        id: \"3\"\n    },\n    {\n        name: \"Steven\",\n        icon: \"S\",\n        id: \"4\"\n    },\n    {\n        name: \"Laura\",\n        imgUrl: \"./src/listview/images/laura.png\",\n        id: \"5\"\n    },\n    {\n        name: \"Robert\",\n        icon: \"R\",\n        id: \"6\"\n    },\n    {\n        name: \"Michael\",\n        icon: \"M\",\n        id: \"7\"\n    },\n    {\n        name: \"Albert\",\n        imgUrl: \"./src/listview/images/laura.png\",\n        id: \"8\"\n    },\n    {\n        name: \"Nolan\",\n        icon: \"N\",\n        id: \"9\"\n    }\n];\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/listData.ts?");

/***/ }),

/***/ "./Samples/listview/nested-list/main.js":
/*!**********************************************!*\
  !*** ./Samples/listview/nested-list/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/listview/nested-list/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.nestedlist.control-section {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n}\\n.nestedlist .e-listview .e-list-icon {\\n    height: 24px;\\n    width: 30px;\\n}\\n.nestedlist #listview {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.nestedlist .folder {\\n    background-repeat: no-repeat;\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/icons/file_icons.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-position: -8px -637px;;\\n    background-size: 150%;\\n}\\n.nestedlist .file {\\n    background-repeat: no-repeat;\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/icons/file_icons.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-position: -5px -216px;\\n    background-size: 150%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/j2-lists-vue-samples_development/Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;IACf,qBAAqB;CACxB;AACD;IACI,aAAa;IACb,YAAY;CACf;AACD;IACI,iBAAiB;IACjB,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,6BAA6B;IAC7B,gDAAwD;IACxD,iCAAiC;IACjC,sBAAsB;CACzB;AACD;IACI,6BAA6B;IAC7B,gDAAwD;IACxD,iCAAiC;IACjC,sBAAsB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&\",\"sourcesContent\":[\"\\n.nestedlist.control-section {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n}\\n.nestedlist .e-listview .e-list-icon {\\n    height: 24px;\\n    width: 30px;\\n}\\n.nestedlist #listview {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.nestedlist .folder {\\n    background-repeat: no-repeat;\\n    background-image: url('../images/icons/file_icons.png');\\n    background-position: -8px -637px;;\\n    background-size: 150%;\\n}\\n.nestedlist .file {\\n    background-repeat: no-repeat;\\n    background-image: url('../images/icons/file_icons.png');\\n    background-position: -5px -216px;\\n    background-size: 150%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/listview/nested-list/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _listData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listData */ \"./Samples/listview/nested-list/listData.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__[\"ListViewPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      data:_listData__WEBPACK_IMPORTED_MODULE_2__[\"nestedListData\"],\n    fields: { iconCss: 'icon', tooltip: 'text'},\n    headerTitle: 'Folders',\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=template&id=16a08a4e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/listview/nested-list/App.vue?vue&type=template&id=16a08a4e& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"control-section nestedlist\" },\n    [\n      _c(\"ejs-listview\", {\n        attrs: {\n          id: \"listview\",\n          dataSource: _vm.data,\n          fields: _vm.fields,\n          headerTitle: _vm.headerTitle,\n          showIcon: \"true\",\n          showHeader: \"true\",\n        },\n      }),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1),\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the nested list functionalities, which allows you to navigate to the sub list items by clicking any item and navigating back to the list item using the back icon at the top left.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The ListView component supports nested list. To achieve list navigation, the \"\n        ),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href: \"https://ej2.syncfusion.com/vue/documentation/api/list-view/fieldSettings/#child\",\n              },\n            },\n            [_vm._v(\"child\")]\n          ),\n        ]),\n        _vm._v(\n          \" property should be defined for the nested list in the array of JSON.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"This sample have nested folder with the sub folders or files.\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=16a08a4e&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/listview/nested-list/App.vue?vue&type=style&index=0&id=16a08a4e&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6a3a4d8b\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/listview/nested-list/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });