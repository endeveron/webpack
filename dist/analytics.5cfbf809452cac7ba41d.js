/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
eval("function createAnalytics() {\r\n  let counter = 0\r\n  let isDestroyed = false\r\n  const onClickListener = e => counter++\r\n  document.addEventListener('click', onClickListener)\r\n\r\n  return {\r\n    destroy() {\r\n      document.removeEventListener('click', onClickListener)\r\n      isDestroyed = true\r\n    },\r\n    getClicks() {\r\n      return isDestroyed ? 'Analytics was destroyed' : counter\r\n    }\r\n  }\r\n}\r\n\r\nwindow.analytics = createAnalytics()\n\n//# sourceURL=webpack:///./analytics.js?");
/******/ })()
;