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

/***/ "./Samples/tab/drag-and-drop/main.js":
/*!*******************************************!*\
  !*** ./Samples/tab/drag-and-drop/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/tab/drag-and-drop/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#draggableTab .e-content .e-item {\\r\\n        font-size: 12px;\\r\\n        padding: 10px;\\r\\n        text-align: justify;\\n}\\n.treeview-external-drag-tab .e-list-item,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item {\\r\\n        border: 0.5px solid #E1E7EC;\\r\\n        line-height: 15px;\\r\\n        padding: 0 5px;\\n}\\n.bootstrap5 .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text,\\r\\n    .bootstrap4 .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text {\\r\\n      color: #212529;\\n}\\n.bootstrap .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text {\\r\\n      color: #333;\\n}\\n.treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\r\\n    .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\r\\n    .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow {\\r\\n        background-color: transparent;\\r\\n        border-color: transparent;\\r\\n        box-shadow: none !important;\\n}\\n#draggableTab .e-upload {\\r\\n        width: 300px;\\n}\\n#TabContainer {\\r\\n      display: flex;\\n}\\n@media (max-width: 550px) {\\n#TabContainer {\\r\\n        display: block;\\n}\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,eAAe;QACf,aAAa;QACb,mBAAmB;AAC3B;AACA;;QAEQ,2BAA2B;QAC3B,iBAAiB;QACjB,cAAc;AACtB;AACA;;MAEM,cAAc;AACpB;AACA;MACM,WAAW;AACjB;AACA;;;;;;QAMQ,6BAA6B;QAC7B,yBAAyB;QACzB,2BAA2B;AACnC;AACA;QACQ,YAAY;AACpB;AACA;MACM,aAAa;AACnB;AACA;AACA;QACQ,cAAc;AACtB;AACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#draggableTab .e-content .e-item {\\r\\n        font-size: 12px;\\r\\n        padding: 10px;\\r\\n        text-align: justify;\\n}\\n.treeview-external-drag-tab .e-list-item,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item {\\r\\n        border: 0.5px solid #E1E7EC;\\r\\n        line-height: 15px;\\r\\n        padding: 0 5px;\\n}\\n.bootstrap5 .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text,\\r\\n    .bootstrap4 .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text {\\r\\n      color: #212529;\\n}\\n.bootstrap .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text {\\r\\n      color: #333;\\n}\\n.treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\r\\n    .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\r\\n    .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,\\r\\n    .e-bigger .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow {\\r\\n        background-color: transparent;\\r\\n        border-color: transparent;\\r\\n        box-shadow: none !important;\\n}\\n#draggableTab .e-upload {\\r\\n        width: 300px;\\n}\\n#TabContainer {\\r\\n      display: flex;\\n}\\n@media (max-width: 550px) {\\n#TabContainer {\\r\\n        display: block;\\n}\\n}\\r\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue":
/*!*******************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_48d7b9d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=48d7b9d2 */ \"./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_48d7b9d2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css */ \"./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_48d7b9d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/tab/drag-and-drop/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-schedule */ \"./node_modules/@syncfusion/ej2-vue-schedule/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-calendars */ \"./node_modules/@syncfusion/ej2-vue-calendars/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  components: {\r\n    'ejs-tab': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.TabComponent,\r\n    'e-tabitems': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.TabItemsDirective,\r\n    'e-tabitem': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.TabItemDirective,\r\n    'ejs-treeview': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.TreeViewComponent,\r\n    'ejs-grid': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__.GridComponent,\r\n    'e-columns': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__.ColumnsDirective,\r\n    'e-column': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__.ColumnDirective,\r\n    'ejs-richtexteditor': _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.RichTextEditorComponent,\r\n    'ejs-schedule': _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__.ScheduleComponent,\r\n    'ejs-calendar': _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__.CalendarComponent,\r\n    'ejs-dropdownlist': _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__.DropDownListComponent,\r\n    'ejs-uploader': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_7__.UploaderComponent,\r\n    'ejs-datepicker': _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_6__.DatePickerComponent\r\n  },\r\n  data: function () {\r\n    return {\r\n      draggedItemHeader: \"\",\r\n      i: 0,\r\n      fields: {\r\n        dataSource: [\r\n          { text: \"DropDown List\", id: \"list-01\", name: \"DropDownList\" },\r\n          { text: \"DatePicker\", id: \"list-02\", name: \"DatePicker\" },\r\n          { text: \"Calendar\", id: \"list-03\", name: \"Calendar\" },\r\n          { text: \"File Upload\", id: \"list-04\", name: \"FileUpload\" },\r\n        ],\r\n        id: \"id\", text: \"text\",\r\n      },\r\n      headerText0: { text: \"Grid\" },\r\n      headerText1: { text: \"Rich Text Editor\" },\r\n      headerText2: { text: \"Schedule\" },\r\n      gridData: [\r\n        { OrderID: 10248, CustomerID: \"VINET\", OrderDate: new Date(8364186e5), Freight: 32.38 },\r\n        { OrderID: 10249, CustomerID: \"TOMSP\", OrderDate: new Date(836505e6), Freight: 11.61 },\r\n        { OrderID: 10250, CustomerID: \"HANAR\", OrderDate: new Date(8367642e5), Freight: 65.83 },\r\n        { OrderID: 10251, CustomerID: \"VICTE\", OrderDate: new Date(8367642e5), Freight: 41.34 },\r\n        { OrderID: 10252, CustomerID: \"SUPRD\", OrderDate: new Date(8368506e5), Freight: 51.3 }\r\n      ],\r\n      sportsData: [\"Badminton\", \"Cricket\", \"Football\", \"Golf\", \"Tennis\"],\r\n      height: 350,\r\n      selectedDate: new Date(1996, 6, 9),\r\n      readonly: true,\r\n      eventSettings: {\r\n        dataSource: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_8__.DataManager({\r\n         url: \"https://services.odata.org/V4/Northwind/Northwind.svc/Orders\",\r\n        adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_8__.ODataV4Adaptor,\r\n        crossDomain: true,\r\n        }),\r\n        fields: {\r\n          id: 'Id',\r\n          subject: { name: 'ShipName' },\r\n          location: { name: 'ShipCountry' },\r\n          description: { name: 'ShipAddress' },\r\n          startTime: { name: 'OrderDate' },\r\n          endTime: { name: 'RequiredDate' },\r\n          recurrenceRule: { name: 'ShipRegion' }\r\n        }\r\n      },\r\n    };\r\n  },\r\n  provide: {\r\n    richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.Toolbar, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.Link, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.Image, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.HtmlEditor, _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.QuickToolbar],\r\n    schedule: [_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__.Day, _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__.Week, _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__.WorkWeek, _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__.Month, _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_3__.Agenda],\r\n  },\r\n  methods: {\r\n    onTabCreate: function (args) {\r\n      let tabElement = document.getElementById(\"draggableTab\");\r\n      if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(tabElement)) {\r\n        tabElement.querySelector(\".e-tab-header\").classList.add(\"e-droppable\");\r\n        tabElement.querySelector(\".e-content\").classList.add(\"tab-content\");\r\n      }\r\n    },\r\n    onTabDragStart: function (args) {\r\n      var tabObj = this.$refs.tabObj.ej2Instances;\r\n      this.draggedItemHeader = tabObj.items[args.index].header.text;\r\n    },\r\n    onDraggedTab: function (args) {\r\n      var tabObj = this.$refs.tabObj.ej2Instances;\r\n      let dragTabIndex = Array.prototype.indexOf.call(tabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);\r\n      let dropNode = args.target.closest(\"#ListView .e-list-item\");\r\n      if (dropNode != null && !args.target.closest(\"#draggableTab .e-toolbar-item\") && tabObj.items.length > 1) {\r\n        var treeObj = this.$refs.treeObj.ej2Instances;\r\n        args.cancel = true;\r\n        let dropContainer = (document.querySelector('.treeview-external-drag-tab')).querySelectorAll('.e-list-item');\r\n        let dropIndex = Array.prototype.indexOf.call(dropContainer, dropNode);\r\n        let newNode = [{ id: \"list\" + this.i, text: this.draggedItemHeader }];\r\n        tabObj.removeTab(dragTabIndex);\r\n        treeObj.addNodes(newNode, \"Treeview\", dropIndex);\r\n      }\r\n    },\r\n    onNodeDragStop: function (args) {\r\n      let dropElement = args.target.closest(\"#draggableTab .e-toolbar-item\");\r\n      if (dropElement != null) {\r\n        let tabElement = document.querySelector(\"#draggableTab\");\r\n        let itemPosition = (((args.event.type.indexOf('touch') > -1) ? args.event.changedTouches[0].clientX\r\n          : args.event.clientX) < dropElement.getBoundingClientRect().left + dropElement.offsetWidth / 2) ? 0 : 1;\r\n        let dropItemIndex = [].slice.call(tabElement.querySelectorAll(\".e-toolbar-item\")).indexOf(dropElement) + itemPosition;\r\n        let tabContent;\r\n        switch (args.draggedNodeData.text) {\r\n          case \"DropDown List\":\r\n            tabContent = 'DropDownComponent';\r\n            break;\r\n          case \"DatePicker\":\r\n            tabContent = 'DatePickerComponent';\r\n            break;\r\n          case \"Calendar\":\r\n            tabContent = 'CalendarComponent';\r\n            break;\r\n          case \"File Upload\":\r\n            tabContent = 'UploaderComponent';\r\n            break;\r\n          case \"Rich Text Editor\":\r\n            tabContent = this.RichTextEditor;\r\n            break;\r\n          case \"Grid\":\r\n            tabContent = this.Grid;\r\n            break;\r\n          case \"Schedule\":\r\n            tabContent = this.Schedule;\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n        let newTabItem = [{ header: { text: args.draggedNodeData.text.toString() }, content: tabContent }];\r\n        var tabObj = this.$refs.tabObj.ej2Instances;\r\n        var treeObj = this.$refs.treeObj.ej2Instances;\r\n        tabObj.addTab(newTabItem, dropItemIndex);\r\n        treeObj.removeNodes([args.draggedNode]);\r\n      }\r\n      args.cancel = true;\r\n    },\r\n    onNodeDrag: function (args) {\r\n      if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(args.target.closest(\".tab-content\"))) {\r\n        args.dropIndicator = \"e-no-drop\";\r\n      } else if (!(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(args.target.closest(\"#draggableTab .e-tab-header\"))) {\r\n        args.dropIndicator = \"e-drop-in\";\r\n      }\r\n    },\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2":
/*!*************************************************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_48d7b9d2__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_48d7b9d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=48d7b9d2 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2\");\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css":
/*!***************************************************************************************!*\
  !*** ./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_48d7b9d2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_48d7b9d2_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_48d7b9d2_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_48d7b9d2_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_48d7b9d2_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=template&id=48d7b9d2 ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { id: \"TabContainer\" }\nconst _hoisted_2 = {\n  class: \"col-lg-4\",\n  style: {\"margin-top\":\"10px\"}\n}\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"property-panel-header\" }, \"List of Components\", -1 /* HOISTED */)\nconst _hoisted_4 = { class: \"col-lg-8 control-section\" }\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"The Rich Text Editor is WYSIWYG (\\\"what you see is what you get\\\") editor useful to create and edit content, and return the valid \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"https://ej2.syncfusion.com/home/\",\n    target: \"_blank\"\n  }, \"HTML markup\"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" or \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"https://ej2.syncfusion.com/home/\",\n    target: \"_blank\"\n  }, \"markdown\"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" of the content\")\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Toolbar\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc.\")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Toolbar is fully customizable\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Links\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"You can insert a hyperlink with its corresponding dialog\")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Attach a hyperlink to the displayed text.\")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Customize the quick toolbar based on the hyperlink\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Image.\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Allows you to insert images from an online source as well as the local computer\")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"You can upload an image\")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Provides an option to customize quick toolbar for an image\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  alt: \"Logo\",\n  src: \"https://ej2.syncfusion.com/vue/demos/./../../source/rich-text-editor/images/RTEImage-Feather.png\",\n  style: {\"width\":\"300px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This example illustrates how to reorder tabs and add tabs from an external source(list of components) by drag and drop. Here, you can drag and drop the items from TreeView into Tab. </p></div><div id=\\\"description\\\"><p> In this example, the <code>allowDragAndDrop</code> property is used to enable drag and drop and the <code>dragArea</code> property is used to define the draggable area. </p><p> In this example, the list of components is rendered using the <code>treeview</code> component. We can drag the item from the treeview component to the tab component by using the <code>nodeDragStop</code> event of the treeview component and add the same item with the help of the <code>addTab</code> public method of Tab and remove this item from the treeview by using the <code>removeNodes</code> method. </p><p> In the same way, we can drag the tab item within the tab component and also add the tab item to the treeview component. Here, we can drop the tab item in the treeview component by using the <code>dragged</code> event of the tab component. In this case, we can remove the dropped item from tab with the help of the <code>removeTab</code> public method and add the item to the treeview in its <code>addNodes</code> public method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_treeview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-treeview\")\n  const _component_e_tabitem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-tabitem\")\n  const _component_e_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-column\")\n  const _component_e_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-columns\")\n  const _component_ejs_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-grid\")\n  const _component_ejs_richtexteditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-richtexteditor\")\n  const _component_ejs_schedule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-schedule\")\n  const _component_ejs_calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-calendar\")\n  const _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\")\n  const _component_ejs_uploader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-uploader\")\n  const _component_ejs_datepicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-datepicker\")\n  const _component_e_tabitems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-tabitems\")\n  const _component_ejs_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-tab\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      _hoisted_3,\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_treeview, {\n        id: \"ListView\",\n        ref: \"treeObj\",\n        fields: _ctx.fields,\n        allowDragAndDrop: true,\n        dragArea: \"#TabContainer\",\n        cssClass: \"treeview-external-drag-tab\",\n        nodeDragStop: $options.onNodeDragStop,\n        nodeDragging: $options.onNodeDrag\n      }, null, 8 /* PROPS */, [\"fields\", \"nodeDragStop\", \"nodeDragging\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_tab, {\n        ref: \"tabObj\",\n        id: \"draggableTab\",\n        dragArea: \"#TabContainer\",\n        allowDragAndDrop: true,\n        created: $options.onTabCreate,\n        onDragStart: $options.onTabDragStart,\n        dragged: $options.onDraggedTab\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_tabitems, null, {\n            GridComponent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_grid, { dataSource: _ctx.gridData }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_columns, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                        field: \"OrderID\",\n                        headerText: \"Order ID\",\n                        textAlign: \"Right\",\n                        width: \"120\",\n                        type: \"number\"\n                      }),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                        field: \"CustomerID\",\n                        headerText: \"Customer ID\",\n                        type: \"string\",\n                        width: \"140\"\n                      }),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                        field: \"Freight\",\n                        headerText: \"Freight\",\n                        textAlign: \"Right\",\n                        width: \"120\",\n                        format: \"C\"\n                      }),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                        field: \"OrderDate\",\n                        headerText: \"Order Date\",\n                        width: \"140\",\n                        format: \"yMd\"\n                      })\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"dataSource\"])\n            ]),\n            RichTextEditor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_richtexteditor, { height: \"340\" }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  _hoisted_5,\n                  _hoisted_6,\n                  _hoisted_7,\n                  _hoisted_8,\n                  _hoisted_9,\n                  _hoisted_10,\n                  _hoisted_11,\n                  _hoisted_12\n                ]),\n                _: 1 /* STABLE */\n              })\n            ]),\n            ScheduleComponent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_schedule, {\n                height: _ctx.height,\n                selectedDate: _ctx.selectedDate,\n                eventSettings: _ctx.eventSettings,\n                readonly: _ctx.readonly\n              }, null, 8 /* PROPS */, [\"height\", \"selectedDate\", \"eventSettings\", \"readonly\"])\n            ]),\n            CalendarComponent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_calendar)\n            ]),\n            DropDownComponent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                width: \"200px\",\n                popupHeight: \"200px\",\n                popupWidth: \"250px\",\n                dataSource: _ctx.sportsData,\n                placeholder: \"Select a game\"\n              }, null, 8 /* PROPS */, [\"dataSource\"])\n            ]),\n            UploaderComponent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_uploader)\n            ]),\n            DatePickerComponent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_datepicker, {\n                width: \"200px\",\n                placeholder: \"Enter date\"\n              })\n            ]),\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_tabitem, {\n                header: _ctx.headerText0,\n                content: 'GridComponent'\n              }, null, 8 /* PROPS */, [\"header\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_tabitem, {\n                header: _ctx.headerText1,\n                content: 'RichTextEditor'\n              }, null, 8 /* PROPS */, [\"header\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_tabitem, {\n                header: _ctx.headerText2,\n                content: 'ScheduleComponent'\n              }, null, 8 /* PROPS */, [\"header\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"created\", \"onDragStart\", \"dragged\"])\n    ]),\n    _hoisted_13\n  ]))\n}\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/tab/drag-and-drop/App.vue?vue&type=style&index=0&id=48d7b9d2&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"43731889\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-navigations-vue-samples/./Samples/tab/drag-and-drop/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"tab/drag-and-drop/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/tab/drag-and-drop/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;