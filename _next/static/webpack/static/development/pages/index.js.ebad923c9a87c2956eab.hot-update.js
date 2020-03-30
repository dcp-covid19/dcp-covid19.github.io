webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DCPLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPLogo */ "./components/DCPLogo.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\alecg\\projects\\dcp-covid19.github.io\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LINKS = [{
  label: 'Home',
  href: 'https://covid19.distributed.computer'
}, {
  label: 'Researcher',
  href: 'https://covid19.apps.distributed.computer'
}, {
  label: 'Worker',
  href: 'https://dcp.work'
}];

var Header = function Header(_ref) {
  var activeLink = _ref.activeLink,
      _ref$hideDivider = _ref.hideDivider,
      hideDivider = _ref$hideDivider === void 0 ? false : _ref$hideDivider;
  return __jsx("header", {
    className: "main-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "container-fluid p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_DCPLogo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "ml-4 mr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-md-6 my-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "main-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, LINKS.map(function (_ref2) {
    var label = _ref2.label,
        href = _ref2.href;
    return __jsx("li", {
      className: "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("a", {
      key: label,
      href: href,
      className: "mr-4 header-link ".concat(activeLink === label ? 'active' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, label));
  }))), __jsx("ul", {
    className: "main-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, LINKS.map(function (_ref3) {
    var label = _ref3.label,
        href = _ref3.href;
    return __jsx("li", {
      className: "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx("a", {
      key: label,
      href: href,
      className: "mr-4 header-link ".concat(activeLink === label ? 'active' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, label));
  }))))), !hideDivider && __jsx("div", {
    className: "colored-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 23
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.ebad923c9a87c2956eab.hot-update.js.map