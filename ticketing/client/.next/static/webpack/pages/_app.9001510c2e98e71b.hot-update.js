"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((param)=>{\n    let { currentUser } = param;\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"auth/signin\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map((param)=>{\n        let { label, href } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"nav-link\",\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/fnxmw6c6yp/Microscervices/ticketing/client/pages/components/header.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, undefined)\n        }, href, false, {\n            fileName: \"/Users/fnxmw6c6yp/Microscervices/ticketing/client/pages/components/header.js\",\n            lineNumber: 11,\n            columnNumber: 20\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"navbar-brand\",\n                children: \" App Name\"\n            }, void 0, false, {\n                fileName: \"/Users/fnxmw6c6yp/Microscervices/ticketing/client/pages/components/header.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"/Users/fnxmw6c6yp/Microscervices/ticketing/client/pages/components/header.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fnxmw6c6yp/Microscervices/ticketing/client/pages/components/header.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fnxmw6c6yp/Microscervices/ticketing/client/pages/components/header.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsK0RBQWU7UUFBQyxFQUFDQyxXQUFXLEVBQUM7SUFDekIsTUFBTUMsUUFBUTtRQUNWLENBQUNELGVBQWU7WUFBQ0UsT0FBTztZQUFXQyxNQUFNO1FBQWE7UUFDdEQsQ0FBQ0gsZUFBZTtZQUFDRSxPQUFPO1lBQVdDLE1BQU07UUFBYTtRQUN0REgsZUFBZTtZQUFDRSxPQUFPO1lBQVlDLE1BQU07UUFBYztLQUMxRCxDQUNJQyxPQUFPQyxDQUFBQSxhQUFjQSxZQUNyQkMsSUFBSTtZQUFDLEVBQUNKLEtBQUssRUFBRUMsSUFBSSxFQUFDO1FBQ2YscUJBQU8sOERBQUNJO1lBQWNDLFdBQVc7c0JBQzdCLDRFQUFDVCxrREFBSUE7Z0JBQUNTLFdBQVc7Z0JBQVlMLE1BQU1BOzBCQUM5QkQ7Ozs7OztXQUZPQzs7Ozs7SUFLcEI7SUFDSixxQkFDSSw4REFBQ007UUFBSUQsV0FBVzs7MEJBQ1osOERBQUNULGtEQUFJQTtnQkFBQ0ksTUFBSztnQkFBSUssV0FBVzswQkFBZ0I7Ozs7OzswQkFDMUMsOERBQUNFO2dCQUFJRixXQUFXOzBCQUNaLDRFQUFDRztvQkFBR0gsV0FBVzs4QkFDVlA7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanM/MmY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7Y3VycmVudFVzZXJ9KSA9PiB7XG4gICAgY29uc3QgbGlua3MgPSBbXG4gICAgICAgICFjdXJyZW50VXNlciAmJiB7bGFiZWw6ICdTaWduIFVwJywgaHJlZjogJ2F1dGgvc2lnbnVwJ30sXG4gICAgICAgICFjdXJyZW50VXNlciAmJiB7bGFiZWw6ICdTaWduIEluJywgaHJlZjogJ2F1dGgvc2lnbmluJ30sXG4gICAgICAgIGN1cnJlbnRVc2VyICYmIHtsYWJlbDogJ1NpZ24gT3V0JywgaHJlZjogJ2F1dGgvc2lnbm91dCd9LFxuICAgIF1cbiAgICAgICAgLmZpbHRlcihsaW5rQ29uZmlnID0+IGxpbmtDb25maWcpXG4gICAgICAgIC5tYXAoKHtsYWJlbCwgaHJlZn0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9eyduYXYtaXRlbSd9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17J25hdi1saW5rJ30gaHJlZj17aHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXsnbmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodCd9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPXsnbmF2YmFyLWJyYW5kJ30+IEFwcCBOYW1lPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCd9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eyduYXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjdXJyZW50VXNlciIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwibGlua0NvbmZpZyIsIm1hcCIsImxpIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/header.js\n"));

/***/ })

});