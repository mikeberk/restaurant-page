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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _shop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.png */ \"./src/shop.png\");\n\n\n\n\nconst contactLoad = () => {\n    const contactDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'container');\n    const contactHeader = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'CONTACT US');\n    const infoDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'info-div');\n\n    // location info\n    const locationDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'location-div');\n    const locationInfo = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'LOCATION');\n    const streetP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', '2800 S Lamar Blvd');\n    const cityP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'Austin, TX 78704');\n    const phoneP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', '(512) 1111-2222');\n    locationDiv.appendChild(locationInfo);\n    locationDiv.appendChild(streetP);\n    locationDiv.appendChild(cityP);\n    locationDiv.appendChild(phoneP);\n\n    // shop hours info\n    const hoursDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'hours-div');\n    const hoursInfo = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'CAFE HOURS');\n    const weekdayP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'Wed-Fri 7:00a-2p');\n    const weekendP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'Sat & Sun 9:00a-2p');\n    const closedP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'Closed Mon & Tues');\n    hoursDiv.appendChild(hoursInfo);\n    hoursDiv.appendChild(weekdayP);\n    hoursDiv.appendChild(weekendP);\n    hoursDiv.appendChild(closedP);\n\n    // contact email info\n    const emailDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'email-div');\n    const emailP = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'We can be reached via email at: info@roydonkhaus.com');\n    emailDiv.appendChild(emailP);\n\n    // bottom image\n    const shopImg = new Image();\n    shopImg.src = _shop_png__WEBPACK_IMPORTED_MODULE_2__;\n    shopImg.classList.add('contact-img');\n\n    // add elements to div\n    contactDiv.appendChild(contactHeader);\n    contactDiv.appendChild(infoDiv);\n    infoDiv.appendChild(locationDiv);\n    infoDiv.appendChild(hoursDiv);\n    infoDiv.appendChild(emailDiv);\n    contactDiv.appendChild(shopImg);\n\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild)\n    }\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n\n\n\nconst pageContent = document.getElementById('content');\nconst tabBar = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', null, 'tab-bar');\nconst pageTitle = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('h1', `Roy Donk's Haus of Coffee`);\nconst tabDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', null, 'tab-div');\nconst spacer = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', null, 'spacer');\nconst homeBtn = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', 'Home');\nconst menuBtn = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', 'Menu');\nconst contactBtn = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('button', 'Contact Us');\nconst content = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.createHtmlElement)('div', null, 'content');\n\ntabBar.appendChild(pageTitle);\ntabBar.appendChild(tabDiv);\ntabDiv.appendChild(homeBtn);\ntabDiv.appendChild(menuBtn);\ntabDiv.appendChild(contactBtn);\ntabBar.appendChild(spacer);\npageContent.appendChild(tabBar);\npageContent.appendChild(content);\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nmenuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nhomeBtn.addEventListener('click', _page_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n\nconst menuLoad = () => {\n    const menuDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'container');\n\n    const menuHeader = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'MENU');\n    const menuItems = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'menu-items');\n\n    // create a new menu card item\n    function createMenuItem(itemName, description, cost) {\n        let menuItem = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', null, 'menu-item');\n        let itemTitle = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', itemName, 'menu-item-title');\n        let itemDescription = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', description, 'menu-item-desc');\n        let itemCost = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', '$' + cost, 'menu-item-cost');\n\n        menuItem.appendChild(itemTitle);\n        menuItem.appendChild(itemDescription);\n        menuItem.appendChild(itemCost);\n\n        return menuItem;\n    }\n\n    // array to store menu elements\n    let menuArr = [];\n\n    const espresso = createMenuItem('Espresso', 'A double shot of espresso', '3');\n    const cap = createMenuItem('Cappuccino', 'Espresso + milk. Whole milk or oat milk avaliable', '4');\n    const latte = createMenuItem('Latte', 'Espresso + milk. Whole milk or oat milk avaliable. Served hot or iced', '4');\n    const hcLatte = createMenuItem('Honey Cardamom Latte', 'Espresso + milk with a house made honey cardamom syrup. Whole milk or oat milk avaliable. Served hot or iced', '5');\n    const matchaLatte = createMenuItem('Matcha Latte', 'Matcha + milk. Whole milk or oat milk avaliable. Served hot or iced', '4');\n    const pourOver = createMenuItem('Pourover', 'Any of our single origin roasts brewed with a Kalita wave', '5');\n    \n    menuDiv.appendChild(menuHeader);\n    menuDiv.appendChild(menuItems);\n\n    menuArr.push(espresso);\n    menuArr.push(cap);\n    menuArr.push(latte);\n    menuArr.push(hcLatte);\n    menuArr.push(matchaLatte);\n    menuArr.push(pourOver);\n\n    // add menu items to div and add animation class\n    function addMenuItem (element, index) {\n        menuItems.appendChild(element);\n        setTimeout(() => element.classList.add(\"animate\"), index * 100);\n    }\n\n    menuArr.forEach(addMenuItem);\n\n    /*\n    menuItems.appendChild(espresso);\n    menuItems.appendChild(cap);\n    menuItems.appendChild(latte);\n    menuItems.appendChild(hcLatte);\n    menuItems.appendChild(matchaLatte);\n    menuItems.appendChild(pourOver);\n    */\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild)\n    }\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _coffee_house_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coffee-house.jpeg */ \"./src/coffee-house.jpeg\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _kalita_wave_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kalita-wave.jpeg */ \"./src/kalita-wave.jpeg\");\n/* harmony import */ var _coffee_sur_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coffee-sur.jpeg */ \"./src/coffee-sur.jpeg\");\n/* harmony import */ var _shop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.png */ \"./src/shop.png\");\n\n\n\n\n\n\n\nconst pageLoad = () => {\n    const element = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, 'container');\n    const imgDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, 'image-div');\n    const shopContainer = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, 'shop-container');\n\n    const shopImage = new Image();\n    shopImage.src = _shop_png__WEBPACK_IMPORTED_MODULE_5__;\n    shopImage.classList.add(\"shop-img\");\n\n    const heroImage = new Image();\n    heroImage.src = _coffee_house_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    heroImage.classList.add(\"hero-img\");\n\n    const kalitaImage = new Image();\n    kalitaImage.src = _kalita_wave_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    kalitaImage.classList.add(\"kalita-img\");\n\n    const surImage = new Image();\n    surImage.src = _coffee_sur_jpeg__WEBPACK_IMPORTED_MODULE_4__;\n    surImage.classList.add(\"sur-img\");\n\n\n    const para = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', `The tastiest coffee this side of the Colgate Comedy Hour. Come visit us at the corner of Doumar and 1st.`);\n\n    element.appendChild(shopContainer);\n    shopContainer.appendChild(shopImage);\n    shopContainer.appendChild(para);\n    element.appendChild(imgDiv);\n    imgDiv.appendChild(heroImage);\n    imgDiv.appendChild(kalitaImage);\n    imgDiv.appendChild(surImage);\n\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild) {\n        // change this due to listener being on main js file\n        _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild)\n    }\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(element);\n    // menuBtn.addEventListener('click', menuLoad);\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nconst createHtmlElement = (tag, text, className) => {\n    let newElement = document.createElement(tag);\n    if (text) {\n        newElement.textContent = text;\n    }\n    if (className) {\n        newElement.classList.add(className);\n    }\n    return newElement;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/utilities.js?");

/***/ }),

/***/ "./src/coffee-house.jpeg":
/*!*******************************!*\
  !*** ./src/coffee-house.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eecb314632fd00c48f36.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/coffee-house.jpeg?");

/***/ }),

/***/ "./src/coffee-sur.jpeg":
/*!*****************************!*\
  !*** ./src/coffee-sur.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43a2a4faff292d219955.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/coffee-sur.jpeg?");

/***/ }),

/***/ "./src/kalita-wave.jpeg":
/*!******************************!*\
  !*** ./src/kalita-wave.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86351a835cea9e8fd98b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/kalita-wave.jpeg?");

/***/ }),

/***/ "./src/shop.png":
/*!**********************!*\
  !*** ./src/shop.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"307edc07205fcc78ea2a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/shop.png?");

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;