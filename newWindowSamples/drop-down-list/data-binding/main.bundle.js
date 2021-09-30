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
/******/ 		"drop-down-list/data-binding/main": 0
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
/******/ 	deferredModules.push(["./Samples/drop-down-list/data-binding/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/drop-down-list/data-binding/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/drop-down-list/data-binding/App.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_16199794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=16199794&scoped=true& */ \"./Samples/drop-down-list/data-binding/App.vue?vue&type=template&id=16199794&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/drop-down-list/data-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_16199794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css& */ \"./Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_16199794_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_16199794_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"16199794\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/drop-down-list/data-binding/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/data-binding/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/drop-down-list/data-binding/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/data-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16199794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16199794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16199794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16199794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_16199794_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/data-binding/App.vue?vue&type=template&id=16199794&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./Samples/drop-down-list/data-binding/App.vue?vue&type=template&id=16199794&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16199794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=16199794&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/data-binding/App.vue?vue&type=template&id=16199794&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16199794_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16199794_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/data-binding/dataSource.json":
/*!*************************************************************!*\
  !*** ./Samples/drop-down-list/data-binding/dataSource.json ***!
  \*************************************************************/
/*! exports provided: country, state, cities, sportsData, data, countries, vegetableData, socialMedia, employees, empList, sportsDataa, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"country\\\":[{\\\"CountryName\\\":\\\"Australia\\\",\\\"CountryId\\\":\\\"2\\\"},{\\\"CountryName\\\":\\\"United States\\\",\\\"CountryId\\\":\\\"1\\\"}],\\\"state\\\":[{\\\"StateName\\\":\\\"New York\\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"101\\\"},{\\\"StateName\\\":\\\"Queensland\\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"104\\\"},{\\\"StateName\\\":\\\"Tasmania \\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"105\\\"},{\\\"StateName\\\":\\\"Victoria\\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"106\\\"},{\\\"StateName\\\":\\\"Virginia \\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"102\\\"},{\\\"StateName\\\":\\\"Washington\\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"103\\\"}],\\\"cities\\\":[{\\\"CityName\\\":\\\"Aberdeen\\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":207},{\\\"CityName\\\":\\\"Alexandria\\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":204},{\\\"CityName\\\":\\\"Albany\\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":201},{\\\"CityName\\\":\\\"Beacon \\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":202},{\\\"CityName\\\":\\\"Brisbane \\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":211},{\\\"CityName\\\":\\\"Cairns\\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":212},{\\\"CityName\\\":\\\"Colville \\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":208},{\\\"CityName\\\":\\\"Devonport\\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":215},{\\\"CityName\\\":\\\"Emporia\\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":206},{\\\"CityName\\\":\\\"Geelong\\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":218},{\\\"CityName\\\":\\\"Hampton \\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":205},{\\\"CityName\\\":\\\"Healesville \\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":217},{\\\"CityName\\\":\\\"Hobart\\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":213},{\\\"CityName\\\":\\\"Launceston \\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":214},{\\\"CityName\\\":\\\"Lockport\\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":203},{\\\"CityName\\\":\\\"Melbourne\\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":216},{\\\"CityName\\\":\\\"Pasco\\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":209},{\\\"CityName\\\":\\\"Townsville\\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":210}],\\\"sportsData\\\":[{\\\"Id\\\":\\\"Game1\\\",\\\"Game\\\":\\\"American Football\\\"},{\\\"Id\\\":\\\"Game2\\\",\\\"Game\\\":\\\"Badminton\\\"},{\\\"Id\\\":\\\"Game3\\\",\\\"Game\\\":\\\"Basketball\\\"},{\\\"Id\\\":\\\"Game4\\\",\\\"Game\\\":\\\"Cricket\\\"},{\\\"Id\\\":\\\"Game5\\\",\\\"Game\\\":\\\"Football\\\"},{\\\"Id\\\":\\\"Game6\\\",\\\"Game\\\":\\\"Golf\\\"},{\\\"Id\\\":\\\"Game7\\\",\\\"Game\\\":\\\"Hockey\\\"},{\\\"Id\\\":\\\"Game8\\\",\\\"Game\\\":\\\"Rugby\\\"},{\\\"Id\\\":\\\"Game9\\\",\\\"Game\\\":\\\"Snooker\\\"},{\\\"Id\\\":\\\"Game10\\\",\\\"Game\\\":\\\"Tennis\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"socialMedia\\\":[{\\\"Class\\\":\\\"facebook\\\",\\\"SocialMedia\\\":\\\"Facebook\\\",\\\"Id\\\":\\\"media1\\\"},{\\\"Class\\\":\\\"google-plus\\\",\\\"SocialMedia\\\":\\\"Google Plus\\\",\\\"Id\\\":\\\"media2\\\"},{\\\"Class\\\":\\\"instagram\\\",\\\"SocialMedia\\\":\\\"Instagram\\\",\\\"Id\\\":\\\"media3\\\"},{\\\"Class\\\":\\\"linkedin\\\",\\\"SocialMedia\\\":\\\"LinkedIn\\\",\\\"Id\\\":\\\"media4\\\"},{\\\"Class\\\":\\\"skype\\\",\\\"SocialMedia\\\":\\\"Skype\\\",\\\"Id\\\":\\\"media5\\\"},{\\\"Class\\\":\\\"tumblr\\\",\\\"SocialMedia\\\":\\\"Tumblr\\\",\\\"Id\\\":\\\"media6\\\"},{\\\"Class\\\":\\\"twitter\\\",\\\"SocialMedia\\\":\\\"Twitter\\\",\\\"Id\\\":\\\"media7\\\"},{\\\"Class\\\":\\\"vimeo\\\",\\\"SocialMedia\\\":\\\"Vimeo\\\",\\\"Id\\\":\\\"media8\\\"},{\\\"Class\\\":\\\"whatsapp\\\",\\\"SocialMedia\\\":\\\"WhatsApp\\\",\\\"Id\\\":\\\"media9\\\"},{\\\"Class\\\":\\\"youtube\\\",\\\"SocialMedia\\\":\\\"YouTube\\\",\\\"Id\\\":\\\"media10\\\"}],\\\"employees\\\":[{\\\"Name\\\":\\\"Andrew\\\",\\\"Eimg\\\":\\\"7\\\"},{\\\"Name\\\":\\\"Anne\\\",\\\"Eimg\\\":\\\"1\\\"},{\\\"Name\\\":\\\"Janet\\\",\\\"Eimg\\\":\\\"3\\\"},{\\\"Name\\\":\\\"Laura\\\",\\\"Eimg\\\":\\\"2\\\"},{\\\"Name\\\":\\\"Michael\\\",\\\"Eimg\\\":\\\"9\\\"},{\\\"Name\\\":\\\"Nancy\\\",\\\"Eimg\\\":\\\"4\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Eimg\\\":\\\"8\\\"},{\\\"Name\\\":\\\"Steven\\\",\\\"Eimg\\\":\\\"10\\\"}],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}],\\\"sportsDataa\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"]}\");\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/dataSource.json?");

/***/ }),

/***/ "./Samples/drop-down-list/data-binding/main.js":
/*!*****************************************************!*\
  !*** ./Samples/drop-down-list/data-binding/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/drop-down-list/data-binding/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-panel-content[data-v-16199794] {\\n    padding: 0 10px 10px 0;\\n}\\n.content[data-v-16199794] {\\n    width: 43%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n    padding: 25px 0px;\\n}\\n.control-label[data-v-16199794] {\\n    padding: 24px 0px 0px 0px;\\n    font-size: 12px;\\n    opacity: 0.54;\\n}\\n.control-section.ddl-databinding[data-v-16199794],\\n.content-wrapper.ddl-data-binding[data-v-16199794] {\\n    min-height: 350px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-IKHAK3C3UM2TR2KCMXMHPALQCQWTEB42K7KFVFIANVX3ZI4TO55Q/Samples/drop-down-list/data-binding/App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,uBAAuB;CAC1B;AACD;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,kBAAkB;CACrB;AACD;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,cAAc;CACjB;AACD;;IAEI,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=16199794&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-panel-content[data-v-16199794] {\\n    padding: 0 10px 10px 0;\\n}\\n.content[data-v-16199794] {\\n    width: 43%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n    padding: 25px 0px;\\n}\\n.control-label[data-v-16199794] {\\n    padding: 24px 0px 0px 0px;\\n    font-size: 12px;\\n    opacity: 0.54;\\n}\\n.control-section.ddl-databinding[data-v-16199794],\\n.content-wrapper.ddl-data-binding[data-v-16199794] {\\n    min-height: 350px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/data-binding/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/drop-down-list/data-binding/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/drop-down-list/data-binding/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/drop-down-list/data-binding/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\n\nvar remoteData = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"DataManager\"]({\n    url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',\n    adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"WebApiAdaptor\"],\n    crossDomain: true\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            localFields: { text: 'Game', value: 'Id' },\n            localWaterMark: 'Select a game',\n            height: '200px',\n            sportsData: _dataSource_json__WEBPACK_IMPORTED_MODULE_4__[\"sportsData\"],\n            data: remoteData,\n            remoteFields: { text: 'FirstName', value: 'EmployeeID' },\n            query: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"Query\"]().select(['FirstName', 'EmployeeID']).take(10).requiresCount(),\n            remoteWaterMark: 'Select a name',\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/data-binding/App.vue?vue&type=template&id=16199794&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/drop-down-list/data-binding/App.vue?vue&type=template&id=16199794&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section ddl-databinding\" }, [\n      _c(\"div\", { staticClass: \"col-lg-9 ddl-data-binding\" }, [\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-lg-6\",\n            staticStyle: { margin: \"0 auto\", \"padding-top\": \"15px\" },\n            attrs: { id: \"local\" }\n          },\n          [\n            _c(\n              \"div\",\n              { staticStyle: { width: \"250px\", margin: \"0 auto\" } },\n              [\n                _c(\"h4\", [_vm._v(\" Local Data\")]),\n                _vm._v(\" \"),\n                _c(\"ejs-dropdownlist\", {\n                  attrs: {\n                    id: \"games\",\n                    dataSource: _vm.sportsData,\n                    fields: _vm.localFields,\n                    placeholder: _vm.localWaterMark,\n                    popupHeight: _vm.height\n                  }\n                })\n              ],\n              1\n            )\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-lg-6\",\n            staticStyle: { margin: \"0 auto\", \"padding-top\": \"15px\" },\n            attrs: { id: \"remote\" }\n          },\n          [\n            _c(\n              \"div\",\n              { staticStyle: { width: \"250px\", margin: \"0 auto\" } },\n              [\n                _c(\"h4\", [_vm._v(\"Remote Data\")]),\n                _vm._v(\" \"),\n                _c(\"ejs-dropdownlist\", {\n                  attrs: {\n                    id: \"customers\",\n                    dataSource: _vm.data,\n                    fields: _vm.remoteFields,\n                    query: _vm.query,\n                    placeholder: _vm.remoteWaterMark,\n                    sortOrder: \"Ascending\"\n                  }\n                })\n              ],\n              1\n            )\n          ]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the different data binding supports of the DropDownList. Click the DropDownList element and select an item from the suggestion list. At the very first time, when click on the remote data DropDownList,\\n        the loader icon will be shown until the remote request get the data from the server and display it.\\n        \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The DropDownList loads the data either from the local data sources, or remote data services that is is through the \"\n        ),\n        _c(\"code\", [_vm._v(\"dataSource\")]),\n        _vm._v(\" property. It supports the data type of \"),\n        _c(\"code\", [_vm._v(\"array\")]),\n        _vm._v(\" or \"),\n        _c(\"code\", [_vm._v(\"DataManager\")]),\n        _vm._v(\".\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The DataManager that act as an interface between service endpoint and DropDownList, will require the below minimal\\n        information to interact with the service endpoint properly.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"DataManager->url\")]),\n          _vm._v(\" - Defines the service endpoint to fetch data\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"DataManager->adaptor\")]),\n          _vm._v(\" - Defines the adaptor option. By default, \"),\n          _c(\"code\", [_vm._v(\"ODataAdaptor\")]),\n          _vm._v(\" is used for\\n            remote binding.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Adaptor is responsible for processing response and request from/to the service endpoint.\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"@syncfusion/ej2-data\")]),\n        _vm._v(\n          \" package provides some predefined adaptors that are designed to interact with the particular\\n        service endpoints. They are:\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"UrlAdaptor\")]),\n          _vm._v(\" - Use this to interact any remote services.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ODataAdaptor\")]),\n          _vm._v(\" - Use this to interact with OData endpoints.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ODataV4Adaptor\")]),\n          _vm._v(\" - Use this to interact with OData V4 endpoints.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"WebApiAdaptor\")]),\n          _vm._v(\n            \" - Use this to interact with Web API created under OData standards.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"WebMethodAdaptor\")]),\n          _vm._v(\" - Use this to interact with web methods.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, the local data is bound to a collection of sports data, and the remote data is bound to a collection of\\n        customer data as an instance of \"\n        ),\n        _c(\"code\", [_vm._v(\"DataManager\")]),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/data-binding/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });