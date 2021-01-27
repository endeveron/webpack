/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/analytics.js ***!
  \**************************/
eval("function createAnalytics() {\n  var counter = 0;\n  var isDestroyed = false;\n\n  var onClickListener = function onClickListener(e) {\n    return counter++;\n  };\n\n  document.addEventListener('click', onClickListener);\n  return {\n    destroy: function destroy() {\n      document.removeEventListener('click', onClickListener);\n      isDestroyed = true;\n    },\n    getClicks: function getClicks() {\n      return isDestroyed ? 'Analytics was destroyed' : counter;\n    }\n  };\n}\n\nwindow.analytics = createAnalytics();\n\n//# sourceURL=webpack://webpack-tut/./src/analytics.js?");
/******/ })()
;