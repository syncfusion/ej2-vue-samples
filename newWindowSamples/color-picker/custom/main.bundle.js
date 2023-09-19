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

/***/ "./Samples/color-picker/custom/main.js":
/*!*********************************************!*\
  !*** ./Samples/color-picker/custom/main.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/color-picker/custom/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/shirt.png */ \"./Samples/color-picker/custom/images/shirt.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./images/shirt_highcontrast.png */ \"./Samples/color-picker/custom/images/shirt_highcontrast.png\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.id, \"\\n#custom-control {\\n    margin: auto 0;\\n    text-align: center;\\n}\\n#custom-control .col-lg-6 {\\n    margin-bottom: 20px;\\n}\\n#custom-control .col-lg-6.e-circle-wrap {\\n    width: 26%;\\n}\\n#custom-control .col-lg-6.e-square-wrap {\\n    margin-top: 37px;\\n    width: 22%;\\n}\\n#custom-control .col-lg-6.e-rounded-wrap {\\n    margin-top: 35px;\\n    width: 19%;\\n}\\n#custom-control .col-lg-6.e-scroll-wrap {\\n    width: 33%;\\n}\\n#custom-control.e-mobile-control .col-lg-6 {\\n    width: 55%;\\n}\\n\\n/* Preview area styles */\\n#custom-control #e-shirt-preview {\\n    background: transparent url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n    height: 320px;\\n    margin: 20px auto;\\n    display: inline-block;\\n    width: 400px;\\n    background-color: rgb(244, 67, 54);\\n}\\n#custom-control.e-mobile-control #e-shirt-preview {\\n    margin-left: -21%;\\n    width: 320px;\\n}\\n.highcontrast #custom-control #e-shirt-preview {\\n    background: transparent url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\n    background-color: rgb(244, 67, 54);\\n}\\n\\n/* Common sample level styles for mobile */\\n@media only screen and (min-width: 768px) {\\n#custom-control.e-mobile-control .col-sm-12 {\\n        width: 25%;\\n}\\n}\\n#custom-control.e-mobile-control #custom-content {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n}\\n#custom-control.e-mobile-control #custom-content .col-xs-12 {\\n    flex: 0 0 auto;\\n}\\n#custom-control .e-container .e-palette .e-circle-palette {\\n    border: 0;\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    margin: 4px;\\n}\\n.e-bigger #custom-control .e-container .e-palette .e-circle-palette {\\n    height: 32px;\\n    width: 32px;\\n}\\n#custom-control .e-container .e-palette .e-square-palette {\\n    width: 20px;\\n    height: 20px;\\n}\\n#custom-control .e-container .e-palette .e-circle-palette:hover {\\n    box-shadow: none;\\n    transform: scale(1.2);\\n    transition: transform .2s ease-out;\\n}\\n#custom-control .e-circle-palette .e-circle-selection {\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    display: inline-block;\\n    transform: scale(0);\\n    transition: transform 1.2s ease-in;\\n}\\n#custom-control .e-circle-palette.e-selected .e-circle-selection {\\n    transform: scale(0.8);\\n    background-color: #fff;\\n    transition: transform .2s ease-out;\\n}\\n#circle-palette+.e-container,\\n#scroll-palette+.e-container {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none;\\n}\\n\\n/* Scrollable palette customization */\\n#scroll-palette+.e-container .e-custom-palette.e-palette-group,\\n.e-bigger #scroll-palette+.e-container .e-custom-palette.e-palette-group {\\n    height: 125px;\\n}\\n#custom-control .e-container .e-palette .e-scroll-palette {\\n    border: 0;\\n    color: #fff;\\n    line-height: 24px;\\n    font-size: 16px;\\n    height: 24px;\\n    width: 35px;\\n    margin-top: 2px;\\n    margin-left: 10px;\\n}\\n.e-bigger #custom-control .e-container .e-palette .e-scroll-palette {\\n    height: 24px;\\n    width: 35px;\\n}\\n#custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e933';\\n}\\n.tailwind #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.tailwind-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e856';\\n}\\n.bootstrap5 #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.bootstrap5-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e727';\\n}\\n.bootstrap4 #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.bootstrap4-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e718';\\n}\\n.bootstrap #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.bootstrap-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.fabric #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.fabric-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.highcontrast #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e7ff';\\n}\\n.highcontrast #custom-control .e-container .e-palette {\\n    border-bottom-color: transparent;\\n}\\n\\n/* Square palette customization */\\n.e-container #custom-control .e-palette .e-square-palette,\\n.e-bigger #custom-control .e-container .e-palette .e-square-palette {\\n    width: 20px;\\n    height: 20px;\\n}\\n#square-palette+.e-container .e-custom-palette .e-palette,\\n#rounded-palette+.e-container .e-custom-palette .e-palette {\\n    padding: 5px;\\n}\\n\\n/* Rounded corner palette customization */\\n#custom-control .e-container .e-palette .e-rounded-palette {\\n    border-radius: 4px;\\n    margin: 3px;\\n    height: 16px;\\n    width: 16px;\\n}\\n.e-bigger #custom-control .e-container .e-palette .e-rounded-palette {\\n    height: 16px;\\n    width: 16px;\\n}\\n#custom-control .e-container .e-palette .e-rounded-palette:hover,\\n#custom-control .e-container .e-palette .e-scroll-palette:hover {\\n    box-shadow: none;\\n}\\n#custom-control .e-container .e-palette .e-circle-palette.e-selected,\\n#custom-control .e-container .e-palette .e-rounded-palette.e-selected,\\n#custom-control .e-container .e-palette .e-square-palette.e-selected,\\n#custom-control .e-container .e-palette .e-scroll-palette.e-selected {\\n    outline: none;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;;AAEA,wBAAwB;AACxB;IACI,yEAAyD;IACzD,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;AACtC;AACA;IACI,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,yEAAsE;IACtE,kCAAkC;AACtC;;AAEA,0CAA0C;AAC1C;AACA;QACQ,UAAU;AAClB;AACA;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,kCAAkC;AACtC;AACA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,kCAAkC;AACtC;AACA;;IAEI,6BAA6B;IAC7B,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA,qCAAqC;AACrC;;IAEI,aAAa;AACjB;AACA;IACI,SAAS;IACT,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,gBAAgB;AACpB;AACA;;;;;IAKI,gBAAgB;AACpB;AACA;IACI,gCAAgC;AACpC;;AAEA,iCAAiC;AACjC;;IAEI,WAAW;IACX,YAAY;AAChB;AACA;;IAEI,YAAY;AAChB;;AAEA,yCAAyC;AACzC;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;;IAEI,gBAAgB;AACpB;AACA;;;;IAII,aAAa;AACjB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#custom-control {\\n    margin: auto 0;\\n    text-align: center;\\n}\\n#custom-control .col-lg-6 {\\n    margin-bottom: 20px;\\n}\\n#custom-control .col-lg-6.e-circle-wrap {\\n    width: 26%;\\n}\\n#custom-control .col-lg-6.e-square-wrap {\\n    margin-top: 37px;\\n    width: 22%;\\n}\\n#custom-control .col-lg-6.e-rounded-wrap {\\n    margin-top: 35px;\\n    width: 19%;\\n}\\n#custom-control .col-lg-6.e-scroll-wrap {\\n    width: 33%;\\n}\\n#custom-control.e-mobile-control .col-lg-6 {\\n    width: 55%;\\n}\\n\\n/* Preview area styles */\\n#custom-control #e-shirt-preview {\\n    background: transparent url('images/shirt.png') no-repeat;\\n    height: 320px;\\n    margin: 20px auto;\\n    display: inline-block;\\n    width: 400px;\\n    background-color: rgb(244, 67, 54);\\n}\\n#custom-control.e-mobile-control #e-shirt-preview {\\n    margin-left: -21%;\\n    width: 320px;\\n}\\n.highcontrast #custom-control #e-shirt-preview {\\n    background: transparent url('images/shirt_highcontrast.png') no-repeat;\\n    background-color: rgb(244, 67, 54);\\n}\\n\\n/* Common sample level styles for mobile */\\n@media only screen and (min-width: 768px) {\\n#custom-control.e-mobile-control .col-sm-12 {\\n        width: 25%;\\n}\\n}\\n#custom-control.e-mobile-control #custom-content {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n}\\n#custom-control.e-mobile-control #custom-content .col-xs-12 {\\n    flex: 0 0 auto;\\n}\\n#custom-control .e-container .e-palette .e-circle-palette {\\n    border: 0;\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    margin: 4px;\\n}\\n.e-bigger #custom-control .e-container .e-palette .e-circle-palette {\\n    height: 32px;\\n    width: 32px;\\n}\\n#custom-control .e-container .e-palette .e-square-palette {\\n    width: 20px;\\n    height: 20px;\\n}\\n#custom-control .e-container .e-palette .e-circle-palette:hover {\\n    box-shadow: none;\\n    transform: scale(1.2);\\n    transition: transform .2s ease-out;\\n}\\n#custom-control .e-circle-palette .e-circle-selection {\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    display: inline-block;\\n    transform: scale(0);\\n    transition: transform 1.2s ease-in;\\n}\\n#custom-control .e-circle-palette.e-selected .e-circle-selection {\\n    transform: scale(0.8);\\n    background-color: #fff;\\n    transition: transform .2s ease-out;\\n}\\n#circle-palette+.e-container,\\n#scroll-palette+.e-container {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none;\\n}\\n\\n/* Scrollable palette customization */\\n#scroll-palette+.e-container .e-custom-palette.e-palette-group,\\n.e-bigger #scroll-palette+.e-container .e-custom-palette.e-palette-group {\\n    height: 125px;\\n}\\n#custom-control .e-container .e-palette .e-scroll-palette {\\n    border: 0;\\n    color: #fff;\\n    line-height: 24px;\\n    font-size: 16px;\\n    height: 24px;\\n    width: 35px;\\n    margin-top: 2px;\\n    margin-left: 10px;\\n}\\n.e-bigger #custom-control .e-container .e-palette .e-scroll-palette {\\n    height: 24px;\\n    width: 35px;\\n}\\n#custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e933';\\n}\\n.tailwind #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.tailwind-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e856';\\n}\\n.bootstrap5 #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.bootstrap5-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e727';\\n}\\n.bootstrap4 #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.bootstrap4-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e718';\\n}\\n.bootstrap #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.bootstrap-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.fabric #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.fabric-dark #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before,\\n.highcontrast #custom-control .e-container .e-palette .e-scroll-palette.e-selected::before {\\n    content: '\\\\e7ff';\\n}\\n.highcontrast #custom-control .e-container .e-palette {\\n    border-bottom-color: transparent;\\n}\\n\\n/* Square palette customization */\\n.e-container #custom-control .e-palette .e-square-palette,\\n.e-bigger #custom-control .e-container .e-palette .e-square-palette {\\n    width: 20px;\\n    height: 20px;\\n}\\n#square-palette+.e-container .e-custom-palette .e-palette,\\n#rounded-palette+.e-container .e-custom-palette .e-palette {\\n    padding: 5px;\\n}\\n\\n/* Rounded corner palette customization */\\n#custom-control .e-container .e-palette .e-rounded-palette {\\n    border-radius: 4px;\\n    margin: 3px;\\n    height: 16px;\\n    width: 16px;\\n}\\n.e-bigger #custom-control .e-container .e-palette .e-rounded-palette {\\n    height: 16px;\\n    width: 16px;\\n}\\n#custom-control .e-container .e-palette .e-rounded-palette:hover,\\n#custom-control .e-container .e-palette .e-scroll-palette:hover {\\n    box-shadow: none;\\n}\\n#custom-control .e-container .e-palette .e-circle-palette.e-selected,\\n#custom-control .e-container .e-palette .e-rounded-palette.e-selected,\\n#custom-control .e-container .e-palette .e-square-palette.e-selected,\\n#custom-control .e-container .e-palette .e-scroll-palette.e-selected {\\n    outline: none;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/color-picker/custom/images/shirt.png":
/*!******************************************************!*\
  !*** ./Samples/color-picker/custom/images/shirt.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./../../source/color-picker/images/shirt.png\");\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/images/shirt.png?");

/***/ }),

/***/ "./Samples/color-picker/custom/images/shirt_highcontrast.png":
/*!*******************************************************************!*\
  !*** ./Samples/color-picker/custom/images/shirt_highcontrast.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./../../source/color-picker/images/shirt_highcontrast.png\");\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/images/shirt_highcontrast.png?");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue":
/*!*********************************************!*\
  !*** ./Samples/color-picker/custom/App.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7092e954__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7092e954 */ \"./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/color-picker/custom/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7092e954_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7092e954&lang=css */ \"./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7092e954__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/color-picker/custom/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data: function() {\n    return {\n        biggerPalettesColn: 4,\n        squarePalettesColn: 8,\n        roundedPalettesColn: 5,\n        circlePaletteColors: {'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',\n                    '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']},\n        squarePaletteColors: {'custom1': ['#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf',\n                    '#5300eb', '#eb9694', '#fad0c3', '#fef3bd', '#c1e1c5', '#bedadc', '#c4def6', '#bed3f3',\n                    '#d4c4fb']},\n        roundedPaletteColors: {'custom1': ['#ff6900', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c',\n                    '#f78da7', '#9900ef']},\n        scrollPaletteColors: {\n                'custom1': ['#ef9a9a', '#e57373', '#ef5350', '#f44336', '#f48fb1', '#f06292',\n                    '#ec407a', '#e91e63', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#b39ddb',\n                    '#9575cd', '#7e57c2', '#673AB7'],\n                'custom2': ['#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#90CAF9', '#64B5F6',\n                    '#42A5F5', '#2196F3', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',\n                    '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4'],\n                'custom3': ['#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#A5D6A7', '#81C784',\n                    '#66BB6A', '#4CAF50', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#E6EE9C',\n                    '#DCE775', '#D4E157', '#CDDC39'],\n                'custom4': ['#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FFE082', '#FFD54F',\n                    '#FFCA28', '#FFC107', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FFAB91',\n                    '#FF8A65', '#FF7043', '#FF5722']}\n    }\n  },\n  components: { 'ejs-colorpicker': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__.ColorPickerComponent },\n  methods: {\n    onChange: function(args) {\n      document.getElementById(\"e-shirt-preview\").style.backgroundColor = args.currentValue.hex;\n    },\n    roundedPaletteChange: function(args) {\n        document.getElementById(\"rounded-palette\").nextElementSibling.querySelector(\".e-selected\").style.boxShadow\n            = args.currentValue.hex + ' 0 0 4px';\n        document.getElementById(\"e-shirt-preview\").style.backgroundColor = args.currentValue.hex;\n    },\n    beforeCircleTileRender: function(args) {\n        args.element.classList.add(\"e-circle-palette\");\n        args.element.appendChild((0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', { className: 'e-circle-selection' }));\n    },\n    beforeSquareTileRender: function(args) {\n        args.element.classList.add(\"e-square-palette\");\n    },\n    beforeRoundedTileRender: function(args) {\n        args.element.classList.add(\"e-rounded-palette\");\n    },\n    beforeScrollTileRender: function(args) {\n        args.element.classList.add(\"e-icons\");\n        args.element.classList.add(\"e-scroll-palette\");\n    }\n  },\n  mounted: function() {\n    this.$nextTick(function () {\n        if (window.browserDetails.isDevice) {\n            document.getElementById(\"custom-control\").classList.add(\"e-mobile-control\");\n        }\n    });\n  }\n});\n\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./Samples/color-picker/custom/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954":
/*!***************************************************************************!*\
  !*** ./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7092e954__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7092e954__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=7092e954 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954\");\n\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css":
/*!*****************************************************************************************!*\
  !*** ./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7092e954_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=7092e954&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7092e954_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7092e954_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7092e954_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7092e954_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954 ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { id: \"custom-control\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"row\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"e-shirt-preview\" })\n], -1 /* HOISTED */)\nconst _hoisted_4 = {\n  id: \"custom-content\",\n  class: \"row\"\n}\nconst _hoisted_5 = { class: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-circle-wrap\" }\nconst _hoisted_6 = { class: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-rounded-wrap\" }\nconst _hoisted_7 = { class: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-square-wrap\" }\nconst _hoisted_8 = { class: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-scroll-wrap\" }\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p>This sample demonstrates how to customize the color palettes with different types and styles.</p></div><div id=\\\"description\\\"><p> The ColorPicker component is a user interface to select and adjust color values. This supports various color specifications like RGB (Red Green Blue), HSV (Hue Saturation Value), and Hex codes. </p><p> In this sample,</p><ul><li> Select the shirt color from different customized palettes. It contains circle, square, rounded edge, and multiple scroll palettes. </li><li>Using the <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/color-picker/#presetcolors\\\">presetColors </a></code> property, you can specify the custom colors to be loaded.</li></ul><p> More information about ColorPicker can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/color-picker/how-to/customize-colorpicker\\\"> documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_colorpicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-colorpicker\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      _hoisted_3,\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_colorpicker, {\n            id: \"circle-palette\",\n            mode: \"Palette\",\n            modeSwitcher: false,\n            inline: true,\n            showButtons: false,\n            columns: _ctx.biggerPalettesColn,\n            presetColors: _ctx.circlePaletteColors,\n            beforeTileRender: $options.beforeCircleTileRender,\n            change: $options.onChange\n          }, null, 8 /* PROPS */, [\"columns\", \"presetColors\", \"beforeTileRender\", \"change\"])\n        ]),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_colorpicker, {\n            id: \"rounded-palette\",\n            mode: \"Palette\",\n            modeSwitcher: false,\n            inline: true,\n            showButtons: false,\n            columns: _ctx.roundedPalettesColn,\n            presetColors: _ctx.roundedPaletteColors,\n            beforeTileRender: $options.beforeRoundedTileRender,\n            change: $options.roundedPaletteChange\n          }, null, 8 /* PROPS */, [\"columns\", \"presetColors\", \"beforeTileRender\", \"change\"])\n        ]),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_colorpicker, {\n            id: \"square-palette\",\n            mode: \"Palette\",\n            modeSwitcher: false,\n            inline: true,\n            showButtons: false,\n            columns: _ctx.squarePalettesColn,\n            presetColors: _ctx.squarePaletteColors,\n            beforeTileRender: $options.beforeSquareTileRender,\n            change: $options.onChange\n          }, null, 8 /* PROPS */, [\"columns\", \"presetColors\", \"beforeTileRender\", \"change\"])\n        ]),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_colorpicker, {\n            id: \"scroll-palette\",\n            mode: \"Palette\",\n            modeSwitcher: false,\n            inline: true,\n            showButtons: false,\n            columns: _ctx.biggerPalettesColn,\n            presetColors: _ctx.scrollPaletteColors,\n            beforeTileRender: $options.beforeScrollTileRender,\n            change: $options.onChange\n          }, null, 8 /* PROPS */, [\"columns\", \"presetColors\", \"beforeTileRender\", \"change\"])\n        ])\n      ])\n    ]),\n    _hoisted_9\n  ]))\n}\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=7092e954&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"30af7c38\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-inputs-vue-samples/./Samples/color-picker/custom/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"color-picker/custom/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_inputs_vue_samples"] = self["webpackChunkej2_inputs_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/color-picker/custom/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;