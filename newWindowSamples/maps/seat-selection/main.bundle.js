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
/******/ 		"maps/seat-selection/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/seat-selection/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/seat-selection/App.vue":
/*!*********************************************!*\
  !*** ./Samples/maps/seat-selection/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2188326a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2188326a&scoped=true& */ \"./Samples/maps/seat-selection/App.vue?vue&type=template&id=2188326a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/seat-selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css& */ \"./Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2188326a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2188326a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2188326a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/seat-selection/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/seat-selection/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/maps/seat-selection/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/seat-selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2188326a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/seat-selection/App.vue?vue&type=template&id=2188326a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/maps/seat-selection/App.vue?vue&type=template&id=2188326a&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2188326a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2188326a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/seat-selection/App.vue?vue&type=template&id=2188326a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2188326a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2188326a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?");

/***/ }),

/***/ "./Samples/maps/seat-selection/main.js":
/*!*********************************************!*\
  !*** ./Samples/maps/seat-selection/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/seat-selection/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-2188326a] {\\n    padding: 0px !important;\\n}\\n#seat-parent[data-v-2188326a] {\\n    text-align: center;\\n    cursor: pointer\\n}\\n#selectedseats[data-v-2188326a] {\\n    padding: 10px;\\n}\\n#selectedseats[data-v-2188326a], #seat-info[data-v-2188326a] {             \\n    font-size: 14px;\\n}\\n#clear-btn[data-v-2188326a] {\\n    padding: 10px;\\n    border: 2px solid rgb(241, 235, 247);\\n    border-radius: 8px;\\n    background: rgb(246, 245, 248);\\n    color: black;\\n    font-size: 14px;\\n}\\n.seats[data-v-2188326a] {\\n    padding-top: 15px;\\n    font-weight: bold;\\n}\\n#property div[data-v-2188326a]{\\n    padding-left: 10px;\\n    padding-top: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/seat-selection/App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,cAAc;CACjB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,cAAc;IACd,qCAAqC;IACrC,mBAAmB;IACnB,+BAA+B;IAC/B,aAAa;IACb,gBAAgB;CACnB;AACD;IACI,kBAAkB;IAClB,kBAAkB;CACrB;AACD;IACI,mBAAmB;IACnB,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=2188326a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-2188326a] {\\n    padding: 0px !important;\\n}\\n#seat-parent[data-v-2188326a] {\\n    text-align: center;\\n    cursor: pointer\\n}\\n#selectedseats[data-v-2188326a] {\\n    padding: 10px;\\n}\\n#selectedseats[data-v-2188326a], #seat-info[data-v-2188326a] {             \\n    font-size: 14px;\\n}\\n#clear-btn[data-v-2188326a] {\\n    padding: 10px;\\n    border: 2px solid rgb(241, 235, 247);\\n    border-radius: 8px;\\n    background: rgb(246, 245, 248);\\n    color: black;\\n    font-size: 14px;\\n}\\n.seats[data-v-2188326a] {\\n    padding-top: 15px;\\n    font-weight: bold;\\n}\\n#property div[data-v-2188326a]{\\n    padding-left: 10px;\\n    padding-top: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/seat-selection/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/seat-selection/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data:function(){\n      return{\n        projectionType: 'Equirectangular',\n        height: '400',\n        zoomSettings: {\n            enable: false\n        },\n        geometryType: 'Normal',\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/seat.json'),\n        shapeSettings: {\n                    colorValuePath: 'fill'\n        },\n        selectionSettings: {\n                    enable: true,\n                    opacity: 1,\n                    enableMultiSelect: true\n        }\n      }\n  },\n  provide:{\n      maps:[_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"]]\n  },\nmethods:{\n    /* custom code start */\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    itemSelection:function(args){\n        let seatInfo = document.getElementById('selectedseats');\n          if ((args.shapeData).fill === 'Orange') {\n                args.fill = 'Orange !important';\n                document.getElementById(args.target).setAttribute('class', 'ShapeselectionMapStyle');\n                return;\n            }\n            args.fill = 'green';\n            let seat = (args.shapeData).seatno;\n            let connector = ' ';\n            if (seatInfo.innerHTML === '') {\n                seatInfo.innerHTML = '<span id=\"seat-info\">Seats Selected -</span>';\n            } else {\n                connector = ', ';\n            }\n            let seatString = '<span class=\"seats\">' + connector + seat + '</span>';\n            let seatString1 = ' ' + seat + '</span><span class=\"seats\">,';\n            let lastString = '<span id=\"seat-info\">Seats Selected -</span><span class=\"seats\"> ' + seat + '</span>';\n            if (seatInfo.innerHTML.indexOf(seatString) === -1 && seatInfo.innerHTML.indexOf(seatString1) === -1 &&\n                seatInfo.innerHTML.indexOf(lastString) === -1) {\n                seatInfo.innerHTML += '<span class=\"seats\">' + connector + seat + '</span>';\n            } else {\n                seatInfo.innerHTML = seatInfo.innerHTML.replace(seatString, '');\n                seatInfo.innerHTML = seatInfo.innerHTML.replace(seatString1, '');\n                if (seatInfo.innerHTML === lastString) {\n                    seatInfo.innerHTML = '';\n                }\n            }\n    },\n    clickClear:function(args){\n        let seatInfo = document.getElementById('selectedseats');\n        seatInfo.innerHTML = '';\n        let selected = document.getElementsByClassName('ShapeselectionMapStyle');\n        for (let i = 0, length = selected.length; i < length; i++) {\n            selected[0].setAttribute('class', '');\n        }\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/seat-selection/App.vue?vue&type=template&id=2188326a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/seat-selection/App.vue?vue&type=template&id=2188326a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-9 control-section\" }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            border: \"3px solid darkgray\",\n            width: \"200px\",\n            display: \"block\",\n            margin: \"auto\",\n            \"border-radius\": \"5px\"\n          }\n        },\n        [\n          _c(\"img\", {\n            staticStyle: {\n              width: \"30px\",\n              height: \"30px\",\n              \"margin-left\": \"18%\",\n              \"margin-top\": \"10px\"\n            },\n            attrs: {\n              src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../source/maps/images/wheel.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n              alt: \"Steering wheel icon\"\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\n            \"ejs-maps\",\n            {\n              attrs: {\n                id: \"maps\",\n                load: _vm.load,\n                projectionType: _vm.projectionType,\n                itemSelection: _vm.itemSelection,\n                height: _vm.height,\n                zoomSettings: _vm.zoomSettings\n              }\n            },\n            [\n              _c(\n                \"e-layers\",\n                [\n                  _c(\"e-layer\", {\n                    attrs: {\n                      geometryType: _vm.geometryType,\n                      shapeData: _vm.shapeData,\n                      selectionSettings: _vm.selectionSettings,\n                      shapeSettings: _vm.shapeSettings\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _c(\"div\", { attrs: { id: \"seat-parent\" } }, [\n      _c(\n        \"span\",\n        { attrs: { id: \"clear-btn\" }, on: { click: _vm.clickClear } },\n        [_vm._v(\"Clear Selection\")]\n      ),\n      _c(\"br\"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"selectedseats\" } })\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          width: \"200px\",\n          margin: \"auto\",\n          \"padding-bottom\": \"20px\"\n        }\n      },\n      [\n        _c(\"img\", {\n          staticStyle: { width: \"25px\", height: \"25px\", float: \"left\" },\n          attrs: {\n            src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../source/maps/images/bus-icon.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n            alt: \"Bus icon\"\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              \"padding-left\": \"30px\",\n              \"font-size\": \"20px\",\n              \"font-weight\": \"400\"\n            }\n          },\n          [_vm._v(\"Bus seat selection\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\", \"font-weight\": \"400 !important\" },\n          attrs: { id: \"property\", title: \"Seat Selection\" }\n        },\n        [\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"30px\" } }, [\n              _c(\"td\", [\n                _c(\"div\", {\n                  staticStyle: {\n                    height: \"0\",\n                    width: \"15px\",\n                    \"padding-bottom\": \"5px\",\n                    \"background-color\": \"gray\",\n                    \"border-radius\": \"25%\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      \"margin-top\": \"-25px\",\n                      \"margin-left\": \"15px\"\n                    },\n                    attrs: { id: \"available\" }\n                  },\n                  [_vm._v(\"Available\")]\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"30px\" } }, [\n              _c(\"td\", [\n                _c(\"div\", {\n                  staticStyle: {\n                    height: \"0\",\n                    width: \"15px\",\n                    \"padding-bottom\": \"5px\",\n                    \"background-color\": \"Green\",\n                    \"border-radius\": \"25%\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      \"margin-top\": \"-25px\",\n                      \"margin-left\": \"15px\"\n                    },\n                    attrs: { id: \"selected\" }\n                  },\n                  [_vm._v(\"Selected\")]\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"30px\" } }, [\n              _c(\"td\", [\n                _c(\"div\", {\n                  staticStyle: {\n                    height: \"0\",\n                    width: \"15px\",\n                    \"padding-bottom\": \"5px\",\n                    \"background-color\": \"Orange\",\n                    \"border-radius\": \"25%\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      \"margin-top\": \"-25px\",\n                      \"margin-left\": \"15px\"\n                    },\n                    attrs: { id: \"booked\" }\n                  },\n                  [_vm._v(\"Booked\")]\n                )\n              ])\n            ])\n          ])\n        ]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n                    This sample visualizes a seating chart, in which the seats can be selected similarly to bus seat booking. Available, booked, and selected seats will be displayed in different colors.\\n                \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n              In this example, you can see how to render the normal geometry type shapes on the map. Selection is enabled in this sample. You can use the \"\n        ),\n        _c(\"code\", [_vm._v(\"fill\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"width\")]),\n        _vm._v(\", and \"),\n        _c(\"code\", [_vm._v(\"color\")]),\n        _vm._v(\" properties in the \"),\n        _c(\"code\", [_vm._v(\"selectionSettings\")]),\n        _vm._v(\n          \" to customize the appearance of the shapes after selection.\\n            \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n             Maps component features are segregated into individual feature-wise modules. To use the selection, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Selection\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Maps.Inject(Selection)\")]),\n        _vm._v(\" method.\\n            \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/seat-selection/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });