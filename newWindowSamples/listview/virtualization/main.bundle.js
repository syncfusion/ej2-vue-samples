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

/***/ "./Samples/listview/virtualization/main.js":
/*!*************************************************!*\
  !*** ./Samples/listview/virtualization/main.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/listview/virtualization/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n/* ListView position alignment */\\n#ui-list.e-listview {\\n    margin: auto;\\n    max-width: 325px;\\n    line-height: initial;\\n    border: 1px solid lightgray;\\n}\\n\\n/* ListView header alignment */\\n#ui-list.e-listview .e-list-header {\\n    height: 50px\\n}\\n#ui-list.e-listview .e-list-header .e-text {\\n    line-height: 18px\\n}\\n\\n/* ListView template customization */\\n#ui-list.e-listview .showUI {\\n    display: flex;\\n}\\n#ui-list.e-listview .hideUI {\\n    display: none;\\n}\\n#ui-list.e-listview .e-list-item {\\n    padding: 3px 0;\\n}\\n#ui-list.e-listview .R {\\n    background: lightgrey;\\n}\\n#ui-list.e-listview .M {\\n    background: pink;\\n}\\n#ui-list.e-listview .A {\\n    background: lightgreen;\\n}\\n#ui-list.e-listview .S {\\n    background: lightskyblue;\\n}\\n#ui-list.e-listview .J {\\n    background: orange;\\n}\\n#ui-list.e-listview .N {\\n    background: lightblue;\\n}\\n\\n/* ListView theme customization */\\n.highcontrast #ui-list.e-listview .e-list-item:not(.e-hover),\\n.highcontrast #ui-list.e-listview .e-list-header {\\n    background: rgb(0, 0, 0);\\n}\\n.highcontrast #ui-list.e-listview .e-list-item.e-active {\\n    background: #ffd939;\\n    color: #000000;\\n}\\n\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA,gCAAgC;AAChC;IACI,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA,8BAA8B;AAC9B;IACI;AACJ;AACA;IACI;AACJ;;AAEA,oCAAoC;AACpC;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;;AAEA,iCAAiC;AACjC;;IAEI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;IACnB,cAAc;AAClB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n/* ListView position alignment */\\n#ui-list.e-listview {\\n    margin: auto;\\n    max-width: 325px;\\n    line-height: initial;\\n    border: 1px solid lightgray;\\n}\\n\\n/* ListView header alignment */\\n#ui-list.e-listview .e-list-header {\\n    height: 50px\\n}\\n#ui-list.e-listview .e-list-header .e-text {\\n    line-height: 18px\\n}\\n\\n/* ListView template customization */\\n#ui-list.e-listview .showUI {\\n    display: flex;\\n}\\n#ui-list.e-listview .hideUI {\\n    display: none;\\n}\\n#ui-list.e-listview .e-list-item {\\n    padding: 3px 0;\\n}\\n#ui-list.e-listview .R {\\n    background: lightgrey;\\n}\\n#ui-list.e-listview .M {\\n    background: pink;\\n}\\n#ui-list.e-listview .A {\\n    background: lightgreen;\\n}\\n#ui-list.e-listview .S {\\n    background: lightskyblue;\\n}\\n#ui-list.e-listview .J {\\n    background: orange;\\n}\\n#ui-list.e-listview .N {\\n    background: lightblue;\\n}\\n\\n/* ListView theme customization */\\n.highcontrast #ui-list.e-listview .e-list-item:not(.e-hover),\\n.highcontrast #ui-list.e-listview .e-list-header {\\n    background: rgb(0, 0, 0);\\n}\\n.highcontrast #ui-list.e-listview .e-list-item.e-active {\\n    background: #ffd939;\\n    color: #000000;\\n}\\n\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/listview/virtualization/listData.ts":
/*!*****************************************************!*\
  !*** ./Samples/listview/virtualization/listData.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callHistory: () => (/* binding */ callHistory),\n/* harmony export */   flatData: () => (/* binding */ flatData),\n/* harmony export */   foodData: () => (/* binding */ foodData),\n/* harmony export */   foodItems: () => (/* binding */ foodItems),\n/* harmony export */   groupDataList: () => (/* binding */ groupDataList),\n/* harmony export */   groupTemplateData: () => (/* binding */ groupTemplateData),\n/* harmony export */   nestedListData: () => (/* binding */ nestedListData),\n/* harmony export */   virtualizationData: () => (/* binding */ virtualizationData)\n/* harmony export */ });\nvar callHistory = [\n    {\n        text: \"Smith\",\n        id: \"received-01\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"2 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Johnson\",\n        id: \"received-02\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Williams\",\n        id: \"missed-01\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"4 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Jones\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Brown\",\n        id: \"received-03\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Anderson\",\n        id: \"received-01\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"12 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Thomas\",\n        id: \"received-02\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Jackson\",\n        id: \"missed-01\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Emily\",\n        id: \"missed-01\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"14 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"White\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Jones\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"18 hours ago\",\n        category: \"Today\"\n    },\n    {\n        text: \"Grace\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Brooklyn\",\n        id: \"missed-02\",\n        icon: \"e-custom\",\n        type: \"missed\",\n        group: \"Missed\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Arianna\",\n        id: \"received-01\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    },\n    {\n        text: \"Katherine\",\n        id: \"received-02\",\n        icon: \"e-custom\",\n        type: \"received\",\n        group: \"Received\",\n        time: \"Yesterday\",\n        category: \"Yesterday\"\n    }\n];\nvar flatData = [\n    { text: 'Hennessey Venom', id: 'list-01' },\n    { text: 'Bugatti Chiron', id: 'list-02' },\n    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },\n    { text: 'SSC Ultimate Aero', id: 'list-04' },\n    { text: 'Koenigsegg CCR', id: 'list-05' },\n    { text: 'McLaren F1', id: 'list-06' },\n    { text: 'Aston Martin One- 77', id: 'list-07' },\n    { text: 'Jaguar XJ220', id: 'list-08' },\n    { text: 'McLaren P1', id: 'list-09' },\n    { text: 'Ferrari LaFerrari', id: 'list-10' },\n    { text: 'Zenvo ST1', id: 'list-11' },\n    { text: 'Lamborghini Veneno', id: 'list-12' }\n];\nvar groupDataList = [\n    {\n        'text': 'Audi A4',\n        'id': '9bdb',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A5',\n        'id': '4589',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A6',\n        'id': 'e807',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A7',\n        'id': 'a0cc',\n        'category': 'Audi'\n    },\n    {\n        'text': 'Audi A8',\n        'id': '5e26',\n        'category': 'Audi'\n    },\n    {\n        'text': 'BMW 501',\n        'id': 'f849',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 502',\n        'id': '7aff',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 503',\n        'id': 'b1da',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 507',\n        'id': 'de2f',\n        'category': 'BMW'\n    },\n    {\n        'text': 'BMW 3200',\n        'id': 'b2b1',\n        'category': 'BMW'\n    }\n];\nvar groupTemplateData = [\n    {\n        Name: \"WI-FI\",\n        content: \"Disabled\",\n        id: \"1\",\n        class: \"wifi\",\n        category: \"Wireless & networks\",\n        order: 0\n    },\n    {\n        Name: \"Bluetooth\",\n        content: \"Disabled\",\n        id: \"2\",\n        class: \"bluetooth\",\n        category: \"Wireless & networks\",\n        order: 0\n    },\n    {\n        Name: \"SIM cards\",\n        id: \"3\",\n        class: \"sim\",\n        content: \"AT&T\",\n        category: \"Wireless & networks\",\n        order: 0\n    },\n    {\n        Name: \"Display\",\n        content: \"Adaptive brightness is OFF\",\n        id: \"4\",\n        class: \"display\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Sound\",\n        content: \"Ringer volume at 50%\",\n        id: \"5\",\n        class: \"sound\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Battery\",\n        content: \"85%\",\n        id: \"5\",\n        class: \"battery\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Users\",\n        content: \"Signed in as Albert\",\n        id: \"6\",\n        class: \"user\",\n        category: \"Device\",\n        order: 1\n    },\n    {\n        Name: \"Location\",\n        content: \"ON / High accuracy\",\n        id: \"7\",\n        class: \"location\",\n        category: \"Personal\",\n        order: 2\n    },\n    {\n        Name: \"Security\",\n        id: \"8\",\n        class: \"security\",\n        content: \"Screen Lock\",\n        category: \"Personal\",\n        order: 2\n    },\n    {\n        Name: \"Languages & input\",\n        content: \"English (US)\",\n        id: \"9\",\n        class: \"language\",\n        category: \"Personal\",\n        order: 2\n    }\n];\nvar nestedListData = [\n    {\n        id: '01', text: 'Music', icon: 'folder',\n        child: [\n            { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }\n        ]\n    },\n    {\n        id: '02', text: 'Videos', icon: 'folder',\n        child: [\n            { id: '02-01', text: 'Naturals.mp4', icon: 'file' },\n            { id: '02-02', text: 'Wild.mpeg', icon: 'file' },\n        ]\n    },\n    {\n        id: '03', text: 'Documents', icon: 'folder',\n        child: [\n            { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },\n            { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },\n            { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },\n            { id: '03-04', text: 'Social Network.pdf', icon: 'file' },\n            { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },\n        ]\n    },\n    {\n        id: '04', text: 'Pictures', icon: 'folder',\n        child: [\n            {\n                id: '04-01', text: 'Camera Roll', icon: 'folder',\n                child: [\n                    { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },\n                    { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },\n                    { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }\n                ]\n            },\n            {\n                id: '04-02', text: 'Wind.jpg', icon: 'file'\n            },\n            {\n                id: '04-02', text: 'Stone.jpg', icon: 'file'\n            },\n            {\n                id: '04-02', text: 'Home.jpg', icon: 'file'\n            },\n            {\n                id: '04-02', text: 'Bridge.png', icon: 'file'\n            }\n        ]\n    },\n    {\n        id: '05', text: 'Downloads', icon: 'folder',\n        child: [\n            { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },\n            { id: '05-02', text: 'Tutorials.zip', icon: 'file' },\n            { id: '05-03', text: 'Game.exe', icon: 'file' },\n            { id: '05-04', text: 'TypeScript.7z', icon: 'file' },\n        ]\n    }\n];\nvar virtualizationData = [{\n        name: \"Nancy\",\n        icon: \"N\",\n        id: \"0\"\n    },\n    {\n        name: \"Andrew\",\n        icon: \"A\",\n        id: \"1\"\n    },\n    {\n        name: \"Janet\",\n        icon: \"J\",\n        id: \"2\"\n    },\n    {\n        name: \"Margaret\",\n        imgUrl: \"src/listview/images/margaret.png\",\n        id: \"3\"\n    },\n    {\n        name: \"Steven\",\n        icon: \"S\",\n        id: \"4\"\n    },\n    {\n        name: \"Laura\",\n        imgUrl: \"src/listview/images/laura.png\",\n        id: \"5\"\n    },\n    {\n        name: \"Robert\",\n        icon: \"R\",\n        id: \"6\"\n    },\n    {\n        name: \"Michael\",\n        icon: \"M\",\n        id: \"7\"\n    },\n    {\n        name: \"Albert\",\n        imgUrl: \"src/listview/images/albert.png\",\n        id: \"8\"\n    },\n    {\n        name: \"Nolan\",\n        icon: \"N\",\n        id: \"9\"\n    }\n];\nvar foodData = [\n    { text: 'Hamburger', id: 'list-01', price: '$10', src: 'hamburger.jpg', type: 'non-veg', description: 'A patty of ground beef grilled and placed between two halves of a bun with slices of lettuce and mayonnaise', rating: 3 },\n    { text: 'Cheeseburger', id: 'list-02', price: '$12', src: 'cheeseburger.jpg', type: 'veg', description: 'A hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time', rating: 4 },\n    { text: 'Sandwich', id: 'list-03', price: '$8', src: 'sandwich.jpg', type: 'veg', description: 'A combination of vegetables, sliced cheese or meat, placed on or between slices of bread with layer of ingredients', rating: 5 },\n    { text: 'Milkshake', id: 'list-04', price: '$6', src: 'milkshake.jpg', type: 'veg', description: 'A sweet beverage made by blending milk, ice cream, and flavorings or fruit syrup into a thick, sweet, cold mixture', rating: 3 },\n    { text: 'Muffin', id: 'list-05', price: '$11', src: 'muffin.jpg', type: 'veg', description: 'Muffins are single-serving quick breads, which rise with the help of baking soda or baking powder and eggs instead of yeast', rating: 4 },\n    { text: 'Pizza', id: 'list-06', price: '$22', src: 'pizza.jpg', type: 'veg', description: 'A combination of a flattened disk of bread dough with olive oil, oregano, tomato, mozzarella cheese', rating: 3 },\n    { text: 'Onion ring', id: 'list-07', price: '$10', src: 'onionrings.jpg', type: 'veg', description: 'Consists of a cross-sectional \"ring\" of onion dipped in bread crumbs and then deep fried; variant is made with onion paste.', rating: 4 },\n    { text: 'Sausage', id: 'list-08', price: '$15', src: 'sausage.jpg', type: 'veg', description: 'Sausage is a combination of minced/ground meat, a binder, water and seasonings, mild but strongly spiced', rating: 5 },\n    { text: 'Pretzel', id: 'list-09', price: '$25', src: 'pretzel.jpg', type: 'veg', description: 'Made from a rope of dough, the pretzel is briefly boiled and then glazed with egg, salted, and baked', rating: 3 },\n    { text: 'Pancake', id: 'list-10', price: '$23', src: 'pancake.jpg', type: 'veg', description: 'A combination of eggs, milk on a hot surface such as a griddle or frying pan, often frying with oil or butter', rating: 4 },\n];\nvar foodItems = [\n    { text: 'Taco', price: '$15', src: 'taco.jpg', type: 'veg', description: 'A crispy or soft corn or wheat tortilla that is folded or rolled and stuffed with a mixture of cheese, lettuce, and tomato', rating: 5 },\n    { text: 'Hot dog', price: '$50', src: 'hotdog.jpg', type: 'non-veg', description: 'A dish consisting of a grilled or steamed sausage served in the slit of a partially sliced bun also used as a wiener', rating: 3 },\n    { text: 'Fried chicken', price: '$19', src: 'friedchicken.jpg', type: 'non-veg', description: 'Chicken pieces coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried', rating: 4 },\n    { text: 'Donuts', price: '$5', src: 'donuts.jpg', type: 'veg', description: 'A kind of ring-shaped snack food popular in many countries, which are usually deep fried from flour doughs', rating: 3 },\n    { text: 'Baguette', price: '$7', src: 'baguette.jpg', type: 'veg', description: 'French bread shaped like a long, thin loaf with a crisp and crunchy crust made using flour, yeast and water', rating: 4 },\n    { text: 'Soft drink', price: '$3', src: 'softdrink.jpg', type: 'veg', description: 'Flavored drinks usually with nutritive and/or intense sweeteners with other permitted food additives', rating: 5 },\n    { text: 'Bacon', price: '$12', src: 'bacon.jpg', type: 'non-veg', description: 'Salt-cured pork made from various cuts, typically the belly or less fatty parts of the back eaten as a side dish', rating: 3 },\n    { text: 'Chips', price: '$13', src: 'chips.jpg', type: 'veg', description: 'A small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off also served as an appetizer', rating: 4 },\n    { text: 'Noodles', price: '$11', src: 'noodles.jpg', type: 'veg', description: 'A cooked egg-and-flour paste, generally distinguished from pasta by its elongated ribbonlike form', rating: 3 },\n];\n\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/listData.ts?");

/***/ }),

/***/ "./Samples/listview/virtualization/App.vue":
/*!*************************************************!*\
  !*** ./Samples/listview/virtualization/App.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_b620f11a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b620f11a */ \"./Samples/listview/virtualization/App.vue?vue&type=template&id=b620f11a\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/listview/virtualization/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_b620f11a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b620f11a&lang=css */ \"./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_b620f11a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/listview/virtualization/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-popups */ \"./node_modules/@syncfusion/ej2-popups/index.js\");\n/* harmony import */ var _listData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listData */ \"./Samples/listview/virtualization/listData.ts\");\n\n\n\n\n\n\nlet commonData = [];\nlet dataSource = {};\nlet endTime = undefined;\nlet startTime = undefined;\nlet liElement = undefined;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n      'ejs-listview': _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_0__.ListViewComponent,\n      'ejs-dropdownlist': _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListComponent\n    },\n    beforeCreate: function() {\n        commonData =_listData__WEBPACK_IMPORTED_MODULE_4__.virtualizationData;\n        [\n            [1010, \"data1\"],\n            [5010, \"data5\"],\n            [10010, \"data10\"],\n            [25010, \"data25\"]\n        ].forEach(ds => {\n            let data = commonData.slice();\n            let index;\n            let spyIndex;\n            for (let i = 10; i <= ds[0]; i++) {\n                while (index === spyIndex) {\n                    index = parseInt((Math.random() * 10).toString(), 10);\n                }\n                data.push({\n                    name: data[index].name,\n                    icon: data[index].icon,\n                    imgUrl: data[index].imgUrl,\n                    id: i.toString()\n                });\n                spyIndex = index;\n            }\n            dataSource[ds[1]] = data;\n        });\n    },\n    data: function() {\n        return {\n            listData: dataSource.data1,\n            cssClass: 'e-list-template',\n            header: true,\n            title: \"Contacts\",\n            fields: {\n                text: \"name\"\n            },\n            height: 500,\n            enableUi: true,\n            ddlData: [{\n                    value: \"1\",\n                    text: \"1k\"\n                },\n                {\n                    value: \"5\",\n                    text: \"5k\"\n                },\n                {\n                    value: \"10\",\n                    text: \"10k\"\n                },\n                {\n                    value: \"25\",\n                    text: \"25k\"\n                }\n            ],\n            ddlField: {\n                text: \"text\",\n                value: \"value\"\n            }\n        };\n    },\n\n    methods: {\n        onActionComplete: function() {\n            endTime = new Date();\n            document.getElementById(\"time\").innerText =\n                endTime.getTime() - startTime.getTime() + \" ms\";\n        },\n        onActionBegin: function() {\n            startTime = new Date();\n            liElement = document.getElementById(\"ui-list\");\n\n            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice) {\n                liElement.classList.add(\"ui-mobile\");\n            }\n\n            (0,_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__.createSpinner)({\n                target: liElement\n            });\n        },\n        onChange: function(e) {\n            (0,_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__.showSpinner)(liElement);\n            startTime = new Date();\n            this.$refs.list.ej2Instances.dataSource = dataSource[\"data\" + e.value];\n            this.$refs.list.dataBind();\n            endTime = new Date();\n            document.getElementById(\"time\").innerText =\n                endTime.getTime() - startTime.getTime() + \" ms\";\n            (0,_syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__.hideSpinner)(liElement);\n        }\n    },\n    provide: {\n        listview: [_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_0__.Virtualization]\n    }\n});\n\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/listview/virtualization/App.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./Samples/listview/virtualization/App.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?");

/***/ }),

/***/ "./Samples/listview/virtualization/App.vue?vue&type=template&id=b620f11a":
/*!*******************************************************************************!*\
  !*** ./Samples/listview/virtualization/App.vue?vue&type=template&id=b620f11a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_b620f11a__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_b620f11a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=b620f11a */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=template&id=b620f11a\");\n\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?");

/***/ }),

/***/ "./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css":
/*!*********************************************************************************************!*\
  !*** ./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b620f11a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=b620f11a&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b620f11a_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b620f11a_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b620f11a_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_b620f11a_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=template&id=b620f11a":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=template&id=b620f11a ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-lg-8 control-section virtualization\" }\nconst _hoisted_2 = { class: \"e-list-wrapper e-list-avatar\" }\nconst _hoisted_3 = [\"src\"]\nconst _hoisted_4 = [\"src\"]\nconst _hoisted_5 = { class: \"e-list-content\" }\nconst _hoisted_6 = { class: \"col-lg-4 property-section\" }\nconst _hoisted_7 = {\n  id: \"property\",\n  title: \"Properties\"\n}\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"width\":\"50%\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"userselect\" }, \"Load data\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = { style: {\"width\":\"50%\",\"padding-right\":\"10px\"} }\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"width\":\"50%\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"userselect\" }, \"Time taken\")\n  ]),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"width\":\"50%\",\"padding-right\":\"10px\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"padding-left\":\"10px\"} }, [\n      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", { id: \"time\" }, \"0 ms\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"This sample demonstrates the default functionalities of UI virtualization. Scroll list item to experience UI virtualization. \")\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" UI virtualization is an optimization technique to avoid unnecessarily constructing and rendering objects for list items by loading only visible list items in a view port. This helps improve ListView performance when loading a large number of items. The list items are updated dynamically while users scroll the list. The virtualization can be enabled by using the \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"code\", null, [\n      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n        target: \"_blank\",\n        class: \"code\",\n        href: \"https://ej2.syncfusion.com/vue/documentation/api/list-view#enablevirtualization\"\n      }, \"enableVirtualization\")\n    ]),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" API in Listview. \")\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_listview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-listview\")\n  const _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" ListView element \"),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_listview, {\n        id: \"ui-list\",\n        ref: \"list\",\n        dataSource: _ctx.listData,\n        showHeader: _ctx.header,\n        fields: _ctx.fields,\n        headerTitle: _ctx.title,\n        height: _ctx.height,\n        cssClass: _ctx.cssClass,\n        enableVirtualization: _ctx.enableUi,\n        actionComplete: $options.onActionComplete,\n        actionBegin: $options.onActionBegin,\n        template: 'gTemplate'\n      }, {\n        gTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ data }) => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n            (data.imgUrl == undefined)\n              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", {\n                  key: 0,\n                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['e-avatar e-avatar-circle ' + data.icon + ' showUI'])\n                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.icon), 3 /* TEXT, CLASS */))\n              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true),\n            (data.imgUrl !== undefined)\n              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", {\n                  key: 1,\n                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['e-avatar e-avatar-circle ' + data.icon + ' hideUI'])\n                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.icon), 3 /* TEXT, CLASS */))\n              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true),\n            (data.imgUrl !== undefined)\n              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n                  key: 2,\n                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['e-avatar e-avatar-circle showUI']),\n                  src: data.imgUrl\n                }, null, 8 /* PROPS */, _hoisted_3))\n              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true),\n            (data.imgUrl == undefined)\n              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n                  key: 3,\n                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['e-avatar e-avatar-circle hideUI']),\n                  src: data.imgUrl\n                }, null, 8 /* PROPS */, _hoisted_4))\n              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1 /* TEXT */)\n          ])\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"dataSource\", \"showHeader\", \"fields\", \"headerTitle\", \"height\", \"cssClass\", \"enableVirtualization\", \"actionComplete\", \"actionBegin\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_7, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", null, [\n            _hoisted_8,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_9, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                  id: \"ddl\",\n                  dataSource: _ctx.ddlData,\n                  fields: _ctx.ddlField,\n                  index: \"0\",\n                  change: $options.onChange,\n                  placeholder: \"Select a Range\",\n                  popupHeight: \"200px\"\n                }, null, 8 /* PROPS */, [\"dataSource\", \"fields\", \"change\"])\n              ])\n            ])\n          ]),\n          _hoisted_10\n        ])\n      ])\n    ]),\n    _hoisted_11,\n    _hoisted_12\n  ]))\n}\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=b620f11a&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/listview/virtualization/App.vue?vue&type=style&index=0&id=b620f11a&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"1078bb4e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-lists-vue-samples/./Samples/listview/virtualization/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"listview/virtualization/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_lists_vue_samples"] = self["webpackChunkej2_lists_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/listview/virtualization/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;