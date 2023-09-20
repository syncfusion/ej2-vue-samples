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

/***/ "./Samples/grid/loading-animation/main.js":
/*!************************************************!*\
  !*** ./Samples/grid/loading-animation/main.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/grid/loading-animation/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#control-container[data-v-b7c541e0] {\\n        padding: 0px !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,uBAAuB;AAC/B\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#control-container[data-v-b7c541e0] {\\n        padding: 0px !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-grid': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.GridComponent,\n        'e-column': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.ColumnDirective,\n        'e-columns': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.ColumnsDirective,\n        'ejs-dropdownlist': _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListComponent\n    },\n    data: function () {\n        return {\n            data: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__.DataManager({\n                url: 'https://services.syncfusion.com/vue/production/api/UrlDataSource',\n                adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__.UrlAdaptor()\n            }),\n            pageSettings: { pageCount: 3 },\n            loadingIndicator: { indicatorType: 'Shimmer' },\n            fields: { text: 'name', value: 'id' },\n            indicatortypes: [\n                { id: 'Shimmer', name: 'Shimmer' },\n                { id: 'Spinner', name: 'Spinner' }\n            ]\n        };\n    },\n    methods: {\n        indicatorChange: function (e) {\n            if (this.$refs.dropdown.ej2Instances.value === \"Shimmer\") {\n                this.$refs.grid.ej2Instances.loadingIndicator.indicatorType = 'Shimmer';\n                this.$refs.grid.ej2Instances.refresh();\n            }\n            else {\n                this.$refs.grid.ej2Instances.loadingIndicator.indicatorType = 'Spinner';\n                this.$refs.grid.ej2Instances.refresh();\n            }\n        }\n    },\n    provide: {\n        grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Page, _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Sort, _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Filter]\n    }\n});\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _withScopeId = function (n) { return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-b7c541e0\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n); };\nvar _hoisted_1 = { class: \"col-lg-9 control-section\" };\nvar _hoisted_2 = { class: \"col-lg-3 property-section\" };\nvar _hoisted_3 = {\n    id: \"property\",\n    title: \"Properties\",\n    style: { \"width\": \"100%\", \"margin-left\": \"-10px\" }\n};\nvar _hoisted_4 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"colgroup\", null, [\n    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n        span: \"1\",\n        style: { \"width\": \"40%\" }\n    }),\n    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n        span: \"1\",\n        style: { \"width\": \"60%\" }\n    })\n], -1 /* HOISTED */); });\nvar _hoisted_5 = { style: { \"height\": \"50px\" } };\nvar _hoisted_6 = /*#__PURE__*/ _withScopeId(function () { /*#__PURE__*/ return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: { \"margin-left\": \"-10px\", \"width\": \"120%\" } }, \"Indicator Type\")\n], -1 /* HOISTED */); });\nvar _hoisted_7 = { style: { \"margin-left\": \"-10px\" } };\nvar _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\" data-v-b7c541e0><p data-v-b7c541e0>This sample shows the loading indicator while grid loading and refreshing when using remote data. In this sample, you can change the loading indicators from the properties panel. </p></div><div id=\\\"description\\\" data-v-b7c541e0><p data-v-b7c541e0> The grid has an option to show a loading indicator in-between the time of fetching the data and binding it to the grid during initial rendering or refreshing or after performing any grid action like sorting, filtering, grouping, and more. </p><p data-v-b7c541e0>The Grid supports the following loading indicator types. They are: </p><ul data-v-b7c541e0><li data-v-b7c541e0><code data-v-b7c541e0>Spinner</code></li><li data-v-b7c541e0><code data-v-b7c541e0>Shimmer</code></li></ul><p data-v-b7c541e0>Use the loading indicator by setting the <code data-v-b7c541e0>loadingIndicator.indicatorType</code> property as <code data-v-b7c541e0>Spinner</code> or <code data-v-b7c541e0>Shimmer</code>. The default value of the indicatorType is <code data-v-b7c541e0>Spinner</code>.</p><p data-v-b7c541e0> In this demo, the <code data-v-b7c541e0>Shimmer</code> type is initially enabled. If you want to use the default value of the loading indicator, use the dropdown to change it. </p></div>\", 2);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    var _component_e_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-column\");\n    var _component_e_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-columns\");\n    var _component_ejs_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-grid\");\n    var _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\");\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_grid, {\n                ref: \"grid\",\n                dataSource: _ctx.data,\n                allowPaging: true,\n                allowSorting: true,\n                allowFiltering: true,\n                pageSettings: _ctx.pageSettings,\n                loadingIndicator: _ctx.loadingIndicator\n            }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_columns, null, {\n                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"EmployeeID\",\n                                headerText: \"Employee ID\",\n                                width: \"130\",\n                                textAlign: \"Right\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"Employees\",\n                                headerText: \"Employee Name\",\n                                width: \"150\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"Designation\",\n                                headerText: \"Designation\",\n                                width: \"130\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"CurrentSalary\",\n                                headerText: \"Current Salary\",\n                                format: \"C2\",\n                                textAlign: \"Right\",\n                                width: \"140\"\n                            })\n                        ]; }),\n                        _: 1 /* STABLE */\n                    })\n                ]; }),\n                _: 1 /* STABLE */\n            }, 8 /* PROPS */, [\"dataSource\", \"pageSettings\", \"loadingIndicator\"])\n        ]),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_3, [\n                _hoisted_4,\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_5, [\n                        _hoisted_6,\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                                    ref: \"dropdown\",\n                                    id: \"dropdown\",\n                                    dataSource: _ctx.indicatortypes,\n                                    index: \"0\",\n                                    fields: _ctx.fields,\n                                    change: $options.indicatorChange\n                                }, null, 8 /* PROPS */, [\"dataSource\", \"fields\", \"change\"])\n                            ])\n                        ])\n                    ])\n                ])\n            ])\n        ]),\n        _hoisted_8\n    ]));\n}\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/grid/loading-animation/App.vue":
/*!************************************************!*\
  !*** ./Samples/grid/loading-animation/App.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_b7c541e0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true */ \"./Samples/grid/loading-animation/App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/grid/loading-animation/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_b7c541e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css */ \"./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_b7c541e0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-b7c541e0\"],['__file',\"Samples/grid/loading-animation/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?");

/***/ }),

/***/ "./Samples/grid/loading-animation/App.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./Samples/grid/loading-animation/App.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?");

/***/ }),

/***/ "./Samples/grid/loading-animation/App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true":
/*!**************************************************************************************************!*\
  !*** ./Samples/grid/loading-animation/App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_b7c541e0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_b7c541e0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=template&id=b7c541e0&scoped=true&ts=true\");\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?");

/***/ }),

/***/ "./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7c541e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7c541e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7c541e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7c541e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7c541e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/loading-animation/App.vue?vue&type=style&index=0&id=b7c541e0&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"2a5c567e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/loading-animation/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"grid/loading-animation/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_grid_vue_samples"] = self["webpackChunkej2_grid_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/grid/loading-animation/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;