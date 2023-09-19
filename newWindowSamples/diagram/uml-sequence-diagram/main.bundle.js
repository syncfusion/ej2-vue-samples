/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/diagram/uml-sequence-diagram/main.js":
/*!******************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/main.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/uml-sequence-diagram/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-sequence-diagram/main.js?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue":
/*!******************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0024867c */ \"./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/uml-sequence-diagram/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n\n\n\nlet diagramInstance;\n\nlet nodes = [\n      {\n      id: 'employee', width: 100, height: 60, offsetX: 100, offsetY: 100,\n    shape: { type: 'Text', content: 'Employee'},style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'teamLead', width: 100, height: 60, offsetX: 350, offsetY: 100,\n    shape: { type: 'Text',content:'Team Lead' },style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'dashboard', width: 100, height: 60, offsetX: 600, offsetY: 100,\n    shape: { type: 'Text', content: 'Dashboard'},style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'manager', width: 100, height: 60, offsetX: 850, offsetY: 100,\n    shape: { type: 'Text', content: 'Manager'},style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'leaveRequest', width: 100, height: 60, offsetX: 225, offsetY: 250,\n    shape: { type: 'Text',content:'Leave Request' },style:{fill:'transparent'}\n  },\n  {\n      id: 'leaveApproval', width: 100, height: 60, offsetX: 225, offsetY: 484,\n    shape: { type: 'Text', content: 'Leave Approval'},style:{fill:'transparent'}\n  },\n  {\n      id:'checkEmplyeeAvail',shape:{type:'Text',content:'Check Employee availability and task status'},height:30,width:175,\n      offsetX:470,offsetY:345,style:{fill:'transparent'},\n  },\n  {\n      id:'forwardLeaveMssg',shape:{type:'Text',content:'Forward Leave Request'},height:30,width:150,\n      offsetX:600,offsetY:420,style:{fill:'transparent'}\n  },\n  {\n      id:'noObjection',shape:{type:'Text',content:'No Objection'},height:30,width:150,\n      offsetX:600,offsetY:460,style:{fill:'transparent'}\n  },\n  // Normal nodes\n  {\n      id:'employeeNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:250,offsetX:100,offsetY:350,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:1,y:0.05},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},\n              {id:'p2',offset:{x:1,y:0.97},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},]\n  },\n  {\n      id:'teamLeadNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:190,offsetX:350,offsetY:320,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:0,y:0.07},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},\n      {id:'p2',offset:{x:1,y:0.92},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},\n      {id:'p3',offset:{x:1,y:0.5},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},]\n  },\n  {\n      id:'dashboardNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:25,offsetX:600,offsetY:320,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:0,y:0.5},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden}]\n  },\n  {\n      id:'managerNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:50,offsetX:850,offsetY:420,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:0,y:0.1},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},\n      {id:'p2',offset:{x:0,y:0.9},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.PortVisibility.Hidden},]\n  },\n  ];\n\nlet connectors = [\n {\n      id:'employeeCon1',type:'Straight',sourcePoint:{x:100,y:120},targetPoint:{x:100,y:225},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'employeeCon2',type:'Straight',sourcePoint:{x:100,y:475},targetPoint:{x:100,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'teamLeanCon1',type:'Straight',sourcePoint:{x:350,y:120},targetPoint:{x:350,y:225},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'teamLeanCon2',type:'Straight',sourcePoint:{x:350,y:415},targetPoint:{x:350,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'dashboardCon1',type:'Straight',sourcePoint:{x:600,y:120},targetPoint:{x:600,y:307},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'dashboardCon2',type:'Straight',sourcePoint:{x:600,y:333},targetPoint:{x:600,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'managerCon1',type:'Straight',sourcePoint:{x:850,y:120},targetPoint:{x:850,y:395},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'managerCon2',type:'Straight',sourcePoint:{x:850,y:445},targetPoint:{x:850,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n\n  // arrow connectors\n  {\n      id:'empToTeamLead',type:'Straight',sourceID:'employeeNode',sourcePortID:'p1',\n      targetID:'teamLeadNode',targetPortID:'p1'\n  },\n  {\n      id:'teamLeadToEmp',type:'Straight',sourcePoint:{x:350,y:465},style:{strokeDashArray:'4 4'},\n      targetID:'employeeNode',targetPortID:'p2'\n  },\n  {\n      id:'teamLeadToDash',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p3',\n      targetID:'dashboardNode',targetPortID:'p1'\n  },\n  {\n      id:'teamLeadToManager',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p2',\n      targetID:'managerNode',targetPortID:'p1'\n  },\n  {\n      id:'managerToTeamLead',type:'Straight',sourceID:'managerNode',sourcePortID:'p2',\n      targetPoint:{x:350,y:440},style:{strokeDashArray:'4 4'}\n  },\n  ];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent\n  },\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"800px\",\n      nodes: nodes,\n      connectors: connectors,\n      tool: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramTools.ZoomPan,\n      snapSettings: {\n                constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.None\n            },\n      getNodeDefaults: (obj) => {\n        obj.style = { fill: '#26A0DA', strokeColor: 'white' };\n        return obj;\n      },\n      //Sets the default values of a connector\n      getConnectorDefaults: (obj) => {\n        obj.targetDecorator.style = {fill:'#489ECC',strokeColor:'#489ECC'};\n        if(obj.targetDecorator.shape === 'Arrow'){\n        obj.style = {strokeColor:'#489ECC',strokeWidth:2};\n        }\n        return obj;\n      },\n    }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.fitToPage();\n  }\n});\n\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c":
/*!************************************************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=0024867c */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c\");\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample illustrates an employee’s leave request sequence using a UML sequence diagram. The shapes for the sequence were designed with the port feature for Diagram's nodes. \")\n], -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"This example shows how to create a UML sequence diagram using the port feature for nodes. The \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"code\", null, \"type\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" property allows you to define the type of shape. The basic shape property allows you to define the shape of a node. \")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\")\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n        id: \"diagram\",\n        ref: \"diagramObj\",\n        width: _ctx.width,\n        height: _ctx.height,\n        nodes: _ctx.nodes,\n        tool: _ctx.tool,\n        snapSettings: _ctx.snapSettings,\n        connectors: _ctx.connectors,\n        getConnectorDefaults: _ctx.getConnectorDefaults\n      }, null, 8 /* PROPS */, [\"width\", \"height\", \"nodes\", \"tool\", \"snapSettings\", \"connectors\", \"getConnectorDefaults\"])\n    ]),\n    _hoisted_2,\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			// no module.id needed
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
/******/ 			"diagram/uml-sequence-diagram/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/uml-sequence-diagram/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;