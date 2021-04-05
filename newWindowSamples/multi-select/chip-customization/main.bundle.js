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
/******/ 		"multi-select/chip-customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/multi-select/chip-customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/multi-select/chip-customization/App.vue":
/*!*********************************************************!*\
  !*** ./Samples/multi-select/chip-customization/App.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0bee459f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0bee459f&scoped=true& */ \"./Samples/multi-select/chip-customization/App.vue?vue&type=template&id=0bee459f&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/multi-select/chip-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0bee459f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css& */ \"./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css&\");\n/* harmony import */ var _App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=1&lang=css& */ \"./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0bee459f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0bee459f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0bee459f\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/multi-select/chip-customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/chip-customization/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./Samples/multi-select/chip-customization/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0bee459f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0bee459f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0bee459f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0bee459f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0bee459f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************!*\
  !*** ./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=1&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/chip-customization/App.vue?vue&type=template&id=0bee459f&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./Samples/multi-select/chip-customization/App.vue?vue&type=template&id=0bee459f&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0bee459f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0bee459f&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=template&id=0bee459f&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0bee459f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0bee459f_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?");

/***/ }),

/***/ "./Samples/multi-select/chip-customization/dataSource.json":
/*!*****************************************************************!*\
  !*** ./Samples/multi-select/chip-customization/dataSource.json ***!
  \*****************************************************************/
/*! exports provided: countries, colorsData, data, vegetableData, sportsData, empList, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"colorsData\\\":[{\\\"Color\\\":\\\"Chocolate\\\",\\\"Code\\\":\\\"#75523C\\\"},{\\\"Color\\\":\\\"CadetBlue\\\",\\\"Code\\\":\\\"#3B8289\\\"},{\\\"Color\\\":\\\"DarkOrange\\\",\\\"Code\\\":\\\"#FF843D\\\"},{\\\"Color\\\":\\\"DarkRed\\\",\\\"Code\\\":\\\"#CA3832\\\"},{\\\"Color\\\":\\\"Fuchsia\\\",\\\"Code\\\":\\\"#D44FA3\\\"},{\\\"Color\\\":\\\"HotPink\\\",\\\"Code\\\":\\\"#F23F82\\\"},{\\\"Color\\\":\\\"Indigo\\\",\\\"Code\\\":\\\"#2F5D81\\\"},{\\\"Color\\\":\\\"LimeGreen\\\",\\\"Code\\\":\\\"#4CD242\\\"},{\\\"Color\\\":\\\"OrangeRed\\\",\\\"Code\\\":\\\"#FE2A00\\\"},{\\\"Color\\\":\\\"Tomato\\\",\\\"Code\\\":\\\"#FF745C\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"sportsData\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/dataSource.json?");

/***/ }),

/***/ "./Samples/multi-select/chip-customization/main.js":
/*!*********************************************************!*\
  !*** ./Samples/multi-select/chip-customization/main.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/multi-select/chip-customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#chipcustomization[data-v-0bee459f] {\\n    width: 100%;\\n}\\n#chipcustomization .chipcontent[data-v-0bee459f] {\\n    margin: 0 auto;\\n    width: 50%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-PWWSZZKUXJ43OD7GGSVN4KVEVGJCJGIV5LNJE64TR2MC4IG6GUIQ/Samples/multi-select/chip-customization/App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,YAAY;CACf;AACD;IACI,eAAe;IACf,WAAW;CACd\",\"file\":\"App.vue?vue&type=style&index=0&id=0bee459f&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#chipcustomization[data-v-0bee459f] {\\n    width: 100%;\\n}\\n#chipcustomization .chipcontent[data-v-0bee459f] {\\n    margin: 0 auto;\\n    width: 50%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips {\\n    opacity: 0.9;\\n}\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips:hover {\\n    opacity: 1;\\n}\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chips-close.e-icon::before,\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chipcontent,\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chipcontent:hover {\\n    color: #ffffff;\\n}\\n.multiselect-chip-custom .e-chips.chocolate,\\n.multiselect-chip-custom .e-chips.chocolate:hover {\\n    background-color: #75523C;\\n}\\n.multiselect-chip-custom .e-chips.darkorange,\\n.multiselect-chip-custom .e-chips.darkorange:hover {\\n    background-color: #FF843D;\\n}\\n.multiselect-chip-custom .e-chips.darkred,\\n.multiselect-chip-custom .e-chips.darkred:hover {\\n    background-color: #CA3832;\\n}\\n.multiselect-chip-custom .e-chips.fuchsia,\\n.multiselect-chip-custom .e-chips.fuchsia:hover {\\n    background-color: #D44FA3;\\n}\\n.multiselect-chip-custom .e-chips.cadetblue,\\n.multiselect-chip-custom .e-chips.cadetblue:hover {\\n    background-color: #3B8289;\\n}\\n.multiselect-chip-custom .e-chips.hotpink,\\n.multiselect-chip-custom .e-chips.hotpink:hover {\\n    background-color: #F23F82;\\n}\\n.multiselect-chip-custom .e-chips.indigo,\\n.multiselect-chip-custom .e-chips.indigo:hover {\\n    background-color: #2F5D81;\\n}\\n.multiselect-chip-custom .e-chips.limegreen,\\n.multiselect-chip-custom .e-chips.limegreen:hover {\\n    background-color: #4CD242;\\n}\\n.multiselect-chip-custom .e-chips.orangered,\\n.multiselect-chip-custom .e-chips.orangered:hover {\\n    background-color: #FE2A00;\\n}\\n.multiselect-chip-custom .e-chips.tomato,\\n.multiselect-chip-custom .e-chips.tomato:hover {\\n    background-color: #FF745C;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-PWWSZZKUXJ43OD7GGSVN4KVEVGJCJGIV5LNJE64TR2MC4IG6GUIQ/Samples/multi-select/chip-customization/App.vue?vue&type=style&index=1&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,aAAa;CAChB;AACD;IACI,WAAW;CACd;AACD;;;IAGI,eAAe;CAClB;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B;AACD;;IAEI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=1&lang=css&\",\"sourcesContent\":[\"\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips {\\n    opacity: 0.9;\\n}\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips:hover {\\n    opacity: 1;\\n}\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chips-close.e-icon::before,\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chipcontent,\\n.multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chipcontent:hover {\\n    color: #ffffff;\\n}\\n.multiselect-chip-custom .e-chips.chocolate,\\n.multiselect-chip-custom .e-chips.chocolate:hover {\\n    background-color: #75523C;\\n}\\n.multiselect-chip-custom .e-chips.darkorange,\\n.multiselect-chip-custom .e-chips.darkorange:hover {\\n    background-color: #FF843D;\\n}\\n.multiselect-chip-custom .e-chips.darkred,\\n.multiselect-chip-custom .e-chips.darkred:hover {\\n    background-color: #CA3832;\\n}\\n.multiselect-chip-custom .e-chips.fuchsia,\\n.multiselect-chip-custom .e-chips.fuchsia:hover {\\n    background-color: #D44FA3;\\n}\\n.multiselect-chip-custom .e-chips.cadetblue,\\n.multiselect-chip-custom .e-chips.cadetblue:hover {\\n    background-color: #3B8289;\\n}\\n.multiselect-chip-custom .e-chips.hotpink,\\n.multiselect-chip-custom .e-chips.hotpink:hover {\\n    background-color: #F23F82;\\n}\\n.multiselect-chip-custom .e-chips.indigo,\\n.multiselect-chip-custom .e-chips.indigo:hover {\\n    background-color: #2F5D81;\\n}\\n.multiselect-chip-custom .e-chips.limegreen,\\n.multiselect-chip-custom .e-chips.limegreen:hover {\\n    background-color: #4CD242;\\n}\\n.multiselect-chip-custom .e-chips.orangered,\\n.multiselect-chip-custom .e-chips.orangered:hover {\\n    background-color: #FE2A00;\\n}\\n.multiselect-chip-custom .e-chips.tomato,\\n.multiselect-chip-custom .e-chips.tomato:hover {\\n    background-color: #FF745C;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/chip-customization/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/multi-select/chip-customization/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/multi-select/chip-customization/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"MultiSelectPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            chipFields: { text: 'Color', value: 'Code' },\n            chipValue: [ '#2F5D81', '#D44FA3', '#4CD242', '#FE2A00', '#75523C'],\n            chipPlaceholder: 'Favorite Colors',\n            chipMode: 'Box',\n            colorsData: _dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"colorsData\"],\n        };\n    },\n    methods: {\n    onTagging: function(e) {\n         // set the current selected item text as class to chip element.\n            e.setClass(e.itemData.Color.toLowerCase());\n  }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/multi-select/chip-customization/App.vue?vue&type=template&id=0bee459f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/multi-select/chip-customization/App.vue?vue&type=template&id=0bee459f&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"content-wrapper\" }, [\n        _c(\"div\", { attrs: { id: \"chipcustomization\" } }, [\n          _c(\n            \"div\",\n            { staticClass: \"chipcontent\" },\n            [\n              _c(\"h4\", [_vm._v(\"Chip Customization\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-multiselect\", {\n                attrs: {\n                  id: \"countries\",\n                  dataSource: _vm.colorsData,\n                  placeholder: _vm.chipPlaceholder,\n                  fields: _vm.chipFields,\n                  cssClass: \"multiselect-chip-custom\",\n                  mode: _vm.chipMode,\n                  value: _vm.chipValue,\n                  tagging: _vm.onTagging\n                }\n              })\n            ],\n            1\n          )\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the customization of selected chip element in the MultiSelect. Type a character in the MultiSelect\\n        element or click on the element to choose one or more items from the list.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The MultiSelect allows the user to customize the selected chip element through the \"\n        ),\n        _c(\"code\", [_vm._v(\"tagging\")]),\n        _vm._v(\n          \" event. In that\\n        event, you can set the custom classes to chip element via the event argument of the \"\n        ),\n        _c(\"code\", [_vm._v(\"setClass\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates how to use the favorite colors of data and set the favorite color text as custom class through\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"tagging\")]),\n        _vm._v(\" event argument of the \"),\n        _c(\"code\", [_vm._v(\"setClass\")]),\n        _vm._v(\" method.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/multi-select/chip-customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });