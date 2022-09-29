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
/******/ 		"multi-select/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/multi-select/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/multi-select/template/App.vue":
/*!***********************************************!*\
  !*** ./Samples/multi-select/template/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_60c6a9c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=60c6a9c7& */ \"./Samples/multi-select/template/App.vue?vue&type=template&id=60c6a9c7&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/multi-select/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_60c6a9c7_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css& */ \"./Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_60c6a9c7___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_60c6a9c7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/multi-select/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/template/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/multi-select/template/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css&":
/*!********************************************************************************************!*\
  !*** ./Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_60c6a9c7_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_60c6a9c7_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_60c6a9c7_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_60c6a9c7_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_60c6a9c7_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/template/App.vue?vue&type=template&id=60c6a9c7&":
/*!******************************************************************************!*\
  !*** ./Samples/multi-select/template/App.vue?vue&type=template&id=60c6a9c7& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_60c6a9c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=60c6a9c7& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/template/App.vue?vue&type=template&id=60c6a9c7&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_60c6a9c7___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_60c6a9c7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/template/dataSource.json":
/*!*******************************************************!*\
  !*** ./Samples/multi-select/template/dataSource.json ***!
  \*******************************************************/
/*! exports provided: countries, colorsData, data, vegetableData, sportsData, empList, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"colorsData\\\":[{\\\"Color\\\":\\\"Chocolate\\\",\\\"Code\\\":\\\"#75523C\\\"},{\\\"Color\\\":\\\"CadetBlue\\\",\\\"Code\\\":\\\"#3B8289\\\"},{\\\"Color\\\":\\\"DarkOrange\\\",\\\"Code\\\":\\\"#FF843D\\\"},{\\\"Color\\\":\\\"DarkRed\\\",\\\"Code\\\":\\\"#CA3832\\\"},{\\\"Color\\\":\\\"Fuchsia\\\",\\\"Code\\\":\\\"#D44FA3\\\"},{\\\"Color\\\":\\\"HotPink\\\",\\\"Code\\\":\\\"#F23F82\\\"},{\\\"Color\\\":\\\"Indigo\\\",\\\"Code\\\":\\\"#2F5D81\\\"},{\\\"Color\\\":\\\"LimeGreen\\\",\\\"Code\\\":\\\"#4CD242\\\"},{\\\"Color\\\":\\\"OrangeRed\\\",\\\"Code\\\":\\\"#FE2A00\\\"},{\\\"Color\\\":\\\"Tomato\\\",\\\"Code\\\":\\\"#FF745C\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"sportsData\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/multi-select/template/dataSource.json?");

/***/ }),

/***/ "./Samples/multi-select/template/main.js":
/*!***********************************************!*\
  !*** ./Samples/multi-select/template/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/multi-select/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/multi-select/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.multiselect-template .header {\\n    font-weight: 600;\\n    color: rgba(0, 0, 0, .54);\\n    height: 48px;\\n    padding: 15px 0 0 16px;\\n    font-size: 16px;\\n    background-color: #f5f5f5;\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\";\\n}\\n.fabric .multiselect-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #0078d7;\\n    font-weight: 400;\\n}\\n.bootstrap .multiselect-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #777;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 30px;\\n    height: 30px;\\n    padding: 0 0 0 24px;\\n}\\n.fluent-dark .multiselect-template .header {\\n    background: #252423;\\n    color: #2899F5;\\n}\\n.bootstrap5-dark .multiselect-template .header {\\n    background: #343A40;\\n    color: #7B848D;\\n}\\n.fluent .multiselect-template .header{\\n     color: #2899F5;\\n}\\n.tailwind-dark .multiselect-template .header {\\n    background: #374151;\\n    color: rgb(255, 255, 255);\\n}\\n.material-dark .multiselect-template .header {\\n    background: rgb(66, 66, 66);\\n    color: rgb(255, 255, 255);\\n}\\n.fabric-dark .multiselect-template .header {\\n    background: rgb(40, 39, 39);\\n    color: rgb(255, 255, 255);\\n}\\n.bootstrap-dark .multiselect-template .header {\\n    background: rgb(49, 49, 49);\\n    color: rgb(255, 255, 255);\\n}\\n.highcontrast .multiselect-template .header {\\n    color: #fff;\\n    background-color: #000;\\n}\\n.e-bigger.bootstrap .multiselect-template .header {\\n    line-height: 44px;\\n    height: 44px;\\n    font-size: 13px;\\n}\\n.bootstrap .multiselect-template .info,\\n.e-bigger.bootstrap .multiselect-template .info {\\n    margin-left: 25px;\\n}\\n.bootstrap .multiselect-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -25px;\\n    margin-bottom: 20px;\\n}\\n.e-bigger.bootstrap .multiselect-template .job {\\n    font-size: 15px;\\n    margin-top: -32px;\\n    margin-bottom: 17px;\\n}\\n.tailwind .multiselect-template .job,\\n.bootstrap4 .multiselect-template .job,\\n.bootstrap5 .multiselect-template .job {\\n    margin-top: -7px;\\n    margin-bottom: 5px;\\n}\\n.e-bigger.tailwind .multiselect-template .job,\\n.e-bigger.bootstrap4 .multiselect-template .job,\\n.e-bigger.bootstrap5 .multiselect-template .job {\\n    margin-top: -15px;\\n    margin-bottom: 5px;\\n}\\n.bootstrap .multiselect-template .ename {\\n    font-size: 15px;\\n    margin-top: 20px;\\n    opacity: .87;\\n    padding: 3px 0 20px;\\n}\\n.e-bigger.bootstrap .multiselect-template .ename {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n}\\n.bootstrap:not(.e-bigger) .multiselect-template .empImage {\\n    margin: 0px 10px 0 20px;\\n}\\n.multiselect-template .info {\\n    margin-left: 17px;\\n}\\n.multiselect-template .ename {\\n    display: block !important;\\n    opacity: .87;\\n    font-size: 16px;\\n    margin-top: 8px;\\n}\\n.multiselect-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -15px;\\n    margin-bottom: 7px;\\n}\\n.multiselect-template .empImage {\\n    margin: 6px 16px;\\n    float: left;\\n    width: 50px;\\n    height: 50px;\\n}\\n.multiselect-template .e-list-item * {\\n    display: block;\\n    text-indent: 0;\\n}\\n.e-bigger:not(.bootstrap) .multiselect-template .e-dropdownbase .e-list-item {\\n    line-height: 42px;\\n    height: 80px;\\n}\\n.e-bigger:not(.bootstrap) .multiselect-template.e-popup .empImage {\\n    margin: 10px 16px;\\n}\\n.bootstrap4 .multiselect-template .header {\\n    color: #6c757d;\\n}\\n.bootstrap4 .multiselect-template.e-popup .empImage {\\n    margin: 1px 16px;\\n}\\n.value {\\n    border-radius: 50%;\\n    float: left;\\n    margin-top: -1px;\\n    position: relative;\\n    left: 0px;\\n    height: 24px;\\n    width: 24px;\\n}\\n.material .value {\\n    margin-top: 18px;\\n}\\n.highcontrast .value{\\n    margin-top: 0px;\\n}\\n.highcontrast .name {\\n    padding: 3px 28px;\\n}\\n.bootstrap .value {\\n    left: -9px;\\n    height: 28px;\\n    width: 28px;\\n    margin-top: 18px;\\n}\\n.fabric .value {\\n    margin-top: 22px;\\n}\\n.material .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 3px 0 0 28px;\\n    bottom: 23px;\\n    position: relative;\\n    margin-right: -16px;\\n}\\n.bootstrap .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 1px 0 0 26px;\\n    bottom: 23px;\\n    position: relative;\\n    margin-right: -24px;\\n}\\n.e-bigger .value {\\n    margin-top: 0px;\\n    height: 30px;\\n    width: 30px;\\n}\\n.e-bigger.fabric .value {\\n    margin-top: 2px;\\n}\\n.e-bigger.material .value {\\n    margin-top: 18px;\\n}\\n.e-bigger .name {\\n    padding: 0 0 0 36px;\\n    bottom: 24px;\\n    width: 121px;\\n}\\n.e-bigger.highcontrast .name {\\n    padding: 6px 0 0 36px;\\n    bottom: 24px;\\n    width: 121px;\\n}\\n.fabric .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 0 0 3px 30px;\\n    position: relative;\\n    bottom: 22px;\\n    margin-right: -23px;\\n}\\n.fabric.e-bigger .name {\\n    padding: 7px 0 0 32px;\\n    width: 100%;\\n    position: relative;\\n    overflow: initial;\\n    text-overflow: unset;\\n    bottom: 0px;\\n    margin-right: -6px;\\n}\\n.bootstrap.e-bigger .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 0 0 0 29px;\\n    position: relative;\\n    bottom: 23px;\\n    margin-right: -24px;\\n}\\n.bootstrap.e-bigger .value {\\n    left: -9px;\\n    margin-top: 17px;\\n}\\n.e-bigger .value {\\n    position: relative;\\n}\\n.tailwind.e-bigger .name {\\n    padding: 6px 0 0 35px;\\n    line-height: 1.2em;\\n}\\n.tailwind .name,\\n.bootstrap4 .name {\\n    padding: 3px 0px 0px 25px;\\n    line-height: 1.2em;\\n}\\n.bootstrap5 .name {\\n    padding: 3px 0px 0px 30px;\\n}\\n.bootstrap5.e-bigger .name {\\n    padding: 6px 0px 0px 35px;\\n}\\n.bootstrap4 .value {\\n  margin-left: -5px;\\n}\\n.tailwind .value,\\n.bootstrap4 .value {\\n    margin-top: 1px;\\n    height: 22px;\\n    width: 22px;\\n}\\n.tailwind.e-bigger .value {\\n    margin-top: 1px;\\n    height: 26px;\\n    width: 26px;\\n}\\n.material.e-bigger .name {\\n    padding: 2px 0 0 36px;\\n    bottom: 24px;\\n    width: 100%;\\n    position: relative;\\n}\\n.material.e-bigger .e-chips.e-mob-chip.e-chip-selected .name {\\n    left: 0px;\\n    width: 110px;\\n    position: relative;\\n}\\n.name {\\n    padding: 3px 20px;\\n    line-height: 1.2em;\\n}\\n.e-multi-select-wrapper .e-chips {\\n    max-width: 166px;\\n    overflow: hidden;\\n}\\n.e-multi-select-wrapper .e-chips {\\n    padding: 0 4px 0 0px\\n}\\n.e-multi-select-wrapper .e-chips.e-mob-chip.e-chip-selected {\\n    padding: 0 0 0 0px;\\n}\\n.bootstrap.e-bigger .e-chips.e-mob-chip.e-chip-selected .value {\\n    left: 0px;\\n}\\n.material.e-bigger .e-chips.e-mob-chip.e-chip-selected .name {\\n    left: 0px;\\n    width: 110px;\\n    position: relative;\\n}\\n.fabric .e-multi-select-wrapper .e-chips.e-mob-chip.e-chip-selected .e-chips-close.e-icon {\\n    left: 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-BP5IK5FTVXDNHENTCUSRIRDGFBHOLESCF3OKJXTMKAMHM6P6WNYQ/Samples/multi-select/template/App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,0BAA0B;IAC1B,oDAAoD;CACvD;AACD;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;IACZ,kEAAkE;IAClE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;KACK,eAAe;CACnB;AACD;IACI,oBAAoB;IACpB,0BAA0B;CAC7B;AACD;IACI,4BAA4B;IAC5B,0BAA0B;CAC7B;AACD;IACI,4BAA4B;IAC5B,0BAA0B;CAC7B;AACD;IACI,4BAA4B;IAC5B,0BAA0B;CAC7B;AACD;IACI,YAAY;IACZ,uBAAuB;CAC1B;AACD;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;CACnB;AACD;;IAEI,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;;;IAGI,iBAAiB;IACjB,mBAAmB;CACtB;AACD;;;IAGI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,qBAAqB;CACxB;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,kBAAkB;CACrB;AACD;IACI,0BAA0B;IAC1B,aAAa;IACb,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;CAChB;AACD;IACI,eAAe;IACf,eAAe;CAClB;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,eAAe;CAClB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,YAAY;CACf;AACD;IACI,iBAAiB;CACpB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;CACf;AACD;IACI,gBAAgB;CACnB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,aAAa;IACb,aAAa;CAChB;AACD;IACI,sBAAsB;IACtB,aAAa;IACb,aAAa;CAChB;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;CACtB;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,WAAW;IACX,iBAAiB;CACpB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,sBAAsB;IACtB,mBAAmB;CACtB;AACD;;IAEI,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;AACD;EACE,kBAAkB;CACnB;AACD;;IAEI,gBAAgB;IAChB,aAAa;IACb,YAAY;CACf;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;CACf;AACD;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,mBAAmB;CACtB;AACD;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,UAAU;CACb;AACD;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,UAAU;CACb\",\"file\":\"App.vue?vue&type=style&index=0&id=60c6a9c7&lang=css&\",\"sourcesContent\":[\"\\n.multiselect-template .header {\\n    font-weight: 600;\\n    color: rgba(0, 0, 0, .54);\\n    height: 48px;\\n    padding: 15px 0 0 16px;\\n    font-size: 16px;\\n    background-color: #f5f5f5;\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\";\\n}\\n.fabric .multiselect-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #0078d7;\\n    font-weight: 400;\\n}\\n.bootstrap .multiselect-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #777;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 30px;\\n    height: 30px;\\n    padding: 0 0 0 24px;\\n}\\n.fluent-dark .multiselect-template .header {\\n    background: #252423;\\n    color: #2899F5;\\n}\\n.bootstrap5-dark .multiselect-template .header {\\n    background: #343A40;\\n    color: #7B848D;\\n}\\n.fluent .multiselect-template .header{\\n     color: #2899F5;\\n}\\n.tailwind-dark .multiselect-template .header {\\n    background: #374151;\\n    color: rgb(255, 255, 255);\\n}\\n.material-dark .multiselect-template .header {\\n    background: rgb(66, 66, 66);\\n    color: rgb(255, 255, 255);\\n}\\n.fabric-dark .multiselect-template .header {\\n    background: rgb(40, 39, 39);\\n    color: rgb(255, 255, 255);\\n}\\n.bootstrap-dark .multiselect-template .header {\\n    background: rgb(49, 49, 49);\\n    color: rgb(255, 255, 255);\\n}\\n.highcontrast .multiselect-template .header {\\n    color: #fff;\\n    background-color: #000;\\n}\\n.e-bigger.bootstrap .multiselect-template .header {\\n    line-height: 44px;\\n    height: 44px;\\n    font-size: 13px;\\n}\\n.bootstrap .multiselect-template .info,\\n.e-bigger.bootstrap .multiselect-template .info {\\n    margin-left: 25px;\\n}\\n.bootstrap .multiselect-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -25px;\\n    margin-bottom: 20px;\\n}\\n.e-bigger.bootstrap .multiselect-template .job {\\n    font-size: 15px;\\n    margin-top: -32px;\\n    margin-bottom: 17px;\\n}\\n.tailwind .multiselect-template .job,\\n.bootstrap4 .multiselect-template .job,\\n.bootstrap5 .multiselect-template .job {\\n    margin-top: -7px;\\n    margin-bottom: 5px;\\n}\\n.e-bigger.tailwind .multiselect-template .job,\\n.e-bigger.bootstrap4 .multiselect-template .job,\\n.e-bigger.bootstrap5 .multiselect-template .job {\\n    margin-top: -15px;\\n    margin-bottom: 5px;\\n}\\n.bootstrap .multiselect-template .ename {\\n    font-size: 15px;\\n    margin-top: 20px;\\n    opacity: .87;\\n    padding: 3px 0 20px;\\n}\\n.e-bigger.bootstrap .multiselect-template .ename {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n}\\n.bootstrap:not(.e-bigger) .multiselect-template .empImage {\\n    margin: 0px 10px 0 20px;\\n}\\n.multiselect-template .info {\\n    margin-left: 17px;\\n}\\n.multiselect-template .ename {\\n    display: block !important;\\n    opacity: .87;\\n    font-size: 16px;\\n    margin-top: 8px;\\n}\\n.multiselect-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -15px;\\n    margin-bottom: 7px;\\n}\\n.multiselect-template .empImage {\\n    margin: 6px 16px;\\n    float: left;\\n    width: 50px;\\n    height: 50px;\\n}\\n.multiselect-template .e-list-item * {\\n    display: block;\\n    text-indent: 0;\\n}\\n.e-bigger:not(.bootstrap) .multiselect-template .e-dropdownbase .e-list-item {\\n    line-height: 42px;\\n    height: 80px;\\n}\\n.e-bigger:not(.bootstrap) .multiselect-template.e-popup .empImage {\\n    margin: 10px 16px;\\n}\\n.bootstrap4 .multiselect-template .header {\\n    color: #6c757d;\\n}\\n.bootstrap4 .multiselect-template.e-popup .empImage {\\n    margin: 1px 16px;\\n}\\n.value {\\n    border-radius: 50%;\\n    float: left;\\n    margin-top: -1px;\\n    position: relative;\\n    left: 0px;\\n    height: 24px;\\n    width: 24px;\\n}\\n.material .value {\\n    margin-top: 18px;\\n}\\n.highcontrast .value{\\n    margin-top: 0px;\\n}\\n.highcontrast .name {\\n    padding: 3px 28px;\\n}\\n.bootstrap .value {\\n    left: -9px;\\n    height: 28px;\\n    width: 28px;\\n    margin-top: 18px;\\n}\\n.fabric .value {\\n    margin-top: 22px;\\n}\\n.material .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 3px 0 0 28px;\\n    bottom: 23px;\\n    position: relative;\\n    margin-right: -16px;\\n}\\n.bootstrap .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 1px 0 0 26px;\\n    bottom: 23px;\\n    position: relative;\\n    margin-right: -24px;\\n}\\n.e-bigger .value {\\n    margin-top: 0px;\\n    height: 30px;\\n    width: 30px;\\n}\\n.e-bigger.fabric .value {\\n    margin-top: 2px;\\n}\\n.e-bigger.material .value {\\n    margin-top: 18px;\\n}\\n.e-bigger .name {\\n    padding: 0 0 0 36px;\\n    bottom: 24px;\\n    width: 121px;\\n}\\n.e-bigger.highcontrast .name {\\n    padding: 6px 0 0 36px;\\n    bottom: 24px;\\n    width: 121px;\\n}\\n.fabric .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 0 0 3px 30px;\\n    position: relative;\\n    bottom: 22px;\\n    margin-right: -23px;\\n}\\n.fabric.e-bigger .name {\\n    padding: 7px 0 0 32px;\\n    width: 100%;\\n    position: relative;\\n    overflow: initial;\\n    text-overflow: unset;\\n    bottom: 0px;\\n    margin-right: -6px;\\n}\\n.bootstrap.e-bigger .name {\\n    width: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding: 0 0 0 29px;\\n    position: relative;\\n    bottom: 23px;\\n    margin-right: -24px;\\n}\\n.bootstrap.e-bigger .value {\\n    left: -9px;\\n    margin-top: 17px;\\n}\\n.e-bigger .value {\\n    position: relative;\\n}\\n.tailwind.e-bigger .name {\\n    padding: 6px 0 0 35px;\\n    line-height: 1.2em;\\n}\\n.tailwind .name,\\n.bootstrap4 .name {\\n    padding: 3px 0px 0px 25px;\\n    line-height: 1.2em;\\n}\\n.bootstrap5 .name {\\n    padding: 3px 0px 0px 30px;\\n}\\n.bootstrap5.e-bigger .name {\\n    padding: 6px 0px 0px 35px;\\n}\\n.bootstrap4 .value {\\n  margin-left: -5px;\\n}\\n.tailwind .value,\\n.bootstrap4 .value {\\n    margin-top: 1px;\\n    height: 22px;\\n    width: 22px;\\n}\\n.tailwind.e-bigger .value {\\n    margin-top: 1px;\\n    height: 26px;\\n    width: 26px;\\n}\\n.material.e-bigger .name {\\n    padding: 2px 0 0 36px;\\n    bottom: 24px;\\n    width: 100%;\\n    position: relative;\\n}\\n.material.e-bigger .e-chips.e-mob-chip.e-chip-selected .name {\\n    left: 0px;\\n    width: 110px;\\n    position: relative;\\n}\\n.name {\\n    padding: 3px 20px;\\n    line-height: 1.2em;\\n}\\n.e-multi-select-wrapper .e-chips {\\n    max-width: 166px;\\n    overflow: hidden;\\n}\\n.e-multi-select-wrapper .e-chips {\\n    padding: 0 4px 0 0px\\n}\\n.e-multi-select-wrapper .e-chips.e-mob-chip.e-chip-selected {\\n    padding: 0 0 0 0px;\\n}\\n.bootstrap.e-bigger .e-chips.e-mob-chip.e-chip-selected .value {\\n    left: 0px;\\n}\\n.material.e-bigger .e-chips.e-mob-chip.e-chip-selected .name {\\n    left: 0px;\\n    width: 110px;\\n    position: relative;\\n}\\n.fabric .e-multi-select-wrapper .e-chips.e-mob-chip.e-chip-selected .e-chips-close.e-icon {\\n    left: 0px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/template/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/template/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/multi-select/template/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/multi-select/template/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"MultiSelectPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            fields: { value: 'Name', text: 'Name' },\n            watermark: 'Select Employees',\n            data: _dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"empList\"]\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/template/App.vue?vue&type=template&id=60c6a9c7&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/template/App.vue?vue&type=template&id=60c6a9c7& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('div',{staticStyle:{\"margin\":\"0px auto\",\"width\":\"64%\",\"padding-top\":\"40px\"},attrs:{\"id\":\"content\"}},[_c('h4',[_vm._v(\"Template\")]),_vm._v(\" \"),_c('ejs-multiselect',{attrs:{\"id\":\"multi-template\",\"dataSource\":_vm.data,\"fields\":_vm.fields,\"cssClass\":\"multiselect-template\",\"placeholder\":_vm.watermark,\"headerTemplate\":'hTemplate',\"itemTemplate\":'iTemplate',\"valueTemplate\":'vTemplate',\"mode\":\"Box\",\"popupHeight\":\"450px\"},scopedSlots:_vm._u([{key:\"hTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('div',{staticClass:\"header\"},[_c('span',[_vm._v(\"Photo\")]),_vm._v(\" \"),_c('span',{staticClass:\"info\"},[_vm._v(\"Employee Info\")])])]}},{key:\"iTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('div',[_c('img',{staticClass:\"empImage\",attrs:{\"src\":data.Eimg,\"alt\":\"employee\"}}),_c('div',{staticClass:\"ename\"},[_vm._v(\" \"+_vm._s(data.Name)+\" \")]),_c('div',{staticClass:\"job\"},[_vm._v(\" \"+_vm._s(data.Designation)+\" \")])])]}},{key:\"vTemplate\",fn:function(ref){\nvar data = ref.data;\nreturn [_c('div',{staticStyle:{\"width\":\"100%\",\"height\":\"100%\"}},[_c('img',{staticClass:\"value\",attrs:{\"src\":data.Eimg,\"height\":\"26px\",\"width\":\"26px\",\"alt\":\"employee\"}}),_c('div',{staticClass:\"name\"},[_vm._v(\" \"+_vm._s(data.Name)+\" \")])])]}}])})],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the template functionalities of the MultiSelect. Type a character in the MultiSelect element or click on this element to choose one or more items from the customized list.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The MultiSelect has been provided with several options to customize each list items, group title, selected value, header\\n    and footer elements.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"This sample uses the following list of templates in MultiSelect.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"ItemTemplate\")]),_vm._v(\" - To customize the list item's content.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"ValueTemplate\")]),_vm._v(\" - To customize the value element content that holds the selected item's text.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"HeaderTemplate\")]),_vm._v(\" - To customize the header element.\")])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/multi-select/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });