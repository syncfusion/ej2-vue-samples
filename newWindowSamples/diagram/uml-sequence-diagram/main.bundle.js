/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"diagram/uml-sequence-diagram/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/diagram/uml-sequence-diagram/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue":
/*!******************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0024867c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0024867c& */ \"./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0024867c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0024867c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/uml-sequence-diagram/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c&":
/*!*************************************************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0024867c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0024867c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0024867c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0024867c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/main.js":
/*!******************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/uml-sequence-diagram/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-sequence-diagram/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\n\nlet diagramInstance;\n\nlet nodes = [\n      {\n      id: 'employee', width: 100, height: 60, offsetX: 100, offsetY: 100,\n    shape: { type: 'Text', content: 'Employee'},style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'teamLead', width: 100, height: 60, offsetX: 350, offsetY: 100,\n    shape: { type: 'Text',content:'Team Lead' },style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'dashboard', width: 100, height: 60, offsetX: 600, offsetY: 100,\n    shape: { type: 'Text', content: 'Dashboard'},style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'manager', width: 100, height: 60, offsetX: 850, offsetY: 100,\n    shape: { type: 'Text', content: 'Manager'},style:{fill:'transparent',bold:true}\n  },\n  {\n      id: 'leaveRequest', width: 100, height: 60, offsetX: 225, offsetY: 250,\n    shape: { type: 'Text',content:'Leave Request' },style:{fill:'transparent'}\n  },\n  {\n      id: 'leaveApproval', width: 100, height: 60, offsetX: 225, offsetY: 484,\n    shape: { type: 'Text', content: 'Leave Approval'},style:{fill:'transparent'}\n  },\n  {\n      id:'checkEmplyeeAvail',shape:{type:'Text',content:'Check Employee availability and task status'},height:30,width:175,\n      offsetX:470,offsetY:345,style:{fill:'transparent'},\n  },\n  {\n      id:'forwardLeaveMssg',shape:{type:'Text',content:'Forward Leave Request'},height:30,width:150,\n      offsetX:600,offsetY:420,style:{fill:'transparent'}\n  },\n  {\n      id:'noObjection',shape:{type:'Text',content:'No Objection'},height:30,width:150,\n      offsetX:600,offsetY:460,style:{fill:'transparent'}\n  },\n  // Normal nodes\n  {\n      id:'employeeNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:250,offsetX:100,offsetY:350,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:1,y:0.05},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},\n              {id:'p2',offset:{x:1,y:0.97},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},]\n  },\n  {\n      id:'teamLeadNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:190,offsetX:350,offsetY:320,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:0,y:0.07},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},\n      {id:'p2',offset:{x:1,y:0.92},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},\n      {id:'p3',offset:{x:1,y:0.5},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},]\n  },\n  {\n      id:'dashboardNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:25,offsetX:600,offsetY:320,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:0,y:0.5},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden}]\n  },\n  {\n      id:'managerNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:50,offsetX:850,offsetY:420,\n      style:{fill:'orange',strokeColor:'orange'},\n      ports:[{id:'p1',offset:{x:0,y:0.1},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},\n      {id:'p2',offset:{x:0,y:0.9},visibility:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden},]\n  },\n  ];\n\nlet connectors = [\n {\n      id:'employeeCon1',type:'Straight',sourcePoint:{x:100,y:120},targetPoint:{x:100,y:225},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'employeeCon2',type:'Straight',sourcePoint:{x:100,y:475},targetPoint:{x:100,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'teamLeanCon1',type:'Straight',sourcePoint:{x:350,y:120},targetPoint:{x:350,y:225},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'teamLeanCon2',type:'Straight',sourcePoint:{x:350,y:415},targetPoint:{x:350,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'dashboardCon1',type:'Straight',sourcePoint:{x:600,y:120},targetPoint:{x:600,y:307},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'dashboardCon2',type:'Straight',sourcePoint:{x:600,y:333},targetPoint:{x:600,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'managerCon1',type:'Straight',sourcePoint:{x:850,y:120},targetPoint:{x:850,y:395},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n  {\n      id:'managerCon2',type:'Straight',sourcePoint:{x:850,y:445},targetPoint:{x:850,y:600},\n      targetDecorator:{shape:'None'},style:{strokeColor:'#A5A6A7'}\n  },\n\n  // arrow connectors\n  {\n      id:'empToTeamLead',type:'Straight',sourceID:'employeeNode',sourcePortID:'p1',\n      targetID:'teamLeadNode',targetPortID:'p1'\n  },\n  {\n      id:'teamLeadToEmp',type:'Straight',sourcePoint:{x:350,y:465},style:{strokeDashArray:'4 4'},\n      targetID:'employeeNode',targetPortID:'p2'\n  },\n  {\n      id:'teamLeadToDash',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p3',\n      targetID:'dashboardNode',targetPortID:'p1'\n  },\n  {\n      id:'teamLeadToManager',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p2',\n      targetID:'managerNode',targetPortID:'p1'\n  },\n  {\n      id:'managerToTeamLead',type:'Straight',sourceID:'managerNode',sourcePortID:'p2',\n      targetPoint:{x:350,y:440},style:{strokeDashArray:'4 4'}\n  },\n  ];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"800px\",\n      nodes: nodes,\n      connectors: connectors,\n      tool: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].ZoomPan,\n      snapSettings: {\n                constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None\n            },\n      getNodeDefaults: (obj) => {\n        obj.style = { fill: '#26A0DA', strokeColor: 'white' };\n        return obj;\n      },\n      //Sets the default values of a connector\n      getConnectorDefaults: (obj) => {\n        obj.targetDecorator.style = {fill:'#489ECC',strokeColor:'#489ECC'};\n        if(obj.targetDecorator.shape === 'Arrow'){\n        obj.style = {strokeColor:'#489ECC',strokeWidth:2};\n        }\n        return obj;\n      },\n    }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.fitToPage();\n  }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-sequence-diagram/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\"ejs-diagram\", {\n          ref: \"diagramObj\",\n          attrs: {\n            id: \"diagram\",\n            width: _vm.width,\n            height: _vm.height,\n            nodes: _vm.nodes,\n            tool: _vm.tool,\n            snapSettings: _vm.snapSettings,\n            connectors: _vm.connectors,\n            getConnectorDefaults: _vm.getConnectorDefaults,\n          },\n        }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n     This sample illustrates an employee’s leave request sequence using a UML sequence diagram. The shapes for the sequence were designed with the port feature for Diagram's nodes.\\n  \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This example shows how to create a UML sequence diagram using the port feature for nodes. The \"\n        ),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\n          \" property allows you to define the type of shape. The basic shape property allows you to define the shape of a node.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-sequence-diagram/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });