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

/***/ "./Samples/sparkline/live-update/main.js":
/*!***********************************************!*\
  !*** ./Samples/sparkline/live-update/main.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sparkline/live-update/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n.spark[data-v-1d7bd18c] {\\n        float: left;\\n        width: 95%;\\n        margin-left: 3%;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,WAAW;QACX,UAAU;QACV,eAAe;AACvB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n.spark[data-v-1d7bd18c] {\\n        float: left;\\n        width: 95%;\\n        margin-left: 3%;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sparkline/live-update/liveupdate.ts":
/*!*****************************************************!*\
  !*** ./Samples/sparkline/live-update/liveupdate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data),\n/* harmony export */   data2: () => (/* binding */ data2),\n/* harmony export */   data3: () => (/* binding */ data3),\n/* harmony export */   data4: () => (/* binding */ data4)\n/* harmony export */ });\n// tslint:disable\nvar data = [\n    { x: 0, yval: 50 },\n    { x: 1, yval: 30 },\n    { x: 2, yval: 20 },\n    { x: 3, yval: 30 },\n    { x: 4, yval: 50 },\n    { x: 5, yval: 40 },\n    { x: 6, yval: 20 },\n    { x: 7, yval: 10 },\n    { x: 8, yval: 30 },\n    { x: 9, yval: 10 },\n    { x: 10, yval: 40 },\n    { x: 11, yval: 50 },\n    { x: 12, yval: 10 },\n    { x: 13, yval: 30 },\n    { x: 14, yval: 50 },\n    { x: 15, yval: 20 },\n    { x: 16, yval: 10 },\n    { x: 17, yval: 40 },\n    { x: 18, yval: 30 },\n    { x: 19, yval: 40 }\n];\nvar data2 = [\n    { x: 0, yval: 6.05 },\n    { x: 1, yval: 6.03 },\n    { x: 2, yval: 6.02 },\n    { x: 3, yval: 6.07 },\n    { x: 4, yval: 6.05 },\n    { x: 5, yval: 6.09 },\n    { x: 6, yval: 6.08 },\n    { x: 7, yval: 6.01 },\n    { x: 8, yval: 6.03 },\n    { x: 9, yval: 6.01 },\n    { x: 10, yval: 6.07 },\n    { x: 11, yval: 6.05 },\n    { x: 12, yval: 6.01 },\n    { x: 13, yval: 6.06 },\n    { x: 14, yval: 6.05 },\n    { x: 15, yval: 6.03 },\n    { x: 16, yval: 6.01 },\n    { x: 17, yval: 6.09 },\n    { x: 18, yval: 6.06 },\n    { x: 19, yval: 6.05 }\n];\nvar data3 = [\n    { x: 0, yval: 50 },\n    { x: 1, yval: 30 },\n    { x: 2, yval: 20 },\n    { x: 3, yval: 70 },\n    { x: 4, yval: 50 },\n    { x: 5, yval: 20 },\n    { x: 6, yval: 80 },\n    { x: 7, yval: 10 },\n    { x: 8, yval: 30 },\n    { x: 9, yval: 10 },\n    { x: 10, yval: 70 },\n    { x: 11, yval: 50 },\n    { x: 12, yval: 10 },\n    { x: 13, yval: 60 },\n    { x: 14, yval: 50 },\n    { x: 15, yval: 30 },\n    { x: 16, yval: 10 },\n    { x: 17, yval: 20 },\n    { x: 18, yval: 60 },\n    { x: 19, yval: 50 }\n];\nvar data4 = [\n    { x: 0, yval: 50 },\n    { x: 1, yval: 30 },\n    { x: 2, yval: 20 },\n    { x: 3, yval: 70 },\n    { x: 4, yval: 50 },\n    { x: 5, yval: 20 },\n    { x: 6, yval: 80 },\n    { x: 7, yval: 10 },\n    { x: 8, yval: 30 },\n    { x: 9, yval: 10 },\n    { x: 10, yval: 70 },\n    { x: 11, yval: 50 },\n    { x: 12, yval: 10 },\n    { x: 13, yval: 60 },\n    { x: 14, yval: 50 },\n    { x: 15, yval: 30 },\n    { x: 16, yval: 10 },\n    { x: 17, yval: 20 },\n    { x: 18, yval: 60 },\n    { x: 19, yval: 50 }\n];\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/liveupdate.ts?");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue":
/*!***********************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1d7bd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1d7bd18c&scoped=true */ \"./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css */ \"./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1d7bd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-1d7bd18c\"],['__file',\"Samples/sparkline/live-update/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _liveupdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveupdate */ \"./Samples/sparkline/live-update/liveupdate.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-sparkline': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SparklineComponent\n},\ndata:function(){\nreturn{\n        height: '130px',\n        width: '90%',\n        axisSettings: {\n            minY: 0, maxY: 150\n        },\n        containerArea: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border: {\n            color: '#0358a0',\n            width: 1\n        },\n        fill: '#e8f2fc',\n        type: 'Area',\n        valueType: 'Numeric',\n        dataSource: _liveupdate__WEBPACK_IMPORTED_MODULE_1__.data,\n        axisSettings2: {\n            minY: 4, maxY: 8\n        },\n        containerArea2: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border2: {\n            color: '#b247c6',\n            width: 1\n        },\n        fill2:'#f5e8fc',\n        dataSource2: _liveupdate__WEBPACK_IMPORTED_MODULE_1__.data2,\n        axisSettings3: {\n            minY: 0, maxY: 130\n        },\n        containerArea3: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border3: {\n            color: '#27ad66',\n            width: 1\n        },\n        fill3: '#e0f9d1',\n        dataSource3: _liveupdate__WEBPACK_IMPORTED_MODULE_1__.data3,\n        axisSettings4: {\n            minY: 0, maxY: 100\n        },\n        containerArea4: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border4: {\n            color: '#AA907A',\n            width: 1\n        },\n        fill4: '#F2D8C7',\n        dataSource4: _liveupdate__WEBPACK_IMPORTED_MODULE_1__.data4,\n         lineWidth: 1\n}\n},\nmounted(){\n    this.update();\n    this.update1();\n    this.update2();\n    this.update3();\n},\nmethods:{\n    /* custom code start */\n     load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material';\n        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n    },\n    /* custom code end */\n    update: function() {\n        let spark = document.getElementById('spark-container1');\n        let gauge = this.$refs.spark1.ej2Instances;\n        let temp1 = gauge.dataSource.length - 1;\n        this.update = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = ((Math.random() * 100) + 5) % 50;\n                gauge.dataSource.push({ x: ++temp1, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let cpu = document.getElementById('cpu');\n                if (cpu) {\n                cpu.innerHTML = ((value / 150) * 100).toFixed(0) + '% ' + ((value * 3) / 100).toFixed(2) + 'GHz';\n                }\n            }\n        }, 500);\n    },\n    update1: function() {\n        let spark1 = document.getElementById('spark-container2');\n        let gauge = this.$refs.spark2.ej2Instances;\n        let temp2 = gauge.dataSource.length - 1;\n        this.update1 = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = Math.random();\n                if (value > 0.6) {\n                    value = 6 + (value / 10);\n                } else {\n                    value = 6 - (value / 10);\n                }\n                gauge.dataSource.push({ x: ++temp2, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let memory = document.getElementById('memory');\n                let gb = parseFloat(value.toString().replace('0', '')).toFixed(1);\n                if (memory) {\n                memory.innerHTML = gb + '/15.8 GB (' + ((value / 15.8) * 100).toFixed(0) + '%)';\n                }\n            }\n        }, 500);\n    },\n    update2: function() {\n        let spark2 = document.getElementById('spark-container3');\n        let gauge = this.$refs.spark3.ej2Instances;\n        let temp3 = gauge.dataSource.length - 1;\n        this.update2 = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = ((Math.random() * 100) + 5) % 80;\n                gauge.dataSource.push({ x: ++temp3, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let disk = document.getElementById('disk');\n                if (disk) {\n                disk.innerHTML = value.toFixed(0) + '%';\n                }\n            }\n        }, 500);\n    },\n    update3: function() {\n        let spark3 = document.getElementById('spark-container4');\n        let gauge = this.$refs.spark4.ej2Instances;\n        let temp4 = gauge.dataSource.length - 1;\n        this.update3 = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = ((Math.random() * 100) + 5) % 80;\n                gauge.dataSource.push({ x: ++temp4, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let net = document.getElementById('net');\n                if (net) {\n                net.innerHTML = 'R: ' + value.toFixed(0) + 'Kbps';\n                }\n            }\n        }, 500);\n    }\n}\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1d7bd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1d7bd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1d7bd18c&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-1d7bd18c\"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)\nconst _hoisted_1 = {\n  class: \"control-section\",\n  align: \"center\"\n}\nconst _hoisted_2 = {\n  id: \"spark-container\",\n  class: \"row\"\n}\nconst _hoisted_3 = {\n  class: \"cols-sample-area\",\n  align: \"center\",\n  style: {\"margin-top\":\"8%\"}\n}\nconst _hoisted_4 = {\n  align: \"center\",\n  class: \"col-lg-3 col-m-3 col-sm-6\"\n}\nconst _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"12px\",\"position\":\"absolute\",\"margin-top\":\"10px\",\"margin-left\":\"12%\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"CPU\")\n], -1 /* HOISTED */))\nconst _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"cpu\",\n  style: {\"color\":\"#0877d6\",\"position\":\"absolute\",\"margin-top\":\"25px\",\"margin-left\":\"12%\"}\n}, \"26% 1.2GHz\", -1 /* HOISTED */))\nconst _hoisted_7 = {\n  align: \"center\",\n  class: \"col-lg-3 col-m-3 col-sm-6\"\n}\nconst _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"12px\",\"position\":\"absolute\",\"margin-top\":\"10px\",\"margin-left\":\"12%\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Disk\")\n], -1 /* HOISTED */))\nconst _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"disk\",\n  style: {\"color\":\"#b247c6\",\"position\":\"absolute\",\"margin-top\":\"25px\",\"margin-left\":\"12%\"}\n}, \"50%\", -1 /* HOISTED */))\nconst _hoisted_10 = {\n  align: \"center\",\n  class: \"col-lg-3 col-m-3 col-sm-6\"\n}\nconst _hoisted_11 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"12px\",\"position\":\"absolute\",\"margin-top\":\"10px\",\"margin-left\":\"12%\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Memory\")\n], -1 /* HOISTED */))\nconst _hoisted_12 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"memory\",\n  style: {\"color\":\"#5bcc8f\",\"position\":\"absolute\",\"margin-top\":\"25px\",\"margin-left\":\"12%\"}\n}, \"6.5/15.8 GB (41%)\", -1 /* HOISTED */))\nconst _hoisted_13 = {\n  align: \"center\",\n  class: \"col-lg-3 col-m-3 col-sm-6\"\n}\nconst _hoisted_14 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"12px\",\"position\":\"absolute\",\"margin-top\":\"10px\",\"margin-left\":\"12%\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Ethernet\")\n], -1 /* HOISTED */))\nconst _hoisted_15 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"net\",\n  style: {\"color\":\"#d1a990\",\"position\":\"absolute\",\"margin-top\":\"25px\",\"margin-left\":\"12%\"}\n}, \"R: 50Kbps\", -1 /* HOISTED */))\nconst _hoisted_16 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample depicts the various customization options available in sparklines. \")\n], -1 /* HOISTED */))\nconst _hoisted_17 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, you can see various customization options available in sparklines. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices. \")\n], -1 /* HOISTED */))\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_sparkline = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-sparkline\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sparkline, {\n              ref: \"spark1\",\n              class: \"spark\",\n              load: $options.load,\n              id: \"spark-container1\",\n              height: _ctx.height,\n              width: _ctx.width,\n              type: _ctx.type,\n              valueType: _ctx.valueType,\n              fill: _ctx.fill,\n              dataSource: _ctx.dataSource,\n              axisSettings: _ctx.axisSettings,\n              containerArea: _ctx.containerArea,\n              border: _ctx.border,\n              xName: \"x\",\n              yName: \"yval\"\n            }, null, 8 /* PROPS */, [\"load\", \"height\", \"width\", \"type\", \"valueType\", \"fill\", \"dataSource\", \"axisSettings\", \"containerArea\", \"border\"]),\n            _hoisted_5,\n            _hoisted_6\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sparkline, {\n              ref: \"spark2\",\n              class: \"spark\",\n              load: $options.load,\n              id: \"spark-container2\",\n              height: _ctx.height,\n              width: _ctx.width,\n              lineWidth: _ctx.lineWidth,\n              type: _ctx.type,\n              valueType: _ctx.valueType,\n              fill: _ctx.fill2,\n              dataSource: _ctx.dataSource2,\n              axisSettings: _ctx.axisSettings2,\n              containerArea: _ctx.containerArea2,\n              border: _ctx.border2,\n              xName: \"x\",\n              yName: \"yval\"\n            }, null, 8 /* PROPS */, [\"load\", \"height\", \"width\", \"lineWidth\", \"type\", \"valueType\", \"fill\", \"dataSource\", \"axisSettings\", \"containerArea\", \"border\"]),\n            _hoisted_8,\n            _hoisted_9\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sparkline, {\n              ref: \"spark3\",\n              class: \"spark\",\n              load: $options.load,\n              id: \"spark-container3\",\n              height: _ctx.height,\n              width: _ctx.width,\n              lineWidth: _ctx.lineWidth,\n              type: _ctx.type,\n              valueType: _ctx.valueType,\n              fill: _ctx.fill3,\n              dataSource: _ctx.dataSource3,\n              axisSettings: _ctx.axisSettings3,\n              containerArea: _ctx.containerArea3,\n              border: _ctx.border3,\n              xName: \"x\",\n              yName: \"yval\"\n            }, null, 8 /* PROPS */, [\"load\", \"height\", \"width\", \"lineWidth\", \"type\", \"valueType\", \"fill\", \"dataSource\", \"axisSettings\", \"containerArea\", \"border\"]),\n            _hoisted_11,\n            _hoisted_12\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sparkline, {\n              ref: \"spark4\",\n              class: \"spark\",\n              load: $options.load,\n              id: \"spark-container4\",\n              height: _ctx.height,\n              width: _ctx.width,\n              lineWidth: _ctx.lineWidth,\n              type: _ctx.type,\n              valueType: _ctx.valueType,\n              fill: _ctx.fill4,\n              dataSource: _ctx.dataSource4,\n              axisSettings: _ctx.axisSettings4,\n              containerArea: _ctx.containerArea4,\n              border: _ctx.border4,\n              xName: \"x\",\n              yName: \"yval\"\n            }, null, 8 /* PROPS */, [\"load\", \"height\", \"width\", \"lineWidth\", \"type\", \"valueType\", \"fill\", \"dataSource\", \"axisSettings\", \"containerArea\", \"border\"]),\n            _hoisted_14,\n            _hoisted_15\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_16,\n    _hoisted_17\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"51c8ada2\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/live-update/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"sparkline/live-update/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/sparkline/live-update/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;