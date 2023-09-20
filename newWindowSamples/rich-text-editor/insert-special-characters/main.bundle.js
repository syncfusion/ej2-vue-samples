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

/***/ "./Samples/rich-text-editor/insert-special-characters/main.js":
/*!********************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/main.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/insert-special-characters/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        display: inline-block;\\n}\\n#custom_tbar[data-v-7bc50845],\\n    #custom_tbar div[data-v-7bc50845]{\\n        cursor: pointer;\\n        font-size: 16px;\\n}\\n.e-bigger #custom_tbar div[data-v-7bc50845] {\\n        font-size: 18px;\\n}\\n#rteSection[data-v-7bc50845] {\\n        height: 350px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 0;\\n}\\n.material #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #e3165b;\\n        border-color: #e3165b;\\n}\\n.material-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #56a4fd;\\n        border-color: #56a4fd;\\n}\\n.fabric #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fabric-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078d6;\\n        border-color: #0078d6;\\n}\\n.bootstrap4 #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #007bff;\\n        border-color: #007bff;\\n}\\n.bootstrap #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #317ab9;\\n        border-color: #317ab9;\\n}\\n.highcontrast #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #ffd939;\\n        border-color: #ffd939;\\n}\\n.tailwind #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #3730a3;\\n        border-color: #3730a3;\\n}\\n.tailwind-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #22d3ee;\\n        border-color: #22d3ee;\\n}\\n.bootstrap5 #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap5-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0D6EFD;\\n        border-color: #0D6EFD;\\n}\\n.fluent #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fluent-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078DE;\\n        border-color: #0078DE;\\n}\\n.material3 .e-rte-custom-tbar-section .char_block.e-active[data-v-7bc50845],\\n    .material3-dark .e-rte-custom-tbar-section .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #7D69B1;\\n        border-color: #7D69B1;\\n}\\n.fabric.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 10px;\\n}\\n.bootstrap.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .bootstrap .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 6px;\\n}\\n.fabric .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 8px;\\n}\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        width: 30px;\\n        height: 30px;\\n        line-height: 30px;\\n        margin: 0 5px 5px 0;\\n        text-align: center;\\n        vertical-align: middle;\\n        border: 1px solid #DDDDDD;\\n        font-size: 20px;\\n        cursor: pointer;\\n        user-select: none;\\n}\\n@media (min-width: 320px) and (max-width: 480px) {\\n.fabric.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 281px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 20px;\\n}\\n.fabric #rteDialog[data-v-7bc50845] {\\n            min-width: 241px;\\n}\\n.bootstrap.e-bigger #rteDialog[data-v-7bc50845],\\n        .bootstrap #rteDialog[data-v-7bc50845] {\\n            min-width: 223px;\\n}\\n.highcontrast.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 283px;\\n}\\n.highcontrast #rteDialog[data-v-7bc50845] {\\n            min-width: 243px;\\n}\\n.material #rteDialog[data-v-7bc50845] {\\n            min-width: 224px;\\n}\\n.material.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 236px;\\n}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,qBAAqB;AAC7B;AACA;;QAEQ,eAAe;QACf,eAAe;AACvB;AACA;QACQ,eAAe;AACvB;AACA;QACQ,aAAa;AACrB;AACA;QACQ,sBAAsB;AAC9B;AACA;QACQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;QACQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;;QAEQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;QACQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;;QAEQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;QACQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;QACQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;QACQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;;QAEQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;;QAEQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;;QAEQ,0BAA0B;QAC1B,qBAAqB;AAC7B;AACA;;QAEQ,mBAAmB;AAC3B;AACA;;QAEQ,kBAAkB;AAC1B;AACA;;QAEQ,kBAAkB;AAC1B;AACA;QACQ,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,mBAAmB;QACnB,kBAAkB;QAClB,sBAAsB;QACtB,yBAAyB;QACzB,eAAe;QACf,eAAe;QACf,iBAAiB;AACzB;AACA;AACA;YACY,gBAAgB;AAC5B;AACA;QACQ,yBAAyB;AACjC;AACA;YACY,gBAAgB;AAC5B;AACA;;YAEY,gBAAgB;AAC5B;AACA;YACY,gBAAgB;AAC5B;AACA;YACY,gBAAgB;AAC5B;AACA;YACY,gBAAgB;AAC5B;AACA;YACY,gBAAgB;AAC5B;AACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        display: inline-block;\\n}\\n#custom_tbar[data-v-7bc50845],\\n    #custom_tbar div[data-v-7bc50845]{\\n        cursor: pointer;\\n        font-size: 16px;\\n}\\n.e-bigger #custom_tbar div[data-v-7bc50845] {\\n        font-size: 18px;\\n}\\n#rteSection[data-v-7bc50845] {\\n        height: 350px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 0;\\n}\\n.material #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #e3165b;\\n        border-color: #e3165b;\\n}\\n.material-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #56a4fd;\\n        border-color: #56a4fd;\\n}\\n.fabric #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fabric-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078d6;\\n        border-color: #0078d6;\\n}\\n.bootstrap4 #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #007bff;\\n        border-color: #007bff;\\n}\\n.bootstrap #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #317ab9;\\n        border-color: #317ab9;\\n}\\n.highcontrast #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #ffd939;\\n        border-color: #ffd939;\\n}\\n.tailwind #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #3730a3;\\n        border-color: #3730a3;\\n}\\n.tailwind-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #22d3ee;\\n        border-color: #22d3ee;\\n}\\n.bootstrap5 #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap5-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0D6EFD;\\n        border-color: #0D6EFD;\\n}\\n.fluent #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fluent-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078DE;\\n        border-color: #0078DE;\\n}\\n.material3 .e-rte-custom-tbar-section .char_block.e-active[data-v-7bc50845],\\n    .material3-dark .e-rte-custom-tbar-section .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #7D69B1;\\n        border-color: #7D69B1;\\n}\\n.fabric.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 10px;\\n}\\n.bootstrap.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .bootstrap .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 6px;\\n}\\n.fabric .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 8px;\\n}\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        width: 30px;\\n        height: 30px;\\n        line-height: 30px;\\n        margin: 0 5px 5px 0;\\n        text-align: center;\\n        vertical-align: middle;\\n        border: 1px solid #DDDDDD;\\n        font-size: 20px;\\n        cursor: pointer;\\n        user-select: none;\\n}\\n@media (min-width: 320px) and (max-width: 480px) {\\n.fabric.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 281px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 20px;\\n}\\n.fabric #rteDialog[data-v-7bc50845] {\\n            min-width: 241px;\\n}\\n.bootstrap.e-bigger #rteDialog[data-v-7bc50845],\\n        .bootstrap #rteDialog[data-v-7bc50845] {\\n            min-width: 223px;\\n}\\n.highcontrast.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 283px;\\n}\\n.highcontrast #rteDialog[data-v-7bc50845] {\\n            min-width: 243px;\\n}\\n.material #rteDialog[data-v-7bc50845] {\\n            min-width: 224px;\\n}\\n.material.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 236px;\\n}\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue":
/*!********************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7bc50845_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7bc50845&scoped=true */ \"./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css */ \"./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7bc50845_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-7bc50845\"],['__file',\"Samples/rich-text-editor/insert-special-characters/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n      'ejs-richtexteditor': _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.RichTextEditorComponent,\n      'ejs-dialog': _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__.DialogComponent\n    },\n    data: function() {\n        return {\n            selection: new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.NodeSelection(),\n            range: null,\n            customBtn: null,\n            dialogCtn: null,\n            saveSelection: new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.NodeSelection(),\n            target: document.getElementById('rteSampleContainer'),\n            header: 'Special Characters',\n            visible: false,\n            modal: true,\n            showCloseIcon: false,\n            dlgButtons: [{ click: this.onInsert.bind(this), buttonModel: { isPrimary:'true', content: 'Insert' } }, { buttonModel: { content: 'Cancel' }, click: this.dialogOverlay.bind(this) }],\n            toolbarSettings: {\n                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',\n                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',\n                {\n                    tooltipText: 'Insert Symbol',\n                    template: '<button class=\"e-tbar-btn e-btn\" tabindex=\"-1\" id=\"custom_tbar\"  style=\"width:100%\"><div class=\"e-tbar-btn-text\" style=\"font-weight: 500;\"> &#937;</div></button>'\n                }, '|', 'Undo', 'Redo']\n            },\n        };\n    },\n    methods: {\n        onCreate: function() {\n        this.customBtn = document.getElementById('custom_tbar');\n         this.$refs.dialogObj.ej2Instances.target = document.getElementById('rteSection');\n         var proxy = this;\n        this.customBtn.onclick = function () {\n            proxy.$refs.rteObj.ej2Instances.contentModule.getEditPanel().focus();\n            proxy.range = proxy.selection.getRange(document);\n            proxy.saveSelection = proxy.selection.save(proxy.range, document);\n            proxy.$refs.dialogObj.ej2Instances.content = document.getElementById('rteSpecial_char');\n            proxy.$refs.dialogObj.ej2Instances.dataBind();\n            proxy.$refs.dialogObj.show();\n        };\n        },\n        actionComplete: function(args) {\n           if (args.requestType === 'SourceCode') {\n            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbar').parentElement.classList.add('e-overlay');\n        } else if (args.requestType === 'Preview') {\n            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbar').parentElement.classList.remove('e-overlay');\n        }\n        },\n        dialogCreate: function() {\n            var dialogCtn = document.getElementById('rteSpecial_char');\n            var proxy = this;\n            dialogCtn.onclick = function (e) {\n            var target = e.target;\n            var activeEle = proxy.$refs.dialogObj.$el.querySelector('.char_block.e-active');\n            if (target.classList.contains('char_block')) {\n                target.classList.add('e-active');\n                if (activeEle) {\n                    activeEle.classList.remove('e-active');\n                }\n            }\n        };\n        }, \n        onInsert: function() {\n            var activeEle = this.$refs.dialogObj.$el.querySelector('.char_block.e-active');\n            if (activeEle) {\n                if (this.$refs.rteObj.ej2Instances.formatter.getUndoRedoStack().length === 0) {\n                 this.$refs.rteObj.ej2Instances.formatter.saveData();\n                }\n                this.saveSelection.restore();\n                this.$refs.rteObj.ej2Instances.executeCommand('insertText', activeEle.textContent);\n                this.$refs.rteObj.ej2Instances.formatter.saveData();\n                this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);\n            }\n            this.dialogOverlay();\n        },\n        dialogOverlay: function() {\n             var activeEle = this.$refs.dialogObj.$el.querySelector('.char_block.e-active');\n            if (activeEle) {\n                activeEle.classList.remove('e-active');\n            }\n            this.$refs.dialogObj.hide();\n        }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.Toolbar, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.Link, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.Image, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.Count, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.HtmlEditor, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_0__.QuickToolbar]\n    }\n});\n\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7bc50845_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7bc50845_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=7bc50845&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-7bc50845\"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { class: \"sample-container\" }\nconst _hoisted_3 = {\n  class: \"default-section\",\n  id: \"rteSection\"\n}\nconst _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", { style: {\"margin-right\":\"10px\"} }, \"The custom command \\\"insert special character\\\" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.\", -1 /* HOISTED */))\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"customTbarDialog\\\" style=\\\"display:none;\\\" data-v-7bc50845><div id=\\\"rteSpecial_char\\\" data-v-7bc50845><div class=\\\"char_block\\\" title=\\\"^\\\" data-v-7bc50845>^</div><div class=\\\"char_block\\\" title=\\\"_\\\" data-v-7bc50845>_</div><div class=\\\"char_block\\\" title=\\\"`\\\" data-v-7bc50845>`</div><div class=\\\"char_block\\\" title=\\\"{\\\" data-v-7bc50845>{</div><div class=\\\"char_block\\\" title=\\\"|\\\" data-v-7bc50845>|</div><div class=\\\"char_block\\\" title=\\\"}\\\" data-v-7bc50845>}</div><div class=\\\"char_block\\\" title=\\\"~\\\" data-v-7bc50845>~</div><div class=\\\"char_block\\\" title=\\\" \\\" data-v-7bc50845> </div><div class=\\\"char_block\\\" title=\\\"¡\\\" data-v-7bc50845>¡</div><div class=\\\"char_block\\\" title=\\\"¢\\\" data-v-7bc50845>¢</div><div class=\\\"char_block\\\" title=\\\"£\\\" data-v-7bc50845>£</div><div class=\\\"char_block\\\" title=\\\"¤\\\" data-v-7bc50845>¤</div><div class=\\\"char_block\\\" title=\\\"¥\\\" data-v-7bc50845>¥</div><div class=\\\"char_block\\\" title=\\\"₹\\\" data-v-7bc50845>₹</div><div class=\\\"char_block\\\" title=\\\"¦\\\" data-v-7bc50845>¦</div><div class=\\\"char_block\\\" title=\\\"§\\\" data-v-7bc50845>§</div><div class=\\\"char_block\\\" title=\\\"¨\\\" data-v-7bc50845>¨</div><div class=\\\"char_block\\\" title=\\\"©\\\" data-v-7bc50845>©</div><div class=\\\"char_block\\\" title=\\\"ª\\\" data-v-7bc50845>ª</div><div class=\\\"char_block\\\" title=\\\"«\\\" data-v-7bc50845>«</div><div class=\\\"char_block\\\" title=\\\"¬\\\" data-v-7bc50845>-</div><div class=\\\"char_block\\\" title=\\\"­\\\" data-v-7bc50845>­</div><div class=\\\"char_block\\\" title=\\\"®\\\" data-v-7bc50845>®</div><div class=\\\"char_block\\\" title=\\\"¯\\\" data-v-7bc50845>¯</div><div class=\\\"char_block\\\" title=\\\"°\\\" data-v-7bc50845>°</div><div class=\\\"char_block\\\" title=\\\"±\\\" data-v-7bc50845>±</div><div class=\\\"char_block\\\" title=\\\"²\\\" data-v-7bc50845>²</div><div class=\\\"char_block\\\" title=\\\"³\\\" data-v-7bc50845>³</div><div class=\\\"char_block\\\" title=\\\"´\\\" data-v-7bc50845>´</div><div class=\\\"char_block\\\" title=\\\"µ\\\" data-v-7bc50845>µ</div><div class=\\\"char_block\\\" title=\\\"¶\\\" data-v-7bc50845>¶</div><div class=\\\"char_block\\\" title=\\\"·\\\" data-v-7bc50845>·</div><div class=\\\"char_block\\\" title=\\\"¸\\\" data-v-7bc50845>¸</div><div class=\\\"char_block\\\" title=\\\"¹\\\" data-v-7bc50845>¹</div><div class=\\\"char_block\\\" title=\\\"º\\\" data-v-7bc50845>º</div><div class=\\\"char_block\\\" title=\\\"»\\\" data-v-7bc50845>»</div><div class=\\\"char_block\\\" title=\\\"¼\\\" data-v-7bc50845>¼</div><div class=\\\"char_block\\\" title=\\\"½\\\" data-v-7bc50845>½</div><div class=\\\"char_block\\\" title=\\\"¾\\\" data-v-7bc50845>¾</div><div class=\\\"char_block\\\" title=\\\"¿\\\" data-v-7bc50845>¿</div><div class=\\\"char_block\\\" title=\\\"À\\\" data-v-7bc50845>À</div><div class=\\\"char_block\\\" title=\\\"Á\\\" data-v-7bc50845>Á</div><div class=\\\"char_block\\\" title=\\\"Â\\\" data-v-7bc50845>Â</div><div class=\\\"char_block\\\" title=\\\"Ã\\\" data-v-7bc50845>Ã</div></div></div>\", 1)\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\" data-v-7bc50845><p data-v-7bc50845> This sample shows how to add your own commands to toolbar of the Rich Text Editor. The <code data-v-7bc50845>“Ω” </code> command is added to insert special characters in the editor. Click the “Ω” command to show the special characters list, and then choose the character to be inserted in the editor. </p></div><div id=\\\"description\\\" data-v-7bc50845><p data-v-7bc50845>The Rich Text Editor allows you to configure your own commands to its toolbar using <code data-v-7bc50845>toolbarSettings</code> property. The command can be plain text, icon, or HTML template. You can also define the order and group where the command should be included. Bind the action to the command by getting its instance. </p><p data-v-7bc50845><b data-v-7bc50845>Injecting Module</b></p><p data-v-7bc50845>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code data-v-7bc50845>Toolbar, Link, Image, HtmlEditor, QuickToolbar</code> into the <code data-v-7bc50845>provide</code> section.</p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_richtexteditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-richtexteditor\")\n  const _component_ejs_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dialog\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_richtexteditor, {\n            ref: \"rteObj\",\n            toolbarSettings: _ctx.toolbarSettings,\n            created: $options.onCreate,\n            actionComplete: $options.actionComplete\n          }, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              _hoisted_4\n            ]),\n            _: 1 /* STABLE */\n          }, 8 /* PROPS */, [\"toolbarSettings\", \"created\", \"actionComplete\"]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dialog, {\n            id: \"rteDialog\",\n            buttons: _ctx.dlgButtons,\n            header: _ctx.header,\n            ref: \"dialogObj\",\n            overlayClick: $options.dialogOverlay,\n            visible: _ctx.visible,\n            height: \"340px\",\n            width: \"43%\",\n            showCloseIcon: _ctx.showCloseIcon,\n            isModal: _ctx.modal,\n            target: _ctx.target,\n            created: $options.dialogCreate\n          }, null, 8 /* PROPS */, [\"buttons\", \"header\", \"overlayClick\", \"visible\", \"showCloseIcon\", \"isModal\", \"target\", \"created\"]),\n          _hoisted_5\n        ])\n      ])\n    ]),\n    _hoisted_6\n  ]))\n}\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"fcd4f4e6\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-richtexteditor-vue-samples/./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"rich-text-editor/insert-special-characters/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_richtexteditor_vue_samples"] = self["webpackChunkej2_richtexteditor_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/rich-text-editor/insert-special-characters/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;