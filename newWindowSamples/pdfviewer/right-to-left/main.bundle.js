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
/******/ 		"pdfviewer/right-to-left/main": 0
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
/******/ 	deferredModules.push(["./Samples/pdfviewer/right-to-left/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pdfviewer/right-to-left/App.vue":
/*!*************************************************!*\
  !*** ./Samples/pdfviewer/right-to-left/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4613cd6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4613cd6a& */ \"./Samples/pdfviewer/right-to-left/App.vue?vue&type=template&id=4613cd6a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/pdfviewer/right-to-left/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4613cd6a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4613cd6a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pdfviewer/right-to-left/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/right-to-left/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/pdfviewer/right-to-left/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/right-to-left/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/right-to-left/App.vue?vue&type=template&id=4613cd6a&":
/*!********************************************************************************!*\
  !*** ./Samples/pdfviewer/right-to-left/App.vue?vue&type=template&id=4613cd6a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4613cd6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4613cd6a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/right-to-left/App.vue?vue&type=template&id=4613cd6a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4613cd6a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4613cd6a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/right-to-left/main.js":
/*!*************************************************!*\
  !*** ./Samples/pdfviewer/right-to-left/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdfviewer/right-to-left/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#pdfviewer {\\n\\theight: 640px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/dfviewer-vue-samples_master-QELPG6NNPJAMGGWGSIU4GOYYRF3AG4SNNQDARZQQZVHYONIX77SQ/Samples/pdfviewer/right-to-left/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;CACC,cAAc;CACd\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#pdfviewer {\\n\\theight: 640px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/right-to-left/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/pdfviewer/right-to-left/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pdfviewer */ \"./node_modules/@syncfusion/ej2-vue-pdfviewer/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"PdfViewerPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n\t\t\tserviceUrl:\"https://services.syncfusion.com/vue/production/api/pdfviewer\",\n\t\t\tdocumentPath:\"RTLText.pdf\"\t\t\t\n        }\n    },\n\tprovide: {\n      PdfViewer: [_syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Magnification\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"LinkAnnotation\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"BookmarkView\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"ThumbnailView\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Print\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"TextSelection\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"TextSearch\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Annotation\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"FormFields\"]]\n    }\t\n}));\n//PDF Viewer Arabic Sample Locale\n_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"L10n\"].load({\n    'ar-AE': {\n        'PdfViewer' : {\n            'PdfViewer': 'قوات الدفاع الشعبي المشاهد',\n            'Cancel' : 'إلغاء',\n            'Download file' : 'تحميل الملف',\n            'Download': 'تحميل',\n            'Enter Password' : 'هذا المستند محمي بكلمة مرور. يرجى إدخال كلمة مرور.',\n            'File Corrupted' : 'ملف تالف',\n            'File Corrupted Content' : 'الملف تالف ولا يمكن فتحه.',\n            'Fit Page' : 'لائق بدنيا الصفحة',\n            'Fit Width' : 'لائق بدنيا عرض',\n            'Automatic' : 'تلقائي',\n            'Go To First Page' : 'عرض الصفحة الأولى',\n            'Invalid Password' : 'كلمة سر خاطئة. حاول مرة اخرى.',\n            'Next Page' : 'عرض الصفحة التالية',\n            'OK': 'حسنا',\n            'Open' : 'فتح الملف',\n            'Page Number' : 'رقم الصفحة الحالية',\n            'Previous Page' : 'عرض الصفحة السابقة',\n            'Go To Last Page' : 'عرض الصفحة الأخيرة',\n            'Zoom' : 'تكبير',\n            'Zoom In' : 'تكبير في',\n            'Zoom Out' : 'تكبير خارج',\n            'Page Thumbnails': 'مصغرات الصفحة',\n            'Bookmarks': 'المرجعية',\n            'Print' : 'اطبع الملف',\n            'Password Protected' : 'كلمة المرور مطلوبة',\n            'Copy': 'نسخ',\n            'Text Selection': 'أداة اختيار النص',\n            'Panning': 'وضع عموم',\n            'Text Search': 'بحث عن نص',\n            'Find in document': 'ابحث في المستند',\n            'Match case': 'حالة مباراة',\n            'Apply': 'تطبيق',\n            'GoToPage': 'انتقل إلى صفحة',\n             // tslint:disable-next-line:max-line-length\n            'No matches': 'انتهى العارض من البحث في المستند. لم يتم العثور على مزيد من التطابقات',\n            'No Text Found': 'لم يتم العثور على نص',\n            // tslint:disable-next-line:max-line-length\n            'Server error': 'خدمة الانترنت لا يستمع. يعتمد قوات الدفاع الشعبي المشاهد على خدمة الويب لجميع ميزاته. يرجى بدء خدمة الويب للمتابعة.',\n\t\t\t'Undo' : 'فك',\n            'Redo' : 'فعل ثانية',\n\t\t\t'Annotation': 'إضافة أو تعديل التعليقات التوضيحية',\n\t\t\t'Highlight': 'تسليط الضوء على النص',\n\t\t\t'Underline': 'تسطير النص',\n\t\t\t'Strikethrough': 'نص يتوسطه خط',\n\t\t\t'Delete': 'حذف التعليق التوضيحي',\n\t\t\t'Opacity': 'غموض',\n\t\t\t'Color edit': 'غير اللون',\n\t\t\t'Opacity edit': 'تغيير التعتيم',\n\t\t\t'Highlight context': 'تسليط الضوء',\n\t\t\t'Underline context': 'أكد',\n\t\t\t'Strikethrough context': 'يتوسطه',\n\t\t\t'Open text': 'افتح',\n\t\t\t'First text': 'الصفحة الأولى',\n\t\t\t'Previous text': 'الصفحة السابقة',\n\t\t\t'Next text': 'الصفحة التالية',\n\t\t\t'Last text': 'آخر صفحة',\n\t\t\t'Zoom in text': 'تكبير',\n\t\t\t'Zoom out text': 'تصغير',\n\t\t\t'Selection text': 'اختيار',\n\t\t\t'Pan text': 'مقلاة',\n\t\t\t'Print text': 'طباعة',\n\t\t\t'Search text': 'بحث',\n\t\t\t'Annotation Edit text': 'تحرير التعليق التوضيحي',\n            'Line Thickness': 'سمك الخط',\n            'Line Properties': 'خط الخصائص',\n            'Start Arrow': 'ابدأ السهم',\n            'End Arrow': 'نهاية السهم',\n            'Line Style': 'أسلوب الخط',\n            'Fill Color': 'ملء اللون',\n            'Line Color': ' الخط اللون',\n            'None': 'لا شيء',\n            'Open Arrow': 'افتح',\n            'Closed Arrow': 'مغلق',\n            'Round Arrow': 'مستدير',\n            'Square Arrow': 'مربع',\n            'Diamond Arrow': 'الماس',\n            'Cut': 'يقطع',\n            'Paste': 'معجون',\n            'Delete Context': 'حذف',\n            'Properties': 'الخصائص',\n            'Add Stamp': 'إضافة الطوابع',\n            'Add Shapes': 'أضف الأشكال',\n            'Stroke edit': 'تغيير لون السكتة الدماغية',\n            'Change thickness': 'تغيير سمك الحدود',\n            'Add line': 'إضافة خط',\n            'Add arrow': 'سهم إضافة',\n            'Add rectangle': 'أضف مستطيل',\n            'Add circle': 'إضافة دائرة',\n            'Add polygon': 'أضف مضلع',\n            'Add Comments': 'أضف تعليقات',\n            'Comments': 'تعليقات',\n            'No Comments Yet': 'لا توجد تعليقات حتى الآن',\n            'Accepted': 'وافقت',\n            'Completed': 'منجز',\n            'Cancelled': 'ألغيت',\n            'Rejected': 'مرفوض',\n            'Leader Length': 'زعيم الطول',\n            'Scale Ratio': 'نسبة مقياس',\n            'Calibrate': 'عاير',\n            'Calibrate Distance': 'معايرة المسافة',\n            'Calibrate Perimeter': 'معايرة محيط',\n            'Calibrate Area': 'عاير منطقة',\n            'Calibrate Radius': 'معايرة نصف القطر',\n            'Calibrate Volume': 'معايرة الحجم',\n            'Depth': 'عمق',\n            'Closed': 'مغلق',\n            'Round': 'مستدير',\n            'Square': 'ميدان',\n            'Diamond': 'الماس',\n            'Edit': 'تصحيح',\n            'Comment': 'تعليقات',\n            'Comment Panel': 'لوحة التعليقات',\n            'Set Status': 'تعيين الحالة',\n            'Post': 'بريد',\n            'Page': 'صفحة',\n            'Add a comment': 'أضف تعليق',\n            'Add a reply': 'أضف رد',\n            'Import Annotations': 'استيراد التعليقات التوضيحية',\n            'Export Annotations': 'شروح التصدير',\n            'Add': 'أضف',\n            'Clear': 'واضح',\n            'Bold': 'بالخط العريض',\n            'Italic': 'مائل',\n            'Strikethroughs': 'يتوسطه',\n            'Underlines': 'تحت الخط',\n            'Superscript': 'حرف فوقي',\n            'Subscript': 'الفرعية النصي',\n            'Align left': 'محاذاة اليسار',\n            'Align right': 'محاذاة اليمين',\n            'Center': 'مركز',\n            'Justify': 'برر',\n            'Font color': 'لون الخط',\n            'Text Align': 'محاذاة النص',\n            'Text Properties': 'نوع الخط',\n            'Draw Signature': 'ارسم التوقيع',\n            'Create': 'خلق',\n            'Font family': 'خط العائلة',\n            'Font size': 'حجم الخط',\n            'Free Text': 'نص حر',\n            'Import Failed': 'نوع ملف سلمان أو اسم الملف غير صالح ؛ يرجى تحديد ملف سلمانصالح',\n            'File not found': 'لم يتم العثور على ملف سلمان المستورد في الموقع المطلوب',\n            'Export Failed': 'شل إجراء تصدير التعليقات التوضيحية ؛ يرجى التأكد من إضافة التعليقات التوضيحية بشكل صحيح'\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/right-to-left/App.vue?vue&type=template&id=4613cd6a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pdfviewer/right-to-left/App.vue?vue&type=template&id=4613cd6a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\"ejs-pdfviewer\", {\n          attrs: {\n            id: \"pdfviewer\",\n            serviceUrl: _vm.serviceUrl,\n            documentPath: _vm.documentPath,\n            enableRtl: true,\n            locale: \"ar-AE\"\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"RTL provides an option to switch the text direction and layout of the PDF Viewer from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL PDF Viewer, set the enableRtl to true.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n   In this example, you can see PDF Viewer right-to-left and the locale set in arabic[locale value is ar-AE]\\n   \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n   By default, locale value is en-US. If you want to change the en-US culture to a different culture, you have to change the locale accordingly.\\n   \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n   More information on the PDF Viewer features can be found in this\\n   \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/\"\n            }\n          },\n          [_vm._v(\"\\n   documentation section\")]\n        ),\n        _vm._v(\".\\n   \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/right-to-left/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });