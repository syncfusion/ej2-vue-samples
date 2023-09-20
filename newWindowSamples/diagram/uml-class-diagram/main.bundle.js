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

/***/ "./Samples/diagram/uml-class-diagram/main.js":
/*!***************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/main.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/uml-class-diagram/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-class-diagram/main.js?");

/***/ }),

/***/ "./Samples/diagram/uml-class-diagram/App.vue":
/*!***************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/App.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1f5da392__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1f5da392 */ \"./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1f5da392__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/uml-class-diagram/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-class-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n\n\n\nlet diagramInstance;\n\nlet nodes = [\n    {\n      id: 'Patient',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Patient',\n          attributes: [\n            createProperty('accepted', 'Date'),\n            createProperty('sickness', 'History'),\n            createProperty('prescription', 'String[*]'),\n            createProperty('allergies', 'String[*]')\n          ],\n          methods: [createMethods('getHistory', 'History')]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 200,\n      offsetY: 250\n    },\n    {\n      id: 'Doctor',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Doctor',\n          attributes: [\n            createProperty('specialist', 'String[*]'),\n            createProperty('locations', 'String[*]')\n          ]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 240,\n      offsetY: 545\n    },\n    {\n      id: 'Person',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Person',\n          attributes: [\n            createProperty('name', 'Name'),\n            createProperty('title', 'String[*]'),\n            createProperty('gender', 'Gender')\n          ]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 405,\n      offsetY: 105\n    },\n    {\n      id: 'Hospital',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Hospital',\n          attributes: [\n            createProperty('name', 'Name'),\n            createProperty('address', 'Address'),\n            createProperty('phone', 'Phone')\n          ],\n          methods: [createMethods('getDepartment', 'String')]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 638,\n      offsetY: 100\n    },\n    {\n      id: 'Department',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Department',\n          methods: [createMethods('getStaffCount', 'Int')]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 638,\n      offsetY: 280\n    },\n    {\n      id: 'Staff',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Staff',\n          attributes: [\n            createProperty('joined', 'Date'),\n            createProperty('education', 'string[*]'),\n            createProperty('certification', 'string[*]'),\n            createProperty('languages', 'string[*]')\n          ],\n          methods: [\n            createMethods('isDoctor', 'bool'),\n            createMethods('getHistory', 'bool')\n          ]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 635,\n      offsetY: 455\n    },\n    createNode('OperationStaff', 410, 455, 'OperationStaff'),\n    createNode('Nurse', 410, 545, 'Nurse'),\n    createNode('Surgeon', 240, 665, 'Surgeon'),\n    createNode('AdministrativeStaff', 632, 605, 'AdministrativeStaff'),\n    createNode('FrontDeskStaff', 630, 695, 'FrontDeskStaff'),\n    createNode('TechnicalStaff', 928, 445, 'TechnicalStaff'),\n    createNode('Technician', 815, 535, 'Technician'),\n    createNode('Technologist', 1015, 535, 'Technologist'),\n    createNode('SurgicalTechnologist', 1015, 630, 'SurgicalTechnologist')\n  ];\n\nlet connectors = [\n    createConnector('connect1', 'Patient', 'Person'),\n    createConnector('connect2', 'Person', 'Hospital'),\n    createConnector('connect3', 'Department', 'Hospital'),\n    createConnector('connect4', 'OperationStaff', 'Patient'),\n    createConnector('connect5', 'Doctor', 'OperationStaff'),\n    createConnector('connect6', 'Nurse', 'OperationStaff'),\n    createConnector('connect7', 'Surgeon', 'Doctor'),\n    createConnector('connect8', 'FrontDeskStaff', 'AdministrativeStaff'),\n    createConnector('connect9', 'Technician', 'TechnicalStaff'),\n    createConnector('connect10', 'Technologist', 'TechnicalStaff'),\n    createConnector('connect11', 'SurgicalTechnologist', 'Technologist'),\n    createConnector('connect12', 'Staff', 'Department'),\n    createConnector('connect13', 'Staff', 'Person'),\n    createConnector('connect14', 'OperationStaff', 'Staff'),\n    createConnector('connect15', 'AdministrativeStaff', 'Staff'),\n    createConnector('connect16', 'TechnicalStaff', 'Staff')\n  ];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent\n  },\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"800px\",\n      nodes: nodes,\n      connectors: connectors,\n       //Sets the default values of a node\n      getNodeDefaults: (obj) => {\n        obj.style = { fill: '#26A0DA', strokeColor: 'white' };\n        return obj;\n      },\n      //Sets the default values of a connector\n      getConnectorDefaults: (connector) => {\n        return connector;\n      },\n      //set an label style for nodes\n       setNodeTemplate: (node) => {\n        if (node.annotations && node.annotations.length > 0) {\n        for (let i = 0; i < node.annotations.length; i++) {\n           let annotation = node.annotations[i];\n           if(annotation && annotation.style) {\n             annotation.style.color = 'white';\n           }\n         }\n        }\n      }\n    }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.fitToPage();\n  }\n});\n\n //Create a connector.\n  function createConnector( id, sourceID, targetID ) {\n    let connector = {};\n    connector.id = id;\n    connector.sourceID = sourceID;\n    connector.targetID = targetID;\n    return connector;\n  }\n\n  //Create class Diagram shapes.\n  function createNode( id, offsetX, offsetY, className ) {\n    let node = {};\n    node.id = id;\n    node.offsetX = offsetX;\n    node.offsetY = offsetY;\n    node.shape = {\n      type: 'UmlClassifier',\n      classShape: {\n        name: className\n      },\n      classifier: 'Class'\n    };\n    return node;\n  }\n\n  //create class Property\n  function createProperty(name, type) {\n    return { name: name, type: type };\n  }\n\n  //create class Methods\n  function createMethods(name, type) {\n    return { name: name, type: type };\n  }\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-class-diagram/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-class-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392":
/*!*********************************************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1f5da392__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1f5da392__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1f5da392 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392\");\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-class-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392 ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample represents the hospital management system using diagram&#39;s built-in UML class diagram shapes. </p></div><div id=\\\"description\\\"><p> This example shows how to create class shapes using diagram <code>UMLClass</code> shapes. The <code>type</code> property of the <code>shape</code> can be used to create <code>UMLClass</code> nodes. The <code>shape</code> property of the shape allows you to create UML Class shapes. </p><br></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n        id: \"diagram\",\n        ref: \"diagramObj\",\n        width: _ctx.width,\n        height: _ctx.height,\n        nodes: _ctx.nodes,\n        connectors: _ctx.connectors,\n        getNodeDefaults: _ctx.getNodeDefaults,\n        getConnectorDefaults: _ctx.getConnectorDefaults,\n        setNodeTemplate: _ctx.setNodeTemplate\n      }, null, 8 /* PROPS */, [\"width\", \"height\", \"nodes\", \"connectors\", \"getNodeDefaults\", \"getConnectorDefaults\", \"setNodeTemplate\"])\n    ]),\n    _hoisted_2\n  ]))\n}\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/uml-class-diagram/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"diagram/uml-class-diagram/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/uml-class-diagram/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;