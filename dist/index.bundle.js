"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: monospace, sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 80%;\\r\\n  margin: 80px auto 0 auto;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: -2px 2px 5px 2px #d7d7d7;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: auto;\\r\\n  padding: 20px;\\r\\n  margin: 0 0 5px 0;\\r\\n  border-bottom: 2px solid #aeaeae;\\r\\n}\\r\\n\\r\\n.header .icon {\\r\\n  width: 30px;\\r\\n  color: #808080;\\r\\n  margin: 10px 0 0 0;\\r\\n}\\r\\n\\r\\n#task {\\r\\n  border: none;\\r\\n  font-size: 20px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 410px) {\\r\\n  #task {\\r\\n    width: 50vw;\\r\\n  }\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  text-align: left;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.item-drag {\\r\\n  background: #fff;\\r\\n  margin: 20px;\\r\\n  padding: 20px;\\r\\n  border-radius: 3px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.item #new-item {\\r\\n  width: 100%;\\r\\n  font-size: 20px;\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.item .enter-icon {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  color: #808080;\\r\\n  margin: 10px 15px 0 0;\\r\\n  transform: rotate(-270deg);\\r\\n}\\r\\n\\r\\n.item-container {\\r\\n  border-bottom: 2px solid #aeaeae;\\r\\n}\\r\\n\\r\\n.hint {\\r\\n  border: 1px solid #ffc49a;\\r\\n  background: #feffb4;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  border: 1px solid #ffa5a5;\\r\\n  background: #ffe7e7;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  width: auto;\\r\\n  justify-content: space-between;\\r\\n  font-size: 20px;\\r\\n  padding: 20px;\\r\\n  border-bottom: 2px solid #aeaeae;\\r\\n}\\r\\n\\r\\n.task > i {\\r\\n  color: #808080;\\r\\n  margin: 0 15px 0 0;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  width: auto;\\r\\n  color: #808080;\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.clear-completed {\\r\\n  background: #f1eeee;\\r\\n  color: #808080;\\r\\n  margin: auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.clear-completed h3 {\\r\\n  width: fit-content;\\r\\n  font-size: 20px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.clear-completed h3:hover {\\r\\n  color: #000;\\r\\n  transform: scale(1.2, 1.2);\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/todo.js */ \"./src/module/todo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\nconst tasks = document.querySelector('.task-items');\r\nconst refresh = document.querySelector('#refersh');\r\nconst clearAll = document.querySelector('#clear');\r\nconst addNewTask = document.querySelector('#new-item');\r\nconst enter = document.querySelector('#enter');\r\nconst enterKey = document.querySelector('#new-item');\r\n\r\nlet todos = JSON.parse(localStorage.getItem('todos')) || [];\r\n\r\n// save to local storage.\r\nconst saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));\r\n\r\n// delete task function.\r\nconst deleteTask = (e) => {\r\n  if (e.target.classList.contains('fa-trash')) {\r\n    e.target.parentElement.remove();\r\n    const newTasks = todos.filter((elem) => +elem.index !== +e.target.parentElement.id);\r\n    const updateTasks = newTasks.map((elem, index) => {\r\n      elem.index = index + 1;\r\n      return elem;\r\n    });\r\n    saveTodos(updateTasks);\r\n    todos = updateTasks;\r\n    (0,_module_todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)();\r\n  }\r\n};\r\ntasks.addEventListener('click', deleteTask);\r\n\r\n// editing task function.\r\nconst editing = (event) => {\r\n  if (event.target.type === 'text' && event.key === 'Enter') {\r\n    const targetedElem = event.target.parentElement.parentElement;\r\n    todos.filter((e) => +e.index === +targetedElem.id);\r\n    todos[targetedElem.id - 1].description = event.target.value;\r\n    saveTodos(todos);\r\n  }\r\n};\r\n\r\ntasks.addEventListener('keypress', editing);\r\ntasks.addEventListener('change', _module_todo_js__WEBPACK_IMPORTED_MODULE_0__.updateChanges);\r\n\r\n// referesh on click refereshing button function.\r\nrefresh.addEventListener('click', () => {\r\n  window.location.reload();\r\n});\r\n\r\nclearAll.addEventListener('click', () => (0,_module_todo_js__WEBPACK_IMPORTED_MODULE_0__.clearAllCompleted)());\r\n\r\n// add new task function.\r\nconst addTask = () => {\r\n  if (!addNewTask.value) return;\r\n  const index = todos.length + 1;\r\n  const description = addNewTask.value;\r\n  let completed;\r\n  todos = [...todos, new _module_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(index, description, completed)];\r\n  saveTodos(todos);\r\n  (0,_module_todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)();\r\n  addNewTask.value = '';\r\n};\r\n\r\nenter.addEventListener('click', () => addTask());\r\nenterKey.addEventListener('keyup', (e) => {\r\n  if (e.keyCode === 13) {\r\n    addTask();\r\n  }\r\n});\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  (0,_module_todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)();\r\n  addTask();\r\n});\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/module/todo.js":
/*!****************************!*\
  !*** ./src/module/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted),\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo),\n/* harmony export */   \"updateChanges\": () => (/* binding */ updateChanges)\n/* harmony export */ });\nclass Todo {\r\n  constructor(index, description, completed = true) {\r\n    this.index = index;\r\n    this.description = description;\r\n    this.completed = completed;\r\n  }\r\n}\r\n\r\n// display tasks function.\r\nfunction displayTodo() {\r\n  const todos = JSON.parse(localStorage.getItem('todos')) || [];\r\n  const tasks = document.querySelector('.task-items');\r\n  tasks.innerHTML = todos.map((todo) => ` \r\n      <div id=\"${todo.index}\" class=\"task item\">\r\n        <div class=\"check\">\r\n            <input id=\"${todo.index}\" class=\"checkbox\" type=\"checkbox\" name=\"checkbox\" ${!todo.completed ? '' : 'checked'} />\r\n            <input id=\"task\" type='text' class=\" ${!todo.completed ? '' : 'checked'} \" value=\"${todo.description}\" />\r\n        </div>\r\n        <i id=\"ellips-btn\" class=\"fa-solid fa-ellipsis-vertical ellips hidden\"></i>\r\n        <i id=\"trash\" class=\"fa-solid fa-trash trash\"></i>\r\n    </div>\r\n      `).join('');\r\n}\r\nfunction updateChanges(event) {\r\n  const todos = JSON.parse(localStorage.getItem('todos')) || [];\r\n  const saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));\r\n  if (event.target.checked) {\r\n    event.target.nextElementSibling.classList.add('checked');\r\n    todos[event.target.id - 1].completed = true;\r\n    saveTodos(todos);\r\n    displayTodo();\r\n  } else {\r\n    event.target.nextElementSibling.classList.remove('checked');\r\n    todos[event.target.id - 1].completed = false;\r\n    saveTodos(todos);\r\n    displayTodo();\r\n  }\r\n}\r\n// clear all completed function.\r\nfunction clearAllCompleted() {\r\n  const saveTodos = (elem) => localStorage.setItem('todos', JSON.stringify(elem));\r\n  const todos = JSON.parse(localStorage.getItem('todos')) || [];\r\n  const uncompletedTasks = todos.filter((element) => element.completed !== true);\r\n  const newTasks = uncompletedTasks.map((elem, index) => {\r\n    elem.index = index + 1;\r\n    return elem;\r\n  });\r\n  saveTodos(newTasks);\r\n  window.location.reload();\r\n}\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/module/todo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);