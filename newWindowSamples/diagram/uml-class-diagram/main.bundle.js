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
/******/ 		"diagram/uml-class-diagram/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/uml-class-diagram/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/uml-class-diagram/App.vue":
/*!***************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1f5da392___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1f5da392& */ \"./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1f5da392___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1f5da392___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/uml-class-diagram/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/uml-class-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/uml-class-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392&":
/*!**********************************************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1f5da392___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1f5da392& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1f5da392___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1f5da392___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-class-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-class-diagram/main.js":
/*!***************************************************!*\
  !*** ./Samples/diagram/uml-class-diagram/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/uml-class-diagram/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-class-diagram/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-class-diagram/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\n\nlet diagramInstance;\n\nlet nodes = [\n    {\n      id: 'Patient',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Patient',\n          attributes: [\n            createProperty('accepted', 'Date'),\n            createProperty('sickness', 'History'),\n            createProperty('prescription', 'String[*]'),\n            createProperty('allergies', 'String[*]')\n          ],\n          methods: [createMethods('getHistory', 'History')]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 200,\n      offsetY: 250\n    },\n    {\n      id: 'Doctor',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Doctor',\n          attributes: [\n            createProperty('specialist', 'String[*]'),\n            createProperty('locations', 'String[*]')\n          ]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 240,\n      offsetY: 545\n    },\n    {\n      id: 'Person',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Person',\n          attributes: [\n            createProperty('name', 'Name'),\n            createProperty('title', 'String[*]'),\n            createProperty('gender', 'Gender')\n          ]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 405,\n      offsetY: 105\n    },\n    {\n      id: 'Hospital',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Hospital',\n          attributes: [\n            createProperty('name', 'Name'),\n            createProperty('address', 'Address'),\n            createProperty('phone', 'Phone')\n          ],\n          methods: [createMethods('getDepartment', 'String')]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 638,\n      offsetY: 100\n    },\n    {\n      id: 'Department',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Department',\n          methods: [createMethods('getStaffCount', 'Int')]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 638,\n      offsetY: 280\n    },\n    {\n      id: 'Staff',\n      shape: {\n        type: 'UmlClassifier',\n        classShape: {\n          name: 'Staff',\n          attributes: [\n            createProperty('joined', 'Date'),\n            createProperty('education', 'string[*]'),\n            createProperty('certification', 'string[*]'),\n            createProperty('languages', 'string[*]')\n          ],\n          methods: [\n            createMethods('isDoctor', 'bool'),\n            createMethods('getHistory', 'bool')\n          ]\n        },\n        classifier: 'Class'\n      },\n      offsetX: 635,\n      offsetY: 455\n    },\n    createNode('OperationStaff', 410, 455, 'OperationStaff'),\n    createNode('Nurse', 410, 545, 'Nurse'),\n    createNode('Surgeon', 240, 665, 'Surgeon'),\n    createNode('AdministrativeStaff', 632, 605, 'AdministrativeStaff'),\n    createNode('FrontDeskStaff', 630, 695, 'FrontDeskStaff'),\n    createNode('TechnicalStaff', 928, 445, 'TechnicalStaff'),\n    createNode('Technician', 815, 535, 'Technician'),\n    createNode('Technologist', 1015, 535, 'Technologist'),\n    createNode('SurgicalTechnologist', 1015, 630, 'SurgicalTechnologist')\n  ];\n\nlet connectors = [\n    createConnector('connect1', 'Patient', 'Person'),\n    createConnector('connect2', 'Person', 'Hospital'),\n    createConnector('connect3', 'Department', 'Hospital'),\n    createConnector('connect4', 'OperationStaff', 'Patient'),\n    createConnector('connect5', 'Doctor', 'OperationStaff'),\n    createConnector('connect6', 'Nurse', 'OperationStaff'),\n    createConnector('connect7', 'Surgeon', 'Doctor'),\n    createConnector('connect8', 'FrontDeskStaff', 'AdministrativeStaff'),\n    createConnector('connect9', 'Technician', 'TechnicalStaff'),\n    createConnector('connect10', 'Technologist', 'TechnicalStaff'),\n    createConnector('connect11', 'SurgicalTechnologist', 'Technologist'),\n    createConnector('connect12', 'Staff', 'Department'),\n    createConnector('connect13', 'Staff', 'Person'),\n    createConnector('connect14', 'OperationStaff', 'Staff'),\n    createConnector('connect15', 'AdministrativeStaff', 'Staff'),\n    createConnector('connect16', 'TechnicalStaff', 'Staff')\n  ];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"800px\",\n      nodes: nodes,\n      connectors: connectors,\n       //Sets the default values of a node\n      getNodeDefaults: (obj) => {\n        obj.style = { fill: '#26A0DA', strokeColor: 'white' };\n        return obj;\n      },\n      //Sets the default values of a connector\n      getConnectorDefaults: (connector) => {\n        return connector;\n      },\n      //set an label style for nodes\n       setNodeTemplate: (node) => {\n        if (node.annotations && node.annotations.length > 0) {\n        for (let i = 0; i < node.annotations.length; i++) {\n           let annotation = node.annotations[i];\n           if(annotation && annotation.style) {\n             annotation.style.color = 'white';\n           }\n         }\n        }\n      }\n    }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.fitToPage();\n  }\n}));\n\n //Create a connector.\n  function createConnector( id, sourceID, targetID ) {\n    let connector = {};\n    connector.id = id;\n    connector.sourceID = sourceID;\n    connector.targetID = targetID;\n    return connector;\n  }\n\n  //Create class Diagram shapes.\n  function createNode( id, offsetX, offsetY, className ) {\n    let node = {};\n    node.id = id;\n    node.offsetX = offsetX;\n    node.offsetY = offsetY;\n    node.shape = {\n      type: 'UmlClassifier',\n      classShape: {\n        name: className\n      },\n      classifier: 'Class'\n    };\n    return node;\n  }\n\n  //create class Property\n  function createProperty(name, type) {\n    return { name: name, type: type };\n  }\n\n  //create class Methods\n  function createMethods(name, type) {\n    return { name: name, type: type };\n  }\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-class-diagram/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-class-diagram/App.vue?vue&type=template&id=1f5da392& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\"ejs-diagram\", {\n          ref: \"diagramObj\",\n          attrs: {\n            id: \"diagram\",\n            width: _vm.width,\n            height: _vm.height,\n            nodes: _vm.nodes,\n            connectors: _vm.connectors,\n            getNodeDefaults: _vm.getNodeDefaults,\n            getConnectorDefaults: _vm.getConnectorDefaults,\n            setNodeTemplate: _vm.setNodeTemplate,\n          },\n        }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n     This sample represents the hospital management system using diagram's built-in UML class diagram shapes.\\n  \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n    This example shows how to create class shapes using diagram \"\n        ),\n        _c(\"code\", [_vm._v(\"UMLClass\")]),\n        _vm._v(\" shapes. The \"),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\" property of the\\n    \"),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\" can be used to create \"),\n        _c(\"code\", [_vm._v(\"UMLClass\")]),\n        _vm._v(\" nodes. The \"),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\n          \" property of the shape allows you to create UML\\n     Class shapes.\\n  \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-class-diagram/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });