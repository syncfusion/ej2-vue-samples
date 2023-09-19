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

/***/ "./Samples/range-navigator/filter/main.js":
/*!************************************************!*\
  !*** ./Samples/range-navigator/filter/main.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-navigator/filter/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#control-containerFilter[data-v-6df6a7b4] {\\n  padding: 0px !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;EACE,uBAAuB;AACzB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#control-containerFilter[data-v-6df6a7b4] {\\n  padding: 0px !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/range-navigator/filter/data-source.ts":
/*!*******************************************************!*\
  !*** ./Samples/range-navigator/filter/data-source.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   employeeData: () => (/* binding */ employeeData),\n/* harmony export */   exportData: () => (/* binding */ exportData)\n/* harmony export */ });\n/**\n * Chart datasource\n */\nvar employeeData = [{\n        'EmployeeID': 1,\n        'yValue': 2,\n        'FirstName': 'Nancy',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 0, 1),\n    },\n    {\n        'EmployeeID': 2,\n        'yValue': 5,\n        'FirstName': 'Andrew',\n        'Title': 'Vice President, Sales',\n        'HireDate': new Date(1992, 1, 1),\n    },\n    {\n        'EmployeeID': 3,\n        'yValue': 8,\n        'FirstName': 'Janet',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 2, 1),\n    },\n    {\n        'EmployeeID': 4,\n        'yValue': 4,\n        'FirstName': 'Margaret',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 3, 1),\n    },\n    {\n        'EmployeeID': 5,\n        'yValue': 7,\n        'FirstName': 'Steven',\n        'Title': 'Sales Manager',\n        'HireDate': new Date(1992, 4, 1),\n    },\n    {\n        'EmployeeID': 6,\n        'yValue': 9,\n        'FirstName': 'Michael',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 5, 1),\n    },\n    {\n        'EmployeeID': 7,\n        'yValue': 6,\n        'FirstName': 'Robert',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 6, 1),\n    },\n    {\n        'EmployeeID': 8,\n        'yValue': 4,\n        'FirstName': 'Laura',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1992, 7, 1),\n    },\n    {\n        'EmployeeID': 9,\n        'yValue': 8,\n        'FirstName': 'Anne',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 8, 1),\n    }, {\n        'EmployeeID': 10,\n        'yValue': 2,\n        'FirstName': 'Fletcher',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 9, 1),\n    },\n    {\n        'EmployeeID': 11,\n        'yValue': 5,\n        'FirstName': 'Robin',\n        'Title': 'Vice President, Sales',\n        'HireDate': new Date(1992, 10, 1),\n    },\n    {\n        'EmployeeID': 12,\n        'yValue': 8,\n        'FirstName': 'Mathew',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 11, 1),\n    },\n    {\n        'EmployeeID': 13,\n        'yValue': 4,\n        'FirstName': 'Henry',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 0, 1),\n    },\n    {\n        'EmployeeID': 14,\n        'yValue': 7,\n        'FirstName': 'Flemming',\n        'Title': 'Sales Manager',\n        'HireDate': new Date(1993, 1, 1),\n    },\n    {\n        'EmployeeID': 15,\n        'yValue': 9,\n        'FirstName': 'Clarke',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 2, 1),\n    },\n    {\n        'EmployeeID': 16,\n        'yValue': 6,\n        'FirstName': 'Martin',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 3, 1),\n    },\n    {\n        'EmployeeID': 17,\n        'yValue': 4,\n        'FirstName': 'Loius',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 4, 1),\n    },\n    {\n        'EmployeeID': 18,\n        'yValue': 8,\n        'FirstName': 'Arthur',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 5, 1),\n    },\n    {\n        'EmployeeID': 19,\n        'yValue': 5,\n        'FirstName': 'Marcus',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 6, 1),\n    },\n    {\n        'EmployeeID': 20,\n        'yValue': 7,\n        'FirstName': 'Albert',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 7, 1),\n    },\n    {\n        'EmployeeID': 21,\n        'yValue': 9,\n        'FirstName': 'Nicolas',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 8, 1),\n    },\n    {\n        'EmployeeID': 22,\n        'yValue': 7,\n        'FirstName': 'Behardien',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 9, 1),\n    },\n    {\n        'EmployeeID': 23,\n        'yValue': 3,\n        'FirstName': 'Bruce',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 10, 1),\n    },\n    {\n        'EmployeeID': 24,\n        'yValue': 7,\n        'FirstName': 'Kimi',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 11, 1),\n    }];\nvar exportData = [\n    { xDate: new Date('2013-01-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },\n    { xDate: new Date('2013-01-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },\n    { xDate: new Date('2013-01-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },\n    { xDate: new Date('2013-01-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },\n    { xDate: new Date('2013-01-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },\n    { xDate: new Date('2013-01-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },\n    { xDate: new Date('2013-01-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },\n    { xDate: new Date('2013-01-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },\n    { xDate: new Date('2013-01-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },\n    { xDate: new Date('2013-01-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },\n    { xDate: new Date('2013-01-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },\n    { xDate: new Date('2013-01-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },\n    { xDate: new Date('2013-01-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },\n    { xDate: new Date('2013-01-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },\n    { xDate: new Date('2013-01-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },\n    { xDate: new Date('2013-02-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },\n    { xDate: new Date('2013-02-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },\n    { xDate: new Date('2013-02-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },\n    { xDate: new Date('2013-02-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },\n    { xDate: new Date('2013-02-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },\n    { xDate: new Date('2013-02-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },\n    { xDate: new Date('2013-02-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },\n    { xDate: new Date('2013-02-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },\n    { xDate: new Date('2013-02-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },\n    { xDate: new Date('2013-02-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },\n    { xDate: new Date('2013-02-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },\n    { xDate: new Date('2013-02-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },\n    { xDate: new Date('2013-02-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },\n    { xDate: new Date('2013-02-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-03-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },\n    { xDate: new Date('2013-03-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },\n    { xDate: new Date('2013-03-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },\n    { xDate: new Date('2013-03-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },\n    { xDate: new Date('2013-03-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },\n    { xDate: new Date('2013-03-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },\n    { xDate: new Date('2013-03-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },\n    { xDate: new Date('2013-03-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },\n    { xDate: new Date('2013-03-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },\n    { xDate: new Date('2013-03-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },\n    { xDate: new Date('2013-03-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },\n    { xDate: new Date('2013-03-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },\n    { xDate: new Date('2013-03-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },\n    { xDate: new Date('2013-03-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },\n    { xDate: new Date('2013-03-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },\n    { xDate: new Date('2013-04-01'), Open: 86.1, High: 86.15, Low: 85.9, Close: 86.03 },\n    { xDate: new Date('2013-04-03'), Open: 85.93, High: 86.17, Low: 85.84, Close: 86.02 },\n    { xDate: new Date('2013-04-05'), Open: 85.74, High: 86, Low: 85.66, Close: 86 },\n    { xDate: new Date('2013-04-07'), Open: 85.71, High: 85.71, Low: 85.36, Close: 85.62 },\n    { xDate: new Date('2013-04-09'), Open: 85.3, High: 85.92, Low: 85.16, Close: 85.8 },\n    { xDate: new Date('2013-04-11'), Open: 84.23, High: 85.46, Low: 84.23, Close: 85.2 },\n    { xDate: new Date('2013-04-13'), Open: 84.51, High: 84.54, Low: 84.19, Close: 84.3 },\n    { xDate: new Date('2013-04-15'), Open: 84.44, High: 84.65, Low: 84.2, Close: 84.63 },\n    { xDate: new Date('2013-04-17'), Open: 84.6, High: 84.81, Low: 84.59, Close: 84.65 },\n    { xDate: new Date('2013-04-19'), Open: 84.52, High: 84.86, Low: 84.4, Close: 84.76 },\n    { xDate: new Date('2013-04-21'), Open: 84.17, High: 84.66, Low: 84.16, Close: 84.47 },\n    { xDate: new Date('2013-04-23'), Open: 84.22, High: 84.3, Low: 83.98, Close: 84.26 },\n    { xDate: new Date('2013-04-25'), Open: 83.75, High: 84.1, Low: 83.65, Close: 84 },\n    { xDate: new Date('2013-04-27'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-04-29'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-05-01'), Open: 84.3, High: 84.45, Low: 84.19, Close: 84.22 },\n    { xDate: new Date('2013-05-03'), Open: 83.79, High: 84.19, Low: 83.7, Close: 84.04 },\n    { xDate: new Date('2013-05-05'), Open: 84.02, High: 84.02, Low: 83.69, Close: 83.71 },\n    { xDate: new Date('2013-05-07'), Open: 84.01, High: 84.04, Low: 83.82, Close: 83.96 },\n    { xDate: new Date('2013-05-09'), Open: 83.9, High: 84.02, Low: 83.86, Close: 83.94 },\n    { xDate: new Date('2013-05-11'), Open: 84.09, High: 84.17, Low: 83.9, Close: 84.06 },\n    { xDate: new Date('2013-05-13'), Open: 83.89, High: 84.25, Low: 83.77, Close: 84.01 },\n    { xDate: new Date('2013-05-15'), Open: 84.05, High: 84.14, Low: 83.84, Close: 83.91 },\n    { xDate: new Date('2013-05-17'), Open: 84.49, High: 84.65, Low: 84.18, Close: 84.22 },\n    { xDate: new Date('2013-05-19'), Open: 84.99, High: 85.1, Low: 84.37, Close: 84.43 },\n    { xDate: new Date('2013-05-21'), Open: 84.96, High: 85.06, Low: 84.7, Close: 85.01 },\n    { xDate: new Date('2013-05-23'), Open: 84.68, High: 84.9, Low: 84.65, Close: 84.76 },\n    { xDate: new Date('2013-05-25'), Open: 84.35, High: 85.03, Low: 84.32, Close: 84.67 },\n    { xDate: new Date('2013-05-27'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-05-29'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-06-01'), Open: 84.2, High: 84.29, Low: 84.04, Close: 84.15 },\n    { xDate: new Date('2013-06-03'), Open: 84.21, High: 84.25, Low: 84.03, Close: 84.17 },\n    { xDate: new Date('2013-06-05'), Open: 84.72, High: 84.87, Low: 84.44, Close: 84.49 },\n    { xDate: new Date('2013-06-07'), Open: 84.85, High: 84.88, Low: 84.5, Close: 84.72 },\n    { xDate: new Date('2013-06-09'), Open: 84.53, High: 84.74, Low: 84.25, Close: 84.69 },\n    { xDate: new Date('2013-06-11'), Open: 84.4, High: 84.7, Low: 84.27, Close: 84.52 },\n    { xDate: new Date('2013-06-13'), Open: 84.96, High: 85.07, Low: 84.5, Close: 84.57 },\n    { xDate: new Date('2013-06-15'), Open: 85.28, High: 85.32, Low: 84.95, Close: 85.03 },\n    { xDate: new Date('2013-06-17'), Open: 85.35, High: 85.39, Low: 85.1, Close: 85.32 },\n    { xDate: new Date('2013-06-19'), Open: 85.65, High: 85.66, Low: 85.21, Close: 85.36 },\n    { xDate: new Date('2013-06-21'), Open: 85.38, High: 85.85, Low: 85.25, Close: 85.67 },\n    { xDate: new Date('2013-06-23'), Open: 85.8, High: 85.96, Low: 85.67, Close: 85.83 },\n    { xDate: new Date('2013-06-25'), Open: 86.07, High: 86.22, Low: 85.75, Close: 85.87 },\n    { xDate: new Date('2013-06-27'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-06-29'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-07-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },\n    { xDate: new Date('2013-07-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },\n    { xDate: new Date('2013-07-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },\n    { xDate: new Date('2013-07-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },\n    { xDate: new Date('2013-07-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },\n    { xDate: new Date('2013-07-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },\n    { xDate: new Date('2013-07-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },\n    { xDate: new Date('2013-07-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },\n    { xDate: new Date('2013-07-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },\n    { xDate: new Date('2013-07-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },\n    { xDate: new Date('2013-07-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },\n    { xDate: new Date('2013-07-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },\n    { xDate: new Date('2013-07-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },\n    { xDate: new Date('2013-07-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-07-29'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-08-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },\n    { xDate: new Date('2013-08-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },\n    { xDate: new Date('2013-08-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },\n    { xDate: new Date('2013-08-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },\n    { xDate: new Date('2013-08-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },\n    { xDate: new Date('2013-08-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },\n    { xDate: new Date('2013-08-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },\n    { xDate: new Date('2013-08-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },\n    { xDate: new Date('2013-08-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },\n    { xDate: new Date('2013-08-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },\n    { xDate: new Date('2013-08-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },\n    { xDate: new Date('2013-08-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },\n    { xDate: new Date('2013-08-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },\n    { xDate: new Date('2013-08-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },\n    { xDate: new Date('2013-08-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },\n    { xDate: new Date('2013-09-01'), Open: 86.1, High: 86.15, Low: 85.9, Close: 86.03 },\n    { xDate: new Date('2013-09-03'), Open: 85.93, High: 86.17, Low: 85.84, Close: 86.02 },\n    { xDate: new Date('2013-09-05'), Open: 85.74, High: 86, Low: 85.66, Close: 86 },\n    { xDate: new Date('2013-09-07'), Open: 85.71, High: 85.71, Low: 85.36, Close: 85.62 },\n    { xDate: new Date('2013-09-09'), Open: 85.3, High: 85.92, Low: 85.16, Close: 85.8 },\n    { xDate: new Date('2013-09-11'), Open: 84.23, High: 85.46, Low: 84.23, Close: 85.2 },\n    { xDate: new Date('2013-09-13'), Open: 84.51, High: 84.54, Low: 84.19, Close: 84.3 },\n    { xDate: new Date('2013-09-15'), Open: 84.44, High: 84.65, Low: 84.2, Close: 84.63 },\n    { xDate: new Date('2013-09-17'), Open: 84.6, High: 84.81, Low: 84.59, Close: 84.65 },\n    { xDate: new Date('2013-09-19'), Open: 84.52, High: 84.86, Low: 84.4, Close: 84.76 },\n    { xDate: new Date('2013-09-21'), Open: 84.17, High: 84.66, Low: 84.16, Close: 84.47 },\n    { xDate: new Date('2013-09-23'), Open: 84.22, High: 84.3, Low: 83.98, Close: 84.26 },\n    { xDate: new Date('2013-09-25'), Open: 83.75, High: 84.1, Low: 83.65, Close: 84 },\n    { xDate: new Date('2013-09-27'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-09-29'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-10-01'), Open: 84.3, High: 84.45, Low: 84.19, Close: 84.22 },\n    { xDate: new Date('2013-10-03'), Open: 83.79, High: 84.19, Low: 83.7, Close: 84.04 },\n    { xDate: new Date('2013-10-05'), Open: 84.02, High: 84.02, Low: 83.69, Close: 83.71 },\n    { xDate: new Date('2013-10-07'), Open: 84.01, High: 84.04, Low: 83.82, Close: 83.96 },\n    { xDate: new Date('2013-10-09'), Open: 83.9, High: 84.02, Low: 83.86, Close: 83.94 },\n    { xDate: new Date('2013-10-11'), Open: 84.09, High: 84.17, Low: 83.9, Close: 84.06 },\n    { xDate: new Date('2013-10-13'), Open: 83.89, High: 84.25, Low: 83.77, Close: 84.01 },\n    { xDate: new Date('2013-10-15'), Open: 84.05, High: 84.14, Low: 83.84, Close: 83.91 },\n    { xDate: new Date('2013-10-17'), Open: 84.49, High: 84.65, Low: 84.18, Close: 84.22 },\n    { xDate: new Date('2013-10-19'), Open: 84.99, High: 85.1, Low: 84.37, Close: 84.43 },\n    { xDate: new Date('2013-10-21'), Open: 84.96, High: 85.06, Low: 84.7, Close: 85.01 },\n    { xDate: new Date('2013-10-23'), Open: 84.68, High: 84.9, Low: 84.65, Close: 84.76 },\n    { xDate: new Date('2013-10-25'), Open: 84.35, High: 85.03, Low: 84.32, Close: 84.67 },\n    { xDate: new Date('2013-10-27'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-10-29'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-11-01'), Open: 84.2, High: 84.29, Low: 84.04, Close: 84.15 },\n    { xDate: new Date('2013-11-03'), Open: 84.21, High: 84.25, Low: 84.03, Close: 84.17 },\n    { xDate: new Date('2013-11-05'), Open: 84.72, High: 84.87, Low: 84.44, Close: 84.49 },\n    { xDate: new Date('2013-11-07'), Open: 84.85, High: 84.88, Low: 84.5, Close: 84.72 },\n    { xDate: new Date('2013-11-09'), Open: 84.53, High: 84.74, Low: 84.25, Close: 84.69 },\n    { xDate: new Date('2013-11-11'), Open: 84.4, High: 84.7, Low: 84.27, Close: 84.52 },\n    { xDate: new Date('2013-11-13'), Open: 84.96, High: 85.07, Low: 84.5, Close: 84.57 },\n    { xDate: new Date('2013-11-15'), Open: 85.28, High: 85.32, Low: 84.95, Close: 85.03 },\n    { xDate: new Date('2013-11-17'), Open: 85.35, High: 85.39, Low: 85.1, Close: 85.32 },\n    { xDate: new Date('2013-11-19'), Open: 85.65, High: 85.66, Low: 85.21, Close: 85.36 },\n    { xDate: new Date('2013-11-21'), Open: 85.38, High: 85.85, Low: 85.25, Close: 85.67 },\n    { xDate: new Date('2013-11-23'), Open: 85.8, High: 85.96, Low: 85.67, Close: 85.83 },\n    { xDate: new Date('2013-11-25'), Open: 86.07, High: 86.22, Low: 85.75, Close: 85.87 },\n    { xDate: new Date('2013-11-27'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-11-29'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-12-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },\n    { xDate: new Date('2013-12-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },\n    { xDate: new Date('2013-12-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },\n    { xDate: new Date('2013-12-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },\n    { xDate: new Date('2013-12-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },\n    { xDate: new Date('2013-12-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },\n    { xDate: new Date('2013-12-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },\n    { xDate: new Date('2013-12-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },\n    { xDate: new Date('2013-12-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },\n    { xDate: new Date('2013-12-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },\n    { xDate: new Date('2013-12-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },\n    { xDate: new Date('2013-12-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },\n    { xDate: new Date('2013-12-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },\n    { xDate: new Date('2013-12-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-12-29'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 }\n];\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/data-source.ts?");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue":
/*!************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_6df6a7b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6df6a7b4&scoped=true */ \"./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css */ \"./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_6df6a7b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-6df6a7b4\"],['__file',\"Samples/range-navigator/filter/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source */ \"./Samples/range-navigator/filter/data-source.ts\");\n\n\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-grid': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.GridComponent,\n    'e-columns': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.ColumnsDirective,\n    'e-column': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.ColumnDirective,\n    'ejs-rangenavigator': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.RangeNavigatorComponent\n  },\n  data: function() {\n    let gridDataSource;\n    return {\n      //Grid Properties\n      format: { skeleton: \"yMd\", type: \"date\" },\n      //Range Navigator Properties\n      value: [new Date(1992, 5, 1), new Date(1993, 4, 1)],\n      dataSource: _data_source__WEBPACK_IMPORTED_MODULE_3__.employeeData,\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? \"100%\" : \"80%\",\n      gridData: _data_source__WEBPACK_IMPORTED_MODULE_3__.employeeData,\n      theme: theme\n    };\n  },\n  provide: {\n    rangeNavigator: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.DateTime]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n        this.$refs.range.ej2Instances.refresh();\n        this.$refs.gridref.ej2Instances.refresh();\n      });\n    },\n  methods: {\n  \n    changed: function(args) {\n        this.$refs.gridref.ej2Instances.dataSource = _data_source__WEBPACK_IMPORTED_MODULE_3__.employeeData.filter(function(data) {\n          return (\n            data.HireDate >= new Date(+args.start) &&\n            data.HireDate <= new Date(+args.end)\n          );\n        });\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true":
/*!******************************************************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6df6a7b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6df6a7b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=6df6a7b4&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6df6a7b4\"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", {\n  id: \"days\",\n  align: \"center\",\n  style: {\"font-family\":\"Segoe UI\",\"font-weight\":\"500\",\"font-style\":\"normal\",\"font-size\":\"15px\"}\n}, \"Filter From Hire Date\", -1 /* HOISTED */))\nconst _hoisted_3 = { align: \"center\" }\nconst _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */))\nconst _hoisted_5 = { align: \"center\" }\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\" data-v-6df6a7b4><p data-v-6df6a7b4> This sample filters the data by hire date using date-time axis. </p></div><div id=\\\"description\\\" data-v-6df6a7b4><p data-v-6df6a7b4> In this example, you can see how to bind the value of the range navigator to the grid control using the <code data-v-6df6a7b4>changed</code> event. </p><p style=\\\"font-weight:500;\\\" data-v-6df6a7b4><b data-v-6df6a7b4>Injecting Module</b></p><p data-v-6df6a7b4> The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the <code data-v-6df6a7b4>DateTime</code> module using <code data-v-6df6a7b4>provide: { rangeNavigator: [DateTime] }</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_rangenavigator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-rangenavigator\")\n  const _component_e_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-column\")\n  const _component_e_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-columns\")\n  const _component_ejs_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-grid\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      _hoisted_2,\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_rangenavigator, {\n          style: {\"display\":\"block\"},\n          ref: \"range\",\n          align: \"center\",\n          id: \"containerFilter\",\n          value: _ctx.value,\n          height: \"75\",\n          labelPosition: \"Outside\",\n          valueType: \"DateTime\",\n          allowSnapping: \"true\",\n          intervalType: \"Quarter\",\n          enableGrouping: \"true,\",\n          groupBy: \"Years\",\n          enableDeferredUpdate: \"true\",\n          dataSource: _ctx.dataSource,\n          xName: \"HireDate\",\n          yName: \"yValue\",\n          width: _ctx.width,\n          changed: $options.changed,\n          theme: _ctx.theme,\n          animationDuration: \"500\"\n        }, null, 8 /* PROPS */, [\"value\", \"dataSource\", \"width\", \"changed\", \"theme\"])\n      ]),\n      _hoisted_4,\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_grid, {\n          id: \"grid\",\n          ref: \"gridref\",\n          dataSource: _ctx.gridData,\n          height: \"350\",\n          width: _ctx.width\n        }, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_columns, null, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                  field: \"EmployeeID\",\n                  headerText: \"Employee ID\",\n                  textAlign: \"Center\"\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                  field: \"FirstName\",\n                  headerText: \"Name\",\n                  textAlign: \"Center\"\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                  field: \"Title\",\n                  headerText: \"Title\",\n                  format: \"yMd\",\n                  textAlign: \"Center\"\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                  field: \"HireDate\",\n                  headerText: \"Hire Date\",\n                  format: _ctx.format,\n                  textAlign: \"Center\"\n                }, null, 8 /* PROPS */, [\"format\"])\n              ]),\n              _: 1 /* STABLE */\n            })\n          ]),\n          _: 1 /* STABLE */\n        }, 8 /* PROPS */, [\"dataSource\", \"width\"])\n      ])\n    ]),\n    _hoisted_6\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"2c88106e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/range-navigator/filter/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"range-navigator/filter/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_charts_vue_samples"] = self["webpackChunkej2_charts_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/range-navigator/filter/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;