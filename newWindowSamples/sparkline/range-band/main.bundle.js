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

/***/ "./Samples/sparkline/range-band/main.js":
/*!**********************************************!*\
  !*** ./Samples/sparkline/range-band/main.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sparkline/range-band/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#range-band-table td{\\n        padding: 10px;\\n}\\n#spark-range-band .e-headertext{\\n        font-weight: bolder;\\n}\\n#range-band-table #range-min > * {\\n        padding: 0px !important;\\n}\\n#range-band-table #range-max > * {\\n        padding: 0px !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,aAAa;AACrB;AACA;QACQ,mBAAmB;AAC3B;AACA;QACQ,uBAAuB;AAC/B;AACA;QACQ,uBAAuB;AAC/B\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#range-band-table td{\\n        padding: 10px;\\n}\\n#spark-range-band .e-headertext{\\n        font-weight: bolder;\\n}\\n#range-band-table #range-min > * {\\n        padding: 0px !important;\\n}\\n#range-band-table #range-max > * {\\n        padding: 0px !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sparkline/range-band/datasource.ts":
/*!****************************************************!*\
  !*** ./Samples/sparkline/range-band/datasource.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orderdata: () => (/* binding */ orderdata),\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\n// tslint:disable\nvar orderdata = [{\n        OrderID: 10248,\n        CustomerID: \"VINET\",\n        EmployeeID: 1,\n        OrderDate: new Date(8364186e5),\n        ShipName: \"Vins et alcools Chevalier\",\n        ShipCity: \"Reims\",\n        ShipAddress: \"59 rue de l'Abbaye\",\n        ShipRegion: null,\n        ShipPostalCode: \"51100\",\n        ShipCountry: \"France\",\n        Freight: 32.38,\n        Verified: !0\n    }, {\n        OrderID: 10249,\n        CustomerID: \"TOMSP\",\n        EmployeeID: 2,\n        OrderDate: new Date(836505e6),\n        ShipName: \"Toms Spezialit�ten\",\n        ShipCity: \"M�nster\",\n        ShipAddress: \"Luisenstr. 48\",\n        ShipRegion: null,\n        ShipPostalCode: \"44087\",\n        ShipCountry: \"Germany\",\n        Freight: 11.61,\n        Verified: !1\n    }, {\n        OrderID: 10250,\n        CustomerID: \"HANAR\",\n        EmployeeID: 3,\n        OrderDate: new Date(8367642e5),\n        ShipName: \"Hanari Carnes\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua do Pa�o, 67\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"05454-876\",\n        ShipCountry: \"Brazil\",\n        Freight: 65.83,\n        Verified: !0\n    }, {\n        OrderID: 10251,\n        CustomerID: \"VICTE\",\n        EmployeeID: 4,\n        OrderDate: new Date(8367642e5),\n        ShipName: \"Victuailles en stock\",\n        ShipCity: \"Lyon\",\n        ShipAddress: \"2, rue du Commerce\",\n        ShipRegion: null,\n        ShipPostalCode: \"69004\",\n        ShipCountry: \"France\",\n        Freight: 41.34,\n        Verified: !0\n    }, {\n        OrderID: 10252,\n        CustomerID: \"SUPRD\",\n        EmployeeID: 5,\n        OrderDate: new Date(8368506e5),\n        ShipName: \"Supr�mes d�lices\",\n        ShipCity: \"Charleroi\",\n        ShipAddress: \"Boulevard Tirou, 255\",\n        ShipRegion: null,\n        ShipPostalCode: \"B-6000\",\n        ShipCountry: \"Belgium\",\n        Freight: 51.3,\n        Verified: !0\n    }, {\n        OrderID: 10253,\n        CustomerID: \"HANAR\",\n        EmployeeID: 6,\n        OrderDate: new Date(836937e6),\n        ShipName: \"Hanari Carnes\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua do Pa�o, 67\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"05454-876\",\n        ShipCountry: \"Brazil\",\n        Freight: 58.17,\n        Verified: !0\n    }, {\n        OrderID: 10254,\n        CustomerID: \"CHOPS\",\n        EmployeeID: 7,\n        OrderDate: new Date(8370234e5),\n        ShipName: \"Chop-suey Chinese\",\n        ShipCity: \"Bern\",\n        ShipAddress: \"Hauptstr. 31\",\n        ShipRegion: null,\n        ShipPostalCode: \"3012\",\n        ShipCountry: \"Switzerland\",\n        Freight: 22.98,\n        Verified: !1\n    }, {\n        OrderID: 10255,\n        CustomerID: \"RICSU\",\n        EmployeeID: 8,\n        OrderDate: new Date(8371098e5),\n        ShipName: \"Richter Supermarkt\",\n        ShipCity: \"Gen�ve\",\n        ShipAddress: \"Starenweg 5\",\n        ShipRegion: null,\n        ShipPostalCode: \"1204\",\n        ShipCountry: \"Switzerland\",\n        Freight: 148.33,\n        Verified: !0\n    }, {\n        OrderID: 10256,\n        CustomerID: \"WELLI\",\n        EmployeeID: 9,\n        OrderDate: new Date(837369e6),\n        ShipName: \"Wellington Importadora\",\n        ShipCity: \"Resende\",\n        ShipAddress: \"Rua do Mercado, 12\",\n        ShipRegion: \"SP\",\n        ShipPostalCode: \"08737-363\",\n        ShipCountry: \"Brazil\",\n        Freight: 13.97,\n        Verified: !1\n    }, {\n        OrderID: 10257,\n        CustomerID: \"HILAA\",\n        EmployeeID: 10,\n        OrderDate: new Date(8374554e5),\n        ShipName: \"HILARION-Abastos\",\n        ShipCity: \"San Crist�bal\",\n        ShipAddress: \"Carrera 22 con Ave. Carlos Soublette #8-35\",\n        ShipRegion: \"T�chira\",\n        ShipPostalCode: \"5022\",\n        ShipCountry: \"Venezuela\",\n        Freight: 81.91,\n        Verified: !0\n    }, {\n        OrderID: 10258,\n        CustomerID: \"ERNSH\",\n        EmployeeID: 11,\n        OrderDate: new Date(8375418e5),\n        ShipName: \"Ernst Handel\",\n        ShipCity: \"Graz\",\n        ShipAddress: \"Kirchgasse 6\",\n        ShipRegion: null,\n        ShipPostalCode: \"8010\",\n        ShipCountry: \"Austria\",\n        Freight: 140.51,\n        Verified: !0\n    }, {\n        OrderID: 10259,\n        CustomerID: \"CENTC\",\n        EmployeeID: 12,\n        OrderDate: new Date(8376282e5),\n        ShipName: \"Centro comercial Moctezuma\",\n        ShipCity: \"M�xico D.F.\",\n        ShipAddress: \"Sierras de Granada 9993\",\n        ShipRegion: null,\n        ShipPostalCode: \"05022\",\n        ShipCountry: \"Mexico\",\n        Freight: 3.25,\n        Verified: !1\n    }, {\n        OrderID: 10260,\n        CustomerID: \"OTTIK\",\n        EmployeeID: 13,\n        OrderDate: new Date(8377146e5),\n        ShipName: \"Ottilies K�seladen\",\n        ShipCity: \"K�ln\",\n        ShipAddress: \"Mehrheimerstr. 369\",\n        ShipRegion: null,\n        ShipPostalCode: \"50739\",\n        ShipCountry: \"Germany\",\n        Freight: 55.09,\n        Verified: !0\n    }, {\n        OrderID: 10261,\n        CustomerID: \"QUEDE\",\n        EmployeeID: 14,\n        OrderDate: new Date(8377146e5),\n        ShipName: \"Que Del�cia\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua da Panificadora, 12\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-673\",\n        ShipCountry: \"Brazil\",\n        Freight: 3.05,\n        Verified: !1\n    }, {\n        OrderID: 10262,\n        CustomerID: \"RATTC\",\n        EmployeeID: 15,\n        OrderDate: new Date(8379738e5),\n        ShipName: \"Rattlesnake Canyon Grocery\",\n        ShipCity: \"Albuquerque\",\n        ShipAddress: \"2817 Milton Dr.\",\n        ShipRegion: \"NM\",\n        ShipPostalCode: \"87110\",\n        ShipCountry: \"USA\",\n        Freight: 48.29,\n        Verified: !0\n    }, {\n        OrderID: 10263,\n        CustomerID: \"ERNSH\",\n        EmployeeID: 16,\n        OrderDate: new Date(8380602e5),\n        ShipName: \"Ernst Handel\",\n        ShipCity: \"Graz\",\n        ShipAddress: \"Kirchgasse 6\",\n        ShipRegion: null,\n        ShipPostalCode: \"8010\",\n        ShipCountry: \"Austria\",\n        Freight: 146.06,\n        Verified: !0\n    }, {\n        OrderID: 10264,\n        CustomerID: \"FOLKO\",\n        EmployeeID: 17,\n        OrderDate: new Date(8381466e5),\n        ShipName: \"Folk och f� HB\",\n        ShipCity: \"Br�cke\",\n        ShipAddress: \"�kergatan 24\",\n        ShipRegion: null,\n        ShipPostalCode: \"S-844 67\",\n        ShipCountry: \"Sweden\",\n        Freight: 3.67,\n        Verified: !1\n    }, {\n        OrderID: 10265,\n        CustomerID: \"BLONP\",\n        EmployeeID: 18,\n        OrderDate: new Date(838233e6),\n        ShipName: \"Blondel p�re et fils\",\n        ShipCity: \"Strasbourg\",\n        ShipAddress: \"24, place Kl�ber\",\n        ShipRegion: null,\n        ShipPostalCode: \"67000\",\n        ShipCountry: \"France\",\n        Freight: 55.28,\n        Verified: !0\n    }, {\n        OrderID: 10266,\n        CustomerID: \"WARTH\",\n        EmployeeID: 19,\n        OrderDate: new Date(8383194e5),\n        ShipName: \"Wartian Herkku\",\n        ShipCity: \"Oulu\",\n        ShipAddress: \"Torikatu 38\",\n        ShipRegion: null,\n        ShipPostalCode: \"90110\",\n        ShipCountry: \"Finland\",\n        Freight: 25.73,\n        Verified: !1\n    }, {\n        OrderID: 10267,\n        CustomerID: \"FRANK\",\n        EmployeeID: 20,\n        OrderDate: new Date(8385786e5),\n        ShipName: \"Frankenversand\",\n        ShipCity: \"M�nchen\",\n        ShipAddress: \"Berliner Platz 43\",\n        ShipRegion: null,\n        ShipPostalCode: \"80805\",\n        ShipCountry: \"Germany\",\n        Freight: 208.58,\n        Verified: !0\n    }, {\n        OrderID: 10268,\n        CustomerID: \"GROSR\",\n        EmployeeID: 21,\n        OrderDate: new Date(838665e6),\n        ShipName: \"GROSELLA-Restaurante\",\n        ShipCity: \"Caracas\",\n        ShipAddress: \"5� Ave. Los Palos Grandes\",\n        ShipRegion: \"DF\",\n        ShipPostalCode: \"1081\",\n        ShipCountry: \"Venezuela\",\n        Freight: 66.29,\n        Verified: !0\n    }, {\n        OrderID: 10269,\n        CustomerID: \"WHITC\",\n        EmployeeID: 22,\n        OrderDate: new Date(8387514e5),\n        ShipName: \"White Clover Markets\",\n        ShipCity: \"Seattle\",\n        ShipAddress: \"1029 - 12th Ave. S.\",\n        ShipRegion: \"WA\",\n        ShipPostalCode: \"98124\",\n        ShipCountry: \"USA\",\n        Freight: 4.56,\n        Verified: !1\n    }, {\n        OrderID: 10270,\n        CustomerID: \"WARTH\",\n        EmployeeID: 23,\n        OrderDate: new Date(8388378e5),\n        ShipName: \"Wartian Herkku\",\n        ShipCity: \"Oulu\",\n        ShipAddress: \"Torikatu 38\",\n        ShipRegion: null,\n        ShipPostalCode: \"90110\",\n        ShipCountry: \"Finland\",\n        Freight: 136.54,\n        Verified: !0\n    }, {\n        OrderID: 10271,\n        CustomerID: \"SPLIR\",\n        EmployeeID: 24,\n        OrderDate: new Date(8388378e5),\n        ShipName: \"Split Rail Beer & Ale\",\n        ShipCity: \"Lander\",\n        ShipAddress: \"P.O. Box 555\",\n        ShipRegion: \"WY\",\n        ShipPostalCode: \"82520\",\n        ShipCountry: \"USA\",\n        Freight: 4.54,\n        Verified: !1\n    }, {\n        OrderID: 10272,\n        CustomerID: \"RATTC\",\n        EmployeeID: 25,\n        OrderDate: new Date(8389242e5),\n        ShipName: \"Rattlesnake Canyon Grocery\",\n        ShipCity: \"Albuquerque\",\n        ShipAddress: \"2817 Milton Dr.\",\n        ShipRegion: \"NM\",\n        ShipPostalCode: \"87110\",\n        ShipCountry: \"USA\",\n        Freight: 98.03,\n        Verified: !0\n    }, {\n        OrderID: 10273,\n        CustomerID: \"QUICK\",\n        EmployeeID: 26,\n        OrderDate: new Date(8391834e5),\n        ShipName: \"QUICK-Stop\",\n        ShipCity: \"Cunewalde\",\n        ShipAddress: \"Taucherstra�e 10\",\n        ShipRegion: null,\n        ShipPostalCode: \"01307\",\n        ShipCountry: \"Germany\",\n        Freight: 76.07,\n        Verified: !0\n    }, {\n        OrderID: 10274,\n        CustomerID: \"VINET\",\n        EmployeeID: 27,\n        OrderDate: new Date(8392698e5),\n        ShipName: \"Vins et alcools Chevalier\",\n        ShipCity: \"Reims\",\n        ShipAddress: \"59 rue de l'Abbaye\",\n        ShipRegion: null,\n        ShipPostalCode: \"51100\",\n        ShipCountry: \"France\",\n        Freight: 6.01,\n        Verified: !1\n    }, {\n        OrderID: 10275,\n        CustomerID: \"MAGAA\",\n        EmployeeID: 28,\n        OrderDate: new Date(8393562e5),\n        ShipName: \"Magazzini Alimentari Riuniti\",\n        ShipCity: \"Bergamo\",\n        ShipAddress: \"Via Ludovico il Moro 22\",\n        ShipRegion: null,\n        ShipPostalCode: \"24100\",\n        ShipCountry: \"Italy\",\n        Freight: 26.93,\n        Verified: !1\n    }, {\n        OrderID: 10276,\n        CustomerID: \"TORTU\",\n        EmployeeID: 29,\n        OrderDate: new Date(8394426e5),\n        ShipName: \"Tortuga Restaurante\",\n        ShipCity: \"M�xico D.F.\",\n        ShipAddress: \"Avda. Azteca 123\",\n        ShipRegion: null,\n        ShipPostalCode: \"05033\",\n        ShipCountry: \"Mexico\",\n        Freight: 13.84,\n        Verified: !1\n    }, {\n        OrderID: 10277,\n        CustomerID: \"MORGK\",\n        EmployeeID: 30,\n        OrderDate: new Date(839529e6),\n        ShipName: \"Morgenstern Gesundkost\",\n        ShipCity: \"Leipzig\",\n        ShipAddress: \"Heerstr. 22\",\n        ShipRegion: null,\n        ShipPostalCode: \"04179\",\n        ShipCountry: \"Germany\",\n        Freight: 125.77,\n        Verified: !0\n    }, {\n        OrderID: 10278,\n        CustomerID: \"BERGS\",\n        EmployeeID: 31,\n        OrderDate: new Date(8397882e5),\n        ShipName: \"Berglunds snabbk�p\",\n        ShipCity: \"Lule�\",\n        ShipAddress: \"Berguvsv�gen  8\",\n        ShipRegion: null,\n        ShipPostalCode: \"S-958 22\",\n        ShipCountry: \"Sweden\",\n        Freight: 92.69,\n        Verified: !0\n    }, {\n        OrderID: 10279,\n        CustomerID: \"LEHMS\",\n        EmployeeID: 32,\n        OrderDate: new Date(8398746e5),\n        ShipName: \"Lehmanns Marktstand\",\n        ShipCity: \"Frankfurt a.M.\",\n        ShipAddress: \"Magazinweg 7\",\n        ShipRegion: null,\n        ShipPostalCode: \"60528\",\n        ShipCountry: \"Germany\",\n        Freight: 25.83,\n        Verified: !1\n    }, {\n        OrderID: 10280,\n        CustomerID: \"BERGS\",\n        EmployeeID: 33,\n        OrderDate: new Date(839961e6),\n        ShipName: \"Berglunds snabbk�p\",\n        ShipCity: \"Lule�\",\n        ShipAddress: \"Berguvsv�gen  8\",\n        ShipRegion: null,\n        ShipPostalCode: \"S-958 22\",\n        ShipCountry: \"Sweden\",\n        Freight: 8.98,\n        Verified: !1\n    }, {\n        OrderID: 10281,\n        CustomerID: \"ROMEY\",\n        EmployeeID: 34,\n        OrderDate: new Date(839961e6),\n        ShipName: \"Romero y tomillo\",\n        ShipCity: \"Madrid\",\n        ShipAddress: \"Gran V�a, 1\",\n        ShipRegion: null,\n        ShipPostalCode: \"28001\",\n        ShipCountry: \"Spain\",\n        Freight: 2.94,\n        Verified: !1\n    }, {\n        OrderID: 10282,\n        CustomerID: \"ROMEY\",\n        EmployeeID: 35,\n        OrderDate: new Date(8400474e5),\n        ShipName: \"Romero y tomillo\",\n        ShipCity: \"Madrid\",\n        ShipAddress: \"Gran V�a, 1\",\n        ShipRegion: null,\n        ShipPostalCode: \"28001\",\n        ShipCountry: \"Spain\",\n        Freight: 12.69,\n        Verified: !1\n    }, {\n        OrderID: 10283,\n        CustomerID: \"LILAS\",\n        EmployeeID: 36,\n        OrderDate: new Date(8401338e5),\n        ShipName: \"LILA-Supermercado\",\n        ShipCity: \"Barquisimeto\",\n        ShipAddress: \"Carrera 52 con Ave. Bol�var #65-98 Llano Largo\",\n        ShipRegion: \"Lara\",\n        ShipPostalCode: \"3508\",\n        ShipCountry: \"Venezuela\",\n        Freight: 84.81,\n        Verified: !0\n    }, {\n        OrderID: 10284,\n        CustomerID: \"LEHMS\",\n        EmployeeID: 37,\n        OrderDate: new Date(840393e6),\n        ShipName: \"Lehmanns Marktstand\",\n        ShipCity: \"Frankfurt a.M.\",\n        ShipAddress: \"Magazinweg 7\",\n        ShipRegion: null,\n        ShipPostalCode: \"60528\",\n        ShipCountry: \"Germany\",\n        Freight: 76.56,\n        Verified: !0\n    }, {\n        OrderID: 10285,\n        CustomerID: \"QUICK\",\n        EmployeeID: 38,\n        OrderDate: new Date(8404794e5),\n        ShipName: \"QUICK-Stop\",\n        ShipCity: \"Cunewalde\",\n        ShipAddress: \"Taucherstra�e 10\",\n        ShipRegion: null,\n        ShipPostalCode: \"01307\",\n        ShipCountry: \"Germany\",\n        Freight: 76.83,\n        Verified: !0\n    }, {\n        OrderID: 10286,\n        CustomerID: \"QUICK\",\n        EmployeeID: 39,\n        OrderDate: new Date(8405658e5),\n        ShipName: \"QUICK-Stop\",\n        ShipCity: \"Cunewalde\",\n        ShipAddress: \"Taucherstra�e 10\",\n        ShipRegion: null,\n        ShipPostalCode: \"01307\",\n        ShipCountry: \"Germany\",\n        Freight: 229.24,\n        Verified: !0\n    }, {\n        OrderID: 10287,\n        CustomerID: \"RICAR\",\n        EmployeeID: 40,\n        OrderDate: new Date(8406522e5),\n        ShipName: \"Ricardo Adocicados\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Av. Copacabana, 267\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-890\",\n        ShipCountry: \"Brazil\",\n        Freight: 12.76,\n        Verified: !1\n    }, {\n        OrderID: 10288,\n        CustomerID: \"REGGC\",\n        EmployeeID: 41,\n        OrderDate: new Date(8407386e5),\n        ShipName: \"Reggiani Caseifici\",\n        ShipCity: \"Reggio Emilia\",\n        ShipAddress: \"Strada Provinciale 124\",\n        ShipRegion: null,\n        ShipPostalCode: \"42100\",\n        ShipCountry: \"Italy\",\n        Freight: 7.45,\n        Verified: !1\n    }, {\n        OrderID: 10289,\n        CustomerID: \"BSBEV\",\n        EmployeeID: 42,\n        OrderDate: new Date(8409978e5),\n        ShipName: \"B's Beverages\",\n        ShipCity: \"London\",\n        ShipAddress: \"Fauntleroy Circus\",\n        ShipRegion: null,\n        ShipPostalCode: \"EC2 5NT\",\n        ShipCountry: \"UK\",\n        Freight: 22.77,\n        Verified: !1\n    }, {\n        OrderID: 10290,\n        CustomerID: \"COMMI\",\n        EmployeeID: 43,\n        OrderDate: new Date(8410842e5),\n        ShipName: \"Com�rcio Mineiro\",\n        ShipCity: \"Sao Paulo\",\n        ShipAddress: \"Av. dos Lus�adas, 23\",\n        ShipRegion: \"SP\",\n        ShipPostalCode: \"05432-043\",\n        ShipCountry: \"Brazil\",\n        Freight: 79.7,\n        Verified: !0\n    }, {\n        OrderID: 10291,\n        CustomerID: \"QUEDE\",\n        EmployeeID: 44,\n        OrderDate: new Date(8410842e5),\n        ShipName: \"Que Del�cia\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua da Panificadora, 12\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-673\",\n        ShipCountry: \"Brazil\",\n        Freight: 6.4,\n        Verified: !1\n    }, {\n        OrderID: 10292,\n        CustomerID: \"TRADH\",\n        EmployeeID: 45,\n        OrderDate: new Date(8411706e5),\n        ShipName: \"Tradi�ao Hipermercados\",\n        ShipCity: \"Sao Paulo\",\n        ShipAddress: \"Av. In�s de Castro, 414\",\n        ShipRegion: \"SP\",\n        ShipPostalCode: \"05634-030\",\n        ShipCountry: \"Brazil\",\n        Freight: 1.35,\n        Verified: !1\n    }, {\n        OrderID: 10293,\n        CustomerID: \"TORTU\",\n        EmployeeID: 46,\n        OrderDate: new Date(841257e6),\n        ShipName: \"Tortuga Restaurante\",\n        ShipCity: \"M�xico D.F.\",\n        ShipAddress: \"Avda. Azteca 123\",\n        ShipRegion: null,\n        ShipPostalCode: \"05033\",\n        ShipCountry: \"Mexico\",\n        Freight: 21.18,\n        Verified: !1\n    }, {\n        OrderID: 10294,\n        CustomerID: \"RATTC\",\n        EmployeeID: 47,\n        OrderDate: new Date(8413434e5),\n        ShipName: \"Rattlesnake Canyon Grocery\",\n        ShipCity: \"Albuquerque\",\n        ShipAddress: \"2817 Milton Dr.\",\n        ShipRegion: \"NM\",\n        ShipPostalCode: \"87110\",\n        ShipCountry: \"USA\",\n        Freight: 147.26,\n        Verified: !0\n    }, {\n        OrderID: 10295,\n        CustomerID: \"VINET\",\n        EmployeeID: 48,\n        OrderDate: new Date(8416026e5),\n        ShipName: \"Vins et alcools Chevalier\",\n        ShipCity: \"Reims\",\n        ShipAddress: \"59 rue de l'Abbaye\",\n        ShipRegion: null,\n        ShipPostalCode: \"51100\",\n        ShipCountry: \"France\",\n        Freight: 1.15,\n        Verified: !1\n    }, {\n        OrderID: 10296,\n        CustomerID: \"LILAS\",\n        EmployeeID: 49,\n        OrderDate: new Date(841689e6),\n        ShipName: \"LILA-Supermercado\",\n        ShipCity: \"Barquisimeto\",\n        ShipAddress: \"Carrera 52 con Ave. Bol�var #65-98 Llano Largo\",\n        ShipRegion: \"Lara\",\n        ShipPostalCode: \"3508\",\n        ShipCountry: \"Venezuela\",\n        Freight: .12,\n        Verified: !1\n    }, {\n        OrderID: 10297,\n        CustomerID: \"BLONP\",\n        EmployeeID: 50,\n        OrderDate: new Date(8417754e5),\n        ShipName: \"Blondel p�re et fils\",\n        ShipCity: \"Strasbourg\",\n        ShipAddress: \"24, place Kl�ber\",\n        ShipRegion: null,\n        ShipPostalCode: \"67000\",\n        ShipCountry: \"France\",\n        Freight: 5.74,\n        Verified: !1\n    }, {\n        OrderID: 10298,\n        CustomerID: \"HUNGO\",\n        EmployeeID: 51,\n        OrderDate: new Date(8418618e5),\n        ShipName: \"Hungry Owl All-Night Grocers\",\n        ShipCity: \"Cork\",\n        ShipAddress: \"8 Johnstown Road\",\n        ShipRegion: \"Co. Cork\",\n        ShipPostalCode: null,\n        ShipCountry: \"Ireland\",\n        Freight: 168.22,\n        Verified: !0\n    }, {\n        OrderID: 10299,\n        CustomerID: \"RICAR\",\n        EmployeeID: 52,\n        OrderDate: new Date(8419482e5),\n        ShipName: \"Ricardo Adocicados\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Av. Copacabana, 267\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-890\",\n        ShipCountry: \"Brazil\",\n        Freight: 29.76,\n        Verified: !1\n    }, {\n        OrderID: 10300,\n        CustomerID: \"MAGAA\",\n        EmployeeID: 53,\n        OrderDate: new Date(8422074e5),\n        ShipName: \"Magazzini Alimentari Riuniti\",\n        ShipCity: \"Bergamo\",\n        ShipAddress: \"Via Ludovico il Moro 22\",\n        ShipRegion: null,\n        ShipPostalCode: \"24100\",\n        ShipCountry: \"Italy\",\n        Freight: 17.68,\n        Verified: !1\n    }, {\n        OrderID: 10301,\n        CustomerID: \"WANDK\",\n        EmployeeID: 54,\n        OrderDate: new Date(8422074e5),\n        ShipName: \"Die Wandernde Kuh\",\n        ShipCity: \"Stuttgart\",\n        ShipAddress: \"Adenauerallee 900\",\n        ShipRegion: null,\n        ShipPostalCode: \"70563\",\n        ShipCountry: \"Germany\",\n        Freight: 45.08,\n        Verified: !0\n    }, {\n        OrderID: 10302,\n        CustomerID: \"SUPRD\",\n        EmployeeID: 55,\n        OrderDate: new Date(8422938e5),\n        ShipName: \"Supr�mes d�lices\",\n        ShipCity: \"Charleroi\",\n        ShipAddress: \"Boulevard Tirou, 255\",\n        ShipRegion: null,\n        ShipPostalCode: \"B-6000\",\n        ShipCountry: \"Belgium\",\n        Freight: 6.27,\n        Verified: !1\n    }\n];\nvar products = [\n    {\n        id: 1,\n        name: 'Product A',\n        previousYear: 10,\n        lastYear: 20\n    },\n    {\n        id: 2,\n        name: 'Product B',\n        previousYear: 20,\n        lastYear: 30\n    },\n    {\n        id: 3,\n        name: 'Product C',\n        previousYear: 30,\n        lastYear: 20\n    },\n    {\n        id: 4,\n        name: 'Product D',\n        previousYear: 40,\n        lastYear: 10\n    },\n    {\n        id: 5,\n        name: 'Product E',\n        previousYear: 20,\n        lastYear: 30\n    }\n];\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/datasource.ts?");

/***/ }),

/***/ "./Samples/sparkline/range-band/rangeband.ts":
/*!***************************************************!*\
  !*** ./Samples/sparkline/range-band/rangeband.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   line: () => (/* binding */ line)\n/* harmony export */ });\n// tslint:disable\nvar line = [\n    [0, 6, 4, 1, 3, 2, 5],\n    [5, 4, 6, 3, 1, 2, 0],\n    [6, 4, 0, 3, 2, 5, 1],\n    [4, 6, 3, 0, 1, 2, 5],\n    [3, 5, 6, 4, 0, 1, 2],\n    [1, 3, 4, 2, 5, 0, 6],\n    [2, 4, 0, 3, 5, 6, 1],\n    [5, 4, 6, 3, 1, 2, 0],\n    [0, 6, 4, 1, 3, 2, 5],\n    [6, 4, 0, 3, 2, 5, 1],\n    [4, 6, 3, 0, 1, 2, 5],\n    [3, 5, 6, 4, 0, 1, 2],\n    [1, 3, 4, 2, 5, 0, 6],\n    [2, 4, 0, 3, 5, 6, 1],\n    [5, 4, 6, 3, 1, 2, 0],\n    [0, 6, 4, 1, 3, 2, 5],\n    [6, 4, 0, 3, 2, 5, 1],\n    [4, 6, 3, 0, 1, 2, 5],\n    [2, 4, 0, 3, 5, 6, 1],\n    [3, 5, 6, 4, 0, 1, 2],\n    [1, 3, 4, 2, 5, 0, 6]\n];\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/rangeband.ts?");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue":
/*!**********************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_b7ac16ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b7ac16ae */ \"./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_b7ac16ae_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css */ \"./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_b7ac16ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/sparkline/range-band/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datasource */ \"./Samples/sparkline/range-band/datasource.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _column_template_one_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column-template-one.vue */ \"./Samples/sparkline/range-band/column-template-one.vue\");\n/* harmony import */ var _column_template_two_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./column-template-two.vue */ \"./Samples/sparkline/range-band/column-template-two.vue\");\n/* harmony import */ var _rangeband__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rangeband */ \"./Samples/sparkline/range-band/rangeband.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nlet lineData = _rangeband__WEBPACK_IMPORTED_MODULE_9__.line;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-sparkline': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__.SparklineComponent,\n        'ejs-grid': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.GridComponent,\n        'e-columns': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.ColumnsDirective,\n        'e-column': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.ColumnDirective,\n        'ejs-slider': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__.SliderComponent\n    },\n    data: function () {\n        return {\n            dataSource: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__.DataManager(_datasource__WEBPACK_IMPORTED_MODULE_4__.products).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__.Query()),\n            allowSelection: false,            \n            enableHover: true,\n            value:1,\n            value2:3,\n            type: 'MinRange',\n            cTemplate: function () {\n                return {\n                    template: (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({}).component('cTemplate', _column_template_one_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n                }\n            },\n            gTemplate: function () {\n                return {\n                    template: (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({}).component('gTemplate', _column_template_two_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n                }\n            }\n        }\n    },\n    provide: {\n        grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__.Selection]\n    },\n    mounted: function () {\n        setTimeout(() => {\n            for (let i = 1; i <= 5; i++) {\n                let spark1 = new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__.Sparkline({\n                height: '50px',\n                width: '150px',\n                lineWidth: 2,\n                fill: '#0d3c9b',\n                dataSource: lineData[0],\n                load:load,\n                rangeBandSettings: [{\n                    startRange: 1,\n                    endRange: 3,\n                    color: '#bfd4fc'\n                }]\n                });\n                spark1.dataSource = lineData[i];\n                spark1.appendTo('#sparkline2010' + i);\n                let spark2 =new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__.Sparkline({\n                height: '50px',\n                width: '150px',\n                lineWidth: 2,\n                fill: '#0d3c9b',\n                load:load,\n                dataSource: lineData[0],\n                rangeBandSettings: [{\n                    startRange: 1,\n                    endRange: 3,\n                    color: '#bfd4fc'\n                }]\n                });\n                spark2.dataSource = lineData[i + 5];\n                spark2.appendTo('#sparkline2011' + i);\n            }\n        }, 1000);\n        /* custom code start */\n    function load(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material';\n        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast') ;\n        }\n    },\n    /* custom code end */\n    methods: {\n        changeRangemin: function (e) {\n            this.changeRangeMin(e.value);\n        },\n        changeRangemax: function (e) {\n            this.changeRangeMax(e.value);\n        },\n        changeRangeMin:function(min){\n            for (let i = 1; i <= 5; i++) {\n                let first = document.getElementById('sparkline2010' + i);\n                let second = document.getElementById('sparkline2011' + i);\n                first.ej2_instances[0].rangeBandSettings[0].startRange = min;\n                second.ej2_instances[0].rangeBandSettings[0].startRange = min;\n                first.ej2_instances[0].refresh();\n                second.ej2_instances[0].refresh();\n            }\n        },\n        changeRangeMax:function(max){\n            for (let i = 1; i <= 5; i++) {\n                let first = document.getElementById('sparkline2010' + i);\n                let second = document.getElementById('sparkline2011' + i);\n                first.ej2_instances[0].rangeBandSettings[0].endRange = max;\n                second.ej2_instances[0].rangeBandSettings[0].endRange = max;\n                first.ej2_instances[0].refresh();\n                second.ej2_instances[0].refresh();\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-one.vue":
/*!**************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-one.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _column_template_one_vue_vue_type_template_id_7560e5d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-template-one.vue?vue&type=template&id=7560e5d2 */ \"./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2\");\n/* harmony import */ var _column_template_one_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-template-one.vue?vue&type=script&lang=js */ \"./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_column_template_one_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_column_template_one_vue_vue_type_template_id_7560e5d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/sparkline/range-band/column-template-one.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-one.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data () {\n    return {\n        data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-one.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-two.vue":
/*!**************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-two.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _column_template_two_vue_vue_type_template_id_e46ed290__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-template-two.vue?vue&type=template&id=e46ed290 */ \"./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290\");\n/* harmony import */ var _column_template_two_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-template-two.vue?vue&type=script&lang=js */ \"./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_column_template_two_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_column_template_two_vue_vue_type_template_id_e46ed290__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/sparkline/range-band/column-template-two.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-two.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data () {\n    return {\n        data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-two.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_one_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_one_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./column-template-one.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-one.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_two_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_two_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./column-template-two.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-two.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae":
/*!****************************************************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_b7ac16ae__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_b7ac16ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=b7ac16ae */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2":
/*!********************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_one_vue_vue_type_template_id_7560e5d2__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_one_vue_vue_type_template_id_7560e5d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./column-template-one.vue?vue&type=template&id=7560e5d2 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-one.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290":
/*!********************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_two_vue_vue_type_template_id_e46ed290__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_column_template_two_vue_vue_type_template_id_e46ed290__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./column-template-two.vue?vue&type=template&id=e46ed290 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-two.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css":
/*!******************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7ac16ae_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7ac16ae_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7ac16ae_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7ac16ae_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b7ac16ae_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-lg-8 control-section\" }\nconst _hoisted_2 = {\n  id: \"spark-range-band\",\n  class: \"row\"\n}\nconst _hoisted_3 = {\n  class: \"cols-sample-area\",\n  align: \"center\"\n}\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample demonstrates the range band feature and its customization available in Sparkline. \")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, you can see how to render sparkline with range band and the customization options available in range band. Here the sparklines are placed inside the Data Grid control. \")\n], -1 /* HOISTED */)\nconst _hoisted_6 = { class: \"col-lg-4 property-section\" }\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)\nconst _hoisted_8 = {\n  id: \"property\",\n  style: {\"width\":\"100%\"},\n  title: \"Properties\"\n}\nconst _hoisted_9 = { id: \"range-band-table\" }\nconst _hoisted_10 = { style: {\"height\":\"30px\"} }\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"width\":\"50%\"} }, \" Range Band Min 1 \", -1 /* HOISTED */)\nconst _hoisted_12 = { style: {\"width\":\"50%\"} }\nconst _hoisted_13 = { style: {\"height\":\"30px\"} }\nconst _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"width\":\"50%\"} }, \" Range Band Max 3 \", -1 /* HOISTED */)\nconst _hoisted_15 = { style: {\"width\":\"50%\"} }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_font = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"font\")\n  const _component_e_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-column\")\n  const _component_e_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-columns\")\n  const _component_ejs_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-grid\")\n  const _component_ejs_slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-slider\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font, { size: \"4px\" }, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Sales Growth Comparison with various Products\")\n              ]),\n              _: 1 /* STABLE */\n            }),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_grid, {\n              id: \"Grid\",\n              dataSource: _ctx.dataSource,\n              allowSelection: _ctx.allowSelection,\n              enableHover: _ctx.enableHover,\n              height: \"400\"\n            }, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_columns, null, {\n                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                      field: \"name\",\n                      headerText: \"Name\",\n                      width: \"50\",\n                      textAlign: \"Right\"\n                    }),\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                      headerText: \"2010\",\n                      width: \"100\",\n                      textAlign: \"Center\",\n                      template: _ctx.cTemplate\n                    }, null, 8 /* PROPS */, [\"template\"]),\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                      headerText: \"2011\",\n                      width: \"100\",\n                      textAlign: \"Center\",\n                      template: _ctx.gTemplate\n                    }, null, 8 /* PROPS */, [\"template\"])\n                  ]),\n                  _: 1 /* STABLE */\n                })\n              ]),\n              _: 1 /* STABLE */\n            }, 8 /* PROPS */, [\"dataSource\", \"allowSelection\", \"enableHover\"])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_4,\n    _hoisted_5,\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"             \"),\n      _hoisted_7,\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_8, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", _hoisted_9, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_10, [\n            _hoisted_11,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_12, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_slider, {\n                id: \"range-min\",\n                style: { padding: '0px' },\n                value: _ctx.value,\n                type: _ctx.type,\n                change: $options.changeRangemin,\n                max: \"6\",\n                min: \"0\"\n              }, null, 8 /* PROPS */, [\"value\", \"type\", \"change\"])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_13, [\n            _hoisted_14,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_15, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_slider, {\n                id: \"range-max\",\n                style: { padding: '0px' },\n                value: _ctx.value2,\n                type: _ctx.type,\n                change: $options.changeRangemax,\n                max: \"6\",\n                min: \"0\"\n              }, null, 8 /* PROPS */, [\"value\", \"type\", \"change\"])\n            ])\n          ])\n        ])\n      ])\n    ])\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = [\"id\"]\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    id: `sparkline2010${$data.data.id}`\n  }, null, 8 /* PROPS */, _hoisted_1))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-one.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = [\"id\"]\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    id: `sparkline2011${$data.data.id}`\n  }, null, 8 /* PROPS */, _hoisted_1))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/column-template-two.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&id=b7ac16ae&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"0b47dfd4\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sparkline/range-band/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"sparkline/range-band/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/sparkline/range-band/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;