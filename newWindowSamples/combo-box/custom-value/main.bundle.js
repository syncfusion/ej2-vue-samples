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
/******/ 		"combo-box/custom-value/main": 0
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
/******/ 	deferredModules.push(["./Samples/combo-box/custom-value/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/combo-box/custom-value/App.vue":
/*!************************************************!*\
  !*** ./Samples/combo-box/custom-value/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_68f4939e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=68f4939e& */ \"./Samples/combo-box/custom-value/App.vue?vue&type=template&id=68f4939e&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/combo-box/custom-value/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_68f4939e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_68f4939e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/combo-box/custom-value/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/App.vue?");

/***/ }),

/***/ "./Samples/combo-box/custom-value/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/combo-box/custom-value/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/combo-box/custom-value/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/App.vue?");

/***/ }),

/***/ "./Samples/combo-box/custom-value/App.vue?vue&type=template&id=68f4939e&":
/*!*******************************************************************************!*\
  !*** ./Samples/combo-box/custom-value/App.vue?vue&type=template&id=68f4939e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_68f4939e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=68f4939e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/combo-box/custom-value/App.vue?vue&type=template&id=68f4939e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_68f4939e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_68f4939e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/App.vue?");

/***/ }),

/***/ "./Samples/combo-box/custom-value/dataSource.json":
/*!********************************************************!*\
  !*** ./Samples/combo-box/custom-value/dataSource.json ***!
  \********************************************************/
/*! exports provided: country, state, cities, countries, sportsData, data, vegetableData, socialMedia, empList, sportsDataa, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"country\\\":[{\\\"CountryName\\\":\\\"Australia\\\",\\\"CountryId\\\":\\\"2\\\"},{\\\"CountryName\\\":\\\"United States\\\",\\\"CountryId\\\":\\\"1\\\"}],\\\"state\\\":[{\\\"StateName\\\":\\\"New York\\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"101\\\"},{\\\"StateName\\\":\\\"Queensland\\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"104\\\"},{\\\"StateName\\\":\\\"Tasmania \\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"105\\\"},{\\\"StateName\\\":\\\"Victoria\\\",\\\"CountryId\\\":\\\"2\\\",\\\"StateId\\\":\\\"106\\\"},{\\\"StateName\\\":\\\"Virginia \\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"102\\\"},{\\\"StateName\\\":\\\"Washington\\\",\\\"CountryId\\\":\\\"1\\\",\\\"StateId\\\":\\\"103\\\"}],\\\"cities\\\":[{\\\"CityName\\\":\\\"Aberdeen\\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":207},{\\\"CityName\\\":\\\"Alexandria\\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":204},{\\\"CityName\\\":\\\"Albany\\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":201},{\\\"CityName\\\":\\\"Beacon \\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":202},{\\\"CityName\\\":\\\"Brisbane \\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":211},{\\\"CityName\\\":\\\"Cairns\\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":212},{\\\"CityName\\\":\\\"Colville \\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":208},{\\\"CityName\\\":\\\"Devonport\\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":215},{\\\"CityName\\\":\\\"Emporia\\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":206},{\\\"CityName\\\":\\\"Geelong\\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":218},{\\\"CityName\\\":\\\"Hampton \\\",\\\"StateId\\\":\\\"102\\\",\\\"CityId\\\":205},{\\\"CityName\\\":\\\"Healesville \\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":217},{\\\"CityName\\\":\\\"Hobart\\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":213},{\\\"CityName\\\":\\\"Launceston \\\",\\\"StateId\\\":\\\"105\\\",\\\"CityId\\\":214},{\\\"CityName\\\":\\\"Lockport\\\",\\\"StateId\\\":\\\"101\\\",\\\"CityId\\\":203},{\\\"CityName\\\":\\\"Melbourne\\\",\\\"StateId\\\":\\\"106\\\",\\\"CityId\\\":216},{\\\"CityName\\\":\\\"Pasco\\\",\\\"StateId\\\":\\\"103\\\",\\\"CityId\\\":209},{\\\"CityName\\\":\\\"Townsville\\\",\\\"StateId\\\":\\\"104\\\",\\\"CityId\\\":210}],\\\"countries\\\":[{\\\"Name\\\":\\\"Australia\\\",\\\"Code\\\":\\\"AU\\\"},{\\\"Name\\\":\\\"Bermuda\\\",\\\"Code\\\":\\\"BM\\\"},{\\\"Name\\\":\\\"Canada\\\",\\\"Code\\\":\\\"CA\\\"},{\\\"Name\\\":\\\"Cameroon\\\",\\\"Code\\\":\\\"CM\\\"},{\\\"Name\\\":\\\"Denmark\\\",\\\"Code\\\":\\\"DK\\\"},{\\\"Name\\\":\\\"France\\\",\\\"Code\\\":\\\"FR\\\"},{\\\"Name\\\":\\\"Finland\\\",\\\"Code\\\":\\\"FI\\\"},{\\\"Name\\\":\\\"Germany\\\",\\\"Code\\\":\\\"DE\\\"},{\\\"Name\\\":\\\"Greenland\\\",\\\"Code\\\":\\\"GL\\\"},{\\\"Name\\\":\\\"Hong Kong\\\",\\\"Code\\\":\\\"HK\\\"},{\\\"Name\\\":\\\"India\\\",\\\"Code\\\":\\\"IN\\\"},{\\\"Name\\\":\\\"Italy\\\",\\\"Code\\\":\\\"IT\\\"},{\\\"Name\\\":\\\"Japan\\\",\\\"Code\\\":\\\"JP\\\"},{\\\"Name\\\":\\\"Mexico\\\",\\\"Code\\\":\\\"MX\\\"},{\\\"Name\\\":\\\"Norway\\\",\\\"Code\\\":\\\"NO\\\"},{\\\"Name\\\":\\\"Poland\\\",\\\"Code\\\":\\\"PL\\\"},{\\\"Name\\\":\\\"Switzerland\\\",\\\"Code\\\":\\\"CH\\\"},{\\\"Name\\\":\\\"United Kingdom\\\",\\\"Code\\\":\\\"GB\\\"},{\\\"Name\\\":\\\"United States\\\",\\\"Code\\\":\\\"US\\\"}],\\\"sportsData\\\":[{\\\"Id\\\":\\\"Game1\\\",\\\"Game\\\":\\\"American Football\\\"},{\\\"Id\\\":\\\"Game2\\\",\\\"Game\\\":\\\"Badminton\\\"},{\\\"Id\\\":\\\"Game3\\\",\\\"Game\\\":\\\"Basketball\\\"},{\\\"Id\\\":\\\"Game4\\\",\\\"Game\\\":\\\"Cricket\\\"},{\\\"Id\\\":\\\"Game5\\\",\\\"Game\\\":\\\"Football\\\"},{\\\"Id\\\":\\\"Game6\\\",\\\"Game\\\":\\\"Golf\\\"},{\\\"Id\\\":\\\"Game7\\\",\\\"Game\\\":\\\"Hockey\\\"},{\\\"Id\\\":\\\"Game8\\\",\\\"Game\\\":\\\"Rugby\\\"},{\\\"Id\\\":\\\"Game9\\\",\\\"Game\\\":\\\"Snooker\\\"},{\\\"Id\\\":\\\"Game10\\\",\\\"Game\\\":\\\"Tennis\\\"}],\\\"data\\\":[\\\"Águilas\\\",\\\"Ajedrez\\\",\\\"Ala Delta\\\",\\\"Álbumes de Música\\\",\\\"Alusivos\\\",\\\"Análisis de Escritura a Mano\\\",\\\"Dyarbakır\\\",\\\"Derepazarı \\\",\\\"Gülümsemek \\\",\\\"Teşekkürler\\\",\\\"Güle güle.\\\",\\\"Gülhatmi\\\",\\\"Gülünç\\\"],\\\"vegetableData\\\":[{\\\"Vegetable\\\":\\\"Cabbage\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item1\\\"},{\\\"Vegetable\\\":\\\"Chickpea\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item2\\\"},{\\\"Vegetable\\\":\\\"Garlic\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item3\\\"},{\\\"Vegetable\\\":\\\"Green bean\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item4\\\"},{\\\"Vegetable\\\":\\\"Horse gram\\\",\\\"Category\\\":\\\"Beans\\\",\\\"Id\\\":\\\"item5\\\"},{\\\"Vegetable\\\":\\\"Nopal\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item6\\\"},{\\\"Vegetable\\\":\\\"Onion\\\",\\\"Category\\\":\\\"Bulb and Stem\\\",\\\"Id\\\":\\\"item7\\\"},{\\\"Vegetable\\\":\\\"Pumpkins\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item8\\\"},{\\\"Vegetable\\\":\\\"Spinach\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item9\\\"},{\\\"Vegetable\\\":\\\"Wheat grass\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item10\\\"},{\\\"Vegetable\\\":\\\"Yarrow\\\",\\\"Category\\\":\\\"Leafy and Salad\\\",\\\"Id\\\":\\\"item11\\\"}],\\\"socialMedia\\\":[{\\\"Class\\\":\\\"facebook\\\",\\\"SocialMedia\\\":\\\"Facebook\\\",\\\"Id\\\":\\\"media1\\\"},{\\\"Class\\\":\\\"google-plus\\\",\\\"SocialMedia\\\":\\\"Google Plus\\\",\\\"Id\\\":\\\"media2\\\"},{\\\"Class\\\":\\\"instagram\\\",\\\"SocialMedia\\\":\\\"Instagram\\\",\\\"Id\\\":\\\"media3\\\"},{\\\"Class\\\":\\\"linkedin\\\",\\\"SocialMedia\\\":\\\"LinkedIn\\\",\\\"Id\\\":\\\"media4\\\"},{\\\"Class\\\":\\\"skype\\\",\\\"SocialMedia\\\":\\\"Skype\\\",\\\"Id\\\":\\\"media5\\\"},{\\\"Class\\\":\\\"tumblr\\\",\\\"SocialMedia\\\":\\\"Tumblr\\\",\\\"Id\\\":\\\"media6\\\"},{\\\"Class\\\":\\\"twitter\\\",\\\"SocialMedia\\\":\\\"Twitter\\\",\\\"Id\\\":\\\"media7\\\"},{\\\"Class\\\":\\\"vimeo\\\",\\\"SocialMedia\\\":\\\"Vimeo\\\",\\\"Id\\\":\\\"media8\\\"},{\\\"Class\\\":\\\"whatsapp\\\",\\\"SocialMedia\\\":\\\"WhatsApp\\\",\\\"Id\\\":\\\"media9\\\"},{\\\"Class\\\":\\\"youtube\\\",\\\"SocialMedia\\\":\\\"YouTube\\\",\\\"Id\\\":\\\"media10\\\"}],\\\"empList\\\":[{\\\"Name\\\":\\\"Andrew Fuller\\\",\\\"Eimg\\\":\\\"styles/images/Employees/7.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Anne Dodsworth\\\",\\\"Eimg\\\":\\\"styles/images/Employees/1.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Janet Leverling\\\",\\\"Eimg\\\":\\\"styles/images/Employees/3.png\\\",\\\"Designation\\\":\\\"HR\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Laura Callahan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/2.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Margaret Peacock\\\",\\\"Eimg\\\":\\\"styles/images/Employees/6.png\\\",\\\"Designation\\\":\\\"Developer\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Michael Suyama\\\",\\\"Eimg\\\":\\\"styles/images/Employees/9.png\\\",\\\"Designation\\\":\\\"Team Lead\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Nancy Davolio\\\",\\\"Eimg\\\":\\\"styles/images/Employees/4.png\\\",\\\"Designation\\\":\\\"Product Manager\\\",\\\"Country\\\":\\\"USA\\\"},{\\\"Name\\\":\\\"Robert King\\\",\\\"Eimg\\\":\\\"styles/images/Employees/8.png\\\",\\\"Designation\\\":\\\"Developer \\\",\\\"Country\\\":\\\"England\\\"},{\\\"Name\\\":\\\"Steven Buchanan\\\",\\\"Eimg\\\":\\\"styles/images/Employees/10.png\\\",\\\"Designation\\\":\\\"CEO\\\",\\\"Country\\\":\\\"England\\\"}],\\\"sportsDataa\\\":[\\\"Badminton\\\",\\\"Basketball\\\",\\\"Cricket\\\",\\\"Football\\\",\\\"Golf\\\",\\\"Gymnastics\\\",\\\"Hockey\\\",\\\"Rugby\\\",\\\"Snooker\\\",\\\"Tennis\\\"]}\");\n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/dataSource.json?");

/***/ }),

/***/ "./Samples/combo-box/custom-value/main.js":
/*!************************************************!*\
  !*** ./Samples/combo-box/custom-value/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/combo-box/custom-value/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/combo-box/custom-value/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/combo-box/custom-value/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _dataSource_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataSource.json */ \"./Samples/combo-box/custom-value/dataSource.json\");\nvar _dataSource_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataSource.json */ \"./Samples/combo-box/custom-value/dataSource.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"ComboBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n\nvar noTemplateVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"noRecordsTemplate\", {\n  template: '<div id=\"nodata\"> No matched item, do you want to add it as new item in list? <ejs-button v-on:click.native=\"onclick\">Add New Item</ejs-button></div>',\n  data() {\n    return {\n      data: {},\n      customValue: '',\n      newItem: ''\n    };\n  },\n  methods: {\n        onclick: function() {\n            // get the typed characters\n            var x=document.getElementById(\"country\").ej2_instances[0];\n            this.customValue = x.element.value;\n            // make new object based on typed characters\n            this.newItem = {'Name': this.customValue, 'Code': this.customValue };\n            // new object added to data source.\n            x.dataSource.push(this.newItem);\n            // close the popup element.\n            x.hidePopup();\n            // pass new object to addItem method.\n            x.addItem(this.newItem);\n            // select the newly added item.\n            x.value = this.customValue;\n        }\n }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            data: _dataSource_json__WEBPACK_IMPORTED_MODULE_4__[\"countries\"],\n            fields: {text: 'Name', value:'Code'},\n            height: '220px',\n            waterMark: 'Select a country',\n            query: '',\n            nTemplate: function(e) {\n                return {\n                    template: noTemplateVue\n                };\n            },\n            allowFiltering: true,\n        };\n    },\n    methods: {\n        onFiltering: function(e) {\n            this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"Query\"]();\n            // frame the query based on search string with filter type.\n            this.query = (e.text !== '') ? this.query.where('Name', 'startswith', e.text, true) : this.query;\n            // pass the filter data source, filter query to updateData method.\n            e.updateData(this.data, this.query);\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/combo-box/custom-value/App.vue?vue&type=template&id=68f4939e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/combo-box/custom-value/App.vue?vue&type=template&id=68f4939e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            margin: \"0px auto\",\n            width: \"300px\",\n            \"padding-top\": \"40px\"\n          },\n          attrs: { id: \"content\" }\n        },\n        [\n          _c(\"ejs-combobox\", {\n            ref: \"countryObj\",\n            attrs: {\n              id: \"country\",\n              popupHeight: _vm.height,\n              filtering: _vm.onFiltering,\n              allowFiltering: _vm.allowFiltering,\n              noRecordsTemplate: _vm.nTemplate,\n              fields: _vm.fields,\n              dataSource: _vm.data,\n              placeholder: _vm.waterMark\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the custom value functionalities of the ComboBox. When the typed character(s) is not present in the list, a button will be shown in the popup list.\\n        By clicking on this button, the custom value character is added in the existing list as a new item.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"The ComboBox allows the user to give input as \"),\n        _c(\"code\", [_vm._v(\"custom value\")]),\n        _vm._v(\n          \" which is not required to\\n        present in the predefined set of values. By default, this support is enabled by \"\n        ),\n        _c(\"code\", [_vm._v(\"allowCustom\")]),\n        _vm._v(\n          \"\\n        property. In this case, both text field and value field are considered as same. The custom value will be\\n        sent to post back handler when a form is about to be submitted.\"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/combo-box/custom-value/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });