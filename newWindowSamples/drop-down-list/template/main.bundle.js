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
/******/ 		"drop-down-list/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/drop-down-list/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/drop-down-list/template/App.vue":
/*!*************************************************!*\
  !*** ./Samples/drop-down-list/template/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6f3d2ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6f3d2ea8& */ \"./Samples/drop-down-list/template/App.vue?vue&type=template&id=6f3d2ea8&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/drop-down-list/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6f3d2ea8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6f3d2ea8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/drop-down-list/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/template/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/drop-down-list/template/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/template/App.vue?vue&type=template&id=6f3d2ea8&":
/*!********************************************************************************!*\
  !*** ./Samples/drop-down-list/template/App.vue?vue&type=template&id=6f3d2ea8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f3d2ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6f3d2ea8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/template/App.vue?vue&type=template&id=6f3d2ea8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f3d2ea8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f3d2ea8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?");

/***/ }),

/***/ "./Samples/drop-down-list/template/dataSource.json":
/*!*********************************************************!*\
  !*** ./Samples/drop-down-list/template/dataSource.json ***!
  \*********************************************************/
/*! exports provided: country, state, cities, sportsData, data, countries, vegetableData, socialMedia, employees, empList, sportsDataa, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"country\\\":[{\\\"CountryName\\\":\\\"Australia\\\",\\\"CountryId\\\":\\\"2\\\"},{\\\"CountryName\\\":\\\"United States\\\",\\\"CountryId\\\":\\\"1\\\"}],\\\"state\\\":[{\\\"StateName\\\":\\\"New York\\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"101\\\"},{\\\"StateName\\\":\\\"Queensland\\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"104\\\"},{\\\"StateName\\\":\\\"Tasmania \\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"105\\\"},{\\\"StateName\\\":\\\"Victoria\\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"106\\\"},{\\\"StateName\\\":\\\"Virginia \\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"102\\\"},{\\\"StateName\\\":\\\"Washington\\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"103\\\"}],\\\"cities\\\":[{\\\"CityName\\\":\\\"Aberdeen\\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":207},{\\\"CityName\\\":\\\"Alexandria\\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":204},{\\\"CityName\\\":\\\"Albany\\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":201},{\\\"CityName\\\":\\\"Beacon \\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":202},{\\\"CityName\\\":\\\"Brisbane \\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":211},{\\\"CityName\\\":\\\"Cairns\\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":212},{\\\"CityName\\\":\\\"Colville \\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":208},{\\\"CityName\\\":\\\"Devonport\\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":215},{\\\"CityName\\\":\\\"Emporia\\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":206},{\\\"CityName\\\":\\\"Geelong\\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":218},{\\\"CityName\\\":\\\"Hampton \\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":205},{\\\"CityName\\\":\\\"Healesville \\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":217},{\\\"CityName\\\":\\\"Hobart\\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":213},{\\\"CityName\\\":\\\"Launceston \\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":214},{\\\"CityName\\\":\\\"Lockport\\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":203},{\\\"CityName\\\":\\\"Melbourne\\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":216},{\\\"CityName\\\":\\\"Pasco\\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":209},{\\\"CityName\\\":\\\"Townsville\\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":210}],\\\"sportsData\\\":[{\\\"Id\\\":\\\"Game1\\\",\\\"Game\\\":\\\"American Football\\\"},{\\\"Id\\\":\\\"Game2\\\",\\\"Game\\\":\\\"Badminton\\\"},{\\\"Id\\\":\\\"Game3\\\",\\\"Game\\\":\\\"Basketball\\\"},{\\\"Id\\\":\\\"Game4\\\",\\\"Game\\\":\\\"Cricket\\\"},{\\\"Id\\\":\\\"Game5\\\",\\\"Game\\\":\\\"Football\\\"},{\\\"Id\\\":\\\"Game6\\\",\\\"Game\\\":\\\"Golf\\\"},{\\\"Id\\\":\\\"Game7\\\",\\\"Game\\\":\\\"Hockey\\\"},{\\\"Id\\\":\\\"Game8\\\",\\\"Game\\\":\\\"Rugby\\\"},{\\\"Id\\\":\\\"Game9\\\",\\\"Game\\\":\\\"Snooker\\\"},{\\\"Id\\\":\\\"Game10\\\",\\\"Game\\\":\\\"Tennis\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"socialMedia\\\":[{\\\"Class\\\":\\\"facebook\\\",\\\"SocialMedia\\\":\\\"Facebook\\\",\\\"Id\\\":\\\"media1\\\"},{\\\"Class\\\":\\\"google-plus\\\",\\\"SocialMedia\\\":\\\"Google Plus\\\",\\\"Id\\\":\\\"media2\\\"},{\\\"Class\\\":\\\"instagram\\\",\\\"SocialMedia\\\":\\\"Instagram\\\",\\\"Id\\\":\\\"media3\\\"},{\\\"Class\\\":\\\"linkedin\\\",\\\"SocialMedia\\\":\\\"LinkedIn\\\",\\\"Id\\\":\\\"media4\\\"},{\\\"Class\\\":\\\"skype\\\",\\\"SocialMedia\\\":\\\"Skype\\\",\\\"Id\\\":\\\"media5\\\"},{\\\"Class\\\":\\\"tumblr\\\",\\\"SocialMedia\\\":\\\"Tumblr\\\",\\\"Id\\\":\\\"media6\\\"},{\\\"Class\\\":\\\"twitter\\\",\\\"SocialMedia\\\":\\\"Twitter\\\",\\\"Id\\\":\\\"media7\\\"},{\\\"Class\\\":\\\"vimeo\\\",\\\"SocialMedia\\\":\\\"Vimeo\\\",\\\"Id\\\":\\\"media8\\\"},{\\\"Class\\\":\\\"whatsapp\\\",\\\"SocialMedia\\\":\\\"WhatsApp\\\",\\\"Id\\\":\\\"media9\\\"},{\\\"Class\\\":\\\"youtube\\\",\\\"SocialMedia\\\":\\\"YouTube\\\",\\\"Id\\\":\\\"media10\\\"}],\\\"employees\\\":[{\\\"Name\\\":\\\"Andrew\\\",\\\"Eimg\\\":\\\"7\\\"},{\\\"Name\\\":\\\"Anne\\\",\\\"Eimg\\\":\\\"1\\\"},{\\\"Name\\\":\\\"Janet\\\",\\\"Eimg\\\":\\\"3\\\"},{\\\"Name\\\":\\\"Laura\\\",\\\"Eimg\\\":\\\"2\\\"},{\\\"Name\\\":\\\"Michael\\\",\\\"Eimg\\\":\\\"9\\\"},{\\\"Name\\\":\\\"Nancy\\\",\\\"Eimg\\\":\\\"4\\\"},{\\\"Name\\\":\\\"Robert\\\",\\\"Eimg\\\":\\\"8\\\"},{\\\"Name\\\":\\\"Steven\\\",\\\"Eimg\\\":\\\"10\\\"}],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}],\\\"sportsDataa\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"]}\");\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/dataSource.json?");

/***/ }),

/***/ "./Samples/drop-down-list/template/main.js":
/*!*************************************************!*\
  !*** ./Samples/drop-down-list/template/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/drop-down-list/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.ddl-template .header {\\n    font-weight: 600;\\n    color: rgba(0, 0, 0, .54);\\n    height: 48px;\\n    padding: 15px 0 0 16px;\\n    font-size: 16px;\\n    background-color: #f5f5f5;\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\";\\n}\\n.fabric .ddl-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #0078d7;\\n    font-weight: 400;\\n}\\n.bootstrap .ddl-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #777;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 30px;\\n    height: 30px;\\n    padding: 0 0 0 24px;\\n}\\n.highcontrast .ddl-template .header {\\n    color: #fff;\\n    background-color: #000;\\n}\\n.e-bigger.bootstrap .ddl-template .header {\\n    line-height: 44px;\\n    height: 44px;\\n    font-size: 13px;\\n}\\n.bootstrap .ddl-template .info,\\n.e-bigger.bootstrap .ddl-template .info {\\n    margin-left: 25px;\\n}\\n.bootstrap .ddl-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -25px;\\n    margin-bottom: 20px;\\n}\\n.e-bigger.bootstrap .ddl-template .job {\\n    font-size: 15px;\\n    margin-top: -32px;\\n    margin-bottom: 17px;\\n}\\n.bootstrap .ddl-template .ename {\\n    font-size: 15px;\\n    margin-top: 20px;\\n    opacity: .87;\\n    padding: 3px 0 20px;\\n}\\n.e-bigger.bootstrap .ddl-template .ename {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n}\\n.bootstrap .ddl-template .empImage,\\n.e-bigger.bootstrap .ddl-template .empImage {\\n    margin: 0px 10px 0 20px;\\n}\\n.ddl-template .info {\\n    margin-left: 17px;\\n}\\n.ddl-template .ename {\\n    display: block !important;\\n    opacity: .87;\\n    font-size: 16px;\\n    margin-top: 8px;\\n}\\n.ddl-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -15px;\\n    margin-bottom: 7px;\\n}\\n.ddl-template .empImage {\\n    margin: 6px 16px;\\n    float: left;\\n    width: 50px;\\n    height: 50px;\\n}\\n.ddl-template .e-list-item * {\\n    display: block;\\n    text-indent: 0;\\n}\\n.e-bigger:not(.bootstrap) .ddl-template .e-dropdownbase .e-list-item {\\n    line-height: 42px;\\n    height: 80px;\\n}\\n.e-bigger:not(.bootstrap) .ddl-template.e-popup .empImage {\\n    margin: 10px 16px;\\n}\\n.bootstrap4 .ddl-template.e-popup .empImage {\\n    margin: 0px 16px;\\n}\\n.bootstrap4 .ddl-template.e-popup .job {\\n    margin-top: 0;\\n}\\n.e-bigger.bootstrap4 .ddl-template.e-popup .job {\\n    margin-top: -15px;\\n}\\n.bootstrap4 .ddl-template .header {\\n    color: #6c757d;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-W6DY5KIRE7QTQBLPMRMZTQ3B4ZFMMNI7ASUGAE7VKA2E4CCP7SZA/Samples/drop-down-list/template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,0BAA0B;IAC1B,oDAAoD;CACvD;AACD;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;IACZ,kEAAkE;IAClE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,uBAAuB;CAC1B;AACD;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;CACnB;AACD;;IAEI,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,oBAAoB;CACvB;AACD;IACI,gBAAgB;IAChB,qBAAqB;CACxB;AACD;;IAEI,wBAAwB;CAC3B;AACD;IACI,kBAAkB;CACrB;AACD;IACI,0BAA0B;IAC1B,aAAa;IACb,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,aAAa;CAChB;AACD;IACI,eAAe;IACf,eAAe;CAClB;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,eAAe;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.ddl-template .header {\\n    font-weight: 600;\\n    color: rgba(0, 0, 0, .54);\\n    height: 48px;\\n    padding: 15px 0 0 16px;\\n    font-size: 16px;\\n    background-color: #f5f5f5;\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\";\\n}\\n.fabric .ddl-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #0078d7;\\n    font-weight: 400;\\n}\\n.bootstrap .ddl-template .header {\\n    background-color: #fff;\\n    border-bottom: 1px solid #ccc;\\n    color: #777;\\n    font-family: \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", \\\"sans-serif\\\";\\n    font-weight: 400;\\n    font-size: 12px;\\n    line-height: 30px;\\n    height: 30px;\\n    padding: 0 0 0 24px;\\n}\\n.highcontrast .ddl-template .header {\\n    color: #fff;\\n    background-color: #000;\\n}\\n.e-bigger.bootstrap .ddl-template .header {\\n    line-height: 44px;\\n    height: 44px;\\n    font-size: 13px;\\n}\\n.bootstrap .ddl-template .info,\\n.e-bigger.bootstrap .ddl-template .info {\\n    margin-left: 25px;\\n}\\n.bootstrap .ddl-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -25px;\\n    margin-bottom: 20px;\\n}\\n.e-bigger.bootstrap .ddl-template .job {\\n    font-size: 15px;\\n    margin-top: -32px;\\n    margin-bottom: 17px;\\n}\\n.bootstrap .ddl-template .ename {\\n    font-size: 15px;\\n    margin-top: 20px;\\n    opacity: .87;\\n    padding: 3px 0 20px;\\n}\\n.e-bigger.bootstrap .ddl-template .ename {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n}\\n.bootstrap .ddl-template .empImage,\\n.e-bigger.bootstrap .ddl-template .empImage {\\n    margin: 0px 10px 0 20px;\\n}\\n.ddl-template .info {\\n    margin-left: 17px;\\n}\\n.ddl-template .ename {\\n    display: block !important;\\n    opacity: .87;\\n    font-size: 16px;\\n    margin-top: 8px;\\n}\\n.ddl-template .job {\\n    opacity: .54;\\n    font-size: 14px;\\n    margin-top: -15px;\\n    margin-bottom: 7px;\\n}\\n.ddl-template .empImage {\\n    margin: 6px 16px;\\n    float: left;\\n    width: 50px;\\n    height: 50px;\\n}\\n.ddl-template .e-list-item * {\\n    display: block;\\n    text-indent: 0;\\n}\\n.e-bigger:not(.bootstrap) .ddl-template .e-dropdownbase .e-list-item {\\n    line-height: 42px;\\n    height: 80px;\\n}\\n.e-bigger:not(.bootstrap) .ddl-template.e-popup .empImage {\\n    margin: 10px 16px;\\n}\\n.bootstrap4 .ddl-template.e-popup .empImage {\\n    margin: 0px 16px;\\n}\\n.bootstrap4 .ddl-template.e-popup .job {\\n    margin-top: 0;\\n}\\n.e-bigger.bootstrap4 .ddl-template.e-popup .job {\\n    margin-top: -15px;\\n}\\n.bootstrap4 .ddl-template .header {\\n    color: #6c757d;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/template/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/drop-down-list/template/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/drop-down-list/template/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/drop-down-list/template/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"DropDownListPlugin\"]);\n\nvar headerVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"headerTemplate\", {\n  template: '<div class=\"header\"> <span>Photo</span> <span class=\"info\">Employee Info</span></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\nvar itemVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate\", {\n  template: '<div><img class=\"empImage\" :src=\"data.Eimg\" alt=\"employee\"/>' +\n            '<div class=\"ename\"> {{data.Name}} </div><div class=\"job\"> {{data.Designation}} </div></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            fields: { value: 'Name' },\n            watermark: 'Select Employees',\n            hTemplate: function(e) {\n                return {\n                    template: headerVue\n                };\n            },\n            iTemplate: function(e) {\n                return {\n                    template: itemVue\n                };\n            },\n            data: _dataSource_json__WEBPACK_IMPORTED_MODULE_2__[\"empList\"]\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/drop-down-list/template/App.vue?vue&type=template&id=6f3d2ea8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/drop-down-list/template/App.vue?vue&type=template&id=6f3d2ea8& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            margin: \"0px auto\",\n            width: \"300px\",\n            \"padding-top\": \"40px\"\n          },\n          attrs: { id: \"content\" }\n        },\n        [\n          _c(\"ejs-dropdownlist\", {\n            attrs: {\n              id: \"multi-template\",\n              dataSource: _vm.data,\n              fields: _vm.fields,\n              cssClass: \"ddl-template\",\n              placeholder: _vm.watermark,\n              headerTemplate: _vm.hTemplate,\n              itemTemplate: _vm.iTemplate,\n              popupHeight: \"450px\"\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the template functionalities of the DropDownList. Click the DropDownList element and select an item from the customized list.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The DropDownList has been provided with several options to customize each list items, group title, selected value, header\\n    and footer elements.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"This sample uses the following list of templates in DropDownList\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ItemTemplate\")]),\n          _vm._v(\" - To customize the list item's content.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"ValueTemplate\")]),\n          _vm._v(\n            \" - To customize the value element content that holds the selected item's text.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"HeaderTemplate\")]),\n          _vm._v(\" - To customize the header element.\")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/drop-down-list/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });