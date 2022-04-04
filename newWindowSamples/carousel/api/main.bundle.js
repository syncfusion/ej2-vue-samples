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
/******/ 		"carousel/api/main": 0
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
/******/ 	deferredModules.push(["./Samples/carousel/api/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/carousel/api/App.vue":
/*!**************************************!*\
  !*** ./Samples/carousel/api/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_386f8c51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=386f8c51& */ \"./Samples/carousel/api/App.vue?vue&type=template&id=386f8c51&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/carousel/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_386f8c51___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_386f8c51___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/carousel/api/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?");

/***/ }),

/***/ "./Samples/carousel/api/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/carousel/api/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/carousel/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?");

/***/ }),

/***/ "./Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?");

/***/ }),

/***/ "./Samples/carousel/api/App.vue?vue&type=template&id=386f8c51&":
/*!*********************************************************************!*\
  !*** ./Samples/carousel/api/App.vue?vue&type=template&id=386f8c51& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_386f8c51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=386f8c51& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/api/App.vue?vue&type=template&id=386f8c51&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_386f8c51___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_386f8c51___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?");

/***/ }),

/***/ "./Samples/carousel/api/main.js":
/*!**************************************!*\
  !*** ./Samples/carousel/api/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/carousel/api/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/carousel/api/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.api-carousel-section .carousel-sample {\\n  margin: 0 auto 2em;\\n  max-width: 500px;\\n  height: 300px;\\n}\\n.api-carousel-section .property-panel-table td {\\n  margin: 0;\\n  padding-bottom: 1em;\\n}\\n.api-carousel .e-carousel-items .e-carousel-item .img-container {\\n  height: 100%;\\n}\\n.api-carousel .e-carousel-items .e-carousel-item .img-container .img-caption {\\n  color: rgba(255, 255, 255);\\n  font-style: oblique;\\n  font-size: 1.5rem;\\n  margin: 0;\\n  left: 1.5rem;\\n  position: absolute;\\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\\n  top: 1.5rem;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-AYH7XHMO6KSEIXRKCV5I64MQMMUYOJMXW32VBZ37W2N7QVS7ANEQ/Samples/carousel/api/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;CACf;AACD;EACE,UAAU;EACV,oBAAoB;CACrB;AACD;EACE,aAAa;CACd;AACD;EACE,2BAA2B;EAC3B,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,4CAA4C;EAC5C,YAAY;CACb\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.api-carousel-section .carousel-sample {\\n  margin: 0 auto 2em;\\n  max-width: 500px;\\n  height: 300px;\\n}\\n.api-carousel-section .property-panel-table td {\\n  margin: 0;\\n  padding-bottom: 1em;\\n}\\n.api-carousel .e-carousel-items .e-carousel-item .img-container {\\n  height: 100%;\\n}\\n.api-carousel .e-carousel-items .e-carousel-item .img-container .img-caption {\\n  color: rgba(255, 255, 255);\\n  font-style: oblique;\\n  font-size: 1.5rem;\\n  margin: 0;\\n  left: 1.5rem;\\n  position: absolute;\\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\\n  top: 1.5rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/carousel/api/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/api/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"CarouselPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"SwitchPlugin\"]);\n\nvar itemTemplate1Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate1\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/bridge.jpg\" alt=\"bridge\" style=\"height:100%;width:100%;\" />' +\n    '<figcaption class=\"img-caption\">Showing 1 of 5</figcaption>' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  }\n});\n\nvar itemTemplate2Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate2\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/trees.jpg\" alt=\"spring_trees\" style=\"height:100%;width:100%;\" />' +\n    '<figcaption class=\"img-caption\">Showing 2 of 5</figcaption>' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  }\n});\n\nvar itemTemplate3Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate3\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/waterfall.jpg\" alt=\"waterfall\" style=\"height:100%;width:100%;\" />' +\n    '<figcaption class=\"img-caption\">Showing 3 of 5</figcaption>' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  }\n});\n\nvar itemTemplate4Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate4\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/sea.jpg\" alt=\"sea\" style=\"height:100%;width:100%;\" />' +\n    '<figcaption class=\"img-caption\">Showing 4 of 5</figcaption>' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  }\n});\n\nvar itemTemplate5Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate5\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/rocks.jpeg\" alt=\"rocks\" style=\"height:100%;width:100%;\" />' +\n    '<figcaption class=\"img-caption\">Showing 5 of 5</figcaption>' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {\n      interval: 3000,\n      itemTemplate1: function (e) {\n        return {\n          template: itemTemplate1Vue,\n        };\n      },\n      itemTemplate2: function (e) {\n        return {\n          template: itemTemplate2Vue,\n        };\n      },\n      itemTemplate3: function (e) {\n        return {\n          template: itemTemplate3Vue,\n        };\n      },\n      itemTemplate4: function (e) {\n        return {\n          template: itemTemplate4Vue,\n        };\n      },\n      itemTemplate5: function (e) {\n        return {\n          template: itemTemplate5Vue,\n        };\n      },\n      buttonsVisibilityData: [\n        { text: \"Hidden\", value: \"Hidden\" },\n        { text: \"Visible\", value: \"Visible\" },\n        { text: \"On Hover\", value: \"VisibleOnHover\" },\n      ],\n      buttonsVisibilityField: { text: \"text\", value: \"value\" },\n      showArrowValue: \"Visible\",\n      slideIntervalData: [\n        { text: \"3 Seconds\", value: \"3000\" },\n        { text: \"5 Seconds\", value: \"5000\" },\n        { text: \"7 Seconds\", value: \"7000\" },\n      ],\n      slideIntervalField: { text: \"text\", value: \"value\" },\n      slideIntervalValue: \"3000\",\n    };\n  },\n  methods: {\n    buttonsVisibilityStateChange: function (args) {\n      this.$refs.carObj.ej2Instances.buttonsVisibility = args.value;\n      this.$refs.carObj.ej2Instances.dataBind();\n    },\n    showIndicatorsStateChange: function (args) {\n      this.$refs.carObj.ej2Instances.showIndicators = args.checked;\n      this.$refs.carObj.ej2Instances.dataBind();\n    },\n    showPlayButtonStateChange: function (args) {\n      this.$refs.carObj.ej2Instances.showPlayButton = args.checked;\n      this.$refs.carObj.ej2Instances.dataBind();\n    },\n    slideIntervalStateChange: function (args) {\n      this.$refs.carObj.ej2Instances.interval = args.value;\n      this.$refs.carObj.ej2Instances.dataBind();\n    },\n    enableAutoplayStateChange: function (args) {\n      this.$refs.carObj.ej2Instances.autoPlay = args.checked;\n      this.$refs.carObj.ej2Instances.dataBind();\n    },\n    infiniteLoopingStateChange: function (args) {\n      this.$refs.carObj.ej2Instances.loop = args.checked;\n      this.$refs.carObj.ej2Instances.dataBind();\n    },\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/api/App.vue?vue&type=template&id=386f8c51&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/api/App.vue?vue&type=template&id=386f8c51& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"api-carousel-section\"},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"e-sample-resize-container carousel-sample\"},[_c('ejs-carousel',{ref:\"carObj\",attrs:{\"cssClass\":\"api-carousel\",\"interval\":_vm.interval}},[_c('e-carousel-items',[_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate1}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate2}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate3}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate4}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate5}})],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 property-section\"},[_c('div',{staticClass:\"property-panel-table\",attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',[_c('td',[_vm._v(\"Enable Autoplay\")]),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-switch',{attrs:{\"id\":\"enableAutoplay\",\"checked\":true,\"change\":_vm.enableAutoplayStateChange}})],1)])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"Infinite Looping\")]),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-switch',{attrs:{\"id\":\"infiniteLooping\",\"checked\":true,\"change\":_vm.infiniteLoopingStateChange}})],1)])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"Show Indicators\")]),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-switch',{attrs:{\"id\":\"showIndicators\",\"checked\":true,\"change\":_vm.showIndicatorsStateChange}})],1)])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"Show Play Button\")]),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-switch',{attrs:{\"id\":\"showPlayButton\",\"checked\":false,\"change\":_vm.showPlayButtonStateChange}})],1)])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"Buttons Visibility\")]),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"buttonsVisibility\",\"dataSource\":_vm.buttonsVisibilityData,\"fields\":_vm.buttonsVisibilityField,\"value\":_vm.showArrowValue,\"change\":_vm.buttonsVisibilityStateChange}})],1)])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"Slide Interval\")]),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"slideInterval\",\"dataSource\":_vm.slideIntervalData,\"fields\":_vm.slideIntervalField,\"value\":_vm.slideIntervalValue,\"change\":_vm.slideIntervalStateChange}})],1)])])])])])])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample demonstrates the properties available in the\\n        \"),_c('b',[_vm._v(\"Vue Carousel\")]),_vm._v(\" component.\\n      \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this demo, you can manually change the properties of the\\n        \"),_c('code',[_vm._v(\"Vue Carousel\")]),_vm._v(\" component like \"),_c('code',[_vm._v(\"autoPlay\")]),_vm._v(\",\\n        \"),_c('code',[_vm._v(\"buttonsVisibility\")]),_vm._v(\", \"),_c('code',[_vm._v(\"showIndicators\")]),_vm._v(\",\\n        \"),_c('code',[_vm._v(\"interval\")]),_vm._v(\", \"),_c('code',[_vm._v(\"showPlayButton\")]),_vm._v(\",\\n        \"),_c('code',[_vm._v(\"loop\")]),_vm._v(\" using the property panel.\\n      \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        More information about the properties available in the Carousel\\n        component can be found in this\\n        \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/carousel/\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n      \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/carousel/api/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });