"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate-gifts";
exports.ids = ["pages/api/generate-gifts"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate-gifts.js":
/*!*************************************!*\
  !*** ./pages/api/generate-gifts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { priceMin, priceMax, gender, age, hobbies } = req.body;\n    const prompt = generatePrompt(priceMin, priceMax, gender, age, hobbies);\n    console.log(prompt);\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(priceMin, priceMax, gender, age, hobbies) {\n    return `suggest 3 Christmas gift ideas between ${priceMin}$ and ${priceMax}$ for a ${age} years old ${gender} that is into ${hobbies}.`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtZ2lmdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsSUFBSUM7QUFDdEI7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRztJQUNyQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsT0FBTyxFQUFFLEdBQUdOLElBQUlPO0lBQ3pELE1BQU1DLFNBQVNDLGVBQWVQLFVBQVVDLFVBQVVDLFFBQVFDLEtBQUtDO0lBRS9ESSxRQUFRQyxJQUFJSDtJQUVaLE1BQU1JLGFBQWEsTUFBTWIsT0FBT2MsaUJBQWlCO1FBQy9DQyxPQUFPO1FBQ1BOLFFBQVFBO1FBQ1JPLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUFmLElBQUlnQixPQUFPLEtBQUtDLEtBQUs7UUFBRUMsUUFBUVAsV0FBV1EsS0FBS0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0M7SUFBSztBQUNqRTtBQUVBLFNBQVNiLGVBQWVQLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsT0FBTztJQUM5RCxPQUFPLENBQUMsdUNBQXVDLEVBQUVKLFNBQVMsTUFBTSxFQUFFQyxTQUFTLFFBQVEsRUFBRUUsSUFBSSxXQUFXLEVBQUVELE9BQU8sY0FBYyxFQUFFRSxRQUFRLENBQUMsQ0FBQztBQUN6SSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYXRlZ2lmdGlkZWFzLy4vcGFnZXMvYXBpL2dlbmVyYXRlLWdpZnRzLmpzP2ZiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc3QgeyBwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzIH0gPSByZXEuYm9keTtcbiAgY29uc3QgcHJvbXB0ID0gZ2VuZXJhdGVQcm9tcHQocHJpY2VNaW4sIHByaWNlTWF4LCBnZW5kZXIsIGFnZSwgaG9iYmllcyk7XG5cbiAgY29uc29sZS5sb2cocHJvbXB0KTtcblxuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IHByb21wdCxcbiAgICB0ZW1wZXJhdHVyZTogMC42LFxuICAgIG1heF90b2tlbnM6IDIwNDgsXG4gIH0pO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzKSB7XG4gIHJldHVybiBgc3VnZ2VzdCAzIENocmlzdG1hcyBnaWZ0IGlkZWFzIGJldHdlZW4gJHtwcmljZU1pbn0kIGFuZCAke3ByaWNlTWF4fSQgZm9yIGEgJHthZ2V9IHllYXJzIG9sZCAke2dlbmRlcn0gdGhhdCBpcyBpbnRvICR7aG9iYmllc30uYDtcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJwcmljZU1pbiIsInByaWNlTWF4IiwiZ2VuZGVyIiwiYWdlIiwiaG9iYmllcyIsImJvZHkiLCJwcm9tcHQiLCJnZW5lcmF0ZVByb21wdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-gifts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate-gifts.js"));
module.exports = __webpack_exports__;

})();