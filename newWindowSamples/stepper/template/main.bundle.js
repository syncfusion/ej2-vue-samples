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

/***/ "./Samples/stepper/template/main.js":
/*!******************************************!*\
  !*** ./Samples/stepper/template/main.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/stepper/template/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#stepper-template.control-section {\\n        min-height: 600px;\\n}\\n.stepper-template-section {\\n        min-height: 450px;\\n        margin: 0 auto;\\n        text-align: center;\\n        padding-top: 3%;\\n}\\n#template-stepper button {\\n        padding: 5px 8px;\\n        margin: 0 10px 0 0;\\n}\\n#template-stepper .e-text-step {\\n        padding-left: 12px;\\n        font-size: 18px;\\n}\\n#template-stepper .stepper-content {\\n        position: absolute;\\n        width: 450px;\\n        text-align: left;\\n        top: 38px;\\n        left: 46px;\\n        font-size: 15px;\\n}\\n.e-bigger #template-stepper .stepper-content {\\n        left: 53px;\\n}\\n#template-stepper .e-step-template .e-step {\\n        border-radius: 0px;\\n        font-size: 16px;\\n}\\n#template-stepper .e-step-template.e-step-notstarted .e-step {\\n        border: 2px solid grey;\\n        background: white;\\n        color: transparent;\\n}\\n#template-stepper .e-step-template.e-step-completed .e-step,\\n    #template-stepper .e-step-template.e-step-inprogress .e-step {\\n        background: #63c1a2;\\n        color: white;\\n}\\n#template-stepper .e-step-template.e-step-inprogress .e-step {\\n        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #52aa86;\\n}\\n#template-stepper .e-step-template.e-step-inprogress .e-step::before {\\n        color: transparent;\\n}\\n#template-stepper .e-progressbar-value {\\n        background-color: #9adfc8;\\n}\\n@media only screen and (max-width: 960px) {\\n#template-stepper .stepper-content {\\n            width: 200px;\\n            font-size: 13px;\\n}\\n#stepper-template.control-section {\\n            min-height: 620px;\\n}\\n.stepper-template-section {\\n            min-height: 500px;\\n}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,iBAAiB;AACzB;AACA;QACQ,iBAAiB;QACjB,cAAc;QACd,kBAAkB;QAClB,eAAe;AACvB;AACA;QACQ,gBAAgB;QAChB,kBAAkB;AAC1B;AACA;QACQ,kBAAkB;QAClB,eAAe;AACvB;AACA;QACQ,kBAAkB;QAClB,YAAY;QACZ,gBAAgB;QAChB,SAAS;QACT,UAAU;QACV,eAAe;AACvB;AACA;QACQ,UAAU;AAClB;AACA;QACQ,kBAAkB;QAClB,eAAe;AACvB;AACA;QACQ,sBAAsB;QACtB,iBAAiB;QACjB,kBAAkB;AAC1B;AACA;;QAEQ,mBAAmB;QACnB,YAAY;AACpB;AACA;QACQ,6CAA6C;AACrD;AACA;QACQ,kBAAkB;AAC1B;AACA;QACQ,yBAAyB;AACjC;AACA;AACA;YACY,YAAY;YACZ,eAAe;AAC3B;AACA;YACY,iBAAiB;AAC7B;AACA;YACY,iBAAiB;AAC7B;AACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#stepper-template.control-section {\\n        min-height: 600px;\\n}\\n.stepper-template-section {\\n        min-height: 450px;\\n        margin: 0 auto;\\n        text-align: center;\\n        padding-top: 3%;\\n}\\n#template-stepper button {\\n        padding: 5px 8px;\\n        margin: 0 10px 0 0;\\n}\\n#template-stepper .e-text-step {\\n        padding-left: 12px;\\n        font-size: 18px;\\n}\\n#template-stepper .stepper-content {\\n        position: absolute;\\n        width: 450px;\\n        text-align: left;\\n        top: 38px;\\n        left: 46px;\\n        font-size: 15px;\\n}\\n.e-bigger #template-stepper .stepper-content {\\n        left: 53px;\\n}\\n#template-stepper .e-step-template .e-step {\\n        border-radius: 0px;\\n        font-size: 16px;\\n}\\n#template-stepper .e-step-template.e-step-notstarted .e-step {\\n        border: 2px solid grey;\\n        background: white;\\n        color: transparent;\\n}\\n#template-stepper .e-step-template.e-step-completed .e-step,\\n    #template-stepper .e-step-template.e-step-inprogress .e-step {\\n        background: #63c1a2;\\n        color: white;\\n}\\n#template-stepper .e-step-template.e-step-inprogress .e-step {\\n        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #52aa86;\\n}\\n#template-stepper .e-step-template.e-step-inprogress .e-step::before {\\n        color: transparent;\\n}\\n#template-stepper .e-progressbar-value {\\n        background-color: #9adfc8;\\n}\\n@media only screen and (max-width: 960px) {\\n#template-stepper .stepper-content {\\n            width: 200px;\\n            font-size: 13px;\\n}\\n#stepper-template.control-section {\\n            min-height: 620px;\\n}\\n.stepper-template-section {\\n            min-height: 500px;\\n}\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/stepper/template/App.vue":
/*!******************************************!*\
  !*** ./Samples/stepper/template/App.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_04f98b44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=04f98b44 */ \"./Samples/stepper/template/App.vue?vue&type=template&id=04f98b44\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/stepper/template/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_04f98b44_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=04f98b44&lang=css */ \"./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_04f98b44__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/stepper/template/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-stepper': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_0__.StepperComponent\n    },\n    data: function () {\n        return {\n            templateContent: [\n                \"<p>To get started, click the <b>Continue</b> button to move on to the next step.</p><button class='e-btn e-primary step-continue-button'>CONTINUE</button>\",\n                \"<p>This is the second step. To proceed to next step, click <b>Continue</b>; to go back to the previous step, click <b>Back</b> button.</p><button class='e-btn e-primary step-continue-button'>CONTINUE</button><button class='e-btn step-back-button'>BACK</button>\",\n                \"<p>If everything looks correct, click <b>Continue</b> to move on.<br/>If not, you can click <b>Back</b> to revisit the previous step.</p><button class='e-btn e-primary step-continue-button'>CONTINUE</button><button class='e-btn step-back-button'>BACK</button>\",\n                \"<p>Congratulations! You've reached the final step.</p><button class='e-btn e-primary step-finish-button'>FINISH</button><button class='e-btn step-back-button'>BACK</button>\"\n            ],\n            finishContent: \"<p>Congratulations! You've reached the final step.</p><button class='e-btn e-primary step-finish-button'>FINISH</button><button class='e-btn step-back-button'>BACK</button>\",\n            resetContent: \"<p>To start over again with the first step, click <b>Reset</b>.</p><button class='e-btn e-primary step-reset-button'>RESET</button>\",\n            stepperTemplate: [\n                { iconCss: 'e-icons e-check', text: 'Step 1' },\n                { iconCss: 'e-icons e-check', text: 'Step 2' },\n                { iconCss: 'e-icons e-check', text: 'Step 3' },\n                { iconCss: 'e-icons e-check', text: 'Step 4' }\n            ]\n        };\n    },\n    methods: {\n        createDefault: function () {\n            this.$refs.stepper.ej2Instances.activeStep = 1;\n            this.handleContent(this.$refs.stepper.ej2Instances, false);\n            // for initial continue button..\n            this.bindEventListeners(this.$refs.stepper.ej2Instances.activeStep);\n        },\n        handleStepClick: function (args) {\n            this.handleContent(args, args.previousStep > args.activeStep ? true : false);\n        },\n        bindEventListeners: function (activeStep) {\n            let continueBtn = document.querySelector('.step-continue-button');\n            let backBtn = document.querySelector('.step-back-button');\n            let finishBtn = document.querySelector('.step-finish-button');\n\n            const clickHandler = (action, type) => (event) => {\n                event.stopPropagation();\n                this.clickAction(action, type);\n            };\n            switch (activeStep) {\n                case 0:\n                    if(continueBtn) continueBtn.addEventListener('click', clickHandler(false, 'continue'));\n                    break;\n\n                case 1:\n                case 2:\n                    if(continueBtn) continueBtn.addEventListener('click', clickHandler(false, 'continue'));\n                    if(backBtn) backBtn.addEventListener('click', clickHandler(true, 'back'));\n                    break;\n\n                case 3:\n                    if(finishBtn) finishBtn.addEventListener('click', (event) => {\n                        clickHandler(false, 'finish')(event);\n                        let resetBtn = document.querySelector('.step-reset-button');\n                        if(resetBtn) resetBtn.addEventListener('click', clickHandler(false, 'reset'));\n                    });\n                    if(backBtn) backBtn.addEventListener('click', clickHandler(true, 'back'));\n                    break;\n            }\n        },\n        clickAction: function (isBackButton, buttonType) {\n            switch (buttonType) {\n                case 'continue':\n                    this.$refs.stepper.ej2Instances.nextStep();\n                    break;\n                case 'back':\n                    this.$refs.stepper.ej2Instances.previousStep();\n                    break;\n            }\n            this.updateContent(this.$refs.stepper.ej2Instances, isBackButton, buttonType);\n        },\n        updateContent: function (stepperObj, isBackButton, buttonType) {\n            if (buttonType === 'continue' || buttonType === 'back') {\n                this.handleContent(stepperObj, isBackButton);\n            }\n            if (buttonType === 'finish' || buttonType === 'reset') {\n                let activeElement = document.querySelectorAll('.stepper-content');\n                if (buttonType === 'finish') {\n                    activeElement[stepperObj.activeStep].innerHTML = this.resetContent;\n                    stepperObj.steps[stepperObj.activeStep].status = 'completed';\n                }\n                if (buttonType === 'reset') {\n                    activeElement[stepperObj.activeStep].innerHTML = this.finishContent;\n                    activeElement[stepperObj.activeStep].innerHTML = '';\n                    stepperObj.reset();\n                    activeElement[stepperObj.activeStep].innerHTML = this.templateContent[stepperObj.activeStep];\n                }\n            }\n            // for subsequent buttons when navigating..\n            this.bindEventListeners(stepperObj.activeStep);\n        },\n        handleContent: function (args, isBackClicked) {\n            let activeElement = document.querySelectorAll('.stepper-content');\n            activeElement[args.activeStep].innerHTML = this.templateContent[args.activeStep];\n            if (activeElement && !isBackClicked) {\n                activeElement[args.activeStep - 1].innerHTML = '';\n            }\n            if (isBackClicked) {\n                if (activeElement[args.activeStep + 1])\n                    activeElement[args.activeStep + 1].innerHTML = '';\n            }\n        }\n    },\n});\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/stepper/template/App.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./Samples/stepper/template/App.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?");

/***/ }),

/***/ "./Samples/stepper/template/App.vue?vue&type=template&id=04f98b44":
/*!************************************************************************!*\
  !*** ./Samples/stepper/template/App.vue?vue&type=template&id=04f98b44 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_04f98b44__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_04f98b44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=04f98b44 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=template&id=04f98b44\");\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?");

/***/ }),

/***/ "./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css":
/*!**************************************************************************************!*\
  !*** ./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_04f98b44_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=04f98b44&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_04f98b44_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_04f98b44_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_04f98b44_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_04f98b44_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=template&id=04f98b44":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=template&id=04f98b44 ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = {\n  id: \"stepper-template\",\n  class: \"control-section\"\n}\nconst _hoisted_2 = { class: \"stepper-template-section\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"This sample showcases the customization of each step using the template support in the Stepper.\")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"In this example, Stepper steps are customized using the \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"code\", null, \"template\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" property. Template customization allows us to define unique visual styles for various progress states within the Stepper, including their indicators and progress bars.\")\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-stepper\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_stepper, {\n          id: \"template-stepper\",\n          steps: _ctx.stepperTemplate,\n          linear: \"true\",\n          orientation: \"vertical\",\n          stepClick: (args) => $options.handleStepClick(args),\n          template: \"<span class=\\\"e-step ${step.iconCss}\\\"></span><span class=\\\"e-text-step\\\">${step.text}</span><br><br><div class=\\\"stepper-content\\\"></div>\",\n          ref: \"stepper\",\n          created: $options.createDefault\n        }, null, 8 /* PROPS */, [\"steps\", \"stepClick\", \"created\"])\n      ])\n    ]),\n    _hoisted_3,\n    _hoisted_4\n  ], 64 /* STABLE_FRAGMENT */))\n}\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=04f98b44&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stepper/template/App.vue?vue&type=style&index=0&id=04f98b44&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"18b9e70c\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/stepper/template/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"stepper/template/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_navigations_vue_samples"] = self["webpackChunkej2_navigations_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/stepper/template/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;