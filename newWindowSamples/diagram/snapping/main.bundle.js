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

/***/ "./Samples/diagram/snapping/main.js":
/*!******************************************!*\
  !*** ./Samples/diagram/snapping/main.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/snapping/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n.header_text[data-v-250f425e]{\\n        color: rgb(9, 9, 9);\\n        font-weight: bold;\\n        font-size: 20px;\\n        font-family: 'Calibri';\\n        margin-left: 5px;\\n        margin-top: 5px;\\n}\\n.db-diagram-container[data-v-250f425e] {\\n    width:calc(100% - 300px);\\n    height: 100%;\\n    float: left;\\n}\\n.db-prop-row[data-v-250f425e] {\\n    margin-top: 6px;\\n}\\n.db-col-left[data-v-250f425e] {\\n    padding-left: 10px;\\n    padding-right: 3px;\\n}\\n.db-prop-text-style[data-v-250f425e] {\\n    font-size: 13px;\\n    font-weight: normal;\\n    font-family: 'Calibri';\\n    margin-top: 25px;\\n}\\n.radio-text-style[data-v-250f425e]{\\n    font-size: 13px;\\n    font-weight: normal;\\n    font-family: 'Calibri';\\n    margin-top: 10px;\\n}\\n.text-content[data-v-250f425e]{\\n        margin-left: 10px;\\n}\\n.db-check-input[data-v-250f425e]{\\n        float: right;\\n}\\n.db-text-input[data-v-250f425e]{\\n        height: 25px!important;\\n}\\n.e-checkbox-wrapper .e-label[data-v-250f425e]{\\n        font-size: 12px!important;\\n}\\n.e-radio+label .e-label[data-v-250f425e]{\\n        font-size: 12px!important;\\n}\\n#properties_Container[data-v-250f425e]{\\n    /* background: #e3e3e3; */\\n    width: 300px;\\n    float: right;\\n    /* margin-left: 20px; */\\n}\\n.e-colorpicker-wrapper .e-split-btn-wrapper .e-split-colorpicker.e-split-btn .e-selected-color .e-split-preview[data-v-250f425e]{\\n        width: 100px!important;\\n        margin-left: -40px!important;\\n}\\n.e-colorpicker-wrapper .e-split-btn-wrapper .e-split-colorpicker.e-split-btn[data-v-250f425e]{\\n        width: 110px!important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,mBAAmB;QACnB,iBAAiB;QACjB,eAAe;QACf,sBAAsB;QACtB,gBAAgB;QAChB,eAAe;AACvB;AACA;IACI,wBAAwB;IACxB,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;AACpB;AACA;QACQ,iBAAiB;AACzB;AACA;QACQ,YAAY;AACpB;AACA;QACQ,sBAAsB;AAC9B;AACA;QACQ,yBAAyB;AACjC;AACA;QACQ,yBAAyB;AACjC;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,uBAAuB;AAC3B;AACA;QACQ,sBAAsB;QACtB,4BAA4B;AACpC;AACA;QACQ,sBAAsB;AAC9B\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n.header_text[data-v-250f425e]{\\n        color: rgb(9, 9, 9);\\n        font-weight: bold;\\n        font-size: 20px;\\n        font-family: 'Calibri';\\n        margin-left: 5px;\\n        margin-top: 5px;\\n}\\n.db-diagram-container[data-v-250f425e] {\\n    width:calc(100% - 300px);\\n    height: 100%;\\n    float: left;\\n}\\n.db-prop-row[data-v-250f425e] {\\n    margin-top: 6px;\\n}\\n.db-col-left[data-v-250f425e] {\\n    padding-left: 10px;\\n    padding-right: 3px;\\n}\\n.db-prop-text-style[data-v-250f425e] {\\n    font-size: 13px;\\n    font-weight: normal;\\n    font-family: 'Calibri';\\n    margin-top: 25px;\\n}\\n.radio-text-style[data-v-250f425e]{\\n    font-size: 13px;\\n    font-weight: normal;\\n    font-family: 'Calibri';\\n    margin-top: 10px;\\n}\\n.text-content[data-v-250f425e]{\\n        margin-left: 10px;\\n}\\n.db-check-input[data-v-250f425e]{\\n        float: right;\\n}\\n.db-text-input[data-v-250f425e]{\\n        height: 25px!important;\\n}\\n.e-checkbox-wrapper .e-label[data-v-250f425e]{\\n        font-size: 12px!important;\\n}\\n.e-radio+label .e-label[data-v-250f425e]{\\n        font-size: 12px!important;\\n}\\n#properties_Container[data-v-250f425e]{\\n    /* background: #e3e3e3; */\\n    width: 300px;\\n    float: right;\\n    /* margin-left: 20px; */\\n}\\n.e-colorpicker-wrapper .e-split-btn-wrapper .e-split-colorpicker.e-split-btn .e-selected-color .e-split-preview[data-v-250f425e]{\\n        width: 100px!important;\\n        margin-left: -40px!important;\\n}\\n.e-colorpicker-wrapper .e-split-btn-wrapper .e-split-colorpicker.e-split-btn[data-v-250f425e]{\\n        width: 110px!important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue":
/*!******************************************!*\
  !*** ./Samples/diagram/snapping/App.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_250f425e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=250f425e&scoped=true */ \"./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/snapping/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css */ \"./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_250f425e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-250f425e\"],['__file',\"Samples/diagram/snapping/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n\n\n\n\n\n\nlet diagramInstance;\nlet drawingNode;\nlet nodes = [\n     {\n            id:'node_1',width:100,height:100,offsetX:350,offsetY:250,\n            ports:[\n                {id:'port1',offset:{x:0.5,y:0.5},visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Visible,\n                style:{fill:'black'},\n                constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortConstraints.Default|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortConstraints.Draw\n            }],\n            annotations:[{id:'annot1',content:'Shape 1', offset:{x:0.5,y:1.2},style:{bold:true}}]\n        },\n        {\n            id:'node_2',width:100,height:100,offsetX:600,offsetY:250,\n            ports:[\n                {id:'port11', offset:{x:0.5,y:0.5},visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Visible,style:{fill:'black'},\n                constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortConstraints.Default|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortConstraints.Draw\n            },{\n                id:'port2',offset:{x:0,y:0.5},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Visible,\n                style:{fill:'black'},\n                constraints:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortConstraints.Default|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortConstraints.Draw,\n                height:100,width:7\n            }],\n            annotations:[{id:'annot1',content:'Shape 2',offset:{x:0.5,y:1.2},style:{bold:true}}]\n    \n        },\n        {\n            id:'node_3',width:100,height:100,offsetX:500,offsetY:400,\n            annotations:[{id:'annot1',content:'Shape 3', offset:{x:0.5,y:1.2}, style:{bold:true}}]\n    \n        },\n  ];\n\nlet connectors = [\n    {\n        id:'connector_1',sourceID:'node_1',targetID:'node_3',type:'Orthogonal',\n    }\n  ];\n   let handles = [\n       {\n           name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z',tooltip:{content:'Clone'},\n           visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n       },\n       {\n           name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z',tooltip:{content:'Delete'},\n           visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n       },\n       {\n           name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z',tooltip:{content:'Draw'},\n           visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }\n       },\n    ];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-radiobutton': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent,\n    'ejs-colorpicker': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__.ColorPickerComponent,\n    'ejs-checkbox': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent,\n    'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent,\n    'ejs-numerictextbox': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__.NumericTextBoxComponent\n  },  \n  data: function() {\n    return {\n      width: \"95%\",\n      height: \"645px\",\n      nodes: nodes,\n      connectors: connectors,\n      selectedItems : {\n        userHandles : handles\n      },\n      drawingObject : { type : 'Orthogonal'},\n      getCustomTool : getTool,\n      snapSettings: {\n               snapAngle : 5\n            },\n      getNodeDefaults: (obj) => {\n        obj.style = {fill: \"orange\", strokeColor:'orange'};\n        return obj;\n      },\n      getConnectorDefaults: (obj) => {\n        obj.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ConnectorConstraints.Default| _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ConnectorConstraints.DragSegmentThumb;\n        return obj;\n      },\n      selectionChange :(args)=>{\n         var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n           if(args.state === 'Changed'){\n            var selectedItems = diagram.selectedItems.nodes;\n            selectedItems = selectedItems.concat(diagram.selectedItems.connectors);\n            if(selectedItems.length > 0){\n                if(args.newValue.length > 0 && args.newValue[0].sourceID == undefined && args.newValue[0].targetID == undefined){\n                    diagram.selectedItems = { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SelectorConstraints.All|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SelectorConstraints.UserHandle, userHandles: handles };\n                    if(diagram.selectedItems.nodes.length>0){\n                        drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length-1];\n                    }\n                }\n                else\n                {\n                 diagram.selectedItems = { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SelectorConstraints.All&~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SelectorConstraints.UserHandle };\n                }\n            }\n        }\n    },\n      snappingInterval : (args) =>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.horizontalGridlines.snapIntervals[0] = args.value;\n        diagram.snapSettings.verticalGridlines.snapIntervals[0] = args.value;\n        diagram.dataBind();\n      },\n      snappingAngle : (args) =>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.snapAngle = args.value;\n        diagram.dataBind();\n      },\n      colorChange : (args)=>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.snapLineColor = args.value;\n        diagram.dataBind();\n      },\n      showGridline : (args)=>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n        diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines;\n        diagram.dataBind();\n        scale();\n      },\n      snappingToobjects : (args)=>{\n        var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n       diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject;\n       diagram.dataBind();\n      },\n     snapToLines : (args) =>{\n         var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n         var showGridlines = document.getElementById(\"showgridline\").ej2_instances[0];\n         var snapToObject = document.getElementById(\"snaptoobject\").ej2_instances[0];\n        if(showGridlines.checked && snapToObject.checked){\n            diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All;\n        }\n       else if(showGridlines.checked && !snapToObject.checked){\n        diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject;\n       }\n       else if(!showGridlines.checked && snapToObject.checked){\n        diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines;\n       }\n       else if(!showGridlines.checked && !snapToObject.checked){\n        diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject);\n       }\n        switch(args.value){\n            case 'Snap To Gridlines':\n                diagram.snapSettings.constraints =  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All| _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToLines;\n                if( !showGridlines.checked && !snapToObject.checked ) {\n                   diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject);\n                }\n                else if( !snapToObject.checked && showGridlines.checked ){\n                    diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject);\n                }\n                else if(snapToObject.checked && !showGridlines.checked) {\n                    diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines);\n                }\n            break;\n            case 'Snap To Horizontal Gridlines':\n                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToVerticalLines;\n            break;\n            case 'Snap To Vertical Gridlines':\n                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToHorizontalLines;\n            break;\n            case 'None':\n                diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToLines);\n                if(!showGridlines.checked && !snapToObject.checked){\n                    diagram.snapSettings.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToLines);\n                 }\n                 else if(showGridlines.checked && !snapToObject.checked){\n                     diagram.snapSettings.constraints =  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToObject|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToLines);\n                 }\n                 else if(!showGridlines.checked && snapToObject.checked){\n                     diagram.snapSettings.constraints =  _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.All &~ (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.ShowLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToHorizontalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToVerticalLines|_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.SnapToLines);\n                 }\n            break;\n        }\n        diagram.dataBind();\n        scale();\n    },\n      rulerSettings : {\n        showRulers : true\n      }\n    }\n  },\n  provide:{\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramContextMenu, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UndoRedo, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.Snapping, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ConnectorEditing]\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n       diagram.fitToPage();\n    },\n});\n\nfunction scale(){\n    var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n     var getsnap = document.getElementById('snappingInterval');\n    getsnap = (getsnap).ej2_instances[0];\n     diagram.snapSettings.horizontalGridlines.snapIntervals[0] = (getsnap).value;\n     diagram.snapSettings.verticalGridlines.snapIntervals[0] = (getsnap).value;\n     diagram.dataBind();\n}\nfunction getTool(action){\n     var diagram = document.getElementById(\"diagram\").ej2_instances[0];\n    if (action == \"Delete\") {\n        diagram.remove();\n    }\n    else if (action == \"Clone\"){\n        diagram.paste(diagram.selectedItems.selectedObjects);\n    }\n   else if (action == \"Draw\"){\n     (diagram.drawingObject).type = (diagram.drawingObject).type?(diagram.drawingObject).type: 'Orthogonal';\n     (diagram.drawingObject).sourceID = diagram.selectedItems.nodes[0].id;\n     diagram.dataBind();\n    }\n}\n\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./Samples/diagram/snapping/App.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true":
/*!************************************************************************************!*\
  !*** ./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_250f425e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_250f425e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=250f425e&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_250f425e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=template&id=250f425e&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-250f425e\"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { class: \"db-diagram-container\" }\nconst _hoisted_3 = { id: \"properties_Container\" }\nconst _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", { class: \"property-panel-header\" }, \" Properties \", -1 /* HOISTED */))\nconst _hoisted_5 = { class: \"db-prop-row\" }\nconst _hoisted_6 = { class: \"db-prop-text-style\" }\nconst _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", { class: \"db-prop-text-style text-content\" }, \"Snapping Interval \", -1 /* HOISTED */))\nconst _hoisted_8 = { style: {\"float\":\"right\",\"margin-right\":\"10px\"} }\nconst _hoisted_9 = { class: \"db-prop-text-style\" }\nconst _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", { class: \"db-prop-text-style text-content\" }, \"Snapping Angle\", -1 /* HOISTED */))\nconst _hoisted_11 = { style: {\"float\":\"right\",\"margin-right\":\"10px\"} }\nconst _hoisted_12 = { class: \"db-prop-text-style\" }\nconst _hoisted_13 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", { class: \"db-prop-text-style text-content\" }, \"Snapping Line Color\", -1 /* HOISTED */))\nconst _hoisted_14 = {\n  class: \"db-text-input\",\n  style: {\"float\":\"right\",\"margin-right\":\"10px\",\"width\":\"50%\"}\n}\nconst _hoisted_15 = { class: \"db-prop-text-style\" }\nconst _hoisted_16 = {\n  class: \"db-prop-text-style\",\n  style: {\"margin-top\":\"7px!important\"}\n}\nconst _hoisted_17 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"db-prop-text-style\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n    class: \"db-prop-text-style text-content\",\n    style: {\"font-weight\":\"bold\"}\n  }, \"Snapping To Lines\")\n], -1 /* HOISTED */))\nconst _hoisted_18 = {\n  class: \"row radio-text-style\",\n  style: {\"margin-left\":\"7px\"}\n}\nconst _hoisted_19 = {\n  class: \"row radio-text-style\",\n  style: {\"margin-left\":\"7px\"}\n}\nconst _hoisted_20 = {\n  class: \"row radio-text-style\",\n  style: {\"margin-left\":\"7px\"}\n}\nconst _hoisted_21 = {\n  class: \"row radio-text-style\",\n  style: {\"margin-left\":\"7px\"}\n}\nconst _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\" data-v-250f425e><p data-v-250f425e> This sample shows how diagram objects snap to the nearest intersection of gridlines or objects while being dragged or resized. </p></div><div id=\\\"description\\\" data-v-250f425e><p data-v-250f425e>The <code data-v-250f425e>SnapInterval</code> property in snapSettings allows you to specify the interval at which objects should snap to a grid or other objects in the control.</p><p data-v-250f425e>The <code data-v-250f425e>snapAngle</code> property in snapSettings allows you to define the snap angle by which the object needs to be rotated.</p><p data-v-250f425e>The <code data-v-250f425e>snapLineColor</code> property is used to set the color of the snap lines that appear when objects snap to a grid or other objects in the control.</p><p data-v-250f425e>The <code data-v-250f425e>constraints</code> property controls the visibility of gridlines and enables or disables snapping.</p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n  const _component_ejs_numerictextbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-numerictextbox\")\n  const _component_ejs_colorpicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-colorpicker\")\n  const _component_ejs_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-checkbox\")\n  const _component_ejs_radiobutton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-radiobutton\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n          id: \"diagram\",\n          ref: \"diagramObj\",\n          width: _ctx.width,\n          height: _ctx.height,\n          nodes: _ctx.nodes,\n          getNodeDefaults: _ctx.getNodeDefaults,\n          selectionChange: _ctx.selectionChange,\n          snapSettings: _ctx.snapSettings,\n          connectors: _ctx.connectors,\n          getConnectorDefaults: _ctx.getConnectorDefaults,\n          rulerSettings: _ctx.rulerSettings,\n          getCustomTool: _ctx.getCustomTool,\n          selectedItems: _ctx.selectedItems,\n          drawingObject: _ctx.drawingObject\n        }, null, 8 /* PROPS */, [\"width\", \"height\", \"nodes\", \"getNodeDefaults\", \"selectionChange\", \"snapSettings\", \"connectors\", \"getConnectorDefaults\", \"rulerSettings\", \"getCustomTool\", \"selectedItems\", \"drawingObject\"])\n      ]),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n        _hoisted_4,\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [\n            _hoisted_7,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_numerictextbox, {\n                id: \"snappingInterval\",\n                value: 20,\n                format: \"n0\",\n                min: 1,\n                step: 1,\n                width: 150,\n                change: _ctx.snappingInterval\n              }, null, 8 /* PROPS */, [\"change\"])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [\n            _hoisted_10,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_numerictextbox, {\n                value: 5,\n                format: \"n0\",\n                min: 1,\n                step: 1,\n                width: 150,\n                change: _ctx.snappingAngle\n              }, null, 8 /* PROPS */, [\"change\"])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [\n            _hoisted_13,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_colorpicker, {\n                id: \"color-picker\",\n                value: \"#07EDE1\",\n                width: \"100%\",\n                type: \"color\",\n                mode: \"Palette\",\n                change: _ctx.colorChange\n              }, null, 8 /* PROPS */, [\"change\"])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n              id: \"showgridline\",\n              label: \"Show Gridline\",\n              checked: true,\n              change: _ctx.showGridline\n            }, null, 8 /* PROPS */, [\"change\"])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n              id: \"snaptoobject\",\n              label: \"Snapping to Objects\",\n              checked: true,\n              change: _ctx.snappingToobjects\n            }, null, 8 /* PROPS */, [\"change\"])\n          ]),\n          _hoisted_17,\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_radiobutton, {\n              label: \"Snap To Gridlines\",\n              name: \"snapping\",\n              checked: true,\n              value: \"Snap To Gridlines\",\n              change: _ctx.snapToLines\n            }, null, 8 /* PROPS */, [\"change\"])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_19, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_radiobutton, {\n              label: \"Snap To Horizontal Gridlines\",\n              name: \"snapping\",\n              checked: false,\n              value: \"Snap To Horizontal Gridlines\",\n              change: _ctx.snapToLines\n            }, null, 8 /* PROPS */, [\"change\"])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_20, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_radiobutton, {\n              label: \"Snap To Vertical Gridlines\",\n              name: \"snapping\",\n              checked: false,\n              value: \"Snap To Vertical Gridlines\",\n              change: _ctx.snapToLines\n            }, null, 8 /* PROPS */, [\"change\"])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_21, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_radiobutton, {\n              label: \"None\",\n              name: \"snapping\",\n              checked: false,\n              value: \"None\",\n              change: _ctx.snapToLines\n            }, null, 8 /* PROPS */, [\"change\"])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_22\n  ]))\n}\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/snapping/App.vue?vue&type=style&index=0&id=250f425e&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"79931ab2\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/snapping/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"diagram/snapping/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_vue_samples"] = self["webpackChunkej2_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/snapping/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;