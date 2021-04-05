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
/******/ 		"maps/export/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/export/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/export/App.vue":
/*!*************************************!*\
  !*** ./Samples/maps/export/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_95d2db4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=95d2db4c& */ \"./Samples/maps/export/App.vue?vue&type=template&id=95d2db4c&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/export/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/maps/export/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_95d2db4c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_95d2db4c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/export/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?");

/***/ }),

/***/ "./Samples/maps/export/App.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./Samples/maps/export/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/export/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?");

/***/ }),

/***/ "./Samples/maps/export/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./Samples/maps/export/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/export/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?");

/***/ }),

/***/ "./Samples/maps/export/App.vue?vue&type=template&id=95d2db4c&":
/*!********************************************************************!*\
  !*** ./Samples/maps/export/App.vue?vue&type=template&id=95d2db4c& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_95d2db4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=95d2db4c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/export/App.vue?vue&type=template&id=95d2db4c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_95d2db4c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_95d2db4c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?");

/***/ }),

/***/ "./Samples/maps/export/main.js":
/*!*************************************!*\
  !*** ./Samples/maps/export/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/export/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/export/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/export/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/export/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#map-export-sample #button-control {\\n    width: 100%;\\n    text-align: center;\\n}\\n#map-export-sample #control-container {\\n    padding: 0px !important;\\n}\\n#map-export-sample .e-play-icon::before {\\n    content: \\\"\\\\E728\\\";\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/export/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,YAAY;IACZ,mBAAmB;CACtB;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#map-export-sample #button-control {\\n    width: 100%;\\n    text-align: center;\\n}\\n#map-export-sample #control-container {\\n    padding: 0px !important;\\n}\\n#map-export-sample .e-play-icon::before {\\n    content: \\\"\\\\e728\\\";\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/export/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/export/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data:function(){\n      return{\n        allowImageExport: true,\n        allowPdfExport: true,\n        titleSettings: {\n            text: 'Location of the Wonders in the World',\n            textStyle: {\n                size: '16px'\n            }\n        },\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/world-map.json'),\n        shapeSettings: { fill: 'lightgrey', border: { color: 'black', width: 0.1 } },\n        markerSettings: [\n                    {\n                animationDuration: 0,\n                visible: true,\n                dataSource: [\n                            { longitude: 116.5703749, latitude: 40.4319077, name: 'The Great Wall of China, China' },\n                            { longitude: 35.4443622, latitude: 30.3284544, name: 'Petra, Jorden' },\n                            { longitude: 78.0421552, latitude: 27.1750151, name: 'Taj Mahal, Agra, India' },\n                            { longitude: 12.4922309, latitude: 41.8902102, name: 'The Roman Colosseum, Rome, Italy' },\n                            { longitude: -88.5677826, latitude: 20.6842849, name: 'The Chichen Itza, Mexico' },\n                            { longitude: -72.5449629, latitude: -13.1631412, name: 'Machu Picchu, Peru' },\n                            { longitude: -43.2104872, latitude: -22.951916, name: 'Christ Redeemer, Rio de janeiro, Brazil' },\n                        ],\n        shape: 'Balloon',\n        fill: '#E13E40',\n        height: 20,\n        width: 15,\n        tooltipSettings: {\n                            visible: true,\n                            valuePath: 'name'\n                        },\n                    }\n                ],\n        modedata:['JPEG','PNG','SVG','PDF'],\n        layerdata:['Geometry', 'OSM'],\n        iconCss: 'e-icons e-play-icon',\n        cssClass: 'e-flat', isPrimary: true, content:'Export', style: 'text-transform:none !important; margin-left:50%'\n      }\n  },\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"ImageExport\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"PdfExport\"]]\n},\nmethods:{\n    /* custom code start */\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    changeLayerType: function(args){\n            // let cotainerObj=document.getElementById('labels-container');\n            // let tickPosition=document.getElementById('tickposition');\n            let modeData = ['JPEG','PNG','PDF','SVG'];\n            if (this.$refs.layertype.ej2Instances.value === 'OSM') {\n                if (this.$refs.mode.ej2Instances.value === 'SVG') {\n                    this.$refs.mode.ej2Instances.value = modeData[0];\n                }\n                    this.$refs.mode.ej2Instances.dataSource = modeData.slice(0, 3);\n                } else {\n                    this.$refs.mode.ej2Instances.dataSource = modeData;\n                }\n                this.$refs.maps.ej2Instances.layers[this.$refs.maps.ej2Instances.layers.length - 1].layerType = this.$refs.layertype.ej2Instances.value;\n                this.$refs.maps.ej2Instances.refresh();\n    },\n    /* custom code end */\n    clickExport:function(args){     \n           let fileName = ((document.getElementById('fileName'))).value;\n           this.$refs.maps.ej2Instances.export(this.$refs.mode.ej2Instances.value, fileName);\n    }\n\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/export/App.vue?vue&type=template&id=95d2db4c&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/export/App.vue?vue&type=template&id=95d2db4c& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"map-export-sample\" } }, [\n    _c(\"div\", { staticClass: \"col-lg-9 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-maps\",\n            {\n              ref: \"maps\",\n              attrs: {\n                allowPdfExport: _vm.allowPdfExport,\n                allowImageExport: _vm.allowImageExport,\n                id: \"container\",\n                load: _vm.load,\n                titleSettings: _vm.titleSettings\n              }\n            },\n            [\n              _c(\n                \"e-layers\",\n                [\n                  _c(\"e-layer\", {\n                    attrs: {\n                      shapeData: _vm.shapeData,\n                      shapeSettings: _vm.shapeSettings,\n                      markerSettings: _vm.markerSettings\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _vm._m(0)\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n              _c(\n                \"div\",\n                { staticStyle: { \"margin-left\": \"-10px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"layertype\",\n                    attrs: {\n                      id: \"layertype\",\n                      change: _vm.changeLayerType,\n                      dataSource: _vm.layerdata,\n                      index: \"0\",\n                      width: 90\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(2),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n              _c(\n                \"div\",\n                { staticStyle: { \"margin-left\": \"-10px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"mode\",\n                    attrs: {\n                      id: \"mode\",\n                      dataSource: _vm.modedata,\n                      index: \"0\",\n                      width: 90\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _vm._m(3),\n          _vm._v(\" \"),\n          _c(\n            \"tr\",\n            {\n              staticStyle: { height: \"50px\" },\n              attrs: { id: \"button-control\" }\n            },\n            [\n              _c(\"td\", { attrs: { align: \"center\" } }, [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-button\", {\n                      style: _vm.style,\n                      attrs: {\n                        id: \"togglebtn\",\n                        cssClass: _vm.cssClass,\n                        iconCss: _vm.iconCss,\n                        isPrimary: _vm.isPrimary,\n                        content: _vm.content,\n                        isToggle: \"true\"\n                      },\n                      nativeOn: {\n                        click: function($event) {\n                          return _vm.clickExport($event)\n                        }\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n                \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"http://www.emapsworld.com/world-seven-wonder-map.html\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"en.wikipedia.org\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", [_vm._v(\"Map Type:\\n                    \")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", [_vm._v(\"Export Type:\\n                    \")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n      _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n        _c(\"div\", [_vm._v(\"File Name:\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n        _c(\n          \"div\",\n          {\n            staticClass: \"e-float-input\",\n            staticStyle: { \"margin-top\": \"0px\" }\n          },\n          [\n            _c(\"input\", {\n              staticStyle: { \"margin-left\": \"-10px\" },\n              attrs: { type: \"text\", value: \"Maps\", id: \"fileName\" }\n            })\n          ]\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \" \\n        This sample illustrates the exporting feature in Maps. You can modify the map type to geometric or OSM using the Map type dropdown list in this sample. By clicking the Export button, you can export the map in PNG, JPEG, SVG or in PDF formats.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       In this example, you can see how to render and configure the export functionality. The rendered map can be exported as either JPEG, PNG, SVG and PDF formats. Also this sample visualizes the locations of the wonders in the world using markers. Export functionality is done by \"\n        ),\n        _c(\"code\", [_vm._v(\"export\")]),\n        _vm._v(\" method when \"),\n        _c(\"code\", [_vm._v(\"allowImageExport\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"allowPdfExport\")]),\n        _vm._v(\" is set as true.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _c(\"b\", [_vm._v(\"Injecting Module\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       Maps component features are segregated into individual feature-wise modules. To use a marker, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Marker\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\n          \" section. To make use of the export support, we need to inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"ImageExport\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"PdfExport\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\\n        \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on export can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/documentation/maps/print/#export\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n      \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/export/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });