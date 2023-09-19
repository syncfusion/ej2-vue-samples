/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/pdfviewer/custom-toolbar/main.js":
/*!**************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdfviewer/custom-toolbar/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n/* custom code start*/\\n#pdfviewer {\\n    height: 640px;\\n}\\n#magnificationToolbar {\\n    background: transparent;\\n    height: auto;\\n    min-height: 56px;\\n    width: auto;\\n    border: none;\\n    position: absolute;\\n    z-index: 900;\\n    top: calc(100% - 140px);\\n    left: calc(100% - 150px);\\n    transform: rotate(90deg);\\n}\\ndiv#magnificationToolbar.e-toolbar .e-toolbar-items {\\n    background: transparent;\\n    padding: 2px 3px 2px 2px;\\n}\\n#magnificationToolbar.e-toolbar .e-tbar-btn {\\n    border-radius: 50%;\\n    min-height: 30px;\\n    min-width: 30px;\\n    border: 1px solid #c8c8c8;\\n}\\n#customToolbar {\\n    top: 20px;\\n    z-index: 900;\\n}\\n.e-bookmark-popup {\\n    height: 300px;\\n    max-width: 300px;\\n}\\n.e-text-search-popup {\\n    height: 104px;\\n    max-width: 348px;\\n}\\n.e-custom-search-input {\\n    width: 234px;\\n}\\n.e-text-search-popup .e-footer-content,\\n.e-bookmark-popup .e-footer-content {\\n    padding: 0;\\n    height: 0;\\n}\\n.search-button,\\n.search-button:disabled,\\n.search-button:focus,\\n.search-button:hover {\\n    background: transparent;\\n    box-shadow: none;\\n}\\n#popup .e-dlg-content {\\n    padding-left: 0;\\n    padding-bottom: 0;\\n}\\n.e-pv-bookmarks {\\n    min-width: 234px;\\n}\\n.e-pv-current-page-number {\\n    width: 46px;\\n    height: 28px;\\n    text-align: center;\\n}\\n.material .e-pv-current-page-number {\\n    border-width: 1px;\\n}\\n.e-pv-open-document-icon::before {\\n    content: '\\\\e91c';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-download-document-icon::before {\\n    content: '\\\\e914';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-print-document-icon::before {\\n    content: '\\\\e917';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-previous-page-navigation-icon::before {\\n    content: '\\\\e910';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-next-page-navigation-icon::before {\\n    content: '\\\\e911';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-zoom-out-icon::before {\\n    content: '\\\\e912';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-zoom-in-icon::before {\\n    content: '\\\\e91d';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-fit-page-icon::before {\\n    content: '\\\\e91b';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-btn-icon.e-pv-zoom-out-icon.e-icons {\\n    transform: rotate(90deg);\\n}\\n@font-face {\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n    font-style: normal;\\n    font-weight: normal;\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');\\n}\\n\\n/* custom code end*/\\n\\n/* style for slider button */\\n.flex-container {\\n    display: flex;\\n    justify-content: flex-end;\\n}\\n.render-mode-info {\\n    background: none;\\n    border: none;\\n    padding-left: 0px;\\n}\\n.render-mode-info .render-mode-info-icon {\\n    height: 16px;\\n    width: 16px;\\n}\\n.switchLabel {\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", sans-serif;        \\n    font-weight: 400;\\n    line-height: 20px;\\n    letter-spacing: 0.24px;\\n    text-align: right;\\n    font-size: 14px;\\n}\\n.render-mode-info .render-mode-info-icon::before {\\n    line-height: 0.5rem;\\n}\\n.buttonSwitch {\\n    Width: 40px;\\n    Height: 24px;\\n}\\n\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA,qBAAqB;AACrB;IACI,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;AAC5B;AACA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA;;IAEI,UAAU;IACV,SAAS;AACb;AACA;;;;IAII,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;IACnB,syGAAsyG;AAC1yG;;AAEA,mBAAmB;;AAEnB,4BAA4B;AAC5B;IACI,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,+DAA+D;IAC/D,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n/* custom code start*/\\n#pdfviewer {\\n    height: 640px;\\n}\\n#magnificationToolbar {\\n    background: transparent;\\n    height: auto;\\n    min-height: 56px;\\n    width: auto;\\n    border: none;\\n    position: absolute;\\n    z-index: 900;\\n    top: calc(100% - 140px);\\n    left: calc(100% - 150px);\\n    transform: rotate(90deg);\\n}\\ndiv#magnificationToolbar.e-toolbar .e-toolbar-items {\\n    background: transparent;\\n    padding: 2px 3px 2px 2px;\\n}\\n#magnificationToolbar.e-toolbar .e-tbar-btn {\\n    border-radius: 50%;\\n    min-height: 30px;\\n    min-width: 30px;\\n    border: 1px solid #c8c8c8;\\n}\\n#customToolbar {\\n    top: 20px;\\n    z-index: 900;\\n}\\n.e-bookmark-popup {\\n    height: 300px;\\n    max-width: 300px;\\n}\\n.e-text-search-popup {\\n    height: 104px;\\n    max-width: 348px;\\n}\\n.e-custom-search-input {\\n    width: 234px;\\n}\\n.e-text-search-popup .e-footer-content,\\n.e-bookmark-popup .e-footer-content {\\n    padding: 0;\\n    height: 0;\\n}\\n.search-button,\\n.search-button:disabled,\\n.search-button:focus,\\n.search-button:hover {\\n    background: transparent;\\n    box-shadow: none;\\n}\\n#popup .e-dlg-content {\\n    padding-left: 0;\\n    padding-bottom: 0;\\n}\\n.e-pv-bookmarks {\\n    min-width: 234px;\\n}\\n.e-pv-current-page-number {\\n    width: 46px;\\n    height: 28px;\\n    text-align: center;\\n}\\n.material .e-pv-current-page-number {\\n    border-width: 1px;\\n}\\n.e-pv-open-document-icon::before {\\n    content: '\\\\e91c';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-download-document-icon::before {\\n    content: '\\\\e914';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-print-document-icon::before {\\n    content: '\\\\e917';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-previous-page-navigation-icon::before {\\n    content: '\\\\e910';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-next-page-navigation-icon::before {\\n    content: '\\\\e911';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-zoom-out-icon::before {\\n    content: '\\\\e912';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-zoom-in-icon::before {\\n    content: '\\\\e91d';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-pv-fit-page-icon::before {\\n    content: '\\\\e91b';\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n}\\n.e-btn-icon.e-pv-zoom-out-icon.e-icons {\\n    transform: rotate(90deg);\\n}\\n@font-face {\\n    font-family: \\\"e-pdfviewer-icons\\\";\\n    font-style: normal;\\n    font-weight: normal;\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');\\n}\\n\\n/* custom code end*/\\n\\n/* style for slider button */\\n.flex-container {\\n    display: flex;\\n    justify-content: flex-end;\\n}\\n.render-mode-info {\\n    background: none;\\n    border: none;\\n    padding-left: 0px;\\n}\\n.render-mode-info .render-mode-info-icon {\\n    height: 16px;\\n    width: 16px;\\n}\\n.switchLabel {\\n    font-family: \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", sans-serif;        \\n    font-weight: 400;\\n    line-height: 20px;\\n    letter-spacing: 0.24px;\\n    text-align: right;\\n    font-size: 14px;\\n}\\n.render-mode-info .render-mode-info-icon::before {\\n    line-height: 0.5rem;\\n}\\n.buttonSwitch {\\n    Width: 40px;\\n    Height: 24px;\\n}\\n\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue":
/*!**************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1104a770__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1104a770 */ \"./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_1104a770_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1104a770&lang=css */ \"./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1104a770__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/pdfviewer/custom-toolbar/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-pdfviewer */ \"./node_modules/@syncfusion/ej2-vue-pdfviewer/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n\n\n\n\n\nvar toolbar;\nvar viewer;\nvar fileName;\nvar currentPageBox;\n\nfunction updatePageNavigation() {\n    if (viewer.currentPageNumber === 1) {\n        toolbar.enableItems(document.getElementById('previousPage'), false);\n        toolbar.enableItems(document.getElementById('nextPage'), true);\n    }\n    else if (viewer.currentPageNumber === viewer.pageCount) {\n        toolbar.enableItems(document.getElementById('previousPage'), true);\n        toolbar.enableItems(document.getElementById('nextPage'), false);\n    }\n    else {\n        toolbar.enableItems(document.getElementById('previousPage'), true);\n        toolbar.enableItems(document.getElementById('nextPage'), true);\n    }\n}\n\nfunction onCurrentPageBoxKeypress(event) {\n    if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {\n        event.preventDefault();\n        return false;\n    }\n    else {\n        var currentPageNumber = parseInt(currentPageBox.value);\n        if (event.which === 13) {\n            if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {\n                viewer.navigation.goToPage(currentPageNumber);\n            }\n            else {\n                currentPageBox.value = viewer.currentPageNumber.toString();\n            }\n        }\n        return true;\n    }\n}\n\nfunction onCurrentPageBoxClicked() {\n    currentPageBox.select();\n}\n\nfunction readFile(args) {\n    // tslint:disable-next-line\n    let upoadedFiles = args.target.files;\n    if (args.target.files[0] !== null) {\n        let uploadedFile = upoadedFiles[0];\n        fileName = uploadedFile.name;\n        if (uploadedFile) {\n            let reader = new FileReader();\n            reader.readAsDataURL(uploadedFile);\n            // tslint:disable-next-line\n            reader.onload = function (e) {\n                let uploadedFileUrl = e.currentTarget.result;\n                viewer.load(uploadedFileUrl, null);\n                viewer.fileName = fileName;\n            };\n        }\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-pdfviewer': _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.PdfViewerComponent,\n        'ejs-toolbar': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent,\n        'e-items': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.ItemsDirective,\n        'e-item': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.ItemDirective,\n        'ejs-switch': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__.SwitchComponent\n    },\n    data: function () {\n        return {\n            documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf',\n            enableToolbar: false,\n            enableNavigationToolbar: false,\n        }\n    },\n    provide: {\n        PdfViewer: [_syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.Toolbar, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.Magnification, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.Navigation, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.LinkAnnotation, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.BookmarkView, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.ThumbnailView, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.Print, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.TextSelection, _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_0__.TextSearch]\n    },\n    methods: {\n        openClicked: function (args) {\n            document.getElementById('fileUpload').click();\n        },\n        previousClicked: function (args) {\n            viewer.navigation.goToPreviousPage();\n        },\n        nextClicked: function (args) {\n            viewer.navigation.goToNextPage();\n        },\n        printClicked: function (args) {\n            viewer.print.print();\n        },\n        downloadClicked: function (args) {\n            viewer.download();\n        },\n        pageFitClicked: function (args) {\n            viewer.magnification.fitToPage();\n        },\n        zoomInClicked: function (args) {\n            viewer.magnification.zoomIn();\n        },\n        zoomOutClicked: function (args) {\n            viewer.magnification.zoomOut();\n        },\n        pageChange: function (args) {\n            currentPageBox = document.getElementById('currentPage');\n            currentPageBox.value = viewer.currentPageNumber.toString();\n            updatePageNavigation();\n        },\n        documentLoad: function (args) {\n            viewer = this.$refs.pdfviewer.ej2Instances;\n            toolbar = this.$refs.toolbar.ej2Instances;\n            currentPageBox = document.getElementById('currentPage');\n            currentPageBox.value = '1';\n            document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;\n            currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);\n            currentPageBox.addEventListener('click', onCurrentPageBoxClicked);\n            document.getElementById('fileUpload').addEventListener('change', readFile, false);\n            updatePageNavigation();\n        },\n        // Initialize switchObj within the mounted hook\n        change: function (args) {\n            var viewer = this.$refs.pdfviewer.ej2Instances;\n            if (args.checked) {\n                viewer.serviceUrl = \"\";\n            } else {\n                viewer.serviceUrl = \"https://ej2services.syncfusion.com/vue/development/api/pdfviewer\";\n            }           \n            viewer.dataBind();\n            viewer.load(viewer.documentPath, null);\n        }\n    }\n});\n\n\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770":
/*!********************************************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1104a770__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1104a770__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1104a770 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770\");\n\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css":
/*!**********************************************************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1104a770_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=1104a770&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1104a770_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1104a770_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1104a770_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1104a770_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770 ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"flex-container\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"switchLabel\",\n  for: \"checked\"\n}, \"Standalone PDF Viewer\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"e-message render-mode-info\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n    class: \"e-msg-icon render-mode-info-icon\",\n    title: \"Turn OFF to render the PDF Viewer as server-backed\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    class: \"e-input-group e-pv-current-page-number\",\n    id: \"currentPage\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n    class: \"e-pv-total-page-number\",\n    id: \"totalPage\"\n  }, \"of 0\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  type: \"file\",\n  id: \"fileUpload\",\n  accept: \".pdf\",\n  style: {\"display\":\"block\",\"visibility\":\"hidden\",\"width\":\"0\",\"height\":\"0\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_7 = { class: \"control-section\" }\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p>This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.</p></div><div id=\\\"description\\\"><p>This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.</p><p>In this example, you can see PDF Viewer control API in action to perform the functionalities.</p><ul><li>Go to Previous Page - <code>viewer.navigation.goToPreviousPage()</code></li><li>Go to Next Page - <code>viewer.navigation.goToNextPage()</code></li><li>Go to Page - <code>viewer.navigation.goToPage(pageindex)</code></li><li>Print - <code>viewer.print.print()</code></li><li>Download - <code>viewer.download()</code></li><li>Fit To Page - <code>viewer.magnification.fitToPage()</code></li><li>Zoom In - <code>viewer.magnification.zoomIn()</code></li><li>Zoom Out - <code>viewer.magnification.zoomOut()</code></li><li>Load document - <code>viewer.load(fileName, password)</code></li></ul><p> More information on the PDF Viewer instantiation can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started\\\"> documentation section </a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-switch\")\n  const _component_e_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-item\")\n  const _component_e_items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-items\")\n  const _component_ejs_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-toolbar\")\n  const _component_ejs_pdfviewer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-pdfviewer\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      _hoisted_2,\n      _hoisted_3,\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_switch, {\n          cssClass: \"buttonSwitch\",\n          id: \"checked\",\n          change: $options.change,\n          checked: true\n        }, null, 8 /* PROPS */, [\"change\"])\n      ])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_toolbar, {\n      id: \"customToolbar\",\n      ref: \"toolbar\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_items, null, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-open-document-icon\",\n              tooltipText: \"Open\",\n              click: $options.openClicked\n            }, null, 8 /* PROPS */, [\"click\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-previous-page-navigation-icon\",\n              id: \"previousPage\",\n              tooltipText: \"Previous Page\",\n              align: \"Center\",\n              click: $options.previousClicked\n            }, null, 8 /* PROPS */, [\"click\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-next-page-navigation-icon\",\n              id: \"nextPage\",\n              tooltipText: \"Next Page\",\n              align: \"Center\",\n              click: $options.nextClicked\n            }, null, 8 /* PROPS */, [\"click\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              template: 'pageNoTemplate',\n              tooltipText: \"Page Number\",\n              align: \"Center\"\n            }, {\n              pageNoTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                _hoisted_4\n              ]),\n              _: 1 /* STABLE */\n            }),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              template: 'pageTextTemplate',\n              tooltipText: \"Page Number\",\n              align: \"Center\"\n            }, {\n              pageTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                _hoisted_5\n              ]),\n              _: 1 /* STABLE */\n            }),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-print-document-icon\",\n              tooltipText: \"Print\",\n              align: \"Right\",\n              click: $options.printClicked\n            }, null, 8 /* PROPS */, [\"click\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-download-document-icon\",\n              tooltipText: \"Download\",\n              align: \"Right\",\n              click: $options.downloadClicked\n            }, null, 8 /* PROPS */, [\"click\"])\n          ]),\n          _: 1 /* STABLE */\n        })\n      ]),\n      _: 1 /* STABLE */\n    }, 512 /* NEED_PATCH */),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_toolbar, { id: \"magnificationToolbar\" }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_items, null, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-fit-page-icon\",\n              id: \"fitPage\",\n              tooltipText: \"Fit to page\",\n              click: $options.pageFitClicked\n            }, null, 8 /* PROPS */, [\"click\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-zoom-in-icon\",\n              id: \"zoomIn\",\n              tooltipText: \"Zoom in\",\n              click: $options.zoomInClicked\n            }, null, 8 /* PROPS */, [\"click\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n              prefixIcon: \"e-pv-zoom-out-icon\",\n              id: \"zoomOut\",\n              tooltipText: \"Zoom out\",\n              click: $options.zoomOutClicked\n            }, null, 8 /* PROPS */, [\"click\"])\n          ]),\n          _: 1 /* STABLE */\n        })\n      ]),\n      _: 1 /* STABLE */\n    }),\n    _hoisted_6,\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_pdfviewer, {\n        id: \"pdfviewer\",\n        ref: \"pdfviewer\",\n        pageChange: $options.pageChange,\n        documentLoad: $options.documentLoad,\n        documentPath: _ctx.documentPath,\n        enableToolbar: _ctx.enableToolbar,\n        enableNavigationToolbar: _ctx.enableNavigationToolbar\n      }, null, 8 /* PROPS */, [\"pageChange\", \"documentLoad\", \"documentPath\", \"enableToolbar\", \"enableNavigationToolbar\"])\n    ]),\n    _hoisted_8\n  ]))\n}\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=1104a770&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&id=1104a770&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"4a16de50\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2--pdfviewer-vue-samples/./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pdfviewer/custom-toolbar/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_pdfviewer_vue_samples"] = self["webpackChunkej2_pdfviewer_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/pdfviewer/custom-toolbar/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;